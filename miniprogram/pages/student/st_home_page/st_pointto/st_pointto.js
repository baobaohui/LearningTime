// pages/student/st_home_page/st_pointto/st_pointto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2019-05-01',//学生--某天-的点到时间
    date1: '2017-05-01',
    date2: '2099-05-01',//学生--一短时间-的点到时间
    course:'',    // 滑块选择的课程
    Sname: '', //学生姓名，从后台获得（都是个人认证时的信息）
    Sno: '',   //学生学号，从后台获得
    Arrive: '', //未到--迟到，学生点到的两种情况
    course_collection:'',//课程集合
    pointto_case1: '', //某天点到情况的 课程course,日期date 确定后，从后台获得的信息集合{姓名 学号 未到(迟到)}
    pointto_case2: '',//一段时间点到情况的 课程 course,日期date 确定后，从后台获得的信息集合{Sname Sno   '迟到'num‘次’} （在下方区域中直接显示）
  },
  St_cspointto: function () {
    wx.navigateTo({
      url: '/pages/student/st_home_page/st_cs_pointto/st_cs_pointto',
    })
  },
  bindDateChange1(e) {
   // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange(e) {
    let that = this;
    console.log(e.detail.value)
    
    that.setData({
      date: e.detail.value,
    })
  },
  bindDateChange2(e) {
    let that = this;
    that.setData({
      date2: e.detail.value,
    })
    console.log(e)

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