<template>
  <div class="enter">
    <el-carousel :interval="4000" :height="slideHeight+'px'">
      <el-carousel-item v-for="item in slides" :key="item.alt">
        <img :src="item.src" :alt="item.alt" />
        <h3>{{ item.caption }}</h3>
      </el-carousel-item>
    </el-carousel>
    <section>
      <p><span>{{ userNumber }}</span>个用户正在使用</p>
      <el-button class="new-button" type="info" plain>创建新问卷</el-button>
    </section>
  </div>
</template>
<script>
import Api from '../api'
export default {
  name: 'StartPage',
  data () {
    return {
      slideHeight: (window.innerWidth - 8) * 640 / 1366 > 640 ? 640 : (window.innerWidth - 8) * 640 / 1366,
      slides: [
        { src: 'https://picsum.photos/1024/480/?image=52', alt: 'slide image1 slot', caption: '免费简约的问卷系统' },
        { src: 'https://picsum.photos/1024/480/?image=54', alt: 'slide image2 slot', caption: '简单好用的在线调查网站' },
        { src: 'https://picsum.photos/1024/480/?image=55', alt: 'slide image3 slot', caption: '多方式创建编辑问卷' }
      ]
    }
  },
  computed: {
    userNumber () {
      return this.$store.getters.totalCount
    }
  },
  mounted () {
    window.onresize = () => {
      this.slideHeight = (window.innerWidth - 8) * 640 / 1366 > 640 ? 640 : (window.innerWidth - 8) * 640 / 1366
    }
    Api.getCount().then((res) => {
      res = res.data
      this.$store.commit('setTotalUser', {
        count: res.count
      })
    })
  }
}
</script>
<style>
  .enter {
    margin: 1rem 1rem 0;
    text-align: center;
  }
  .el-carousel__container {
    width: 100%;
    height: auto;
  }
  .el-carousel__item {
    position: absolute;
    width: 100%;
    height: auto;
  }
  .el-carousel__item img {
    width: 100%;
    max-width: 1366px;
    height: auto;
  }
  .el-carousel__item h3 {
    position: absolute;
    width: 100%;
    bottom: 60px;
    line-height: 30px;
    color: #fefefe;
    text-align: center;
    font-size: 1.5rem;
  }
  section {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    vertical-align: middle;
    height: 40px;
    line-height: 40px;
  }
  section p {
    margin: 0 5rem;
  }
  section p span {
    font-size: 1.2rem;
    margin: 0 10px;
  }
  .new-button.el-button span {
    line-height: 1;
  }
</style>
