<template>
  <div class="select-question-type">
    <ul>
      <li v-for="control in controls" :key="control.type" @click="handleClick(control.type)">
        <i :class="control.iconClass"></i>
        {{ control.label }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'QuestionSelect',
  data () {
    return {
      controls: [
        { type: 'text', label: '文本问题', iconClass: 'el-icon-question' },
        { type: 'singleSelect', label: '单选问题', iconClass: 'el-icon-success' },
        { type: 'mutiSelect', label: '多选问题', iconClass: 'el-icon-circle-plus' },
        { type: 'score', label: '分值问题', iconClass: 'el-icon-info' }
      ]
    }
  },
  methods: {
    handleClick (type) {
      this.$emit('add-question', type)
    }
  }
}
</script>
<style scoped>
.select-question-type {
  height: 100%;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  text-align: left;
  padding-left: 1rem;
  list-style: none;
  line-height: 40px;
}
li:hover {
  cursor: pointer;
  background-color: #ffffff;
}
li i {
  margin-right: 1rem;
}
</style>
