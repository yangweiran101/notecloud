import Vue from 'vue'
import allapi from './allapi'
import base from './config'
import axios from 'axios'
// import { MessageBox } from 'element-ui';

let xhr = {
  get(url,params){
    return new Promise((resolve,reject) => {
      base.get(allapi[url],{params}).then(res => {
        // if(res.data.code == 200){
        //   MessageBox.alert(res.data.msg)
        // }
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  post(url,params){
    return new Promise((resolve,reject) => {
      base.post(allapi[url],params).then(res => {
        resolve(res.data)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  qiniuGet(){
    return new Promise((resolve,reject) => {
      axios.get('http://localhost:3000/upload').then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })

  }
}


Vue.prototype.$axios = xhr;


