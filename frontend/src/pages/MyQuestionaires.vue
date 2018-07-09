<template>
  <div class="my-questionaire">
    <div class="questionaire-list">
      <div class="list-title">我的问卷</div>
      <ul>
        <li v-for="(questionaire, index) in questionaires" :key="questionaire.id" @click="handleClick(index)" :class="{active: index===active}">
          <router-link to="/mine/questionaire">
            {{ index+1 }} {{ questionaire.detail.title }}
            <el-tag type="info">{{ questionaire.state | toState }}</el-tag>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="questionaire-detail">
      <div class="title">问卷内容</div>
      <router-view v-loading="loading"
                   element-loading-text="拼命加载中"
                   element-loading-spinner="el-icon-loading"
                   element-loading-background="rgba(0, 0, 0, 0.8)"
                   :questionaire="questionaires[active].detail"
                   :editable="false"
      ></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyQuestionaires',
  data () {
    return {
      active: 0,
      loading: true,
      timer: null,
      questionaires: [
        {
          id: 1,
          state: 0,
          detail: {
            title: '关于Element-UI使用的调查问卷',
            starter: '感谢您使用Element-UI，为了让我们了解您使用中的问题，以便更好的优化，邀请您填写本次问卷。',
            ender: '感谢您抽出宝贵的时间填写本次问卷。祝您生活愉快！',
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
        {
          id: 2,
          state: 2,
          detail: {
            title: '关于angular4的调查问卷关于angular4的调查问卷',
            starter: '',
            ender: ''
          }
        },
        {
          id: 3,
          state: 1,
          detail: {
            title: '关于vue使用的调查问卷',
            starter: '',
            ender: ''
          }
        },
        {
          id: 4,
          state: 0,
          detail: {
            title: '关于framework7使用的调查问卷',
            starter: '',
            ender: ''
          }
        }
      ]
    }
  },
  methods: {
    handleClick (index) {
      this.active = index
      this.loading = true
      clearTimeout(this.timer)
      this.circling()
    },
    circling () {
      this.timer = setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  },
  filters: {
    toState: function (value) {
      let state = '编辑中'
      switch (value) {
        case 0:
        case '0':
          state = '已回收'
          break
        case 1:
        case '1':
          state = '已发布'
          break
        case 2:
        case '2':
          state = '已保存'
          break
        default:
          break
      }
      return state
    }
  },
  created () {
    this.circling()
  },
  beforeDestory () {
    clearTimeout(this.timer)
  }
}
</script>
<style scoped>
  .my-questionaire {
    margin: 1rem 1rem 0;
    display: flex;
  }
  .questionaire-list {
    margin: 0 2.5%;
    width: 20%;
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
    line-height: 30px;
    margin-bottom: 0.5rem;
  }
  .questionaire-list ul li:hover {
    list-style: none;
    background: #ffffff;
  }
  .questionaire-list ul li a {
    display: block;
    cursor: pointer;
    color: #000000;
  }
  .questionaire-list ul li a:visited,
  .questionaire-list ul li a:active {
    color: #000000;
  }
  .questionaire-list ul li.active a {
    color: cornflowerblue;
  }
  .questionaire-list ul li.active a:visited,
  .questionaire-list ul li.active a:active {
    color: cornflowerblue;
  }
  .questionaire-list ul li a span.el-tag {
    float: right;
    line-height: 30px;
    height: 30px;
    padding: 0 5px;
  }
  .questionaire-detail {
    margin: 0 2.5%;
    width: 70%;
  }
</style>
