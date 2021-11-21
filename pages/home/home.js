Page({
  data: {
    mname:"rcz",
    id_code:2019011316   
  },
  tabChange(e) {
      console.log('tab change', e)
  },
  give: function(e){		//与服务器进行交互
    console.log("执行give服务器这里了！！"),
    wx.request({
      url: 'http://127.0.0.1:8000/wx/wx_login/',	//获取服务器地址，此处为本地地址
      method: "POST",
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      data: {		//向服务器发送的信息
        mname: this.data.mname,
        clent_name: this.data.clent_name,
        id_code: this.data.id_code,
        id_phone:this.data.id_phone,
        choice_lipin: this.data.choice_lipin,
      },
      success: res => {
        console.log(this.mname)
        if (res.statusCode == 200) {
          console.log(res)
          this.setData({
            result: res.data	//服务器返回的结果 
          })    
        }    
      },
    })
  }
})