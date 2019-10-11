// pages/student/st_home_page/st_cs_pointto/st_cs_pointto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2019-05-01',
    date1: '2017-05-01',
    date2: '2099-05-01',//学生--一短时间-的点到时间
    course:'',      //  班内学生选择的课程
    course_collection: '',//课程集合，从后台获得的学生自己个人认证时填写的课程信息集合，而后在滚动视图区域中展现出来
    Sname_class: '',//班级内所有同学的名字的集合（数组形式，有下标的）
    Sno_class: '',//班级内所有同学的学号（数组形式）
    Arrive_class: '',//b班级内所有同学的点到情况的集合（数组形式）

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