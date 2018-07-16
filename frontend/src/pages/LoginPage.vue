<template>
  <div class="login">
    <div class="login-title">用户登录</div>
    <el-form label-position="right" ref="userLogin" :rules="rules" :model="user">
      <el-form-item prop="name">
        <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" placeholder="请输入密码" @keyup.enter.native="submitForm('userLogin')"></el-input>
      </el-form-item>
      <el-form-item class="regist-link">
        <p class="regist-link-text">暂无账号，<span @click="regist">立即注册</span></p>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('userLogin')">登录</el-button>
        <el-button @click="resetForm('userLogin')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Api from '../api'
export default {
  name: 'LoginPage',
  data () {
    return {
      user: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Api.login(this.user).then((res) => {
            res = res.data
            if (res.success) {
              this.$store.commit('login', {
                name: res.name,
                id: res.id
              })
              this.$refs[formName].resetFields()
              this.$router.replace({path: this.$route.query.redirect || '/'})
            } else {
              this.$message.error('用户名或密码错误，请重新输入!')
            }
          }).catch((err) => {
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    regist () {
      this.$router.push({ path: '/regist' })
    }
  }
}
</script>
<style scoped>
  .login {
    width: 450px;
    margin-top: 100px;
    background: #fff;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
  .login-title {
    width: 100%;
    font-size: 1.4rem;
    line-height: 60px;
  }
  .el-form {
    padding: 1rem 3rem 2rem;
  }
  .regist-link {
    margin: 0;
    font-size: 0.8rem;
    text-align: right;
  }
  .regist-link-text {
    line-height: 20px;
    margin: 0;
    padding: 0;
    padding-bottom: 0.5rem;
  }
  .regist-link-text span {
    cursor: pointer;
    color: #409EFF;
  }
</style>
