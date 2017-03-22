<template>
    <div id="bran-sh">
         <header class="top-hd">
        <div class="in-hd">
            <a href="javascript:;" class="back-btn" @click='$router.go(-1)'></a>
         
            <h1 class="title">选择品类</h1>
         
        </div>
    </header>
    <section class="main-content mer" style="background:#fff;">
        <div class="inner-content">

            <div class="searchInput">
               <label><i></i><input type="text"  class="txt" placeholder="请输入品类关键词" id="secBrand"></label>
            </div>
            <div class="searchList">
               
            </div>
            <div class="historySec">
                <ul><li><a href="javascript:;" id="history"></a></li></ul>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
    import '../assets/js/auto.js'
    export default {
        
        data(){
            
            return{

            }
        },
        methods:{
            fetchData(){
                var _this = this;
                $('#secBrand').mAutocomplete({
                    parent: '.searchList',
                    ulTemplate: '<ul class="dropdown-menu" style="width:100%"></ul>',
                    itemTemplate: '<li class="autocomplete-item"><a>{{title}}</a></li>',
                    source: ['samsung', 'apple', 'xiaomi', 'huawei', 'meizu','leishi','asus','miqi','nuoseng','siemens','rongsheng','ballo','dingzi','ell','footbase','cupai','jel','kashi'],
                    onSelect: function(el) {
                        localStorage.setItem("cate",el.text());
                        _this.$router.push({
                         path : '/index'
                        })
                    }
                })
            }
        },
        mounted(){
            localStorage.removeItem("cate");
            this.fetchData()
        }
    }
</script>