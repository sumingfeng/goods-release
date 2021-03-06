$.fn.extend({
    _opt: {
        placeholader: "",
        validHtml: [],
        limitSize: 3,
        showServer: !1
    },
    artEditor: function (e) {
        var t = this,
            a = {
                "-webkit-user-select": "text",
                "user-select": "text",
                "overflow-y": "auto",
                "text-break": "brak-all",
                outline: "none"
            };
        $(this).css(a).attr("contenteditable", !0), t._opt = $.extend(t._opt, e);
        try {
            $(t._opt.imgTar).on("change", function (e) {
                var a = e.target.files[0];
                if (Math.ceil(a.size / 1024 / 1024) > t._opt.limitSize) return void console.error("文件太大");
                var o = new FileReader;
                o.readAsDataURL(a), o.onload = function (e) {
                    if (t._opt.showServer) return void t.upload(e.target.result);
                    var a = '<img src="' + e.target.result + '" style="width:auto;max-height:200px" />';
                    t.insertImage(a)
                }
            }), t.placeholderHandler(), t.pasteHandler()
        } catch (o) {
            console.log(o)
        }
        t._opt.formInputId && $("#" + t._opt.formInputId)[0] && $(t).on("input", function () {
            $("#" + t._opt.formInputId).val(t.getValue())
        })
    },
    upload: function (e) {
        {
            var t = this;
            t._opt.uploadField
        }
        $.ajax({
            url: t._opt.uploadUrl,
            type: "post",
            data: $.extend(t._opt.data, {
                filed: e
            }),
            cache: !1
        }).then(function (e) {
            var a = t._opt.uploadSuccess(e);
            if (a) {
                var o = '<img src="' + a + '" style="width:auto;max-height:200px" />';
                t.insertImage(o)
            } else t._opt.uploadError(e)
        })
    },
    insertImage: function (e) {
        $(this).focus();
        var t = window.getSelection ? window.getSelection() : document.selection,
            a = t.createRange ? t.createRange() : t.getRangeAt(0);
        if (window.getSelection) {
            a.collapse(!1);
            for (var o = a.createContextualFragment(e), r = o.lastChild; r && "br" == r.nodeName.toLowerCase() && r.previousSibling && "br" == r.previousSibling.nodeName.toLowerCase();) {
                var l = r;
                r = r.previousSibling, o.removeChild(l)
            }
            a.insertNode(a.createContextualFragment("<br/>")), a.insertNode(o), r && (a.setEndAfter(r), a.setStartAfter(r)), t.removeAllRanges(), t.addRange(a)
        } else a.pasteHTML(e), a.collapse(!1), a.select();
        this._opt.formInputId && $("#" + this._opt.formInputId)[0] && $("#" + this._opt.formInputId).val(this.getValue())
    },
    pasteHandler: function () {
        var e = this;
        $(this).on("paste", function (t) {
            console.log(t.clipboardData.items);
            var a = $(this).html();
            console.log(a), valiHTML = e._opt.validHtml, a = a.replace(/_moz_dirty=""/gi, "").replace(/\[/g, "[[-").replace(/\]/g, "-]]").replace(/<\/ ?tr[^>]*>/gi, "[br]").replace(/<\/ ?td[^>]*>/gi, "&nbsp;&nbsp;").replace(/<(ul|dl|ol)[^>]*>/gi, "[br]").replace(/<(li|dd)[^>]*>/gi, "[br]").replace(/<p [^>]*>/gi, "[br]").replace(new RegExp("<(/?(?:" + valiHTML.join("|") + ")[^>]*)>", "gi"), "[$1]").replace(new RegExp('<span([^>]*class="?at"?[^>]*)>', "gi"), "[span$1]").replace(/<[^>]*>/g, "").replace(/\[\[\-/g, "[").replace(/\-\]\]/g, "]").replace(new RegExp("\\[(/?(?:" + valiHTML.join("|") + "|img|span)[^\\]]*)\\]", "gi"), "<$1>"), /firefox/.test(navigator.userAgent.toLowerCase()) || (a = a.replace(/\r?\n/gi, "<br>")), $(this).html(a)
        })
    },
    placeholderHandler: function () {
        var e = this;
        $(this).on("click", function () {
            $.trim($(this).html()) === e._opt.placeholader && $(this).html("")
        }).on("blur", function () {
            $(this).html() || $(this).html(e._opt.placeholader)
        }), $.trim($(this).html()) || $(this).html(e._opt.placeholader)
    },
    getValue: function () {
        return $(this).html()
    },
    setValue: function (e) {
        $(this).html(e)
    }
});