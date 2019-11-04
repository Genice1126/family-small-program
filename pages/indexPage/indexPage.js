const app = getApp();

Page({
  
  data: {
    inputValues:"",
    url: "../../static/look.jpeg",
    familyName : "aaaaaa",
    owner : "123",
    create_time : "123",
    address : "123",
    boolean : false
  },

  familyName : function(e){
    this.setData({
      inputValues : e.detail.value
    })
  },

  checkClink : function(e){
    console.log(this.data.inputValues);
  }


})