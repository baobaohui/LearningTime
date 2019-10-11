Page({
  data: {
    focus:false,
    inputValue:'',
    username:null,
    password:null,

  },
  bindButtonTap() {
    this.setData({
      focus: true
    })
    //将 账号 和密码传入服务器验证，返回true 进行跳转
   // wx.setStorageSync('userInfo', this.data);
   
    wx.switchTab({
      url: '/pages/student/st_home_page/st_home_page',
    })
 /*   wx.request({
      url: 'http://101.132.78.78:8080/wisdom_web/wx/bindOpenid', // 仅为示例，并非真实的接口地址
      method:'post',
      data: {
        account: this.username,
        password: this.password,
        status:1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    }) */
  },
  usernameInput:function(event){
    //console.log(event)
    this.setData({username:event.detail.value})
  },
  passwordInput:function(event){
    this.setData({password:event.detail.value})
  },

  onLoad: function (options) {
    wx.getStorage({
      key: 'who',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
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