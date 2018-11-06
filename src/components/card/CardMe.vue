<template>
  <el-card>
    <h1 class="me-author-name">码农的小窝</h1>
    <div class="me-author-description">
      <span><i class="el-icon-location-outline"></i> &nbsp;广东&深圳</span>
    </div>
    <div class="me-author-tool">
      <i @click="showTool(gitee)" :title="gitee.title" class="me-icon-github"></i>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'CardMe',
    data() {
      return {
        gitee: {
          title: 'gitee',
          message: '<a target="_blank" href="https://github.com/qinnnn/wblog-vue.git">https://github.com/qinnnn/wblog-vue.git</a>'
        }
      }
    },
    methods: {
      showTool(tool) {
        this.$message({
          duration: 0,
          showClose: true,
          dangerouslyUseHTMLString: true,
          message: '<strong>' + tool.message + '</strong>'
        });
      }
    }
  }
</script>

<style scoped>
  .me-author-name {
    text-align: center;
    font-size: 30px;
    border-bottom: 1px solid #5FB878;
  }

  .me-author-description {
    padding: 8px 0;
  }

  .me-icon-job {
    padding-left: 16px;
  }

  .me-author-tool {
    text-align: center;
    padding-top: 10px;
  }

  .me-author-tool i {
    cursor: pointer;
    padding: 4px 10px;
    font-size: 30px;
  }
</style>
