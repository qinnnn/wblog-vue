<template>
  <div id="register" v-title data-title="注册 - wblog">
    <!--<video preload="auto" class="me-video-player" autoplay="autoplay" loop="loop">
          <source src="../../static/vedio/sea.mp4" type="video/mp4">
      </video>-->

    <div class="me-login-box me-login-box-radius">
      <h1>wblog 注册</h1>

      <!-- <el-form ref="userForm" :model="userForm" :rules="rules">
        <el-form-item prop="account">
          <el-input placeholder="用户名" v-model="userForm.account"></el-input>
        </el-form-item>

        <el-form-item prop="nickname">
          <el-input placeholder="昵称" v-model="userForm.nickname"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="密码" v-model="userForm.password"></el-input>
        </el-form-item>

        <el-form-item size="small" class="me-login-button">
          <el-button type="primary" @click.native.prevent="register('userForm')">注册</el-button>
        </el-form-item>
      </el-form> -->
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" help-text="请填写用户名" prop="username" :rules="usernameRules" label-float>
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="昵称" help-text="请填写昵称" prop="nickname" :rules="nicknameRules" label-float>
          <mu-text-field v-model="validateForm.nickname" prop="nickname"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" help-text="请填写密码" prop="password" :rules="passwordRules" label-float>
            <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>


    </div>
  </div>
</template>

<script>
  import {register} from '@/api/login'

  export default {
    name: 'Register',
    data() {
      return {
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写用户名'},
          { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        nicknameRules: [
          { validate: (val) => !!val, message: '必须填写昵称'},
          { validate: (val) => val.length >= 3, message: '昵称长度大于3'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码'},
          { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        validateForm: {
          username: '',
          nickname: '',
          password: '',
        }
      }
    },
    methods: {
      // register(formName) {
      //   let that = this
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {

      //       that.$store.dispatch('register', that.userForm).then(() => {
      //         that.$message({message: '注册成功 快写文章吧', type: 'success', showClose: true});
      //         that.$router.push({path: '/'})
      //       }).catch((error) => {
      //         if (error !== 'error') {
      //           that.$message({message: error, type: 'error', showClose: true});
      //         }
      //       })

      //     } else {
      //       return false;
      //     }
      //   });

      // },
      submit () {
        this.$refs.form.validate().then((result) => {
          if(result){
            let dataFrom={'account':this.validateForm.username,'nickname':this.validateForm.nickname,"password":this.validateForm.password}
            // console.log(dataFrom)
            this.$store.dispatch('register', dataFrom).then(() => {
                this.$router.go(-1)
              }).catch((error) => {
                if (error !== 'error') {
                  this.$message({message: error, type: 'error', showClose: true});
                }
              })
            }
        });
      },
      clear () {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          nickname: '',
          password: '',
        };
      },

    }
  }
</script>

<style scoped>
  #login {
    min-width: 100%;
    min-height: 100%;
  }

  .me-video-player {
    background-color: transparent;
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: block;
    position: absolute;
    left: 0;
    z-index: 0;
    top: 0;
  }

  .me-login-box {
    position: absolute;
    /* width: 300px; */
    /* height: 320px; */
    background-color: #eee;
    margin-top: 150px;
    margin-left: -250px;
    left: 50%;
    padding: 30px 100px;
  }

  .me-login-box-radius {
    border-radius: 10px;
    box-shadow: 0px 0px 1px 1px rgba(161, 159, 159, 0.1);
  }

  .me-login-box h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    vertical-align: middle;
  }

  .me-login-design {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }

  .me-login-design-color {
    color: #4472c4 !important;
  }

  .me-login-button {
    text-align: center;
  }

  .me-login-button button {
    width: 100%;
  }

</style>
