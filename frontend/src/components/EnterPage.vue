<template>
  <div>
    <b-carousel
      indicators
      img-width="1024"
      img-height="480"
      :interval="4000"
    >
      <b-carousel-slide
        caption="免费简约的问卷系统"
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="简单好用的在线调查网站"
        img-src="https://picsum.photos/1024/480/?image=54"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="多方式创建编辑问卷"
        img-src="https://picsum.photos/1024/480/?image=55"
      ></b-carousel-slide>
    </b-carousel>
    <section>
      <p>
        <span>{{ userNumber | formatNumber }}</span>个用户正在使用
      </p>
      <b-button>创建新问卷</b-button>
    </section>
  </div>
</template>
<script>
export default {
  name: 'EnterPage',
  data () {
    return {
      userNumber: 10145267
    }
  },
  filters: {
    formatNumber: function (number) {
      number = number.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1 ')
      return number
    }
  }
}
</script>
<style scoped>
  section {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    vertical-align: middle;
  }
  section p {
    margin: 0;
  }
  section p span {
    font-size: 1.2rem;
    margin: 0 10px;
  }
</style>
