<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="page shop-list">
      <van-button type="primary" block @click="toShop">
        <div class="text-15">BEIJING</div>
        <div class="text-10">北京三里屯门店</div>
        <div class="icon-arrow"><van-image :src="rightArrow"></van-image></div>
      </van-button>
    </div>
    <div class="footer">
      <van-image width="86" height="10" :src="footer"></van-image>
    </div>
  </div>
</template>
<script>
import esAxios from '../../utils/esAxios'
import rightArrow from '../../static/right-arrow.png';
import footer from '../../static/footer.png';
import { Swipe, SwipeItem, Image, Button } from "vant";
export default {
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      rightArrow,
      footer,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  },
  mounted() {
    this.getList();
    this.getBanner();
  },
  methods: {
    toShop() {
      this.$router.push('shop');
    },
    getList() {
      esAxios('/api/v1/shop/list', {}, 'get').then(res => {
        console.log('res :>> ', res);
      })
    },
    getBanner() {
      esAxios('/api/v1/data/list', {}, 'get').then(res => {
        console.log('res :>> ', res);
      })
    }
  }
}
</script>
<style lang="less" scoped>
.shop-list {
  margin-top: 100px;
}
</style>