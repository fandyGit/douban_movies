/*
*
*
* */
import data from './region.json'
import Mock from 'mockjs'

//获取初始列表
Mock.mock('/citylist',{code:0,data:data});
