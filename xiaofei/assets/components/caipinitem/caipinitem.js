Component({
  /**
   * 组件的属性列表,从父组件穿的属性
   */
  properties: { //props
    caipin: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: { //组件内部自己的数据

  },
  lifetimes: { //存放生命周期
    ready() {
      console.log("组件OK啦")
    }
  },
  /**
   * 组件的方法列表
   */
  methods: { //组件内部存放方法的地方地方

  }
})
