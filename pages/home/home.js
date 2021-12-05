Page({
  data: {
    taskList:[],
    userTaskList:[]
  },
  onLoad: function(e) {
    wx.request({
      url: 'http://127.0.0.1:8000/wx/wx_delTask/',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: (res) =>{
        this.setData({
          taskList: res.data['taskList'],
          userTaskList: res.data['userTaskList']
        })
      }
    })
  },
  delTask: function(e){
    const index = e.currentTarget.dataset.index;
    wx.request({
      url: 'http://127.0.0.1:8000/wx/wx_delTask/',
      method: 'POST',
      header:{
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        index: index
      },
      success: (res) => {
        if (res.statusCode == 200) {
          this.setData({
          })
        } 
      },
    });
    this.onLoad();
  },
  addTask: function(e){
  },
  tabChange(e) {
      console.log('tab change', e)
  },
  give: function(e){
    wx.request({
      url: 'http://127.0.0.1:8000/wx/wx_login/',
      method: "POST",
      header:{
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
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
            result: res.data
          })
        }    
      },
    })
  }
})