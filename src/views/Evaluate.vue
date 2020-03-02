<template>
  <div class="evauate-div">
    <div class="evauate-header">
      <div class="grade-div" >
        <h1>3.9</h1>
        <h3>综合评分</h3>
        <p>高于周围商家69.2%</p>
      </div>
      <div class="star-div">
        <div class="star">
          服务态度：
          <span></span>
        </div>
        <div class="star">
          服务态度：
          <span></span>
        </div>
        <p>
          送达时间：
          <span>44分钟</span>
        </p>
      </div>
    </div>
    <div class="evauate-nav">
      <div class="nav-btn">
        <Button :size="buttonSize" type="primary">全部57</Button>
        <Button :size="buttonSize" type="default">满意40</Button>
        <Button :size="buttonSize" type="dashed">不满意17</Button>
      </div>
      <p>只看由有内容的评价</p>
    </div>
    <div class="evauate-main" v-for="item in data" :key='item.id'>
        <div class="main-img">
          <img :src="item.avatar" alt />
        </div>
        <div class="main-right">
          <div>
            <span>{{item.username}}</span>
            <span>{{item.rateTime}}</span>
          </div>
          <p class="star">
            <span></span> <label v-show="item.deliveryTime>0">{{item.deliveryTime}}分钟送达</label>
          </p>
          <p >{{item.text}}</p>
         <div  v-show="!(item.recommend=='')"><span> 推荐：</span>
          <p v-for="items in item.recommend" :key='items.id'>{{items}}</p>
         </div>
         
        </div>
    </div>
  </div>
</template>

<script>
import {getrating} from '../api/apis';
export default {
  data() {
    return {
      valueHalf: 4,
      data:{}

    }
   } ,
  created(){
           getrating().then((res)=>{
               console.log(res.data.data)
               this.data=res.data.data
           })
       }
};
</script>

<style lang="less" scoped>
.evauate-div {
  background: #f3f6f6;
  .evauate-header {
    background: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    height: 150px;
    .grade-div {
      text-align: center;
      width: 40%;
      height: 100px;
      border-right: 1px solid #ccc;
      h1 {
        color: #ff6600;
      }
      p {
        color: #ccc;
      }
    }
    .star-div {
      width: 60%;
      padding: 10px;
      line-height: 26px;
      .star {
        span {
          display: inline-block;
          width: 100px;
          height: 20px;
          vertical-align: middle;
          background: url("../assets/imgs/star24_on@2x.png") repeat 0px 0px;
        }
      }
    }
  }
  .evauate-nav {
    margin-top: 20px;
    background: #fff;
    padding: 20px;
    padding-bottom: 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .nav-btn {
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
      button {
        margin-right: 10px;
      }
    }
    p {
      font-size: 16px;
      line-height: 40px;
    }
  }
  .evauate-main {
      padding: 20px;
      display: flex;
      border-bottom: 1px solid #ccc;
      padding-bottom:10px; 
      justify-content: space-between;
      .main-img {
        width: 50px;
        img {
          text-align: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      .main-right {
        flex: 1;
        padding: 0 10px;
        div {
          display: flex;
          justify-content: space-between;
        }
        .star {
          span {
            display: inline-block;
            width: 80px;
            height: 20px;
            vertical-align: middle;
            background: url("../assets/imgs/star24_on@2x.png") repeat 0px 0px;
          }
        }
      }
  }
}
</style>