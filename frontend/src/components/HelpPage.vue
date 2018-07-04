<template>
  <div id="help">
    <b-card title="常见FAQ">
      <div class="qna">
        <div class="question">问卷使用流程是什么？</div>
        <p class="answer">注册账号->创建问卷->编辑问卷->预览问卷->回收问卷->数据分析</p>
      </div>
    </b-card>
    <b-card title="常见FAQ">
      <div class="qna">
        <div class="question">问卷使用流程是什么？</div>
        <p class="answer">注册账号->创建问卷->编辑问卷->预览问卷->回收问卷->数据分析</p>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'HelpPage'
}
</script>
<style scoped>
  #help {
    margin-top: 20px;
  }
  .card {
    margin: 0 20px;
    border: none;
  }
  .card-body {
    padding: 0;
    border: 1px solid #d3d1d1;
  }
  .card-title {
    height: 30px;
    line-height: 30px;
    background: #e0dfdf;
    padding-left: 20px;
    text-align: left;
    font-size: 1.2rem;
  }
  .qna {
    text-align: left;
    padding-left: 2rem;
  }
  .question {
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 0;
    padding-left: -2rem;
  }
  .question::before {
    content: "Q:";
    display: inline-block;
    width: 2rem;
    text-align: right;
    transform: translate(-2rem);
  }
  .answer {
    font-size: 1rem;
    margin-left: 0;
    padding-left: -2rem;
  }
  .answer::before {
    content: "A:";
    display: inline-block;
    width: 2rem;
    text-align: right;
    transform: translate(-2rem);
    font-size: 1.2rem;
    font-weight: 500;
  }
</style>
