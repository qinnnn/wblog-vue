<template>
  <el-card class="me-area me-article-flex me-list-li" :body-style="{ padding: '0px' }">
    <div class="me-list-thumbnail" @click="view(id)">
      <img class="articleImg" src="../../assets/img/article.jpg"/>
      <!-- <span class="me-list-thumbnail_span" @click="tag(categoryId)">{{categoryName}}</span> -->
      <mu-button class="me-list-thumbnail_span" @click="tag(categoryId)" color="#009688">{{categoryName}}</mu-button>
      
    </div>
    <header class="me-list-header">
      <h2>
        <!-- <mu-tooltip placement="top" class="background: #009a61;" content="提示信息"> -->
          <a @click="view(id)">{{title}}</a>
        <!-- </mu-tooltip> -->
      </h2>
    </header>

    <div class="me-list-content">
      <div class="archive-content">{{summary}}</div>
      <span class="title-l"></span>
      <span class="entry-meta">
        <span class="me-article-author">
          <i class="me-icon-author"></i>&nbsp;{{nickname}}
        </span>

        <span class="me-article-count">
          <i class="el-icon-view"></i>&nbsp;{{viewNum}}
        </span>
        <span class="me-article-count">
          <i class="me-icon-comment"></i>&nbsp;{{commentNum}}
        </span>
        <el-tag v-for="t in tags" :key="t" size="mini" type="success">{{t}}</el-tag>
      </span>
      <span class="me-list-more">
          <i class="el-icon-time"></i>&nbsp;{{createTime | format}}
        </span>

    </div>



    <!-- <div class="me-article-header">
      
      <a @click="view(id)" class="me-article-title">{{title}}</a>
      <el-button v-if="weight > 0" class="me-article-icon" type="text">置顶</el-button>
      
    </div>
    <div class="me-artile-description">
      {{summary}}
    </div>
    

    <div class="me-list-footer">
	  	

      <el-tag v-for="t in tags" :key="t" size="mini" type="success">{{t}}</el-tag>

      <span class="me-pull-right me-article-count">
	    	<i class="el-icon-time"></i>&nbsp;{{createTime | format}}
	    </span>
    </div> -->
  </el-card>
</template>

<script>
  import {formatTime} from "../../utils/time";

  export default {
    name: 'ArticleItem',
    props: {
      id: Number,
      weight: Number,
      title: String,
      commentNum: Number,
      viewNum: Number,
      summary: String,
      nickname: String,
      tags: Array,
      createTime: String,
      categoryName:String,
      categoryId:Number,
    },
    data() {
      return {
      }
    },
    methods: {
      tag(id) {
        this.$router.push({path: `/tag/${id}`})
      },
      view(id) {
        this.$router.push({path: `/view/${id}`})
      }
    }
  }
</script>

<style scoped>

  .me-article-header {
    /*padding: 10px 18px;*/
    padding-bottom: 10px;
  }

  .me-article-flex{

  }

  .me-article-title {
    font-weight: 600;
  }

  .me-article-icon {
    padding: 3px 6px;
  }

  .me-article-count {
    color: #a6a6a6;
    padding-left: 8px;
    font-size: 13px;
  }

  .me-pull-right {
    float: right;
  }

  .me-artile-description {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .me-article-author {
    color: #a6a6a6;
    font-size: 13px;
  }

  .el-tag {
    margin-left: 6px;
  }

  

</style>
