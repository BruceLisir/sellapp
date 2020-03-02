<template>
  <div class="home">
    <div class="header">
      <div class="models">
        <div class="main">
          <div class="img-div">
            <img :src="data.avatar" alt />
          </div>
          <div class="header-right">
            <h2>
              <img src="../assets/imgs/brand@2x.png" alt />
              <span>{{data.name}}</span>
            </h2>
            <p>{{data.description}}</p>
            <h2>
              <img src="../assets/imgs/decrease_1@2x.png" alt />
              <span>
                <select>
                  <option
                    value
                    v-for="(val,index) in data.supports"
                    :key="index"
                  >{{val.description}}</option>
                </select>
              </span>
            </h2>
          </div>
        </div>
        <div class="header-footer">
          <img src="../assets/imgs/bulletin@2x.png" alt />
          <span>{{data.bulletin}}</span>
        </div>
      </div>
      <div class="header-div" :style="{backgroundImage:'url('+data.avatar+')'}">
      </div>
      <Menu mode="horizontal" active-name="1" class="roter-link-div">
        <MenuItem name="1">
          <router-link to="/goods">商品</router-link>
        </MenuItem>
        <MenuItem name="2">
          <router-link to="/evaluate">评价</router-link>
        </MenuItem>
        <MenuItem name="4">
          <router-link to="/merchant">商家</router-link>
        </MenuItem>
      </Menu>
    </div>
    <router-view></router-view>
    <transition name="slide-fade">
      <div class="shopborad" v-show="showshopcar"> <Shopcar> </Shopcar></div>
        
    
    </transition>
     <div class="shopcar-div" @click="showshopcar=!showshopcar">
      <div class="img">
        <img src="../assets/imgs/shopcar.jpg.png" alt />
      </div>
      <div class="text">
        <span style="color:#fff">￥{{totalprice}}</span> |
        <span>另需配送费￥4元</span>
      </div>
      <div class="clickbtn">￥20元起送</div>
    </div>
  </div>
    
</template>

<script>
import { getseller } from "../api/apis";
//引入购物车组件
import Shopcar from "./Shopcar";
export default {
  data() {
    return {
      data: {},
      showshopcar: false,
    };
  },
  //购物车组件
  components:{
    Shopcar
  },
  created() {
    getseller().then(res => {
      this.data = res.data.data;
    });
  },
  methods:{
      goodslist(){
      return this.$store.state.goodslist
    } 
  },
  computed:{
     totalprice(){
      let total=0;
      this.$store.state.goodslist.forEach(obj => {
        obj.foods.forEach(val=>{
          if(val.num>0){ total += val.num*val.price}
         
        })
      });
      return total;
    },
  }, 
 
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .header {
    height: 270px;
  }
  .models {
    width: 100%;
    height: 200px;
    background: rgba(0, 0, 0, 0.5);
     position: absolute;
    top: 0;
    left: 0;
    .main {
      padding: 20px;
      display: flex;
      justify-content: space-around;
      .img-div {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .header-right {
        flex: 1;
        margin-left: 15px;
        color: #fff;
        font-size: 16px;
        h2 {
          img {
            vertical-align: middle;
            height: 20px;
          }
          span {
            vertical-align: middle;
            font-size: 16px;
            margin-left: 10px;
            select {
              height: 20px;
              line-height: 20px;
              color: #fff;
              background: none;
              border: none;
              option {
                font-size: 16px;
                background: #ccc;
              }
            }
          }
        }
      }
    }
    .router-view {
      display: flex;
      flex: 1;
    }
    .header-footer {
      height: 60px;
      width: 100%;
      background: rgba(50, 50, 50, 0.7);
      padding: 20px;
      color: #fff;
      vertical-align: middle;
      span {
        font-size: 16px;
        margin-left: 10px;
        display: inline-block;
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .header-div {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   
  }
  .roter-link-div {
    height: 60px;
    display: flex;
    justify-content: space-around;
  }
 
  .shopborad {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 60px;
  }
  .shopcar-div {
    position: fixed; //脱离文档流-相对于浏览器绝对定位
    height: 60px;
    width: 100%;
    bottom: 0; //永远挨着浏览器底边
    background-color: #141c27;
    display: flex;
    justify-content: center;
    .img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #141c27;
      position: absolute;
      top: -20px;
      left: 20px;
      img {
        width: 60px;
        height: 60px;
        color: orangered;
        position: absolute;
        top: 5px;
        left: 5px;
      }
    }
    .text {
      width: 80%;
      height: 100%;
      text-align: center;
      line-height: 60px;
      color: rgb(154, 157, 159);
      font-size: 16px;
      text-indent: 48px;
    }
    .clickbtn {
      width: 20%;
      height: 100%;
      color: rgb(154, 157, 159);
      font-size: 16px;
      font-weight: bolder;
      background: orangered;
      text-align: center;
      line-height: 60px;
    }
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
 /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(200px);
  opacity: 0;
}
</style>