<template>
  <div id="login" v-title data-title="登录 - wblog">
    <!--<video preload="auto" class="me-video-player" autoplay="autoplay" loop="loop">
          <source src="../../static/vedio/sea.mp4" type="video/mp4">
      </video>-->

    <div class="me-login-box me-login-box-radius">
      <h1>登录</h1>

      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" help-text="请填写用户名" prop="username" :rules="usernameRules" label-float>
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
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
  export default {
    name: 'Login',
    data() {
      return {
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写用户名'},
          { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码'},
          { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        validateForm: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      clear () {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
        };
      },
      login(formName) {
        let that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            that.$store.dispatch('login', that.userForm).then(() => {
              that.$router.go(-1)
            }).catch((error) => {
              if (error !== 'error') {
                that.$message({message: error, type: 'error', showClose: true});
              }
            })
          } else {
            return false;
          }
        });
      }
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
    width: 300px;
    height: 260px;
    background-color: white;
    margin-top: 150px;
    margin-left: -180px;
    left: 50%;
    padding: 30px;
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
    color: #5FB878 !important;
  }

  .me-login-button {
    text-align: center;
  }

  .me-login-button button {
    width: 100%;
  }

</style>
