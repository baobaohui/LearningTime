
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    Universityname: '',  //学校名称
    Collegename: '',   // 学院名称
    Professionalname: '', // 专业名称
    Tname: '',//姓名
    Tno: '',//学号
    class_collection: '',//所教班级应该是一个集合

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
    this.setData({ Professionalname: event.detail.value })
  },
  SnameInput: function (event) {
    //console.log(event)
    this.setData({ Sname: event.detail.value })
  },
  SnoInput: function (event) {
    //console.log(event)
    this.setData({ Sno: event.detail.value })
  },
  class_collection: function (event) {
    //console.log(event)
    this.setData({ class_collection: event.detail.value })
  },


  // 完成信息认证函数,保存信息到后台，并且将 status的值 置为1，然后跳转到 '我的' 页面
  Authenticate: function () {
    this.setData({
      status: 1
    })
    //保存信息到后台
    wx.redirectTo({
      url: '/pages/teacher/te_mine/te_mine',
    })
   /*
    wx.switchTab({
      url: '/pages/teacher/te_mine/te_mine',
    })
    */
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