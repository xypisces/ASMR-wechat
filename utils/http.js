 import {
   config
 } from '../config.js'

 const tips = {
   1: '抱歉出现了一个错误'
 }
 class HTTP {
   request(params) {
     if (!params.method) {
       params.method = 'GET'
     }
     wx.request({
       url: config.api_base_url + params.url,
       data: params.data,
       header: {
         'content-type': 'application/json',
         'appkey': config.appkey,
       },
       method: params.method,
       dataType: 'json',
       success: (res) => {
         let code = res.statusCode.toString()
         if (code.startsWith('2')) {
           params.success && params.success(res.data)
         } else {
           this._show_error()
         }
       },
       fail: (err) => {
         console.error(err)
         this._show_error()
       },
       complete: (res) => {},
     })
   }
   _show_error(code = 1) {
     wx.showToast({
       title: tips[code],
       icon: 'none',
       duration: 2000,
     })
   }
 }

 export {
   HTTP
 }