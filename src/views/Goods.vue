<template>
  <div class="goods-div">
    <div class="goods-left">
     <ul class="content">
          <ul  v-for="(val,index) in goodslist" :key="index" @click="clicktitle(index)" :class="{selected:index==curindex}">
            <li>
            <img style="width: 16px" v-show="val.type==1" src="../assets/imgs/special_1@2x.png" alt="">
            <img style="width: 16px;" v-show="val.type==2" src="../assets/imgs/decrease_1@2x.png" alt="">
            <span>{{val.name}}</span></li>
      </ul>
     </ul>
    </div>
    <div class="goods-right">
     <ul class="content">
          <div :id="index" v-for="(item,index) in goodslist" :key="item.id" >
        <Header
          :style="{background: '#f3f6f6',height:'50px', textAlign:'left',}"
        >{{item.name}}</Header>
        <div class="goods-list" v-for="items in item.foods" :key="items.id">
          <img class="list-img" :src="items.icon" />
          <div class="list-content">
            <h4>{{items.name}}</h4>
            <p>{{items.description}}</p>
            <p>
              <span>月售{{items.sellCount}}份</span>
              <span>好评率{{items.rating}}%</span>
            </p>
            <p class="last-con">
              <span class="price">￥{{items.price}} <span v-show="items.oldPrice">￥{{items.oldPrice}}</span>
              </span>
              <span class="list-btn">
                <button v-show="items.num > 0" @click="clickdel(items,items.name)">-</button>
                <label v-show="items.num > 0" >{{items.num}}</label>
                <button @click="clickadd(items,items.name)">+</button>
              </span>
            </p>
          </div>
        </div>
      </div>
     </ul>
    </div>
  </div>
</template>
<script>
import { getgoods } from "../api/apis";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      curindex:0,
    };
  },
  created() {
    getgoods().then(res => {
     this.$store.commit('initGoodsList', res.data.data)
    });
  },
  mounted(){
    //左侧滚动板
   new BScroll(document.querySelector('.goods-left'),{
       click:true
   });
   //右侧滚动板
   this.goodsRight = new BScroll(document.querySelector('.goods-right'),{
        probeType:3
   });
   //监听滚动事件
   this.goodsRight.on('scroll',({y})=>{
     let _y=Math.abs(y);
     for(let divobj of this.getMath){
       if(_y>=divobj.min&&_y<divobj.max){
         this.curindex=divobj.index;
         return;
       }
     }
   })
  },
  methods:{
     clicktitle(index){
     this.curindex=index;
     //让右侧随左侧滚动
      this.goodsRight.scrollToElement(document.getElementById(index),300)
      },
      //点击数量减
       clickdel( goods,name){
        if(goods.name==name){
                goods.num--
              }
       },
      //点击数量加
        clickadd(goods,name){
              if(goods.name==name){
                goods.num++
              }
        }
      },
  computed:{
    getMath(){
      let arr=[];
      let total=0;
      for(let i=0;i<this.goodslist.length;i++){
      let heightdiv=document.getElementById(i).offsetHeight;
      arr.push({min:total,max:total+heightdiv,index:i}) ;
         total+=heightdiv;
      }
      return arr;
    },
      //获取vuex中的共享数据
    goodslist(){
      return this.$store.state.goodslist
    } 
  }
    
}
</script>

<style lang="less" scoped>
.selected{
    background:#fff;
}
.goods-div {
  display: flex;
  justify-content: space-around;
  height: 100%;
  .goods-left {
    width: 100px;
    height: 400px;
    background: #f3f6f6;
    overflow: auto;
    ul {
      li { 
        padding: 10px;
        border-bottom: 1px solid #f6f6f6;
        text-align: center;
        height: 60px;
        display: flex;
        align-items: center;
        img{
        margin-top: -24px;
        }
      }
    }
  }
  .goods-right {
    height: 400px;
    background: #fff;
    flex: 1;
    overflow: auto;
    div{
        .ivu-layout-header {
      padding: 0 20px;
      line-height: 50px;
      color: #444;

    }
    .goods-list {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      .list-img {
        width: 25%;
        height: 100%;
        img {
          width: 100%;
         height: 80px;
        }
      }
      .list-content {
        width: 65%;
        font-size: 12px;
        .last-con {
          display: flex;
          justify-content: space-between; 
          .price{
                color: red;
                font-weight: bold;
                span{
                  text-decoration: line-through;
                 color: #aaa;
                }
                }
                
         .list-btn {
            button {
              width: 20px;
              height: 20px;
              line-height: 2px;
              background: #ccc;
              color:  #fff;
              border-radius: 50%;
              
            }
          }
        }
      }
    } 
    }
   
  }
}
</style>