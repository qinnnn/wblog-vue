<template>
  <div id="app">
    <router-view/>
    <go-top></go-top>
  </div>
</template>

<script>
  import GoTop from '@/components/gotop/GoTop'

  export default {
    name: 'App',
    components: {GoTop}
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f5f5f5;
    font-weight: 400;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    line-height: 1.5;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: none 86ms ease-out;
  }

  a:hover {
    color: #4472c4;
  }

  .me-area {
    background-color: #fff;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
  }

  body {
    position: relative;
  }

  .me-pull-right {
    float: right;
  }
  .me-list-li{
    position: relative;
    background: #fff;
    margin: 0 0 10px 0;
    padding: 20px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
    /* border-radius: 0 20px !important; */
    border-radius: 4px;
    height: 193px;
  }
  .me-list-thumbnail{
    position: relative;
    float: left;
    max-width: 150px;
    height: auto;
    clear: both;
    margin: 1px 20px 0 0;
    padding: 0px;
    overflow: hidden;
    transition: max-width .5s;
    border: 0px solid #ddd;
    border-radius: 4px;
  }
  .me-list-thumbnail_span{
    position: absolute;
    top: 0;
    left: 0;
    filter: alpha(opacity=70);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background: #009688;
    line-height: 25px;
    color: #fff !important;
    line-height: 29px;
    padding: 0 10px;
    cursor: pointer;
    width:48px;
    height:29px;
  }
  .me-list-header{
    border: 0;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
  .me-list-header h2{
    margin: 0 0 5px 0;
    border: 0;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    outline: 0;
    padding: 5px;
    vertical-align: baseline;
  }
  .me-list-header h2 a{
    cursor: pointer;
    text-decoration: none;
    color: #555;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    transition: all .2s;
  }
  .me-list-header h2 a:hover{
    color: rgb(95, 184, 120);
  }
  .me-list-content{
    vertical-align: baseline;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0 0 0 5px;
  }
  .me-list-content .archive-content{
    min-height: 20px;
    max-height: 80px;
    margin-bottom: 10px;
    color: #777;
    line-height: 1.6;
    white-space: initial;
    }
  .me-list-content .title-l{
    position: absolute;
    background: #009688;
    top: 20px;
    left: -1px;
    width: 5px;
    height: 30px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .articleImg{
    float: left;
    width: 150px;
    height: 150px;
    /* width: auto; */
    /* height: auto; */
    max-width: 100%;
    border: 0;
    display: block;
    margin-right: auto;
    margin-left: auto;
    transition: all 0.6s;
    cursor: pointer;
  }
  .articleImg:hover{
    transform: scale(1.1);
  }
  .me-list-content .entry-meta{
    position: absolute;
    bottom: 4px;
    color: #999;
    /* left: 240px; */
    left: inherit;
  }
  .me-list-more{
    position: absolute;
    bottom: 5px;
    right: 10px;
    color: #a6a6a6;
    font-size: 13px;
  }
  
</style>
