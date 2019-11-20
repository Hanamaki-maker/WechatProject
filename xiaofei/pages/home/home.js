// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:"1",
    caipinList:[
      {
        imgsrc:"../../../assets/images/good3.jpg",
        name:"香辣炒蟹",
        msg:"蟹一分为二，封边后加入四川师傅特制辣椒，入口先是醇厚油香，然后慢慢带出辣椒特有的麻香味，蟹肉鲜香且口感厚实饱满。",
        price:"特惠价：198元/6只"
      },
      {
        imgsrc: "../../../assets/images/good4.jpg",
        name: "姜葱炒蟹",
        msg: "扑面而来的姜葱香味，入口后完美衬托出蟹肉本身的鲜甜口味，细细一品，回味无穷，唇齿留香。",
        price: "特惠价：198元/6只"
      },
      {
        imgsrc: "../../../assets/images/good2.jpg",
        name: "原只油焖蟹",
        msg: "区别于传统油焖而加入很多香料，使其能够完全入味，整只油焖将蟹膏牢牢锁住，打开蟹壳满手流膏，令人垂涎三尺。",
        price: "特惠价：188元/6只"
      },
      {
        imgsrc: "../../../assets/images/good1.jpg",
        name: "紫苏原只蒸蟹",
        msg: "最为传统的原味蟹做法，只需适量紫苏便能让蟹味得到升华，配合一点点姜醋汁食用，味道那叫一个鲜。",
        price: "特惠价：188元/6只"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handletabbar(event) {
    this.setData({
      active: event.target.dataset.type
    })
    this.setData({
      showIf: event.target.dataset.type
    })
  }
})