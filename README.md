### ASMR小程序

> 开发知识点

#### 父组件监听子组件的事件

- 使用triggerEvent

```js
// 子组件nav
// .wxml
<text :tap="ontap"></text>
// .js
ontap: function(e){
  //第一个参数为创建一个事件名称，第二个参数可以是传个父组件的值，将在e.detail中被识别
  this.triggerEvent('childtap',{value},{})
}
// 父组件
<nav bind:childtap="onChange" />
// .js
onChange:function(e){
  //.....
  console.log(e)
}
```

[详见文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)