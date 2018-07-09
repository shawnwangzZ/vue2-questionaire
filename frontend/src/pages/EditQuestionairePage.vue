<template>
  <div class="edit">
    <div class="edit-side">
      <!-- <b-nav tabs>
        <b-nav-item href="/add/type">问题控件</b-nav-item>
        <b-nav-item href="/add/outline">问卷大纲</b-nav-item>
      </b-nav> -->
      <el-menu :default-active="$route.path" router mode="horizontal" @select="handleSelect">
        <el-menu-item index="/edit/type">问题控件</el-menu-item>
        <el-menu-item index="/edit/outline">问卷大纲</el-menu-item>
      </el-menu>
      <div class="side-content">
        <router-view @add-question="handleEmit" :questions="questionaire.questions"></router-view>
      </div>
    </div>
    <div class="edit-main">
      <edit-questionaire :questionaire="questionaire" :editable="editable"></edit-questionaire>
    </div>
  </div>
</template>
<script>
import EditQuestionaire from '../components/QuestionaireEdit'
export default {
  name: 'EditQuestionairePage',
  components: {
    'edit-questionaire': EditQuestionaire
  },
  data () {
    return {
      editable: false,
      questionaire: {
        id: 1,
        title: '',
        starter: '',
        ender: '',
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
      },
      questionId: 0
    }
  },
  methods: {
    handleSelect () {
      console.log(this.$route)
    },
    handleEmit () {
      console.log(...arguments)
    }
  },
  created () {
    this.questionId = this.questionaire.questions[this.questionaire.questions.length - 1].qid
  }
}
</script>
<style scoped>
.edit {
  margin: 1rem 1rem 0;
  display: flex;
}
.edit-side {
  margin: 0 2.5%;
  width: 20%;
  min-width: 200px;
}
.edit-side .el-menu {
  background: transparent;
}
.edit-side .el-menu-item {
  width: 50%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: transparent;
}
.edit-side .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
  background: transparent;
}
.side-content {
  width: 100%;
}
.edit-main {
  margin: 0 2.5%;
  width: 70%;
}
</style>
