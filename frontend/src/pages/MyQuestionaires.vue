<template>
  <div class="my-questionaire">
    <div class="empty" v-if="questionaires.length==0">
      暂无问卷
    </div>
    <div class="not-empty" v-if="questionaires.length>0">
      <div class="questionaire-list">
        <div class="list-title">我的问卷</div>
        <ul>
          <li v-for="(questionaire, index) in questionaires" :key="questionaire.id" @click="handleClick(index)" :class="{active: index===active}">
            {{ questionaire.title }}
            <el-tag type="info">{{ questionaire.state | toState }}</el-tag>
            <span class="create-date">{{ questionaire.createAt | formatTime }}</span>
          </li>
        </ul>
      </div>
      <div class="questionaire-detail">
        <div class="detail-info">
          <div class="info-title">问卷详情</div>
          <el-row class="info">
            <el-col :span="5">问卷标题:</el-col>
            <el-col :span="19">{{ questionaires[active].title }}</el-col>
          </el-row>
          <el-row class="info">
            <el-col :span="5">问卷简介:</el-col>
            <el-col :span="19">{{ questionaires[active].statement }}</el-col>
          </el-row>
          <el-row class="info">
            <el-col :span="5">创建时间:</el-col>
            <el-col :span="19">{{ questionaires[active].createAt | formatTime }}</el-col>
          </el-row>
        </div>
        <div class="detail-button">
          <div class="button-title">问卷管理</div>
          <el-row class="buttons">
            <el-col :span="6">
              <el-button icon="el-icon-search" @click="toPreview">预览</el-button>
            </el-col>
            <el-col :span="6">
              <el-button icon="el-icon-edit">编辑</el-button>
            </el-col>
            <el-col :span="6">
              <el-button icon="el-icon-share">发布</el-button>
            </el-col>
            <el-col :span="6">
              <el-button icon="el-icon-delete">删除</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Api from '../api'

export default {
  name: 'MyQuestionaires',
  data () {
    return {
      active: 0,
      questionaires: []
    }
  },
  methods: {
    handleClick (index) {
      this.active = index
      clearTimeout(this.timer)
    },
    toPreview () {
      this.$router.push({ path: '/preview' })
    }
  },
  filters: {
    toState: function (value) {
      let state = ''
      switch (value) {
        case 0:
        case '0':
          state = '编辑中'
          break
        case 1:
        case '1':
          state = '已发布'
          break
        case 2:
        case '2':
          state = '已回收'
          break
        default:
          break
      }
      return state
    },
    formatTime: function (value) {
      let d = new Date(value)
      let yy = d.getFullYear()
      let mm = d.getMonth() + 1
      let dd = d.getDate()
      if (mm < 10) {
        mm = '0' + mm
      }
      if (dd < 10) {
        dd = '0' + dd
      }
      return [yy, mm, dd].join('-')
    }
  },
  created () {
    Api.getQuestionaires({userId: this.$store.getters.currentUser.userId}).then((res) => {
      res = res.data
      if (res.success) {
        this.questionaires = res.questionaires
      }
    })
  }
}
</script>
<style scoped>
  .my-questionaire {
    margin: 1rem 1rem 0;
    display: flex;
  }
  .empty, .not-empty {
    width: 100%;
    display: flex;
  }
  .questionaire-list {
    margin: 0 2.5%;
    width: 55%;
    min-width: 200px;
  }
  .list-title {
    line-height: 40px;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    border-bottom: 1px dashed #000000;
  }
  .questionaire-list ul {
    padding: 0 0.5rem;
  }
  .questionaire-list ul li {
    list-style: none;
    line-height: 40px;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  .questionaire-list ul li:hover {
    list-style: none;
    background: #ffffff;
  }
  .questionaire-list ul li:active {
    color: #000000;
  }
  .questionaire-list ul li.active {
    color: cornflowerblue;
  }
  .questionaire-list ul li span.el-tag {
    line-height: 20px;
    height: 20px;
    padding: 0 3px;
  }
  .create-date {
    float: right;
  }
  .questionaire-detail {
    margin: 0 2.5%;
    width: 40%;
  }
  .detail-info, .info-title, .info, .button-title {
    width: 100%;
  }
  .info-title, .button-title {
    height: 40px;
    line-height: 40px;
    background: #bbbbbb;
    font-size: 1.2rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }
  .info {
    padding: 0.5rem 0;
    line-height: 40px;
    border-bottom: 1px dashed #bbbbbb;
  }
  .el-col-5 {
    padding: 0 0.5rem;
    text-align: center;
  }
  .detail-button {
    margin-top: 1rem;
  }
  .el-col-6 {
    text-align: center;
  }
</style>
<style>
  .el-button i, .el-button span {
    display: block;
    line-height: 20px;
  }
</style>
