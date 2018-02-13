// pages/tabBar/tab3.js

var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.324520,
    latitude: 23.099994,
    markers: [],
    controls: [
      {
        id: 'control',
        iconPath: '/images/control.png',
        position: {
          left: 10,
          top: 10,
          width: 40,
          height: 40
        },
        clickable: true
      },
      {
        id: 'others',
        iconPath: '/images/others.png',
        position: {
          left: 10,
          top: 70,
          width: 30,
          height: 30
        },
        clickable: true
      }
    ],
    inputValue: "医院"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      // key: 'SJOBZ-6DOKX-DME4P-77E5K-XI6Z7-5MBBY'
      // key: 'AIXBZ-MAYKK-YJFJJ-A6EQK-SZNJO-GYBBG'
      key: 'U7UBZ-W3TWP-SQBDK-LV4GZ-QXR3H-VUFUT'
    });


    console.log('地图定位！')
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        var latitude = res.latitude;
        var longitude = res.longitude;
        that.setData({
          latitude: latitude,
          longitude: longitude
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map');
    // this.getControlInfo();
    console.log(this.data.controls);
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
  
  },
  regionchange(e) {
    if (e.type == 'end') {
    }
    
  },
  markertap(e) {
    // console.log(e.markerId)
  },
  controltap(e) {
    console.log(e);
  },
  /**
   * 获取control位置
   */
  getControlInfo: function () {
    var res = wx.getSystemInfoSync();
    var controls = {
      controls:
      [
        {
          id: 1,
          iconPath: '/images/control.png',
          position: {
            left: res.windowWidth / 2 - 22,
            top: res.windowHeight / 2 - 34,
            width: 40,
            height: 40
          },
          clickable: true
        }, 
        {
          id: 2,
          iconPath: '/images/others.png',
          position: {
            left: 20,
            top: res.windowHeight - 80,
            width: 30,
            height: 30
          },
          clickable: true
        }
      ]
    }
    ;
    this.setData(controls);
  }
})
