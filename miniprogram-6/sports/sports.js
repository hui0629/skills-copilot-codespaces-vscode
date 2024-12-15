Page({
  data: {
    sportsDetails: {
      events: [
        "100米短跑：考验选手的瞬间爆发力与速度。",
        "200米接力赛：团队协作与速度的完美结合，各棒选手需紧密配合。",
        "跳远：展示选手的弹跳与身体协调性。",
        "铅球：力量与技巧并重的投掷项目。"
      ],
      schedule: "12月20日上午9点开幕式，之后依次进行100米短跑初赛、200米接力赛初赛等项目；12月21日进行各项目决赛及闭幕式。",
      location: "学校主体育场",
      imgUrl: "/images/sports/sports-preview.jpg"
    }
  },
  goToLink: function () {
    wx.navigateTo({
      url: `/pages/link-content/link-content?link=https://example.com/sports`
    });
  }
})