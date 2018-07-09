<template>
  <div class="edit-questionaire">
    <el-form ref="form" :model="questionaire">
      <el-form-item required>
        <el-input v-model="questionaire.title" placeholder="请输入问卷标题" :disabled="!editable"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="questionaire.starter" placeholder="开头欢迎语" :disabled="!editable"></el-input>
      </el-form-item>
      <el-form-item class="question" v-for="(question, index) in questionaire.questions" :key="question.qid">
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
import TextQuestion from './TextQuestion'
import ScoreQuestion from './ScoreQuestion'
import SingleSelectQuestion from './SingleSelectQuestion'
import MultiSelectQuestion from './MultiSelectQuestion'
export default {
  name: 'EditQuestionaire',
  components: {
    'text-question': TextQuestion,
    'score-question': ScoreQuestion,
    'single-select-question': SingleSelectQuestion,
    'multi-select-question': MultiSelectQuestion
  },
  props: [
    'questionaire',
    'editable'
  ]
}
</script>
<style scoped>
  .question {
    background: #ffffff;
  }
  .question p {
    margin: 0;
    padding: 0;
    padding-left: 1rem;
    font-weight: 500;
    border-bottom: 1px dashed #333333;
  }
</style>
