Page({
  data:{
    name:''
  },
  inputName:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  setAdmin: function(e){
    wx.request({
      url: 'http://127.0.0.1:8000/wx/wx_setAdmin/',
      method: 'POST',
      header:{
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        name: this.data.name
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