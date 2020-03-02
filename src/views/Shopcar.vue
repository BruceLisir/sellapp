<template>
    <div class="shopcar">
        <div v-for="item in goodslist" :key="item.id" >
           <div v-for="items in item.foods" :key="items.id" class="option" v-show="items.num > 0">
               <div class="shop-img" ><img :src="items.icon"/></div>
          <div class="shop-content">
              <h3>{{items.name}}</h3>
              <p>
                  <span class="price">￥{{items.price}}</span>  <span class="list-btn"  @click="clickdel(items,items.name)"><button>-</button><label >{{items.num}}</label> <button  @click="clickadd(items,items.name)">+</button></span></p>
                 
          </div>
           </div>
            
             
        </div>
        
    </div>
</template>

<script>
import { getgoods } from "../api/apis";
    export default {
      
 created() {
    getgoods().then(res => {
     this.$store.commit('initGoodsList', res.data.data)
    });

  },
  methods:{
     //点击数量减
       clickdel( goods,name){
        if(goods.name==name){
                goods.num--;
              }
       },
      //点击数量加
        clickadd(goods,name){
              if(goods.name==name){
                goods.num++;
               
              }
        }
       
  },
   computed:{
      //获取vuex中的共享数据
    goodslist(){
      return this.$store.state.goodslist
    }
  }
    
    }
     
</script>

<style lang="less" scoped>
    .shopcar{
        width: 100%;
        height: 300px;
        padding: 10px;
        background: #fff;
        overflow: scroll;
        .option{
            display: flex;
            border-top: 1px solid #ccc;
            justify-content: space-between;
            padding: 10px;
            .shop-img{
                width: 40px;
                height: 40px;
                img{
                    width: 40px;
                height: 40px; 
             
                }
            }
            .shop-content{
                flex: 1;
                padding: 0 10px;
               p {
                display: flex;
                justify-content: space-between;
                  .price{
                      font-size: 16px;
                      color: red;
                  }
                          
                .list-btn {
                    button {
                    width: 20px;
                    height: 20px;
                    line-height: 2px;
                    background: orange;
                    color:  #fff;
                    border-radius: 50%;
                    
                    }
                 }
                }
            }
        }
    }    
</style>