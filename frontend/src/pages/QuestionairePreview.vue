<template>
  <div class="preview">
    <el-form ref="form" :model="questionaire">
      <el-form-item required>
        <el-input v-model="questionaire.title" placeholder="请输入问卷标题" :disabled="!editable"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="questionaire.starter" placeholder="开头欢迎语" :disabled="!editable"></el-input>
      </el-form-item>
      <el-form-item class="question" v-for="(question, index) in questions" :key="question.qid">
        <p>第{{ index + 1 }}题</p>
        <text-question v-if="question.type==='text'" :question="question" :editable="editable"></text-question>
        <score-question v-if="question.type==='score'" :question="question" :editable="editable"></score-question>
        <single-select-question v-if="question.type==='single-select'" :question="question" :editable="editable"></single-select-question>
        <multi-select-question v-if="question.type==='multi-select'" :question="question" :editable="editable"></multi-select-question>
      </el-form-item>
      <el-form-item>
        <el-input v-model="questionaire.ender" placeholder="结尾感谢语" :disabled="!editable"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import TextQuestion from '../components/TextQuestion'
import ScoreQuestion from '../components/ScoreQuestion'
import SingleSelectQuestion from '../components/SingleSelectQuestion'
import MultiSelectQuestion from '../components/MultiSelectQuestion'
export default {
  name: 'QuestionairePreview',
  components: {
    'text-question': TextQuestion,
    'score-question': ScoreQuestion,
    'single-select-question': SingleSelectQuestion,
    'multi-select-question': MultiSelectQuestion
  },
  data () {
    return {
      editable: false,
      questionaire: {
        title: '关于Element-UI使用状况的调查问卷',
        starter: '关于Element-UI使用状况的调查问卷-开始',
        ender: '关于Element-UI使用状况的调查问卷-结束'
      },
      questions: [
        {
          qid: 1,
          type: 'text',
          title: '你对Element-UI有什么看法？',
          answer: ''
        },
        {
          qid: 2,
          type: 'score',
          title: '给Element-UI打分，你会打多少分？',
          answer: 5
        },
        {
          qid: 3,
          type: 'single-select',
          title: '你觉得Element-UI最显著的特点是什么？',
          answer: { key: 0 },
          options: [
            { key: 0, value: '方便' },
            { key: 1, value: '轻量' },
            { key: 2, value: '美观' }
          ]
        },
        {
          qid: 4,
          type: 'multi-select',
          title: '你觉得Element-UI有哪些有点（多选）？',
          select: [],
          options: [
            { key: 0, value: '方便' },
            { key: 1, value: '轻量' },
            { key: 2, value: '美观' },
            { key: 3, value: '易用' }
          ]
        }
      ]
    }
  },
  created () {}
}
</script>
<style>
  .preview {
    margin: 1rem 10rem 0;
    padding: 1rem;
    border: 1px solid #666666;
  }
</style>
