// pages/student/st_home_page/st_course/st_course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',

    te_longitude:'',
    te_latitude:'',
  
    course_notice: 0, // 由此 判断是否弹出弹幕
    newcourse_notice: '',
    res:true,
    images1:'/images/button.png',
    Arrive:'',//经计算之后 将学生是否到的三种情况（已到，未到，迟到)传给后台
    Learning_state:'',//学习状态
    time1:'',

    x: 0,   // 重力感应有关数据
    y: 0,
    z: 0,
    G_num: 0,
    G_num1: 0,

    value: 0,  // 屏幕亮度有关数据
    p_num: 0,
    p_num1: 0,
    p_num2: 0,

    p:0, // 玩手机可能性的大小
  },

  // 获取学生经纬度数据的函数
  getLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
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
  Pop_st_course:function(){
    var that = this;
   // that.setData({
   //   course_notice:newcourse_notice 
   // })
   //newcourse_notice 服务器返回的参数值，老师发送上课消息后，newcourse_notice-->1,否则 为0，
    wx.showModal({
      title: '提示',
      content: '是否进入学习模式',
      success(res) {
        if (res.confirm) {
          console.log('是')
          console.log('启动检测程序')
          //调用经纬度函数，调用获取重力感应数据函数，调用获取屏幕亮度函数，调用计时器，5分钟内结束检测
         // this.getLocation()
          // 调用时有问题
        } else if (res.cancel) {
          console.log('否')
        }
      }
    })
    if(that.data.course_notice == 1) // 如果不能在弹弹窗部分调用函数，那么就根据某个标志位的值的改变达到目的
    {
      this.getLocation()
    }
    this.getLocation()
    that.getScreenBrightness()
    if (this.data.p_num < 270) {
      that.Gravity_induction()
    }
    if(this.data.p_num == 270)
    {
      that.Learn_state()
    }
  },
  /*
  //根据从后传过来的教师的经纬度和 学生的经纬度，根据经纬度函数计算学生与老师的距离，判定arrive状态后将arrive(已到，未到，迟到)传入后台
  Calculated_distance: function () {
    this.getLocation()
  },

  */
  /**
   * 生命周期函数--监听页面加载
   */
  // 重力感应数据的获取及处理 x,y,z
Gravity_induction:function(){

    var that = this;
    wx.startAccelerometer({
      interval: 'normal'
    })
    wx.onAccelerometerChange(function (res) {
      console.log(res.x)
      console.log(res.y)

      that.setData({
        x: res.x,
        y: res.y,
      })
      // 可以预留出两个数字，分别为 num(放在获取数据外面),num1(放在判断条件里面)
      if (res.x < -0.1 || res.y < -0.1) { //进入判断条件没有问题，有问题的是 关于数字num的上升

        console.log('加速度计的判断')
        console.log(that.data.G_num1++)
      }
      console.log(that.data.G_num++)  //num的数值 加不上去???
    })
 /*   wx.stopAccelerometer({
      success: console.log('结束调用')
    })
    */
    setTimeout(function () {
      that.Gravity_induction();
      console.log(that.data.G_num++);
      console.log("间隔5s")
    }, 5000)
    //console.log(that.data.G_num1/that.data.G_num)
  
//间隔时间太短，能否更改调用的间隔时间
},
  getScreenBrightness: function () {
    var that = this;
    wx.getScreenBrightness({
      success: function (res) {
        console.log(res.value)
        console.log(that.data.p_num1++)
        that.setData({
          value: res.value
        })
      }
    })
    setTimeout(function () {
      that.getScreenBrightness()
    }, 1000)
    if(this.data.p_num < 270) // 四分半 结束检测，剩余时间用于判断
   {
      console.log(this.data.p_num++) // 向后台传输数据的时候，如果 num 和 屏幕亮度数据有一个没有传过去，这时候应该启动另一个 计数 num1++,等到两个数据再次一起传输，停止 num1 的计数，因为是每一秒一个数据  所以 用 num1/num 的值 表示 屏幕亮度数据这方面的结果
      if (that.data.p_num1 + 3 < this.data.p_num)// 这种方式  用 差值 p_num2 计算出 手机未使用的时间，算出 (p_num-p_num2)/p_num 就是屏幕亮度数据的答案
      {
        console.log(this.data.p_num2++)
      }
  }

  },
  // 屏幕亮度数据的获取和处理
  getScreenBrightness: function () {
    var that = this;
    wx.getScreenBrightness({
      success: function (res) {
        console.log(res.value)
        console.log(that.data.p_num1++)
        that.setData({
          value: res.value
        })
      }
    })
    setTimeout(function () {
      that.getScreenBrightness()
    }, 1000)
    if (this.data.p_num < 270) // 四分半 结束检测，剩余时间用于判断
    {
      console.log(this.data.p_num++) // 向后台传输数据的时候，如果 num 和 屏幕亮度数据有一个没有传过去，这时候应该启动另一个 计数 num1++,等到两个数                                         //据 再次一起传输，停止 num1 的计数，因为是每一秒一个数据  所以 用 num1/num 的值 表示 屏幕亮度数据这方面的结果
    }
    if (that.data.p_num1 + 3 < this.data.p_num)// 这种方式  用 差值 p_num2 计算出 手机未使用的时间，算出 (p_num-p_num2)/p_num
                                                //     就是屏幕亮度数据的答案
    {
      console.log(this.data.p_num2++)
    }
  },


  //Learing_state 优秀--良好--一般--差劲(将学生的四种学习状态进行判断，而后将结果传给后台)
  Learn_state:function(){
      that.setData({
        p:1-(G_num1/G_num)*0.4+(p_num-p_num2)/p_num*0.4
      })
    if(p>0 && p<=0.2)
    {
      that.setData({
        Learning_state:'优秀'
      })
    }
    else if(p>0.2 && p<0.4){
      that.setData({
        Learning_state:'良好'
      })
    }
    else if(p>0.4 && p<0.6){
      that.setData({
        Learning_state:'一般'
      })
    }
    else{
      that.setData({
        Learning_state:'差劲'
      })
    }
    //将结果传入后台
 
  },

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