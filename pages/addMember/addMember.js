Page({
  data:{
    name:'',
    id:'',
    passwd:'123456'
  },
  inputName:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  inputId:function(e){
    this.setData({
      id: e.detail.value
    })
  },
  add: function(e){
    wx.request({
      url: 'http://127.0.0.1:8000/wx/wx_addMember/',
      method: 'POST',
      header:{
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        name: this.data.name,
        id: this.data.id,
        passwd: this.data.passwd
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