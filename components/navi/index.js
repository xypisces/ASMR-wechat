// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    lastes: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeft: 'images/triangle.dis@left.png',
    disRight: 'images/triangle.dis@right.png',
    left: 'images/triangle@left.png',
    right: 'images/triangle@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function(e) {
      if (!this.properties.lastes) {
        this.triggerEvent('onLeft', {})
      }
    },
    onRight: function(e) {
      if (!this.properties.first) {
        this.triggerEvent('onRight', {})
      }
    }
  }
})