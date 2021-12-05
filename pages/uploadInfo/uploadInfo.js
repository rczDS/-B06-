Page({
  data:{
    isSelect:false,
    types:['交通费','住宿费','伙食费','其他(请在备注里说明)'],
    type:"",
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
  select:function(){
    var isSelect = this.data.isSelect
    this.setData({ isSelect:!isSelect})
  },
  getType:function(e){
    let value = e.currentTarget.dataset.type
    this.setData({
      type: value,
      isSelect: false,
    })
  },
  add: function(e){
  }
})