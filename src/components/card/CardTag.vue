<template>
  <el-card :body-style="{ padding: '8px 18px' }">
    <div slot="header" class="me-tag-header">
      <span>最热标签</span>
      <a @click="moreTags" class="me-pull-right me-tag-more">查看全部</a>
      <!-- <mu-button @click="moreTags" flat color="primary" class="me-pull-right me-tag-more">查看全部</mu-button> -->
    </div>

    <ul class="me-tag-list">
      <mu-container class="button-wrapper">
      <li class="me-tag-item" v-for="t in tags" :key="t.id">
        
        <!--type="primary"-->
        <!-- <el-button @click="tag(t.id)" size="mini" type="primary" round plain>{{t.tagName}}</el-button> -->
        <mu-button class="button-button" @click="tag(t.id)" round  color="info" plain small>{{t.tagName}}</mu-button>
      </li>
      </mu-container>
    </ul>
  </el-card>
</template>

<script>
  export default {
    name: 'CardTag',
    props: {
      tags: Array
    },
    data() {
      return {}
    },
    methods: {
      moreTags() {
        this.$router.push('/tag/all')
      },
      tag(id) {
        this.$router.push({path: `/tag/${id}`})
      }
    }
  }
</script>

<style scoped>

  .me-tag-header {
    font-weight: 600;
  }

  .me-tag-more {
    font-size: 14px;
    color: #78b6f7;
  }

  .me-tag-list {
    list-style-type: none;
  }

  .me-tag-item {
    display: inline-block;
    padding: 4px;
    font-size: 14px;
    color: #4472c4;
  }

  .me-tag-item a:hover {
    text-decoration: underline;
  }
  .button-wrapper {
    text-align: center;
  }
.button-button{
   padding: 8px;
}
</style>
