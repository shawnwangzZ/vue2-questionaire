<template>
  <div class="edit">
    <div class="edit-side">
      <div class="side-menu">
        <ul>
          <li :class="{active: index===0}" @click="setIndex(0)">问题控件</li>
          <li :class="{active: index===1}" @click="setIndex(1)">问卷大纲</li>
        </ul>
      </div>
      <div class="side-content">
        <question-select v-if="index===0" v-on:add-question="addQuestion($event)"></question-select>
        <questionaire-outline v-if="index===1" :questions="questionaire.questions"></questionaire-outline>
      </div>
    </div>
    <div class="edit-main">
      <edit-questionaire :questionaire="questionaire" :editable="editable"></edit-questionaire>
    </div>
  </div>
</template>
<script>
import QuestionSelect from '../components/QuestionSelect'
import QuestionaireOutline from '../components/QuestionaireOutline'
import EditQuestionaire from '../components/QuestionaireEdit'
export default {
  name: 'EditQuestionairePage',
  components: {
    'question-select': QuestionSelect,
    'questionaire-outline': QuestionaireOutline,
    'edit-questionaire': EditQuestionaire
  },
  data () {
    return {
      index: 0,
      editable: true,
      questionaire: {
        title: '',
        starter: '',
        ender: '',
        questions: []
      }
    }
  },
  methods: {
    handleSelect () {
      console.log(this.$route)
    },
    handleEmit () {
      console.log(...arguments)
    },
    setIndex (index) {
      this.index = index
    },
    addQuestion ($event) {
      // console.log($event)
      this.$message({
        message: '添加' + $event + '类型的问题'
      })
    }
  }
}
</script>
<style scoped>
.edit {
  margin: 1rem 1rem 0;
  display: flex;
}
.edit-side {
  margin: 0 0.5% 0 2.5%;
  width: 22%;
  min-width: 200px;
  background: transparent;
}
.side-menu {
  width: 100%;
}
.side-menu ul {
  padding: 0;
  margin: 0;
  display: flex;
}
.side-menu ul li {
  list-style: none;
  display: inline-block;
  width: 50%;
  text-align: center;
  color: #909399;
  height: 30px;
  line-height: 30px;
  padding: 0.5rem 0;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.side-menu ul li:hover {
  background: #ffffff;
}
.side-menu ul li.active {
  color: #303133;
  border-bottom: 2px solid #409EFF;
}
.side-content {
  width: 100%;
}
.edit-main {
  margin: 0 2.5%;
  width: 70%;
}
</style>
