Page({
  data: {
    libraryDetails: {
      notice: "此次系统升级旨在提升图书馆服务效率，为大家提供更便捷的借阅体验。",
      newSchedule: "周一至周五：8:00 - 22:00；周六、周日：9:00 - 21:00",
      imgUrl: "/images/library/library-preview.jpg"
    }
  },
  goToLink: function () {
    wx.navigateTo({
      url: `/pages/link-content/link-content?link=https://example.com/library`
    });
  }
})