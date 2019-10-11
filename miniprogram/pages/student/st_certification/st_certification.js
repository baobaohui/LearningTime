// pages/student/st_certification/st_certification.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Universityname: '',  //学校名称
    Collegename: '',   // 学院名称
    Professionalclass: '', // 专业班级
    Sname: '',//姓名
    Sno: '',//学号
    course_class: '',//所修课程， 应该是 一个集合

  },
  UniversitynameInput: function (event) {
    //console.log(event)
    this.setData({ Universityname: event.detail.value })
  },
  CollegenameInput: function (event) {
    //console.log(event)
    this.setData({ Collegename: event.detail.value })
  },
  ProfessionalclassInput: function (event) {
    //console.log(event)
    this.setData({ Professionalclass: event.detail.value })
  },
  SnameInput: function (event) {
    //console.log(event)
    this.setData({ Sname: event.detail.value })
  },
  SnoInput: function (event) {
    //console.log(event)
    this.setData({ Sno: event.detail.value })
  },
  Course_classInput: function (event) {
    //console.log(event)
    this.setData({ course_class: event.detail.value })
  },


  // 完成信息认证函数,保存信息到后台，并且将 status的值 置为1，然后跳转到 '我的' 页面
  Authenticate: function () {
    this.setData({
      status: 1
    })
    //保存信息到后台
    wx.switchTab({
      url: '/pages/student/st_mine/st_mine',
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