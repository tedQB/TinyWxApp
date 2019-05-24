var app = getApp();

Page({
    data: {
        mark: 0
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        var id = options.id;
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    handleComfirm: function (event) {
        wx.navigateBack();
    },
    bindMark:function (event) {
        var id=event.target.dataset.id;
        this.setData({"mark":id})
    }
})