<template>
  <div v-title :data-title="title">
    <el-container class="me-area">
      <el-main class="me-main">
        <el-steps class="me-log-box" :space="100"  direction="vertical">
                 <el-step title="项目创建" status="process"  icon="el-icon-time" description="2018年9月1日：项目创建"></el-step>
                 <el-step title="框架搭建" status="process" icon="el-icon-time" description="前端搭建vue脚手架——后端新建spring boot项目"></el-step>
                 <el-step title="流程分析" status="process" icon="el-icon-time" description="项目流程和功能模块分析"></el-step>
                 <el-step title="数据库创建" status="process" icon="el-icon-time" description="创建所需要的数据库"></el-step>
                 <el-step title="前端组件" status="process" icon="el-icon-time" description="前端引入element ui、vuex、axios、store和router等组件"></el-step>
                 <el-step title="后端引入开源框架" status="process" icon="el-icon-time" description="后端引入renrenfast开源框架，并将接口与前端对接"></el-step>
                 <el-step title="登录模块" status="process" icon="el-icon-time" description="前端登录界面——后端登录api，token的保存和检验"></el-step>
                 <el-step title="发布文章" status="process" icon="el-icon-time" description="前端引入makdown编辑器，后台提供文章新建保存和修改保存的接口"></el-step>
                 <el-step title="文章列表" status="process" icon="el-icon-time" description="首页列表、热门列表和最新列表等"></el-step>
                 <el-step title="日志" status="process" icon="el-icon-time" description="添加网站日志"></el-step>
                 <el-step title="文章分类" status="process" icon="el-icon-time" description="添加文章根据标签和类型的分类"></el-step>
                 <el-step title="后续" status="process" icon="el-icon-time" description="正在施工中..."></el-step>
              </el-steps>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Log',
    data() {
      return {}
    },
    computed: {
      title (){
        return '日志 - wblog'
      }
    }
  }
</script>

<style scoped>
  .el-container {
    width: 700px;
  }

  .me-main {
    overflow: hidden;
  }

  .me-log-box {
    margin-left: 30%;
    margin-top: 20px;
  }

</style>
