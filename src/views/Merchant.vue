<template>
  <div class="seller">
    <div class="seller-head">
      <div class="head-top">
        <div class="top-left">
          <h2>{{data.name}}</h2>
          <p>
            <Rate allow-half v-model="valueHalf" />
            <span>({{data.ratingCount}})</span>
            <span>月销售{{data.sellCount}}单</span>
          </p>
        </div>
        <div class="top-right">
          <p>
            <Icon type="md-heart" />
            <i class="md-heart"></i>
          </p>
          <h3>已收藏</h3>
        </div>
      </div>
      <div class="head-but">
        <div>
          <p>起送价</p>
          <p>
            <span>{{data.minPrice}}</span>元
          </p>
        </div>
        <div>
          <p>商家配送</p>
          <p>
            <span>{{data.deliveryPrice}}</span>元
          </p>
        </div>
        <div style="border-left:1px solid #ccc;text-indent: 16px;">
          <p>平均配送时间</p>
          <p>
            <span>{{data.deliveryTime}}</span>分钟
          </p>
        </div>
      </div>
    </div>
    <div class="seller-active">
      <h3>公告与活动</h3>
      <div class="active-main">
        <p>{{data.bulletin}}</p>
        <h3 v-for="item in data.supports" :key="item.id">
          <img
            style="width: 22px; margin-bottom: -5px;"
            v-show="item.type==1"
            src="../assets/imgs/discount_1@2x.png"
            alt
          />
          <img
            style="width: 22px;margin-bottom: -5px;"
            v-show="item.type==2"
            src="../assets/imgs/decrease_1@2x.png"
            alt
          />
          {{item.description}}
        </h3>
      </div>
    </div>
    <div class="seller-view">
      <h3>商家实景</h3>
      <div class="view-img">
        <div v-for="items in data.pics" :key="items.id">
          <img :src="items" alt />
        </div>
      </div>
    </div>
    <div class="seller-msg">
         <h3>商家信息</h3>
         <p v-for="items in data.infos" :key="items.id">
            {{items}}

         </p>
    </div>
  </div>
</template>

<script>
import { getseller } from "../api/apis";
export default {
  data() {
    return {
      data: {},
      valueHalf: 4
    };
  },
  created() {
    getseller().then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.seller {
  background: rgb(243, 246, 246);
  .seller-head {
    padding: 15px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    .head-top {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      .top-right {
        text-align: center;
        .ivu-icon {
          color: red;
          font-size: 40px;
        }
      }
    }
    .head-but {
      padding: 20px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      div {
        p {
          font-size: 18px;
          span {
            font-size: 30px;
          }
        }
      }
    }
  }
  .seller-active {
    margin-top: 35px;
    background: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 20px 15px;
    .active-main {
      p {
        padding: 10px;
        color: red;
        font-size: 16px;
      }
      h3 {
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .seller-view {
    margin-top: 35px;
    background: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 20px 15px;
    .view-img {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 32%;
        height: 120px;
        margin-bottom: 10px;
        img {
          width: 100%;
          height: 120px;
        }
      }
    }
  }
  .seller-msg{
    margin: 35px 0;
    background: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 20px 15px;
    h3{
        margin-bottom: 10px;
    }
    p{
        border-top: 1px solid #ccc;
        padding: 10px;
        font-size: 16px;
    }
  }
}
</style>