<template>
  <div class="detail">
    <div class="detail-info">
      <div class="info-title">问卷详情</div>
      <el-row class="info">
        <el-col :span="5">问卷标题:</el-col>
        <el-col :span="19">{{ questionaire.title }}</el-col>
      </el-row>
      <el-row class="info">
        <el-col :span="5">问卷简介:</el-col>
        <el-col :span="19">{{ questionaire.statement }}</el-col>
      </el-row>
      <el-row class="info">
        <el-col :span="5">创建时间:</el-col>
        <el-col :span="19">{{ questionaire.createAt | formatTime }}</el-col>
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
</template>
<script>
export default {
  name: 'QuestionaireDetail',
  props: [
    'questionaire'
  ],
  methods: {
    toPreview () {
      const qid = this.questionaire.id
      this.$router.push({ name: 'preview', params: { id: qid } })
    }
  },
  filters: {
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
  }
}
</script>
<style scoped>
  .detail, .detail-info, .info-title, .info, .button-title {
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
