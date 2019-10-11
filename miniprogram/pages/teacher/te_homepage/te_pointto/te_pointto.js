// pages/teacher/te_homepage/te_pointto/te_pointto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  Pointto_oneday:function(){
    wx.navigateTo({
      url: '/pages/teacher/te_homepage/te_pointto/te_pointto_oneday/te_pointto_oneday',
    })
  },
  Pointto_longtime: function () {
    wx.navigateTo({
      url: '/pages/teacher/te_homepage/te_pointto/te_pointto_longtime/te_pointto_longtime',
    })
  },
  Pointto_sc:function(){
    wx.navigateTo({
      url: '/pages/teacher/te_homepage/te_pointto/te_pointto_sc/te_pointto_sc',
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