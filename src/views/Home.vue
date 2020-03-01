<template>
  <div class="home">
     <div class="header">
    <div class="header-div" :style="{backgroundImage:'url('+data.avatar+')'}">
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
                <option value v-for="(val,index) in data.supports" :key="index">{{val.description}}</option>
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
    <div class="shopcar-div">购物车页脚</div>
  </div>
</template>

<script>
import { getseller } from "../api/apis";
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getseller().then(res => {
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .header{
      height: 270px;
  }
  .header-div {
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
   .roter-link-div {
    height: 60px;
    display: flex;
    justify-content: space-around;
  }
 

  .shopcar-div {
    position: fixed; //脱离文档流-相对于浏览器绝对定位
    height: 60px;
    width: 100%;
    bottom: 0; //永远挨着浏览器底边
    background-color: #141c27;
  }
}
</style>