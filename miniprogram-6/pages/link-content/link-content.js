Page({
  data: {
    linkContent: "",
    detailImgUrl: ""
  },
  onLoad: function (options) {
    const link = options.link;
    if (link === "https://example.com/sports") {
      this.setData({
        linkContent: "欢迎来到校园运动会详情页面！本次运动会将于12月20日盛大开幕，为期两天。第一天上午9点举行开幕式，随后开启100米短跑初赛、200米接力赛初赛等精彩项目。第二天则是各项目决赛的巅峰对决，最终在闭幕式上为获奖选手和团队颁发荣誉。比赛项目涵盖100米短跑、200米接力赛、跳远、铅球等，充分展现同学们的体育风采与竞技精神。地点就在学校主体育场，届时欢迎全体师生前往观赛，为运动健儿们加油助威！",
        detailImgUrl: "/images/sports/sports-detail.jpg"
      });
    } else if (link === "https://example.com/library") {
      this.setData({
        linkContent: "这里将为你详细展示图书馆系统升级后的各项服务优化情况以及环境介绍等内容。",
        detailImgUrl: "/images/library/library-detail.jpg"
      });
    }
  }
})