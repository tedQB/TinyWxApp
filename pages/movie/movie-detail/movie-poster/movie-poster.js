var app = getApp()

Page({
    data:{

    },
    onLoad:function(options) {
        var that= this;
        var posterUrl = options.posterUrl;
        var readyData = {'poster':[posterUrl]};
        
        this.setData(readyData);
        console.log(readyData);
        
        this.setData({
            'windowWidth':app.globalData.windowWidth,
            'windowHeight':app.globalData.windowHeight
        })
    },
    onReady:function(params) {
        //页面渲染完成
    },
    onShow:function (params) {
        //页面显示
    },
    onHide:function(params) {
        
    },
    onUnload:function(params) {
        //页面close
    }
})