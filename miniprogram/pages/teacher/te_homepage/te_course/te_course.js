// pages/teacher/te_homepage/te_course/te_course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res:true,
    class_collection:'',//教师所教班级的集合，获取这个之后 在滚动视图显示出来以供选择
    class:'',//教师选择的班级
    te_longitude:'',//经度
    te_latitude:'',//纬度
  },
  //点击确定之后，后台向学生发送一个newcourse_notice=1，使得学生可以进入学习模式的弹窗
  //同时 获取教师的经纬度，发送给后台，再由后台发给本班的学生
  Pop_event1:function(){
    wx.showModal({
      title: '提示',
      content: '是否开始上课',
      success(res) {
        if (res.confirm) {
          console.log('是')
          
        } else if (res.cancel) {
          console.log('否')
        }
      }
    })
    this.getLocation()
  },
  Pop_event2:function(){
    wx.showModal({
      title: '提示',
      content: '是否结束本节课',
      success(res) {
        if (res.confirm) {
          console.log('是')
        
        } else if (res.cancel) {
          console.log('否')
        }
      }
    })
  },
  // 获取教师经纬度数据的函数
  getLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.setData({
          te_latitude: res.latitude,
          te_longitude: res.longitude
        })
        console.log(res.latitude)
        console.log(res.longitude)
      }
    })
    //获取一次经纬度函数
    // setTimeout(function () {
    // that.getLocation()
    // }, 10000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //this.getLocation()
   
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