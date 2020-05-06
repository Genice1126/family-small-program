
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    eventName : "111",
    eventTime : "222",
    eventWeek : "333",
    eventDay : "444",
    // color : "",
    eventArray : [{
      time: 1573056000000,
      eventName : "事件1",
      eventDate : "2019-11-07",
      eventWeek : "星期四",
      eventDay : "1"
    },{
      time: 1573142400000,
      eventName: "事件2",
      eventDate: "2019-11-08",
      eventWeek: "星期五",
      eventDay: "2"
    },{
      time: 1573142400000,
      eventName: "事件3",
      eventDate: "2019-11-08",
      eventWeek: "星期五",
      eventDay: "2"
    },{
      time: 1573142400000,
      eventName: "事件4",
      eventDate: "2019-11-08",
      eventWeek: "星期五",
      eventDay: "2"
    },{
      time: 1573142400000,
      eventName: "事件5",
      eventDate: "2019-11-08",
      eventWeek: "星期五",
      eventDay: "2"
    },{
      time: 1573142400000,
      eventName: "事件6",
      eventDate: "2019-11-08",
      eventWeek: "星期五",
      eventDay: "2"
    }]
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
    let that = this;

    this.setData({
      eventName: that.data.eventArray[0].eventName,
      eventTime: that.data.eventArray[0].eventDate,
      eventWeek: that.data.eventArray[0].eventWeek,
      eventDay: that.data.eventArray[0].eventDay,
    })

    for(let i = 1 ; i < that.data.eventArray.length ; i++){
      if(that.data.eventArray[i].time > new Date().getTime()){
        that.data.eventArray[i].color = "#00FFFF"
      }else{
        that.data.eventArray[i].color = "#EBDB06"
      }
    }
    this.setData({
      eventArray : that.data.eventArray
    })

    console.log('==>' , that.data.eventArray);


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