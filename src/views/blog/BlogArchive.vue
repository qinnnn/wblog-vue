<template>
  <div v-title :data-title="title">
    
    <el-container>
      

      <el-main class="me-articles" style="position: relative;overflow: inherit;">
        <el-aside class="me-area" style="width:150px;left: -210px;position: absolute;">
        <ul class="me-month-list">
          <li v-for="a in archives" :key="a.year + a.month" class="me-month-item">
            <el-badge :value="a.count">
              <el-button @click="changeArchive(a.year, a.month)" size="small">{{a.year +'年' + a.month + '月'}}
              </el-button>
            </el-badge>
          </li>
        </ul>
      </el-aside>
        <div class="me-month-title">{{currentArchive}}</div>
        <article-scroll-page v-bind="article"></article-scroll-page>
      </el-main>


      <el-aside>
        <card-me class="me-area"></card-me>
        <card-tag :tags="hotTags"></card-tag>
        <card-article cardHeader="最热文章" :articles="hotArticles"></card-article>
        <card-archive cardHeader="文章归档" :archives="archives"></card-archive>
        <card-article cardHeader="最新文章" :articles="newArticles"></card-article>
      </el-aside>


    </el-container>
  </div>
</template>

<script>
  import CardArticle from '@/components/card/CardArticle'
  import CardMe from '@/components/card/CardMe'
  import CardTag from '@/components/card/CardTag'
  import CardArchive from '@/components/card/CardArchive'

  import ArticleScrollPage from '@/views/common/ArticleScrollPage'
  import {listArchives} from '@/api/article'
  import {getArticles, getHotArtices, getNewArtices} from '@/api/article'
  import {getHotTags} from '@/api/tag'

  export default {
    name: "BlogArchive",
    components: {
      'card-article': CardArticle,
      'card-me': CardMe,
      'card-tag': CardTag,
      ArticleScrollPage,
      CardArchive
    },
    data() {
      return {
        hotTags: [],
          hotArticles: [],
          newArticles: [],
          archives: [],
        article: {
          query: {
            month: this.$route.params.month,
            year: this.$route.params.year
          }
        },
        archives: []
      }
    },
    created() {
      this.getHotArtices()
      this.getNewArtices()
      this.getHotTags()
      this.listArchives()
    },
    watch: {
      '$route'() {
        if (this.$route.params.year && this.$route.params.month) {
          this.article.query.year = this.$route.params.year
          this.article.query.month = this.$route.params.month
        }
      }
    },
    computed: {
      title (){
        return this.currentArchive + ' - 文章归档 - wblog'
      },
      currentArchive (){
        if(this.article.query.year && this.article.query.month){
          return `${this.article.query.year}年${this.article.query.month}月`
        }
        return '全部'
      }
    },
    methods: {
      getHotArtices() {
        let that = this
        getHotArtices().then(data => {
          that.hotArticles = data.data
        }).catch(error => {
          if (error !== 'error') {
            that.$message({type: 'error', message: '最热文章加载失败!', showClose: true})
          }
        })
      },
      getNewArtices() {
        let that = this
        getNewArtices().then(data => {
          that.newArticles = data.data
        }).catch(error => {
          if (error !== 'error') {
            that.$message({type: 'error', message: '最新文章加载失败!', showClose: true})
          }
        })
      },
      getHotTags() {
        let that = this
        getHotTags().then(data => {
          that.hotTags = data.data
        }).catch(error => {
          if (error !== 'error') {
            that.$message({type: 'error', message: '最热标签加载失败!', showClose: true})
          }
        })
      },
      listArchives() {
        listArchives().then((data => {
          this.archives = data.data
        })).catch(error => {
          if (error !== 'error') {
            that.$message({type: 'error', message: '文章归档加载失败!', showClose: true})
          }
        })
      },
      changeArchive(year, month) {
        // this.currentArchive = `${year}年${month}月`
        // this.article.query.year = year
        // this.article.query.month = month
        this.$router.push({path: `/archives/${year}/${month}`})
      },
      listArchives() {
        listArchives().then((data => {
          this.archives = data.data
        })).catch(error => {
          that.$message({type: 'error', message: '文章归档加载失败!', showClose: true})
        })
      }
    }
  }
</script>

<style scoped>

  .el-container {
    width: 1100px;
  }

  .el-aside {
    /* position: fixed; */
    /* left: 200px; */
    /* margin-right: 50px; */
    /* width: 150px !important; */
  }

  .el-main {
    padding: 0px;
    line-height: 16px;
  }

  .me-month-list {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    list-style-type: none;
  }

  .me-month-item {
    margin-top: 18px;
    padding: 4px;
    font-size: 18px;
    color: #5FB878;
  }

  .me-order-list {
    float: right;
  }

  .me-month-title {
    margin-left: 4px;
    margin-bottom: 12px;
  }

  .el-aside {
    margin-left: 20px;
    width: 260px;
  }

  .el-main {
    padding: 0px;
    line-height: 16px;
  }

  .el-card {
    border-radius: 0;
  }

  .el-card:not(:first-child) {
    margin-top: 20px;
  }
</style>
