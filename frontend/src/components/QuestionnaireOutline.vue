<template>
  <div class="questionnaire-outline">
    <ul>
      <li v-for="(question, index) in questions" :key="question.qid">
        <p>{{ index+1 }}、 {{ question.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'QuestionnaireOutline',
  props: [
    'questions'
  ]
}
</script>
<style scoped>
  .questionnaire-outline {
    width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
</style>
