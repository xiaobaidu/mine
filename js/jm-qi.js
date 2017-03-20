;! function(a, b) {
    "use strict";
    var c,d,e,f,g,h = "",
    i = {
        host: "http://" + location.host,
        getPath: function() {
            var a = document.scripts,
            b = a[a.length - 1].src;
            return h ? i.host + h: b.substring(0, b.lastIndexOf("/") + 1)
        },
        type: ["dialog", "page", "iframe", "loading", "tips"]
    };
    a.mbox = {
        v: "1.8.5",
        ie6: !-[1] && !a.XMLHttpRequest,
        index: 0,
        path: i.getPath(),
        use: function(a, b) {
            var d,
            e,
            f,
            g = c("head")[0];
            a = a.replace(/\s/g, ""),
            d = /\.css$/.test(a),
            e = document.createElement(d ? "link": "script"),
            f = a.replace(/\.|\//g, ""),
            d && (e.type = "text/css", e.rel = "stylesheet"),
            e[d ? "href": "src"] = /^http:\/\//.test(a) ? a: mbox.path + a,
            e.id = f,
            c("#" + f)[0] || g.appendChild(e),
            b && (document.all ? c(e).ready(b) : c(e).load(b))
        },
        alert: function(a, b, d, e) {
            var f = "function" == typeof d,
            g = {
                dialog: {
                    msg: a,
                    type: b,
                    yes: f ? d: e
                },
                border: [0, .5, "#666"],
                area: ["auto", "auto"]
            };
            return f || (g.title = d),
            c.mbox(g)
        },
        confirm: function(a, b, d, e) {
            var f = "function" == typeof d,
            g = {
                dialog: {
                    msg: a,
                    type: 4,
                    btns: 2,
                    yes: b,
                    no: f ? d: e
                }
            };
            return f || (g.title = d),
            c.mbox(g)
        },
        msg: function(a, d, e, f) {
            var g = {
                title: !1,
                closeBtn: !1,
                shade: b ? [.8, "#000"] : [1],
                time: d === b ? 2: d,
                border: [0, 1, "#2D93CA"],
                area: ["300px", "auto"],
                dialog: {
                    msg: "" === a || a === b ? "&nbsp;": a
                },
                end: f
            };
            return "object" == typeof e ? (g.dialog.type = e.type, g.shade = e.shade, g.shift = e.rate) : "function" == typeof e ? g.end = e: g.dialog.type = e,
            c.mbox(g)
        },
        load: function(a, b) {
            return "string" == typeof a ? mbox.msg(a, b || 0, 16) : c.mbox({
                time: a,
                loading: {
                    type: b
                },
                bgcolor: b ? "#fff": "",
                shade: b ? [.1, "#000"] : [0],
                border: 3 !== b && b ? [6, .3, "#000"] : [0],
                type: 3,
                title: ["", !1],
                closeBtn: [0, !1]
            })
        },
        tips: function(a, b, d, e, f, g) {
            var h = {
                type: 4,
                shade: !1,
                success: function(a) {
                    this.closeBtn || a.find(".jm-box-tips").css({
                        "padding-right": 10
                    })
                },
                bgcolor: "",
                tips: {
                    msg: a,
                    follow: b
                }
            };
            return h.time = "object" == typeof d ? d.time: 0 | d,
            d = d || {},
            h.closeBtn = d.closeBtn || !1,
            h.maxWidth = d.maxWidth || e,
            h.tips.guide = d.guide || f,
            h.tips.style = d.style || g,
            h.tips.more = d.more,
            c.mbox(h)
        }
    },
    e = ["jm-box-layout", "jm-box-iframe", ".jm-box-title", ".jm-box-text", ".jm-box-page", ".jm-box-main"],
    f = function(a) {
        var b = this,
        d = b.config;
        mbox.index++,
        b.index = mbox.index,
        b.config = c.extend({},
        d, a),
        b.config.dialog = c.extend({},
        d.dialog, a.dialog),
        b.config.page = c.extend({},
        d.page, a.page),
        b.config.iframe = c.extend({},
        d.iframe, a.iframe),
        b.config.loading = c.extend({},
        d.loading, a.loading),
        b.config.tips = c.extend({},
        d.tips, a.tips),
        b.config.msg = c.extend({},
        d.msg, a.msg),
        b.creat()
    },
    f.pt = f.prototype,
    f.pt.config = {
        type: 0,
        shade: [.3, "#000"],
        fix: !0,
        move: ".jm-box-title",
        title: "信息",
        offset: ["", "50%"],
        area: ["310px", "auto"],
        closeBtn: [0, !0],
        time: 0,
        bgcolor: "#fff",
        border: [6, .3, "#666"],
        zIndex: 19891014,
        maxWidth: 400,
        dialog: {
            btns: 1,
            btn: ["确定", "取消"],
            type: 8,
            msg: "",
            yes: function(a) {
                mbox.close(a)
            },
            no: function(a) {
                mbox.close(a)
            }
        },
        page: {
            dom: "#jm-layer",
            html: "",
            url: ""
        },
        iframe: {
            src: "http://www.http.com",
            scrolling: "auto"
        },
        loading: {
            type: 3
        },
        tips: {
            msg: "",
            follow: "",
            guide: 0,
            isGuide: !0,
            style: ["background-color:#FF9900; color:#fff;", "#FF9900"]
        },
        success: function() {},
        close: function(a) {
            mbox.close(a)
        },
        end: function() {}
    },
    f.pt.space = function(a) {
        var b,c,d,f,g,h,i,j,k,l,m,n,o,p = this;
        return a = a || "",
        b = p.index,
        c = p.config,
        d = c.dialog,
        f = -1 === d.type ? "": '<i class="jm-box-icon jm-box-icon-' + d.type + '"></i>',
        g = ['<div class="jm-box-dialog"><span class="jm-box-msg jm-box-text" style="' + (f ? "": "padding-left:20px") + '">' + f + d.msg + "</span></div>", '<div class="jm-box-page">' + a + "</div>", '<iframe scrolling="' + c.iframe.scrolling + '" allowtransparency="true" id="' + e[1] + b + '" name="' + e[1] + b + '" onload="this.className=\'' + e[1] + '\'" class="' + e[1] + '" frameborder="0" src="' + c.iframe.src + '"></iframe>', '<span class="jm-box-loading jm-box-loading-' + c.loading.type + '"></span>', '<div class="jm-box-tips" style="' + c.tips.style[0] + '"><div class="jm-box-tipsMsg">' + c.tips.msg + '</div><i class="m-tips-G"></i></div>'],
        h = "",
        i = "",
        j = c.zIndex + b,
        k = "z-index:" + j + "; background-color:" + c.shade[1] + "; opacity:" + c.shade[0] + "; filter:alpha(opacity=" + 100 * c.shade[0] + ");",
        c.shade[0] && (h = '<div times="' + b + '" id="jm-box-shade' + b + '" class="jm-box-shade" style="' + k + '"></div>'),
        c.zIndex = j,
        l = "",
        m = "",
        n = "z-index:" + (j - 1) + ";  background-color: " + c.border[2] + "; opacity:" + c.border[1] + "; filter:alpha(opacity=" + 100 * c.border[1] + "); top:-" + c.border[0] + "px; left:-" + c.border[0] + "px;",
        c.border[0] && (i = '<div id="jm-box-border' + b + '" class="jm-box-border" style="' + n + '"></div>'),
        !c.maxmin || 1 !== c.type && 2 !== c.type || /^\d+%$/.test(c.area[0]) && /^\d+%$/.test(c.area[1]) || (m = '<a class="jm-box-min" href="javascript:;"><cite></cite></a><a class="jm-box-max jm-layer-png32" href="javascript:;"></a>'),
        c.closeBtn[1] && (m += '<a class="jm-box-close jm-layer-png32 jm-box-close' + c.closeBtn[0] + '" href="javascript:;" style="' + (4 === c.type ? "position:absolute; right:-3px; _right:7px; top:-4px;": "") + '"></a>'),
        o = "object" == typeof c.title,
        c.title && (l = '<div class="jm-box-title" style="' + (o ? c.title[1] : "") + '"><em>' + (o ? c.title[0] : c.title) + "</em></div>"),
        [h, '<div times="' + b + '" showtime="' + c.time + '" style="z-index:' + j + '" id="' + e[0] + b + '" class="' + e[0] + '"><div style="background-color:' + c.bgcolor + "; z-index:" + j + '" class="jm-box-main">' + g[c.type] + l + '<span class="jm-box-setwin">' + m + '</span><span class="jm-box-button"></span></div>' + i + "</div>"]
    },
    f.pt.creat = function() {
        var a,b,d,f = this,
        g = "",
        h = f.config,
        i = h.dialog,
        j = f.index,
        k = h.page,
        l = c("body"),
        m = function(a) {
            var a = a || "";
            g = f.space(a),
            l.append(c(g[0]))
        };
        switch (h.type) {
        case 0:
            h.title || (h.area = ["auto", "auto"]),
            c(".jm-box-dialog")[0] && mbox.close(c(".jm-box-dialog").parents("." + e[0]).attr("times"));
            break;
        case 1:
            if ("" !== k.html) m('<div class="xuboxPageHtml">' + k.html + "</div>"),
            l.append(c(g[1]));
            else if ("" !== k.url) m('<div class="xuboxPageHtml" id="xuboxPageHtml' + j + '">' + k.html + "</div>"),
            l.append(c(g[1])),
            c.get(k.url, 
            function(a) {
                c("#xuboxPageHtml" + j).html(a.toString()),
                k.ok && k.ok(a)
            });
            else {
                if (0 != c(k.dom).parents(e[4]).length) return;
                m(),
                c(k.dom).show().wrap(c(g[1]))
            }
            break;
        case 3:
            h.title = !1,
            h.area = ["auto", "auto"],
            h.closeBtn = ["", !1],
            c(".jm-box-loading")[0] && mbox.closeLoad();
            break;
        case 4:
            h.title = !1,
            h.area = ["auto", "auto"],
            h.fix = !1,
            h.border = [0],
            h.tips.more || mbox.closeTips()
        }
        if (1 !== h.type && (m(), l.append(c(g[1]))), a = f.mboxE = c("#" + e[0] + j), a.css({
            width: h.area[0],
            height: h.area[1]
        }), h.fix || a.css({
            position: "absolute"
        }), h.title && (3 !== h.type || 4 !== h.type)) switch (b = 0 === h.type ? i: h, d = a.find(".jm-box-button"), b.btn = h.btn || i.btn, b.btns) {
        case 0:
            d.html("").hide();
            break;
        case 1:
            d.html('<a href="javascript:;" class="jm-box-yes jm-box-button1">' + b.btn[0] + "</a>");
            break;
        case 2:
            d.html('<a href="javascript:;" class="jm-box-yes jm-box-button2">' + b.btn[0] + '</a><a href="javascript:;" class="jm-box-no jm-box-button3">' + b.btn[1] + "</a>")
        }
        "auto" === a.css("left") ? (a.hide(), setTimeout(function() {
            a.show(),
            f.set(j)
        },
        500)) : f.set(j),
        h.time <= 0 || f.autoclose(),
        f.callback()
    },
    i.fade = function(a, b, c) {
        a.css({
            opacity: 0
        }).animate({
            opacity: c
        },
        b)
    },
    f.pt.offset = function() {
        var a = this,
        b = a.config,
        c = a.mboxE,
        e = c.outerHeight();
        a.offsetTop = "" === b.offset[0] && e < d.height() ? (d.height() - e - 2 * b.border[0]) / 2: -1 != b.offset[0].indexOf("px") ? parseFloat(b.offset[0]) : parseFloat(b.offset[0] || 0) / 100 * d.height(),
        a.offsetTop = a.offsetTop + b.border[0] + (b.fix ? 0: d.scrollTop()),
        -1 != b.offset[1].indexOf("px") ? a.offsetLeft = parseFloat(b.offset[1]) + b.border[0] : (b.offset[1] = "" === b.offset[1] ? "50%": b.offset[1], a.offsetLeft = "50%" === b.offset[1] ? b.offset[1] : parseFloat(b.offset[1]) / 100 * d.width() + b.border[0])
    },
    f.pt.set = function(a) {
        var b,f,g,h,j,k,l,m,n,o = this,
        p = o.config;
        switch (p.dialog, b = p.page, p.loading, f = o.mboxE, g = f.find(e[2]), o.autoArea(a), p.title ? 0 === p.type && mbox.ie6 && g.css({
            width: f.outerWidth()
        }) : 4 !== p.type && f.find(".jm-box-close").addClass("jm-box-close1"), f.attr({
            type: i.type[p.type]
        }), o.offset(), 4 !== p.type && (p.shift && !mbox.ie6 ? "object" == typeof p.shift ? o.shift(p.shift[0], p.shift[1] || 500, p.shift[2]) : o.shift(p.shift, 500) : f.css({
            top: o.offsetTop,
            left: o.offsetLeft
        })), p.type) {
        case 0:
            f.find(e[5]).css({
                "background-color":
                "#fff"
            }),
            p.title ? f.find(e[3]).css({
                paddingTop: 18 + g.outerHeight()
            }) : (f.find(".jm-box-icon").css({
                top: 8
            }), f.find(e[3]).css({
                marginTop: 11
            }));
            break;
        case 1:
            f.find(b.dom).addClass("layer-pageContent"),
            p.shade[0] && f.css({
                zIndex: p.zIndex + 1
            }),
            p.title && f.find(e[4]).css({
                top: g.outerHeight()
            });
            break;
        case 2:
            h = f.find("." + e[1]),
            j = f.height(),
            h.addClass("jm-box-load").css({
                width: f.width()
            }),
            h.css(p.title ? {
                top: g.height(),
                height: j - g.height()
            }: {
                top: 0,
                height: j
            }),
            mbox.ie6 && h.attr("src", p.iframe.src);
            break;
        case 4:
            k = [0, f.outerHeight()],
            l = c(p.tips.follow),
            m = {
                width: l.outerWidth(),
                height: l.outerHeight(),
                top: l.offset().top,
                left: l.offset().left
            },
            n = f.find(".m-tips-G"),
            p.tips.isGuide || n.remove(),
            f.outerWidth() > p.maxWidth && f.width(p.maxWidth),
            m.tipColor = p.tips.style[1],
            k[0] = f.outerWidth(),
            m.autoLeft = function() {
                m.left + k[0] - d.width() > 0 ? (m.tipLeft = m.left + m.width - k[0], n.css({
                    right: 12,
                    left: "auto"
                })) : m.tipLeft = m.left
            },
            m.where = [function() {
                m.autoLeft(),
                m.tipTop = m.top - k[1] - 10,
                n.removeClass("m-tips-B").addClass("m-tips-T").css({
                    "border-right-color": m.tipColor
                })
            },
            function() {
                m.tipLeft = m.left + m.width + 10,
                m.tipTop = m.top,
                n.removeClass("m-tips-L").addClass("m-tips-R").css({
                    "border-bottom-color": m.tipColor
                })
            },
            function() {
                m.tipLeft = m.left - 100,
                m.tipTop = m.top + m.height + 10,
                n.removeClass("m-tips-T").addClass("m-tips-B").css({
                    "border-bottom-color": m.tipColor
                })
            },
            function() {
                m.tipLeft = m.left - k[0] + 10,
                m.tipTop = m.top,
                n.removeClass("m-tips-R").addClass("m-tips-L").css({
                    "border-bottom-color": m.tipColor
                })
            }],
            m.where[p.tips.guide](),
            0 === p.tips.guide ? m.top - (d.scrollTop() + k[1] + 16) < 0 && m.where[2]() : 1 === p.tips.guide ? d.width() - (m.left + m.width + k[0] + 16) > 0 || m.where[3]() : 2 === p.tips.guide ? m.top - d.scrollTop() + m.height + k[1] + 16 - d.height() > 0 && m.where[0]() : 3 === p.tips.guide ? k[0] + 16 - m.left > 0 && m.where[1]() : 4 === p.tips.guide,
            f.css({
                left: m.tipLeft,
                top: m.tipTop
            })
        }
        p.fadeIn && (i.fade(f, p.fadeIn, 1), i.fade(c("#jm-box-shade" + a), p.fadeIn, p.shade[0])),
        p.fix && "" === p.offset[0] && !p.shift && d.on("resize", 
        function() {
            f.css({
                top: (d.height() - f.outerHeight()) / 2
            })
        }),
        o.move()
    },
    f.pt.shift = function(a, b, c) {
        var e,
        f = this,
        g = f.config,
        h = f.mboxE,
        i = 0,
        j = d.width(),
        k = d.height() + (g.fix ? 0: d.scrollTop());
        switch (i = "50%" == g.offset[1] || "" == g.offset[1] ? h.outerWidth() / 2: h.outerWidth(), e = {
            t: {
                top: f.offsetTop
            },
            b: {
                top: k - h.outerHeight() - g.border[0]
            },
            cl: i + g.border[0],
            ct: -h.outerHeight(),
            cr: j - i - g.border[0]
        },
        a) {
        case "left-top":
            h.css({
                left:
                e.cl,
                top: e.ct
            }).animate(e.t, b);
            break;
        case "top":
            h.css({
                top:
                e.ct
            }).animate(e.t, b);
            break;
        case "right-top":
            h.css({
                left:
                e.cr,
                top: e.ct
            }).animate(e.t, b);
            break;
        case "right-bottom":
            h.css({
                left:
                e.cr,
                top: k
            }).animate(c ? e.t: e.b, b);
            break;
        case "bottom":
            h.css({
                top:
                k
            }).animate(c ? e.t: e.b, b);
            break;
        case "left-bottom":
            h.css({
                left:
                e.cl,
                top: k
            }).animate(c ? e.t: e.b, b);
            break;
        case "left":
            h.css({
                left:
                -h.outerWidth()
            }).animate({
                left: f.offsetLeft
            },
            b)
        }
    },
    f.pt.autoArea = function(a) {
        var b, d, f, g, h, i, j, k, l, m, n, o = this;
        switch (a = a || o.index, b = o.config, d = b.page, f = c("#" + e[0] + a), g = f.find(e[2]), h = f.find(e[5]), j = b.title ? g.innerHeight() : 0, k = 0, "auto" === b.area[0] && h.outerWidth() >= b.maxWidth && f.css({
            width: b.maxWidth
        }), b.type) {
        case 0:
            l = f.find(".jm-box-button>a"),
            i = f.find(e[3]).outerHeight() + 20,
            l.length > 0 && (k = l.outerHeight() + 20);
            break;
        case 1:
            m = f.find(e[4]),
            i = c(d.dom).outerHeight(),
            "auto" === b.area[0] && f.css({
                width: m.outerWidth()
            }),
            ("" !== d.html || "" !== d.url) && (i = m.outerHeight());
            break;
        case 2:
            f.find("iframe").css({
                width:
                f.outerWidth(),
                height: f.outerHeight() - (b.title ? g.innerHeight() : 0)
            });
            break;
        case 3:
            n = f.find(".jm-box-loading"),
            i = n.outerHeight(),
            h.css({
                width: n.width()
            })
        }
        "auto" === b.area[1] && h.css({
            height: j + i + k
        }),
        c("#jm-box-border" + a).css({
            width: f.outerWidth() + 2 * b.border[0],
            height: f.outerHeight() + 2 * b.border[0]
        }),
        mbox.ie6 && "auto" !== b.area[0] && h.css({
            width: f.outerWidth()
        }),
        f.css("50%" !== b.offset[1] && "" != b.offset[1] || 4 === b.type ? {
            marginLeft: 0
        }: {
            marginLeft: -f.outerWidth() / 2
        })
    },
    f.pt.move = function() {
        var a = this,
        b = a.config,
        f = {
            setY: 0,
            movembox: function() {
                var a;
                a = 0 == parseInt(f.mboxE.css("margin-left")) ? parseInt(f.move.css("left")) : parseInt(f.move.css("left")) + -parseInt(f.mboxE.css("margin-left")),
                "fixed" !== f.mboxE.css("position") && (a -= f.mboxE.parent().offset().left, f.setY = 0),
                f.mboxE.css({
                    left: a,
                    top: parseInt(f.move.css("top")) - f.setY
                })
            }
        },
        g = a.mboxE.find(b.move);
        b.move && g.attr("move", "ok"),
        g.css(b.move ? {
            cursor: "move"
        }: {
            cursor: "auto"
        }),
        c(b.move).on("mousedown", 
        function(a) {
            if (a.preventDefault(), "ok" === c(this).attr("move")) {
                f.ismove = !0,
                f.mboxE = c(this).parents("." + e[0]);
                var g = f.mboxE.offset().left,
                h = f.mboxE.offset().top,
                i = f.mboxE.width() - 6,
                j = f.mboxE.height() - 6;
                c("#jm-box-moves")[0] || c("body").append('<div id="jm-box-moves" class="jm-box-moves" style="left:' + g + "px; top:" + h + "px; width:" + i + "px; height:" + j + 'px; z-index:2147483584"></div>'),
                f.move = c("#jm-box-moves"),
                b.moveType && f.move.css({
                    opacity: 0
                }),
                f.moveX = a.pageX - f.move.position().left,
                f.moveY = a.pageY - f.move.position().top,
                "fixed" !== f.mboxE.css("position") || (f.setY = d.scrollTop())
            }
        }),
        c(document).mousemove(function(a) {
            var c,
            e,
            g,
            h;
            f.ismove && (c = a.pageX - f.moveX, e = a.pageY - f.moveY, a.preventDefault(), b.moveOut || (f.setY = d.scrollTop(), g = d.width() - f.move.outerWidth() - b.border[0], h = b.border[0] + f.setY, c < b.border[0] && (c = b.border[0]), c > g && (c = g), h > e && (e = h), e > d.height() - f.move.outerHeight() - b.border[0] + f.setY && (e = d.height() - f.move.outerHeight() - b.border[0] + f.setY)), f.move.css({
                left: c,
                top: e
            }), b.moveType && f.movembox(), c = null, e = null, g = null, h = null)
        }).mouseup(function() {
            try {
                f.ismove && (f.movembox(), f.move.remove()),
                f.ismove = !1
            } catch(a) {
                f.ismove = !1
            }
            b.moveEnd && b.moveEnd()
        })
    },
    f.pt.autoclose = function() {
        var a = this,
        b = a.config.time,
        c = function() {
            b--,
            0 === b && (mbox.close(a.index), clearInterval(a.autotime))
        };
        a.autotime = setInterval(c, 1e3)
    },
    i.config = {
        end: {}
    },
    f.pt.callback = function() {
        var a = this,
        b = a.mboxE,
        d = a.config,
        e = d.dialog;
        a.openmbox(),
        a.config.success(b),
        mbox.ie6 && a.IE6(b),
        b.find(".jm-box-close").on("click", 
        function() {
            d.close(a.index),
            mbox.close(a.index)
        }),
        b.find(".jm-box-yes").on("click", 
        function() {
            d.yes ? d.yes(a.index) : e.yes(a.index),
			mbox.close(a.index)
        }),
        b.find(".jm-box-no").on("click", 
        function() {
            d.no ? d.no(a.index) : e.no(a.index),
            mbox.close(a.index)
        }),
        a.config.shadeClose && c("#jm-box-shade" + a.index).on("click", 
        function() {
            mbox.close(a.index)
        }),
        b.find(".jm-box-min").on("click", 
        function() {
            mbox.min(a.index, d),
            d.min && d.min(b)
        }),
        b.find(".jm-box-max").on("click", 
        function() {
            c(this).hasClass("jm-box-maxmin") ? (mbox.restore(a.index), d.restore && d.restore(b)) : (mbox.full(a.index, d), d.full && d.full(b))
        }),
        i.config.end[a.index] = d.end
    },
    i.reselect = function() {
        c.each(c("select"), 
        function() {
            var a = c(this);
            a.parents("." + e[0])[0] || 1 == a.attr("layer") && c("." + e[0]).length < 1 && a.removeAttr("layer").show(),
            a = null
        })
    },
    f.pt.IE6 = function(a) {
        var b,
        f = this,
        g = a.offset().top;
        b = f.config.fix ? 
        function() {
            a.css({
                top: d.scrollTop() + g
            })
        }: function() {
            a.css({
                top: g
            })
        },
        b(),
        d.scroll(b),
        c.each(c("select"), 
        function() {
            var a = c(this);
            a.parents("." + e[0])[0] || "none" == a.css("display") || a.attr({
                mbox: "1"
            }).hide(),
            a = null
        })
    },
    f.pt.openmbox = function() {
        var a = this;
        a.mboxE,
        mbox.autoArea = function(b) {
            return a.autoArea(b)
        },
        mbox.shift = function(b, c, d) {
            a.shift(b, c, d)
        },
        mbox.setMove = function() {
            return a.move()
        },
        mbox.zIndex = a.config.zIndex,
        mbox.setTop = function(a) {
            var b = function() {
                mbox.zIndex++,
                a.css("z-index", mbox.zIndex + 1)
            };
            return mbox.zIndex = parseInt(a[0].style.zIndex),
            a.on("mousedown", b),
            mbox.zIndex
        }
    },
    i.isauto = function(a, b, c) {
        "auto" === b.area[0] && (b.area[0] = a.outerWidth()),
        "auto" === b.area[1] && (b.area[1] = a.outerHeight()),
        a.attr({
            area: b.area + "," + c
        }),
        a.find(".jm-box-max").addClass("jm-box-maxmin")
    },
    i.rescollbar = function(a) {
        e.html.attr("layer-full") == a && (e.html[0].style.removeProperty ? e.html[0].style.removeProperty("overflow") : e.html[0].style.removeAttribute("overflow"), e.html.removeAttr("layer-full"))
    },
    mbox.getIndex = function(a) {
        return c(a).parents("." + e[0]).attr("times")
    },
    mbox.getChildFrame = function(a, b) {
        return b = b || c("." + e[1]).parents("." + e[0]).attr("times"),
        c("#" + e[0] + b).find("." + e[1]).contents().find(a)
    },
    mbox.getFrameIndex = function(a) {
        return c(a ? "#" + a: "." + e[1]).parents("." + e[0]).attr("times")
    },
    mbox.iframeAuto = function(a) {
        var b,
        d,
        f,
        g,
        h;
        a = a || c("." + e[1]).parents("." + e[0]).attr("times"),
        b = mbox.getChildFrame("body", a).outerHeight(),
        d = c("#" + e[0] + a),
        f = d.find(e[2]),
        g = 0,
        f && (g = f.height()),
        d.css({
            height: b + g
        }),
        h = -parseInt(c("#jm-box-border" + a).css("top")),
        c("#jm-box-border" + a).css({
            height: b + 2 * h + g
        }),
        c("#" + e[1] + a).css({
            height: b
        })
    },
    mbox.iframeSrc = function(a, b) {
        c("#" + e[0] + a).find("iframe").attr("src", b)
    },
    mbox.area = function(a, b) {
        var d,
        f = [c("#" + e[0] + a), c("#jm-box-border" + a)],
        g = f[0].attr("type"),
        h = f[0].find(e[5]),
        j = f[0].find(e[2]); (g === i.type[1] || g === i.type[2]) && (f[0].css(b), h.css({
            width: b.width,
            height: b.height
        }), g === i.type[2] && (d = f[0].find("iframe"), d.css({
            width: b.width,
            height: j ? b.height - j.innerHeight() : b.height
        })), "0px" !== f[0].css("margin-left") && (b.hasOwnProperty("top") && f[0].css({
            top: b.top - (f[1][0] ? parseFloat(f[1].css("top")) : 0)
        }), b.hasOwnProperty("left") && f[0].css({
            left: b.left + f[0].outerWidth() / 2 - (f[1][0] ? parseFloat(f[1].css("left")) : 0)
        }), f[0].css({
            marginLeft: -f[0].outerWidth() / 2
        })), f[1][0] && f[1].css({
            width: parseFloat(b.width) - 2 * parseFloat(f[1].css("left")),
            height: parseFloat(b.height) - 2 * parseFloat(f[1].css("top"))
        }))
    },
    mbox.min = function(a, b) {
        var d = c("#" + e[0] + a),
        f = [d.position().top, d.position().left + parseFloat(d.css("margin-left"))];
        i.isauto(d, b, f),
        mbox.area(a, {
            width: 180,
            height: 35
        }),
        d.find(".jm-box-min").hide(),
        "page" === d.attr("type") && d.find(e[4]).hide(),
        i.rescollbar(a)
    },
    mbox.restore = function(a) {
        var b = c("#" + e[0] + a),
        d = b.attr("area").split(",");
        b.attr("type"),
        mbox.area(a, {
            width: parseFloat(d[0]),
            height: parseFloat(d[1]),
            top: parseFloat(d[2]),
            left: parseFloat(d[3])
        }),
        b.find(".jm-box-max").removeClass("jm-box-maxmin"),
        b.find(".jm-box-min").show(),
        "page" === b.attr("type") && b.find(e[4]).show(),
        i.rescollbar(a)
    },
    mbox.full = function(a, b) {
        var f,
        g = c("#" + e[0] + a),
        h = 2 * b.border[0] || 6,
        j = [g.position().top, g.position().left + parseFloat(g.css("margin-left"))];
        i.isauto(g, b, j),
        e.html.attr("layer-full") || e.html.css("overflow", "hidden").attr("layer-full", a),
        clearTimeout(f),
        f = setTimeout(function() {
            mbox.area(a, {
                top: "fixed" === g.css("position") ? 0: d.scrollTop(),
                left: "fixed" === g.css("position") ? 0: d.scrollLeft(),
                width: d.width() - h,
                height: d.height() - h
            })
        },
        100)
    },
    mbox.title = function(a, b) {
        var d = c("#" + e[0] + (b || mbox.index)).find(".jm-box-title>em");
        d.html(a)
    },
    mbox.close = function(a) {
        var b,
        d = c("#" + e[0] + a),
        f = d.attr("type"),
        g = c("#jm-box-moves, #jm-box-shade" + a);
        if (d[0]) {
            if (f == i.type[1]) if (d.find(".xuboxPageHtml")[0]) d[0].innerHTML = "",
            d.remove();
            else for (d.find(".jm-box-setwin,.jm-box-close,.jm-box-button,.jm-box-title,.jm-box-border").remove(), b = 0; 3 > b; b++) d.find(".layer-pageContent").unwrap().hide();
            else d[0].innerHTML = "",
            d.remove();
            g.remove(),
            mbox.ie6 && i.reselect(),
            i.rescollbar(a),
            "function" == typeof i.config.end[a] && i.config.end[a](),
            delete i.config.end[a]
        }
    },
    mbox.closeLoad = function() {
        mbox.close(c(".jm-box-loading").parents("." + e[0]).attr("times"))
    },
    mbox.closeTips = function() {
        mbox.closeAll("tips")
    },
    mbox.closeAll = function(a) {
        c.each(c("." + e[0]), 
        function() {
            var b = c(this),
            d = a ? b.attr("type") === a: 1;
            d && mbox.close(b.attr("times")),
            d = null
        })
    },
    i.run = function() {
        c = jQuery,
        d = c(a),
        e.html = c("html")
        /*,mbox.use("skin/jm-box.css")*/
        ,
        c.mbox = function(a) {
            var b = new f(a);
            return b.index
        },
        (new Image).src = mbox.path + "layer/skin/default/jm-box-ico0.png"
    },
    g = "../../init/jquery",
    a.seajs ? define([g], 
    function(a, b, c) {
        i.run(),
        c.exports = mbox
    }) : i.run()
} (window);
