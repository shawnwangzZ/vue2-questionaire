<template>
  <div class="regist">
    <div class="regist-title">用户注册</div>
    <el-form label-position="right" ref="userRegist" :rules="rules" :model="user">
      <el-form-item prop="name">
        <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="confirm_password">
        <el-input type="password" v-model="user.confirm_password" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="regist('userRegist')">注册</el-button>
        <el-button @click="cancel('userRegist')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Api from '../api'
export default {
  name: 'RegistPage',
  data () {
    let validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        Api.checkNameUseable({ name: value }).then(res => {
          res = res.data
          if (res.find) {
            callback(new Error('用户名已被使用'))
          } else {
            callback()
          }
        })
      }
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.user.confirm_password !== '') {
          this.$refs.userRegist.validateField('confirm_password')
        }
        callback()
      }
    }
    let validateConfirmPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.user.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      user: {
        name: '',
        password: '',
        confirm_password: ''
      },
      rules: {
        name: [
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { min: 6, message: '密码长度至少6位', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        confirm_password: [
          { validator: validateConfirmPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    regist (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Api.register({ name: this.user.name, password: this.user.password }).then(res => {
            res = res.data
            if (res.success) {
              this.$message({
                message: '注册成功',
                type: 'success'
              })
              this.$refs[formName].resetFields()
              this.$router.go(-1)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancel (formName) {
      this.$refs[formName].resetFields()
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .regist {
    width: 450px;
    margin-top: 100px;
    background: #fff;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
  .regist-title {
    width: 100%;
    font-size: 1.4rem;
    line-height: 60px;
  }
  .el-form {
    padding: 1rem 3rem 2rem;
  }
</style>
