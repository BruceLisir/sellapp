// 所有请求封装接口文件(方便项目后期维护，所有请求统一管理)
import axios from "axios";

let req = axios.create({
    baseURL:'http://192.168.0.109:3000', 
    //baseURL:'http://localhost:3000', // 基本路径
    timeout:10000
});
//请求商家信息 
export function getseller(){
    return req.get('/api/seller')
};

//请求评论信息
export function getrating(){
    return req.get('/api/ratings')
};

//请求商品信息  /api/goods
export function getgoods(){
    return req.get('/api/goods')
}