Page({
  onLoad: function () {
    // 这里可以根据需求添加一些初始化逻辑，比如判断是否登录等
  },
  goToSports: function () {
    wx.navigateTo({
      url: '/sports/sports'
    });
  },
  goToLibrary: function () {
    wx.navigateTo({
      url: '/library/library'
    });
  }
})