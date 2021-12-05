Page({
  data:{
    oldPwd:'',
    newPwd1:'',
    newPwd2:''
  },
  inputOldPwd:function(e){
    this.setData({
      oldPwd: e.detail.value
    })
  },
  inputNewPwd1:function(e){
    this.setData({
      newPwd1: e.detail.value
    })
  },
  inputNewPwd2:function(e){
    this.setData({
      newPwd2: e.detail.value
    })
  },
  changePwd: function(e){
    wx.request({
      url: 'http://127.0.0.1:8000/wx/wx_changePasswd/',
      method: 'POST',
      header:{
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        oldPwd: this.data.oldPwd,
        newPwd1: this.data.newPwd1,
        newPwd2: this.data.newPwd2
      },
      success: res => {
        console.log(this.mname)
        if (res.statusCode == 200) {
          console.log(res)
          this.setData({
            result: res.data
          })
        } 
      },
    })
  }
})