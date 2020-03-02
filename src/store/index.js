import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);


//使用
export default new Vuex.Store({
     state:{
          goodslist:[]
        },
     mutations:{
     initGoodsList(state, newArr) {
          state.goodslist = newArr
           }       
     },
     // getters:{
     //      filters(state){
     //           //清除商品数量为0的商品
     //           return state.goodslist.filter(obj=>obj.foods.num!=0)
     //      }
     // }
    


})






