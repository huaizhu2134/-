// app.js
App({
  onLaunch: function () {
    // 小程序启动时执行的逻辑
    console.log('小程序启动了！');
    
    // 初始化云环境
    wx.cloud.init({
      env: 'prod-5gxbemu6d2db79ea',
      traceUser: true
    });
  },
  globalData: {
    // 全局数据
    userInfo: null,
    cartItems: []
  }
})
