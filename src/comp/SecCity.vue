<template>
    <div class="cityPage">
        <header class="top-hd">
                <div class="in-hd">
                    <a href="javascript:;" class="back-btn" @click="$router.go(-1)"></a>
                    <h1 class="title">发货地</h1>
                </div>
            </header>
            <section class="main-content mer" >
                <div class="inner-content">
                    
                     <div class="pub-form">
                            <div class="fm-lis fm-lis-right">
                                <div class="inner">
                                    <form>
                                       
        
                                        <div class="area area2 mt">
                                            <div class="row">
                                                <label>
                                                    <em>省份</em>
                                                    <input type="text" name="province"  class="txt cityPickerInput" data-label="province" id="good_tag" readonly><i class="arrow arr2"></i></label>
                                            </div>
                                            <div class="fg"></div>
                                            <div class="row">
                                                <label>
                                                    <em>城市</em>
                                                    <input type="text" name="city"  class="txt cityPickerInput" id="good_tag" data-label="city" ><i class="arrow arr2" readonly></i></label>
                                            </div>
                                            <div class="fg"></div>
                                        </div>
                                        
        
                                    </form>
                                </div>
                            </div>
        
                        </div>
                     <a href="javascript:;" class="btn-big" style="margin-top:20px" id="comBtn" @click="finish" v-show="province.length">完成</a>
                </div>
            </section>
            <ul id="citylist" style="display:none"></ul>
    </div>
</template>
<script>
    

    import './picker/cityData.js'
    
    import './picker/city.js'
    

    export default{
        
        data(){
            
            return{
            
                province : "",
                
                city:""
            }
            
        },
        
        methods:{
        
            finish:function(){
              sessionStorage.setItem("city",this.city);
               this.$router.push({
                  name:'index',
                  params: { 
                      pro:this.province,
                      city:this.city
                    }
                })
            }
        },
    
        mounted:function(){
           
            this.$nextTick(function(){
                
                var _this = this;
               
                var AREA = null,CITY = null;
                
                $("input[data-label='province']").val("");
                
                $("input[data-label='city']").val("");
                            
                
               $.mobileCityPicker({
                        id: 'citylist',//容器id
                        inputClass: 'cityPickerInput',//回填数据的input的class
                        inputClick: true,//点击回填数据input是否显示城市面板
                        option:{//此option为配置.mobiscroll.treelist，完全参照官方文档
                            defaultValue: [0,0],//默认选项
                            label:['province', 'city'],//此label需与回填数据input的data-label一一对应
                            inputClass: 'hidden',//触发input的class，这里设置为隐藏
                            theme: 'mobiscroll',//风格
                        mode: 'mixed',//数据显示方式，mixed为滚动和点击箭头均有
                        display: 'bottom', //城市面板显示方式，从底部滑入
                        lang: 'zh',//中文
                        },
                   
                        getTabValue:function(){
                            
                           
                           
                        },
                        callback: function(val,cityes){//选择后的回调，val为选择的id,citys为城市名称
                             $("input[data-label='province']").val(arr[0]);
                             $("input[data-label='city']").val(arr[1]);
                   
                   
                             _this.province = arr[0];
                   
                             _this.city = arr[1];
               
                        }
               })
                            
               
            
            })
          
            
        }
    }
</script>
<style coped>
    @import './picker/mobiscroll.frame.css';
    @import './picker/mobiscroll.scroller.css';
    @import './picker/mobiscroll.android-holo-light.css';
    .cityPickerInput{ background: transparent;}
    .mbsc-mobiscroll .dwbc{display: none;}
</style>