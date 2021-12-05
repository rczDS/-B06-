Page({
  addMember: function(e){
    wx.navigateTo({
      url: '/pages/addMember/addMember',
    })
  },
  delMember: function(e){
    wx.navigateTo({
      url: '/pages/delMember/delMember',
    })
  },
  setAdmin: function(e){
    wx.navigateTo({
      url: '/pages/setAdmin/setAdmin',
    })
  },
  fileAddress: function(e){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  },
  changePasswd: function(e){
    wx.navigateTo({
      url: '/pages/changePasswd/changePasswd',
    })
  },
  response: function(e){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  }
})