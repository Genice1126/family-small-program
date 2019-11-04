
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingPercent:0,
    showview:false,
    animation:""
  },

  bindGetUserInfo: function(e){
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      wx.navigateTo({
        url: '../indexPage/indexPage',
      })
    } else {
      console.log('eeeeeee');
    }
  },
  showButton : function(){
  
    this.animation = wx.createAnimation({
      duration: 200,
    })
    this.animation.opacity(0.1).step();
    this.animation.opacity(0.2).step();
    this.animation.opacity(0.3).step();
    this.animation.opacity(0.4).step();
    this.animation.opacity(0.5).step();
    this.animation.opacity(0.6).step();
    this.animation.opacity(0.7).step();
    this.animation.opacity(0.8).step();
    this.animation.opacity(0.9).step();
    this.animation.opacity(1).step();
    this.setData({
      animation : this.animation
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    this.setData({
      loadingPercent : "100",
    })
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
    
  }
})