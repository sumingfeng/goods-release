<template>
  
    <div id="fillDes"> <Loading v-show="showLoad"></Loading>
        <header class="top-hd">
            <div class="in-hd">
                <a href="javascript:;" class="back-btn" @click='$router.go(-1)'></a>
                <h1 class="title">商品描述</h1>
            </div>
        </header>
        <section class="main-content" style="background:#fff;">
            <div class="inner-content">
                <div id="editCon" class="editCon">
                    <input type="hidden" id="target">
                    <div class="article-content" id="articleContent">

                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="cross2Btn">

                <a href="javascript:;" class="btnPub btn-first" style="position:relative">添加图片<input class="imgFile" type="file" accept="image/gif,image/jpeg,image/jpg,image/png" style="position:absolute;left:0;top:0;width:344px;height:72px;overflow:hidden;opacity:0" id="imageUpload"></a>
                <a href="javascript:;" class="btnPub btn-two" id="confirmBtn" @click="getValue">确认提交</a>
            </div>
        </footer>


    </div>
</template>
<script>
    import '../assets/js/artEditor.js'
    var t;
    export default {
        data(){
            return {
                value:'',
                showLoad:false
            }
        },
        methods:{
            getValue(){
                var _this = this;
                this.showLoad = true;
                var value = $('#articleContent').getValue();
                t = setTimeout(function(){
                        this.value = value;
                        sessionStorage.setItem("des",value);
                        _this.showLoad = false;
                        _this.$router.push({
                         path : '/index'
                        })
                    },500);
                //  var bb = value.replace(/<[^>]+>/g,"");
              
            },
            init(){
                t &&  clearTimeout(t);
                $('#articleContent').artEditor({
                    imgTar: '#imageUpload',
                    limitSize: 5,   // 兆
                    showServer: false,
                    uploadUrl: '',
                    data: {},
                    uploadField: 'image',
                    placeholader: '请输入商品描述信息',
                    validHtml: ["br"],
                    uploadSuccess: function(res) {
                        // return img url
                        return res.path;
                    },
                    uploadError: function(res) {

                    }
             })
            }
        },
        mounted(){
            this.init();
             
        }
    }
</script>