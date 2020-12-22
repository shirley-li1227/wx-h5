<template>
  <div class="page">
    <div class="header">
      <div v-if="detail.status === 1" class="number-info text-white">
        <div class="queuing">
          <span class="queuing-num">10</span><span>人</span>
        </div>
        <div>NUMBER OF PEOPLE IN LINE</div>
        <div>当前排队人数</div>
      </div>
      <div v-if="detail.status === 2" class="number-info text-white">
        <div class="queuing">
          <span class="queuing-num">10</span><span>人</span>
        </div>
        <div>YOU HAVE PASSED THE NUMBER PLEASE QUEUE UP AGAIN</div>
        <div>您已过号，请重新排队取号</div>
      </div>
      <van-image :src="background"></van-image>
    </div>
    <div class="gray-block">
      <div>NUMBER SUCCESSFULLY</div>
      <div>取号成功</div>
      <div class="content">当前排队人数：30人 | 还需等候：10人</div>
    </div>
    <div class="gray-block">
      <div>BUSINESS HOURS</div>
      <div>营业时间</div>
      <div class="content">周一至周日 10：00-22:00</div>
    </div>
    <div class="gray-block">
      <div>ADDRESS</div>
      <div>地址</div>
      <div class="content">北京市朝阳区工人体育场北路2号</div>
    </div>
    <van-button type="primary" block class="bottom-btn">
      <div class="text-15">QUEUING UP</div>
      <div class="text-10">排队取号</div>
      <div class="icon-arrow"><van-image :src="rightArrow"></van-image></div>
    </van-button>
    <div class="footer">
      <van-image width="86" height="10" :src="footer"></van-image>
    </div>
  </div>
</template>
<script>
import esAxios from '../../utils/esAxios'
import { Image, Button } from "vant";
import background from '../../static/shop-background.png';
import rightArrow from '../../static/right-arrow.png';
import footer from '../../static/footer.png';
import '../../utils/vant.less';
export default {
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
  },
  data() {
    return {
      background,
      rightArrow,
      footer,
      detail: {
        status: 2
      }
    }
  },
  mounted() {
    esAxios('/api/v1/shop/1/get', {}, 'get').then(res => {
      console.log('res :>> ', res);
    })
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.header {
  position: relative;
  .number-info {
    position: absolute;
    z-index: 1;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 20px;
    padding: 0 65px;
    box-sizing: border-box;
    .queuing {
      margin-top: 50px;
      margin-bottom: 20px;
      .queuing-num {
        font-size: 36px;
      }
    }
  }
}
.gray-block {
  background-color: #f6f6f6;
  padding: 16px 0;
  margin-top: 7px;
  text-align: center;
  line-height: 20px;
  .content {
    margin-top: 10px;
  }
}
</style>