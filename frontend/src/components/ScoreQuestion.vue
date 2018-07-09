<template>
  <div class="score-question">
    <div v-if="!editable">
      <p>{{ question.title }}</p>
      <p>分值： {{ question.answer }}</p>
      <el-slider v-model="question.answer" :step="0.5" :min="0" :max="10" show-stops disabled></el-slider>
    </div>
    <div v-if="editable && isEditing">
      <el-form ref="form" :model="question" :rules="rules">
        <el-form-item prop="title">
          <el-input v-model="question.title" placeholder="请输入问题"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button plain size="small" @click="onSave">保存</el-button>
          <el-button plain size="small" @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="editable && !isEditing">
      <p>{{ question.title }}</p>
      <el-slider v-model="question.answer" :step="0.5" :min="0" :max="10" show-stops disabled></el-slider>
      <div class="edit-buttons">
        <el-button plain size="small" @click="onEdit">编辑</el-button>
        <el-button plain size="small" @click="onDelete">删除</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScoreQuestion',
  props: [
    'editable',
    'question'
  ],
  data () {
    return {
      isEditing: false,
      backUpQuestion: null,
      rules: {
        title: [
          { required: true, message: '请输入问题', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSave () {
      this.backUpQuestion = this.copy(this.question)
      this.isEditing = false
    },
    onCancel () {
      this.question = this.copy(this.backUpQuestion)
      this.isEditing = false
    },
    onEdit () {
      this.isEditing = true
    },
    onDelete () {
      console.log('delete question')
    },
    copy (source) {
      return JSON.parse(JSON.stringify(source))
    }
  },
  created () {
    this.backUpQuestion = this.copy(this.question)
  }
}
</script>
<style scoped>
  .score-question {
    background: #ffffff;
    padding: 0.5rem 0.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    padding: 0;
    margin: 0;
  }
  .el-form-item.is-required {
    margin-bottom: 22px;
  }
</style>
