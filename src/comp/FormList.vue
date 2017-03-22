<template>
    <div id="fmLis">
        <header class="top-hd">
            <div class="in-hd">
               
                <h1 class="title">商品发布</h1>
               
            </div>
        </header>
        <section class="main-content mer">
            <div class="inner-content">

                <div class="page-area default">
                    <div class="banner-area">
                        <!-- <img src="../images/null.gif" data-url="../images/pic1.jpg" class="img" style="display:none"> -->
                        <a href="javascript:;" class="addImgBtn" style="z-index:9999999999">
                            <input class="imgFile" type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="uploadPic($event)">
                        </a>
                        <div class="swiper-container home-banner slide-banner">

                            <div class="swiper-wrapper">


                            </div>
                            <div class="swiper-pagination in-banner-dd" style="display:none"></div>

                        </div>

                        <p class="intro">添加商品照片</p>
                    </div>
                 
                    <div class="pub-form">
                        <div class="fm-lis fm-lis-right">
                            <div class="inner">
                                <form>
                                    <div class="area">
                                        <div class="row">
                                            <label>
                                              <input type="text" placeholder="请输入商品标题" class="txt lfTxt" id="title" v-model='title'>
                                          </label>
                                        </div>
                                        <div class="fg"></div>
                                        <div class="row">
                                            <router-link to='/SecCate' tag="label">
                                                <em>品类</em><input type="text" class="txt" id="category" readonly v-model='category'>
                                                <i class="arrow"></i>
                                            </router-link>


                                        </div>
                                    </div>
                                    <div class="area mt">
                                        <div class="row">

                                            <router-link to='/SecBrand' tag='label'>
                                                <em>品牌</em>
                                                <input type="text" class="txt" id="brand" readonly v-model='brand'><i class="arrow"></i>
                                            </router-link>
                                        </div>

                                    </div>
                                    <div class="area mt">

                                        <div class="row">
                                            <label>
                                              <em>库存</em>
                                              <input type="text" class="txt" id="inventory" v-model="inventory" @keyup="chk_in"></label>
                                        </div>
                                        <div class="fg"></div>
                                        <div class="row">
                                            <label>
                                              <em><strong>卖价</strong><b>(商品售价)</b></em>
                                              <input type="text" class="txt" id="sellPrice" v-model="sellPrice" @keyup="inputCheck"><i class="rmb"></i></label>
                                        </div>
                                        <div class="fg"></div>
                                        <div class="row">
                                            <label>
                                              <em>底价<b>(平台结算价)</b></em>
                                              <input type="text" class="txt" id="basePrice" v-model="basePrice" @keyup="inputCheck2"><i class="rmb"></i></label>
                                        </div>

                                    </div>

                                    <div class="area mt">
                                        <div class="row">

                                            <router-link to="/GoodsDes" tag="label"><em>商品描述</em>
                                                <input type="text" class="txt" id="goods_des" v-model="des" style="color:red" readonly><i class="arrow"></i>
                                                <</router-link>
                                        </div>
                                    </div>
                                    <div class="area mt">
                                        <div class="row">
                                            
                                             <router-link to="SecCity" tag="label">
                                                  <em>发货地</em>
                                                 <input type="text" class="txt" id="place" readonly v-model="city"><i class="arrow"></i>
                                             </router-link>
                                        </div>
                                    </div>

                                    <div class="area mt" style="margin-bottom:30px">
                                        <div class="row">
                                            <label>
                                              <em>七天退货</em>
                                          </label>

                                            <div class="radio-sec">
                                                <a href="javascript:;" class="radio-item"  style="margin-right:40px;" @click="toggleTrue" :class="{'radio-cur':day7==true}"><s></s> 支持</a><a href="javascript:;" class="radio-item" :class="{'radio-cur':day7==false}"  @click="toggleFalse"  ><s></s> 不支持</a>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <footer class="footer">
            <div class="cross2Btn">

                <a href="javascript:;" class="btnPub btn-first"  @click="addBox">放入仓库</a>
                <a href="javascript:;" class="btnPub btn-two"  @click="addBox">立即发布</a>
            </div>
        </footer>
    </div>
</template>
<script>
    import '../assets/js/swiper.js'
    import '../assets/js/dialog.js'
    export default {
        data() {
            
            return {
                title: '',
                category: localStorage.getItem("cate") || "",
                brand: localStorage.getItem("brand") || "",
                des: !sessionStorage.getItem("des") ? "未添加" : "已添加",
                city:sessionStorage.getItem("city") || "",
                day7:true,
                sellPrice:'',
                basePrice:'',
                inventory:''
            }
        },
        methods: {
            initData(){
                
                this.category = localStorage.getItem("cate") || "";
                this.brand = localStorage.getItem("brand") || "";
                this.des = !sessionStorage.getItem("des") ? "未添加" : "已添加";
                this.city = sessionStorage.getItem("city") || "";

            },
            toggleTrue:function(){
        
           this.day7 = true;
        },
        toggleFalse: function(){
        
            this.day7 = false;
            
         },
           inputCheck:function(){
        
            
            if(!/^\d{0,8}\.{0,1}(\d{1,2})?$/.test(this.sellPrice)){
            
                this.sellPrice = "";
            }
        },
        
        inputCheck2 : function(){
        
            if(!/^\d{0,8}\.{0,1}(\d{1,2})?$/.test(this.basePrice)){
            
                this.basePrice=""
            }
        },
        
        chk_in:function(){
            
            if(!/^(0|\+?[1-9][0-9]*)$/.test(this.inventory)){
            
                this.inventory=""
            }
        
        },
        
        addBox:function(){
            
            
            for(var i in this.$data){
                
                if(this.$data.hasOwnProperty(i)){
                
                    
                    if(this.$data[i] == undefined || this.$data[i].length == 0){
                    
                        $.modal({
            
                            title: "信息输入不完整",

                            content: "",

                            btnArr: ["确定", "取消"],

                            events: []
                        });return
                        
                    }else{
                    
                        
                    }
            
                }
            }
            
            $.tipBox({info:"发布成功"}).appear(function(){
            
                location.reload();
            });
        },

            uploadPic(event, r) {
                
                var _this = event.target;

                var _file = _this.files[0];

                r = new FileReader();

                r.readAsDataURL(_file);

                $(r).on("load", function () {

                    var imgSrc = this.result;

                    var appendHTML = '<div class="swiper-slide"><img src="' + imgSrc +
                        '" alt=""  width="100%" height:"auto"></div>';

                    $(".swiper-wrapper").append($(appendHTML));

                    $(".banner-area").addClass("hasImage");

                    $(".swiper-pagination").show();
                   

                })
            }
        },
       activated(){
            this.initData();
         
       },
        mounted() {

            var sf = new Swiper('.swiper-container', {

                observer: true,
                // observeParents:true,
                pagination: '.swiper-pagination'
            })
             
        }
    }
</script>
<style lang="scss" scoped>
    @import '../assets/css/swiper.css';
    html,
    body {
        position: relative;
        height: 100%;
    }
    
    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
    }
    
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        /*        background: #fff;*/
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>