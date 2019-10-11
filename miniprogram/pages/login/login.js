var app = getApp();
Page({
  data: {
    status:'',
    images2: '/images/icon1.png',
  },
  Jumpstudent:function(){
    var that = this;
    if (app.appData.status == 0) {
      wx.redirectTo({
        url: '/pages/student/st_certification/st_certification',
      })
    } else {
      wx.redirectTo({
        // url: '/pages/student-login/student-login',
        url: '/pages/student/st_home_page/st_home_page',
      })
    }
    wx.setStorage({
      key: 'who',
      data: '0',
      success: function(res) {
        console.log('storage success')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // 标志位的值 0 （依此来改变 tabbar 的pagepath 选择）
    /* that.setData({
        that.data.status:status
    })
    */
  },
  Jumpteacher:function () {
    if (app.appData.status == 0) {
      wx.redirectTo({
        url: '/pages/teacher/te_certification/te_certification',
      })
    } else {
      wx.redirectTo({
        // url: '/pages/student-login/student-login',
        url: '/pages/teacher/te_homepage/te_homepage',
      })
    }
    // 标志位的值 1
    wx.setStorage({
      key: 'who',
      data: '1',
      success: function (res) {
        console.log('storage success')
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
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