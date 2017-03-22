/*by sumingfeng@yeah.net*/
(function($){
    $.extend({

    "modal": function (opts) {

        var b;

        var defaults = {

            title: "提示信息标题",

            content: "",

            btnArr: ["确定", "取消"],

            events: []
        };

        opts = opts && $.extend(defaults, opts);

        var tpl = '<div class="overlay" id="overlay">' +
            '<div class="m-modal-box">' +
            '<div class="modal-inner">' +
            '<div class="pop-info">' +
            '<h3 class="tit"><span>' + opts.title + '</span></h3>' +
            '' + opts.content + '' +
            '</div>' +
            '<div class="op-area">' +
            '<button class="btn-modal">' + opts.btnArr[0] + '</button>' +
            '<button class="btn-modal">' + opts.btnArr[1] + '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';




        function init() {

            dialog_show();

            bindEvent();
        };

        function dialog_show() {

            if ($("#overlay").length === 0) {

                $(tpl).appendTo($(document.body));
            }
        };

        function bindEvent() {

            $('.btn-modal').on("click", function () {

                var _this = $(this);

                var _index = _this.index();

                b = $("#overlay");

                $.modal_close(

                    function () {

                        opts.events.length && 　opts.events[_index].call(_this, _this, b);
                    }
                );

            })
        }
        init();
    },

    "modal_close": function (callback) {

        if ($("#overlay").length > 0) {

            callback && callback();

            $("#overlay").remove();

        }
    },

    "btnOverlay": function (opts_) {

        var defaults = {

            btnArr: ["重新获取验证码", "取消"],

            events: []
        };

        opts_ = $.extend(defaults, opts_);

        var tpl = '<div class="overlay2" id="overlay2">' +
            '<div class="btn-list">' +
            '<ul>' +
            '<li>' +
            '<button class="btn-modal2">' + opts_.btnArr[0] + '</button>' +
            '</li>' +
            '<li>' +
            '<button class="btn-modal2">' + opts_.btnArr[1] + '</button>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>';

        function init() {

            btnOverlay_show();

            bindEvent();
        };

        function btnOverlay_show() {

            if ($("#overlay2").length === 0) {

                $(tpl).appendTo($(document.body));
            }
        };

        function bindEvent() {

            $("#overlay2").find("li").on("click", function () {

                //$.modal_close();

                var _index = $(this).index();

                opts.events.length && opts_.events[_index].call($(this));

                $.btnOverlay_close();

            })
        }
        init();
    },

    "btnOverlay_close": function () {

        if ($("#overlay2").length > 0) {

            $("#overlay2").remove();
        }
    },

    "tipBox": function (opts) {

        var settings = {

            info: "登录成功"
        };

        opts = $.extend(settings, opts);

        var tpl = $('<div class="m-tip-box"><div class="tip-inner"><i class="success"></i><p class="tipInfo">' + opts.info + '</p></div></div>');

        function showBox() {
            if ($(".m-tip-box").length === 0) {
                // tpl.height($(window).height());
                tpl.appendTo($(document.body));
            }
        }

        function removeBox() {
            $(".m-tip-box").remove();
        }

        return {

            show: showBox,

            appear: function (callback) {
                showBox();
                setTimeout(function () {
                   $.tipBox().hide();
                    callback && callback();
                }, 2000);

            },
            hide: removeBox

        }
    }

})
})(jQuery)
