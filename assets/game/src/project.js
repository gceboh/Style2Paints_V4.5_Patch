require = function a(r, d, c) {
    function w(i, e) {
        if (!d[i]) {
            if (!r[i]) {
                var n = "function" == typeof require && require;
                if (!e && n)
                    return n(i, !0);
                if (s)
                    return s(i, !0);
                var o = new Error("Cannot find module '" + i + "'");
                throw o.code = "MODULE_NOT_FOUND",
                o
            }
            var t = d[i] = {
                exports: {}
            };
            r[i][0].call(t.exports, function(e) {
                var n = r[i][1][e];
                return w(n || e)
            }, t, t.exports, a, r, d, c)
        }
        return d[i].exports
    }
    for (var s = "function" == typeof require && require, e = 0; e < c.length; e++)
        w(c[e]);
    return w
}({
    BoxCanvas: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "fe52erRfo9NV5lQabMArD3F", "BoxCanvas"),
        n.exports = function(e) {
            var i = Object();
            return i.spriteFrame = new cc.SpriteFrame,
            i.texture2d = null,
            i.canvas = document.createElement("canvas"),
            i.canvas.id = "canvas_" + e,
            i.ini = function(e, n) {
                return i.canvas.width = parseInt(e),
                i.canvas.height = parseInt(n),
                i.ctx = i.canvas.getContext("2d"),
                i.ctx.fillStyle = i.ctx.createPattern(window.boxLoader.image, "repeat"),
                i.ctx.fillRect(0, 0, i.canvas.width, i.canvas.height),
                i.texture2d = new cc.Texture2D,
                i.spriteFrame.setTexture(i.texture2d),
                i.texture2d.initWithElement(i.canvas),
                i.texture2d.handleLoadedTexture(!0),
                i.spriteFrame
            }
            ,
            i
        }
        ,
        cc._RF.pop()
    }
    , {}],
    CreativeCanvas: [function(e, n, i) {
        "use strict";
        var o, u;
        cc._RF.push(n, "e7a806R1yBHDIRZPIq8JNfk", "CreativeCanvas"),
        n.exports = ((u = Object()).spriteFrame = new cc.SpriteFrame,
        u.texture2d = null,
        u.canvas = document.createElement("canvas"),
        u.canvas.id = "canvas_" + o,
        u.finalData = null,
        u.points_XYRGBR = [],
        u.current_index = 0,
        u.records = [],
        u.time_line = 0,
        u.prex = 0,
        u.prey = 0,
        u.re = !1,
        u.rex = 0,
        u.rey = 0,
        u.in_drag = !1,
        u.ctx = null,
        u.create_k = function() {
            u.records = u.records.splice(0, u.time_line + 1),
            u.records.push(JSON.stringify(window.creativeCanvas.points_XYRGBR)),
            u.time_line++,
            this.flush_bg()
        }
        ,
        u.undo = function() {
            u.time_line--,
            u.time_line < 0 && (u.time_line = 0),
            u.do(),
            this.flush_bg()
        }
        ,
        u.redo = function() {
            u.time_line++,
            u.time_line > u.records.length - 1 && (u.time_line = u.records.length - 1),
            u.do(),
            this.flush_bg()
        }
        ,
        u.do = function() {
            window.creativeCanvas.points_XYRGBR = JSON.parse(u.records[u.time_line]),
            u.finish()
        }
        ,
        u.ini = function(e, n) {
            return u.canvas.width = parseInt(e),
            u.canvas.height = parseInt(n),
            u.ctx = u.canvas.getContext("2d"),
            u.ctx.clearRect(0, 0, u.canvas.width, u.canvas.height),
            u.source = u.ctx.getImageData(0, 0, u.canvas.width, u.canvas.height),
            u.texture2d = new cc.Texture2D,
            u.spriteFrame.setTexture(u.texture2d),
            u.texture2d.initWithElement(u.canvas),
            u.texture2d.handleLoadedTexture(!0),
            u.records = [JSON.stringify([])],
            u.points_XYRGBR = [],
            u.time_line = 0,
            u.finish(),
            u.spriteFrame
        }
        ,
        u.ini_image = function(e, n, i) {
            return ctx = u.canvas.getContext("2d"),
            u.canvas.width = parseInt(n),
            u.canvas.height = parseInt(i),
            ctx.drawImage(e, 0, 0, u.canvas.width, u.canvas.height),
            u.source = ctx.getImageData(0, 0, u.canvas.width, u.canvas.height),
            u.texture2d = new cc.Texture2D,
            u.spriteFrame.setTexture(u.texture2d),
            u.texture2d.initWithElement(u.canvas),
            u.texture2d.handleLoadedTexture(!0),
            u.create_k(),
            this.flush_bg(),
            u.spriteFrame
        }
        ,
        u.flush = function() {
            var e = u.canvas.getContext("2d");
            u.source = e.getImageData(0, 0, u.canvas.width, u.canvas.height)
        }
        ,
        u.flush_bg = function() {}
        ,
        u.kill_preview = function() {
            window.pendingNode.active = !1,
            window.previewNode.opacity = 255
        }
        ,
        u.get_color = function(e, n) {
            if (null == u.source)
                return new [0, 0, 0, 0];
            var i = 0;
            return i = parseInt((1 - n) * u.canvas.height),
            i = parseInt(i * u.canvas.width),
            i = parseInt(i + e * u.canvas.width),
            i = parseInt(4 * i),
            [u.source.data[i + 0], u.source.data[i + 1], u.source.data[i + 2], u.source.data[i + 3]]
        }
        ,
        u.set_big_point = function(e, n, i, o, t, a, r) {
            u.ctx.fillStyle = "rgba(" + i + "," + o + "," + t + "," + a + ")",
            u.ctx.fillRect(e - r, n - r, 2 * r + 1, 2 * r + 1)
        }
        ,
        u.set_line = function(e, n, i, o, t, a, r, d, c) {
            for (var w = Math.abs(i - e), s = Math.abs(o - n), l = e < i ? 1 : -1, h = n < o ? 1 : -1, p = w - s; u.set_big_point(e, n, t, a, r, d, c),
            e != i || n != o; ) {
                var g = 2 * p;
                -s < g && (p -= s,
                e += l),
                g < w && (p += w,
                n += h)
            }
        }
        ,
        u.clear_points = function() {
            u.points_XYRGBR = []
        }
        ,
        u.add_point = function() {
            5 == window.minecraft.index ? u.points_XYRGBR.push([u.rex, u.rey, 0, 233, 1]) : 6 == window.minecraft.index ? u.points_XYRGBR.push([u.rex, u.rey, 1, 233, 0]) : u.points_XYRGBR.push([u.rex, u.rey, window.pickCanvas.currentColor[0], window.pickCanvas.currentColor[1], window.pickCanvas.currentColor[2]]),
            u.current_index = u.points_XYRGBR.length - 1
        }
        ,
        u.relocate_current_point = function() {
            -1 < u.current_index && u.current_index < u.points_XYRGBR.length && (u.points_XYRGBR[u.current_index][0] = u.rex,
            u.points_XYRGBR[u.current_index][1] = u.rey)
        }
        ,
        u.refresh_current_point_index = function(e) {
            u.current_index = -1;
            var n = parseInt(50 / (window.drag_target.scaleX + 1e-6));
            for (var i in window.isPen && (n /= 2),
            u.points_XYRGBR) {
                var o = (u.points_XYRGBR[i][0] - u.rex) * u.canvas.width
                  , t = (u.points_XYRGBR[i][1] - u.rey) * u.canvas.height;
                o * o + t * t < n * n && u.if_point_in_color(i) == window.in_color && (u.current_index = i)
            }
            -1 < u.current_index ? document.body.style.cursor = "move" : document.body.style.cursor = "auto"
        }
        ,
        u.if_point_in_color = function(e) {
            var n = u.points_XYRGBR[e]
              , i = n[2]
              , o = n[3]
              , t = n[4];
            return !(1 == i && 233 == o && 0 == t || 0 == i && 233 == o && 1 == t)
        }
        ,
        u.finish = function() {
            if (null != u.ctx) {
                u.ctx.clearRect(0, 0, u.canvas.width, u.canvas.height);
                for (var e = 0; e < u.points_XYRGBR.length; e++) {
                    var n = u.points_XYRGBR[e]
                      , i = parseInt(n[0] * u.canvas.width)
                      , o = parseInt((1 - n[1]) * u.canvas.height)
                      , t = n[2]
                      , a = n[3]
                      , r = n[4];
                    if (1 == t && 233 == a && 0 == r) {
                        if (window.in_color)
                            continue;
                        u.ctx.strokeStyle = "#000000",
                        u.ctx.lineWidth = 4.5,
                        u.ctx.beginPath(),
                        u.ctx.moveTo(i - 12, o - 12),
                        u.ctx.lineTo(i + 12, o + 12),
                        u.ctx.closePath(),
                        u.ctx.stroke(),
                        u.ctx.beginPath(),
                        u.ctx.moveTo(i + 12, o - 12),
                        u.ctx.lineTo(i - 12, o + 12),
                        u.ctx.closePath(),
                        u.ctx.stroke(),
                        u.ctx.strokeStyle = "#ffffff",
                        u.ctx.lineWidth = 1.5,
                        u.ctx.beginPath(),
                        u.ctx.moveTo(i - 10, o - 10),
                        u.ctx.lineTo(i + 10, o + 10),
                        u.ctx.closePath(),
                        u.ctx.stroke(),
                        u.ctx.beginPath(),
                        u.ctx.moveTo(i + 10, o - 10),
                        u.ctx.lineTo(i - 10, o + 10),
                        u.ctx.closePath(),
                        u.ctx.stroke()
                    } else if (0 == t && 233 == a && 1 == r) {
                        if (window.in_color)
                            continue;
                        u.ctx.strokeStyle = "#000000",
                        u.ctx.lineWidth = 4.5,
                        u.ctx.beginPath(),
                        u.ctx.arc(i, o, 10, 0, 2 * Math.PI),
                        u.ctx.closePath(),
                        u.ctx.stroke(),
                        u.ctx.strokeStyle = "#ffffff",
                        u.ctx.lineWidth = 1.5,
                        u.ctx.beginPath(),
                        u.ctx.arc(i, o, 10, 0, 2 * Math.PI),
                        u.ctx.closePath(),
                        u.ctx.stroke()
                    } else {
                        if (!window.in_color)
                            continue;
                        u.ctx.strokeStyle = "rgba(" + (255 - t).toString() + "," + (255 - a).toString() + "," + (255 - r).toString() + ",1.0)",
                        u.ctx.fillStyle = "rgba(" + t.toString() + "," + a.toString() + "," + r.toString() + ",1.0)",
                        u.ctx.lineWidth = 1.5,
                        u.ctx.beginPath(),
                        u.ctx.moveTo(i - 7, o - 7),
                        u.ctx.lineTo(i - 7, o + 7),
                        u.ctx.lineTo(i + 7, o + 7),
                        u.ctx.lineTo(i + 7, o - 7),
                        u.ctx.closePath(),
                        u.ctx.fill(),
                        u.ctx.stroke()
                    }
                }
            }
        }
        ,
        u),
        cc._RF.pop()
    }
    , {}],
    FileInputs: [function(e, n, i) {
        "use strict";
        var o;
        cc._RF.push(n, "905c5qeemxJLpQ8dr1wfPNY", "FileInputs"),
        n.exports = ((o = Object()).html_obj = document.createElement("input"),
        o.html_obj.id = "FileSelector",
        o.html_obj.type = "file",
        o.html_obj.accept = "image/*",
        o.html_obj.style.height = "0px",
        o.html_obj.style.display = "block",
        o.html_obj.style.overflow = "hidden",
        document.body.insertBefore(o.html_obj, document.body.firstChild),
        o.actural_callback = null,
        o.url = "",
        o.fake_callback = function(e) {
            void 0 !== window.URL ? o.url = window.URL.createObjectURL(e.target.files[0]) : o.url = window.webkitURL.createObjectURL(e.target.files[0]),
            o.actural_callback(o.url),
            event.target.value = ""
        }
        ,
        o.html_obj.addEventListener("change", o.fake_callback, !1),
        o.activate = function(e) {
            o.actural_callback = e,
            o.html_obj.click()
        }
        ,
        o),
        cc._RF.pop()
    }
    , {}],
    ImageCanvas: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "8fc68P9vqxERoq8iKAIOEEI", "ImageCanvas"),
        n.exports = function(e) {
            var h = Object();
            return h.spriteFrame = new cc.SpriteFrame,
            h.texture2d = null,
            h.source = null,
            h.canvas = document.createElement("canvas"),
            h.canvas.id = "canvas_" + e,
            h.image = null,
            h.load_image = function(e, n, i) {
                h.image = e,
                h.canvas.width = parseInt(n),
                h.canvas.height = parseInt(i);
                var o = h.canvas.getContext("2d");
                return o.drawImage(e, 0, 0, h.canvas.width, h.canvas.height),
                h.dataurl = h.canvas.toDataURL("image/png"),
                h.source = o.getImageData(0, 0, h.canvas.width, h.canvas.height),
                h.texture2d = new cc.Texture2D,
                h.spriteFrame.setTexture(h.texture2d),
                h.texture2d.initWithElement(h.canvas),
                h.texture2d.handleLoadedTexture(!0),
                h.spriteFrame
            }
            ,
            h.load_image_adv = function(e, n, i, o, t) {
                if (h.image = e,
                1024 < parseInt(o) && 1024 < parseInt(t)) {
                    var a = window.regulator.minRegulate([parseInt(o), parseInt(t)], 1024);
                    h.canvas.width = a[0],
                    h.canvas.height = a[1]
                } else
                    h.canvas.width = parseInt(o),
                    h.canvas.height = parseInt(t);
                var r = h.canvas.getContext("2d");
                return r.drawImage(e, n, i, parseInt(o), parseInt(t), 0, 0, h.canvas.width, h.canvas.height),
                h.dataurl = h.canvas.toDataURL("image/png"),
                h.source = r.getImageData(0, 0, h.canvas.width, h.canvas.height),
                h.texture2d = new cc.Texture2D,
                h.spriteFrame.setTexture(h.texture2d),
                h.texture2d.initWithElement(h.canvas),
                h.texture2d.handleLoadedTexture(!0),
                h.spriteFrame
            }
            ,
            h.load_canvas = function(e) {
                h.canvas.width = e.width,
                h.canvas.height = e.height;
                var n = h.canvas.getContext("2d");
                return n.drawImage(e, 0, 0, h.canvas.width, h.canvas.height),
                h.source = n.getImageData(0, 0, h.canvas.width, h.canvas.height),
                h.texture2d = new cc.Texture2D,
                h.spriteFrame.setTexture(h.texture2d),
                h.texture2d.initWithElement(h.canvas),
                h.texture2d.handleLoadedTexture(!0),
                h.spriteFrame
            }
            ,
            h.clear = function() {
                h.canvas.width = 100,
                h.canvas.height = 100;
                var e = h.canvas.getContext("2d");
                return e.clearRect(0, 0, 100, 100),
                h.source = e.getImageData(0, 0, h.canvas.width, h.canvas.height),
                h.texture2d = new cc.Texture2D,
                h.spriteFrame.setTexture(h.texture2d),
                h.texture2d.initWithElement(h.canvas),
                h.texture2d.handleLoadedTexture(!0),
                h.spriteFrame
            }
            ,
            h.dark = function() {
                h.canvas.width = 100,
                h.canvas.height = 100;
                var e = h.canvas.getContext("2d");
                return e.fillStyle = "rgba(0,0,0,0.5)",
                e.fillRect(0, 0, 100, 100),
                h.source = e.getImageData(0, 0, h.canvas.width, h.canvas.height),
                h.texture2d = new cc.Texture2D,
                h.spriteFrame.setTexture(h.texture2d),
                h.texture2d.initWithElement(h.canvas),
                h.texture2d.handleLoadedTexture(!0),
                h.spriteFrame
            }
            ,
            h.load_alpha = function() {
                var e = h.canvas.getContext("2d");
                h.dataurl = h.canvas.toDataURL("image/png"),
                h.source = e.getImageData(0, 0, h.canvas.width, h.canvas.height);
                for (var n = 0; n < h.canvas.height; n++)
                    for (var i = 0; i < h.canvas.width; i++) {
                        var o = 4 * (i + n * h.canvas.width)
                          , t = o + 1
                          , a = o + 2
                          , r = o + 3
                          , d = h.source.data[o]
                          , c = h.source.data[t]
                          , w = h.source.data[a]
                          , s = h.source.data[r]
                          , l = Math.max((1 * d + 1 * c + 1 * w) / 3, 255 - s);
                        h.source.data[o] = 0,
                        h.source.data[t] = 0,
                        h.source.data[a] = 0,
                        h.source.data[r] = 255 - l
                    }
                return e.putImageData(h.source, 0, 0),
                h.texture2d = new cc.Texture2D,
                h.spriteFrame.setTexture(h.texture2d),
                h.texture2d.initWithElement(h.canvas),
                h.texture2d.handleLoadedTexture(!0),
                h.spriteFrame
            }
            ,
            h.get_color = function(e, n) {
                if (null == h.source)
                    return new cc.color(255,255,255);
                var i = 0;
                return i = parseInt((1 - n) * h.canvas.height),
                i = parseInt(i * h.canvas.width),
                i = parseInt(i + e * h.canvas.width),
                i = parseInt(4 * i),
                new cc.color(h.source.data[i],h.source.data[i + 1],h.source.data[i + 2])
            }
            ,
            h
        }
        ,
        cc._RF.pop()
    }
    , {}],
    ImageLoader: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "28e74s7diBLh5Ox7WgbLlpC", "ImageLoader"),
        n.exports = function(e) {
            var t = Object()
              , n = "tempDiv" + e
              , a = "imgHead" + e
              , i = document.createElement("div");
            return i.style.position = "absolute",
            i.id = n,
            i.innerHTML = "<img id=" + a + ">",
            i.style.display = "none",
            i.style.visibility = "hidden",
            document.body.appendChild(i),
            t.image = document.getElementById(a),
            t.on_process = null,
            t.on_error = null,
            t.on_finish = null,
            t.load_url = function(i, e) {
                t.image.onload = function() {
                    e(document.getElementById(a))
                }
                ,
                t.image.onerror = function() {
                    null != t.on_error && t.on_error()
                }
                ;
                var o = new XMLHttpRequest;
                o.open("GET", i, !0),
                o.responseType = "arraybuffer",
                o.onprogress = function(e) {
                    e.lengthComputable && (console.log(i + " - " + e.loaded + " / " + e.total),
                    null != t.on_process && t.on_process(e.loaded / e.total))
                }
                ,
                o.onreadystatechange = function() {
                    if (4 == o.readyState && 200 == o.status)
                        try {
                            null != t.on_finish && (console.log(i + " - on_finish called"),
                            t.on_finish());
                            var e = o.getAllResponseHeaders().match(/^Content-Type\:\s*(.*?)$/im)[1] || "image/png"
                              , n = new Blob([this.response],{
                                type: e
                            });
                            console.log(i + " - finished"),
                            t.image.src = window.URL.createObjectURL(n),
                            console.log(i + " - blobed")
                        } catch (e) {
                            console.log(e),
                            null != t.on_error && t.on_error(),
                            window.controller.net_unlock("error")
                        }
                    else
                        4 == o.readyState && null != t.on_error && t.on_error()
                }
                ;
                try {
                    o.send(),
                    console.log(i + "->xmlHTTP.send();"),
                    window.controller.net_unlock("finished")
                } catch (e) {
                    console.log(e),
                    null != t.on_error && t.on_error(),
                    window.controller.net_unlock("error")
                }
            }
            ,
            t
        }
        ,
        cc._RF.pop()
    }
    , {}],
    PickCanvas: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "076a0aT+NZGT7xs77Y6v1Zy", "PickCanvas"),
        n.exports = function(e) {
            var N = Object();
            return N.spriteFrame = new cc.SpriteFrame,
            N.texture2d = null,
            N.source = null,
            N.canvas = document.createElement("canvas"),
            N.canvas.id = "canvas_" + e,
            N.canvas.width = 300,
            N.canvas.height = 1078,
            N.currentColor = new Array(255,230,200),
            N.floatingColor = new Array(0,255,0),
            N.bigall = [47079079, 112128144, 119136153, 105105105, 169169169, 211211211, 220220220, 176196222, 139, 25025112, 72061139, 75000130, 205, 123104238, 65105225, 100149237, 139187, 70130180, 30144255, 191255, 135206250, 135206235, 173216230, 255255, 95158160, 32178170, 102205170, 206209, 72209204, 64224208, 176224230, 175238238, 107142035, 85107047, 1e5, 34139034, 46139087, 60179113, 50205050, 154205050, 127255212, 250154, 255127, 124252e3, 127255e3, 173255047, 144238144, 152251152, 139000139, 106090205, 138043226, 148000211, 153050204, 186085211, 147112219, 143188143, 139e6, 139069019, 165042042, 178034034, 160082045, 205092092, 210105030, 189183107, 220020060, 255020147, 255105180, 255000255, 218112214, 238130238, 221160221, 216191216, 188143143, 199021133, 219112147, 233150122, 240128128, 255160122, 255182193, 255192203, 255069e3, 255099071, 255079080, 250128114, 25514e4, 255165e3, 244164096, 230230250, 184134011, 205133063, 218165032, 210180140, 222184135, 255215e3, 255228225, 224255255, 240230140, 238232170, 250250210, 255250205, 245245220, 255248220, 255255224, 255218185, 245222179, 255222173, 255228181, 255228196, 255235205, 255239213, 250235215, 255240245, 240221195, 234182156, 240221208, 247206181, 238187153, 240208182, 234169143, 221169143, 247217214, 226199179, 247195156, 221169130, 234208182, 240186173, 166149141, 240221182, 234195169, 212128107, 158139130, 234182143, 247208195, 247182156, 235178133, 247195169, 247208182, 240195169, 195116077, 240208169, 234195182, 240169130, 69042029, 247208169, 247221195, 240182143, 236221202, 249249249],
            N.record = [],
            N.ctx = N.canvas.getContext("2d"),
            N.ring = null,
            N.tring = null,
            N.ini = function(e) {
                return N.ctx.drawImage(e, 0, 0, 300, 300),
                N.ring = N.ctx.getImageData(0, 0, 300, 300),
                N.tring = N.ctx.getImageData(0, 0, 164, 164),
                N.source = N.ctx.getImageData(0, 0, N.canvas.width, N.canvas.height),
                N.texture2d = new cc.Texture2D,
                N.spriteFrame.setTexture(N.texture2d),
                N.texture2d.initWithElement(N.canvas),
                N.texture2d.handleLoadedTexture(!0),
                N.ctx = N.texture2d.getHtmlElementObj().getContext("2d"),
                N.finish(),
                N.spriteFrame
            }
            ,
            N.finish = function(e) {
                if (null != N.ring) {
                    var n = 0;
                    N.ctx.fillStyle = "rgb(80, 80, 80)",
                    N.ctx.fillRect(0, 0, N.canvas.width, N.canvas.height),
                    N.ctx.putImageData(N.ring, 0, n),
                    n += 300;
                    for (var i = 1 * Math.min(Math.min(N.currentColor[0], N.currentColor[1]), N.currentColor[2]), o = 1 * Math.max(Math.max(N.currentColor[0], N.currentColor[1]), N.currentColor[2]) - i + 1e-4, t = (1 * N.currentColor[0] - i + 1e-4) / o * 255, a = (1 * N.currentColor[1] - i + 1e-4) / o * 255, r = (1 * N.currentColor[2] - i + 1e-4) / o * 255, d = 0; d < 164; d++)
                        for (var c = 0; c < 164; c++) {
                            var w = 4 * (164 * d + 163 - c)
                              , s = w + 1
                              , l = w + 2
                              , h = w + 3
                              , p = 1 * d / 164 * 255
                              , g = 1 * c / 164 * (255 - p) / 255;
                            N.tring.data[w] = p + t * g,
                            N.tring.data[s] = p + a * g,
                            N.tring.data[l] = p + r * g,
                            N.tring.data[h] = 255
                        }
                    N.ctx.putImageData(N.tring, 68, 68),
                    n += 0,
                    N.ctx.fillStyle = "rgb(" + N.currentColor[0] + "," + N.currentColor[1] + ", " + N.currentColor[2] + ")",
                    N.ctx.fillRect(8, n + 5, 142, 30),
                    N.ctx.fillStyle = "rgb(" + N.floatingColor[0] + "," + N.floatingColor[1] + ", " + N.floatingColor[2] + ")",
                    N.ctx.fillRect(150, n + 5, 142, 30),
                    n += 40;
                    for (var u = 0; u < N.record.length; u++) {
                        var _ = parseInt(u % 8)
                          , v = parseInt(u / 8)
                          , f = N.record[N.record.length - 1 - u]
                          , m = f % 1e3
                          , C = (f = parseInt(f / 1e3)) % 1e3
                          , x = (f = parseInt(f / 1e3)) % 1e3;
                        N.ctx.beginPath(),
                        N.ctx.fillStyle = "rgb(" + x + "," + C + ", " + m + ")",
                        N.ctx.arc(parseInt(38 * _ + 19), parseInt(n + 38 * v + 19), 16, 0, 2 * Math.PI, !0),
                        N.ctx.closePath(),
                        N.ctx.fill()
                    }
                    N.source = N.ctx.getImageData(0, 0, N.canvas.width, N.canvas.height)
                }
            }
            ,
            N.finish_float = function(e) {
                if (null != N.ring) {
                    N.ctx.fillStyle = "rgb(" + N.floatingColor[0] + "," + N.floatingColor[1] + ", " + N.floatingColor[2] + ")",
                    N.ctx.fillRect(150, 305, 142, 30)
                }
            }
            ,
            N.get_color = function(e, n) {
                if (null == N.source)
                    return new cc.color(255,255,255);
                var i = 0;
                return i = parseInt((1 - n) * N.canvas.height),
                i = parseInt(i * N.canvas.width),
                i = parseInt(i + e * N.canvas.width),
                i = parseInt(4 * i),
                new cc.color(N.source.data[i],N.source.data[i + 1],N.source.data[i + 2])
            }
            ,
            N
        }
        ,
        cc._RF.pop()
    }
    , {}],
    SizeRegulator: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "45ffcOaBs5DwLbHaSSfzUG/", "SizeRegulator"),
        n.exports.minRegulate = function(e, n) {
            var i = parseFloat(e[0])
              , o = parseFloat(e[1]);
            return o < i ? (i *= n / o,
            o = n) : (o *= n / i,
            i = n),
            [parseInt(i), parseInt(o)]
        }
        ,
        n.exports.maxRegulate = function(e, n) {
            var i = parseFloat(e[0])
              , o = parseFloat(e[1]);
            return i < o ? (i *= n / o,
            o = n) : (o *= n / i,
            i = n),
            [parseInt(i), parseInt(o)]
        }
        ,
        cc._RF.pop()
    }
    , {}],
    TripleCanvas: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "7319cMXNsxIhLHpuS9egChN", "TripleCanvas"),
        n.exports = function(e) {
            var y = Object();
            return y.spriteFrame = new cc.SpriteFrame,
            y.texture2d = null,
            y.spriteFrame_p = new cc.SpriteFrame,
            y.texture2d_p = null,
            y.source = null,
            y.source_light = null,
            y.source_color = null,
            y.canvas_light = document.createElement("canvas"),
            y.canvas_light.id = "canvas_light" + e,
            y.canvas_color = document.createElement("canvas"),
            y.canvas_color.id = "canvas_color" + e,
            y.canvas_shade = document.createElement("canvas"),
            y.canvas_shade.id = "canvas_shade" + e,
            y.load_local = function() {
                y.canvas = window.previewImageCanvas.canvas;
                var e = y.canvas.width
                  , n = y.canvas.height;
                if (window.hasColor) {
                    y.canvas_light.width = parseInt(e),
                    y.canvas_light.height = parseInt(n),
                    y.canvas_color.width = parseInt(e),
                    y.canvas_color.height = parseInt(n);
                    var i = y.canvas.getContext("2d");
                    y.source = i.getImageData(0, 0, y.canvas.width, y.canvas.height),
                    y.source_light = i.getImageData(0, 0, y.canvas.width, y.canvas.height),
                    y.source_color = i.getImageData(0, 0, y.canvas.width, y.canvas.height);
                    for (var o = 0; o < n; o++)
                        for (var t = 0; t < e; t++) {
                            var a = 4 * (t + o * e)
                              , r = a + 1
                              , d = a + 2
                              , c = a + 3
                              , w = y.source.data[a]
                              , s = y.source.data[r]
                              , l = y.source.data[d]
                              , h = (y.source.data[c],
                            Math.max(w, s, l));
                            y.source_light.data[a] = h,
                            y.source_light.data[r] = h,
                            y.source_light.data[d] = h,
                            y.source_light.data[c] = 255,
                            h < 15 && (l = s = w = h),
                            y.source_color.data[a] = parseInt((1 * w + 1e-4) / (1 * h + 1e-4) * 255),
                            y.source_color.data[r] = parseInt((1 * s + 1e-4) / (1 * h + 1e-4) * 255),
                            y.source_color.data[d] = parseInt((1 * l + 1e-4) / (1 * h + 1e-4) * 255),
                            y.source_color.data[c] = 255
                        }
                    if (y.canvas_light.getContext("2d").putImageData(y.source_light, 0, 0),
                    y.canvas_color.getContext("2d").putImageData(y.source_color, 0, 0),
                    window.hasRender) {
                        y.canvas_shade.width = parseInt(e),
                        y.canvas_shade.height = parseInt(n),
                        y.source = y.canvas_shade.getContext("2d").getImageData(0, 0, y.canvas.width, y.canvas.height),
                        y.source_from = window.previewImageCanvas.canvas.getContext("2d").getImageData(0, 0, y.canvas.width, y.canvas.height),
                        y.source_to = window.renderImageCanvas.canvas.getContext("2d").getImageData(0, 0, y.canvas.width, y.canvas.height);
                        for (var p = 0; p < n; p++)
                            for (var g = 0; g < e; g++) {
                                var u = 4 * (g + p * e)
                                  , _ = u + 1
                                  , v = u + 2
                                  , f = u + 3
                                  , m = y.source_from.data[u]
                                  , C = y.source_from.data[_]
                                  , x = y.source_from.data[v]
                                  , N = (1 * y.source_to.data[u] + 1e-4) / (1 * m + 1e-4) * 255
                                  , I = (1 * y.source_to.data[_] + 1e-4) / (1 * C + 1e-4) * 255
                                  , k = (1 * y.source_to.data[v] + 1e-4) / (1 * x + 1e-4) * 255;
                                255 < N && (N = 255),
                                255 < I && (I = 255),
                                255 < k && (k = 255),
                                y.source.data[u] = parseInt(N),
                                y.source.data[_] = parseInt(I),
                                y.source.data[v] = parseInt(k),
                                y.source.data[f] = 255
                            }
                        y.canvas_shade.getContext("2d").putImageData(y.source, 0, 0)
                    }
                }
            }
            ,
            y
        }
        ,
        cc._RF.pop()
    }
    , {}],
    colorpicker: [function(i, e, n) {
        "use strict";
        cc._RF.push(e, "292e9Clf/5EoYjj7Il6urD/", "colorpicker"),
        Array.prototype.indexOf = function(e) {
            for (var n = 0; n < this.length; n++)
                if (this[n] == e)
                    return n;
            return -1
        }
        ,
        Array.prototype.remove = function(e) {
            var n = this.indexOf(e);
            -1 < n && this.splice(n, 1)
        }
        ,
        cc.Class({
            extends: cc.Component,
            properties: {
                dropNode: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                window.color_picker_main = this
            },
            start: function() {
                var e = i("./ImageLoader")
                  , n = i("./PickCanvas");
                window.pickCanvas = n("paletteImage"),
                window.right_color_picker = this.getComponent("cc.Sprite"),
                window.right_color_picker_node = this.node,
                window.color_picker_main = this,
                window.dropper_node = this.dropNode,
                this.last_record = 0,
                e("paletteImage").load_url("res\\raw-assets\\Texture\\ring.png", function(e) {
                    window.right_color_picker.spriteFrame = window.pickCanvas.ini(e),
                    window.right_color_picker_node.on("mousemove", function(e) {
                        window.mousePosition = e.getLocation();
                        var n = window.right_color_picker_node
                          , i = (n.convertToWorldSpace(n.position),
                        cc.winSize.width - 300)
                          , o = window.mousePosition.x - i
                          , t = window.mousePosition.y - 362;
                        if (0 < o && 0 < t && o < n.width && t < n.height) {
                            window.mouseRelativeX = o / n.width,
                            window.mouseRelativeY = t / n.height;
                            var a = window.pickCanvas.get_color(window.mouseRelativeX, window.mouseRelativeY);
                            80 == a.r && 80 == a.g && 80 == a.b && (a.r = 255,
                            a.g = 255,
                            a.b = 255),
                            window.color_picker_main.float_do(a)
                        }
                    }),
                    window.right_color_picker_node.on("mousedown", function(e) {
                        window.color_picker_main.pick_do()
                    })
                }),
                window.dropper_node.on(cc.Node.EventType.MOUSE_DOWN, this.onDropDown, this),
                window.dropper_node.on(cc.Node.EventType.MOUSE_UP, this.onDropUp, this),
                window.dropper_node.on(cc.Node.EventType.TOUCH_MOVE, this.onDropMove, this),
                window.in_dropping = !1
            },
            float_do: function(e) {
                window.pickCanvas.floatingColor[0] = e.r,
                window.pickCanvas.floatingColor[1] = e.g,
                window.pickCanvas.floatingColor[2] = e.b,
                window.dropper_node.color = e,
                window.pickCanvas.finish_float()
            },
            pick_do: function() {
                window.dropper_node.x = 122,
                window.dropper_node.y = 268,
                window.minecraft.go_pen(),
                window.color_picker_main.pick_float(),
                window.minecraft.set_cur_color(window.pickCanvas.currentColor)
            },
            onDropDown: function(e) {
                window.in_dropping = !0
            },
            onDropUp: function(e) {
                window.in_dropping = !1,
                window.color_picker_main.pick_do()
            },
            onDropMove: function(e) {
                if (window.in_dropping) {
                    var n = e.touch.getDelta();
                    window.dropper_node.x += n.x,
                    window.dropper_node.y += n.y;
                    var i = .5 * window.leftNode.width + 1 * window.drag_target.x - .5 * window.drag_target.width * window.drag_target.scaleX + 300
                      , o = .5 * window.leftNode.height + 1 * window.drag_target.y - .5 * window.drag_target.height * window.drag_target.scaleX
                      , t = (window.mousePosition.x - i) / (window.drag_target.width * window.drag_target.scaleX)
                      , a = (window.mousePosition.y - o) / (window.drag_target.height * window.drag_target.scaleX);
                    if (0 < t && 0 < a && t < 1 && a < 1)
                        if (window.creativeCanvas.re = !0,
                        window.creativeCanvas.rex = t,
                        window.creativeCanvas.rey = a,
                        window.creativeCanvas.refresh_current_point_index(),
                        -1 < window.creativeCanvas.current_index) {
                            var r = window.creativeCanvas.points_XYRGBR[window.creativeCanvas.current_index]
                              , d = [r[2], r[3], r[4]];
                            window.color_picker_main.float_do(new cc.color(d[0],d[1],d[2])),
                            window.minecraft.set_cur_color([d[0], d[1], d[2]])
                        } else {
                            var c = window.previewImageCanvas;
                            window.girdNode.active && (c = window.girdImageCanvas);
                            var w = c.get_color(t, a);
                            window.color_picker_main.float_do(w),
                            window.minecraft.set_cur_color([w.r, w.g, w.b])
                        }
                    else
                        window.creativeCanvas.re = !1
                }
            },
            pick_float: function() {
                window.controller.on_pen(),
                window.pickCanvas.currentColor[0] = window.pickCanvas.floatingColor[0],
                window.pickCanvas.currentColor[1] = window.pickCanvas.floatingColor[1],
                window.pickCanvas.currentColor[2] = window.pickCanvas.floatingColor[2],
                window.pickCanvas.finish()
            },
            make_record: function() {
                var e = 1e6 * window.pickCanvas.currentColor[0] + 1e3 * window.pickCanvas.currentColor[1] + window.pickCanvas.currentColor[2];
                this.last_record != e && (window.pickCanvas.record.remove(e),
                window.pickCanvas.record.push(e),
                window.pickCanvas.finish(),
                this.last_record = e)
            }
        }),
        cc._RF.pop()
    }
    , {
        "./ImageLoader": "ImageLoader",
        "./PickCanvas": "PickCanvas"
    }],
    controller: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a55dcSJ4f1CEaD9OSsdYeLl", "controller"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sketchNode: {
                    default: null,
                    type: cc.Node
                },
                alphaSketchNode: {
                    default: null,
                    type: cc.Node
                },
                hintNode: {
                    default: null,
                    type: cc.Node
                },
                bghintNode: {
                    default: null,
                    type: cc.Node
                },
                girdNode: {
                    default: null,
                    type: cc.Node
                },
                previewNode: {
                    default: null,
                    type: cc.Node
                },
                labelNode: {
                    default: null,
                    type: cc.Node
                },
                pendingNode: {
                    default: null,
                    type: cc.Node
                },
                fileBtnNode: {
                    default: null,
                    type: cc.Node
                },
                real_fileBtnNode: {
                    default: null,
                    type: cc.Node
                },
                aiBtnNode: {
                    default: null,
                    type: cc.Node
                },
                magicBtnNode: {
                    default: null,
                    type: cc.Node
                },
                leftNode: {
                    default: null,
                    type: cc.Node
                },
                confirmNode: {
                    default: null,
                    type: cc.Node
                },
                c9Node: {
                    default: null,
                    type: cc.Node
                },
                logoNode: {
                    default: null,
                    type: cc.Node
                },
                cpNode: {
                    default: null,
                    type: cc.Node
                },
                cpNode2: {
                    default: null,
                    type: cc.Node
                },
                lightNode: {
                    default: null,
                    type: cc.Node
                },
                processingNode: {
                    default: null,
                    type: cc.Node
                },
                V4_toggle: {
                    default: null,
                    type: cc.Toggle
                },
                c1BtnNode: {
                    default: null,
                    type: cc.Node
                },
                c2BtnNode: {
                    default: null,
                    type: cc.Node
                },
                c3BtnNode: {
                    default: null,
                    type: cc.Node
                },
                c4BtnNode: {
                    default: null,
                    type: cc.Node
                },
                c5BtnNode: {
                    default: null,
                    type: cc.Node
                },
                c6BtnNode: {
                    default: null,
                    type: cc.Node
                },
                c7BtnNode: {
                    default: null,
                    type: cc.Node
                },
                c8BtnNode: {
                    default: null,
                    type: cc.Node
                },
                c9BtnNode: {
                    default: null,
                    type: cc.Node
                },
                claNode: {
                    default: null,
                    type: cc.Node
                }
            },
            show_light: function() {
                window.controller.lightNode.y = 181,
                window.in_color = !1,
                window.bghintNode.active = !0,
                window.creativeCanvas.finish(),
                window.minecraft.shift(),
                window.girdNode.active = !1,
                0 == window.hasRender && window.faceSeletor.flush_preview_light(),
                console.log("show_light")
            },
            hide_light: function() {
                window.controller.lightNode.y = 4096,
                window.in_color = !0,
                window.bghintNode.active = !1,
                window.creativeCanvas.finish(),
                window.minecraft.shift(),
                window.girdNode.active = !1,
                console.log("hide_light"),
                window.hasGird && (window.hasColor || window.faceSeletor.download_gird_color())
            },
            to_gird: function() {
                window.controller.lightNode.y = 4096,
                window.in_color = !0,
                window.bghintNode.active = !1,
                window.creativeCanvas.finish(),
                window.minecraft.shift(),
                window.girdNode.active = !0,
                console.log("to_gird"),
                window.hasGird || window.hasColor && window.faceSeletor.download_gird_color()
            },
            on_pen: function() {
                window.isPen = !0,
                window.in_move = !1,
                window.eraser_masker.active = !1,
                console.log("on_pen")
            },
            on_eraser: function() {
                window.isPen = !1,
                window.in_move = !1,
                window.minecraft.set_index(-233),
                window.eraser_masker.active = !0,
                console.log("on_eraser")
            },
            on_upload_hints: function() {
                if (0 != window.hasSketch) {
                    var e = prompt("Points?");
                    null != e && (window.creativeCanvas.points_XYRGBR = JSON.parse(e),
                    window.creativeCanvas.finish(),
                    window.creativeCanvas.create_k())
                }
            },
            on_download_hints: function() {
                if (0 != window.hasSketch) {
                    var e = window.open("about:blank").document;
                    e.body.style.backgroundColor = "#000000",
                    e.writeln(JSON.stringify(window.creativeCanvas.points_XYRGBR))
                }
            },
            on_logo: function() {
                var e = "https://style2paints.github.io/";
                "zh" == navigator.language.substring(0, 2) && (e = "https://style2paints.github.io/README_zh"),
                "ja" == navigator.language.substring(0, 2) && (e = "https://style2paints.github.io/README_ja"),
                window.open(e)
            },
            on_logo_en: function() {
                window.open("https://style2paints.github.io/")
            },
            on_logo_zh: function() {
                window.open("https://style2paints.github.io/README_zh")
            },
            on_logo_ja: function() {
                window.open("https://style2paints.github.io/README_ja")
            },
            on_twitter: function() {
                window.open("https://twitter.com/hashtag/style2paints?f=tweets&vertical=default")
            },
            on_github: function() {
                window.open("https://github.com/lllyasviel/style2paints")
            },
            on_file: function() {
                window.uploading || window.fileSelector.activate(window.controller.load_sketch)
            },
            on_magic: function() {
                window.faceSeletor.flush_preview()
            },
            on_ai: function() {
                if (!window.uploading && 0 != window.hasSketch) {
                    var e = window.open("about:blank").document;
                    window.tripleCanvas.load_local();
                    var n = "";
                    n += '<div><a href="https://twitter.com/hashtag/style2paints?f=tweets&vertical=default" target="_blank">【 Click here to see others\'s results on Twitter. 】</a></div>',
                    n += '<div><a href="https://twitter.com/hashtag/style2paints?f=tweets&vertical=default" target="_blank">【 他の人の結果を見る。 】</a></div>',
                    n += "<div><p><br/></p></div>",
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + '.blended_smoothed_careful.png width="1024"></div>',
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + '.blended_flat_careful.png width="1024"></div>',
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + '.flat_careful.png width="1024"></div>',
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + '.smoothed_careful.png width="1024"></div>',
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + '.blended_smoothed_careless.png width="1024"></div>',
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + '.blended_flat_careless.png width="1024"></div>',
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + '.flat_careless.png width="1024"></div>',
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + '.smoothed_careless.png width="1024"></div>',
                    n += "<div><img src=" + window.server_url + "/rooms/" + window.current_room + '/sketch.png width="1024"></div>',
                    n += "<div>" + JSON.stringify(window.creativeCanvas.points_XYRGBR) + "</div>",
                    window.confirmNode.active = !1,
                    e.writeln('<html><head></head><body style="background-color:#C8C8C8">' + n + "</body></html>")
                }
            },
            on_big_error: function() {
                var e = "Network error. Please refresh this page.";
                "zh" == navigator.language.substring(0, 2) && (e = "严重网络错误，请刷新。"),
                "ja" == navigator.language.substring(0, 2) && (e = "ネットワークエラー、ページを更新してください。"),
                alert(e)
            },
            net_lock: function(e, n) {
                console.log(e + " - net_lock -" + n),
                window.uploading = !0,
                window.fileBtnNode.active = !1,
                window.aiBtnNode.active = !1,
                window.magicBtnNode.active = !1,
                window.processingNode.active = !0,
                window.state_label.change(e, n)
            },
            net_unlock: function(e) {
                try {
                    console.log(e + " - net_unlock"),
                    window.uploading = !1,
                    window.fileBtnNode.active = !0,
                    window.aiBtnNode.active = !0,
                    window.magicBtnNode.active = !0,
                    window.processingNode.active = !1,
                    window.state_label.change(e, 1)
                } catch (e) {
                    console.log(e)
                }
            },
            on_c0_event: function() {
                window.current_cid = 0,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c1BtnNode.y
            },
            on_c1_event: function() {
                window.current_cid = 1,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c2BtnNode.y
            },
            on_c2_event: function() {
                window.current_cid = 2,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c3BtnNode.y
            },
            on_c3_event: function() {
                window.current_cid = 3,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c4BtnNode.y
            },
            on_c4_event: function() {
                window.current_cid = 4,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c5BtnNode.y
            },
            on_c5_event: function() {
                window.current_cid = 5,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c6BtnNode.y
            },
            on_c6_event: function() {
                window.current_cid = 6,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c7BtnNode.y
            },
            on_c7_event: function() {
                window.current_cid = 7,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c8BtnNode.y
            },
            on_c8_event: function() {
                window.current_cid = 8,
                window.previewSprite.spriteFrame = window.previewImageCanvas.load_canvas(window.finImageCanvass[window.current_cid].canvas),
                window.claNode.y = window.c9BtnNode.y
            },
            onLoad: function() {
                window.controller = this,
                window.uploading = !1,
                window.server_url = "http://127.0.0.1:8233",
                window.fileSelector = t("./FileInputs"),
                window.regulator = t("./SizeRegulator"),
                window.fileBtnNode = this.fileBtnNode,
                window.aiBtnNode = this.aiBtnNode,
                window.magicBtnNode = this.magicBtnNode,
                window.confirmNode = this.confirmNode,
                window.c9Node = this.c9Node,
                window.c1BtnNode = this.c1BtnNode,
                window.c2BtnNode = this.c2BtnNode,
                window.c3BtnNode = this.c3BtnNode,
                window.c4BtnNode = this.c4BtnNode,
                window.c5BtnNode = this.c5BtnNode,
                window.c6BtnNode = this.c6BtnNode,
                window.c7BtnNode = this.c7BtnNode,
                window.c8BtnNode = this.c8BtnNode,
                window.c9BtnNode = this.c9BtnNode,
                window.claNode = this.claNode,
                window.c1BtnSprite = this.c1BtnNode.getComponent("cc.Sprite"),
                window.c2BtnSprite = this.c2BtnNode.getComponent("cc.Sprite"),
                window.c3BtnSprite = this.c3BtnNode.getComponent("cc.Sprite"),
                window.c4BtnSprite = this.c4BtnNode.getComponent("cc.Sprite"),
                window.c5BtnSprite = this.c5BtnNode.getComponent("cc.Sprite"),
                window.c6BtnSprite = this.c6BtnNode.getComponent("cc.Sprite"),
                window.c7BtnSprite = this.c7BtnNode.getComponent("cc.Sprite"),
                window.c8BtnSprite = this.c8BtnNode.getComponent("cc.Sprite"),
                window.c9BtnSprite = this.c9BtnNode.getComponent("cc.Sprite"),
                window.confirmNode.active = !1,
                window.c9Node.active = !1,
                window.sketchNode = this.sketchNode,
                window.sketchSprite = this.sketchNode.getComponent("cc.Sprite"),
                window.alphaSketchNode = this.alphaSketchNode,
                window.alphaSketchSprite = this.alphaSketchNode.getComponent("cc.Sprite"),
                window.cpNode = this.cpNode,
                window.cpNodeSprite = this.cpNode.getComponent("cc.Sprite"),
                window.hasSketch = !1,
                window.hasGird = !1,
                window.hasColor = !1,
                window.hasRender = !1,
                window.in_color = !0,
                window.current_cid = 0,
                window.claNode.y = window.c1BtnNode.y,
                window.hintNode = this.hintNode,
                window.hintSprite = this.hintNode.getComponent("cc.Sprite"),
                window.bghintNode = this.bghintNode,
                window.bghintSprite = this.bghintNode.getComponent("cc.Sprite"),
                window.bghintNode.active = !1,
                window.girdNode = this.girdNode,
                window.girdSprite = this.girdNode.getComponent("cc.Sprite"),
                window.girdNode.active = !1,
                window.previewNode = this.previewNode,
                window.previewSprite = this.previewNode.getComponent("cc.Sprite"),
                window.cpNode2 = this.cpNode2,
                window.cpNode2Sprite = this.cpNode2.getComponent("cc.Sprite"),
                window.state_label = this.labelNode.getComponent("fake_bar"),
                window.pendingNode = this.pendingNode,
                window.pendingNode.active = !1,
                window.V4_toggle = this.V4_toggle;
                var e = t("./ImageLoader")
                  , n = t("./ImageCanvas")
                  , i = t("./BoxCanvas")
                  , o = t("./TripleCanvas");
                window.finImageLoaders = [e("finImage1"), e("finImage2"), e("finImage3"), e("finImage4"), e("finImage5"), e("finImage6"), e("finImage7"), e("finImage8"), e("finImage9")],
                window.finImageCanvass = [n("finImage1"), n("finImage2"), n("finImage3"), n("finImage4"), n("finImage5"), n("finImage6"), n("finImage7"), n("finImage8"), n("finImage9")],
                window.sketchImageLoader = e("sketchImage"),
                window.sketchImageCanvas = n("sketchImage"),
                window.sketchImageCanvas_bf = n("sketchImage_bf"),
                window.renderImageLoader = e("renderImage"),
                window.renderImageCanvas = n("renderImage"),
                window.cropImageLoader = e("cropImage"),
                window.cropImageCanvas = n("cropImage"),
                window.cropMaskCanvas = n("cropMask"),
                window.girdImageLoader = e("girdImage"),
                window.girdImageCanvas = n("girdImage"),
                window.sketchBoxCanvas = i("sketchBox"),
                window.tripleCanvas = o("tripleCanvas"),
                window.hintImageLoader = e("hintImage"),
                window.resultImageLoader = e("resultImage"),
                window.previewImageLoader = e("previewImage"),
                window.previewImageCanvas = n("previewImage"),
                window.creativeCanvas = t("./CreativeCanvas"),
                window.boxLoader = e("boxLoader"),
                window.boxLoader.load_url("res\\raw-assets\\Texture\\board.png", function(e) {}),
                window.leftNode = this.leftNode,
                window.isPen = !0,
                window.in_move = !1,
                window.current_room = "new",
                window.current_step = "new",
                window.logoNode = this.logoNode,
                window.processingNode = this.processingNode,
                window.processingNode.active = !1,
                window.cp_drager = [],
                window.crop_dragger_A = null
            },
            start: function() {
                setTimeout(this.on_pen, 500),
                setTimeout(this.hide_light, 500)
            },
            load_sketch: function(e) {
                window.cropImageLoader.load_url(e, function(e) {
                    window.confirmNode.active = !0,
                    window.cpNode.width = cc.winSize.width - 100,
                    window.cpNode.height = cc.winSize.height - 300,
                    window.cpNodeSprite.spriteFrame = window.cropImageCanvas.load_image(e, e.width, e.height),
                    window.cpNode2Sprite.spriteFrame = window.cropMaskCanvas.dark();
                    var n = 1 * window.cpNode.width / (1 * window.cropImageCanvas.canvas.width)
                      , i = 1 * window.cpNode.height / (1 * window.cropImageCanvas.canvas.height)
                      , o = Math.min(n, i);
                    window.cpNode.width = parseInt(1 * window.cropImageCanvas.canvas.width * o),
                    window.cpNode.height = parseInt(1 * window.cropImageCanvas.canvas.height * o),
                    window.cp_drager[0].x = -window.cpNode.width / 3.23,
                    window.cp_drager[0].y = 0,
                    window.cp_drager[1].x = window.cpNode.width / 3.23,
                    window.cp_drager[1].y = 0,
                    window.cp_drager[2].x = 0,
                    window.cp_drager[2].y = -window.cpNode.height / 3.23,
                    window.cp_drager[3].x = 0,
                    window.cp_drager[3].y = window.cpNode.height / 3.23,
                    null != window.crop_dragger_A && window.crop_dragger_A.ontiii(null)
                })
            },
            load_hints: function(e) {
                window.sketchImageLoader.load_url(e, function(e) {
                    window.previewSprite.spriteFrame = window.previewImageCanvas.clear(),
                    window.hintSprite.spriteFrame = window.creativeCanvas.ini_image(e, e.width, e.height)
                })
            },
            confirm_ok: function() {
                var e = window.cropImageCanvas.image
                  , n = parseInt(window.sketch_crop_w)
                  , i = parseInt(window.sketch_crop_h)
                  , o = parseInt(window.sketch_crop_l)
                  , t = parseInt(window.cropImageCanvas.canvas.height - window.sketch_crop_u);
                console.log([o, t, n, i]),
                window.sketchImageCanvas.load_image_adv(e, o, t, n, i),
                window.sketchImageCanvas_bf.load_image_adv(e, o, t, n, i),
                window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.load_alpha(),
                window.hasGird = !1,
                window.hasColor = !1,
                window.hasRender = !1,
                window.previewSprite.spriteFrame = window.previewImageCanvas.clear(),
                window.girdSprite.spriteFrame = window.girdImageCanvas.clear(),
                window.bghintSprite.spriteFrame = window.renderImageCanvas.clear(),
                window.current_room = "new",
                window.current_step = "new";
                var a = window.regulator.minRegulate([n, i], 2048)
                  , r = window.regulator.maxRegulate([n, i], 140);
                window.sketchSprite.spriteFrame = window.sketchBoxCanvas.ini(n, i),
                window.hintSprite.spriteFrame = window.creativeCanvas.ini(a[0], a[1]),
                window.sketchNode.width = a[0],
                window.sketchNode.height = a[1],
                window.sketchNode.scaleX = 1 * (cc.winSize.height - 420) / window.sketchNode.height * 1,
                window.sketchNode.scaleY = window.sketchNode.scaleX,
                window.c9Node.active = !0,
                window.sketchNode.x = 105 / 1440 * cc.winSize.height,
                window.sketchNode.y = .5 * cc.winSize.height - window.sketchNode.scaleY * window.sketchNode.height * .5 - 100,
                window.hasSketch = !0,
                window.logoNode.active = !1,
                window.confirmNode.active = !1,
                window.c1BtnSprite.spriteFrame = window.finImageCanvass[0].load_image_adv(e, o, t, n, i),
                window.c1BtnNode.width = r[0],
                window.c1BtnNode.height = r[1],
                window.c2BtnSprite.spriteFrame = window.finImageCanvass[1].load_image_adv(e, o, t, n, i),
                window.c2BtnNode.width = r[0],
                window.c2BtnNode.height = r[1],
                window.c3BtnSprite.spriteFrame = window.finImageCanvass[2].load_image_adv(e, o, t, n, i),
                window.c3BtnNode.width = r[0],
                window.c3BtnNode.height = r[1],
                window.c4BtnSprite.spriteFrame = window.finImageCanvass[3].load_image_adv(e, o, t, n, i),
                window.c4BtnNode.width = r[0],
                window.c4BtnNode.height = r[1],
                window.c5BtnSprite.spriteFrame = window.finImageCanvass[4].load_image_adv(e, o, t, n, i),
                window.c5BtnNode.width = r[0],
                window.c5BtnNode.height = r[1],
                window.c6BtnSprite.spriteFrame = window.finImageCanvass[5].load_image_adv(e, o, t, n, i),
                window.c6BtnNode.width = r[0],
                window.c6BtnNode.height = r[1],
                window.c7BtnSprite.spriteFrame = window.finImageCanvass[6].load_image_adv(e, o, t, n, i),
                window.c7BtnNode.width = r[0],
                window.c7BtnNode.height = r[1],
                window.c8BtnSprite.spriteFrame = window.finImageCanvass[7].load_image_adv(e, o, t, n, i),
                window.c8BtnNode.width = r[0],
                window.c8BtnNode.height = r[1],
                window.c9BtnSprite.spriteFrame = window.finImageCanvass[8].load_image_adv(e, o, t, n, i),
                window.c9BtnNode.width = r[0],
                window.c9BtnNode.height = r[1],
                window.controller.uploadSketch()
            },
            confirm_failed: function() {
                window.confirmNode.active = !1
            },
            uploadSketch: function() {
                if (!window.uploading && null != window.sketchImageCanvas.source) {
                    window.controller.net_lock("initializing", 0),
                    window.current_room = "new",
                    window.current_step = "new",
                    window.creativeCanvas.kill_preview();
                    var n = new XMLHttpRequest;
                    n.open("POST", window.server_url + "/upload_sketch", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"),
                    n.onreadystatechange = function() {
                        if (4 == n.readyState && 200 == n.status) {
                            var e = n.responseText.split("_");
                            window.current_room = e[0],
                            window.current_step = e[1],
                            console.log("get room id " + window.current_room),
                            console.log("get step id " + window.current_step),
                            window.controller.net_unlock("finished"),
                            window.current_cid = 0,
                            window.claNode.y = window.c1BtnNode.y,
                            window.controller.hide_light(),
                            window.creativeCanvas.flush_bg(),
                            window.faceSeletor.flush_preview()
                        } else
                            4 == n.readyState && (window.state_label.change("error", 1),
                            window.controller.on_big_error(),
                            window.location.reload())
                    }
                    ,
                    n.send("room=" + window.current_room + "&sketch=" + encodeURIComponent(window.sketchImageCanvas.dataurl)),
                    console.log("sketch uploaded")
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        "./BoxCanvas": "BoxCanvas",
        "./CreativeCanvas": "CreativeCanvas",
        "./FileInputs": "FileInputs",
        "./ImageCanvas": "ImageCanvas",
        "./ImageLoader": "ImageLoader",
        "./SizeRegulator": "SizeRegulator",
        "./TripleCanvas": "TripleCanvas"
    }],
    dragbox: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "6591e257m1DWrS+H2/IDVmm", "dragbox"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.drag_box = this
            },
            start: function() {
                window.mouse_l = !1,
                window.mouse_r = !1,
                window.mouse_m = !1,
                window.ctrl = !1,
                window.alt = !1,
                (window.drag_box = this).node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this),
                this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this),
                this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this),
                this.node.on("mousemove", function(e) {
                    window.mousePosition = e.getLocation();
                    var n = .5 * window.leftNode.width + 1 * window.drag_target.x - .5 * window.drag_target.width * window.drag_target.scaleX + 300
                      , i = .5 * window.leftNode.height + 1 * window.drag_target.y - .5 * window.drag_target.height * window.drag_target.scaleX
                      , o = (window.mousePosition.x - n) / (window.drag_target.width * window.drag_target.scaleX)
                      , t = (window.mousePosition.y - i) / (window.drag_target.height * window.drag_target.scaleX);
                    0 < o && 0 < t && o < 1 && t < 1 ? (window.creativeCanvas.re = !0,
                    window.creativeCanvas.rex = o,
                    window.creativeCanvas.rey = t,
                    window.creativeCanvas.in_drag || window.creativeCanvas.refresh_current_point_index()) : window.creativeCanvas.re = !1,
                    window.alt && (window.mouse_l || window.mouse_r || window.mouse_m || window.in_color && window.drag_box.do_picking())
                }),
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(e) {
                    e.keyCode == cc.KEY.z && window.creativeCanvas.undo()
                }),
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(e) {
                    e.keyCode == cc.KEY.y && window.creativeCanvas.redo()
                }),
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(e) {
                    switch (e.keyCode) {
                    case cc.KEY.ctrl:
                        window.ctrl = !0;
                        break;
                    case cc.KEY.alt:
                        window.alt || (window.alt = !0,
                        window.in_color && (window.drag_box.begin_picking(),
                        window.drag_box.do_picking()))
                    }
                }, this),
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(e) {
                    switch (e.keyCode) {
                    case cc.KEY.ctrl:
                        window.ctrl = !1;
                        break;
                    case cc.KEY.alt:
                        window.alt = !1,
                        window.in_color && window.drag_box.end_picking()
                    }
                }, this)
            },
            onTouchMove: function(e) {
                if (void 0 !== window.drag_target)
                    if (window.mouse_m || window.mouse_r || window.in_move) {
                        var n = e.touch.getDelta();
                        window.drag_target.x += n.x,
                        window.drag_target.y += n.y
                    } else
                        window.mouse_l && (window.isPen ? window.creativeCanvas.in_drag && (window.creativeCanvas.relocate_current_point(),
                        window.creativeCanvas.finish()) : (window.creativeCanvas.refresh_current_point_index(),
                        -1 < window.creativeCanvas.current_index && window.creativeCanvas.if_point_in_color(window.creativeCanvas.current_index) == window.in_color && (window.creativeCanvas.points_XYRGBR.splice(window.creativeCanvas.current_index, 1),
                        window.creativeCanvas.finish())))
            },
            onMouseDown: function(e) {
                var n = e.getButton();
                n === cc.Event.EventMouse.BUTTON_LEFT ? (window.mouse_l = !0,
                window.creativeCanvas.re && 0 == window.in_move && (window.isPen ? (window.creativeCanvas.current_index < 0 && (window.creativeCanvas.add_point(),
                window.creativeCanvas.finish()),
                window.creativeCanvas.in_drag = !0) : (window.creativeCanvas.refresh_current_point_index(),
                -1 < window.creativeCanvas.current_index && window.creativeCanvas.if_point_in_color(window.creativeCanvas.current_index) == window.in_color && (window.creativeCanvas.points_XYRGBR.splice(window.creativeCanvas.current_index, 1),
                window.creativeCanvas.finish())))) : n === cc.Event.EventMouse.BUTTON_MIDDLE ? window.mouse_m = !0 : n === cc.Event.EventMouse.BUTTON_RIGHT && (window.mouse_r = !0)
            },
            onMouseUp: function(e) {
                var n = e.getButton();
                n === cc.Event.EventMouse.BUTTON_LEFT ? (window.mouse_l = !1,
                window.creativeCanvas.in_drag = !1,
                window.creativeCanvas.create_k()) : n === cc.Event.EventMouse.BUTTON_MIDDLE ? window.mouse_m = !1 : n === cc.Event.EventMouse.BUTTON_RIGHT && (window.mouse_r = !1)
            },
            onMouseWheel: function(e) {
                void 0 !== window.drag_target && (0 < e.getScrollY() ? window.drag_target.runAction(cc.scaleTo(.1, 1.2 * window.drag_target.scaleX)) : window.drag_target.runAction(cc.scaleTo(.1, window.drag_target.scaleX / 1.2)))
            },
            begin_picking: function() {
                void 0 !== window.dropper_node && window.creativeCanvas.flush()
            },
            do_picking: function() {
                if (void 0 !== window.dropper_node) {
                    window.dropper_node.x = window.mousePosition.x - cc.winSize.width + 150 + 30,
                    window.dropper_node.y = window.mousePosition.y - cc.winSize.height / 2 - 181 + 30;
                    var e = .5 * window.leftNode.width + 1 * window.drag_target.x - .5 * window.drag_target.width * window.drag_target.scaleX + 300
                      , n = .5 * window.leftNode.height + 1 * window.drag_target.y - .5 * window.drag_target.height * window.drag_target.scaleX
                      , i = (window.mousePosition.x - e) / (window.drag_target.width * window.drag_target.scaleX)
                      , o = (window.mousePosition.y - n) / (window.drag_target.height * window.drag_target.scaleX);
                    if (0 < i && 0 < o && i < 1 && o < 1)
                        if (window.creativeCanvas.re = !0,
                        window.creativeCanvas.rex = i,
                        window.creativeCanvas.rey = o,
                        window.creativeCanvas.refresh_current_point_index(),
                        -1 < window.creativeCanvas.current_index) {
                            var t = window.creativeCanvas.points_XYRGBR[window.creativeCanvas.current_index]
                              , a = [t[2], t[3], t[4]];
                            window.color_picker_main.float_do(new cc.color(a[0],a[1],a[2])),
                            window.minecraft.set_cur_color([a[0], a[1], a[2]]),
                            window.pickCanvas.currentColor[0] = a[0],
                            window.pickCanvas.currentColor[1] = a[1],
                            window.pickCanvas.currentColor[2] = a[2]
                        } else {
                            var r = window.previewImageCanvas;
                            window.girdNode.active && (r = window.girdImageCanvas);
                            var d = r.get_color(i, o);
                            window.color_picker_main.float_do(d),
                            window.minecraft.set_cur_color([d.r, d.g, d.b]),
                            window.pickCanvas.currentColor[0] = d.r,
                            window.pickCanvas.currentColor[1] = d.g,
                            window.pickCanvas.currentColor[2] = d.b
                        }
                }
            },
            end_picking: function() {
                void 0 !== window.dropper_node && (this.do_picking(),
                window.pickCanvas.floatingColor[0] = window.dropper_node.color.r,
                window.pickCanvas.floatingColor[1] = window.dropper_node.color.g,
                window.pickCanvas.floatingColor[2] = window.dropper_node.color.b,
                window.dropper_node.x = 122,
                window.dropper_node.y = 268,
                window.color_picker_main.pick_do())
            }
        }),
        cc._RF.pop()
    }
    , {}],
    dragtarget: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "16ac9dXjiBLKrkojVzbW1dk", "dragtarget"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.drag_target = this.node
            }
        }),
        cc._RF.pop()
    }
    , {}],
    eraser_masker: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "d389dAkX0JBZruQtEeVulcE", "eraser_masker"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.eraser_masker = this.node
            },
            update: function(e) {
                this.node.x = window.mousePosition.x - cc.winSize.width / 2,
                this.node.y = window.mousePosition.y - cc.winSize.height / 2
            }
        }),
        cc._RF.pop()
    }
    , {}],
    faceSelector: [function(a, e, n) {
        "use strict";
        cc._RF.push(e, "8c11b3zCbJK37zCkjWNkHWp", "faceSelector"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bigFaceNode: {
                    default: null,
                    type: cc.Node
                },
                faceNodes: {
                    default: [],
                    type: cc.Node
                }
            },
            onLoad: function() {
                window.faceSeletor = this
            },
            start: function() {
                var e = this;
                window.faceID = -233,
                window.faceSeletor = this,
                window.bigFaceNode = this.bigFaceNode,
                window.bigFaceSprite = this.bigFaceNode.getComponent("cc.Sprite");
                for (var n = function(n) {
                    e.faceNodes[n].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame,
                    e.faceNodes[n].getComponent(cc.Sprite).spriteFrame.setTexture(cc.textureCache.addImage("res\\raw-assets\\face_128\\" + (n + 1) + ".jpg")),
                    e.faceNodes[n].on(cc.Node.EventType.MOUSE_UP, function(e) {
                        window.faceSeletor.on_face_selected(n)
                    })
                }, i = 0; i < 32; i++)
                    n(i);
                var o = a("./ImageLoader")
                  , t = a("./ImageCanvas");
                window.faceImageLoader = o("faceImage"),
                window.faceImageCanvas = t("faceImage"),
                this.on_face_selected(Math.floor(32 * Math.random())),
                this.bigFaceNode.on("mousemove", function(e) {
                    window.mousePosition = e.getLocation();
                    var n = 150 - .5 * window.bigFaceNode.width
                      , i = 1290 - .5 * window.bigFaceNode.height
                      , o = (1 * window.mousePosition.x - n) / (1 * window.bigFaceNode.width)
                      , t = (1 * window.mousePosition.y - i) / (1 * window.bigFaceNode.height);
                    if (0 < o && 0 < t && o < 1 && t < 1) {
                        var a = window.faceImageCanvas.get_color(o, t);
                        window.color_picker_main.float_do(a)
                    }
                }),
                this.bigFaceNode.on("mousedown", function(e) {
                    window.color_picker_main.pick_do()
                })
            },
            on_face_selected: function(e) {
                window.faceID = e,
                window.faceImageLoader.load_url("res\\raw-assets\\face_512\\" + (e + 1) + ".jpg", function(e) {
                    window.bigFaceSprite.spriteFrame = window.faceImageCanvas.load_image(e, 240, 240),
                    window.bigFaceNode.width = 240,
                    window.bigFaceNode.height = 240
                }),
                window.girdNode.active ? window.controller.to_gird() : window.controller.hide_light(),
                window.creativeCanvas.flush_bg()
                //,this.flush_preview() //disable start painting immediately after selecting the color scheme
            },
            on_upload: function() {//Upload reference image
                //0 != window.hasSketch && //allow submit of reference image before uploading sketch
                window.fileSelector.activate(window.faceSeletor.load_reference)
            },
            flush_preview: function() {
                window.in_color ? this.flush_preview_color() : this.flush_preview_light()
            },
            on_toggle_v4v2: function() {
                window.controller.hide_light(),
                window.faceSeletor.flush_preview()
            },
            flush_preview_color: function() {
                if (!window.uploading && 0 != window.hasSketch) {
                    window.hasGird = !1,
                    window.hasColor = !1,
                    window.hasRender = !1,
                    window.controller.net_lock("painting", 0);
                    var n = new XMLHttpRequest;
                    n.open("POST", window.server_url + "/request_result", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"),
                    n.onreadystatechange = function() {
                        if (4 == n.readyState && 200 == n.status) {
                            var e = n.responseText.split("_");
                            window.current_room = e[0],
                            window.current_step = e[1],
                            console.log("get room id " + window.current_room),
                            console.log("get step id " + window.current_step),
                            window.controller.net_unlock("finished"),
                            window.faceSeletor.download_gird_color()
                        } else
                            4 == n.readyState && window.controller.net_unlock("error")
                    }
                    ,
                    n.send("room=" + window.current_room + "&points=" + encodeURIComponent(JSON.stringify(window.creativeCanvas.points_XYRGBR)) + "&face=" + (window.faceID < 0 ? encodeURIComponent(window.faceImageCanvas.canvas.toDataURL("image/png")) : "null") + "&faceID=" + (window.faceID + 65535) + "&need_render=0&skipper=null&inv4=" + (window.V4_toggle.isChecked ? "1" : "0") + "&r=" + (window.lighter.color_tog.isChecked ? window.lighter.light_R_slider.progress : -1) + "&g=" + (window.lighter.color_tog.isChecked ? window.lighter.light_G_slider.progress : -1) + "&b=" + (window.lighter.color_tog.isChecked ? window.lighter.light_B_slider.progress : -1) + "&h=" + window.lighter.light_H_slider.progress + "&d=" + window.light_direction),
                    console.log("request sended")
                }
            },
            download_gird_color: function() {
                window.resultImageLoader.on_error = function(e) {
                    window.controller.net_unlock("error")
                }
                ,
                window.resultImageLoader.on_finish = function(e) {
                    window.controller.net_unlock("finished")
                }
                ,
                window.finImageLoaders[0].load_url(window.server_url + "/rooms/" + window.current_room + "/sketch.png", function(e) {
                    window.c1BtnSprite.spriteFrame = window.finImageCanvass[0].load_image(e, e.width, e.height),
                    0 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                }),
                window.finImageLoaders[1].load_url(window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + ".flat_careless.png", function(e) {
                    window.c2BtnSprite.spriteFrame = window.finImageCanvass[1].load_image(e, e.width, e.height),
                    1 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                }),
                window.finImageLoaders[2].load_url(window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + ".blended_flat_careless.png", function(e) {
                    window.c3BtnSprite.spriteFrame = window.finImageCanvass[2].load_image(e, e.width, e.height),
                    2 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                }),
                window.finImageLoaders[3].load_url(window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + ".smoothed_careless.png", function(e) {
                    window.c4BtnSprite.spriteFrame = window.finImageCanvass[3].load_image(e, e.width, e.height),
                    3 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                }),
                window.finImageLoaders[4].load_url(window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + ".blended_smoothed_careless.png", function(e) {
                    window.c5BtnSprite.spriteFrame = window.finImageCanvass[4].load_image(e, e.width, e.height),
                    4 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                }),
                window.finImageLoaders[5].load_url(window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + ".flat_careful.png", function(e) {
                    window.c6BtnSprite.spriteFrame = window.finImageCanvass[5].load_image(e, e.width, e.height),
                    5 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                }),
                window.finImageLoaders[6].load_url(window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + ".blended_flat_careful.png", function(e) {
                    window.c7BtnSprite.spriteFrame = window.finImageCanvass[6].load_image(e, e.width, e.height),
                    6 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                }),
                window.finImageLoaders[7].load_url(window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + ".smoothed_careful.png", function(e) {
                    window.c8BtnSprite.spriteFrame = window.finImageCanvass[7].load_image(e, e.width, e.height),
                    7 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                }),
                window.finImageLoaders[8].load_url(window.server_url + "/rooms/" + window.current_room + "/" + window.current_step + ".blended_smoothed_careful.png", function(e) {
                    window.c9BtnSprite.spriteFrame = window.finImageCanvass[8].load_image(e, e.width, e.height),
                    8 == window.current_cid && (window.previewSprite.spriteFrame = window.previewImageCanvas.load_image(e, e.width, e.height),
                    window.alphaSketchSprite.spriteFrame = window.sketchImageCanvas.clear(),
                    window.hasColor = !0,
                    window.controller.net_unlock("finished"),
                    window.controller.hide_light())
                })
            },
            flush_preview_light: function() {},
            load_reference: function(e) {
                window.faceImageLoader.load_url(e, function(e) {
                    if (!(e.width > 2.5 * e.height || e.height > 2.5 * e.width)) {
                        var n = window.regulator.maxRegulate([e.width, e.height], 240);
                        window.bigFaceSprite.spriteFrame = window.faceImageCanvas.load_image(e, n[0], n[1]),
                        window.bigFaceNode.width = n[0],
                        window.bigFaceNode.height = n[1],
                        window.faceID = -233,
                        window.controller.hide_light(),
                        window.faceSeletor.flush_preview()
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {
        "./ImageCanvas": "ImageCanvas",
        "./ImageLoader": "ImageLoader"
    }],
    fake_bar: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "61dcdov4D1Nc6gCTDSTIWPe", "fake_bar"),
        cc.Class({
            extends: cc.Component,
            properties: {
                lab: {
                    default: null,
                    type: cc.Label
                },
                lab2: {
                    default: null,
                    type: cc.Label
                },
                prof: {
                    default: null,
                    type: cc.Node
                },
                prob: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                (window.fake_bar_pro = this).text = "finished",
                this.progress = 1
            },
            change: function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                this.text = e,
                this.progress = n
            },
            update: function(e) {
                this.progress += 2e-4 * (1 - this.progress),
                1 < this.progress && (this.progress = 1),
                this.lab.string = this.text + " (" + parseInt(100 * this.progress) + "%)",
                this.lab2.string = this.lab.string,
                this.prof.width = parseInt(this.prob.width * this.progress),
                this.prob.active = this.progress < 1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    lighter: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "90b3at5d8FPDJEjfZXvwb7o", "lighter"),
        cc.Class({
            extends: cc.Component,
            properties: {
                light_R_slider: {
                    default: null,
                    type: cc.Slider
                },
                light_G_slider: {
                    default: null,
                    type: cc.Slider
                },
                light_B_slider: {
                    default: null,
                    type: cc.Slider
                },
                light_H_slider: {
                    default: null,
                    type: cc.Slider
                },
                light_TT_slider: {
                    default: null,
                    type: cc.Toggle
                },
                light_TF_slider: {
                    default: null,
                    type: cc.Toggle
                },
                light_FT_slider: {
                    default: null,
                    type: cc.Toggle
                },
                light_FF_slider: {
                    default: null,
                    type: cc.Toggle
                },
                bgs: {
                    default: null,
                    type: cc.Node
                },
                colors: {
                    default: null,
                    type: cc.Node
                },
                color_tog: {
                    default: null,
                    type: cc.Toggle
                }
            },
            onLoad: function() {
                window.lighter = this
            },
            start: function() {
                this.light_R_slider.progress = .99,
                this.light_G_slider.progress = .83,
                this.light_B_slider.progress = .66,
                this.light_H_slider.progress = 100 / 600,
                window.lighter = this,
                window.light_direction = 0,
                this.reflush()
            },
            light_direction_0: function() {
                window.light_direction = 0
            },
            light_direction_1: function() {
                window.light_direction = 1
            },
            light_direction_2: function() {
                window.light_direction = 2
            },
            light_direction_3: function() {
                window.light_direction = 3
            },
            on_shift: function() {
                window.lighter.color_tog.isChecked ? window.lighter.colors.active = !0 : window.lighter.colors.active = !1,
                window.lighter.reflush()
            },
            reflush: function() {
                window.lighter.color_tog.isChecked ? this.bgs.color = cc.color(parseInt(255 * this.light_R_slider.progress), parseInt(255 * this.light_G_slider.progress), parseInt(255 * this.light_B_slider.progress), 255) : this.bgs.color = cc.color(255, 255, 255, 255)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    mc: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "9f420tBdblH772q0XTCwvMY", "mc"),
        cc.Class({
            extends: cc.Component,
            properties: {
                c0: {
                    default: null,
                    type: cc.Sprite
                },
                c1: {
                    default: null,
                    type: cc.Sprite
                },
                c2: {
                    default: null,
                    type: cc.Sprite
                },
                c3: {
                    default: null,
                    type: cc.Sprite
                },
                c4: {
                    default: null,
                    type: cc.Sprite
                },
                c5: {
                    default: null,
                    type: cc.Sprite
                },
                c6: {
                    default: null,
                    type: cc.Sprite
                },
                c7: {
                    default: null,
                    type: cc.Sprite
                },
                c8: {
                    default: null,
                    type: cc.Sprite
                },
                kuang: {
                    default: null,
                    type: cc.Sprite
                }
            },
            onLoad: function() {
                window.minecraft = this
            },
            start: function() {
                this.sps = [this.c0, this.c1, this.c2, this.c3, this.c4, this.c5, this.c6, this.c7, this.c8],
                (window.minecraft = this).big9 = [[255, 255, 255], [255, 230, 200], [137, 148, 170], [150, 164, 141], [229, 202, 209], [249, 233, 218], [0, 233, 1], [1, 233, 0], [154, 81, 255]],
                this.reload_all(),
                this.index = 4,
                this.set_index(0),
                window.in_color = !0,
                this.shift(),
                setTimeout("window.pickCanvas.record=window.pickCanvas.bigall;window.pickCanvas.finish();", 200)
            },
            set_0: function() {
                this.set_index(0)
            },
            set_1: function() {
                this.set_index(1)
            },
            set_2: function() {
                this.set_index(2)
            },
            set_3: function() {
                this.set_index(3)
            },
            set_4: function() {
                this.set_index(4)
            },
            set_5: function() {
                this.set_index(5)
            },
            set_6: function() {
                this.set_index(6)
            },
            set_7: function() {
                this.set_index(7)
            },
            set_8: function() {
                this.set_index(8)
            },
            refresh: function() {
                for (var e = 0; e < 9; e++)
                    this.set_color(e, [0, 0, 0]);
                setTimeout("window.minecraft.reload_all();window.minecraft.set_index(window.minecraft.index);", 100)
            },
            reload_all: function() {
                for (var e = 0; e < 9; e++)
                    this.set_color(e, this.big9[e])
            },
            set_index: function(e) {
                if (-233 == e)
                    return this.index = e,
                    void (this.kuang.node.active = !1);
                this.kuang.node.active = !0,
                e < 0 && (e = 0),
                8 < e && (e = 8),
                this.index = e,
                this.kuang.node.x = 100 * e - 400,
                -1 < this.index && this.index < 5 && (window.pickCanvas.floatingColor[0] = this.sps[this.index].node.color.r,
                window.pickCanvas.floatingColor[1] = this.sps[this.index].node.color.g,
                window.pickCanvas.floatingColor[2] = this.sps[this.index].node.color.b,
                window.color_picker_main.pick_float(),
                window.isPen = !0,
                window.in_move = !1,
                window.eraser_masker.active = !1),
                5 == this.index && (window.isPen = !0,
                window.in_move = !1,
                window.eraser_masker.active = !1),
                6 == this.index && (window.isPen = !0,
                window.in_move = !1,
                window.eraser_masker.active = !1),
                7 == this.index && (window.isPen = !0,
                window.in_move = !0,
                window.eraser_masker.active = !1),
                8 == this.index && (window.isPen = !1,
                window.in_move = !1,
                window.eraser_masker.active = !0)
            },
            set_color: function(e, n) {
                -1 < e && e < 5 && (this.sps[e].node.color = cc.color(n[0], n[1], n[2], 255))
            },
            shift: function() {
                for (var e = 0; e < 5; e++)
                    this.sps[e].node.active = window.in_color;
                for (var n = 5; n < 7; n++)
                    this.sps[n].node.active = !window.in_color;
                7 != this.index && 8 != this.index && (window.in_color && 4 < this.index && this.set_index(0),
                window.in_color || this.index < 5 && this.set_index(5))
            },
            go_pen: function() {
                5 != this.index && 6 != this.index && 7 != this.index && 8 != this.index || (this.index = 0,
                this.kuang.node.x = -400)
            },
            set_cur_color: function(e) {
                -1 < this.index && this.index < 5 && (this.sps[this.index].node.color = cc.color(e[0], e[1], e[2], 255))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    movebig: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "baf29QBazxFQ4PCL2/AHscA", "movebig"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                    if (null != e) {
                        for (var n = e.touch.getDelta(), i = 0; i < 4; i++)
                            window.cp_drager[i].x += n.x,
                            window.cp_drager[i].y += n.y,
                            window.cp_drager[i].x < -window.cpNode.width / 2 && (window.cp_drager[i].x = -window.cpNode.width / 2),
                            window.cp_drager[i].x > window.cpNode.width / 2 && (window.cp_drager[i].x = window.cpNode.width / 2),
                            window.cp_drager[i].y < -window.cpNode.height / 2 && (window.cp_drager[i].y = -window.cpNode.height / 2),
                            window.cp_drager[i].y > window.cpNode.height / 2 && (window.cp_drager[i].y = window.cpNode.height / 2);
                        window.crop_dragger_A.ontiii(null)
                    }
                }, this.node)
            },
            update: function(e) {}
        }),
        cc._RF.pop()
    }
    , {}],
    movertiny: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "050d97BhuFBcogu1X1n+Eah", "movertiny"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.crop_dragger_A = this,
                self.spriteFrame = new cc.SpriteFrame,
                self.texture2d = null,
                window.cp_drager.push(this.node),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.ontiii, this.node),
                this.ontiii(null)
            },
            start: function() {
                this.ontiii(null)
            },
            ontiii: function(e) {
                if (null != e) {
                    var n = e.touch.getDelta();
                    this.x += n.x,
                    this.y += n.y
                }
                if (!(window.cp_drager.length < 4)) {
                    this.x < -window.cpNode.width / 2 && (this.x = -window.cpNode.width / 2),
                    this.x > window.cpNode.width / 2 && (this.x = window.cpNode.width / 2),
                    this.y < -window.cpNode.height / 2 && (this.y = -window.cpNode.height / 2),
                    this.y > window.cpNode.height / 2 && (this.y = window.cpNode.height / 2),
                    window.sketch_crop_l = .5 + 1 * Math.min(window.cp_drager[0].x, window.cp_drager[1].x, window.cp_drager[2].x, window.cp_drager[3].x) / (1 * window.cpNode.width),
                    window.sketch_crop_r = .5 + 1 * Math.max(window.cp_drager[0].x, window.cp_drager[1].x, window.cp_drager[2].x, window.cp_drager[3].x) / (1 * window.cpNode.width),
                    window.sketch_crop_d = .5 + 1 * Math.min(window.cp_drager[0].y, window.cp_drager[1].y, window.cp_drager[2].y, window.cp_drager[3].y) / (1 * window.cpNode.height),
                    window.sketch_crop_u = .5 + 1 * Math.max(window.cp_drager[0].y, window.cp_drager[1].y, window.cp_drager[2].y, window.cp_drager[3].y) / (1 * window.cpNode.height),
                    window.sketch_crop_l *= window.cropImageCanvas.canvas.width,
                    window.sketch_crop_r *= window.cropImageCanvas.canvas.width,
                    window.sketch_crop_d *= window.cropImageCanvas.canvas.height,
                    window.sketch_crop_u *= window.cropImageCanvas.canvas.height,
                    window.sketch_crop_w = window.sketch_crop_r - window.sketch_crop_l,
                    window.sketch_crop_h = window.sketch_crop_u - window.sketch_crop_d,
                    window.controller.real_fileBtnNode.active = !0,
                    window.sketch_crop_w > 2.6 * window.sketch_crop_h && (window.controller.real_fileBtnNode.active = !1),
                    window.sketch_crop_h > 2.6 * window.sketch_crop_w && (window.controller.real_fileBtnNode.active = !1),
                    self.canvas = window.cropMaskCanvas.canvas,
                    self.canvas.width = window.cropImageCanvas.canvas.width,
                    self.canvas.height = window.cropImageCanvas.canvas.height;
                    var i = self.canvas.getContext("2d");
                    i.fillStyle = "rgba(0,0,0,0.8)",
                    i.fillRect(0, 0, canvas.width, canvas.height);
                    var o = parseInt(window.sketch_crop_w)
                      , t = parseInt(window.sketch_crop_h)
                      , a = parseInt(window.sketch_crop_l)
                      , r = parseInt(window.cropImageCanvas.canvas.height - window.sketch_crop_u);
                    i.clearRect(a, r, o, t),
                    self.texture2d = new cc.Texture2D,
                    self.spriteFrame.setTexture(self.texture2d),
                    self.texture2d.initWithElement(self.canvas),
                    self.texture2d.handleLoadedTexture(!0),
                    window.cpNode2Sprite.spriteFrame = self.spriteFrame
                }
            },
            update: function(e) {}
        }),
        cc._RF.pop()
    }
    , {}],
    selfrot: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "985733m0s1I44Gbui8XNyvc", "selfrot"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            update: function(e) {
                this.node.rotation += 30 * e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    shift50: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "e8cf1Q/isJAM4tJYI+kKutU", "shift50"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.shifter_50 = this
            },
            up50: function() {
                this.node.x = 50
            },
            down50: function() {
                this.node.x = -50
            }
        }),
        cc._RF.pop()
    }
    , {}],
    shiftlr: [function(e, n, i) {
        "use strict";
        cc._RF.push(n, "ff80e/rKS5NvaF8zKm4aA06", "shiftlr"),
        cc.Class({
            extends: cc.Component,
            properties: {
                btn_show: {
                    default: null,
                    type: cc.Node
                },
                btn_hide: {
                    default: null,
                    type: cc.Node
                },
                btn_a: {
                    default: null,
                    type: cc.Node
                },
                btn_b: {
                    default: null,
                    type: cc.Node
                }
            },
            show: function() {
                this.btn_show.active = !1,
                this.btn_hide.active = !0,
                this.btn_a.active = !0,
                this.btn_b.active = !0
            },
            hide: function() {
                this.btn_show.active = !0,
                this.btn_hide.active = !1,
                this.btn_a.active = !1,
                this.btn_b.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["BoxCanvas", "CreativeCanvas", "FileInputs", "ImageCanvas", "ImageLoader", "PickCanvas", "SizeRegulator", "TripleCanvas", "colorpicker", "controller", "dragbox", "dragtarget", "eraser_masker", "faceSelector", "fake_bar", "lighter", "mc", "movebig", "movertiny", "selfrot", "shift50", "shiftlr"]);
