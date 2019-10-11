// pages/teacher/te_homepage/te_homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  Jump_mine:function(){
    wx.redirectTo({
      url: '/pages/teacher/te_mine/te_mine',
    })
  },
  Jump1: function () {
    wx.navigateTo({
      url: '/pages/teacher/te_homepage/te_course/te_course',
    })
  },
  Jump2: function () {
    wx.navigateTo({
      url: '/pages/teacher/te_homepage/te_pointto/te_pointto',
    })
  },
  Jump3: function () {
    wx.navigateTo({
      url: '/pages/teacher/te_homepage/te_study/te_study',
    })
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

  }
})