! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Clappr = e() : t.Clappr = e()
}(window, function() {
    return function(t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var r = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) n.d(i, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return i
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "dist/", n(n.s = 98)
    }([function(t, e, n) {
        "use strict";
        e.__esModule = !0, e.default = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i, r = n(39),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== (void 0 === e ? "undefined" : (0, o.default)(e)) && "function" != typeof e ? t : e
        }
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = a(n(131)),
            r = a(n(76)),
            o = a(n(39));

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, o.default)(e)));
            t.prototype = (0, r.default)(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (i.default ? (0, i.default)(t, e) : t.__proto__ = e)
        }
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i, r = n(75),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }()
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = l(n(52)),
            r = l(n(0)),
            o = l(n(39)),
            a = l(n(33)),
            s = n(5);

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var u = Array.prototype.slice,
            c = /\s+/,
            d = function(t, e, n, i) {
                if (!n) return !0;
                if ("object" === (void 0 === n ? "undefined" : (0, o.default)(n))) {
                    for (var r in n) t[e].apply(t, [r, n[r]].concat(i));
                    return !1
                }
                if (c.test(n)) {
                    for (var a = n.split(c), s = 0, l = a.length; s < l; s++) t[e].apply(t, [a[s]].concat(i));
                    return !1
                }
                return !0
            },
            f = function(t, e, n, i) {
                var r = void 0,
                    o = -1,
                    s = t.length,
                    l = e[0],
                    u = e[1],
                    c = e[2];
                ! function d() {
                    try {
                        switch (e.length) {
                            case 0:
                                for (; ++o < s;)(r = t[o]).callback.call(r.ctx);
                                return;
                            case 1:
                                for (; ++o < s;)(r = t[o]).callback.call(r.ctx, l);
                                return;
                            case 2:
                                for (; ++o < s;)(r = t[o]).callback.call(r.ctx, l, u);
                                return;
                            case 3:
                                for (; ++o < s;)(r = t[o]).callback.call(r.ctx, l, u, c);
                                return;
                            default:
                                for (; ++o < s;)(r = t[o]).callback.apply(r.ctx, e);
                                return
                        }
                    } catch (t) {
                        a.default.error.apply(a.default, [n, "error on event", i, "trigger", "-", t]), d()
                    }
                }()
            },
            p = function() {
                function t() {
                    (0, r.default)(this, t)
                }
                return t.prototype.on = function(t, e, n) {
                    return d(this, "on", t, [e, n]) && e ? (this._events || (this._events = {}), (this._events[t] || (this._events[t] = [])).push({
                        callback: e,
                        context: n,
                        ctx: n || this
                    }), this) : this
                }, t.prototype.once = function(t, e, n) {
                    var i = this,
                        r = void 0;
                    if (!d(this, "once", t, [e, n]) || !e) return this;
                    return r = function() {
                        i.off(t, r), e.apply(this, arguments)
                    }, this.on(t, r, n)
                }, t.prototype.off = function(t, e, n) {
                    var r, o, a = void 0,
                        s = void 0,
                        l = void 0,
                        u = void 0,
                        c = void 0,
                        f = void 0;
                    if (!this._events || !d(this, "off", t, [e, n])) return this;
                    if (!t && !e && !n) return this._events = void 0, this;
                    for (u = 0, o = (r = t ? [t] : (0, i.default)(this._events)).length; u < o; u++)
                        if (t = r[u], l = this._events[t]) {
                            if (this._events[t] = a = [], e || n)
                                for (c = 0, f = l.length; c < f; c++) s = l[c], (e && e !== s.callback && e !== s.callback._callback || n && n !== s.context) && a.push(s);
                            a.length || delete this._events[t]
                        }
                    return this
                }, t.prototype.trigger = function(t) {
                    var e = this.name || this.constructor.name;
                    if (a.default.debug.apply(a.default, [e].concat(Array.prototype.slice.call(arguments))), !this._events) return this;
                    var n = u.call(arguments, 1);
                    if (!d(this, "trigger", t, n)) return this;
                    var i = this._events[t],
                        r = this._events.all;
                    return i && f(i, n, e, t), r && f(r, arguments, e, t), this
                }, t.prototype.stopListening = function(t, e, n) {
                    var r = this._listeningTo;
                    if (!r) return this;
                    var a = !e && !n;
                    for (var s in n || "object" !== (void 0 === e ? "undefined" : (0, o.default)(e)) || (n = this), t && ((r = {})[t._listenId] = t), r)(t = r[s]).off(e, n, this), (a || 0 === (0, i.default)(t._events).length) && delete this._listeningTo[s];
                    return this
                }, t.register = function(e) {
                    t.Custom || (t.Custom = {});
                    var n = "string" == typeof e && e.toUpperCase().trim();
                    n && !t.Custom[n] ? t.Custom[n] = n.toLowerCase().split("_").map(function(t, e) {
                        return 0 === e ? t : t = t[0].toUpperCase() + t.slice(1)
                    }).join("") : a.default.error("Events", "Error when register event: " + e)
                }, t.listAvailableCustomEvents = function() {
                    return t.Custom || (t.Custom = {}), (0, i.default)(t.Custom).filter(function(e) {
                        return "string" == typeof t.Custom[e]
                    })
                }, t
            }();
        e.default = p;
        var h = {
            listenTo: "on",
            listenToOnce: "once"
        };
        (0, i.default)(h).forEach(function(t) {
            p.prototype[t] = function(e, n, i) {
                return (this._listeningTo || (this._listeningTo = {}))[e._listenId || (e._listenId = (0, s.uniqueId)("l"))] = e, i || "object" !== (void 0 === n ? "undefined" : (0, o.default)(n)) || (i = this), e[h[t]](n, i, this), this
            }
        }), p.PLAYER_READY = "ready", p.PLAYER_RESIZE = "resize", p.PLAYER_FULLSCREEN = "fullscreen", p.PLAYER_PLAY = "play", p.PLAYER_PAUSE = "pause", p.PLAYER_STOP = "stop", p.PLAYER_ENDED = "ended", p.PLAYER_SEEK = "seek", p.PLAYER_ERROR = "playererror", p.ERROR = "error", p.PLAYER_TIMEUPDATE = "timeupdate", p.PLAYER_VOLUMEUPDATE = "volumeupdate", p.PLAYER_SUBTITLE_AVAILABLE = "subtitleavailable", p.PLAYBACK_PROGRESS = "playback:progress", p.PLAYBACK_TIMEUPDATE = "playback:timeupdate", p.PLAYBACK_READY = "playback:ready", p.PLAYBACK_BUFFERING = "playback:buffering", p.PLAYBACK_BUFFERFULL = "playback:bufferfull", p.PLAYBACK_SETTINGSUPDATE = "playback:settingsupdate", p.PLAYBACK_LOADEDMETADATA = "playback:loadedmetadata", p.PLAYBACK_HIGHDEFINITIONUPDATE = "playback:highdefinitionupdate", p.PLAYBACK_BITRATE = "playback:bitrate", p.PLAYBACK_LEVELS_AVAILABLE = "playback:levels:available", p.PLAYBACK_LEVEL_SWITCH_START = "playback:levels:switch:start", p.PLAYBACK_LEVEL_SWITCH_END = "playback:levels:switch:end", p.PLAYBACK_PLAYBACKSTATE = "playback:playbackstate", p.PLAYBACK_DVR = "playback:dvr", p.PLAYBACK_MEDIACONTROL_DISABLE = "playback:mediacontrol:disable", p.PLAYBACK_MEDIACONTROL_ENABLE = "playback:mediacontrol:enable", p.PLAYBACK_ENDED = "playback:ended", p.PLAYBACK_PLAY_INTENT = "playback:play:intent", p.PLAYBACK_PLAY = "playback:play", p.PLAYBACK_PAUSE = "playback:pause", p.PLAYBACK_SEEK = "playback:seek", p.PLAYBACK_SEEKED = "playback:seeked", p.PLAYBACK_STOP = "playback:stop", p.PLAYBACK_ERROR = "playback:error", p.PLAYBACK_STATS_ADD = "playback:stats:add", p.PLAYBACK_FRAGMENT_LOADED = "playback:fragment:loaded", p.PLAYBACK_LEVEL_SWITCH = "playback:level:switch", p.PLAYBACK_SUBTITLE_AVAILABLE = "playback:subtitle:available", p.PLAYBACK_SUBTITLE_CHANGED = "playback:subtitle:changed", p.CORE_CONTAINERS_CREATED = "core:containers:created", p.CORE_ACTIVE_CONTAINER_CHANGED = "core:active:container:changed", p.CORE_OPTIONS_CHANGE = "core:options:change", p.CORE_READY = "core:ready", p.CORE_FULLSCREEN = "core:fullscreen", p.CORE_RESIZE = "core:resize", p.CORE_SCREEN_ORIENTATION_CHANGED = "core:screen:orientation:changed", p.CORE_MOUSE_MOVE = "core:mousemove", p.CORE_MOUSE_LEAVE = "core:mouseleave", p.CONTAINER_PLAYBACKSTATE = "container:playbackstate", p.CONTAINER_PLAYBACKDVRSTATECHANGED = "container:dvr", p.CONTAINER_BITRATE = "container:bitrate", p.CONTAINER_STATS_REPORT = "container:stats:report", p.CONTAINER_DESTROYED = "container:destroyed", p.CONTAINER_READY = "container:ready", p.CONTAINER_ERROR = "container:error", p.CONTAINER_LOADEDMETADATA = "container:loadedmetadata", p.CONTAINER_SUBTITLE_AVAILABLE = "container:subtitle:available", p.CONTAINER_SUBTITLE_CHANGED = "container:subtitle:changed", p.CONTAINER_TIMEUPDATE = "container:timeupdate", p.CONTAINER_PROGRESS = "container:progress", p.CONTAINER_PLAY = "container:play", p.CONTAINER_STOP = "container:stop", p.CONTAINER_PAUSE = "container:pause", p.CONTAINER_ENDED = "container:ended", p.CONTAINER_CLICK = "container:click", p.CONTAINER_DBLCLICK = "container:dblclick", p.CONTAINER_CONTEXTMENU = "container:contextmenu", p.CONTAINER_MOUSE_ENTER = "container:mouseenter", p.CONTAINER_MOUSE_LEAVE = "container:mouseleave", p.CONTAINER_SEEK = "container:seek", p.CONTAINER_SEEKED = "container:seeked", p.CONTAINER_VOLUME = "container:volume", p.CONTAINER_FULLSCREEN = "container:fullscreen", p.CONTAINER_STATE_BUFFERING = "container:state:buffering", p.CONTAINER_STATE_BUFFERFULL = "container:state:bufferfull", p.CONTAINER_SETTINGSUPDATE = "container:settingsupdate", p.CONTAINER_HIGHDEFINITIONUPDATE = "container:highdefinitionupdate", p.CONTAINER_MEDIACONTROL_SHOW = "container:mediacontrol:show", p.CONTAINER_MEDIACONTROL_HIDE = "container:mediacontrol:hide", p.CONTAINER_MEDIACONTROL_DISABLE = "container:mediacontrol:disable", p.CONTAINER_MEDIACONTROL_ENABLE = "container:mediacontrol:enable", p.CONTAINER_STATS_ADD = "container:stats:add", p.CONTAINER_OPTIONS_CHANGE = "container:options:change", p.MEDIACONTROL_RENDERED = "mediacontrol:rendered", p.MEDIACONTROL_FULLSCREEN = "mediacontrol:fullscreen", p.MEDIACONTROL_SHOW = "mediacontrol:show", p.MEDIACONTROL_HIDE = "mediacontrol:hide", p.MEDIACONTROL_MOUSEMOVE_SEEKBAR = "mediacontrol:mousemove:seekbar", p.MEDIACONTROL_MOUSELEAVE_SEEKBAR = "mediacontrol:mouseleave:seekbar", p.MEDIACONTROL_PLAYING = "mediacontrol:playing", p.MEDIACONTROL_NOTPLAYING = "mediacontrol:notplaying", p.MEDIACONTROL_CONTAINERCHANGED = "mediacontrol:containerchanged", p.MEDIACONTROL_OPTIONS_CHANGE = "mediacontrol:options:change", t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DoubleEventHandler = e.DomRecycler = e.cancelAnimationFrame = e.requestAnimationFrame = e.QueryString = e.Config = e.Fullscreen = void 0;
        var i = p(n(11)),
            r = p(n(3)),
            o = p(n(0)),
            a = p(n(1)),
            s = p(n(2)),
            l = p(n(75)),
            u = p(n(137));
        e.assign = h, e.extend = A, e.formatTime = g, e.seekStringToSeconds = b, e.uniqueId = E, e.isNumber = T, e.currentScriptUrl = C, e.getBrowserLanguage = w, e.now = S, e.removeArrayItem = x, e.listContainsIgnoreCase = function(t, e) {
            return void 0 !== t && void 0 !== e && void 0 !== e.find(function(e) {
                return t.toLowerCase() === e.toLowerCase()
            })
        }, e.canAutoPlayMedia = I, n(140);
        var c = p(n(28)),
            d = p(n(6)),
            f = p(n(148));

        function p(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function h(t, e) {
            if (e)
                for (var n in e) {
                    var i = (0, u.default)(e, n);
                    i ? (0, l.default)(t, n, i) : t[n] = e[n]
                }
            return t
        }

        function A(t, e) {
            var n = function(t) {
                function n() {
                    (0, o.default)(this, n);
                    for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    var l = (0, a.default)(this, t.call.apply(t, [this].concat(r)));
                    return e.initialize && e.initialize.apply(l, r), l
                }
                return (0, s.default)(n, t), n
            }(t);
            return h(n.prototype, e), n
        }

        function g(t, e) {
            if (!isFinite(t)) return "--:--";
            t *= 1e3;
            var n = (t = parseInt(t / 1e3)) % 60,
                i = (t = parseInt(t / 60)) % 60,
                r = (t = parseInt(t / 60)) % 24,
                o = parseInt(t / 24),
                a = "";
            return o && o > 0 && (a += o + ":", r < 1 && (a += "00:")), (r && r > 0 || e) && (a += ("0" + r).slice(-2) + ":"), a += ("0" + i).slice(-2) + ":", (a += ("0" + n).slice(-2)).trim()
        }
        var y = e.Fullscreen = {
                isFullscreen: function() {
                    return !!(document.webkitFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement)
                },
                requestFullscreen: function(t) {
                    t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.querySelector && t.querySelector("video") && t.querySelector("video").webkitEnterFullScreen ? t.querySelector("video").webkitEnterFullScreen() : t.webkitEnterFullScreen && t.webkitEnterFullScreen()
                },
                cancelFullscreen: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                    t.exitFullscreen ? t.exitFullscreen() : t.webkitCancelFullScreen ? t.webkitCancelFullScreen() : t.webkitExitFullscreen ? t.webkitExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.msExitFullscreen && t.msExitFullscreen()
                },
                fullscreenEnabled: function() {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                }
            },
            m = e.Config = function() {
                function t() {
                    (0, o.default)(this, t)
                }
                return t._defaultConfig = function() {
                    return {
                        volume: {
                            value: 100,
                            parse: parseInt
                        }
                    }
                }, t._defaultValueFor = function(t) {
                    try {
                        return this._defaultConfig()[t].parse(this._defaultConfig()[t].value)
                    } catch (t) {
                        return
                    }
                }, t._createKeyspace = function(t) {
                    return "clappr." + document.domain + "." + t
                }, t.restore = function(t) {
                    return c.default.hasLocalstorage && localStorage[this._createKeyspace(t)] ? this._defaultConfig()[t].parse(localStorage[this._createKeyspace(t)]) : this._defaultValueFor(t)
                }, t.persist = function(t, e) {
                    if (c.default.hasLocalstorage) try {
                        return localStorage[this._createKeyspace(t)] = e, !0
                    } catch (t) {
                        return !1
                    }
                }, t
            }(),
            v = e.QueryString = function() {
                function t() {
                    (0, o.default)(this, t)
                }
                return t.parse = function(t) {
                    for (var e = void 0, n = /\+/g, i = /([^&=]+)=?([^&]*)/g, r = function(t) {
                            return decodeURIComponent(t.replace(n, " "))
                        }, o = {}; e = i.exec(t);) o[r(e[1]).toLowerCase()] = r(e[2]);
                    return o
                }, (0, r.default)(t, null, [{
                    key: "params",
                    get: function() {
                        var t = window.location.search.substring(1);
                        return t !== this.query && (this._urlParams = this.parse(t), this.query = t), this._urlParams
                    }
                }, {
                    key: "hashParams",
                    get: function() {
                        var t = window.location.hash.substring(1);
                        return t !== this.hash && (this._hashParams = this.parse(t), this.hash = t), this._hashParams
                    }
                }]), t
            }();

        function b() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "t",
                e = 0,
                n = v.params[t] || v.hashParams[t] || "",
                i = n.match(/[0-9]+[hms]+/g) || [];
            if (i.length > 0) {
                var r = {
                    h: 3600,
                    m: 60,
                    s: 1
                };
                i.forEach(function(t) {
                    if (t) {
                        var n = t[t.length - 1],
                            i = parseInt(t.slice(0, t.length - 1), 10);
                        e += i * r[n]
                    }
                })
            } else n && (e = parseInt(n, 10));
            return e
        }
        var _ = {};

        function E(t) {
            return _[t] || (_[t] = 0), t + ++_[t]
        }

        function T(t) {
            return t - parseFloat(t) + 1 >= 0
        }

        function C() {
            var t = document.getElementsByTagName("script");
            return t.length ? t[t.length - 1].src : ""
        }
        var k = e.requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }).bind(window),
            O = e.cancelAnimationFrame = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout).bind(window);

        function w() {
            return window.navigator && window.navigator.language
        }

        function S() {
            return window.performance && window.performance.now ? performance.now() : Date.now()
        }

        function x(t, e) {
            var n = t.indexOf(e);
            n >= 0 && t.splice(n, 1)
        }

        function I(t, e) {
            var n = (e = (0, i.default)({
                inline: !1,
                muted: !1,
                timeout: 250,
                type: "video",
                source: f.default.mp4,
                element: null
            }, e)).element ? e.element : document.createElement(e.type);
            n.muted = e.muted, !0 === e.muted && n.setAttribute("muted", "muted"), !0 === e.inline && n.setAttribute("playsinline", "playsinline"), n.src = e.source;
            var r = n.play(),
                o = setTimeout(function() {
                    a(!1, new Error("Timeout " + e.timeout + " ms has been reached"))
                }, e.timeout),
                a = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    clearTimeout(o), t(e, n)
                };
            void 0 !== r ? r.then(function() {
                return a(!0)
            }).catch(function(t) {
                return a(!1, t)
            }) : a(!0)
        }
        var P = [],
            N = e.DomRecycler = function() {
                function t() {
                    (0, o.default)(this, t)
                }
                return t.configure = function(t) {
                    this.options = d.default.extend(this.options, t)
                }, t.create = function(t) {
                    return this.options.recycleVideo && "video" === t && P.length > 0 ? P.shift() : (0, d.default)("<" + t + ">")
                }, t.garbage = function(t) {
                    this.options.recycleVideo && "VIDEO" === t[0].tagName.toUpperCase() && (t.children().remove(), P.push(t))
                }, t
            }();
        N.options = {
            recycleVideo: !1
        };
        var R = e.DoubleEventHandler = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
                (0, o.default)(this, t), this.delay = e, this.lastTime = 0
            }
            return t.prototype.handle = function(t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = (new Date).getTime(),
                    r = i - this.lastTime;
                r < this.delay && r > 0 && (e(), n && t.preventDefault()), this.lastTime = i
            }, t
        }();
        e.default = {
            Config: m,
            Fullscreen: y,
            QueryString: v,
            DomRecycler: N,
            extend: A,
            formatTime: g,
            seekStringToSeconds: b,
            uniqueId: E,
            currentScriptUrl: C,
            isNumber: T,
            requestAnimationFrame: k,
            cancelAnimationFrame: O,
            getBrowserLanguage: w,
            now: S,
            removeArrayItem: x,
            canAutoPlayMedia: I,
            Media: f.default,
            DoubleEventHandler: R
        }
    }, function(t, e) {
        var n, i = function() {
            var t, e, n, i, r, o, a = [],
                s = a.concat,
                l = a.filter,
                u = a.slice,
                c = window.document,
                d = {},
                f = {},
                p = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                },
                h = /^\s*<(\w+|!)[^>]*>/,
                A = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                g = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                y = /^(?:body|html)$/i,
                m = /([A-Z])/g,
                v = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                b = c.createElement("table"),
                _ = c.createElement("tr"),
                E = {
                    tr: c.createElement("tbody"),
                    tbody: b,
                    thead: b,
                    tfoot: b,
                    td: _,
                    th: _,
                    "*": c.createElement("div")
                },
                T = /complete|loaded|interactive/,
                C = /^[\w-]*$/,
                k = {},
                O = k.toString,
                w = {},
                S = c.createElement("div"),
                x = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                I = Array.isArray || function(t) {
                    return t instanceof Array
                };

            function P(t) {
                return null == t ? String(t) : k[O.call(t)] || "object"
            }

            function N(t) {
                return "function" == P(t)
            }

            function R(t) {
                return null != t && t == t.window
            }

            function L(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE
            }

            function M(t) {
                return "object" == P(t)
            }

            function D(t) {
                return M(t) && !R(t) && Object.getPrototypeOf(t) == Object.prototype
            }

            function B(t) {
                var e = !!t && "length" in t && t.length,
                    i = n.type(t);
                return "function" != i && !R(t) && ("array" == i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }

            function F(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function U(t) {
                return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
            }

            function $(t, e) {
                return "number" != typeof e || p[F(t)] ? e : e + "px"
            }

            function V(t) {
                return "children" in t ? u.call(t.children) : n.map(t.childNodes, function(t) {
                    if (1 == t.nodeType) return t
                })
            }

            function j(t, e) {
                var n, i = t ? t.length : 0;
                for (n = 0; n < i; n++) this[n] = t[n];
                this.length = i, this.selector = e || ""
            }

            function Y(t, e) {
                return null == e ? n(t) : n(t).filter(e)
            }

            function K(t, e, n, i) {
                return N(e) ? e.call(t, n, i) : e
            }

            function H(t, e, n) {
                null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
            }

            function z(e, n) {
                var i = e.className || "",
                    r = i && i.baseVal !== t;
                if (n === t) return r ? i.baseVal : i;
                r ? i.baseVal = n : e.className = n
            }

            function G(t) {
                try {
                    return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
                } catch (e) {
                    return t
                }
            }
            return w.matches = function(t, e) {
                if (!e || !t || 1 !== t.nodeType) return !1;
                var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (n) return n.call(t, e);
                var i, r = t.parentNode,
                    o = !r;
                return o && (r = S).appendChild(t), i = ~w.qsa(r, e).indexOf(t), o && S.removeChild(t), i
            }, r = function(t) {
                return t.replace(/-+(.)?/g, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }, o = function(t) {
                return l.call(t, function(e, n) {
                    return t.indexOf(e) == n
                })
            }, w.fragment = function(e, i, r) {
                var o, a, s;
                return A.test(e) && (o = n(c.createElement(RegExp.$1))), o || (e.replace && (e = e.replace(g, "<$1></$2>")), i === t && (i = h.test(e) && RegExp.$1), i in E || (i = "*"), (s = E[i]).innerHTML = "" + e, o = n.each(u.call(s.childNodes), function() {
                    s.removeChild(this)
                })), D(r) && (a = n(o), n.each(r, function(t, e) {
                    v.indexOf(t) > -1 ? a[t](e) : a.attr(t, e)
                })), o
            }, w.Z = function(t, e) {
                return new j(t, e)
            }, w.isZ = function(t) {
                return t instanceof w.Z
            }, w.init = function(e, i) {
                var r, o;
                if (!e) return w.Z();
                if ("string" == typeof e)
                    if ("<" == (e = e.trim())[0] && h.test(e)) r = w.fragment(e, RegExp.$1, i), e = null;
                    else {
                        if (i !== t) return n(i).find(e);
                        r = w.qsa(c, e)
                    } else {
                    if (N(e)) return n(c).ready(e);
                    if (w.isZ(e)) return e;
                    if (I(e)) o = e, r = l.call(o, function(t) {
                        return null != t
                    });
                    else if (M(e)) r = [e], e = null;
                    else if (h.test(e)) r = w.fragment(e.trim(), RegExp.$1, i), e = null;
                    else {
                        if (i !== t) return n(i).find(e);
                        r = w.qsa(c, e)
                    }
                }
                return w.Z(r, e)
            }, (n = function(t, e) {
                return w.init(t, e)
            }).extend = function(n) {
                var i, r = u.call(arguments, 1);
                return "boolean" == typeof n && (i = n, n = r.shift()), r.forEach(function(r) {
                    ! function n(i, r, o) {
                        for (e in r) o && (D(r[e]) || I(r[e])) ? (D(r[e]) && !D(i[e]) && (i[e] = {}), I(r[e]) && !I(i[e]) && (i[e] = []), n(i[e], r[e], o)) : r[e] !== t && (i[e] = r[e])
                    }(n, r, i)
                }), n
            }, w.qsa = function(t, e) {
                var n, i = "#" == e[0],
                    r = !i && "." == e[0],
                    o = i || r ? e.slice(1) : e,
                    a = C.test(o);
                return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : u.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
            }, n.contains = c.documentElement.contains ? function(t, e) {
                return t !== e && t.contains(e)
            } : function(t, e) {
                for (; e && (e = e.parentNode);)
                    if (e === t) return !0;
                return !1
            }, n.type = P, n.isFunction = N, n.isWindow = R, n.isArray = I, n.isPlainObject = D, n.isEmptyObject = function(t) {
                var e;
                for (e in t) return !1;
                return !0
            }, n.isNumeric = function(t) {
                var e = Number(t),
                    n = typeof t;
                return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
            }, n.inArray = function(t, e, n) {
                return a.indexOf.call(e, t, n)
            }, n.camelCase = r, n.trim = function(t) {
                return null == t ? "" : String.prototype.trim.call(t)
            }, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function() {}, n.map = function(t, e) {
                var i, r, o, a, s = [];
                if (B(t))
                    for (r = 0; r < t.length; r++) null != (i = e(t[r], r)) && s.push(i);
                else
                    for (o in t) null != (i = e(t[o], o)) && s.push(i);
                return (a = s).length > 0 ? n.fn.concat.apply([], a) : a
            }, n.each = function(t, e) {
                var n, i;
                if (B(t)) {
                    for (n = 0; n < t.length; n++)
                        if (!1 === e.call(t[n], n, t[n])) return t
                } else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) return t; return t
            }, n.grep = function(t, e) {
                return l.call(t, e)
            }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                k["[object " + e + "]"] = e.toLowerCase()
            }), n.fn = {
                constructor: w.Z,
                length: 0,
                forEach: a.forEach,
                reduce: a.reduce,
                push: a.push,
                sort: a.sort,
                splice: a.splice,
                indexOf: a.indexOf,
                concat: function() {
                    var t, e, n = [];
                    for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = w.isZ(e) ? e.toArray() : e;
                    return s.apply(w.isZ(this) ? this.toArray() : this, n)
                },
                map: function(t) {
                    return n(n.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function() {
                    return n(u.apply(this, arguments))
                },
                ready: function(t) {
                    return T.test(c.readyState) && c.body ? t(n) : c.addEventListener("DOMContentLoaded", function() {
                        t(n)
                    }, !1), this
                },
                get: function(e) {
                    return e === t ? u.call(this) : this[e >= 0 ? e : e + this.length]
                },
                toArray: function() {
                    return this.get()
                },
                size: function() {
                    return this.length
                },
                remove: function() {
                    return this.each(function() {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function(t) {
                    return a.every.call(this, function(e, n) {
                        return !1 !== t.call(e, n, e)
                    }), this
                },
                filter: function(t) {
                    return N(t) ? this.not(this.not(t)) : n(l.call(this, function(e) {
                        return w.matches(e, t)
                    }))
                },
                add: function(t, e) {
                    return n(o(this.concat(n(t, e))))
                },
                is: function(t) {
                    return this.length > 0 && w.matches(this[0], t)
                },
                not: function(e) {
                    var i = [];
                    if (N(e) && e.call !== t) this.each(function(t) {
                        e.call(this, t) || i.push(this)
                    });
                    else {
                        var r = "string" == typeof e ? this.filter(e) : B(e) && N(e.item) ? u.call(e) : n(e);
                        this.forEach(function(t) {
                            r.indexOf(t) < 0 && i.push(t)
                        })
                    }
                    return n(i)
                },
                has: function(t) {
                    return this.filter(function() {
                        return M(t) ? n.contains(this, t) : n(this).find(t).size()
                    })
                },
                eq: function(t) {
                    return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                },
                first: function() {
                    var t = this[0];
                    return t && !M(t) ? t : n(t)
                },
                last: function() {
                    var t = this[this.length - 1];
                    return t && !M(t) ? t : n(t)
                },
                find: function(t) {
                    var e = this;
                    return t ? "object" == typeof t ? n(t).filter(function() {
                        var t = this;
                        return a.some.call(e, function(e) {
                            return n.contains(e, t)
                        })
                    }) : 1 == this.length ? n(w.qsa(this[0], t)) : this.map(function() {
                        return w.qsa(this, t)
                    }) : n()
                },
                closest: function(t, e) {
                    var i = [],
                        r = "object" == typeof t && n(t);
                    return this.each(function(n, o) {
                        for (; o && !(r ? r.indexOf(o) >= 0 : w.matches(o, t));) o = o !== e && !L(o) && o.parentNode;
                        o && i.indexOf(o) < 0 && i.push(o)
                    }), n(i)
                },
                parents: function(t) {
                    for (var e = [], i = this; i.length > 0;) i = n.map(i, function(t) {
                        if ((t = t.parentNode) && !L(t) && e.indexOf(t) < 0) return e.push(t), t
                    });
                    return Y(e, t)
                },
                parent: function(t) {
                    return Y(o(this.pluck("parentNode")), t)
                },
                children: function(t) {
                    return Y(this.map(function() {
                        return V(this)
                    }), t)
                },
                contents: function() {
                    return this.map(function() {
                        return this.contentDocument || u.call(this.childNodes)
                    })
                },
                siblings: function(t) {
                    return Y(this.map(function(t, e) {
                        return l.call(V(e.parentNode), function(t) {
                            return t !== e
                        })
                    }), t)
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = ""
                    })
                },
                pluck: function(t) {
                    return n.map(this, function(e) {
                        return e[t]
                    })
                },
                show: function() {
                    return this.each(function() {
                        var t, e, n;
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, d[t] || (e = c.createElement(t), c.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), d[t] = n), d[t]))
                    })
                },
                replaceWith: function(t) {
                    return this.before(t).remove()
                },
                wrap: function(t) {
                    var e = N(t);
                    if (this[0] && !e) var i = n(t).get(0),
                        r = i.parentNode || this.length > 1;
                    return this.each(function(o) {
                        n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
                    })
                },
                wrapAll: function(t) {
                    if (this[0]) {
                        var e;
                        for (n(this[0]).before(t = n(t));
                            (e = t.children()).length;) t = e.first();
                        n(t).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    var e = N(t);
                    return this.each(function(i) {
                        var r = n(this),
                            o = r.contents(),
                            a = e ? t.call(this, i) : t;
                        o.length ? o.wrapAll(a) : r.append(a)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        n(this).replaceWith(n(this).children())
                    }), this
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(!0)
                    })
                },
                hide: function() {
                    return this.css("display", "none")
                },
                toggle: function(e) {
                    return this.each(function() {
                        var i = n(this);
                        (e === t ? "none" == i.css("display") : e) ? i.show(): i.hide()
                    })
                },
                prev: function(t) {
                    return n(this.pluck("previousElementSibling")).filter(t || "*")
                },
                next: function(t) {
                    return n(this.pluck("nextElementSibling")).filter(t || "*")
                },
                html: function(t) {
                    return 0 in arguments ? this.each(function(e) {
                        var i = this.innerHTML;
                        n(this).empty().append(K(this, t, e, i))
                    }) : 0 in this ? this[0].innerHTML : null
                },
                text: function(t) {
                    return 0 in arguments ? this.each(function(e) {
                        var n = K(this, t, e, this.textContent);
                        this.textContent = null == n ? "" : "" + n
                    }) : 0 in this ? this.pluck("textContent").join("") : null
                },
                attr: function(n, i) {
                    var r;
                    return "string" != typeof n || 1 in arguments ? this.each(function(t) {
                        if (1 === this.nodeType)
                            if (M(n))
                                for (e in n) H(this, e, n[e]);
                            else H(this, n, K(this, i, t, this.getAttribute(n)))
                    }) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(n)) ? r : t
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        1 === this.nodeType && t.split(" ").forEach(function(t) {
                            H(this, t)
                        }, this)
                    })
                },
                prop: function(t, e) {
                    return t = x[t] || t, 1 in arguments ? this.each(function(n) {
                        this[t] = K(this, e, n, this[t])
                    }) : this[0] && this[0][t]
                },
                removeProp: function(t) {
                    return t = x[t] || t, this.each(function() {
                        delete this[t]
                    })
                },
                data: function(e, n) {
                    var i = "data-" + e.replace(m, "-$1").toLowerCase(),
                        r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                    return null !== r ? G(r) : t
                },
                val: function(t) {
                    return 0 in arguments ? (null == t && (t = ""), this.each(function(e) {
                        this.value = K(this, t, e, this.value)
                    })) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function(t) {
                    if (t) return this.each(function(e) {
                        var i = n(this),
                            r = K(this, t, e, i.offset()),
                            o = i.offsetParent().offset(),
                            a = {
                                top: r.top - o.top,
                                left: r.left - o.left
                            };
                        "static" == i.css("position") && (a.position = "relative"), i.css(a)
                    });
                    if (!this.length) return null;
                    if (c.documentElement !== this[0] && !n.contains(c.documentElement, this[0])) return {
                        top: 0,
                        left: 0
                    };
                    var e = this[0].getBoundingClientRect();
                    return {
                        left: e.left + window.pageXOffset,
                        top: e.top + window.pageYOffset,
                        width: Math.round(e.width),
                        height: Math.round(e.height)
                    }
                },
                css: function(t, i) {
                    if (arguments.length < 2) {
                        var o = this[0];
                        if ("string" == typeof t) {
                            if (!o) return;
                            return o.style[r(t)] || getComputedStyle(o, "").getPropertyValue(t)
                        }
                        if (I(t)) {
                            if (!o) return;
                            var a = {},
                                s = getComputedStyle(o, "");
                            return n.each(t, function(t, e) {
                                a[e] = o.style[r(e)] || s.getPropertyValue(e)
                            }), a
                        }
                    }
                    var l = "";
                    if ("string" == P(t)) i || 0 === i ? l = F(t) + ":" + $(t, i) : this.each(function() {
                        this.style.removeProperty(F(t))
                    });
                    else
                        for (e in t) t[e] || 0 === t[e] ? l += F(e) + ":" + $(e, t[e]) + ";" : this.each(function() {
                            this.style.removeProperty(F(e))
                        });
                    return this.each(function() {
                        this.style.cssText += ";" + l
                    })
                },
                index: function(t) {
                    return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function(t) {
                    return !!t && a.some.call(this, function(t) {
                        return this.test(z(t))
                    }, U(t))
                },
                addClass: function(t) {
                    return t ? this.each(function(e) {
                        if ("className" in this) {
                            i = [];
                            var r = z(this);
                            K(this, t, e, r).split(/\s+/g).forEach(function(t) {
                                n(this).hasClass(t) || i.push(t)
                            }, this), i.length && z(this, r + (r ? " " : "") + i.join(" "))
                        }
                    }) : this
                },
                removeClass: function(e) {
                    return this.each(function(n) {
                        if ("className" in this) {
                            if (e === t) return z(this, "");
                            i = z(this), K(this, e, n, i).split(/\s+/g).forEach(function(t) {
                                i = i.replace(U(t), " ")
                            }), z(this, i.trim())
                        }
                    })
                },
                toggleClass: function(e, i) {
                    return e ? this.each(function(r) {
                        var o = n(this);
                        K(this, e, r, z(this)).split(/\s+/g).forEach(function(e) {
                            (i === t ? !o.hasClass(e) : i) ? o.addClass(e): o.removeClass(e)
                        })
                    }) : this
                },
                scrollTop: function(e) {
                    if (this.length) {
                        var n = "scrollTop" in this[0];
                        return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                            this.scrollTop = e
                        } : function() {
                            this.scrollTo(this.scrollX, e)
                        })
                    }
                },
                scrollLeft: function(e) {
                    if (this.length) {
                        var n = "scrollLeft" in this[0];
                        return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                            this.scrollLeft = e
                        } : function() {
                            this.scrollTo(e, this.scrollY)
                        })
                    }
                },
                position: function() {
                    if (this.length) {
                        var t = this[0],
                            e = this.offsetParent(),
                            i = this.offset(),
                            r = y.test(e[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : e.offset();
                        return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
                            top: i.top - r.top,
                            left: i.left - r.left
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent || c.body; t && !y.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
                        return t
                    })
                }
            }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(e) {
                var i = e.replace(/./, function(t) {
                    return t[0].toUpperCase()
                });
                n.fn[e] = function(r) {
                    var o, a = this[0];
                    return r === t ? R(a) ? a["inner" + i] : L(a) ? a.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
                        (a = n(this)).css(e, K(this, r, t, a[e]()))
                    })
                }
            }), ["after", "prepend", "before", "append"].forEach(function(e, i) {
                var r = i % 2;
                n.fn[e] = function() {
                    var e, o, a = n.map(arguments, function(i) {
                            var r = [];
                            return "array" == (e = P(i)) ? (i.forEach(function(e) {
                                return e.nodeType !== t ? r.push(e) : n.zepto.isZ(e) ? r = r.concat(e.get()) : void(r = r.concat(w.fragment(e)))
                            }), r) : "object" == e || null == i ? i : w.fragment(i)
                        }),
                        s = this.length > 1;
                    return a.length < 1 ? this : this.each(function(t, e) {
                        o = r ? e : e.parentNode, e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null;
                        var l = n.contains(c.documentElement, o);
                        a.forEach(function(t) {
                            if (s) t = t.cloneNode(!0);
                            else if (!o) return n(t).remove();
                            o.insertBefore(t, e), l && function t(e, n) {
                                n(e);
                                for (var i = 0, r = e.childNodes.length; i < r; i++) t(e.childNodes[i], n)
                            }(t, function(t) {
                                if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                                    var e = t.ownerDocument ? t.ownerDocument.defaultView : window;
                                    e.eval.call(e, t.innerHTML)
                                }
                            })
                        })
                    })
                }, n.fn[r ? e + "To" : "insert" + (i ? "Before" : "After")] = function(t) {
                    return n(t)[e](this), this
                }
            }), w.Z.prototype = j.prototype = n.fn, w.uniq = o, w.deserializeValue = G, n.zepto = w, n
        }();
        window.Zepto = i, void 0 === window.$ && (window.$ = i),
            function(t) {
                var e, n, i = +new Date,
                    r = window.document,
                    o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                    a = /^(?:text|application)\/javascript/i,
                    s = /^(?:text|application)\/xml/i,
                    l = "application/json",
                    u = "text/html",
                    c = /^\s*$/,
                    d = r.createElement("a");

                function f(e, n, i, o) {
                    if (e.global) return function(e, n, i) {
                        var r = t.Event(n);
                        return t(e).trigger(r, i), !r.isDefaultPrevented()
                    }(n || r, i, o)
                }

                function p(t, e) {
                    var n = e.context;
                    if (!1 === e.beforeSend.call(n, t, e) || !1 === f(e, n, "ajaxBeforeSend", [t, e])) return !1;
                    f(e, n, "ajaxSend", [t, e])
                }

                function h(t, e, n, i) {
                    var r = n.context;
                    n.success.call(r, t, "success", e), i && i.resolveWith(r, [t, "success", e]), f(n, r, "ajaxSuccess", [e, n, t]), g("success", e, n)
                }

                function A(t, e, n, i, r) {
                    var o = i.context;
                    i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), f(i, o, "ajaxError", [n, i, t || e]), g(e, n, i)
                }

                function g(e, n, i) {
                    var r = i.context;
                    i.complete.call(r, n, e), f(i, r, "ajaxComplete", [n, i]),
                        function(e) {
                            e.global && !--t.active && f(e, null, "ajaxStop")
                        }(i)
                }

                function y() {}

                function m(t, e) {
                    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
                }

                function v(e, n, i, r) {
                    return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
                        url: e,
                        data: n,
                        success: i,
                        dataType: r
                    }
                }
                d.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
                    if (!("type" in e)) return t.ajax(e);
                    var o, a, s = e.jsonpCallback,
                        l = (t.isFunction(s) ? s() : s) || "Zepto" + i++,
                        u = r.createElement("script"),
                        c = window[l],
                        d = function(e) {
                            t(u).triggerHandler("error", e || "abort")
                        },
                        f = {
                            abort: d
                        };
                    return n && n.promise(f), t(u).on("load error", function(i, r) {
                        clearTimeout(a), t(u).off().remove(), "error" != i.type && o ? h(o[0], f, e, n) : A(null, r || "error", f, e, n), window[l] = c, o && t.isFunction(c) && c(o[0]), c = o = void 0
                    }), !1 === p(f, e) ? (d("abort"), f) : (window[l] = function() {
                        o = arguments
                    }, u.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l), r.head.appendChild(u), e.timeout > 0 && (a = setTimeout(function() {
                        d("timeout")
                    }, e.timeout)), f)
                }, t.ajaxSettings = {
                    type: "GET",
                    beforeSend: y,
                    success: y,
                    error: y,
                    complete: y,
                    context: null,
                    global: !0,
                    xhr: function() {
                        return new window.XMLHttpRequest
                    },
                    accepts: {
                        script: "text/javascript, application/javascript, application/x-javascript",
                        json: l,
                        xml: "application/xml, text/xml",
                        html: u,
                        text: "text/plain"
                    },
                    crossDomain: !1,
                    timeout: 0,
                    processData: !0,
                    cache: !0,
                    dataFilter: y
                }, t.ajax = function(i) {
                    var o, g, v = t.extend({}, i || {}),
                        b = t.Deferred && t.Deferred();
                    for (e in t.ajaxSettings) void 0 === v[e] && (v[e] = t.ajaxSettings[e]);
                    ! function(e) {
                        e.global && 0 == t.active++ && f(e, null, "ajaxStart")
                    }(v), v.crossDomain || ((o = r.createElement("a")).href = v.url, o.href = o.href, v.crossDomain = d.protocol + "//" + d.host != o.protocol + "//" + o.host), v.url || (v.url = window.location.toString()), (g = v.url.indexOf("#")) > -1 && (v.url = v.url.slice(0, g)),
                        function(e) {
                            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = m(e.url, e.data), e.data = void 0)
                        }(v);
                    var _ = v.dataType,
                        E = /\?.+=\?/.test(v.url);
                    if (E && (_ = "jsonp"), !1 !== v.cache && (i && !0 === i.cache || "script" != _ && "jsonp" != _) || (v.url = m(v.url, "_=" + Date.now())), "jsonp" == _) return E || (v.url = m(v.url, v.jsonp ? v.jsonp + "=?" : !1 === v.jsonp ? "" : "callback=?")), t.ajaxJSONP(v, b);
                    var T, C = v.accepts[_],
                        k = {},
                        O = function(t, e) {
                            k[t.toLowerCase()] = [t, e]
                        },
                        w = /^([\w-]+:)\/\//.test(v.url) ? RegExp.$1 : window.location.protocol,
                        S = v.xhr(),
                        x = S.setRequestHeader;
                    if (b && b.promise(S), v.crossDomain || O("X-Requested-With", "XMLHttpRequest"), O("Accept", C || "*/*"), (C = v.mimeType || C) && (C.indexOf(",") > -1 && (C = C.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(C)), (v.contentType || !1 !== v.contentType && v.data && "GET" != v.type.toUpperCase()) && O("Content-Type", v.contentType || "application/x-www-form-urlencoded"), v.headers)
                        for (n in v.headers) O(n, v.headers[n]);
                    if (S.setRequestHeader = O, S.onreadystatechange = function() {
                            if (4 == S.readyState) {
                                S.onreadystatechange = y, clearTimeout(T);
                                var e, n = !1;
                                if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == w) {
                                    if (_ = _ || ((i = v.mimeType || S.getResponseHeader("content-type")) && (i = i.split(";", 2)[0]), i && (i == u ? "html" : i == l ? "json" : a.test(i) ? "script" : s.test(i) && "xml") || "text"), "arraybuffer" == S.responseType || "blob" == S.responseType) e = S.response;
                                    else {
                                        e = S.responseText;
                                        try {
                                            e = function(t, e, n) {
                                                if (n.dataFilter == y) return t;
                                                var i = n.context;
                                                return n.dataFilter.call(i, t, e)
                                            }(e, _, v), "script" == _ ? (0, eval)(e) : "xml" == _ ? e = S.responseXML : "json" == _ && (e = c.test(e) ? null : t.parseJSON(e))
                                        } catch (t) {
                                            n = t
                                        }
                                        if (n) return A(n, "parsererror", S, v, b)
                                    }
                                    h(e, S, v, b)
                                } else A(S.statusText || null, S.status ? "error" : "abort", S, v, b)
                            }
                            var i
                        }, !1 === p(S, v)) return S.abort(), A(null, "abort", S, v, b), S;
                    var I = !("async" in v) || v.async;
                    if (S.open(v.type, v.url, I, v.username, v.password), v.xhrFields)
                        for (n in v.xhrFields) S[n] = v.xhrFields[n];
                    for (n in k) x.apply(S, k[n]);
                    return v.timeout > 0 && (T = setTimeout(function() {
                        S.onreadystatechange = y, S.abort(), A(null, "timeout", S, v, b)
                    }, v.timeout)), S.send(v.data ? v.data : null), S
                }, t.get = function() {
                    return t.ajax(v.apply(null, arguments))
                }, t.post = function() {
                    var e = v.apply(null, arguments);
                    return e.type = "POST", t.ajax(e)
                }, t.getJSON = function() {
                    var e = v.apply(null, arguments);
                    return e.dataType = "json", t.ajax(e)
                }, t.fn.load = function(e, n, i) {
                    if (!this.length) return this;
                    var r, a = this,
                        s = e.split(/\s/),
                        l = v(e, n, i),
                        u = l.success;
                    return s.length > 1 && (l.url = s[0], r = s[1]), l.success = function(e) {
                        a.html(r ? t("<div>").html(e.replace(o, "")).find(r) : e), u && u.apply(a, arguments)
                    }, t.ajax(l), this
                };
                var b = encodeURIComponent;
                t.param = function(e, n) {
                    var i = [];
                    return i.add = function(e, n) {
                            t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(b(e) + "=" + b(n))
                        },
                        function e(n, i, r, o) {
                            var a, s = t.isArray(i),
                                l = t.isPlainObject(i);
                            t.each(i, function(i, u) {
                                a = t.type(u), o && (i = r ? o : o + "[" + (l || "object" == a || "array" == a ? i : "") + "]"), !o && s ? n.add(u.name, u.value) : "array" == a || !r && "object" == a ? e(n, u, r, i) : n.add(i, u)
                            })
                        }(i, e, n), i.join("&").replace(/%20/g, "+")
                }
            }(i), (n = i).Callbacks = function(t) {
                t = n.extend({}, t);
                var e, i, r, o, a, s, l = [],
                    u = !t.once && [],
                    c = function(n) {
                        for (e = t.memory && n, i = !0, s = o || 0, o = 0, a = l.length, r = !0; l && s < a; ++s)
                            if (!1 === l[s].apply(n[0], n[1]) && t.stopOnFalse) {
                                e = !1;
                                break
                            }
                        r = !1, l && (u ? u.length && c(u.shift()) : e ? l.length = 0 : d.disable())
                    },
                    d = {
                        add: function() {
                            if (l) {
                                var i = l.length,
                                    s = function(e) {
                                        n.each(e, function(e, n) {
                                            "function" == typeof n ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" != typeof n && s(n)
                                        })
                                    };
                                s(arguments), r ? a = l.length : e && (o = i, c(e))
                            }
                            return this
                        },
                        remove: function() {
                            return l && n.each(arguments, function(t, e) {
                                for (var i;
                                    (i = n.inArray(e, l, i)) > -1;) l.splice(i, 1), r && (i <= a && --a, i <= s && --s)
                            }), this
                        },
                        has: function(t) {
                            return !(!l || !(t ? n.inArray(t, l) > -1 : l.length))
                        },
                        empty: function() {
                            return a = l.length = 0, this
                        },
                        disable: function() {
                            return l = u = e = void 0, this
                        },
                        disabled: function() {
                            return !l
                        },
                        lock: function() {
                            return u = void 0, e || d.disable(), this
                        },
                        locked: function() {
                            return !u
                        },
                        fireWith: function(t, e) {
                            return !l || i && !u || (e = [t, (e = e || []).slice ? e.slice() : e], r ? u.push(e) : c(e)), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments)
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return d
            },
            function(t) {
                var e = Array.prototype.slice;

                function n(e) {
                    var i = [
                            ["resolve", "done", t.Callbacks({
                                once: 1,
                                memory: 1
                            }), "resolved"],
                            ["reject", "fail", t.Callbacks({
                                once: 1,
                                memory: 1
                            }), "rejected"],
                            ["notify", "progress", t.Callbacks({
                                memory: 1
                            })]
                        ],
                        r = "pending",
                        o = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return a.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return n(function(n) {
                                    t.each(i, function(i, r) {
                                        var s = t.isFunction(e[i]) && e[i];
                                        a[r[1]](function() {
                                            var e = s && s.apply(this, arguments);
                                            if (e && t.isFunction(e.promise)) e.promise().done(n.resolve).fail(n.reject).progress(n.notify);
                                            else {
                                                var i = this === o ? n.promise() : this,
                                                    a = s ? [e] : arguments;
                                                n[r[0] + "With"](i, a)
                                            }
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? t.extend(e, o) : o
                            }
                        },
                        a = {};
                    return t.each(i, function(t, e) {
                        var n = e[2],
                            s = e[3];
                        o[e[1]] = n.add, s && n.add(function() {
                            r = s
                        }, i[1 ^ t][2].disable, i[2][2].lock), a[e[0]] = function() {
                            return a[e[0] + "With"](this === a ? o : this, arguments), this
                        }, a[e[0] + "With"] = n.fireWith
                    }), o.promise(a), e && e.call(a, a), a
                }
                t.when = function(i) {
                    var r, o, a, s = e.call(arguments),
                        l = s.length,
                        u = 0,
                        c = 1 !== l || i && t.isFunction(i.promise) ? l : 0,
                        d = 1 === c ? i : n(),
                        f = function(t, n, i) {
                            return function(o) {
                                n[t] = this, i[t] = arguments.length > 1 ? e.call(arguments) : o, i === r ? d.notifyWith(n, i) : --c || d.resolveWith(n, i)
                            }
                        };
                    if (l > 1)
                        for (r = new Array(l), o = new Array(l), a = new Array(l); u < l; ++u) s[u] && t.isFunction(s[u].promise) ? s[u].promise().done(f(u, a, s)).fail(d.reject).progress(f(u, o, r)) : --c;
                    return c || d.resolveWith(a, s), d.promise()
                }, t.Deferred = n
            }(i),
            function(t) {
                var e, n = 1,
                    i = Array.prototype.slice,
                    r = t.isFunction,
                    o = function(t) {
                        return "string" == typeof t
                    },
                    a = {},
                    s = {},
                    l = "onfocusin" in window,
                    u = {
                        focus: "focusin",
                        blur: "focusout"
                    },
                    c = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    };

                function d(t) {
                    return t._zid || (t._zid = n++)
                }

                function f(t, e, n, i) {
                    if ((e = p(e)).ns) var r = (o = e.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
                    var o;
                    return (a[d(t)] || []).filter(function(t) {
                        return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!n || d(t.fn) === d(n)) && (!i || t.sel == i)
                    })
                }

                function p(t) {
                    var e = ("" + t).split(".");
                    return {
                        e: e[0],
                        ns: e.slice(1).sort().join(" ")
                    }
                }

                function h(t, e) {
                    return t.del && !l && t.e in u || !!e
                }

                function A(t) {
                    return c[t] || l && u[t] || t
                }

                function g(n, i, r, o, s, l, u) {
                    var f = d(n),
                        g = a[f] || (a[f] = []);
                    i.split(/\s/).forEach(function(i) {
                        if ("ready" == i) return t(document).ready(r);
                        var a = p(i);
                        a.fn = r, a.sel = s, a.e in c && (r = function(e) {
                            var n = e.relatedTarget;
                            if (!n || n !== this && !t.contains(this, n)) return a.fn.apply(this, arguments)
                        }), a.del = l;
                        var d = l || r;
                        a.proxy = function(t) {
                            if (!(t = E(t)).isImmediatePropagationStopped()) {
                                t.data = o;
                                var i = d.apply(n, t._args == e ? [t] : [t].concat(t._args));
                                return !1 === i && (t.preventDefault(), t.stopPropagation()), i
                            }
                        }, a.i = g.length, g.push(a), "addEventListener" in n && n.addEventListener(A(a.e), a.proxy, h(a, u))
                    })
                }

                function y(t, e, n, i, r) {
                    var o = d(t);
                    (e || "").split(/\s/).forEach(function(e) {
                        f(t, e, n, i).forEach(function(e) {
                            delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(A(e.e), e.proxy, h(e, r))
                        })
                    })
                }
                s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents", t.event = {
                    add: g,
                    remove: y
                }, t.proxy = function(e, n) {
                    var a = 2 in arguments && i.call(arguments, 2);
                    if (r(e)) {
                        var s = function() {
                            return e.apply(n, a ? a.concat(i.call(arguments)) : arguments)
                        };
                        return s._zid = d(e), s
                    }
                    if (o(n)) return a ? (a.unshift(e[n], e), t.proxy.apply(null, a)) : t.proxy(e[n], e);
                    throw new TypeError("expected function")
                }, t.fn.bind = function(t, e, n) {
                    return this.on(t, e, n)
                }, t.fn.unbind = function(t, e) {
                    return this.off(t, e)
                }, t.fn.one = function(t, e, n, i) {
                    return this.on(t, e, n, i, 1)
                };
                var m = function() {
                        return !0
                    },
                    v = function() {
                        return !1
                    },
                    b = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                    _ = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };

                function E(n, i) {
                    return !i && n.isDefaultPrevented || (i || (i = n), t.each(_, function(t, e) {
                        var r = i[t];
                        n[t] = function() {
                            return this[e] = m, r && r.apply(i, arguments)
                        }, n[e] = v
                    }), n.timeStamp || (n.timeStamp = Date.now()), (i.defaultPrevented !== e ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (n.isDefaultPrevented = m)), n
                }

                function T(t) {
                    var n, i = {
                        originalEvent: t
                    };
                    for (n in t) b.test(n) || t[n] === e || (i[n] = t[n]);
                    return E(i, t)
                }
                t.fn.delegate = function(t, e, n) {
                    return this.on(e, t, n)
                }, t.fn.undelegate = function(t, e, n) {
                    return this.off(e, t, n)
                }, t.fn.live = function(e, n) {
                    return t(document.body).delegate(this.selector, e, n), this
                }, t.fn.die = function(e, n) {
                    return t(document.body).undelegate(this.selector, e, n), this
                }, t.fn.on = function(n, a, s, l, u) {
                    var c, d, f = this;
                    return n && !o(n) ? (t.each(n, function(t, e) {
                        f.on(t, a, s, e, u)
                    }), f) : (o(a) || r(l) || !1 === l || (l = s, s = a, a = e), l !== e && !1 !== s || (l = s, s = e), !1 === l && (l = v), f.each(function(e, r) {
                        u && (c = function(t) {
                            return y(r, t.type, l), l.apply(this, arguments)
                        }), a && (d = function(e) {
                            var n, o = t(e.target).closest(a, r).get(0);
                            if (o && o !== r) return n = t.extend(T(e), {
                                currentTarget: o,
                                liveFired: r
                            }), (c || l).apply(o, [n].concat(i.call(arguments, 1)))
                        }), g(r, n, l, s, a, d || c)
                    }))
                }, t.fn.off = function(n, i, a) {
                    var s = this;
                    return n && !o(n) ? (t.each(n, function(t, e) {
                        s.off(t, i, e)
                    }), s) : (o(i) || r(a) || !1 === a || (a = i, i = e), !1 === a && (a = v), s.each(function() {
                        y(this, n, a, i)
                    }))
                }, t.fn.trigger = function(e, n) {
                    return (e = o(e) || t.isPlainObject(e) ? t.Event(e) : E(e))._args = n, this.each(function() {
                        e.type in u && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
                    })
                }, t.fn.triggerHandler = function(e, n) {
                    var i, r;
                    return this.each(function(a, s) {
                        (i = T(o(e) ? t.Event(e) : e))._args = n, i.target = s, t.each(f(s, e.type || e), function(t, e) {
                            if (r = e.proxy(i), i.isImmediatePropagationStopped()) return !1
                        })
                    }), r
                }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
                    t.fn[e] = function(t) {
                        return 0 in arguments ? this.bind(e, t) : this.trigger(e)
                    }
                }), t.Event = function(t, e) {
                    o(t) || (t = (e = t).type);
                    var n = document.createEvent(s[t] || "Events"),
                        i = !0;
                    if (e)
                        for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
                    return n.initEvent(t, i, !0), E(n)
                }
            }(i),
            function() {
                try {
                    getComputedStyle(void 0)
                } catch (e) {
                    var t = getComputedStyle;
                    window.getComputedStyle = function(e, n) {
                        try {
                            return t(e, n)
                        } catch (t) {
                            return null
                        }
                    }
                }
            }(),
            function(t) {
                var e = t.zepto,
                    n = e.qsa,
                    i = e.matches;

                function r(e) {
                    return !(!(e = t(e)).width() && !e.height()) && "none" !== e.css("display")
                }
                var o = t.expr[":"] = {
                        visible: function() {
                            if (r(this)) return this
                        },
                        hidden: function() {
                            if (!r(this)) return this
                        },
                        selected: function() {
                            if (this.selected) return this
                        },
                        checked: function() {
                            if (this.checked) return this
                        },
                        parent: function() {
                            return this.parentNode
                        },
                        first: function(t) {
                            if (0 === t) return this
                        },
                        last: function(t, e) {
                            if (t === e.length - 1) return this
                        },
                        eq: function(t, e, n) {
                            if (t === n) return this
                        },
                        contains: function(e, n, i) {
                            if (t(this).text().indexOf(i) > -1) return this
                        },
                        has: function(t, n, i) {
                            if (e.qsa(this, i).length) return this
                        }
                    },
                    a = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
                    s = /^\s*>/,
                    l = "Zepto" + +new Date;

                function u(t, e) {
                    t = t.replace(/=#\]/g, '="#"]');
                    var n, i, r = a.exec(t);
                    if (r && r[2] in o && (n = o[r[2]], i = r[3], t = r[1], i)) {
                        var s = Number(i);
                        i = isNaN(s) ? i.replace(/^["']|["']$/g, "") : s
                    }
                    return e(t, n, i)
                }
                e.qsa = function(i, r) {
                    return u(r, function(o, a, u) {
                        try {
                            var c;
                            !o && a ? o = "*" : s.test(o) && (c = t(i).addClass(l), o = "." + l + " " + o);
                            var d = n(i, o)
                        } catch (t) {
                            throw console.error("error performing selector: %o", r), t
                        } finally {
                            c && c.removeClass(l)
                        }
                        return a ? e.uniq(t.map(d, function(t, e) {
                            return a.call(t, e, d, u)
                        })) : d
                    })
                }, e.matches = function(t, e) {
                    return u(e, function(e, n, r) {
                        return (!e || i(t, e)) && (!n || n.call(t, null, r) === t)
                    })
                }
            }(i), t.exports = i
    }, function(t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e) {
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var n = function(t, e) {
                        var n = t[1] || "",
                            i = t[3];
                        if (!i) return n;
                        if (e && "function" == typeof btoa) {
                            var r = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                                o = i.sources.map(function(t) {
                                    return "/*# sourceURL=" + i.sourceRoot + t + " */"
                                });
                            return [n].concat(o).concat([r]).join("\n")
                        }
                        var a;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                }
            }, e
        }
    }, function(t, e, n) {
        var i, r, o = {},
            a = (i = function() {
                return window && document && document.all && !window.atob
            }, function() {
                return void 0 === r && (r = i.apply(this, arguments)), r
            }),
            s = function(t) {
                var e = {};
                return function(t) {
                    if ("function" == typeof t) return t();
                    if (void 0 === e[t]) {
                        var n = function(t) {
                            return document.querySelector(t)
                        }.call(this, t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (t) {
                            n = null
                        }
                        e[t] = n
                    }
                    return e[t]
                }
            }(),
            l = null,
            u = 0,
            c = [],
            d = n(159);

        function f(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    r = o[i.id];
                if (r) {
                    r.refs++;
                    for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
                    for (; a < i.parts.length; a++) r.parts.push(m(i.parts[a], e))
                } else {
                    var s = [];
                    for (a = 0; a < i.parts.length; a++) s.push(m(i.parts[a], e));
                    o[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function p(t, e) {
            for (var n = [], i = {}, r = 0; r < t.length; r++) {
                var o = t[r],
                    a = e.base ? o[0] + e.base : o[0],
                    s = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                i[a] ? i[a].parts.push(s) : n.push(i[a] = {
                    id: a,
                    parts: [s]
                })
            }
            return n
        }

        function h(t, e) {
            var n = s(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = c[c.length - 1];
            if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), c.push(e);
            else if ("bottom" === t.insertAt) n.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var r = s(t.insertInto + " " + t.insertAt.before);
                n.insertBefore(e, r)
            }
        }

        function A(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = c.indexOf(t);
            e >= 0 && c.splice(e, 1)
        }

        function g(t) {
            var e = document.createElement("style");
            return t.attrs.type = "text/css", y(e, t.attrs), h(t, e), e
        }

        function y(t, e) {
            Object.keys(e).forEach(function(n) {
                t.setAttribute(n, e[n])
            })
        }

        function m(t, e) {
            var n, i, r, o;
            if (e.transform && t.css) {
                if (!(o = e.transform(t.css))) return function() {};
                t.css = o
            }
            if (e.singleton) {
                var a = u++;
                n = l || (l = g(e)), i = _.bind(null, n, a, !1), r = _.bind(null, n, a, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                var e = document.createElement("link");
                return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e
            }(e), i = function(t, e, n) {
                var i = n.css,
                    r = n.sourceMap,
                    o = void 0 === e.convertToAbsoluteUrls && r;
                (e.convertToAbsoluteUrls || o) && (i = d(i));
                r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var a = new Blob([i], {
                        type: "text/css"
                    }),
                    s = t.href;
                t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }.bind(null, n, e), r = function() {
                A(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = g(e), i = function(t, e) {
                var n = e.css,
                    i = e.media;
                i && t.setAttribute("media", i);
                if (t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), r = function() {
                A(n)
            });
            return i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        i(t = e)
                    } else r()
                }
        }
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = p(t, e);
            return f(n, e),
                function(t) {
                    for (var i = [], r = 0; r < n.length; r++) {
                        var a = n[r];
                        (s = o[a.id]).refs--, i.push(s)
                    }
                    t && f(p(t, e), e);
                    for (r = 0; r < i.length; r++) {
                        var s;
                        if (0 === (s = i[r]).refs) {
                            for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                            delete o[s.id]
                        }
                    }
                }
        };
        var v, b = (v = [], function(t, e) {
            return v[t] = e, v.filter(Boolean).join("\n")
        });

        function _(t, e, n, i) {
            var r = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = b(e, r);
            else {
                var o = document.createTextNode(r),
                    a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
            }
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            },
            r = /(.)^/,
            o = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\t": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            a = /\\|'|\r|\n|\t|\u2028|\u2029/g,
            s = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            },
            l = new RegExp("[&<>\"']", "g"),
            u = function(t) {
                return null === t ? "" : ("" + t).replace(l, function(t) {
                    return s[t]
                })
            },
            c = 0,
            d = function(t, e) {
                var n, s = new RegExp([(i.escape || r).source, (i.interpolate || r).source, (i.evaluate || r).source].join("|") + "|$", "g"),
                    l = 0,
                    d = "__p+='";
                t.replace(s, function(e, n, i, r, s) {
                    return d += t.slice(l, s).replace(a, function(t) {
                        return "\\" + o[t]
                    }), n && (d += "'+\n((__t=(" + n + "))==null?'':escapeExpr(__t))+\n'"), i && (d += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (d += "';\n" + r + "\n__p+='"), l = s + e.length, e
                }), d += "';\n", i.variable || (d = "with(obj||{}){\n" + d + "}\n"), d = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + d + "return __p;\n//# sourceURL=/microtemplates/source[" + c++ + "]";
                try {
                    n = new Function(i.variable || "obj", "escapeExpr", d)
                } catch (t) {
                    throw t.source = d, t
                }
                if (e) return n(e, u);
                var f = function(t) {
                    return n.call(this, t, u)
                };
                return f.source = "function(" + (i.variable || "obj") + "){\n" + d + "}", f
            };
        d.settings = i, e.default = d, t.exports = e.default
    }, function(t, e, n) {
        t.exports = {
            default: n(100),
            __esModule: !0
        }
    }, function(t, e, n) {
        var i = n(49)("wks"),
            r = n(36),
            o = n(16).Symbol,
            a = "function" == typeof o;
        (t.exports = function(t) {
            return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
        }).store = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = f(n(11)),
            r = f(n(0)),
            o = f(n(1)),
            a = f(n(3)),
            s = f(n(2)),
            l = n(5),
            u = f(n(29)),
            c = f(n(19)),
            d = f(n(6));

        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var p = function(t) {
            function e(n, i, a) {
                (0, r.default)(this, e);
                var s = (0, o.default)(this, t.call(this, n));
                return s.settings = {}, s._i18n = i, s.playerError = a, s._consented = !1, s
            }
            return (0, s.default)(e, t), (0, a.default)(e, [{
                key: "isAudioOnly",
                get: function() {
                    return !1
                }
            }, {
                key: "isAdaptive",
                get: function() {
                    return !1
                }
            }, {
                key: "ended",
                get: function() {
                    return !1
                }
            }, {
                key: "i18n",
                get: function() {
                    return this._i18n
                }
            }, {
                key: "buffering",
                get: function() {
                    return !1
                }
            }, {
                key: "consented",
                get: function() {
                    return this._consented
                }
            }]), e.prototype.consent = function() {
                this._consented = !0
            }, e.prototype.play = function() {}, e.prototype.pause = function() {}, e.prototype.stop = function() {}, e.prototype.seek = function(t) {}, e.prototype.seekPercentage = function(t) {}, e.prototype.getStartTimeOffset = function() {
                return 0
            }, e.prototype.getDuration = function() {
                return 0
            }, e.prototype.isPlaying = function() {
                return !1
            }, e.prototype.getPlaybackType = function() {
                return e.NO_OP
            }, e.prototype.isHighDefinitionInUse = function() {
                return !1
            }, e.prototype.volume = function(t) {}, e.prototype.configure = function(t) {
                this._options = d.default.extend(this._options, t)
            }, e.prototype.attemptAutoPlay = function() {
                var t = this;
                this.canAutoPlay(function(e, n) {
                    e && t.play()
                })
            }, e.prototype.canAutoPlay = function(t) {
                t(!0, null)
            }, (0, a.default)(e, [{
                key: "isReady",
                get: function() {
                    return !1
                }
            }, {
                key: "hasClosedCaptionsTracks",
                get: function() {
                    return this.closedCaptionsTracks.length > 0
                }
            }, {
                key: "closedCaptionsTracks",
                get: function() {
                    return []
                }
            }, {
                key: "closedCaptionsTrackId",
                get: function() {
                    return -1
                },
                set: function(t) {}
            }]), e
        }(u.default);
        e.default = p, (0, i.default)(p.prototype, c.default), p.extend = function(t) {
            return (0, l.extend)(p, t)
        }, p.canPlay = function(t, e) {
            return !1
        }, p.VOD = "vod", p.AOD = "aod", p.LIVE = "live", p.NO_OP = "no_op", p.type = "playback", t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = l(n(0)),
            r = l(n(1)),
            o = l(n(3)),
            a = l(n(2)),
            s = n(5);

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var u = function(t) {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o._options = n, o.uniqueId = (0, s.uniqueId)("o"), o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "options",
                get: function() {
                    return this._options
                }
            }]), e
        }(l(n(4)).default);
        e.default = u, t.exports = e.default
    }, function(t, e, n) {
        var i = n(16),
            r = n(7),
            o = n(43),
            a = n(25),
            s = function(t, e, n) {
                var l, u, c, d = t & s.F,
                    f = t & s.G,
                    p = t & s.S,
                    h = t & s.P,
                    A = t & s.B,
                    g = t & s.W,
                    y = f ? r : r[e] || (r[e] = {}),
                    m = y.prototype,
                    v = f ? i : p ? i[e] : (i[e] || {}).prototype;
                for (l in f && (n = e), n)(u = !d && v && void 0 !== v[l]) && l in y || (c = u ? v[l] : n[l], y[l] = f && "function" != typeof v[l] ? n[l] : A && u ? o(c, i) : g && v[l] == c ? function(t) {
                    var e = function(e, n, i) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, i)
                        }
                        return t.apply(this, arguments)
                    };
                    return e.prototype = t.prototype, e
                }(c) : h && "function" == typeof c ? o(Function.call, c) : c, h && ((y.virtual || (y.virtual = {}))[l] = c, t & s.R && m && !m[l] && a(m, l, c)))
            };
        s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e, n) {
        var i = n(20),
            r = n(65),
            o = n(44),
            a = Object.defineProperty;
        e.f = n(21) ? Object.defineProperty : function(t, e, n) {
            if (i(t), e = o(e, !0), i(n), r) try {
                return a(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var i = n(68),
            r = n(46);
        t.exports = function(t) {
            return i(r(t))
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = a(n(11)),
            r = a(n(33)),
            o = a(n(34));

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var s = {
            createError: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        useCodePrefix: !0
                    },
                    n = this.constructor && this.constructor.type || "",
                    a = this.name || n,
                    s = this.i18n || this.core && this.core.i18n || this.container && this.container.i18n,
                    l = a + ":" + (t && t.code || "unknown"),
                    u = {
                        description: "",
                        level: o.default.Levels.FATAL,
                        origin: a,
                        scope: n,
                        raw: {}
                    },
                    c = (0, i.default)({}, u, t, {
                        code: e.useCodePrefix ? l : t.code
                    });
                if (s && c.level == o.default.Levels.FATAL && !c.UI) {
                    var d = {
                        title: s.t("default_error_title"),
                        message: s.t("default_error_message")
                    };
                    c.UI = d
                }
                return this.playerError ? this.playerError.createError(c) : r.default.warn(a, "PlayerError is not defined. Error: ", c), c
            }
        };
        e.default = s, t.exports = e.default
    }, function(t, e, n) {
        var i = n(30);
        t.exports = function(t) {
            if (!i(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        t.exports = !n(26)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = d(n(11)),
            r = d(n(0)),
            o = d(n(1)),
            a = d(n(3)),
            s = d(n(2)),
            l = n(5),
            u = d(n(29)),
            c = d(n(19));

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var f = function(t) {
            function e(n) {
                (0, r.default)(this, e);
                var i = (0, o.default)(this, t.call(this, n.options));
                return i.core = n, i.enabled = !0, i.bindEvents(), i.render(), i
            }
            return (0, s.default)(e, t), (0, a.default)(e, [{
                key: "playerError",
                get: function() {
                    return this.core.playerError
                }
            }]), e.prototype.bindEvents = function() {}, e.prototype.getExternalInterface = function() {
                return {}
            }, e.prototype.enable = function() {
                this.enabled || (this.bindEvents(), this.$el.show(), this.enabled = !0)
            }, e.prototype.disable = function() {
                this.stopListening(), this.$el.hide(), this.enabled = !1
            }, e.prototype.render = function() {
                return this
            }, e
        }(u.default);
        e.default = f, (0, i.default)(f.prototype, c.default), f.extend = function(t) {
            return (0, l.extend)(f, t)
        }, f.type = "core", t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        t.exports = void 0
    }, function(t, e, n) {
        var i = n(17),
            r = n(31);
        t.exports = n(21) ? function(t, e, n) {
            return i.f(t, e, r(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e, n) {
        var i = n(67),
            r = n(50);
        t.exports = Object.keys || function(t) {
            return i(t, r)
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(141),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = c(n(0)),
            r = c(n(1)),
            o = c(n(3)),
            a = c(n(2)),
            s = c(n(6)),
            l = n(5),
            u = c(n(14));

        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var d = /^(\S+)\s*(.*)$/,
            f = function(t) {
                function e(n) {
                    (0, i.default)(this, e);
                    var o = (0, r.default)(this, t.call(this, n));
                    return o.cid = (0, l.uniqueId)("c"), o._ensureElement(), o.delegateEvents(), o
                }
                return (0, a.default)(e, t), (0, o.default)(e, [{
                    key: "tagName",
                    get: function() {
                        return "div"
                    }
                }, {
                    key: "events",
                    get: function() {
                        return {}
                    }
                }, {
                    key: "attributes",
                    get: function() {
                        return {}
                    }
                }]), e.prototype.$ = function(t) {
                    return this.$el.find(t)
                }, e.prototype.render = function() {
                    return this
                }, e.prototype.destroy = function() {
                    return this.$el.remove(), this.stopListening(), this.undelegateEvents(), this
                }, e.prototype.setElement = function(t, e) {
                    return this.$el && this.undelegateEvents(), this.$el = s.default.zepto.isZ(t) ? t : (0, s.default)(t), this.el = this.$el[0], !1 !== e && this.delegateEvents(), this
                }, e.prototype.delegateEvents = function(t) {
                    if (!t && !(t = this.events)) return this;
                    for (var e in this.undelegateEvents(), t) {
                        var n = t[e];
                        if (n && n.constructor !== Function && (n = this[t[e]]), n) {
                            var i = e.match(d),
                                r = i[1],
                                o = i[2];
                            r += ".delegateEvents" + this.cid, "" === o ? this.$el.on(r, n.bind(this)) : this.$el.on(r, o, n.bind(this))
                        }
                    }
                    return this
                }, e.prototype.undelegateEvents = function() {
                    return this.$el.off(".delegateEvents" + this.cid), this
                }, e.prototype._ensureElement = function() {
                    if (this.el) this.setElement(this.el, !1);
                    else {
                        var t = s.default.extend({}, this.attributes);
                        this.id && (t.id = this.id), this.className && (t.class = this.className);
                        var e = l.DomRecycler.create(this.tagName).attr(t);
                        this.setElement(e, !1)
                    }
                }, e
            }(u.default);
        e.default = f, t.exports = e.default
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(149),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(80),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = d(n(11)),
            r = d(n(0)),
            o = d(n(1)),
            a = d(n(3)),
            s = d(n(2)),
            l = n(5),
            u = d(n(14)),
            c = d(n(19));

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var f = function(t) {
            function e(n) {
                (0, r.default)(this, e);
                var i = (0, o.default)(this, t.call(this, n.options));
                return i.core = n, i.enabled = !0, i.bindEvents(), i
            }
            return (0, s.default)(e, t), (0, a.default)(e, [{
                key: "playerError",
                get: function() {
                    return this.core.playerError
                }
            }]), e.prototype.bindEvents = function() {}, e.prototype.enable = function() {
                this.enabled || (this.bindEvents(), this.enabled = !0)
            }, e.prototype.disable = function() {
                this.enabled && (this.stopListening(), this.enabled = !1)
            }, e.prototype.getExternalInterface = function() {
                return {}
            }, e.prototype.destroy = function() {
                this.stopListening()
            }, e
        }(u.default);
        e.default = f, (0, i.default)(f.prototype, c.default), f.extend = function(t) {
            return (0, l.extend)(f, t)
        }, f.type = "core", t.exports = e.default
    }, function(t, e) {
        var n = 0,
            i = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
        }
    }, function(t, e) {
        e.f = {}.propertyIsEnumerable
    }, function(t, e, n) {
        var i = n(46);
        t.exports = function(t) {
            return Object(i(t))
        }
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = a(n(108)),
            r = a(n(118)),
            o = "function" == typeof r.default && "symbol" == typeof i.default ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof r.default && t.constructor === r.default && t !== r.default.prototype ? "symbol" : typeof t
            };

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = "function" == typeof r.default && "symbol" === o(i.default) ? function(t) {
            return void 0 === t ? "undefined" : o(t)
        } : function(t) {
            return t && "function" == typeof r.default && t.constructor === r.default && t !== r.default.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(0),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        var a = function t() {
            (0, o.default)(this, t), this.options = {}, this.playbackPlugins = [], this.currentSize = {
                width: 0,
                height: 0
            }
        };
        a._players = {}, a.getInstance = function(t) {
            return a._players[t] || (a._players[t] = new a)
        }, e.default = a, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = d(n(11)),
            r = d(n(0)),
            o = d(n(1)),
            a = d(n(3)),
            s = d(n(2)),
            l = n(5),
            u = d(n(29)),
            c = d(n(19));

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var f = function(t) {
            function e(n) {
                (0, r.default)(this, e);
                var i = (0, o.default)(this, t.call(this, n.options));
                return i.container = n, i.enabled = !0, i.bindEvents(), i
            }
            return (0, s.default)(e, t), (0, a.default)(e, [{
                key: "playerError",
                get: function() {
                    return this.container.playerError
                }
            }]), e.prototype.enable = function() {
                this.enabled || (this.bindEvents(), this.$el.show(), this.enabled = !0)
            }, e.prototype.disable = function() {
                this.stopListening(), this.$el.hide(), this.enabled = !1
            }, e.prototype.bindEvents = function() {}, e
        }(u.default);
        e.default = f, (0, i.default)(f.prototype, c.default), f.extend = function(t) {
            return (0, l.extend)(f, t)
        }, f.type = "container", t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = d(n(11)),
            r = d(n(0)),
            o = d(n(1)),
            a = d(n(3)),
            s = d(n(2)),
            l = d(n(14)),
            u = n(5),
            c = d(n(19));

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var f = function(t) {
            function e(n) {
                (0, r.default)(this, e);
                var i = (0, o.default)(this, t.call(this, n.options));
                return i.container = n, i.enabled = !0, i.bindEvents(), i
            }
            return (0, s.default)(e, t), (0, a.default)(e, [{
                key: "playerError",
                get: function() {
                    return this.container.playerError
                }
            }]), e.prototype.enable = function() {
                this.enabled || (this.bindEvents(), this.enabled = !0)
            }, e.prototype.disable = function() {
                this.enabled && (this.stopListening(), this.enabled = !1)
            }, e.prototype.bindEvents = function() {}, e.prototype.destroy = function() {
                this.stopListening()
            }, e
        }(l.default);
        e.default = f, (0, i.default)(f.prototype, c.default), f.extend = function(t) {
            return (0, u.extend)(f, t)
        }, f.type = "container", t.exports = e.default
    }, function(t, e, n) {
        var i = n(102);
        t.exports = function(t, e, n) {
            if (i(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e, n) {
        var i = n(30);
        t.exports = function(t, e) {
            if (!i(t)) return t;
            var n, r;
            if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
            if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
            if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e) {
        var n = Math.ceil,
            i = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
        }
    }, function(t, e, n) {
        var i = n(49)("keys"),
            r = n(36);
        t.exports = function(t) {
            return i[t] || (i[t] = r(t))
        }
    }, function(t, e, n) {
        var i = n(16),
            r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        t.exports = function(t) {
            return r[t] || (r[t] = {})
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function(t, e, n) {
        t.exports = {
            default: n(106),
            __esModule: !0
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(110)(!0);
        n(71)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = i(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, e) {
        t.exports = !0
    }, function(t, e, n) {
        var i = n(20),
            r = n(112),
            o = n(50),
            a = n(48)("IE_PROTO"),
            s = function() {},
            l = function() {
                var t, e = n(66)("iframe"),
                    i = o.length;
                for (e.style.display = "none", n(113).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; i--;) delete l.prototype[o[i]];
                return l()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (s.prototype = i(t), n = new s, s.prototype = null, n[a] = t) : n = l(), void 0 === e ? n : r(n, e)
        }
    }, function(t, e, n) {
        var i = n(17).f,
            r = n(22),
            o = n(12)("toStringTag");
        t.exports = function(t, e, n) {
            t && !r(t = n ? t : t.prototype, o) && i(t, o, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e, n) {
        e.f = n(12)
    }, function(t, e, n) {
        var i = n(16),
            r = n(7),
            o = n(54),
            a = n(57),
            s = n(17).f;
        t.exports = function(t) {
            var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: a.f(t)
            })
        }
    }, function(t, e, n) {
        var i = n(37),
            r = n(31),
            o = n(18),
            a = n(44),
            s = n(22),
            l = n(65),
            u = Object.getOwnPropertyDescriptor;
        e.f = n(21) ? u : function(t, e) {
            if (t = o(t), e = a(e, !0), l) try {
                return u(t, e)
            } catch (t) {}
            if (s(t, e)) return r(!i.f.call(t, e), t[e])
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(150),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = {
            Kibo: o.default
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(n(0));

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = new(r(n(4)).default),
            a = function t() {
                (0, i.default)(this, t)
            };
        e.default = a, a.on = function(t, e, n) {
            o.on(t, e, n)
        }, a.once = function(t, e, n) {
            o.once(t, e, n)
        }, a.off = function(t, e, n) {
            o.off(t, e, n)
        }, a.trigger = function(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
            o.trigger.apply(o, [t].concat(n))
        }, a.stopListening = function(t, e, n) {
            o.stopListening(t, e, n)
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(171),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e) {
        var n, i, r = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                n = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                i = a
            }
        }();
        var l, u = [],
            c = !1,
            d = -1;

        function f() {
            c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && p())
        }

        function p() {
            if (!c) {
                var t = s(f);
                c = !0;
                for (var e = u.length; e;) {
                    for (l = u, u = []; ++d < e;) l && l[d].run();
                    d = -1, e = u.length
                }
                l = null, c = !1,
                    function(t) {
                        if (i === clearTimeout) return clearTimeout(t);
                        if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                        try {
                            i(t)
                        } catch (e) {
                            try {
                                return i.call(null, t)
                            } catch (e) {
                                return i.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function h(t, e) {
            this.fun = t, this.array = e
        }

        function A() {}
        r.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            u.push(new h(t, e)), 1 !== u.length || c || s(p)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = A, r.addListener = A, r.once = A, r.off = A, r.removeListener = A, r.removeAllListeners = A, r.emit = A, r.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, r.cwd = function() {
            return "/"
        }, r.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, r.umask = function() {
            return 0
        }
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M1.425.35L14.575 8l-13.15 7.65V.35z"></path></svg>'
    }, function(t, e, n) {
        t.exports = !n(21) && !n(26)(function() {
            return 7 != Object.defineProperty(n(66)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var i = n(30),
            r = n(16).document,
            o = i(r) && i(r.createElement);
        t.exports = function(t) {
            return o ? r.createElement(t) : {}
        }
    }, function(t, e, n) {
        var i = n(22),
            r = n(18),
            o = n(104)(!1),
            a = n(48)("IE_PROTO");
        t.exports = function(t, e) {
            var n, s = r(t),
                l = 0,
                u = [];
            for (n in s) n != a && i(s, n) && u.push(n);
            for (; e.length > l;) i(s, n = e[l++]) && (~o(u, n) || u.push(n));
            return u
        }
    }, function(t, e, n) {
        var i = n(45);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == i(t) ? t.split("") : Object(t)
        }
    }, function(t, e, n) {
        var i = n(47),
            r = Math.min;
        t.exports = function(t) {
            return t > 0 ? r(i(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var i = n(15),
            r = n(7),
            o = n(26);
        t.exports = function(t, e) {
            var n = (r.Object || {})[t] || Object[t],
                a = {};
            a[t] = e(n), i(i.S + i.F * o(function() {
                n(1)
            }), "Object", a)
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(54),
            r = n(15),
            o = n(72),
            a = n(25),
            s = n(22),
            l = n(32),
            u = n(111),
            c = n(56),
            d = n(114),
            f = n(12)("iterator"),
            p = !([].keys && "next" in [].keys()),
            h = function() {
                return this
            };
        t.exports = function(t, e, n, A, g, y, m) {
            u(n, e, A);
            var v, b, _, E = function(t) {
                    if (!p && t in O) return O[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                T = e + " Iterator",
                C = "values" == g,
                k = !1,
                O = t.prototype,
                w = O[f] || O["@@iterator"] || g && O[g],
                S = w || E(g),
                x = g ? C ? E("entries") : S : void 0,
                I = "Array" == e && O.entries || w;
            if (I && (_ = d(I.call(new t))) !== Object.prototype && (c(_, T, !0), i || s(_, f) || a(_, f, h)), C && w && "values" !== w.name && (k = !0, S = function() {
                    return w.call(this)
                }), i && !m || !p && !k && O[f] || a(O, f, S), l[e] = S, l[T] = h, g)
                if (v = {
                        values: C ? S : E("values"),
                        keys: y ? S : E("keys"),
                        entries: x
                    }, m)
                    for (b in v) b in O || o(O, b, v[b]);
                else r(r.P + r.F * (p || k), e, v);
            return v
        }
    }, function(t, e, n) {
        t.exports = n(25)
    }, function(t, e, n) {
        n(115);
        for (var i = n(16), r = n(25), o = n(32), a = n(12)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
            var u = s[l],
                c = i[u],
                d = c && c.prototype;
            d && !d[a] && r(d, a, u), o[u] = o.Array
        }
    }, function(t, e, n) {
        var i = n(67),
            r = n(50).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return i(t, r)
        }
    }, function(t, e, n) {
        t.exports = {
            default: n(129),
            __esModule: !0
        }
    }, function(t, e, n) {
        t.exports = {
            default: n(135),
            __esModule: !0
        }
    }, function(t, e, n) {
        var i = n(145),
            r = n(12)("iterator"),
            o = n(32);
        t.exports = n(7).getIteratorMethod = function(t) {
            if (null != t) return t[r] || t["@@iterator"] || o[i(t)]
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(153),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = o(n(6)),
            r = o(n(10));

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var a = {
            getStyleFor: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    baseUrl: ""
                };
                return (0, i.default)('<style class="clappr-style"></style>').html((0, r.default)(t.toString())(e))
            }
        };
        e.default = a, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = c(n(0)),
            r = c(n(1)),
            o = c(n(3)),
            a = c(n(2)),
            s = c(n(4)),
            l = c(n(14)),
            u = c(n(33));

        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var d = function(t) {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = arguments[1];
                (0, i.default)(this, e);
                var a = (0, r.default)(this, t.call(this, n));
                return a.core = o, a
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "error"
                }
            }], [{
                key: "Levels",
                get: function() {
                    return {
                        FATAL: "FATAL",
                        WARN: "WARN",
                        INFO: "INFO"
                    }
                }
            }]), e.prototype.createError = function(t) {
                this.core ? this.core.trigger(s.default.ERROR, t) : u.default.warn(this.name, "Core is not set. Error: ", t)
            }, e
        }(l.default);
        e.default = d, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(156),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e) {
        t.exports = function(t) {
            return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t)
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(164),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i, r = n(85),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, o.default)(t)
        }
    }, function(t, e, n) {
        t.exports = {
            default: n(165),
            __esModule: !0
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(175),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(176),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(179),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(183),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(189),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(193),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(199),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(200),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e) {
        t.exports = "<%=baseUrl%>/a8c874b93b3d848f39a71260c57e3863.cur"
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M1.712 14.76H6.43V1.24H1.71v13.52zm7.86-13.52v13.52h4.716V1.24H9.573z"></path></svg>'
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(212),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(222),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = $(n(99)),
            r = $(n(5)),
            o = $(n(4)),
            a = $(n(13)),
            s = $(n(42)),
            l = $(n(35)),
            u = $(n(23)),
            c = $(n(41)),
            d = $(n(14)),
            f = $(n(29)),
            p = $(n(28)),
            h = $(n(81)),
            A = $(n(78)),
            g = $(n(34)),
            y = $(n(83)),
            m = $(n(61)),
            v = $(n(40)),
            b = $(n(24)),
            _ = $(n(24)),
            E = $(n(24)),
            T = $(n(24)),
            C = $(n(86)),
            k = $(n(62)),
            O = $(n(87)),
            w = $(n(88)),
            S = $(n(93)),
            x = $(n(92)),
            I = $(n(96)),
            P = $(n(97)),
            N = $(n(33)),
            R = $(n(91)),
            L = $(n(89)),
            M = $(n(90)),
            D = $(n(79)),
            B = $(n(60)),
            F = $(n(10)),
            U = $(n(6));

        function $(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            Player: i.default,
            Mediator: m.default,
            Events: o.default,
            Browser: p.default,
            PlayerInfo: v.default,
            MediaControl: S.default,
            ContainerPlugin: s.default,
            UIContainerPlugin: c.default,
            CorePlugin: l.default,
            UICorePlugin: u.default,
            Playback: a.default,
            Container: h.default,
            Core: A.default,
            PlayerError: g.default,
            Loader: y.default,
            BaseObject: d.default,
            UIObject: f.default,
            Utils: r.default,
            BaseFlashPlayback: b.default,
            Flash: _.default,
            FlasHLS: E.default,
            HLS: T.default,
            HTML5Audio: C.default,
            HTML5Video: k.default,
            HTMLImg: O.default,
            NoOp: w.default,
            ClickToPausePlugin: x.default,
            DVRControls: I.default,
            Favicon: P.default,
            Log: N.default,
            Poster: R.default,
            SpinnerThreeBouncePlugin: L.default,
            WaterMarkPlugin: M.default,
            Styler: D.default,
            Vendor: B.default,
            version: "0.3.8",
            template: F.default,
            $: U.default
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = m(n(11)),
            r = m(n(52)),
            o = m(n(0)),
            a = m(n(1)),
            s = m(n(3)),
            l = m(n(2)),
            u = n(5),
            c = m(n(14)),
            d = m(n(4)),
            f = m(n(28)),
            p = m(n(151)),
            h = m(n(83)),
            A = m(n(40)),
            g = m(n(19)),
            y = m(n(6));

        function m(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var v = (0, u.currentScriptUrl)().replace(/\/[^\/]+$/, ""),
            b = function(t) {
                function e(n) {
                    (0, o.default)(this, e);
                    var i = (0, a.default)(this, t.call(this, n)),
                        r = {
                            playerId: (0, u.uniqueId)(""),
                            persistConfig: !0,
                            width: 640,
                            height: 360,
                            baseUrl: v,
                            allowUserInteraction: f.default.isMobile,
                            playback: {
                                recycleVideo: !0
                            }
                        };
                    return i._options = y.default.extend(r, n), i.options.sources = i._normalizeSources(n), i.options.chromeless || (i.options.allowUserInteraction = !0), i.options.allowUserInteraction || (i.options.disableKeyboardShortcuts = !0), i._registerOptionEventListeners(i.options.events), i._coreFactory = new p.default(i), i.playerInfo = A.default.getInstance(i.options.playerId), i.playerInfo.currentSize = {
                        width: n.width,
                        height: n.height
                    }, i.playerInfo.options = i.options, i.options.parentId ? i.setParentId(i.options.parentId) : i.options.parent && i.attachTo(i.options.parent), i
                }
                return (0, l.default)(e, t), (0, s.default)(e, [{
                    key: "loader",
                    set: function(t) {
                        this._loader = t
                    },
                    get: function() {
                        return this._loader || (this._loader = new h.default(this.options.plugins || {}, this.options.playerId)), this._loader
                    }
                }, {
                    key: "ended",
                    get: function() {
                        return this.core.activeContainer.ended
                    }
                }, {
                    key: "buffering",
                    get: function() {
                        return this.core.activeContainer.buffering
                    }
                }, {
                    key: "isReady",
                    get: function() {
                        return !!this._ready
                    }
                }, {
                    key: "eventsMapping",
                    get: function() {
                        return {
                            onReady: d.default.PLAYER_READY,
                            onResize: d.default.PLAYER_RESIZE,
                            onPlay: d.default.PLAYER_PLAY,
                            onPause: d.default.PLAYER_PAUSE,
                            onStop: d.default.PLAYER_STOP,
                            onEnded: d.default.PLAYER_ENDED,
                            onSeek: d.default.PLAYER_SEEK,
                            onError: d.default.PLAYER_ERROR,
                            onTimeUpdate: d.default.PLAYER_TIMEUPDATE,
                            onVolumeUpdate: d.default.PLAYER_VOLUMEUPDATE,
                            onSubtitleAvailable: d.default.PLAYER_SUBTITLE_AVAILABLE
                        }
                    }
                }]), e.prototype.setParentId = function(t) {
                    var e = document.querySelector(t);
                    return e && this.attachTo(e), this
                }, e.prototype.attachTo = function(t) {
                    return this.options.parentElement = t, this.core = this._coreFactory.create(), this._addEventListeners(), this
                }, e.prototype._addEventListeners = function() {
                    return this.core.isReady ? this._onReady() : this.listenToOnce(this.core, d.default.CORE_READY, this._onReady), this.listenTo(this.core, d.default.CORE_ACTIVE_CONTAINER_CHANGED, this._containerChanged), this.listenTo(this.core, d.default.CORE_FULLSCREEN, this._onFullscreenChange), this.listenTo(this.core, d.default.CORE_RESIZE, this._onResize), this
                }, e.prototype._addContainerEventListeners = function() {
                    var t = this.core.activeContainer;
                    return t && (this.listenTo(t, d.default.CONTAINER_PLAY, this._onPlay), this.listenTo(t, d.default.CONTAINER_PAUSE, this._onPause), this.listenTo(t, d.default.CONTAINER_STOP, this._onStop), this.listenTo(t, d.default.CONTAINER_ENDED, this._onEnded), this.listenTo(t, d.default.CONTAINER_SEEK, this._onSeek), this.listenTo(t, d.default.CONTAINER_ERROR, this._onError), this.listenTo(t, d.default.CONTAINER_TIMEUPDATE, this._onTimeUpdate), this.listenTo(t, d.default.CONTAINER_VOLUME, this._onVolumeUpdate), this.listenTo(t, d.default.CONTAINER_SUBTITLE_AVAILABLE, this._onSubtitleAvailable)), this
                }, e.prototype._registerOptionEventListeners = function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, r.default)(e).length > 0 && (0, r.default)(n).forEach(function(e) {
                        var i = t.eventsMapping[e];
                        i && t.off(i, n[e])
                    }), (0, r.default)(e).forEach(function(n) {
                        var i = t.eventsMapping[n];
                        if (i) {
                            var r = e[n];
                            (r = "function" == typeof r && r) && t.on(i, r)
                        }
                    }), this
                }, e.prototype._containerChanged = function() {
                    this.stopListening(), this._addEventListeners()
                }, e.prototype._onReady = function() {
                    this._ready = !0, this._addContainerEventListeners(), this.trigger(d.default.PLAYER_READY)
                }, e.prototype._onFullscreenChange = function(t) {
                    this.trigger(d.default.PLAYER_FULLSCREEN, t)
                }, e.prototype._onVolumeUpdate = function(t) {
                    this.trigger(d.default.PLAYER_VOLUMEUPDATE, t)
                }, e.prototype._onSubtitleAvailable = function() {
                    this.trigger(d.default.PLAYER_SUBTITLE_AVAILABLE)
                }, e.prototype._onResize = function(t) {
                    this.trigger(d.default.PLAYER_RESIZE, t)
                }, e.prototype._onPlay = function() {
                    this.trigger(d.default.PLAYER_PLAY)
                }, e.prototype._onPause = function() {
                    this.trigger(d.default.PLAYER_PAUSE)
                }, e.prototype._onStop = function() {
                    this.trigger(d.default.PLAYER_STOP, this.getCurrentTime())
                }, e.prototype._onEnded = function() {
                    this.trigger(d.default.PLAYER_ENDED)
                }, e.prototype._onSeek = function(t) {
                    this.trigger(d.default.PLAYER_SEEK, t)
                }, e.prototype._onTimeUpdate = function(t) {
                    this.trigger(d.default.PLAYER_TIMEUPDATE, t)
                }, e.prototype._onError = function(t) {
                    this.trigger(d.default.PLAYER_ERROR, t)
                }, e.prototype._normalizeSources = function(t) {
                    var e = t.sources || (void 0 !== t.source ? [t.source] : []);
                    return 0 === e.length ? [{
                        source: "",
                        mimeType: ""
                    }] : e
                }, e.prototype.resize = function(t) {
                    return this.core.resize(t), this
                }, e.prototype.load = function(t, e, n) {
                    return void 0 !== n && this.configure({
                        autoPlay: !!n
                    }), this.core.load(t, e), this
                }, e.prototype.destroy = function() {
                    return this.stopListening(), this.core.destroy(), this
                }, e.prototype.consent = function() {
                    return this.core.getCurrentPlayback().consent(), this
                }, e.prototype.play = function() {
                    return this.core.activeContainer.play(), this
                }, e.prototype.pause = function() {
                    return this.core.activeContainer.pause(), this
                }, e.prototype.stop = function() {
                    return this.core.activeContainer.stop(), this
                }, e.prototype.seek = function(t) {
                    return this.core.activeContainer.seek(t), this
                }, e.prototype.seekPercentage = function(t) {
                    return this.core.activeContainer.seekPercentage(t), this
                }, e.prototype.mute = function() {
                    return this._mutedVolume = this.getVolume(), this.setVolume(0), this
                }, e.prototype.unmute = function() {
                    return this.setVolume("number" == typeof this._mutedVolume ? this._mutedVolume : 100), this._mutedVolume = null, this
                }, e.prototype.isPlaying = function() {
                    return this.core.activeContainer.isPlaying()
                }, e.prototype.isDvrEnabled = function() {
                    return this.core.activeContainer.isDvrEnabled()
                }, e.prototype.isDvrInUse = function() {
                    return this.core.activeContainer.isDvrInUse()
                }, e.prototype.configure = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this._registerOptionEventListeners(t.events, this.options.events), this.core.configure(t), this
                }, e.prototype.getPlugin = function(t) {
                    return this.core.plugins.concat(this.core.activeContainer.plugins).filter(function(e) {
                        return e.name === t
                    })[0]
                }, e.prototype.getCurrentTime = function() {
                    return this.core.activeContainer.getCurrentTime()
                }, e.prototype.getStartTimeOffset = function() {
                    return this.core.activeContainer.getStartTimeOffset()
                }, e.prototype.getDuration = function() {
                    return this.core.activeContainer.getDuration()
                }, e
            }(c.default);
        e.default = b, (0, i.default)(b.prototype, g.default), t.exports = e.default
    }, function(t, e, n) {
        n(101), t.exports = n(7).Object.assign
    }, function(t, e, n) {
        var i = n(15);
        i(i.S + i.F, "Object", {
            assign: n(103)
        })
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(27),
            r = n(51),
            o = n(37),
            a = n(38),
            s = n(68),
            l = Object.assign;
        t.exports = !l || n(26)(function() {
            var t = {},
                e = {},
                n = Symbol(),
                i = "abcdefghijklmnopqrst";
            return t[n] = 7, i.split("").forEach(function(t) {
                e[t] = t
            }), 7 != l({}, t)[n] || Object.keys(l({}, e)).join("") != i
        }) ? function(t, e) {
            for (var n = a(t), l = arguments.length, u = 1, c = r.f, d = o.f; l > u;)
                for (var f, p = s(arguments[u++]), h = c ? i(p).concat(c(p)) : i(p), A = h.length, g = 0; A > g;) d.call(p, f = h[g++]) && (n[f] = p[f]);
            return n
        } : l
    }, function(t, e, n) {
        var i = n(18),
            r = n(69),
            o = n(105);
        t.exports = function(t) {
            return function(e, n, a) {
                var s, l = i(e),
                    u = r(l.length),
                    c = o(a, u);
                if (t && n != n) {
                    for (; u > c;)
                        if ((s = l[c++]) != s) return !0
                } else
                    for (; u > c; c++)
                        if ((t || c in l) && l[c] === n) return t || c || 0; return !t && -1
            }
        }
    }, function(t, e, n) {
        var i = n(47),
            r = Math.max,
            o = Math.min;
        t.exports = function(t, e) {
            return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
        }
    }, function(t, e, n) {
        n(107), t.exports = n(7).Object.keys
    }, function(t, e, n) {
        var i = n(38),
            r = n(27);
        n(70)("keys", function() {
            return function(t) {
                return r(i(t))
            }
        })
    }, function(t, e, n) {
        t.exports = {
            default: n(109),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(53), n(73), t.exports = n(57).f("iterator")
    }, function(t, e, n) {
        var i = n(47),
            r = n(46);
        t.exports = function(t) {
            return function(e, n) {
                var o, a, s = String(r(e)),
                    l = i(n),
                    u = s.length;
                return l < 0 || l >= u ? t ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(55),
            r = n(31),
            o = n(56),
            a = {};
        n(25)(a, n(12)("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = i(a, {
                next: r(1, n)
            }), o(t, e + " Iterator")
        }
    }, function(t, e, n) {
        var i = n(17),
            r = n(20),
            o = n(27);
        t.exports = n(21) ? Object.defineProperties : function(t, e) {
            r(t);
            for (var n, a = o(e), s = a.length, l = 0; s > l;) i.f(t, n = a[l++], e[n]);
            return t
        }
    }, function(t, e, n) {
        t.exports = n(16).document && document.documentElement
    }, function(t, e, n) {
        var i = n(22),
            r = n(38),
            o = n(48)("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(116),
            r = n(117),
            o = n(32),
            a = n(18);
        t.exports = n(71)(Array, "Array", function(t, e) {
            this._t = a(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
    }, function(t, e) {
        t.exports = function() {}
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function(t, e, n) {
        t.exports = {
            default: n(119),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(120), n(126), n(127), n(128), t.exports = n(7).Symbol
    }, function(t, e, n) {
        "use strict";
        var i = n(16),
            r = n(22),
            o = n(21),
            a = n(15),
            s = n(72),
            l = n(121).KEY,
            u = n(26),
            c = n(49),
            d = n(56),
            f = n(36),
            p = n(12),
            h = n(57),
            A = n(58),
            g = n(122),
            y = n(123),
            m = n(124),
            v = n(20),
            b = n(18),
            _ = n(44),
            E = n(31),
            T = n(55),
            C = n(125),
            k = n(59),
            O = n(17),
            w = n(27),
            S = k.f,
            x = O.f,
            I = C.f,
            P = i.Symbol,
            N = i.JSON,
            R = N && N.stringify,
            L = p("_hidden"),
            M = p("toPrimitive"),
            D = {}.propertyIsEnumerable,
            B = c("symbol-registry"),
            F = c("symbols"),
            U = c("op-symbols"),
            $ = Object.prototype,
            V = "function" == typeof P,
            j = i.QObject,
            Y = !j || !j.prototype || !j.prototype.findChild,
            K = o && u(function() {
                return 7 != T(x({}, "a", {
                    get: function() {
                        return x(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var i = S($, e);
                i && delete $[e], x(t, e, n), i && t !== $ && x($, e, i)
            } : x,
            H = function(t) {
                var e = F[t] = T(P.prototype);
                return e._k = t, e
            },
            z = V && "symbol" == typeof P.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof P
            },
            G = function(t, e, n) {
                return t === $ && G(U, e, n), v(t), e = _(e, !0), v(n), r(F, e) ? (n.enumerable ? (r(t, L) && t[L][e] && (t[L][e] = !1), n = T(n, {
                    enumerable: E(0, !1)
                })) : (r(t, L) || x(t, L, E(1, {})), t[L][e] = !0), K(t, e, n)) : x(t, e, n)
            },
            W = function(t, e) {
                v(t);
                for (var n, i = y(e = b(e)), r = 0, o = i.length; o > r;) G(t, n = i[r++], e[n]);
                return t
            },
            q = function(t) {
                var e = D.call(this, t = _(t, !0));
                return !(this === $ && r(F, t) && !r(U, t)) && (!(e || !r(this, t) || !r(F, t) || r(this, L) && this[L][t]) || e)
            },
            X = function(t, e) {
                if (t = b(t), e = _(e, !0), t !== $ || !r(F, e) || r(U, e)) {
                    var n = S(t, e);
                    return !n || !r(F, e) || r(t, L) && t[L][e] || (n.enumerable = !0), n
                }
            },
            Z = function(t) {
                for (var e, n = I(b(t)), i = [], o = 0; n.length > o;) r(F, e = n[o++]) || e == L || e == l || i.push(e);
                return i
            },
            Q = function(t) {
                for (var e, n = t === $, i = I(n ? U : b(t)), o = [], a = 0; i.length > a;) !r(F, e = i[a++]) || n && !r($, e) || o.push(F[e]);
                return o
            };
        V || (s((P = function() {
            if (this instanceof P) throw TypeError("Symbol is not a constructor!");
            var t = f(arguments.length > 0 ? arguments[0] : void 0),
                e = function(n) {
                    this === $ && e.call(U, n), r(this, L) && r(this[L], t) && (this[L][t] = !1), K(this, t, E(1, n))
                };
            return o && Y && K($, t, {
                configurable: !0,
                set: e
            }), H(t)
        }).prototype, "toString", function() {
            return this._k
        }), k.f = X, O.f = G, n(74).f = C.f = Z, n(37).f = q, n(51).f = Q, o && !n(54) && s($, "propertyIsEnumerable", q, !0), h.f = function(t) {
            return H(p(t))
        }), a(a.G + a.W + a.F * !V, {
            Symbol: P
        });
        for (var J = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; J.length > tt;) p(J[tt++]);
        for (J = w(p.store), tt = 0; J.length > tt;) A(J[tt++]);
        a(a.S + a.F * !V, "Symbol", {
            for: function(t) {
                return r(B, t += "") ? B[t] : B[t] = P(t)
            },
            keyFor: function(t) {
                if (z(t)) return g(B, t);
                throw TypeError(t + " is not a symbol!")
            },
            useSetter: function() {
                Y = !0
            },
            useSimple: function() {
                Y = !1
            }
        }), a(a.S + a.F * !V, "Object", {
            create: function(t, e) {
                return void 0 === e ? T(t) : W(T(t), e)
            },
            defineProperty: G,
            defineProperties: W,
            getOwnPropertyDescriptor: X,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: Q
        }), N && a(a.S + a.F * (!V || u(function() {
            var t = P();
            return "[null]" != R([t]) || "{}" != R({
                a: t
            }) || "{}" != R(Object(t))
        })), "JSON", {
            stringify: function(t) {
                if (void 0 !== t && !z(t)) {
                    for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
                    return "function" == typeof(e = i[1]) && (n = e), !n && m(e) || (e = function(t, e) {
                        if (n && (e = n.call(this, t, e)), !z(e)) return e
                    }), i[1] = e, R.apply(N, i)
                }
            }
        }), P.prototype[M] || n(25)(P.prototype, M, P.prototype.valueOf), d(P, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
    }, function(t, e, n) {
        var i = n(36)("meta"),
            r = n(30),
            o = n(22),
            a = n(17).f,
            s = 0,
            l = Object.isExtensible || function() {
                return !0
            },
            u = !n(26)(function() {
                return l(Object.preventExtensions({}))
            }),
            c = function(t) {
                a(t, i, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            },
            d = t.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!o(t, i)) {
                        if (!l(t)) return "F";
                        if (!e) return "E";
                        c(t)
                    }
                    return t[i].i
                },
                getWeak: function(t, e) {
                    if (!o(t, i)) {
                        if (!l(t)) return !0;
                        if (!e) return !1;
                        c(t)
                    }
                    return t[i].w
                },
                onFreeze: function(t) {
                    return u && d.NEED && l(t) && !o(t, i) && c(t), t
                }
            }
    }, function(t, e, n) {
        var i = n(27),
            r = n(18);
        t.exports = function(t, e) {
            for (var n, o = r(t), a = i(o), s = a.length, l = 0; s > l;)
                if (o[n = a[l++]] === e) return n
        }
    }, function(t, e, n) {
        var i = n(27),
            r = n(51),
            o = n(37);
        t.exports = function(t) {
            var e = i(t),
                n = r.f;
            if (n)
                for (var a, s = n(t), l = o.f, u = 0; s.length > u;) l.call(t, a = s[u++]) && e.push(a);
            return e
        }
    }, function(t, e, n) {
        var i = n(45);
        t.exports = Array.isArray || function(t) {
            return "Array" == i(t)
        }
    }, function(t, e, n) {
        var i = n(18),
            r = n(74).f,
            o = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return a && "[object Window]" == o.call(t) ? function(t) {
                try {
                    return r(t)
                } catch (t) {
                    return a.slice()
                }
            }(t) : r(i(t))
        }
    }, function(t, e) {}, function(t, e, n) {
        n(58)("asyncIterator")
    }, function(t, e, n) {
        n(58)("observable")
    }, function(t, e, n) {
        n(130);
        var i = n(7).Object;
        t.exports = function(t, e, n) {
            return i.defineProperty(t, e, n)
        }
    }, function(t, e, n) {
        var i = n(15);
        i(i.S + i.F * !n(21), "Object", {
            defineProperty: n(17).f
        })
    }, function(t, e, n) {
        t.exports = {
            default: n(132),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(133), t.exports = n(7).Object.setPrototypeOf
    }, function(t, e, n) {
        var i = n(15);
        i(i.S, "Object", {
            setPrototypeOf: n(134).set
        })
    }, function(t, e, n) {
        var i = n(30),
            r = n(20),
            o = function(t, e) {
                if (r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
                try {
                    (i = n(43)(Function.call, n(59).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function(t, n) {
                    return o(t, n), e ? t.__proto__ = n : i(t, n), t
                }
            }({}, !1) : void 0),
            check: o
        }
    }, function(t, e, n) {
        n(136);
        var i = n(7).Object;
        t.exports = function(t, e) {
            return i.create(t, e)
        }
    }, function(t, e, n) {
        var i = n(15);
        i(i.S, "Object", {
            create: n(55)
        })
    }, function(t, e, n) {
        t.exports = {
            default: n(138),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(139);
        var i = n(7).Object;
        t.exports = function(t, e) {
            return i.getOwnPropertyDescriptor(t, e)
        }
    }, function(t, e, n) {
        var i = n(18),
            r = n(59).f;
        n(70)("getOwnPropertyDescriptor", function() {
            return function(t, e) {
                return r(i(t), e)
            }
        })
    }, function(t, e, n) {
        "use strict";
        Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var e = Object(this),
                    n = e.length >>> 0;
                if ("function" != typeof t) throw new TypeError("predicate must be a function");
                for (var i = arguments[1], r = 0; r < n;) {
                    var o = e[r];
                    if (t.call(i, o, r, e)) return o;
                    r++
                }
            }
        })
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getDevice = e.getViewportSize = e.getOsData = e.getBrowserData = e.getBrowserInfo = void 0;
        var i = s(n(142)),
            r = s(n(6)),
            o = s(n(146)),
            a = s(n(147));

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var l = {},
            u = e.getBrowserInfo = function(t) {
                var e = t.match(/\b(playstation 4|nx|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
                    n = void 0;
                if (/trident/i.test(e[1])) return n = /\brv[ :]+(\d+)/g.exec(t) || [], {
                    name: "IE",
                    version: parseInt(n[1] || "")
                };
                if ("Chrome" === e[1]) {
                    if (null != (n = t.match(/\bOPR\/(\d+)/))) return {
                        name: "Opera",
                        version: parseInt(n[1])
                    };
                    if (null != (n = t.match(/\bEdge\/(\d+)/))) return {
                        name: "Edge",
                        version: parseInt(n[1])
                    }
                } else /android/i.test(t) && (n = t.match(/version\/(\d+)/i)) && (e.splice(1, 1, "Android WebView"), e.splice(2, 1, n[1]));
                return {
                    name: (e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, "-?"])[0],
                    version: parseInt(e[1])
                }
            },
            c = e.getBrowserData = function() {
                var t = {},
                    e = l.userAgent.toLowerCase(),
                    n = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var s, u = (0, i.default)(o.default); !(n = (s = u.next()).done); n = !0) {
                        var c = s.value,
                            f = new RegExp(c.identifier.toLowerCase()).exec(e);
                        if (null != f && f[1]) {
                            if (t.name = c.name, t.group = c.group, c.versionIdentifier) {
                                var p = new RegExp(c.versionIdentifier.toLowerCase()).exec(e);
                                null != p && p[1] && d(p[1], t)
                            } else d(f[1], t);
                            break
                        }
                    }
                } catch (t) {
                    r = !0, a = t
                } finally {
                    try {
                        !n && u.return && u.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return t
            },
            d = function(t, e) {
                var n = t.split(".", 2);
                e.fullVersion = t, n[0] && (e.majorVersion = parseInt(n[0])), n[1] && (e.minorVersion = parseInt(n[1]))
            },
            f = e.getOsData = function() {
                var t = {},
                    e = l.userAgent.toLowerCase(),
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var s, u = (0, i.default)(a.default); !(n = (s = u.next()).done); n = !0) {
                        var c = s.value,
                            d = new RegExp(c.identifier.toLowerCase()).exec(e);
                        if (null != d) {
                            if (t.name = c.name, t.group = c.group, c.version) p(c.version, c.versionSeparator ? c.versionSeparator : ".", t);
                            else if (d[1]) p(d[1], c.versionSeparator ? c.versionSeparator : ".", t);
                            else if (c.versionIdentifier) {
                                var f = new RegExp(c.versionIdentifier.toLowerCase()).exec(e);
                                null != f && f[1] && p(f[1], c.versionSeparator ? c.versionSeparator : ".", t)
                            }
                            break
                        }
                    }
                } catch (t) {
                    r = !0, o = t
                } finally {
                    try {
                        !n && u.return && u.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return t
            },
            p = function(t, e, n) {
                var i = "[" == e.substr(0, 1) ? new RegExp(e, "g") : e,
                    r = t.split(i, 2);
                "." != e && (t = t.replace(new RegExp(e, "g"), ".")), n.fullVersion = t, r && r[0] && (n.majorVersion = parseInt(r[0])), r && r[1] && (n.minorVersion = parseInt(r[1]))
            },
            h = e.getViewportSize = function() {
                var t = {};
                return t.width = (0, r.default)(window).width(), t.height = (0, r.default)(window).height(), t
            },
            A = e.getDevice = function(t) {
                var e = /\((iP(?:hone|ad|od))?(?:[^;]*; ){0,2}([^)]+(?=\)))/.exec(t);
                return e && (e[1] || e[2]) || ""
            },
            g = u(navigator.userAgent);
        l.isEdge = /edge/i.test(navigator.userAgent), l.isChrome = /chrome|CriOS/i.test(navigator.userAgent) && !l.isEdge, l.isSafari = /safari/i.test(navigator.userAgent) && !l.isChrome && !l.isEdge, l.isFirefox = /firefox/i.test(navigator.userAgent), l.isLegacyIE = !!window.ActiveXObject, l.isIE = l.isLegacyIE || /trident.*rv:1\d/i.test(navigator.userAgent), l.isIE11 = /trident.*rv:11/i.test(navigator.userAgent), l.isChromecast = l.isChrome && /CrKey/i.test(navigator.userAgent), l.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Mobile Safari|Opera Mini/i.test(navigator.userAgent), l.isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent), l.isAndroid = /Android/i.test(navigator.userAgent), l.isWindowsPhone = /Windows Phone/i.test(navigator.userAgent), l.isWin8App = /MSAppHost/i.test(navigator.userAgent), l.isWiiU = /WiiU/i.test(navigator.userAgent), l.isPS4 = /PlayStation 4/i.test(navigator.userAgent), l.hasLocalstorage = function() {
            try {
                return localStorage.setItem("clappr", "clappr"), localStorage.removeItem("clappr"), !0
            } catch (t) {
                return !1
            }
        }(), l.hasFlash = function() {
            try {
                return !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (t) {
                return !(!navigator.mimeTypes || void 0 === navigator.mimeTypes["application/x-shockwave-flash"] || !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
            }
        }(), l.name = g.name, l.version = g.version, l.userAgent = navigator.userAgent, l.data = c(), l.os = f(), l.viewport = h(), l.device = A(l.userAgent), void 0 !== window.orientation && function() {
            switch (window.orientation) {
                case -90:
                case 90:
                    l.viewport.orientation = "landscape";
                    break;
                default:
                    l.viewport.orientation = "portrait"
            }
        }(), e.default = l
    }, function(t, e, n) {
        t.exports = {
            default: n(143),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(73), n(53), t.exports = n(144)
    }, function(t, e, n) {
        var i = n(20),
            r = n(77);
        t.exports = n(7).getIterator = function(t) {
            var e = r(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return i(e.call(t))
        }
    }, function(t, e, n) {
        var i = n(45),
            r = n(12)("toStringTag"),
            o = "Arguments" == i(function() {
                return arguments
            }());
        t.exports = function(t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = [{
            name: "Chromium",
            group: "Chrome",
            identifier: "Chromium/([0-9.]*)"
        }, {
            name: "Chrome Mobile",
            group: "Chrome",
            identifier: "Chrome/([0-9.]*) Mobile",
            versionIdentifier: "Chrome/([0-9.]*)"
        }, {
            name: "Chrome",
            group: "Chrome",
            identifier: "Chrome/([0-9.]*)"
        }, {
            name: "Chrome for iOS",
            group: "Chrome",
            identifier: "CriOS/([0-9.]*)"
        }, {
            name: "Android Browser",
            group: "Chrome",
            identifier: "CrMo/([0-9.]*)"
        }, {
            name: "Firefox",
            group: "Firefox",
            identifier: "Firefox/([0-9.]*)"
        }, {
            name: "Opera Mini",
            group: "Opera",
            identifier: "Opera Mini/([0-9.]*)"
        }, {
            name: "Opera",
            group: "Opera",
            identifier: "Opera ([0-9.]*)"
        }, {
            name: "Opera",
            group: "Opera",
            identifier: "Opera/([0-9.]*)",
            versionIdentifier: "Version/([0-9.]*)"
        }, {
            name: "IEMobile",
            group: "Explorer",
            identifier: "IEMobile/([0-9.]*)"
        }, {
            name: "Internet Explorer",
            group: "Explorer",
            identifier: "MSIE ([a-zA-Z0-9.]*)"
        }, {
            name: "Internet Explorer",
            group: "Explorer",
            identifier: "Trident/([0-9.]*)",
            versionIdentifier: "rv:([0-9.]*)"
        }, {
            name: "Spartan",
            group: "Spartan",
            identifier: "Edge/([0-9.]*)",
            versionIdentifier: "Edge/([0-9.]*)"
        }, {
            name: "Safari",
            group: "Safari",
            identifier: "Safari/([0-9.]*)",
            versionIdentifier: "Version/([0-9.]*)"
        }], t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = [{
            name: "Windows 2000",
            group: "Windows",
            identifier: "Windows NT 5.0",
            version: "5.0"
        }, {
            name: "Windows XP",
            group: "Windows",
            identifier: "Windows NT 5.1",
            version: "5.1"
        }, {
            name: "Windows Vista",
            group: "Windows",
            identifier: "Windows NT 6.0",
            version: "6.0"
        }, {
            name: "Windows 7",
            group: "Windows",
            identifier: "Windows NT 6.1",
            version: "7.0"
        }, {
            name: "Windows 8",
            group: "Windows",
            identifier: "Windows NT 6.2",
            version: "8.0"
        }, {
            name: "Windows 8.1",
            group: "Windows",
            identifier: "Windows NT 6.3",
            version: "8.1"
        }, {
            name: "Windows 10",
            group: "Windows",
            identifier: "Windows NT 10.0",
            version: "10.0"
        }, {
            name: "Windows Phone",
            group: "Windows Phone",
            identifier: "Windows Phone ([0-9.]*)"
        }, {
            name: "Windows Phone",
            group: "Windows Phone",
            identifier: "Windows Phone OS ([0-9.]*)"
        }, {
            name: "Windows",
            group: "Windows",
            identifier: "Windows"
        }, {
            name: "Chrome OS",
            group: "Chrome OS",
            identifier: "CrOS"
        }, {
            name: "Android",
            group: "Android",
            identifier: "Android",
            versionIdentifier: "Android ([a-zA-Z0-9.-]*)"
        }, {
            name: "iPad",
            group: "iOS",
            identifier: "iPad",
            versionIdentifier: "OS ([0-9_]*)",
            versionSeparator: "[_|.]"
        }, {
            name: "iPod",
            group: "iOS",
            identifier: "iPod",
            versionIdentifier: "OS ([0-9_]*)",
            versionSeparator: "[_|.]"
        }, {
            name: "iPhone",
            group: "iOS",
            identifier: "iPhone OS",
            versionIdentifier: "OS ([0-9_]*)",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X High Sierra",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])13([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Sierra",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])12([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X El Capitan",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])11([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Yosemite",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])10([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Mavericks",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])9([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Mountain Lion",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])8([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Lion",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])7([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Snow Leopard",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])6([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Leopard",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])5([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Tiger",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])4([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Panther",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])3([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Jaguar",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])2([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Puma",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])1([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS X Cheetah",
            group: "Mac OS",
            identifier: "Mac OS X (10([_|.])0([0-9_.]*))",
            versionSeparator: "[_|.]"
        }, {
            name: "Mac OS",
            group: "Mac OS",
            identifier: "Mac OS"
        }, {
            name: "Ubuntu",
            group: "Linux",
            identifier: "Ubuntu",
            versionIdentifier: "Ubuntu/([0-9.]*)"
        }, {
            name: "Debian",
            group: "Linux",
            identifier: "Debian"
        }, {
            name: "Gentoo",
            group: "Linux",
            identifier: "Gentoo"
        }, {
            name: "Linux",
            group: "Linux",
            identifier: "Linux"
        }, {
            name: "BlackBerry",
            group: "BlackBerry",
            identifier: "BlackBerry"
        }], t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = e.mp4 = "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=";
        e.default = {
            mp4: i
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(0),
            o = (i = r) && i.__esModule ? i : {
                default: i
            },
            a = n(60);
        var s = "font-weight: bold; font-size: 13px;",
            l = "color: #ff8000;" + s,
            u = "color: #ff0000;" + s,
            c = 1,
            d = 3,
            f = ["color: #0000ff;font-weight: bold; font-size: 13px;", "color: #006600;font-weight: bold; font-size: 13px;", l, u, u],
            p = ["debug", "info", "warn", "error", "disabled"],
            h = function() {
                function t() {
                    var e = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
                    (0, o.default)(this, t), this.kibo = new a.Kibo, this.kibo.down(["ctrl shift d"], function() {
                        return e.onOff()
                    }), this.BLACKLIST = ["timeupdate", "playback:timeupdate", "playback:progress", "container:hover", "container:timeupdate", "container:progress"], this.level = n, this.offLevel = i
                }
                return t.prototype.debug = function(t) {
                    this.log(t, 0, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.info = function(t) {
                    this.log(t, c, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.warn = function(t) {
                    this.log(t, 2, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.error = function(t) {
                    this.log(t, 3, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.onOff = function() {
                    this.level === this.offLevel ? this.level = this.previousLevel : (this.previousLevel = this.level, this.level = this.offLevel), window.console && window.console.log && window.console.log("%c[Clappr.Log] set log level to " + p[this.level], l)
                }, t.prototype.level = function(t) {
                    this.level = t
                }, t.prototype.log = function(t, e, n) {
                    if (!(this.BLACKLIST.indexOf(n[0]) >= 0 || e < this.level)) {
                        n || (n = t, t = null);
                        var i = f[e],
                            r = "";
                        t && (r = "[" + t + "]"), window.console && window.console.log && window.console.log.apply(console, ["%c[" + p[e] + "]" + r, i].concat(n))
                    }
                }, t
            }();
        e.default = h, h.LEVEL_DEBUG = 0, h.LEVEL_INFO = c, h.LEVEL_WARN = 2, h.LEVEL_ERROR = 3, h.getInstance = function() {
            return void 0 === this._instance && (this._instance = new this, this._instance.previousLevel = this._instance.level, this._instance.level = this._instance.offLevel), this._instance
        }, h.setLevel = function(t) {
            this.getInstance().level = t
        }, h.debug = function() {
            this.getInstance().debug.apply(this.getInstance(), arguments)
        }, h.info = function() {
            this.getInstance().info.apply(this.getInstance(), arguments)
        }, h.warn = function() {
            this.getInstance().warn.apply(this.getInstance(), arguments)
        }, h.error = function() {
            this.getInstance().error.apply(this.getInstance(), arguments)
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
            this.element = t || window.document, this.initialize()
        };
        i.KEY_NAMES_BY_CODE = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "caps_lock",
                27: "esc",
                32: "space",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12"
            }, i.KEY_CODES_BY_NAME = {},
            function() {
                for (var t in i.KEY_NAMES_BY_CODE) Object.prototype.hasOwnProperty.call(i.KEY_NAMES_BY_CODE, t) && (i.KEY_CODES_BY_NAME[i.KEY_NAMES_BY_CODE[t]] = +t)
            }(), i.MODIFIERS = ["shift", "ctrl", "alt"], i.registerEvent = document.addEventListener ? function(t, e, n) {
                t.addEventListener(e, n, !1)
            } : document.attachEvent ? function(t, e, n) {
                t.attachEvent("on" + e, n)
            } : void 0, i.unregisterEvent = document.removeEventListener ? function(t, e, n) {
                t.removeEventListener(e, n, !1)
            } : document.detachEvent ? function(t, e, n) {
                t.detachEvent("on" + e, n)
            } : void 0, i.stringContains = function(t, e) {
                return -1 !== t.indexOf(e)
            }, i.neatString = function(t) {
                return t.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")
            }, i.capitalize = function(t) {
                return t.toLowerCase().replace(/^./, function(t) {
                    return t.toUpperCase()
                })
            }, i.isString = function(t) {
                return i.stringContains(Object.prototype.toString.call(t), "String")
            }, i.arrayIncludes = Array.prototype.indexOf ? function(t, e) {
                return -1 !== t.indexOf(e)
            } : function(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] === e) return !0;
                return !1
            }, i.extractModifiers = function(t) {
                var e, n;
                for (e = [], n = 0; n < i.MODIFIERS.length; n++) i.stringContains(t, i.MODIFIERS[n]) && e.push(i.MODIFIERS[n]);
                return e
            }, i.extractKey = function(t) {
                var e, n;
                for (e = i.neatString(t).split(" "), n = 0; n < e.length; n++)
                    if (!i.arrayIncludes(i.MODIFIERS, e[n])) return e[n]
            }, i.modifiersAndKey = function(t) {
                var e, n;
                return i.stringContains(t, "any") ? i.neatString(t).split(" ").slice(0, 2).join(" ") : (e = i.extractModifiers(t), (n = i.extractKey(t)) && !i.arrayIncludes(i.MODIFIERS, n) && e.push(n), e.join(" "))
            }, i.keyName = function(t) {
                return i.KEY_NAMES_BY_CODE[t + ""]
            }, i.keyCode = function(t) {
                return +i.KEY_CODES_BY_NAME[t]
            }, i.prototype.initialize = function() {
                var t, e = this;
                for (this.lastKeyCode = -1, this.lastModifiers = {}, t = 0; t < i.MODIFIERS.length; t++) this.lastModifiers[i.MODIFIERS[t]] = !1;
                this.keysDown = {
                    any: []
                }, this.keysUp = {
                    any: []
                }, this.downHandler = this.handler("down"), this.upHandler = this.handler("up"), i.registerEvent(this.element, "keydown", this.downHandler), i.registerEvent(this.element, "keyup", this.upHandler), i.registerEvent(window, "unload", function t() {
                    i.unregisterEvent(e.element, "keydown", e.downHandler), i.unregisterEvent(e.element, "keyup", e.upHandler), i.unregisterEvent(window, "unload", t)
                })
            }, i.prototype.handler = function(t) {
                var e = this;
                return function(n) {
                    var r, o, a;
                    for (n = n || window.event, e.lastKeyCode = n.keyCode, r = 0; r < i.MODIFIERS.length; r++) e.lastModifiers[i.MODIFIERS[r]] = n[i.MODIFIERS[r] + "Key"];
                    for (i.arrayIncludes(i.MODIFIERS, i.keyName(e.lastKeyCode)) && (e.lastModifiers[i.keyName(e.lastKeyCode)] = !0), o = e["keys" + i.capitalize(t)], r = 0; r < o.any.length; r++) !1 === o.any[r](n) && n.preventDefault && n.preventDefault();
                    if (o[a = e.lastModifiersAndKey()])
                        for (r = 0; r < o[a].length; r++) !1 === o[a][r](n) && n.preventDefault && n.preventDefault()
                }
            }, i.prototype.registerKeys = function(t, e, n) {
                var r, o, a = this["keys" + i.capitalize(t)];
                for (i.isString(e) && (e = [e]), r = 0; r < e.length; r++) o = e[r], a[o = i.modifiersAndKey(o + "")] ? a[o].push(n) : a[o] = [n];
                return this
            }, i.prototype.unregisterKeys = function(t, e, n) {
                var r, o, a, s = this["keys" + i.capitalize(t)];
                for (i.isString(e) && (e = [e]), r = 0; r < e.length; r++)
                    if (a = e[r], a = i.modifiersAndKey(a + ""), null === n) delete s[a];
                    else if (s[a])
                    for (o = 0; o < s[a].length; o++)
                        if (String(s[a][o]) === String(n)) {
                            s[a].splice(o, 1);
                            break
                        }
                return this
            }, i.prototype.off = function(t) {
                return this.unregisterKeys("down", t, null)
            }, i.prototype.delegate = function(t, e, n) {
                return null !== n || void 0 !== n ? this.registerKeys(t, e, n) : this.unregisterKeys(t, e, n)
            }, i.prototype.down = function(t, e) {
                return this.delegate("down", t, e)
            }, i.prototype.up = function(t, e) {
                return this.delegate("up", t, e)
            }, i.prototype.lastKey = function(t) {
                return t ? this.lastModifiers[t] : i.keyName(this.lastKeyCode)
            }, i.prototype.lastModifiersAndKey = function() {
                var t, e;
                for (t = [], e = 0; e < i.MODIFIERS.length; e++) this.lastKey(i.MODIFIERS[e]) && t.push(i.MODIFIERS[e]);
                return i.arrayIncludes(t, this.lastKey()) || t.push(this.lastKey()), t.join(" ")
            }, e.default = i, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(152),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = u(n(0)),
            r = u(n(1)),
            o = u(n(3)),
            a = u(n(2)),
            s = u(n(14)),
            l = u(n(78));

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var c = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this));
                return o.player = n, o._options = n.options, o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "loader",
                get: function() {
                    return this.player.loader
                }
            }]), e.prototype.create = function() {
                return this.options.loader = this.loader, this.core = new l.default(this.options), this.addCorePlugins(), this.core.createContainers(this.options), this.core
            }, e.prototype.addCorePlugins = function() {
                var t = this;
                return this.loader.corePlugins.forEach(function(e) {
                    var n = new e(t.core);
                    t.core.addPlugin(n), t.setupExternalInterface(n)
                }), this.core
            }, e.prototype.setupExternalInterface = function(t) {
                var e = t.getExternalInterface();
                for (var n in e) this.player[n] = e[n].bind(t), this.core[n] = e[n].bind(t)
            }, e
        }(s.default);
        e.default = c, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = _(n(11)),
            r = _(n(0)),
            o = _(n(1)),
            a = _(n(3)),
            s = _(n(2)),
            l = n(5),
            u = _(n(79)),
            c = _(n(4)),
            d = _(n(29)),
            f = _(n(23)),
            p = _(n(28)),
            h = _(n(154)),
            A = _(n(61)),
            g = _(n(40)),
            y = _(n(34)),
            m = _(n(19)),
            v = _(n(6));
        n(160);
        var b = _(n(162));

        function _(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var E = void 0,
            T = function(t) {
                function e(n) {
                    (0, r.default)(this, e);
                    var i = (0, o.default)(this, t.call(this, n));
                    return i.playerError = new y.default(n, i), i.configureDomRecycler(), i.playerInfo = g.default.getInstance(n.playerId), i.firstResize = !0, i.plugins = [], i.containers = [], i._boundFullscreenHandler = function() {
                        return i.handleFullscreenChange()
                    }, (0, v.default)(document).bind("fullscreenchange", i._boundFullscreenHandler), (0, v.default)(document).bind("MSFullscreenChange", i._boundFullscreenHandler), (0, v.default)(document).bind("mozfullscreenchange", i._boundFullscreenHandler), p.default.isMobile && (0, v.default)(window).bind("resize", function(t) {
                        i.handleWindowResize(t)
                    }), i
                }
                return (0, s.default)(e, t), (0, a.default)(e, [{
                    key: "events",
                    get: function() {
                        return {
                            webkitfullscreenchange: "handleFullscreenChange",
                            mousemove: "onMouseMove",
                            mouseleave: "onMouseLeave"
                        }
                    }
                }, {
                    key: "attributes",
                    get: function() {
                        return {
                            "data-player": "",
                            tabindex: 9999
                        }
                    }
                }, {
                    key: "isReady",
                    get: function() {
                        return !!this.ready
                    }
                }, {
                    key: "i18n",
                    get: function() {
                        return this.getPlugin("strings") || {
                            t: function(t) {
                                return t
                            }
                        }
                    }
                }, {
                    key: "mediaControl",
                    get: function() {
                        return this.getPlugin("media_control") || this.dummyMediaControl
                    }
                }, {
                    key: "dummyMediaControl",
                    get: function() {
                        return this._dummyMediaControl ? this._dummyMediaControl : (this._dummyMediaControl = new f.default(this), this._dummyMediaControl)
                    }
                }, {
                    key: "activeContainer",
                    get: function() {
                        return this._activeContainer
                    },
                    set: function(t) {
                        this._activeContainer = t, this.trigger(c.default.CORE_ACTIVE_CONTAINER_CHANGED, this._activeContainer)
                    }
                }, {
                    key: "activePlayback",
                    get: function() {
                        return this.activeContainer && this.activeContainer.playback
                    }
                }]), e.prototype.configureDomRecycler = function() {
                    var t = this.options && this.options.playback && this.options.playback.recycleVideo;
                    l.DomRecycler.configure({
                        recycleVideo: t
                    })
                }, e.prototype.createContainers = function(t) {
                    this.defer = v.default.Deferred(), this.defer.promise(this), this.containerFactory = new h.default(t, t.loader, this.i18n, this.playerError), this.prepareContainers()
                }, e.prototype.prepareContainers = function() {
                    var t = this;
                    this.containerFactory.createContainers().then(function(e) {
                        return t.setupContainers(e)
                    }).then(function(e) {
                        return t.resolveOnContainersReady(e)
                    })
                }, e.prototype.updateSize = function() {
                    l.Fullscreen.isFullscreen() ? this.setFullscreen() : this.setPlayerSize()
                }, e.prototype.setFullscreen = function() {
                    p.default.isiOS || (this.$el.addClass("fullscreen"), this.$el.removeAttr("style"), this.playerInfo.previousSize = {
                        width: this.options.width,
                        height: this.options.height
                    }, this.playerInfo.currentSize = {
                        width: (0, v.default)(window).width(),
                        height: (0, v.default)(window).height()
                    })
                }, e.prototype.setPlayerSize = function() {
                    this.$el.removeClass("fullscreen"), this.playerInfo.currentSize = this.playerInfo.previousSize, this.playerInfo.previousSize = {
                        width: (0, v.default)(window).width(),
                        height: (0, v.default)(window).height()
                    }, this.resize(this.playerInfo.currentSize)
                }, e.prototype.resize = function(t) {
                    (0, l.isNumber)(t.height) || (0, l.isNumber)(t.width) ? (this.el.style.height = t.height + "px", this.el.style.width = t.width + "px") : (this.el.style.height = "" + t.height, this.el.style.width = "" + t.width), this.playerInfo.previousSize = {
                        width: this.options.width,
                        height: this.options.height
                    }, this.options.width = t.width, this.options.height = t.height, this.playerInfo.currentSize = t, this.triggerResize(this.playerInfo.currentSize)
                }, e.prototype.enableResizeObserver = function() {
                    var t = this;
                    this.resizeObserverInterval = setInterval(function() {
                        t.triggerResize({
                            width: t.el.clientWidth,
                            height: t.el.clientHeight
                        })
                    }, 500)
                }, e.prototype.triggerResize = function(t) {
                    (this.firstResize || this.oldHeight !== t.height || this.oldWidth !== t.width) && (this.oldHeight = t.height, this.oldWidth = t.width, this.playerInfo.computedSize = t, this.firstResize = !1, A.default.trigger(this.options.playerId + ":" + c.default.PLAYER_RESIZE, t), this.trigger(c.default.CORE_RESIZE, t))
                }, e.prototype.disableResizeObserver = function() {
                    this.resizeObserverInterval && clearInterval(this.resizeObserverInterval)
                }, e.prototype.resolveOnContainersReady = function(t) {
                    var e = this;
                    v.default.when.apply(v.default, t).done(function() {
                        e.defer.resolve(e), e.ready = !0, e.trigger(c.default.CORE_READY)
                    })
                }, e.prototype.addPlugin = function(t) {
                    this.plugins.push(t)
                }, e.prototype.hasPlugin = function(t) {
                    return !!this.getPlugin(t)
                }, e.prototype.getPlugin = function(t) {
                    return this.plugins.filter(function(e) {
                        return e.name === t
                    })[0]
                }, e.prototype.load = function(t, e) {
                    this.options.mimeType = e, t = t && t.constructor === Array ? t : [t], this.options.sources = t, this.containers.forEach(function(t) {
                        return t.destroy()
                    }), this.containerFactory.options = v.default.extend(this.options, {
                        sources: t
                    }), this.prepareContainers()
                }, e.prototype.destroy = function() {
                    this.disableResizeObserver(), this.containers.forEach(function(t) {
                        return t.destroy()
                    }), this.plugins.forEach(function(t) {
                        return t.destroy()
                    }), this.$el.remove(), (0, v.default)(document).unbind("fullscreenchange", this._boundFullscreenHandler), (0, v.default)(document).unbind("MSFullscreenChange", this._boundFullscreenHandler), (0, v.default)(document).unbind("mozfullscreenchange", this._boundFullscreenHandler), this.stopListening()
                }, e.prototype.handleFullscreenChange = function() {
                    this.trigger(c.default.CORE_FULLSCREEN, l.Fullscreen.isFullscreen()), this.updateSize()
                }, e.prototype.handleWindowResize = function(t) {
                    var e = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
                    this._screenOrientation !== e && (this._screenOrientation = e, this.triggerResize({
                        width: this.el.clientWidth,
                        height: this.el.clientHeight
                    }), this.trigger(c.default.CORE_SCREEN_ORIENTATION_CHANGED, {
                        event: t,
                        orientation: this._screenOrientation
                    }))
                }, e.prototype.removeContainer = function(t) {
                    this.stopListening(t), this.containers = this.containers.filter(function(e) {
                        return e !== t
                    })
                }, e.prototype.setupContainer = function(t) {
                    this.listenTo(t, c.default.CONTAINER_DESTROYED, this.removeContainer), this.containers.push(t)
                }, e.prototype.setupContainers = function(t) {
                    return t.forEach(this.setupContainer.bind(this)), this.trigger(c.default.CORE_CONTAINERS_CREATED), this.renderContainers(), this.activeContainer = t[0], this.render(), this.appendToParent(), this.containers
                }, e.prototype.renderContainers = function() {
                    var t = this;
                    this.containers.forEach(function(e) {
                        return t.el.appendChild(e.render().el)
                    })
                }, e.prototype.createContainer = function(t, e) {
                    var n = this.containerFactory.createContainer(t, e);
                    return this.setupContainer(n), this.el.appendChild(n.render().el), n
                }, e.prototype.getCurrentContainer = function() {
                    return this.activeContainer
                }, e.prototype.getCurrentPlayback = function() {
                    return this.activePlayback
                }, e.prototype.getPlaybackType = function() {
                    return this.activeContainer && this.activeContainer.getPlaybackType()
                }, e.prototype.toggleFullscreen = function() {
                    l.Fullscreen.isFullscreen() ? (l.Fullscreen.cancelFullscreen(), !p.default.isiOS && this.$el.removeClass("fullscreen nocursor")) : (l.Fullscreen.requestFullscreen(p.default.isiOS ? this.activeContainer.el : this.el), !p.default.isiOS && this.$el.addClass("fullscreen"))
                }, e.prototype.onMouseMove = function(t) {
                    this.trigger(c.default.CORE_MOUSE_MOVE, t)
                }, e.prototype.onMouseLeave = function(t) {
                    this.trigger(c.default.CORE_MOUSE_LEAVE, t)
                }, e.prototype.configure = function(t) {
                    var e = this;
                    this._options = v.default.extend(this._options, t), this.configureDomRecycler();
                    var n = t.source || t.sources;
                    n && this.load(n, t.mimeType || this.options.mimeType), this.trigger(c.default.CORE_OPTIONS_CHANGE), this.containers.forEach(function(t) {
                        return t.configure(e.options)
                    })
                }, e.prototype.appendToParent = function() {
                    !(this.$el.parent() && this.$el.parent().length) && this.$el.appendTo(this.options.parentElement)
                }, e.prototype.render = function() {
                    E || (E = u.default.getStyleFor(b.default, {
                        baseUrl: this.options.baseUrl
                    })), (0, v.default)("head").append(E), this.options.width = this.options.width || this.$el.width(), this.options.height = this.options.height || this.$el.height();
                    var t = {
                        width: this.options.width,
                        height: this.options.height
                    };
                    return this.playerInfo.previousSize = this.playerInfo.currentSize = this.playerInfo.computedSize = t, this.updateSize(), this.previousSize = {
                        width: this.$el.width(),
                        height: this.$el.height()
                    }, this.enableResizeObserver(), this
                }, e
            }(d.default);
        e.default = T, (0, i.default)(T.prototype, m.default), t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(155),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = f(n(39)),
            r = f(n(0)),
            o = f(n(1)),
            a = f(n(3)),
            s = f(n(2)),
            l = f(n(14)),
            u = f(n(4)),
            c = f(n(81)),
            d = f(n(6));

        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var p = function(t) {
            function e(n, i, a, s) {
                (0, r.default)(this, e);
                var l = (0, o.default)(this, t.call(this, n));
                return l._i18n = a, l.loader = i, l.playerError = s, l
            }
            return (0, s.default)(e, t), (0, a.default)(e, [{
                key: "options",
                get: function() {
                    return this._options
                },
                set: function(t) {
                    this._options = t
                }
            }]), e.prototype.createContainers = function() {
                var t = this;
                return d.default.Deferred(function(e) {
                    e.resolve(t.options.sources.map(function(e) {
                        return t.createContainer(e)
                    }))
                })
            }, e.prototype.findPlaybackPlugin = function(t, e) {
                return this.loader.playbackPlugins.filter(function(n) {
                    return n.canPlay(t, e)
                })[0]
            }, e.prototype.createContainer = function(t) {
                var e = null,
                    n = this.options.mimeType;
                "object" === (void 0 === t ? "undefined" : (0, i.default)(t)) ? (e = t.source.toString(), t.mimeType && (n = t.mimeType)) : e = t.toString(), e.match(/^\/\//) && (e = window.location.protocol + e);
                var r = d.default.extend({}, this.options, {
                        src: e,
                        mimeType: n
                    }),
                    o = new(this.findPlaybackPlugin(e, n))(r, this._i18n, this.playerError);
                r = d.default.extend({}, r, {
                    playback: o
                });
                var a = new c.default(r, this._i18n, this.playerError),
                    s = d.default.Deferred();
                return s.promise(a), this.addContainerPlugins(a), this.listenToOnce(a, u.default.CONTAINER_READY, function() {
                    return s.resolve(a)
                }), a
            }, e.prototype.addContainerPlugins = function(t) {
                this.loader.containerPlugins.forEach(function(e) {
                    t.addPlugin(new e(t))
                })
            }, e
        }(l.default);
        e.default = p, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = p(n(11)),
            r = p(n(0)),
            o = p(n(1)),
            a = p(n(3)),
            s = p(n(2)),
            l = p(n(4)),
            u = p(n(29)),
            c = p(n(19)),
            d = n(5);
        n(157);
        var f = p(n(6));

        function p(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var h = function(t) {
            function e(n, i, a) {
                (0, r.default)(this, e);
                var s = (0, o.default)(this, t.call(this, n));
                return s._i18n = i, s.currentTime = 0, s.volume = 100, s.playback = n.playback, s.playerError = a, s.settings = f.default.extend({}, s.playback.settings), s.isReady = !1, s.mediaControlDisabled = !1, s.plugins = [s.playback], s.dblTapHandler = new d.DoubleEventHandler(500), s.clickTimer = null, s.clickDelay = 200, s.bindEvents(), s
            }
            return (0, s.default)(e, t), (0, a.default)(e, [{
                key: "name",
                get: function() {
                    return "Container"
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        class: "container",
                        "data-container": ""
                    }
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        click: "clicked",
                        dblclick: "dblClicked",
                        touchend: "dblTap",
                        contextmenu: "onContextMenu",
                        mouseenter: "mouseEnter",
                        mouseleave: "mouseLeave"
                    }
                }
            }, {
                key: "ended",
                get: function() {
                    return this.playback.ended
                }
            }, {
                key: "buffering",
                get: function() {
                    return this.playback.buffering
                }
            }, {
                key: "i18n",
                get: function() {
                    return this._i18n
                }
            }, {
                key: "hasClosedCaptionsTracks",
                get: function() {
                    return this.playback.hasClosedCaptionsTracks
                }
            }, {
                key: "closedCaptionsTracks",
                get: function() {
                    return this.playback.closedCaptionsTracks
                }
            }, {
                key: "closedCaptionsTrackId",
                get: function() {
                    return this.playback.closedCaptionsTrackId
                },
                set: function(t) {
                    this.playback.closedCaptionsTrackId = t
                }
            }]), e.prototype.bindEvents = function() {
                this.listenTo(this.playback, l.default.PLAYBACK_PROGRESS, this.onProgress), this.listenTo(this.playback, l.default.PLAYBACK_TIMEUPDATE, this.timeUpdated), this.listenTo(this.playback, l.default.PLAYBACK_READY, this.ready), this.listenTo(this.playback, l.default.PLAYBACK_BUFFERING, this.onBuffering), this.listenTo(this.playback, l.default.PLAYBACK_BUFFERFULL, this.bufferfull), this.listenTo(this.playback, l.default.PLAYBACK_SETTINGSUPDATE, this.settingsUpdate), this.listenTo(this.playback, l.default.PLAYBACK_LOADEDMETADATA, this.loadedMetadata), this.listenTo(this.playback, l.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate), this.listenTo(this.playback, l.default.PLAYBACK_BITRATE, this.updateBitrate), this.listenTo(this.playback, l.default.PLAYBACK_PLAYBACKSTATE, this.playbackStateChanged), this.listenTo(this.playback, l.default.PLAYBACK_DVR, this.playbackDvrStateChanged), this.listenTo(this.playback, l.default.PLAYBACK_MEDIACONTROL_DISABLE, this.disableMediaControl), this.listenTo(this.playback, l.default.PLAYBACK_MEDIACONTROL_ENABLE, this.enableMediaControl), this.listenTo(this.playback, l.default.PLAYBACK_SEEKED, this.onSeeked), this.listenTo(this.playback, l.default.PLAYBACK_ENDED, this.onEnded), this.listenTo(this.playback, l.default.PLAYBACK_PLAY, this.playing), this.listenTo(this.playback, l.default.PLAYBACK_PAUSE, this.paused), this.listenTo(this.playback, l.default.PLAYBACK_STOP, this.stopped), this.listenTo(this.playback, l.default.PLAYBACK_ERROR, this.error), this.listenTo(this.playback, l.default.PLAYBACK_SUBTITLE_AVAILABLE, this.subtitleAvailable), this.listenTo(this.playback, l.default.PLAYBACK_SUBTITLE_CHANGED, this.subtitleChanged)
            }, e.prototype.subtitleAvailable = function() {
                this.trigger(l.default.CONTAINER_SUBTITLE_AVAILABLE)
            }, e.prototype.subtitleChanged = function(t) {
                this.trigger(l.default.CONTAINER_SUBTITLE_CHANGED, t)
            }, e.prototype.playbackStateChanged = function(t) {
                this.trigger(l.default.CONTAINER_PLAYBACKSTATE, t)
            }, e.prototype.playbackDvrStateChanged = function(t) {
                this.settings = this.playback.settings, this.dvrInUse = t, this.trigger(l.default.CONTAINER_PLAYBACKDVRSTATECHANGED, t)
            }, e.prototype.updateBitrate = function(t) {
                this.trigger(l.default.CONTAINER_BITRATE, t)
            }, e.prototype.statsReport = function(t) {
                this.trigger(l.default.CONTAINER_STATS_REPORT, t)
            }, e.prototype.getPlaybackType = function() {
                return this.playback.getPlaybackType()
            }, e.prototype.isDvrEnabled = function() {
                return !!this.playback.dvrEnabled
            }, e.prototype.isDvrInUse = function() {
                return !!this.dvrInUse
            }, e.prototype.destroy = function() {
                this.trigger(l.default.CONTAINER_DESTROYED, this, this.name), this.stopListening(), this.plugins.forEach(function(t) {
                    return t.destroy()
                }), this.$el.remove()
            }, e.prototype.setStyle = function(t) {
                this.$el.css(t)
            }, e.prototype.animate = function(t, e) {
                return this.$el.animate(t, e).promise()
            }, e.prototype.ready = function() {
                this.isReady = !0, this.trigger(l.default.CONTAINER_READY, this.name)
            }, e.prototype.isPlaying = function() {
                return this.playback.isPlaying()
            }, e.prototype.getStartTimeOffset = function() {
                return this.playback.getStartTimeOffset()
            }, e.prototype.getCurrentTime = function() {
                return this.currentTime
            }, e.prototype.getDuration = function() {
                return this.playback.getDuration()
            }, e.prototype.error = function(t) {
                this.isReady || this.ready(), this.trigger(l.default.CONTAINER_ERROR, t, this.name)
            }, e.prototype.loadedMetadata = function(t) {
                this.trigger(l.default.CONTAINER_LOADEDMETADATA, t)
            }, e.prototype.timeUpdated = function(t) {
                this.currentTime = t.current, this.trigger(l.default.CONTAINER_TIMEUPDATE, t, this.name)
            }, e.prototype.onProgress = function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this.trigger.apply(this, [l.default.CONTAINER_PROGRESS].concat(e, [this.name]))
            }, e.prototype.playing = function() {
                this.trigger(l.default.CONTAINER_PLAY, this.name)
            }, e.prototype.paused = function() {
                this.trigger(l.default.CONTAINER_PAUSE, this.name)
            }, e.prototype.play = function() {
                this.playback.play()
            }, e.prototype.stop = function() {
                this.playback.stop(), this.currentTime = 0
            }, e.prototype.pause = function() {
                this.playback.pause()
            }, e.prototype.onEnded = function() {
                this.trigger(l.default.CONTAINER_ENDED, this, this.name), this.currentTime = 0
            }, e.prototype.stopped = function() {
                this.trigger(l.default.CONTAINER_STOP)
            }, e.prototype.clicked = function() {
                var t = this;
                this.options.chromeless && !this.options.allowUserInteraction || (this.clickTimer = setTimeout(function() {
                    t.clickTimer && t.trigger(l.default.CONTAINER_CLICK, t, t.name)
                }, this.clickDelay))
            }, e.prototype.cancelClicked = function() {
                clearTimeout(this.clickTimer), this.clickTimer = null
            }, e.prototype.dblClicked = function() {
                this.options.chromeless && !this.options.allowUserInteraction || (this.cancelClicked(), this.trigger(l.default.CONTAINER_DBLCLICK, this, this.name))
            }, e.prototype.dblTap = function(t) {
                var e = this;
                this.options.chromeless && !this.options.allowUserInteraction || this.dblTapHandler.handle(t, function() {
                    e.cancelClicked(), e.trigger(l.default.CONTAINER_DBLCLICK, e, e.name)
                })
            }, e.prototype.onContextMenu = function(t) {
                this.options.chromeless && !this.options.allowUserInteraction || this.trigger(l.default.CONTAINER_CONTEXTMENU, t, this.name)
            }, e.prototype.seek = function(t) {
                this.trigger(l.default.CONTAINER_SEEK, t, this.name), this.playback.seek(t)
            }, e.prototype.onSeeked = function() {
                this.trigger(l.default.CONTAINER_SEEKED, this.name)
            }, e.prototype.seekPercentage = function(t) {
                var e = this.getDuration();
                if (t >= 0 && t <= 100) {
                    var n = e * (t / 100);
                    this.seek(n)
                }
            }, e.prototype.setVolume = function(t) {
                this.volume = parseInt(t, 10), this.trigger(l.default.CONTAINER_VOLUME, t, this.name), this.playback.volume(t)
            }, e.prototype.fullscreen = function() {
                this.trigger(l.default.CONTAINER_FULLSCREEN, this.name)
            }, e.prototype.onBuffering = function() {
                this.trigger(l.default.CONTAINER_STATE_BUFFERING, this.name)
            }, e.prototype.bufferfull = function() {
                this.trigger(l.default.CONTAINER_STATE_BUFFERFULL, this.name)
            }, e.prototype.addPlugin = function(t) {
                this.plugins.push(t)
            }, e.prototype.hasPlugin = function(t) {
                return !!this.getPlugin(t)
            }, e.prototype.getPlugin = function(t) {
                return this.plugins.filter(function(e) {
                    return e.name === t
                })[0]
            }, e.prototype.mouseEnter = function() {
                this.options.chromeless && !this.options.allowUserInteraction || this.trigger(l.default.CONTAINER_MOUSE_ENTER)
            }, e.prototype.mouseLeave = function() {
                this.options.chromeless && !this.options.allowUserInteraction || this.trigger(l.default.CONTAINER_MOUSE_LEAVE)
            }, e.prototype.settingsUpdate = function() {
                this.settings = this.playback.settings, this.trigger(l.default.CONTAINER_SETTINGSUPDATE)
            }, e.prototype.highDefinitionUpdate = function(t) {
                this.trigger(l.default.CONTAINER_HIGHDEFINITIONUPDATE, t)
            }, e.prototype.isHighDefinitionInUse = function() {
                return this.playback.isHighDefinitionInUse()
            }, e.prototype.disableMediaControl = function() {
                this.mediaControlDisabled || (this.mediaControlDisabled = !0, this.trigger(l.default.CONTAINER_MEDIACONTROL_DISABLE))
            }, e.prototype.enableMediaControl = function() {
                this.mediaControlDisabled && (this.mediaControlDisabled = !1, this.trigger(l.default.CONTAINER_MEDIACONTROL_ENABLE))
            }, e.prototype.updateStyle = function() {
                !this.options.chromeless || this.options.allowUserInteraction ? this.$el.removeClass("chromeless") : this.$el.addClass("chromeless")
            }, e.prototype.configure = function(t) {
                this._options = f.default.extend(this._options, t), this.updateStyle(), this.playback.configure(this.options), this.trigger(l.default.CONTAINER_OPTIONS_CHANGE)
            }, e.prototype.render = function() {
                return this.$el.append(this.playback.render().el), this.updateStyle(), this
            }, e
        }(u.default);
        e.default = h, (0, i.default)(h.prototype, c.default), t.exports = e.default
    }, function(t, e, n) {
        var i = n(158);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".container[data-container] {\n  position: absolute;\n  background-color: black;\n  height: 100%;\n  width: 100%; }\n  .container[data-container] .chromeless {\n    cursor: default; }\n\n[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled {\n  cursor: pointer; }\n", ""])
    }, function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host,
                i = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                var r, o = e.trim().replace(/^"(.*)"$/, function(t, e) {
                    return e
                }).replace(/^'(.*)'$/, function(t, e) {
                    return e
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? t : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
            })
        }
    }, function(t, e, n) {
        var i = n(161);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, '[data-player] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  overflow: hidden;\n  font-size: 100%;\n  font-family: "Roboto", "Open Sans", Arial, sans-serif;\n  text-shadow: 0 0 0;\n  box-sizing: border-box; }\n  [data-player] div, [data-player] span, [data-player] applet, [data-player] object, [data-player] iframe,\n  [data-player] h1, [data-player] h2, [data-player] h3, [data-player] h4, [data-player] h5, [data-player] h6, [data-player] p, [data-player] blockquote, [data-player] pre,\n  [data-player] a, [data-player] abbr, [data-player] acronym, [data-player] address, [data-player] big, [data-player] cite, [data-player] code,\n  [data-player] del, [data-player] dfn, [data-player] em, [data-player] img, [data-player] ins, [data-player] kbd, [data-player] q, [data-player] s, [data-player] samp,\n  [data-player] small, [data-player] strike, [data-player] strong, [data-player] sub, [data-player] sup, [data-player] tt, [data-player] var,\n  [data-player] b, [data-player] u, [data-player] i, [data-player] center,\n  [data-player] dl, [data-player] dt, [data-player] dd, [data-player] ol, [data-player] ul, [data-player] li,\n  [data-player] fieldset, [data-player] form, [data-player] label, [data-player] legend,\n  [data-player] table, [data-player] caption, [data-player] tbody, [data-player] tfoot, [data-player] thead, [data-player] tr, [data-player] th, [data-player] td,\n  [data-player] article, [data-player] aside, [data-player] canvas, [data-player] details, [data-player] embed,\n  [data-player] figure, [data-player] figcaption, [data-player] footer, [data-player] header, [data-player] hgroup,\n  [data-player] menu, [data-player] nav, [data-player] output, [data-player] ruby, [data-player] section, [data-player] summary,\n  [data-player] time, [data-player] mark, [data-player] audio, [data-player] video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline; }\n  [data-player] table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  [data-player] caption, [data-player] th, [data-player] td {\n    text-align: left;\n    font-weight: normal;\n    vertical-align: middle; }\n  [data-player] q, [data-player] blockquote {\n    quotes: none; }\n    [data-player] q:before, [data-player] q:after, [data-player] blockquote:before, [data-player] blockquote:after {\n      content: "";\n      content: none; }\n  [data-player] a img {\n    border: none; }\n  [data-player]:focus {\n    outline: 0; }\n  [data-player] * {\n    max-width: none;\n    box-sizing: inherit;\n    float: none; }\n  [data-player] div {\n    display: block; }\n  [data-player].fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    left: 0; }\n  [data-player].nocursor {\n    cursor: none; }\n\n.clappr-style {\n  display: none !important; }\n', ""])
    }, function(t, e, n) {
        var i = n(82);
        (t.exports = n(8)(!1)).push([t.i, '@font-face {\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto"), local("Roboto-Regular"), url(' + i(n(163)) + ') format("truetype");\n}\n', ""])
    }, function(t, e) {
        t.exports = ""
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = N(n(76)),
            r = N(n(84)),
            o = N(n(0)),
            a = N(n(1)),
            s = N(n(2)),
            l = N(n(14)),
            u = N(n(40)),
            c = N(n(62)),
            d = N(n(24)),
            f = N(n(86)),
            p = N(n(24)),
            h = N(n(24)),
            A = N(n(87)),
            g = N(n(88)),
            y = N(n(89)),
            m = N(n(187)),
            v = N(n(90)),
            b = N(n(91)),
            _ = N(n(197)),
            E = N(n(92)),
            T = N(n(93)),
            C = N(n(96)),
            k = N(n(216)),
            O = N(n(97)),
            w = N(n(223)),
            S = N(n(228)),
            x = N(n(229)),
            I = N(n(230)),
            P = N(n(231));

        function N(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var R = function(t) {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !0;//改：修正错误
                (0, o.default)(this, e);
                var l = (0, a.default)(this, t.call(this));
                return l.playerId = i, l.playbackPlugins = [], s || (l.playbackPlugins = [].concat((0, r.default)(l.playbackPlugins), [h.default])), l.playbackPlugins = [].concat((0, r.default)(l.playbackPlugins), [c.default, f.default]), s || (l.playbackPlugins = [].concat((0, r.default)(l.playbackPlugins), [d.default, p.default])), l.playbackPlugins = [].concat((0, r.default)(l.playbackPlugins), [A.default, g.default]), l.containerPlugins = [y.default, v.default, b.default, m.default, _.default, E.default], l.corePlugins = [T.default, C.default, k.default, O.default, w.default, S.default, x.default, P.default, I.default], Array.isArray(n) || l.validateExternalPluginsType(n), l.addExternalPlugins(n), l
            }
            return (0, s.default)(e, t), e.prototype.groupPluginsByType = function(t) {
                return Array.isArray(t) && (t = t.reduce(function(t, e) {
                    return t[e.type] || (t[e.type] = []), t[e.type].push(e), t
                }, {})), t
            }, e.prototype.removeDups = function(t) {
                var e = t.reduceRight(function(t, e) {
                        return t[e.prototype.name] && delete t[e.prototype.name], t[e.prototype.name] = e, t
                    }, (0, i.default)(null)),
                    n = [];
                for (var r in e) n.unshift(e[r]);
                return n
            }, e.prototype.addExternalPlugins = function(t) {
                (t = this.groupPluginsByType(t)).playback && (this.playbackPlugins = this.removeDups(t.playback.concat(this.playbackPlugins))), t.container && (this.containerPlugins = this.removeDups(t.container.concat(this.containerPlugins))), t.core && (this.corePlugins = this.removeDups(t.core.concat(this.corePlugins))), u.default.getInstance(this.playerId).playbackPlugins = this.playbackPlugins
            }, e.prototype.validateExternalPluginsType = function(t) {
                ["playback", "container", "core"].forEach(function(e) {
                    (t[e] || []).forEach(function(t) {
                        var n = "external " + t.type + " plugin on " + e + " array";
                        if (t.type !== e) throw new ReferenceError(n)
                    })
                })
            }, e
        }(l.default);
        e.default = R, t.exports = e.default
    }, function(t, e, n) {
        n(53), n(166), t.exports = n(7).Array.from
    }, function(t, e, n) {
        "use strict";
        var i = n(43),
            r = n(15),
            o = n(38),
            a = n(167),
            s = n(168),
            l = n(69),
            u = n(169),
            c = n(77);
        r(r.S + r.F * !n(170)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, n, r, d, f = o(t),
                    p = "function" == typeof this ? this : Array,
                    h = arguments.length,
                    A = h > 1 ? arguments[1] : void 0,
                    g = void 0 !== A,
                    y = 0,
                    m = c(f);
                if (g && (A = i(A, h > 2 ? arguments[2] : void 0, 2)), null == m || p == Array && s(m))
                    for (n = new p(e = l(f.length)); e > y; y++) u(n, y, g ? A(f[y], y) : f[y]);
                else
                    for (d = m.call(f), n = new p; !(r = d.next()).done; y++) u(n, y, g ? a(d, A, [r.value, y], !0) : r.value);
                return n.length = y, n
            }
        })
    }, function(t, e, n) {
        var i = n(20);
        t.exports = function(t, e, n, r) {
            try {
                return r ? e(i(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && i(o.call(t)), e
            }
        }
    }, function(t, e, n) {
        var i = n(32),
            r = n(12)("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (i.Array === t || o[r] === t)
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(17),
            r = n(31);
        t.exports = function(t, e, n) {
            e in t ? i.f(t, e, r(0, n)) : t[e] = n
        }
    }, function(t, e, n) {
        var i = n(12)("iterator"),
            r = !1;
        try {
            var o = [7][i]();
            o.return = function() {
                r = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !r) return !1;
            var n = !1;
            try {
                var o = [7],
                    a = o[i]();
                a.next = function() {
                    return {
                        done: n = !0
                    }
                }, o[i] = function() {
                    return a
                }, t(o)
            } catch (t) {}
            return n
        }
    }, function(t, e, n) {
        "use strict";
        (function(i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = b(n(85)),
                o = b(n(0)),
                a = b(n(1)),
                s = b(n(3)),
                l = b(n(2)),
                u = b(n(84)),
                c = b(n(52)),
                d = n(5),
                f = b(n(13)),
                p = b(n(28)),
                h = b(n(34)),
                A = b(n(4)),
                g = b(n(33)),
                y = b(n(6)),
                m = b(n(10)),
                v = b(n(172));

            function b(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            n(173);
            var _ = {
                mp4: ["avc1.42E01E", "avc1.58A01E", "avc1.4D401E", "avc1.64001E", "mp4v.20.8", "mp4v.20.240", "mp4a.40.2"].map(function(t) {
                    return 'video/mp4; codecs="' + t + ', mp4a.40.2"'
                }),
                ogg: ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
                "3gpp": ['video/3gpp; codecs="mp4v.20.8, samr"'],
                webm: ['video/webm; codecs="vp8, vorbis"'],
                mkv: ['video/x-matroska; codecs="theora, vorbis"'],
                m3u8: ["application/x-mpegurl"]
            };
            _.ogv = _.ogg, _["3gp"] = _["3gpp"];
            var E = {
                    wav: ["audio/wav"],
                    mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
                    aac: ['audio/mp4;codecs="mp4a.40.5"'],
                    oga: ["audio/ogg"]
                },
                T = (0, c.default)(E).reduce(function(t, e) {
                    return [].concat((0, u.default)(t), (0, u.default)(E[e]))
                }, []),
                C = {
                    code: "unknown",
                    message: "unknown"
                },
                k = function(t) {
                    function e() {
                        (0, o.default)(this, e);
                        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        var s = (0, a.default)(this, t.call.apply(t, [this].concat(i)));
                        s._destroyed = !1, s._loadStarted = !1, s._isBuffering = !1, s._playheadMoving = !1, s._playheadMovingTimer = null, s._stopped = !1, s._ccTrackId = -1, s._setupSrc(s.options.src), s.options.playback || (s.options.playback = s.options || {}), s.options.playback.disableContextMenu = s.options.playback.disableContextMenu || s.options.disableVideoTagContextMenu;
                        var l = s.options.playback,
                            u = l.preload || (p.default.isSafari ? "auto" : s.options.preload),
                            c = void 0;
                        return s.options.poster && ("string" == typeof s.options.poster ? c = s.options.poster : "string" == typeof s.options.poster.url && (c = s.options.poster.url)), y.default.extend(s.el, {
                            muted: s.options.mute,
                            defaultMuted: s.options.mute,
                            loop: s.options.loop,
                            poster: c,
                            preload: u || "metadata",
                            controls: (l.controls || s.options.useVideoTagDefaultControls) && "controls",
                            crossOrigin: l.crossOrigin,
                            "x-webkit-playsinline": l.playInline
                        }), l.playInline && s.$el.attr({
                            playsinline: "playsinline"
                        }), l.crossOrigin && s.$el.attr({
                            crossorigin: l.crossOrigin
                        }), s.settings = {
                            default: ["seekbar"]
                        }, s.settings.left = ["playpause", "position", "duration"], s.settings.right = ["fullscreen", "volume", "hd-indicator"], l.externalTracks && s._setupExternalTracks(l.externalTracks), s.options.autoPlay && s.attemptAutoPlay(), s
                    }
                    return (0, l.default)(e, t), (0, s.default)(e, [{
                        key: "name",
                        get: function() {
                            return "html5_video"
                        }
                    }, {
                        key: "tagName",
                        get: function() {
                            return this.isAudioOnly ? "audio" : "video"
                        }
                    }, {
                        key: "isAudioOnly",
                        get: function() {
                            var t = this.options.src,
                                n = e._mimeTypesForUrl(t, E, this.options.mimeType);
                            return this.options.playback && this.options.playback.audioOnly || this.options.audioOnly || T.indexOf(n[0]) >= 0
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            return {
                                "data-html5-video": ""
                            }
                        }
                    }, {
                        key: "events",
                        get: function() {
                            return {
                                canplay: "_onCanPlay",
                                canplaythrough: "_handleBufferingEvents",
                                durationchange: "_onDurationChange",
                                ended: "_onEnded",
                                error: "_onError",
                                loadeddata: "_onLoadedData",
                                loadedmetadata: "_onLoadedMetadata",
                                pause: "_onPause",
                                playing: "_onPlaying",
                                progress: "_onProgress",
                                seeking: "_onSeeking",
                                seeked: "_onSeeked",
                                stalled: "_handleBufferingEvents",
                                timeupdate: "_onTimeUpdate",
                                waiting: "_onWaiting"
                            }
                        }
                    }, {
                        key: "ended",
                        get: function() {
                            return this.el.ended
                        }
                    }, {
                        key: "buffering",
                        get: function() {
                            return this._isBuffering
                        }
                    }]), e.prototype.configure = function(e) {
                        t.prototype.configure.call(this, e), this.el.loop = !!e.loop
                    }, e.prototype.attemptAutoPlay = function() {
                        var t = this;
                        this.canAutoPlay(function(e, n) {
                            n && g.default.warn(t.name, "autoplay error.", {
                                result: e,
                                error: n
                            }), e && i.nextTick(function() {
                                return !t._destroyed && t.play()
                            })
                        })
                    }, e.prototype.canAutoPlay = function(t) {
                        this.options.disableCanAutoPlay && t(!0, null);
                        var e = {
                            timeout: this.options.autoPlayTimeout || 500,
                            inline: this.options.playback.playInline || !1,
                            muted: this.options.mute || !1
                        };
                        p.default.isMobile && d.DomRecycler.options.recycleVideo && (e.element = this.el), (0, d.canAutoPlayMedia)(t, e)
                    }, e.prototype._setupExternalTracks = function(t) {
                        this._externalTracks = t.map(function(t) {
                            return {
                                kind: t.kind || "subtitles",
                                label: t.label,
                                lang: t.lang,
                                src: t.src
                            }
                        })
                    }, e.prototype._setupSrc = function(t) {
                        this.el.src !== t && (this._ccIsSetup = !1, this.el.src = t, this._src = this.el.src)
                    }, e.prototype._onLoadedMetadata = function(t) {
                        this._handleBufferingEvents(), this.trigger(A.default.PLAYBACK_LOADEDMETADATA, {
                            duration: t.target.duration,
                            data: t
                        }), this._updateSettings();
                        var e = void 0 === this._options.autoSeekFromUrl || this._options.autoSeekFromUrl;
                        this.getPlaybackType() !== f.default.LIVE && e && this._checkInitialSeek()
                    }, e.prototype._onDurationChange = function() {
                        this._updateSettings(), this._onTimeUpdate(), this._onProgress()
                    }, e.prototype._updateSettings = function() {
                        this.getPlaybackType() === f.default.VOD || this.getPlaybackType() === f.default.AOD ? this.settings.left = ["playpause", "position", "duration"] : this.settings.left = ["playstop"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(A.default.PLAYBACK_SETTINGSUPDATE)
                    }, e.prototype.isSeekEnabled = function() {
                        return isFinite(this.getDuration())
                    }, e.prototype.getPlaybackType = function() {
                        var t = "audio" === this.tagName ? f.default.AOD : f.default.VOD;
                        return [0, void 0, 1 / 0].indexOf(this.el.duration) >= 0 ? f.default.LIVE : t
                    }, e.prototype.isHighDefinitionInUse = function() {
                        return !1
                    }, e.prototype.consent = function() {
                        this.isPlaying() || (t.prototype.consent.call(this), this.el.load())
                    }, e.prototype.play = function() {
                        this.trigger(A.default.PLAYBACK_PLAY_INTENT), this._stopped = !1, this._setupSrc(this._src), this._handleBufferingEvents();
                        var t = this.el.play();
                        t && t.catch && t.catch(function() {})
                    }, e.prototype.pause = function() {
                        this.el.pause()
                    }, e.prototype.stop = function() {
                        this.pause(), this._stopped = !0, this.el.removeAttribute("src"), this.el.load(), this._stopPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(A.default.PLAYBACK_STOP)
                    }, e.prototype.volume = function(t) {
                        0 === t ? (this.$el.attr({
                            muted: "true"
                        }), this.el.muted = !0) : (this.$el.attr({
                            muted: null
                        }), this.el.muted = !1, this.el.volume = t / 100)
                    }, e.prototype.mute = function() {
                        this.el.muted = !0
                    }, e.prototype.unmute = function() {
                        this.el.muted = !1
                    }, e.prototype.isMuted = function() {
                        return !0 === this.el.muted || 0 === this.el.volume
                    }, e.prototype.isPlaying = function() {
                        return !this.el.paused && !this.el.ended
                    }, e.prototype._startPlayheadMovingChecks = function() {
                        null === this._playheadMovingTimer && (this._playheadMovingTimeOnCheck = null, this._determineIfPlayheadMoving(), this._playheadMovingTimer = setInterval(this._determineIfPlayheadMoving.bind(this), 500))
                    }, e.prototype._stopPlayheadMovingChecks = function() {
                        null !== this._playheadMovingTimer && (clearInterval(this._playheadMovingTimer), this._playheadMovingTimer = null, this._playheadMoving = !1)
                    }, e.prototype._determineIfPlayheadMoving = function() {
                        var t = this._playheadMovingTimeOnCheck,
                            e = this.el.currentTime;
                        this._playheadMoving = t !== e, this._playheadMovingTimeOnCheck = e, this._handleBufferingEvents()
                    }, e.prototype._onWaiting = function() {
                        this._loadStarted = !0, this._handleBufferingEvents()
                    }, e.prototype._onLoadedData = function() {
                        this._loadStarted = !0, this._handleBufferingEvents()
                    }, e.prototype._onCanPlay = function() {
                        this._handleBufferingEvents()
                    }, e.prototype._onPlaying = function() {
                        this._checkForClosedCaptions(), this._startPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(A.default.PLAYBACK_PLAY)
                    }, e.prototype._onPause = function() {
                        this._stopPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(A.default.PLAYBACK_PAUSE)
                    }, e.prototype._onSeeking = function() {
                        this._handleBufferingEvents(), this.trigger(A.default.PLAYBACK_SEEK)
                    }, e.prototype._onSeeked = function() {
                        this._handleBufferingEvents(), this.trigger(A.default.PLAYBACK_SEEKED)
                    }, e.prototype._onEnded = function() {
                        this._handleBufferingEvents(), this.trigger(A.default.PLAYBACK_ENDED, this.name)
                    }, e.prototype._handleBufferingEvents = function() {
                        var t = !this.el.ended && !this.el.paused,
                            e = this._loadStarted && !this.el.ended && !this._stopped && (t && !this._playheadMoving || this.el.readyState < this.el.HAVE_FUTURE_DATA);
                        this._isBuffering !== e && (this._isBuffering = e, e ? this.trigger(A.default.PLAYBACK_BUFFERING, this.name) : this.trigger(A.default.PLAYBACK_BUFFERFULL, this.name))
                    }, e.prototype._onError = function() {
                        var t = this.el.error || C,
                            e = t.code,
                            n = t.message,
                            i = e === C.code,
                            r = this.createError({
                                code: e,
                                description: n,
                                raw: this.el.error,
                                level: i ? h.default.Levels.WARN : h.default.Levels.FATAL
                            });
                        i ? g.default.warn(this.name, "HTML5 unknown error: ", r) : this.trigger(A.default.PLAYBACK_ERROR, r)
                    }, e.prototype.destroy = function() {
                        this._destroyed = !0, this.handleTextTrackChange && this.el.textTracks.removeEventListener("change", this.handleTextTrackChange), t.prototype.destroy.call(this), this.el.removeAttribute("src"), this.el.load(), this._src = null, d.DomRecycler.garbage(this.$el)
                    }, e.prototype.seek = function(t) {
                        this.el.currentTime = t
                    }, e.prototype.seekPercentage = function(t) {
                        var e = this.el.duration * (t / 100);
                        this.seek(e)
                    }, e.prototype._checkInitialSeek = function() {
                        var t = (0, d.seekStringToSeconds)();
                        0 !== t && this.seek(t)
                    }, e.prototype.getCurrentTime = function() {
                        return this.el.currentTime
                    }, e.prototype.getDuration = function() {
                        return this.el.duration
                    }, e.prototype._onTimeUpdate = function() {
                        this.getPlaybackType() === f.default.LIVE ? this.trigger(A.default.PLAYBACK_TIMEUPDATE, {
                            current: 1,
                            total: 1
                        }, this.name) : this.trigger(A.default.PLAYBACK_TIMEUPDATE, {
                            current: this.el.currentTime,
                            total: this.el.duration
                        }, this.name)
                    }, e.prototype._onProgress = function() {
                        if (this.el.buffered.length) {
                            for (var t = [], e = 0, n = 0; n < this.el.buffered.length; n++) t = [].concat((0, u.default)(t), [{
                                start: this.el.buffered.start(n),
                                end: this.el.buffered.end(n)
                            }]), this.el.currentTime >= t[n].start && this.el.currentTime <= t[n].end && (e = n);
                            var i = {
                                start: t[e].start,
                                current: t[e].end,
                                total: this.el.duration
                            };
                            this.trigger(A.default.PLAYBACK_PROGRESS, i, t)
                        }
                    }, e.prototype._typeFor = function(t) {
                        var n = e._mimeTypesForUrl(t, _, this.options.mimeType);
                        return 0 === n.length && (n = e._mimeTypesForUrl(t, E, this.options.mimeType)), (n[0] || "").split(";")[0]
                    }, e.prototype._ready = function() {
                        this._isReadyState || (this._isReadyState = !0, this.trigger(A.default.PLAYBACK_READY, this.name))
                    }, e.prototype._checkForClosedCaptions = function() {
                        if (this.isHTML5Video && !this._ccIsSetup) {
                            if (this.hasClosedCaptionsTracks) {
                                this.trigger(A.default.PLAYBACK_SUBTITLE_AVAILABLE);
                                var t = this.closedCaptionsTrackId;
                                this.closedCaptionsTrackId = t, this.handleTextTrackChange = this._handleTextTrackChange.bind(this), this.el.textTracks.addEventListener("change", this.handleTextTrackChange)
                            }
                            this._ccIsSetup = !0
                        }
                    }, e.prototype._handleTextTrackChange = function() {
                        var t = this.closedCaptionsTracks.find(function(t) {
                            return "showing" === t.track.mode
                        }) || {
                            id: -1
                        };
                        this._ccTrackId !== t.id && (this._ccTrackId = t.id, this.trigger(A.default.PLAYBACK_SUBTITLE_CHANGED, {
                            id: t.id
                        }))
                    }, e.prototype.render = function() {
                        return this.options.playback.disableContextMenu && this.$el.on("contextmenu", function() {
                            return !1
                        }), this._externalTracks && this._externalTracks.length > 0 && this.$el.html(this.template({
                            tracks: this._externalTracks
                        })), this._ready(), this
                    }, (0, s.default)(e, [{
                        key: "isReady",
                        get: function() {
                            return this._isReadyState
                        }
                    }, {
                        key: "isHTML5Video",
                        get: function() {
                            return this.name === e.prototype.name
                        }
                    }, {
                        key: "closedCaptionsTracks",
                        get: function() {
                            var t = 0;
                            return (this.el.textTracks ? (0, r.default)(this.el.textTracks) : []).filter(function(t) {
                                return "subtitles" === t.kind || "captions" === t.kind
                            }).map(function(e) {
                                return {
                                    id: t++,
                                    name: e.label,
                                    track: e
                                }
                            })
                        }
                    }, {
                        key: "closedCaptionsTrackId",
                        get: function() {
                            return this._ccTrackId
                        },
                        set: function(t) {
                            if ((0, d.isNumber)(t)) {
                                var e = this.closedCaptionsTracks,
                                    n = void 0;
                                if (-1 !== t) {
                                    if (!(n = e.find(function(e) {
                                            return e.id === t
                                        }))) return;
                                    if ("showing" === n.track.mode) return
                                }
                                e.filter(function(t) {
                                    return "hidden" !== t.track.mode
                                }).forEach(function(t) {
                                    return t.track.mode = "hidden"
                                }), n && (n.track.mode = "showing"), this._ccTrackId = t, this.trigger(A.default.PLAYBACK_SUBTITLE_CHANGED, {
                                    id: t
                                })
                            }
                        }
                    }, {
                        key: "template",
                        get: function() {
                            return (0, m.default)(v.default)
                        }
                    }]), e
                }(f.default);
            e.default = k, k._mimeTypesForUrl = function(t, e, n) {
                var i = (t.split("?")[0].match(/.*\.(.*)$/) || [])[1],
                    r = n || i && e[i.toLowerCase()] || [];
                return r.constructor === Array ? r : [r]
            }, k._canPlay = function(t, e, n, i) {
                var r = k._mimeTypesForUrl(n, e, i),
                    o = document.createElement(t);
                return !!r.filter(function(t) {
                    return !!o.canPlayType(t).replace(/no/, "")
                })[0]
            }, k.canPlay = function(t, e) {
                return k._canPlay("audio", E, t, e) || k._canPlay("video", _, t, e)
            }, t.exports = e.default
        }).call(this, n(63))
    }, function(t, e) {
        t.exports = '<% for (var i = 0; i < tracks.length; i++) { %>\n  <track data-html5-video-track="<%= i %>" kind="<%= tracks[i].kind %>" label="<%= tracks[i].label %>" srclang="<%= tracks[i].lang %>" src="<%= tracks[i].src %>" />\n<% }; %>\n'
    }, function(t, e, n) {
        var i = n(174);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, "[data-html5-video] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: block; }\n", ""])
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = c(n(0)),
            r = c(n(3)),
            o = c(n(1)),
            a = c(n(2)),
            s = c(n(4)),
            l = c(n(13)),
            u = c(n(62));

        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var d = function(t) {
            function e() {
                return (0, i.default)(this, e), (0, o.default)(this, t.apply(this, arguments))
            }
            return (0, a.default)(e, t), e.prototype.updateSettings = function() {
                this.settings.left = ["playpause", "position", "duration"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(s.default.PLAYBACK_SETTINGSUPDATE)
            }, e.prototype.getPlaybackType = function() {
                return l.default.AOD
            }, (0, r.default)(e, [{
                key: "name",
                get: function() {
                    return "html5_audio"
                }
            }, {
                key: "tagName",
                get: function() {
                    return "audio"
                }
            }, {
                key: "isAudioOnly",
                get: function() {
                    return !0
                }
            }]), e
        }(u.default);
        e.default = d, d.canPlay = function(t, e) {
            return u.default._canPlay("audio", {
                wav: ["audio/wav"],
                mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
                aac: ['audio/mp4;codecs="mp4a.40.5"'],
                oga: ["audio/ogg"]
            }, t, e)
        }, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = u(n(0)),
            r = u(n(1)),
            o = u(n(3)),
            a = u(n(2)),
            s = u(n(13)),
            l = u(n(4));

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(177);
        var c = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o.el.src = n.src, o
            }
            return (0, a.default)(e, t), e.prototype.getPlaybackType = function() {
                return s.default.NO_OP
            }, (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "html_img"
                }
            }, {
                key: "tagName",
                get: function() {
                    return "img"
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        "data-html-img": ""
                    }
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        load: "_onLoad",
                        abort: "_onError",
                        error: "_onError"
                    }
                }
            }]), e.prototype.render = function() {
                return this.trigger(l.default.PLAYBACK_READY, this.name), this
            }, e.prototype._onLoad = function() {
                this.trigger(l.default.PLAYBACK_ENDED, this.name)
            }, e.prototype._onError = function(t) {
                var e = "error" === t.type ? "load error" : "loading aborted";
                this.trigger(l.default.PLAYBACK_ERROR, {
                    message: e
                }, this.name)
            }, e
        }(s.default);
        e.default = c, c.canPlay = function(t) {
            return /\.(png|jpg|jpeg|gif|bmp|tiff|pgm|pnm|webp)(|\?.*)$/i.test(t)
        }, t.exports = e.default
    }, function(t, e, n) {
        var i = n(178);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, "[data-html-img] {\n  max-width: 100%;\n  max-height: 100%; }\n", ""])
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = f(n(0)),
            r = f(n(1)),
            o = f(n(3)),
            a = f(n(2)),
            s = n(5),
            l = f(n(13)),
            u = f(n(10)),
            c = f(n(4)),
            d = f(n(180));

        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(181);
        var p = function(t) {
            function e() {
                (0, i.default)(this, e);
                for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                var s = (0, r.default)(this, t.call.apply(t, [this].concat(o)));
                return s._noiseFrameNum = -1, s
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "no_op"
                }
            }, {
                key: "template",
                get: function() {
                    return (0, u.default)(d.default)
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        "data-no-op": ""
                    }
                }
            }]), e.prototype.render = function() {
                var t = this.options.playbackNotSupportedMessage || this.i18n.t("playback_not_supported");
                this.$el.html(this.template({
                    message: t
                })), this.trigger(c.default.PLAYBACK_READY, this.name);
                var e = !(!this.options.poster || !this.options.poster.showForNoOp);
                return !this.options.autoPlay && e || this._animate(), this
            }, e.prototype._noise = function() {
                if (this._noiseFrameNum = (this._noiseFrameNum + 1) % 5, !this._noiseFrameNum) {
                    var t = this.context.createImageData(this.context.canvas.width, this.context.canvas.height),
                        e = void 0;
                    try {
                        e = new Uint32Array(t.data.buffer)
                    } catch (r) {
                        e = new Uint32Array(this.context.canvas.width * this.context.canvas.height * 4);
                        for (var n = t.data, i = 0; i < n.length; i++) e[i] = n[i]
                    }
                    for (var r = e.length, o = 6 * Math.random() + 4, a = 0, s = 0, l = 0; l < r;) {
                        if (a < 0) a = o * Math.random(), s = 255 * Math.pow(Math.random(), .4) << 24;
                        a -= 1, e[l++] = s
                    }
                    this.context.putImageData(t, 0, 0)
                }
            }, e.prototype._loop = function() {
                var t = this;
                this._stop || (this._noise(), this._animationHandle = (0, s.requestAnimationFrame)(function() {
                    return t._loop()
                }))
            }, e.prototype.destroy = function() {
                this._animationHandle && ((0, s.cancelAnimationFrame)(this._animationHandle), this._stop = !0)
            }, e.prototype._animate = function() {
                this.canvas = this.$el.find("canvas[data-no-op-canvas]")[0], this.context = this.canvas.getContext("2d"), this._loop()
            }, e
        }(l.default);
        e.default = p, p.canPlay = function(t) {
            return !0
        }, t.exports = e.default
    }, function(t, e) {
        t.exports = "<canvas data-no-op-canvas></canvas>\n<p data-no-op-msg><%=message%><p>\n"
    }, function(t, e, n) {
        var i = n(182);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, "[data-no-op] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n[data-no-op] p[data-no-op-msg] {\n  position: absolute;\n  text-align: center;\n  font-size: 25px;\n  left: 0;\n  right: 0;\n  color: white;\n  padding: 10px;\n  /* center vertically */\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  max-height: 100%;\n  overflow: auto; }\n\n[data-no-op] canvas[data-no-op-canvas] {\n  background-color: #777;\n  height: 100%;\n  width: 100%; }\n", ""])
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = d(n(0)),
            r = d(n(1)),
            o = d(n(3)),
            a = d(n(2)),
            s = d(n(41)),
            l = d(n(4)),
            u = d(n(10)),
            c = d(n(184));

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(185);
        var f = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o.template = (0, u.default)(c.default), o.showTimeout = null, o.listenTo(o.container, l.default.CONTAINER_STATE_BUFFERING, o.onBuffering), o.listenTo(o.container, l.default.CONTAINER_STATE_BUFFERFULL, o.onBufferFull), o.listenTo(o.container, l.default.CONTAINER_STOP, o.onStop), o.listenTo(o.container, l.default.CONTAINER_ENDED, o.onStop), o.listenTo(o.container, l.default.CONTAINER_ERROR, o.onStop), o.render(), o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "spinner"
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        "data-spinner": "",
                        class: "spinner-three-bounce"
                    }
                }
            }]), e.prototype.onBuffering = function() {
                this.show()
            }, e.prototype.onBufferFull = function() {
                this.hide()
            }, e.prototype.onStop = function() {
                this.hide()
            }, e.prototype.show = function() {
                var t = this;
                null === this.showTimeout && (this.showTimeout = setTimeout(function() {
                    return t.$el.show()
                }, 300))
            }, e.prototype.hide = function() {
                null !== this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = null), this.$el.hide()
            }, e.prototype.render = function() {
                return this.$el.html(this.template()), this.container.$el.append(this.$el), this.$el.hide(), this.container.buffering && this.onBuffering(), this
            }, e
        }(s.default);
        e.default = f, t.exports = e.default
    }, function(t, e) {
        t.exports = "<div data-bounce1></div><div data-bounce2></div><div data-bounce3></div>\n"
    }, function(t, e, n) {
        var i = n(186);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".spinner-three-bounce[data-spinner] {\n  position: absolute;\n  margin: 0 auto;\n  width: 70px;\n  text-align: center;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  /* center vertically */\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .spinner-three-bounce[data-spinner] > div {\n    width: 18px;\n    height: 18px;\n    background-color: #FFFFFF;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\n            animation: bouncedelay 1.4s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both; }\n  .spinner-three-bounce[data-spinner] [data-bounce1] {\n    -webkit-animation-delay: -0.32s;\n            animation-delay: -0.32s; }\n  .spinner-three-bounce[data-spinner] [data-bounce2] {\n    -webkit-animation-delay: -0.16s;\n            animation-delay: -0.16s; }\n\n@-webkit-keyframes bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n", ""])
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(188),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = c(n(0)),
            r = c(n(1)),
            o = c(n(3)),
            a = c(n(2)),
            s = c(n(42)),
            l = c(n(4)),
            u = c(n(6));

        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var d = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o.setInitialAttrs(), o.reportInterval = o.options.reportInterval || 5e3, o.state = "IDLE", o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "stats"
                }
            }]), e.prototype.bindEvents = function() {
                this.listenTo(this.container.playback, l.default.PLAYBACK_PLAY, this.onPlay), this.listenTo(this.container, l.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, l.default.CONTAINER_ENDED, this.onStop), this.listenTo(this.container, l.default.CONTAINER_DESTROYED, this.onStop), this.listenTo(this.container, l.default.CONTAINER_STATE_BUFFERING, this.onBuffering), this.listenTo(this.container, l.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull), this.listenTo(this.container, l.default.CONTAINER_STATS_ADD, this.onStatsAdd), this.listenTo(this.container, l.default.CONTAINER_BITRATE, this.onStatsAdd), this.listenTo(this.container.playback, l.default.PLAYBACK_STATS_ADD, this.onStatsAdd)
            }, e.prototype.setInitialAttrs = function() {
                this.firstPlay = !0, this.startupTime = 0, this.rebufferingTime = 0, this.watchingTime = 0, this.rebuffers = 0, this.externalMetrics = {}
            }, e.prototype.onPlay = function() {
                this.state = "PLAYING", this.watchingTimeInit = Date.now(), this.intervalId || (this.intervalId = setInterval(this.report.bind(this), this.reportInterval))
            }, e.prototype.onStop = function() {
                clearInterval(this.intervalId), this.report(), this.intervalId = void 0, this.state = "STOPPED"
            }, e.prototype.onBuffering = function() {
                this.firstPlay ? this.startupTimeInit = Date.now() : this.rebufferingTimeInit = Date.now(), this.state = "BUFFERING", this.rebuffers++
            }, e.prototype.onBufferFull = function() {
                this.firstPlay && this.startupTimeInit ? (this.firstPlay = !1, this.startupTime = Date.now() - this.startupTimeInit, this.watchingTimeInit = Date.now()) : this.rebufferingTimeInit && (this.rebufferingTime += this.getRebufferingTime()), this.rebufferingTimeInit = void 0, this.state = "PLAYING"
            }, e.prototype.getRebufferingTime = function() {
                return Date.now() - this.rebufferingTimeInit
            }, e.prototype.getWatchingTime = function() {
                return Date.now() - this.watchingTimeInit - this.rebufferingTime
            }, e.prototype.isRebuffering = function() {
                return !!this.rebufferingTimeInit
            }, e.prototype.onStatsAdd = function(t) {
                u.default.extend(this.externalMetrics, t)
            }, e.prototype.getStats = function() {
                var t = {
                    startupTime: this.startupTime,
                    rebuffers: this.rebuffers,
                    rebufferingTime: this.isRebuffering() ? this.rebufferingTime + this.getRebufferingTime() : this.rebufferingTime,
                    watchingTime: this.isRebuffering() ? this.getWatchingTime() - this.getRebufferingTime() : this.getWatchingTime()
                };
                return u.default.extend(t, this.externalMetrics), t
            }, e.prototype.report = function() {
                this.container.statsReport(this.getStats())
            }, e
        }(s.default);
        e.default = d, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = d(n(0)),
            r = d(n(1)),
            o = d(n(3)),
            a = d(n(2)),
            s = d(n(41)),
            l = d(n(4)),
            u = d(n(10)),
            c = d(n(190));

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(191);
        var f = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o.configure(), o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "watermark"
                }
            }, {
                key: "template",
                get: function() {
                    return (0, u.default)(c.default)
                }
            }]), e.prototype.bindEvents = function() {
                this.listenTo(this.container, l.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, l.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, l.default.CONTAINER_OPTIONS_CHANGE, this.configure)
            }, e.prototype.configure = function() {
                this.position = this.options.position || "bottom-right", this.options.watermark ? (this.imageUrl = this.options.watermark, this.imageLink = this.options.watermarkLink, this.render()) : this.$el.remove()
            }, e.prototype.onPlay = function() {
                this.hidden || this.$el.show()
            }, e.prototype.onStop = function() {
                this.$el.hide()
            }, e.prototype.render = function() {
                this.$el.hide();
                var t = {
                    position: this.position,
                    imageUrl: this.imageUrl,
                    imageLink: this.imageLink
                };
                return this.$el.html(this.template(t)), this.container.$el.append(this.$el), this
            }, e
        }(s.default);
        e.default = f, t.exports = e.default
    }, function(t, e) {
        t.exports = '<div class="clappr-watermark" data-watermark data-watermark-<%=position %>>\n<% if(typeof imageLink !== \'undefined\') { %>\n<a target=_blank href="<%= imageLink %>">\n<% } %>\n<img src="<%= imageUrl %>">\n<% if(typeof imageLink !== \'undefined\') { %>\n</a>\n<% } %>\n</div>\n'
    }, function(t, e, n) {
        var i = n(192);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".clappr-watermark[data-watermark] {\n  position: absolute;\n  min-width: 70px;\n  max-width: 200px;\n  width: 12%;\n  text-align: center;\n  z-index: 10; }\n\n.clappr-watermark[data-watermark] a {\n  outline: none;\n  cursor: pointer; }\n\n.clappr-watermark[data-watermark] img {\n  max-width: 100%; }\n\n.clappr-watermark[data-watermark-bottom-left] {\n  bottom: 10px;\n  left: 10px; }\n\n.clappr-watermark[data-watermark-bottom-right] {\n  bottom: 10px;\n  right: 42px; }\n\n.clappr-watermark[data-watermark-top-left] {\n  top: 10px;\n  left: 10px; }\n\n.clappr-watermark[data-watermark-top-right] {\n  top: 10px;\n  right: 37px; }\n", ""])
    }, function(t, e, n) {
        "use strict";
        (function(i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = A(n(0)),
                o = A(n(1)),
                a = A(n(3)),
                s = A(n(2)),
                l = A(n(41)),
                u = A(n(4)),
                c = A(n(10)),
                d = A(n(13)),
                f = A(n(80)),
                p = A(n(194)),
                h = A(n(64));

            function A(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            n(195);
            var g = function(t) {
                function e(n) {
                    (0, r.default)(this, e);
                    var a = (0, o.default)(this, t.call(this, n));
                    return a.hasStartedPlaying = !1, a.playRequested = !1, a.render(), i.nextTick(function() {
                        return a.update()
                    }), a
                }
                return (0, s.default)(e, t), (0, a.default)(e, [{
                    key: "name",
                    get: function() {
                        return "poster"
                    }
                }, {
                    key: "template",
                    get: function() {
                        return (0, c.default)(p.default)
                    }
                }, {
                    key: "shouldRender",
                    get: function() {
                        var t = !(!this.options.poster || !this.options.poster.showForNoOp);
                        return "html_img" !== this.container.playback.name && (this.container.playback.getPlaybackType() !== d.default.NO_OP || t)
                    }
                }, {
                    key: "attributes",
                    get: function() {
                        return {
                            class: "player-poster",
                            "data-poster": ""
                        }
                    }
                }, {
                    key: "events",
                    get: function() {
                        return {
                            click: "clicked"
                        }
                    }
                }, {
                    key: "showOnVideoEnd",
                    get: function() {
                        return !this.options.poster || this.options.poster.showOnVideoEnd || void 0 === this.options.poster.showOnVideoEnd
                    }
                }]), e.prototype.bindEvents = function() {
                    this.listenTo(this.container, u.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, u.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, u.default.CONTAINER_STATE_BUFFERING, this.update), this.listenTo(this.container, u.default.CONTAINER_STATE_BUFFERFULL, this.update), this.listenTo(this.container, u.default.CONTAINER_OPTIONS_CHANGE, this.render), this.listenTo(this.container, u.default.CONTAINER_ERROR, this.onError), this.showOnVideoEnd && this.listenTo(this.container, u.default.CONTAINER_ENDED, this.onStop)
                }, e.prototype.onError = function(t) {
                    this.hasFatalError = t.level === f.default.Levels.FATAL, this.hasFatalError && (this.hasStartedPlaying = !1, this.playRequested = !1, this.showPlayButton())
                }, e.prototype.onPlay = function() {
                    this.hasStartedPlaying = !0, this.update()
                }, e.prototype.onStop = function() {
                    this.hasStartedPlaying = !1, this.playRequested = !1, this.update()
                }, e.prototype.updatePlayButton = function(t) {
                    !t || this.options.chromeless && !this.options.allowUserInteraction ? this.hidePlayButton() : this.showPlayButton()
                }, e.prototype.showPlayButton = function() {
                    this.hasFatalError && !this.options.disableErrorScreen || (this.$playButton.show(), this.$el.addClass("clickable"))
                }, e.prototype.hidePlayButton = function() {
                    this.$playButton.hide(), this.$el.removeClass("clickable")
                }, e.prototype.clicked = function() {
                    if (!this.hasStartedPlaying) return this.options.chromeless && !this.options.allowUserInteraction || (this.playRequested = !0, this.update(), this.container.play()), !1
                }, e.prototype.shouldHideOnPlay = function() {
                    return !this.container.playback.isAudioOnly
                }, e.prototype.update = function() {
                    if (this.shouldRender) {
                        var t = !this.playRequested && !this.hasStartedPlaying && !this.container.buffering;
                        this.updatePlayButton(t), this.updatePoster()
                    }
                }, e.prototype.updatePoster = function() {
                    this.hasStartedPlaying ? this.hidePoster() : this.showPoster()
                }, e.prototype.showPoster = function() {
                    this.container.disableMediaControl(), this.$el.show()
                }, e.prototype.hidePoster = function() {
                    this.container.enableMediaControl(), this.shouldHideOnPlay() && this.$el.hide()
                }, e.prototype.render = function() {
                    if (this.shouldRender) {
                        if (this.$el.html(this.template()), this.options.poster && void 0 === this.options.poster.custom) {
                            var t = this.options.poster.url || this.options.poster;
                            this.$el.css({
                                "background-image": "url(" + t + ")"
                            })
                        } else this.options.poster && this.$el.css({
                            background: this.options.poster.custom
                        });
                        this.container.$el.append(this.el), this.$playWrapper = this.$el.find(".play-wrapper"), this.$playWrapper.append(h.default), this.$playButton = this.$playWrapper.find("svg"), this.$playButton.addClass("poster-icon"), this.$playButton.attr("data-poster", "");
                        var e = this.options.mediacontrol && this.options.mediacontrol.buttons;
                        return e && this.$el.find("svg path").css("fill", e), this.options.mediacontrol && this.options.mediacontrol.buttons && (e = this.options.mediacontrol.buttons, this.$playButton.css("color", e)), this.update(), this
                    }
                }, e
            }(l.default);
            e.default = g, t.exports = e.default
        }).call(this, n(63))
    }, function(t, e) {
        t.exports = '<div class="play-wrapper" data-poster></div>\n'
    }, function(t, e, n) {
        var i = n(196);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".player-poster[data-poster] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n  .player-poster[data-poster].clickable {\n    cursor: pointer; }\n  .player-poster[data-poster]:hover .play-wrapper[data-poster] {\n    opacity: 1; }\n  .player-poster[data-poster] .play-wrapper[data-poster] {\n    width: 100%;\n    height: 25%;\n    margin: 0 auto;\n    opacity: 0.75;\n    transition: opacity 0.1s ease; }\n    .player-poster[data-poster] .play-wrapper[data-poster] svg {\n      height: 100%; }\n      .player-poster[data-poster] .play-wrapper[data-poster] svg path {\n        fill: #fff; }\n", ""])
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(198),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = u(n(0)),
            r = u(n(1)),
            o = u(n(3)),
            a = u(n(2)),
            s = u(n(42)),
            l = u(n(4));

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var c = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o.container.options.gaAccount && (o.account = o.container.options.gaAccount, o.trackerName = o.container.options.gaTrackerName ? o.container.options.gaTrackerName + "." : "Clappr.", o.domainName = o.container.options.gaDomainName, o.currentHDState = void 0, o.embedScript()), o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "google_analytics"
                }
            }]), e.prototype.embedScript = function() {
                var t = this;
                if (window._gat) this.addEventListeners();
                else {
                    var e = document.createElement("script");
                    e.setAttribute("type", "text/javascript"), e.setAttribute("async", "async"), e.setAttribute("src", "//www.google-analytics.com/ga.js"), e.onload = function() {
                        return t.addEventListeners()
                    }, document.body.appendChild(e)
                }
            }, e.prototype.addEventListeners = function() {
                var t = this;
                this.container && (this.listenTo(this.container, l.default.CONTAINER_READY, this.onReady), this.listenTo(this.container, l.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, l.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, l.default.CONTAINER_PAUSE, this.onPause), this.listenTo(this.container, l.default.CONTAINER_ENDED, this.onEnded), this.listenTo(this.container, l.default.CONTAINER_STATE_BUFFERING, this.onBuffering), this.listenTo(this.container, l.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull), this.listenTo(this.container, l.default.CONTAINER_ERROR, this.onError), this.listenTo(this.container, l.default.CONTAINER_PLAYBACKSTATE, this.onPlaybackChanged), this.listenTo(this.container, l.default.CONTAINER_VOLUME, function(e) {
                    return t.onVolumeChanged(e)
                }), this.listenTo(this.container, l.default.CONTAINER_SEEK, function(e) {
                    return t.onSeek(e)
                }), this.listenTo(this.container, l.default.CONTAINER_FULL_SCREEN, this.onFullscreen), this.listenTo(this.container, l.default.CONTAINER_HIGHDEFINITIONUPDATE, this.onHD), this.listenTo(this.container, l.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.onDVR)), _gaq.push([this.trackerName + "_setAccount", this.account]), this.domainName && _gaq.push([this.trackerName + "_setDomainName", this.domainName])
            }, e.prototype.onReady = function() {
                this.push(["Video", "Playback", this.container.playback.name])
            }, e.prototype.onPlay = function() {
                this.push(["Video", "Play", this.container.playback.src])
            }, e.prototype.onStop = function() {
                this.push(["Video", "Stop", this.container.playback.src])
            }, e.prototype.onEnded = function() {
                this.push(["Video", "Ended", this.container.playback.src])
            }, e.prototype.onBuffering = function() {
                this.push(["Video", "Buffering", this.container.playback.src])
            }, e.prototype.onBufferFull = function() {
                this.push(["Video", "Bufferfull", this.container.playback.src])
            }, e.prototype.onError = function() {
                this.push(["Video", "Error", this.container.playback.src])
            }, e.prototype.onHD = function(t) {
                var e = t ? "ON" : "OFF";
                e !== this.currentHDState && (this.currentHDState = e, this.push(["Video", "HD - " + e, this.container.playback.src]))
            }, e.prototype.onPlaybackChanged = function(t) {
                null !== t.type && this.push(["Video", "Playback Type - " + t.type, this.container.playback.src])
            }, e.prototype.onDVR = function(t) {
                var e = t ? "ON" : "OFF";
                this.push(["Interaction", "DVR - " + e, this.container.playback.src])
            }, e.prototype.onPause = function() {
                this.push(["Video", "Pause", this.container.playback.src])
            }, e.prototype.onSeek = function() {
                this.push(["Video", "Seek", this.container.playback.src])
            }, e.prototype.onVolumeChanged = function() {
                this.push(["Interaction", "Volume", this.container.playback.src])
            }, e.prototype.onFullscreen = function() {
                this.push(["Interaction", "Fullscreen", this.container.playback.src])
            }, e.prototype.push = function(t) {
                var e = [this.trackerName + "_trackEvent"].concat(t);
                _gaq.push(e)
            }, e
        }(s.default);
        e.default = c, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = c(n(0)),
            r = c(n(1)),
            o = c(n(3)),
            a = c(n(2)),
            s = c(n(42)),
            l = c(n(4)),
            u = c(n(13));

        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var d = function(t) {
            function e(n) {
                return (0, i.default)(this, e), (0, r.default)(this, t.call(this, n))
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "click_to_pause"
                }
            }]), e.prototype.bindEvents = function() {
                this.listenTo(this.container, l.default.CONTAINER_CLICK, this.click), this.listenTo(this.container, l.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate)
            }, e.prototype.click = function() {
                (this.container.getPlaybackType() !== u.default.LIVE || this.container.isDvrEnabled()) && (this.container.isPlaying() ? this.container.pause() : this.container.play())
            }, e.prototype.settingsUpdate = function() {
                var t = this.container.getPlaybackType() !== u.default.LIVE || this.container.isDvrEnabled();
                if (t !== this.pointerEnabled) {
                    var e = t ? "addClass" : "removeClass";
                    this.container.$el[e]("pointer-enabled"), this.pointerEnabled = t
                }
            }, e
        }(s.default);
        e.default = d, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        (function(i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = w(n(201)),
                o = w(n(0)),
                a = w(n(1)),
                s = w(n(3)),
                l = w(n(2)),
                u = n(5),
                c = n(60),
                d = w(n(4)),
                f = w(n(23)),
                p = w(n(28)),
                h = w(n(61)),
                A = w(n(10)),
                g = w(n(13)),
                y = w(n(6));
            n(203);
            var m = w(n(205)),
                v = w(n(64)),
                b = w(n(95)),
                _ = w(n(206)),
                E = w(n(207)),
                T = w(n(208)),
                C = w(n(209)),
                k = w(n(210)),
                O = w(n(211));

            function w(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var S = function(t) {
                function e(n) {
                    (0, o.default)(this, e);
                    var i = (0, a.default)(this, t.call(this, n));
                    return i.persistConfig = i.options.persistConfig, i.currentPositionValue = null, i.currentDurationValue = null, i.keepVisible = !1, i.fullScreenOnVideoTagSupported = null, i.setInitialVolume(), i.settings = {
                        left: ["play", "stop", "pause"],
                        right: ["volume"],
                        default: ["position", "seekbar", "duration"]
                    }, i.kibo = new c.Kibo(i.options.focusElement), i.bindKeyEvents(), i.container ? y.default.isEmptyObject(i.container.settings) || (i.settings = y.default.extend({}, i.container.settings)) : i.settings = {}, i.userDisabled = !1, (i.container && i.container.mediaControlDisabled || i.options.chromeless) && i.disable(), i.stopDragHandler = function(t) {
                        return i.stopDrag(t)
                    }, i.updateDragHandler = function(t) {
                        return i.updateDrag(t)
                    }, (0, y.default)(document).bind("mouseup", i.stopDragHandler), (0, y.default)(document).bind("mousemove", i.updateDragHandler), i
                }
                return (0, l.default)(e, t), (0, s.default)(e, [{
                    key: "name",
                    get: function() {
                        return "media_control"
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        var t = this.container && this.container.getPlaybackType() === g.default.NO_OP;
                        return this.userDisabled || t
                    }
                }, {
                    key: "container",
                    get: function() {
                        return this.core && this.core.activeContainer
                    }
                }, {
                    key: "playback",
                    get: function() {
                        return this.core && this.core.activePlayback
                    }
                }, {
                    key: "attributes",
                    get: function() {
                        return {
                            class: "media-control",
                            "data-media-control": ""
                        }
                    }
                }, {
                    key: "events",
                    get: function() {
                        return {
                            "click [data-play]": "play",
                            "click [data-pause]": "pause",
                            "click [data-playpause]": "togglePlayPause",
                            "click [data-stop]": "stop",
                            "click [data-playstop]": "togglePlayStop",
                            "click [data-fullscreen]": "toggleFullscreen",
                            "click .bar-container[data-seekbar]": "seek",
                            "click .bar-container[data-volume]": "onVolumeClick",
                            "click .drawer-icon[data-volume]": "toggleMute",
                            "mouseenter .drawer-container[data-volume]": "showVolumeBar",
                            "mouseleave .drawer-container[data-volume]": "hideVolumeBar",
                            "mousedown .bar-container[data-volume]": "startVolumeDrag",
                            "mousemove .bar-container[data-volume]": "mousemoveOnVolumeBar",
                            "mousedown .bar-scrubber[data-seekbar]": "startSeekDrag",
                            "mousemove .bar-container[data-seekbar]": "mousemoveOnSeekBar",
                            "mouseleave .bar-container[data-seekbar]": "mouseleaveOnSeekBar",
                            "mouseenter .media-control-layer[data-controls]": "setUserKeepVisible",
                            "mouseleave .media-control-layer[data-controls]": "resetUserKeepVisible"
                        }
                    }
                }, {
                    key: "template",
                    get: function() {
                        return (0, A.default)(m.default)
                    }
                }, {
                    key: "volume",
                    get: function() {
                        return this.container && this.container.isReady ? this.container.volume : this.intendedVolume
                    }
                }, {
                    key: "muted",
                    get: function() {
                        return 0 === this.volume
                    }
                }]), e.prototype.getExternalInterface = function() {
                    var t = this;
                    return {
                        setVolume: this.setVolume,
                        getVolume: function() {
                            return t.volume
                        }
                    }
                }, e.prototype.bindEvents = function() {
                    var t = this;
                    this.stopListening(), this.listenTo(this.core, d.default.CORE_ACTIVE_CONTAINER_CHANGED, this.onActiveContainerChanged), this.listenTo(this.core, d.default.CORE_MOUSE_MOVE, this.show), this.listenTo(this.core, d.default.CORE_MOUSE_LEAVE, function() {
                        return t.hide(t.options.hideMediaControlDelay)
                    }), this.listenTo(this.core, d.default.CORE_FULLSCREEN, this.show), this.listenTo(this.core, d.default.CORE_OPTIONS_CHANGE, this.configure), h.default.on(this.options.playerId + ":" + d.default.PLAYER_RESIZE, this.playerResize, this), this.bindContainerEvents()
                }, e.prototype.bindContainerEvents = function() {
                    this.container && (this.listenTo(this.container, d.default.CONTAINER_PLAY, this.changeTogglePlay), this.listenTo(this.container, d.default.CONTAINER_PAUSE, this.changeTogglePlay), this.listenTo(this.container, d.default.CONTAINER_STOP, this.changeTogglePlay), this.listenTo(this.container, d.default.CONTAINER_DBLCLICK, this.toggleFullscreen), this.listenTo(this.container, d.default.CONTAINER_TIMEUPDATE, this.onTimeUpdate), this.listenTo(this.container, d.default.CONTAINER_PROGRESS, this.updateProgressBar), this.listenTo(this.container, d.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate), this.listenTo(this.container, d.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.settingsUpdate), this.listenTo(this.container, d.default.CONTAINER_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate), this.listenTo(this.container, d.default.CONTAINER_MEDIACONTROL_DISABLE, this.disable), this.listenTo(this.container, d.default.CONTAINER_MEDIACONTROL_ENABLE, this.enable), this.listenTo(this.container, d.default.CONTAINER_ENDED, this.ended), this.listenTo(this.container, d.default.CONTAINER_VOLUME, this.onVolumeChanged), this.listenTo(this.container, d.default.CONTAINER_OPTIONS_CHANGE, this.setInitialVolume), "video" === this.container.playback.el.nodeName.toLowerCase() && this.listenToOnce(this.container, d.default.CONTAINER_LOADEDMETADATA, this.onLoadedMetadataOnVideoTag))
                }, e.prototype.disable = function() {
                    this.userDisabled = !0, this.hide(), this.unbindKeyEvents(), this.$el.hide()
                }, e.prototype.enable = function() {
                    this.options.chromeless || (this.userDisabled = !1, this.bindKeyEvents(), this.show())
                }, e.prototype.play = function() {
                    this.container && this.container.play()
                }, e.prototype.pause = function() {
                    this.container && this.container.pause()
                }, e.prototype.stop = function() {
                    this.container && this.container.stop()
                }, e.prototype.setInitialVolume = function() {
                    var t = this.persistConfig ? u.Config.restore("volume") : 100,
                        e = this.container && this.container.options || this.options;
                    this.setVolume(e.mute ? 0 : t, !0)
                }, e.prototype.onVolumeChanged = function() {
                    this.updateVolumeUI()
                }, e.prototype.onLoadedMetadataOnVideoTag = function() {
                    var t = this.playback && this.playback.el;
                    !u.Fullscreen.fullscreenEnabled() && t.webkitSupportsFullscreen && (this.fullScreenOnVideoTagSupported = !0, this.settingsUpdate())
                }, e.prototype.updateVolumeUI = function() {
                    if (this.rendered) {
                        this.$volumeBarContainer.find(".bar-fill-2").css({});
                        var t = this.$volumeBarContainer.width(),
                            e = this.$volumeBarBackground.width(),
                            n = (t - e) / 2,
                            i = e * this.volume / 100 + n;
                        this.$volumeBarFill.css({
                            width: this.volume + "%"
                        }), this.$volumeBarScrubber.css({
                            left: i
                        }), this.$volumeBarContainer.find(".segmented-bar-element").removeClass("fill");
                        var r = Math.ceil(this.volume / 10);
                        this.$volumeBarContainer.find(".segmented-bar-element").slice(0, r).addClass("fill"), this.$volumeIcon.html(""), this.$volumeIcon.removeClass("muted"), this.muted ? (this.$volumeIcon.append(T.default), this.$volumeIcon.addClass("muted")) : this.$volumeIcon.append(E.default), this.applyButtonStyle(this.$volumeIcon)
                    }
                }, e.prototype.changeTogglePlay = function() {
                    this.$playPauseToggle.html(""), this.$playStopToggle.html(""), this.container && this.container.isPlaying() ? (this.$playPauseToggle.append(b.default), this.$playStopToggle.append(_.default), this.trigger(d.default.MEDIACONTROL_PLAYING)) : (this.$playPauseToggle.append(v.default), this.$playStopToggle.append(v.default), this.trigger(d.default.MEDIACONTROL_NOTPLAYING), p.default.isMobile && this.show()), this.applyButtonStyle(this.$playPauseToggle), this.applyButtonStyle(this.$playStopToggle)
                }, e.prototype.mousemoveOnSeekBar = function(t) {
                    if (this.settings.seekEnabled) {
                        var e = t.pageX - this.$seekBarContainer.offset().left - this.$seekBarHover.width() / 2;
                        this.$seekBarHover.css({
                            left: e
                        })
                    }
                    this.trigger(d.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, t)
                }, e.prototype.mouseleaveOnSeekBar = function(t) {
                    this.trigger(d.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, t)
                }, e.prototype.onVolumeClick = function(t) {
                    this.setVolume(this.getVolumeFromUIEvent(t))
                }, e.prototype.mousemoveOnVolumeBar = function(t) {
                    this.draggingVolumeBar && this.setVolume(this.getVolumeFromUIEvent(t))
                }, e.prototype.playerResize = function(t) {
                    this.$fullscreenToggle.html("");
                    var e = u.Fullscreen.isFullscreen() ? k.default : C.default;
                    this.$fullscreenToggle.append(e), this.applyButtonStyle(this.$fullscreenToggle), 0 !== this.$el.find(".media-control").length && this.$el.removeClass("w320"), (t.width <= 320 || this.options.hideVolumeBar) && this.$el.addClass("w320")
                }, e.prototype.togglePlayPause = function() {
                    return this.container.isPlaying() ? this.container.pause() : this.container.play(), !1
                }, e.prototype.togglePlayStop = function() {
                    this.container.isPlaying() ? this.container.stop() : this.container.play()
                }, e.prototype.startSeekDrag = function(t) {
                    this.settings.seekEnabled && (this.draggingSeekBar = !0, this.$el.addClass("dragging"), this.$seekBarLoaded.addClass("media-control-notransition"), this.$seekBarPosition.addClass("media-control-notransition"), this.$seekBarScrubber.addClass("media-control-notransition"), t && t.preventDefault())
                }, e.prototype.startVolumeDrag = function(t) {
                    this.draggingVolumeBar = !0, this.$el.addClass("dragging"), t && t.preventDefault()
                }, e.prototype.stopDrag = function(t) {
                    this.draggingSeekBar && this.seek(t), this.$el.removeClass("dragging"), this.$seekBarLoaded.removeClass("media-control-notransition"), this.$seekBarPosition.removeClass("media-control-notransition"), this.$seekBarScrubber.removeClass("media-control-notransition dragging"), this.draggingSeekBar = !1, this.draggingVolumeBar = !1
                }, e.prototype.updateDrag = function(t) {
                    if (this.draggingSeekBar) {
                        t.preventDefault();
                        var e = (t.pageX - this.$seekBarContainer.offset().left) / this.$seekBarContainer.width() * 100;
                        e = Math.min(100, Math.max(e, 0)), this.setSeekPercentage(e)
                    } else this.draggingVolumeBar && (t.preventDefault(), this.setVolume(this.getVolumeFromUIEvent(t)))
                }, e.prototype.getVolumeFromUIEvent = function(t) {
                    return (t.pageX - this.$volumeBarContainer.offset().left) / this.$volumeBarContainer.width() * 100
                }, e.prototype.toggleMute = function() {
                    this.setVolume(this.muted ? 100 : 0)
                }, e.prototype.setVolume = function(t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t = Math.min(100, Math.max(t, 0)), this.intendedVolume = t, this.persistConfig && !n && u.Config.persist("volume", t);
                    var i = function() {
                        e.container && e.container.isReady ? e.container.setVolume(t) : e.listenToOnce(e.container, d.default.CONTAINER_READY, function() {
                            e.container.setVolume(t)
                        })
                    };
                    this.container ? i() : this.listenToOnce(this, d.default.MEDIACONTROL_CONTAINERCHANGED, function() {
                        return i()
                    })
                }, e.prototype.toggleFullscreen = function() {
                    this.trigger(d.default.MEDIACONTROL_FULLSCREEN, this.name), this.container.fullscreen(), this.core.toggleFullscreen(), this.resetUserKeepVisible()
                }, e.prototype.onActiveContainerChanged = function() {
                    this.fullScreenOnVideoTagSupported = null, this.bindEvents(), h.default.off(this.options.playerId + ":" + d.default.PLAYER_RESIZE, this.playerResize, this), this.setInitialVolume(), this.changeTogglePlay(), this.bindContainerEvents(), this.settingsUpdate(), this.container && this.container.trigger(d.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.container.isDvrInUse()), this.container && this.container.mediaControlDisabled && this.disable(), this.trigger(d.default.MEDIACONTROL_CONTAINERCHANGED)
                }, e.prototype.showVolumeBar = function() {
                    this.hideVolumeId && clearTimeout(this.hideVolumeId), this.$volumeBarContainer.removeClass("volume-bar-hide")
                }, e.prototype.hideVolumeBar = function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400;
                    this.$volumeBarContainer && (this.draggingVolumeBar ? this.hideVolumeId = setTimeout(function() {
                        return t.hideVolumeBar()
                    }, e) : (this.hideVolumeId && clearTimeout(this.hideVolumeId), this.hideVolumeId = setTimeout(function() {
                        return t.$volumeBarContainer.addClass("volume-bar-hide")
                    }, e)))
                }, e.prototype.ended = function() {
                    this.changeTogglePlay()
                }, e.prototype.updateProgressBar = function(t) {
                    var e = t.start / t.total * 100,
                        n = t.current / t.total * 100;
                    this.$seekBarLoaded.css({
                        left: e + "%",
                        width: n - e + "%"
                    })
                }, e.prototype.onTimeUpdate = function(t) {
                    if (!this.draggingSeekBar) {
                        var e = t.current < 0 ? t.total : t.current;
                        this.currentPositionValue = e, this.currentDurationValue = t.total, this.renderSeekBar()
                    }
                }, e.prototype.renderSeekBar = function() {
                    if (null !== this.currentPositionValue && null !== this.currentDurationValue) {
                        this.currentSeekBarPercentage = 100, this.container && (this.container.getPlaybackType() !== g.default.LIVE || this.container.isDvrInUse()) && (this.currentSeekBarPercentage = this.currentPositionValue / this.currentDurationValue * 100), this.setSeekPercentage(this.currentSeekBarPercentage);
                        var t = (0, u.formatTime)(this.currentPositionValue),
                            e = (0, u.formatTime)(this.currentDurationValue);
                        t !== this.displayedPosition && (this.$position.text(t), this.displayedPosition = t), e !== this.displayedDuration && (this.$duration.text(e), this.displayedDuration = e)
                    }
                }, e.prototype.seek = function(t) {
                    if (this.settings.seekEnabled) {
                        var e = (t.pageX - this.$seekBarContainer.offset().left) / this.$seekBarContainer.width() * 100;
                        return e = Math.min(100, Math.max(e, 0)), this.container && this.container.seekPercentage(e), this.setSeekPercentage(e), !1
                    }
                }, e.prototype.setKeepVisible = function() {
                    this.keepVisible = !0
                }, e.prototype.resetKeepVisible = function() {
                    this.keepVisible = !1
                }, e.prototype.setUserKeepVisible = function() {
                    this.userKeepVisible = !0
                }, e.prototype.resetUserKeepVisible = function() {
                    this.userKeepVisible = !1
                }, e.prototype.isVisible = function() {
                    return !this.$el.hasClass("media-control-hide")
                }, e.prototype.show = function(t) {
                    var e = this;
                    if (!this.disabled) {
                        var n = t && t.clientX !== this.lastMouseX && t.clientY !== this.lastMouseY;
                        (!t || n || navigator.userAgent.match(/firefox/i)) && (clearTimeout(this.hideId), this.$el.show(), this.trigger(d.default.MEDIACONTROL_SHOW, this.name), this.container && this.container.trigger(d.default.CONTAINER_MEDIACONTROL_SHOW, this.name), this.$el.removeClass("media-control-hide"), this.hideId = setTimeout(function() {
                            return e.hide()
                        }, 2e3), t && (this.lastMouseX = t.clientX, this.lastMouseY = t.clientY));
                        this.updateCursorStyle(!0)
                    }
                }, e.prototype.hide = function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (this.isVisible()) {
                        var n = e || 2e3;
                        if (clearTimeout(this.hideId), this.disabled || !1 !== this.options.hideMediaControl) {
                            var i = this.userKeepVisible || this.keepVisible,
                                r = this.draggingSeekBar || this.draggingVolumeBar;
                            if (!this.disabled && (e || i || r)) this.hideId = setTimeout(function() {
                                return t.hide()
                            }, n);
                            else {
                                this.trigger(d.default.MEDIACONTROL_HIDE, this.name), this.container && this.container.trigger(d.default.CONTAINER_MEDIACONTROL_HIDE, this.name), this.$el.addClass("media-control-hide"), this.hideVolumeBar(0);
                                this.updateCursorStyle(!1)
                            }
                        }
                    }
                }, e.prototype.updateCursorStyle = function(t) {
                    t ? this.core.$el.removeClass("nocursor") : u.Fullscreen.isFullscreen() && this.core.$el.addClass("nocursor")
                }, e.prototype.settingsUpdate = function() {
                    var t = this.getSettings();
                    !t || this.fullScreenOnVideoTagSupported || u.Fullscreen.fullscreenEnabled() || (t.default && (0, u.removeArrayItem)(t.default, "fullscreen"), t.left && (0, u.removeArrayItem)(t.left, "fullscreen"), t.right && (0, u.removeArrayItem)(t.right, "fullscreen")), (0, r.default)(this.settings) !== (0, r.default)(t) && (this.settings = t, this.render())
                }, e.prototype.getSettings = function() {
                    return y.default.extend(!0, {}, this.container && this.container.settings)
                }, e.prototype.highDefinitionUpdate = function(t) {
                    this.isHD = t;
                    var e = t ? "addClass" : "removeClass";
                    this.$hdIndicator[e]("enabled")
                }, e.prototype.createCachedElements = function() {
                    var t = this.$el.find(".media-control-layer");
                    this.$duration = t.find(".media-control-indicator[data-duration]"), this.$fullscreenToggle = t.find("button.media-control-button[data-fullscreen]"), this.$playPauseToggle = t.find("button.media-control-button[data-playpause]"), this.$playStopToggle = t.find("button.media-control-button[data-playstop]"), this.$position = t.find(".media-control-indicator[data-position]"), this.$seekBarContainer = t.find(".bar-container[data-seekbar]"), this.$seekBarHover = t.find(".bar-hover[data-seekbar]"), this.$seekBarLoaded = t.find(".bar-fill-1[data-seekbar]"), this.$seekBarPosition = t.find(".bar-fill-2[data-seekbar]"), this.$seekBarScrubber = t.find(".bar-scrubber[data-seekbar]"), this.$volumeBarContainer = t.find(".bar-container[data-volume]"), this.$volumeContainer = t.find(".drawer-container[data-volume]"), this.$volumeIcon = t.find(".drawer-icon[data-volume]"), this.$volumeBarBackground = this.$el.find(".bar-background[data-volume]"), this.$volumeBarFill = this.$el.find(".bar-fill-1[data-volume]"), this.$volumeBarScrubber = this.$el.find(".bar-scrubber[data-volume]"), this.$hdIndicator = this.$el.find("button.media-control-button[data-hd-indicator]"), this.resetIndicators(), this.initializeIcons()
                }, e.prototype.resetIndicators = function() {
                    this.displayedPosition = this.$position.text(), this.displayedDuration = this.$duration.text()
                }, e.prototype.initializeIcons = function() {
                    var t = this.$el.find(".media-control-layer");
                    t.find("button.media-control-button[data-play]").append(v.default), t.find("button.media-control-button[data-pause]").append(b.default), t.find("button.media-control-button[data-stop]").append(_.default), this.$playPauseToggle.append(v.default), this.$playStopToggle.append(v.default), this.$volumeIcon.append(E.default), this.$fullscreenToggle.append(C.default), this.$hdIndicator.append(O.default)
                }, e.prototype.setSeekPercentage = function(t) {
                    t = Math.max(Math.min(t, 100), 0), this.displayedSeekBarPercentage !== t && (this.displayedSeekBarPercentage = t, this.$seekBarPosition.removeClass("media-control-notransition"), this.$seekBarScrubber.removeClass("media-control-notransition"), this.$seekBarPosition.css({
                        width: t + "%"
                    }), this.$seekBarScrubber.css({
                        left: t + "%"
                    }))
                }, e.prototype.seekRelative = function(t) {
                    if (this.settings.seekEnabled) {
                        var e = this.container.getCurrentTime(),
                            n = this.container.getDuration(),
                            i = Math.min(Math.max(e + t, 0), n);
                        i = Math.min(100 * i / n, 100), this.container.seekPercentage(i)
                    }
                }, e.prototype.bindKeyAndShow = function(t, e) {
                    var n = this;
                    this.kibo.down(t, function() {
                        return n.show(), e()
                    })
                }, e.prototype.bindKeyEvents = function() {
                    var t = this;
                    if (!p.default.isMobile && !this.options.disableKeyboardShortcuts) {
                        this.unbindKeyEvents(), this.kibo = new c.Kibo(this.options.focusElement || this.options.parentElement), this.bindKeyAndShow("space", function() {
                            return t.togglePlayPause()
                        }), this.bindKeyAndShow("left", function() {
                            return t.seekRelative(-5)
                        }), this.bindKeyAndShow("right", function() {
                            return t.seekRelative(5)
                        }), this.bindKeyAndShow("shift left", function() {
                            return t.seekRelative(-10)
                        }), this.bindKeyAndShow("shift right", function() {
                            return t.seekRelative(10)
                        }), this.bindKeyAndShow("shift ctrl left", function() {
                            return t.seekRelative(-15)
                        }), this.bindKeyAndShow("shift ctrl right", function() {
                            return t.seekRelative(15)
                        });
                        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].forEach(function(e) {
                            t.bindKeyAndShow(e, function() {
                                t.settings.seekEnabled && t.container && t.container.seekPercentage(10 * e)
                            })
                        })
                    }
                }, e.prototype.unbindKeyEvents = function() {
                    this.kibo && (this.kibo.off("space"), this.kibo.off("left"), this.kibo.off("right"), this.kibo.off("shift left"), this.kibo.off("shift right"), this.kibo.off("shift ctrl left"), this.kibo.off("shift ctrl right"), this.kibo.off(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]))
                }, e.prototype.parseColors = function() {
                    if (this.options.mediacontrol) {
                        this.buttonsColor = this.options.mediacontrol.buttons;
                        var t = this.options.mediacontrol.seekbar;
                        this.$el.find(".bar-fill-2[data-seekbar]").css("background-color", t), this.$el.find(".media-control-icon svg path").css("fill", this.buttonsColor), this.$el.find(".segmented-bar-element[data-volume]").css("boxShadow", "inset 2px 0 0 " + this.buttonsColor)
                    }
                }, e.prototype.applyButtonStyle = function(t) {
                    this.buttonsColor && t && (0, y.default)(t).find("svg path").css("fill", this.buttonsColor)
                }, e.prototype.destroy = function() {
                    (0, y.default)(document).unbind("mouseup", this.stopDragHandler), (0, y.default)(document).unbind("mousemove", this.updateDragHandler), this.unbindKeyEvents(), this.stopListening(), t.prototype.destroy.call(this)
                }, e.prototype.configure = function() {
                    this.options.chromeless ? this.disable() : this.enable(), this.trigger(d.default.MEDIACONTROL_OPTIONS_CHANGE)
                }, e.prototype.render = function() {
                    var t = this,
                        e = this.options.hideMediaControlDelay || 2e3;
                    this.settings && this.$el.html(this.template({
                        settings: this.settings
                    })), this.createCachedElements(), this.$playPauseToggle.addClass("paused"), this.$playStopToggle.addClass("stopped"), this.changeTogglePlay(), this.container && (this.hideId = setTimeout(function() {
                        return t.hide()
                    }, e), this.disabled && this.hide()), p.default.isSafari && p.default.isMobile && (p.default.version < 10 ? this.$volumeContainer.css("display", "none") : this.$volumeBarContainer.css("display", "none")), this.$seekBarPosition.addClass("media-control-notransition"), this.$seekBarScrubber.addClass("media-control-notransition");
                    var n = 0;
                    return this.displayedSeekBarPercentage && (n = this.displayedSeekBarPercentage), this.displayedSeekBarPercentage = null, this.setSeekPercentage(n), i.nextTick(function() {
                        !t.settings.seekEnabled && t.$seekBarContainer.addClass("seek-disabled"), !p.default.isMobile && !t.options.disableKeyboardShortcuts && t.bindKeyEvents(), t.playerResize({
                            width: t.options.width,
                            height: t.options.height
                        }), t.hideVolumeBar(0)
                    }), this.parseColors(), this.highDefinitionUpdate(this.isHD), this.core.$el.append(this.el), this.rendered = !0, this.updateVolumeUI(), this.trigger(d.default.MEDIACONTROL_RENDERED), this
                }, e
            }(f.default);
            e.default = S, S.extend = function(t) {
                return (0, u.extend)(S, t)
            }, t.exports = e.default
        }).call(this, n(63))
    }, function(t, e, n) {
        t.exports = {
            default: n(202),
            __esModule: !0
        }
    }, function(t, e, n) {
        var i = n(7),
            r = i.JSON || (i.JSON = {
                stringify: JSON.stringify
            });
        t.exports = function(t) {
            return r.stringify.apply(r, arguments)
        }
    }, function(t, e, n) {
        var i = n(204);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        var i = n(82);
        (t.exports = n(8)(!1)).push([t.i, ".media-control-notransition {\n  transition: none !important; }\n\n.media-control[data-media-control] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  pointer-events: none; }\n  .media-control[data-media-control].dragging {\n    pointer-events: auto;\n    cursor: -webkit-grabbing !important;\n    cursor: grabbing !important;\n    cursor: url(" + i(n(94)) + "), move; }\n    .media-control[data-media-control].dragging * {\n      cursor: -webkit-grabbing !important;\n      cursor: grabbing !important;\n      cursor: url(" + i(n(94)) + '), move; }\n  .media-control[data-media-control] .media-control-background[data-background] {\n    position: absolute;\n    height: 40%;\n    width: 100%;\n    bottom: 0;\n    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));\n    transition: opacity 0.6s ease-out; }\n  .media-control[data-media-control] .media-control-icon {\n    line-height: 0;\n    letter-spacing: 0;\n    speak: none;\n    color: #fff;\n    opacity: 0.5;\n    vertical-align: middle;\n    text-align: left;\n    transition: all 0.1s ease; }\n  .media-control[data-media-control] .media-control-icon:hover {\n    color: white;\n    opacity: 0.75;\n    text-shadow: rgba(255, 255, 255, 0.8) 0 0 5px; }\n  .media-control[data-media-control].media-control-hide .media-control-background[data-background] {\n    opacity: 0; }\n  .media-control[data-media-control].media-control-hide .media-control-layer[data-controls] {\n    bottom: -50px; }\n    .media-control[data-media-control].media-control-hide .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] {\n      opacity: 0; }\n  .media-control[data-media-control] .media-control-layer[data-controls] {\n    position: absolute;\n    bottom: 7px;\n    width: 100%;\n    height: 32px;\n    font-size: 0;\n    vertical-align: middle;\n    pointer-events: auto;\n    transition: bottom 0.4s ease-out; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-left-panel[data-media-control] {\n      position: absolute;\n      top: 0;\n      left: 4px;\n      height: 100%; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-center-panel[data-media-control] {\n      height: 100%;\n      text-align: center;\n      line-height: 32px; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-right-panel[data-media-control] {\n      position: absolute;\n      top: 0;\n      right: 4px;\n      height: 100%; }\n    .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button {\n      background-color: transparent;\n      border: 0;\n      margin: 0 6px;\n      padding: 0;\n      cursor: pointer;\n      display: inline-block;\n      width: 32px;\n      height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg {\n        width: 100%;\n        height: 22px; }\n        .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg path {\n          fill: white; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button:focus {\n        outline: none; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-play] {\n        float: left;\n        height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-pause] {\n        float: left;\n        height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-stop] {\n        float: left;\n        height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-fullscreen] {\n        float: right;\n        background-color: transparent;\n        border: 0;\n        height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator] {\n        background-color: transparent;\n        border: 0;\n        cursor: default;\n        display: none;\n        float: right;\n        height: 100%; }\n        .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled {\n          display: block;\n          opacity: 1.0; }\n          .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled:hover {\n            opacity: 1.0;\n            text-shadow: none; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playpause] {\n        float: left; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playstop] {\n        float: left; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position], .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration] {\n      display: inline-block;\n      font-size: 10px;\n      color: white;\n      cursor: default;\n      line-height: 32px;\n      position: relative; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position] {\n      margin: 0 6px 0 7px; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration] {\n      color: rgba(255, 255, 255, 0.5);\n      margin-right: 6px; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration]:before {\n        content: "|";\n        margin-right: 7px; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] {\n      position: absolute;\n      top: -20px;\n      left: 0;\n      display: inline-block;\n      vertical-align: middle;\n      width: 100%;\n      height: 25px;\n      cursor: pointer; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] {\n        width: 100%;\n        height: 1px;\n        position: relative;\n        top: 12px;\n        background-color: #666666; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-1[data-seekbar] {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          background-color: #c2c2c2;\n          transition: all 0.1s ease-out; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          background-color: #005aff;\n          transition: all 0.1s ease-out; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-hover[data-seekbar] {\n          opacity: 0;\n          position: absolute;\n          top: -3px;\n          width: 5px;\n          height: 7px;\n          background-color: rgba(255, 255, 255, 0.5);\n          transition: opacity 0.1s ease; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar]:hover .bar-background[data-seekbar] .bar-hover[data-seekbar] {\n        opacity: 1; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled {\n        cursor: default; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled:hover .bar-background[data-seekbar] .bar-hover[data-seekbar] {\n          opacity: 0; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] {\n        position: absolute;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n        top: 2px;\n        left: 0;\n        width: 20px;\n        height: 20px;\n        opacity: 1;\n        transition: all 0.1s ease-out; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] .bar-scrubber-icon[data-seekbar] {\n          position: absolute;\n          left: 6px;\n          top: 6px;\n          width: 8px;\n          height: 8px;\n          border-radius: 10px;\n          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);\n          background-color: white; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] {\n      float: right;\n      display: inline-block;\n      height: 32px;\n      cursor: pointer;\n      margin: 0 6px;\n      box-sizing: border-box; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] {\n        float: left;\n        bottom: 0; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] {\n          background-color: transparent;\n          border: 0;\n          box-sizing: content-box;\n          width: 32px;\n          height: 32px;\n          opacity: 0.5; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume]:hover {\n            opacity: 0.75; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg {\n            height: 24px;\n            position: relative;\n            top: 3px; }\n            .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg path {\n              fill: white; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume].muted svg {\n            margin-left: 2px; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] {\n        float: left;\n        position: relative;\n        overflow: hidden;\n        top: 6px;\n        width: 42px;\n        height: 18px;\n        padding: 3px 0;\n        transition: width .2s ease-out; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] {\n          height: 1px;\n          position: relative;\n          top: 7px;\n          margin: 0 3px;\n          background-color: #666666; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-1[data-volume] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0;\n            height: 100%;\n            background-color: #c2c2c2;\n            transition: all 0.1s ease-out; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-2[data-volume] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0;\n            height: 100%;\n            background-color: #005aff;\n            transition: all 0.1s ease-out; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-hover[data-volume] {\n            opacity: 0;\n            position: absolute;\n            top: -3px;\n            width: 5px;\n            height: 7px;\n            background-color: rgba(255, 255, 255, 0.5);\n            transition: opacity 0.1s ease; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] {\n          position: absolute;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%);\n          top: 0px;\n          left: 0;\n          width: 20px;\n          height: 20px;\n          opacity: 1;\n          transition: all 0.1s ease-out; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] .bar-scrubber-icon[data-volume] {\n            position: absolute;\n            left: 6px;\n            top: 6px;\n            width: 8px;\n            height: 8px;\n            border-radius: 10px;\n            box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);\n            background-color: white; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume] {\n          float: left;\n          width: 4px;\n          padding-left: 2px;\n          height: 12px;\n          opacity: 0.5;\n          box-shadow: inset 2px 0 0 white;\n          transition: -webkit-transform .2s ease-out;\n          transition: transform .2s ease-out;\n          transition: transform .2s ease-out, -webkit-transform .2s ease-out; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume].fill {\n            box-shadow: inset 2px 0 0 #fff;\n            opacity: 1; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:nth-of-type(1) {\n            padding-left: 0; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:hover {\n            -webkit-transform: scaleY(1.5);\n                    transform: scaleY(1.5); }\n  .media-control[data-media-control].w320 .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume].volume-bar-hide {\n    width: 0;\n    height: 12px;\n    top: 9px;\n    padding: 0; }\n', ""])
    }, function(t, e) {
        t.exports = '<div class="media-control-background" data-background></div>\n<div class="media-control-layer" data-controls>\n  <%  var renderBar = function(name) { %>\n      <div class="bar-container" data-<%= name %>>\n        <div class="bar-background" data-<%= name %>>\n          <div class="bar-fill-1" data-<%= name %>></div>\n          <div class="bar-fill-2" data-<%= name %>></div>\n          <div class="bar-hover" data-<%= name %>></div>\n        </div>\n        <div class="bar-scrubber" data-<%= name %>>\n          <div class="bar-scrubber-icon" data-<%= name %>></div>\n        </div>\n      </div>\n  <%  }; %>\n  <%  var renderSegmentedBar = function(name, segments) {\n      segments = segments || 10; %>\n    <div class="bar-container" data-<%= name %>>\n    <% for (var i = 0; i < segments; i++) { %>\n      <div class="segmented-bar-element" data-<%= name %>></div>\n    <% } %>\n    </div>\n  <% }; %>\n  <% var renderDrawer = function(name, renderContent) { %>\n      <div class="drawer-container" data-<%= name %>>\n        <div class="drawer-icon-container" data-<%= name %>>\n          <div class="drawer-icon media-control-icon" data-<%= name %>></div>\n          <span class="drawer-text" data-<%= name %>></span>\n        </div>\n        <% renderContent(name); %>\n      </div>\n  <% }; %>\n  <% var renderIndicator = function(name) { %>\n      <div class="media-control-indicator" data-<%= name %>></div>\n  <% }; %>\n  <% var renderButton = function(name) { %>\n    <button type="button" class="media-control-button media-control-icon" data-<%= name %> aria-label="<%= name %>"></button>\n  <% }; %>\n  <%  var templates = {\n        bar: renderBar,\n        segmentedBar: renderSegmentedBar,\n      };\n      var render = function(settingsList) {\n        settingsList.forEach(function(setting) {\n          if(setting === "seekbar") {\n            renderBar(setting);\n          } else if (setting === "volume") {\n            renderDrawer(setting, settings.volumeBarTemplate ? templates[settings.volumeBarTemplate] : function(name) { return renderSegmentedBar(name); });\n          } else if (setting === "duration" || setting === "position") {\n            renderIndicator(setting);\n          } else {\n            renderButton(setting);\n          }\n        });\n      }; %>\n  <% if (settings.default && settings.default.length) { %>\n  <div class="media-control-center-panel" data-media-control>\n    <% render(settings.default); %>\n  </div>\n  <% } %>\n  <% if (settings.left && settings.left.length) { %>\n  <div class="media-control-left-panel" data-media-control>\n    <% render(settings.left); %>\n  </div>\n  <% } %>\n  <% if (settings.right && settings.right.length) { %>\n  <div class="media-control-right-panel" data-media-control>\n    <% render(settings.right); %>\n  </div>\n  <% } %>\n</div>\n'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M1.712 1.24h12.6v13.52h-12.6z"></path></svg>'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M11.5 11h-.002v1.502L7.798 10H4.5V6h3.297l3.7-2.502V4.5h.003V11zM11 4.49L7.953 6.5H5v3h2.953L11 11.51V4.49z"></path></svg>'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M9.75 11.51L6.7 9.5H3.75v-3H6.7L9.75 4.49v.664l.497.498V3.498L6.547 6H3.248v4h3.296l3.7 2.502v-2.154l-.497.5v.662zm3-5.165L12.404 6l-1.655 1.653L9.093 6l-.346.345L10.402 8 8.747 9.654l.346.347 1.655-1.653L12.403 10l.348-.346L11.097 8l1.655-1.655z"></path></svg>'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M7.156 8L4 11.156V8.5H3V13h4.5v-1H4.844L8 8.844 7.156 8zM8.5 3v1h2.657L8 7.157 8.846 8 12 4.844V7.5h1V3H8.5z"></path></svg>'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M13.5 3.344l-.844-.844L9.5 5.656V3h-1v4.5H13v-1h-2.656L13.5 3.344zM3 9.5h2.656L2.5 12.656l.844.844L6.5 10.344V13h1V8.5H3v1z"></path></svg>'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M5.375 7.062H2.637V4.26H.502v7.488h2.135V8.9h2.738v2.848h2.133V4.26H5.375v2.802zm5.97-2.81h-2.84v7.496h2.798c2.65 0 4.195-1.607 4.195-3.77v-.022c0-2.162-1.523-3.704-4.154-3.704zm2.06 3.758c0 1.21-.81 1.896-2.03 1.896h-.83V6.093h.83c1.22 0 2.03.696 2.03 1.896v.02z"></path></svg>'
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = f(n(0)),
            r = f(n(1)),
            o = f(n(3)),
            a = f(n(2)),
            s = f(n(23)),
            l = f(n(10)),
            u = f(n(13)),
            c = f(n(4)),
            d = f(n(213));

        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(214);
        var p = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o.settingsUpdate(), o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "template",
                get: function() {
                    return (0, l.default)(d.default)
                }
            }, {
                key: "name",
                get: function() {
                    return "dvr_controls"
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        "click .live-button": "click"
                    }
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        class: "dvr-controls",
                        "data-dvr-controls": ""
                    }
                }
            }]), e.prototype.bindEvents = function() {
                this.listenTo(this.core.mediaControl, c.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged), this.listenTo(this.core.mediaControl, c.default.MEDIACONTROL_RENDERED, this.settingsUpdate), this.listenTo(this.core, c.default.CORE_OPTIONS_CHANGE, this.render), this.core.getCurrentContainer() && (this.listenToOnce(this.core.getCurrentContainer(), c.default.CONTAINER_TIMEUPDATE, this.render), this.listenTo(this.core.getCurrentContainer(), c.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.dvrChanged))
            }, e.prototype.containerChanged = function() {
                this.stopListening(), this.bindEvents()
            }, e.prototype.dvrChanged = function(t) {
                this.core.getPlaybackType() === u.default.LIVE && (this.settingsUpdate(), this.core.mediaControl.$el.addClass("live"), t ? (this.core.mediaControl.$el.addClass("dvr"), this.core.mediaControl.$el.find(".media-control-indicator[data-position], .media-control-indicator[data-duration]").hide()) : this.core.mediaControl.$el.removeClass("dvr"))
            }, e.prototype.click = function() {
                var t = this.core.mediaControl,
                    e = t.container;
                e.isPlaying() || e.play(), t.$el.hasClass("dvr") && e.seek(e.getDuration())
            }, e.prototype.settingsUpdate = function() {
                var t = this;
                this.stopListening(), this.core.mediaControl.$el.removeClass("live"), this.shouldRender() && (this.render(), this.$el.click(function() {
                    return t.click()
                })), this.bindEvents()
            }, e.prototype.shouldRender = function() {
                return (void 0 === this.core.options.useDvrControls || !!this.core.options.useDvrControls) && this.core.getPlaybackType() === u.default.LIVE
            }, e.prototype.render = function() {
                return this.$el.html(this.template({
                    live: this.core.i18n.t("live"),
                    backToLive: this.core.i18n.t("back_to_live")
                })), this.shouldRender() && (this.core.mediaControl.$el.addClass("live"), this.core.mediaControl.$(".media-control-left-panel[data-media-control]").append(this.$el)), this
            }, e
        }(s.default);
        e.default = p, t.exports = e.default
    }, function(t, e) {
        t.exports = '<div class="live-info"><%= live %></div>\n<button type="button" class="live-button" aria-label="<%= backToLive %>"><%= backToLive %></button>\n'
    }, function(t, e, n) {
        var i = n(215);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, '.dvr-controls[data-dvr-controls] {\n  display: inline-block;\n  float: left;\n  color: #fff;\n  line-height: 32px;\n  font-size: 10px;\n  font-weight: bold;\n  margin-left: 6px; }\n  .dvr-controls[data-dvr-controls] .live-info {\n    cursor: default;\n    font-family: "Roboto", "Open Sans", Arial, sans-serif;\n    text-transform: uppercase; }\n    .dvr-controls[data-dvr-controls] .live-info:before {\n      content: "";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #ff0101; }\n    .dvr-controls[data-dvr-controls] .live-info.disabled {\n      opacity: 0.3; }\n      .dvr-controls[data-dvr-controls] .live-info.disabled:before {\n        background-color: #fff; }\n  .dvr-controls[data-dvr-controls] .live-button {\n    cursor: pointer;\n    outline: none;\n    display: none;\n    border: 0;\n    color: #fff;\n    background-color: transparent;\n    height: 32px;\n    padding: 0;\n    opacity: 0.7;\n    font-family: "Roboto", "Open Sans", Arial, sans-serif;\n    text-transform: uppercase;\n    transition: all 0.1s ease; }\n    .dvr-controls[data-dvr-controls] .live-button:before {\n      content: "";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #fff; }\n    .dvr-controls[data-dvr-controls] .live-button:hover {\n      opacity: 1;\n      text-shadow: rgba(255, 255, 255, 0.75) 0 0 5px; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-info {\n  display: none; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-button {\n  display: block; }\n\n.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #005aff; }\n\n.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #ff0101; }\n', ""])
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(217),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = f(n(0)),
            r = f(n(1)),
            o = f(n(3)),
            a = f(n(2)),
            s = f(n(23)),
            l = f(n(10)),
            u = f(n(4)),
            c = f(n(218)),
            d = f(n(219));

        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(220);
        var p = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n)),
                    a = n.options.closedCaptionsConfig;
                return o._title = a && a.title ? a.title : null, o._ariaLabel = a && a.ariaLabel ? a.ariaLabel : "cc-button", o._labelCb = a && a.labelCallback && "function" == typeof a.labelCallback ? a.labelCallback : function(t) {
                    return t.name
                }, o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "closed_captions"
                }
            }, {
                key: "template",
                get: function() {
                    return (0, l.default)(d.default)
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        "click [data-cc-button]": "toggleContextMenu",
                        "click [data-cc-select]": "onTrackSelect"
                    }
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        class: "cc-controls",
                        "data-cc-controls": ""
                    }
                }
            }]), e.prototype.bindEvents = function() {
                this.listenTo(this.core, u.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged), this.listenTo(this.core.mediaControl, u.default.MEDIACONTROL_RENDERED, this.render), this.listenTo(this.core.mediaControl, u.default.MEDIACONTROL_HIDE, this.hideContextMenu), this.container = this.core.getCurrentContainer(), this.container && (this.listenTo(this.container, u.default.CONTAINER_SUBTITLE_AVAILABLE, this.onSubtitleAvailable), this.listenTo(this.container, u.default.CONTAINER_SUBTITLE_CHANGED, this.onSubtitleChanged), this.listenTo(this.container, u.default.CONTAINER_STOP, this.onContainerStop))
            }, e.prototype.onContainerStop = function() {
                this.ccAvailable(!1)
            }, e.prototype.containerChanged = function() {
                this.ccAvailable(!1), this.stopListening(), this.bindEvents()
            }, e.prototype.onSubtitleAvailable = function() {
                this.renderCcButton(), this.ccAvailable(!0)
            }, e.prototype.onSubtitleChanged = function(t) {
                this.setCurrentContextMenuElement(t.id)
            }, e.prototype.onTrackSelect = function(t) {
                var e = parseInt(t.target.dataset.ccSelect, 10);
                return this.container.closedCaptionsTrackId = e, this.hideContextMenu(), t.stopPropagation(), !1
            }, e.prototype.ccAvailable = function(t) {
                var e = t ? "addClass" : "removeClass";
                this.$el[e]("available")
            }, e.prototype.toggleContextMenu = function() {
                this.$el.find("ul").toggle()
            }, e.prototype.hideContextMenu = function() {
                this.$el.find("ul").hide()
            }, e.prototype.contextMenuElement = function(t) {
                return this.$el.find("ul a" + (isNaN(t) ? "" : '[data-cc-select="' + t + '"]')).parent()
            }, e.prototype.setCurrentContextMenuElement = function(t) {
                if (this._trackId !== t) {
                    this.contextMenuElement().removeClass("current"), this.contextMenuElement(t).addClass("current");
                    var e = t > -1 ? "addClass" : "removeClass";
                    this.$ccButton[e]("enabled"), this._trackId = t
                }
            }, e.prototype.renderCcButton = function() {
                for (var t = this.container ? this.container.closedCaptionsTracks : [], e = 0; e < t.length; e++) t[e].label = this._labelCb(t[e]);
                this.$el.html(this.template({
                    ariaLabel: this._ariaLabel,
                    disabledLabel: this.core.i18n.t("disabled"),
                    title: this._title,
                    tracks: t
                })), this.$ccButton = this.$el.find("button.cc-button[data-cc-button]"), this.$ccButton.append(c.default), this.$el.append(this.style)
            }, e.prototype.render = function() {
                this.renderCcButton();
                var t = this.core.mediaControl.$el.find("button[data-fullscreen]");
                return t[0] ? this.$el.insertAfter(t) : this.core.mediaControl.$el.find(".media-control-right-panel[data-media-control]").prepend(this.$el), this
            }, e
        }(s.default);
        e.default = p, t.exports = e.default
    }, function(t, e) {
        t.exports = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 41.8" style="enable-background:new 0 0 49 41.8;" xml:space="preserve"><path d="M47.1,0H3.2C1.6,0,0,1.2,0,2.8v31.5C0,35.9,1.6,37,3.2,37h11.9l3.2,1.9l4.7,2.7c0.9,0.5,2-0.1,2-1.1V37h22.1 c1.6,0,1.9-1.1,1.9-2.7V2.8C49,1.2,48.7,0,47.1,0z M7.2,18.6c0-4.8,3.5-9.3,9.9-9.3c4.8,0,7.1,2.7,7.1,2.7l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2c0,0-2.7,2.9-7.6,2.9 C10.8,27.9,7.2,23.5,7.2,18.6z M36.9,27.9c-6.4,0-9.9-4.4-9.9-9.3c0-4.8,3.5-9.3,9.9-9.3C41.7,9.3,44,12,44,12l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2C44.5,25,41.9,27.9,36.9,27.9z"></path></svg>'
    }, function(t, e) {
        t.exports = '<button type="button" class="cc-button media-control-button media-control-icon" data-cc-button aria-label="<%= ariaLabel %>"></button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href="#" data-cc-select="-1"><%= disabledLabel %></a></li>\n  <% for (var i = 0; i < tracks.length; i++) { %>\n    <li><a href="#" data-cc-select="<%= tracks[i].id %>"><%= tracks[i].label %></a></li>\n  <% }; %>\n</ul>\n'
    }, function(t, e, n) {
        var i = n(221);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".cc-controls[data-cc-controls] {\n  float: right;\n  position: relative;\n  display: none; }\n  .cc-controls[data-cc-controls].available {\n    display: block; }\n  .cc-controls[data-cc-controls] .cc-button {\n    padding: 6px !important; }\n    .cc-controls[data-cc-controls] .cc-button.enabled {\n      display: block;\n      opacity: 1.0; }\n      .cc-controls[data-cc-controls] .cc-button.enabled:hover {\n        opacity: 1.0;\n        text-shadow: none; }\n  .cc-controls[data-cc-controls] > ul {\n    list-style-type: none;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid black;\n    display: none;\n    background-color: #e6e6e6; }\n  .cc-controls[data-cc-controls] li {\n    font-size: 10px; }\n    .cc-controls[data-cc-controls] li[data-title] {\n      background-color: #c3c2c2;\n      padding: 5px; }\n    .cc-controls[data-cc-controls] li a {\n      color: #444;\n      padding: 2px 10px;\n      display: block;\n      text-decoration: none; }\n      .cc-controls[data-cc-controls] li a:hover {\n        background-color: #555;\n        color: white; }\n        .cc-controls[data-cc-controls] li a:hover a {\n          color: white;\n          text-decoration: none; }\n    .cc-controls[data-cc-controls] li.current a {\n      color: #f00; }\n", ""])
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = f(n(0)),
            r = f(n(1)),
            o = f(n(3)),
            a = f(n(2)),
            s = f(n(35)),
            l = f(n(4)),
            u = f(n(6)),
            c = f(n(64)),
            d = f(n(95));

        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var p = (0, u.default)('link[rel="shortcut icon"]'),
            h = function(t) {
                function e(n) {
                    (0, i.default)(this, e);
                    var o = (0, r.default)(this, t.call(this, n));
                    return o._container = null, o.configure(), o
                }
                return (0, a.default)(e, t), (0, o.default)(e, [{
                    key: "name",
                    get: function() {
                        return "favicon"
                    }
                }, {
                    key: "oldIcon",
                    get: function() {
                        return p
                    }
                }]), e.prototype.configure = function() {
                    this.core.options.changeFavicon ? this.enabled || (this.stopListening(this.core, l.default.CORE_OPTIONS_CHANGE), this.enable()) : this.enabled && (this.disable(), this.listenTo(this.core, l.default.CORE_OPTIONS_CHANGE, this.configure))
                }, e.prototype.bindEvents = function() {
                    this.listenTo(this.core, l.default.CORE_OPTIONS_CHANGE, this.configure), this.listenTo(this.core, l.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged), this.core.activeContainer && this.containerChanged()
                }, e.prototype.containerChanged = function() {
                    this._container && this.stopListening(this._container), this._container = this.core.activeContainer, this.listenTo(this._container, l.default.CONTAINER_PLAY, this.setPlayIcon), this.listenTo(this._container, l.default.CONTAINER_PAUSE, this.setPauseIcon), this.listenTo(this._container, l.default.CONTAINER_STOP, this.resetIcon), this.listenTo(this._container, l.default.CONTAINER_ENDED, this.resetIcon), this.listenTo(this._container, l.default.CONTAINER_ERROR, this.resetIcon), this.resetIcon()
                }, e.prototype.disable = function() {
                    t.prototype.disable.call(this), this.resetIcon()
                }, e.prototype.destroy = function() {
                    t.prototype.destroy.call(this), this.resetIcon()
                }, e.prototype.createIcon = function(t) {
                    var e = (0, u.default)("<canvas/>");
                    e[0].width = 16, e[0].height = 16;
                    var n = e[0].getContext("2d");
                    n.fillStyle = "#000";
                    var i = (0, u.default)(t).find("path").attr("d"),
                        r = new Path2D(i);
                    n.fill(r);
                    var o = (0, u.default)('<link rel="shortcut icon" type="image/png"/>');
                    return o.attr("href", e[0].toDataURL("image/png")), o
                }, e.prototype.setPlayIcon = function() {
                    this.playIcon || (this.playIcon = this.createIcon(c.default)), this.changeIcon(this.playIcon)
                }, e.prototype.setPauseIcon = function() {
                    this.pauseIcon || (this.pauseIcon = this.createIcon(d.default)), this.changeIcon(this.pauseIcon)
                }, e.prototype.resetIcon = function() {
                    (0, u.default)('link[rel="shortcut icon"]').remove(), (0, u.default)("head").append(this.oldIcon)
                }, e.prototype.changeIcon = function(t) {
                    t && ((0, u.default)('link[rel="shortcut icon"]').remove(), (0, u.default)("head").append(t))
                }, e
            }(s.default);
        e.default = h, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(224),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = p(n(0)),
            r = p(n(1)),
            o = p(n(3)),
            a = p(n(2)),
            s = n(5),
            l = p(n(23)),
            u = p(n(10)),
            c = p(n(4)),
            d = p(n(13)),
            f = p(n(225));

        function p(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(226);
        var h = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o.hoveringOverSeekBar = !1, o.hoverPosition = null, o.duration = null, o.firstFragDateTime = null, o.actualLiveTime = !!o.mediaControl.options.actualLiveTime, o.actualLiveTime && (o.mediaControl.options.actualLiveServerTime ? o.actualLiveServerTimeDiff = (new Date).getTime() - new Date(o.mediaControl.options.actualLiveServerTime).getTime() : o.actualLiveServerTimeDiff = 0), o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "seek_time"
                }
            }, {
                key: "template",
                get: function() {
                    return (0, u.default)(f.default)
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        class: "seek-time",
                        "data-seek-time": ""
                    }
                }
            }, {
                key: "mediaControl",
                get: function() {
                    return this.core.mediaControl
                }
            }, {
                key: "mediaControlContainer",
                get: function() {
                    return this.mediaControl.container
                }
            }, {
                key: "isLiveStreamWithDvr",
                get: function() {
                    return this.mediaControlContainer && this.mediaControlContainer.getPlaybackType() === d.default.LIVE && this.mediaControlContainer.isDvrEnabled()
                }
            }, {
                key: "durationShown",
                get: function() {
                    return this.isLiveStreamWithDvr && !this.actualLiveTime
                }
            }, {
                key: "useActualLiveTime",
                get: function() {
                    return this.actualLiveTime && this.isLiveStreamWithDvr
                }
            }]), e.prototype.bindEvents = function() {
                this.listenTo(this.mediaControl, c.default.MEDIACONTROL_RENDERED, this.render), this.listenTo(this.mediaControl, c.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, this.showTime), this.listenTo(this.mediaControl, c.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, this.hideTime), this.listenTo(this.mediaControl, c.default.MEDIACONTROL_CONTAINERCHANGED, this.onContainerChanged), this.mediaControlContainer && (this.listenTo(this.mediaControlContainer, c.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.update), this.listenTo(this.mediaControlContainer, c.default.CONTAINER_TIMEUPDATE, this.updateDuration))
            }, e.prototype.onContainerChanged = function() {
                this.stopListening(), this.bindEvents()
            }, e.prototype.updateDuration = function(t) {
                this.duration = t.total, this.firstFragDateTime = t.firstFragDateTime, this.update()
            }, e.prototype.showTime = function(t) {
                this.hoveringOverSeekBar = !0, this.calculateHoverPosition(t), this.update()
            }, e.prototype.hideTime = function() {
                this.hoveringOverSeekBar = !1, this.update()
            }, e.prototype.calculateHoverPosition = function(t) {
                var e = t.pageX - this.mediaControl.$seekBarContainer.offset().left;
                this.hoverPosition = Math.min(1, Math.max(e / this.mediaControl.$seekBarContainer.width(), 0))
            }, e.prototype.getSeekTime = function() {
                var t = void 0,
                    e = void 0,
                    n = void 0,
                    i = void 0;
                return this.useActualLiveTime ? (this.firstFragDateTime ? (i = new Date(this.firstFragDateTime), (n = new Date(this.firstFragDateTime)).setHours(0, 0, 0, 0), e = (i.getTime() - n.getTime()) / 1e3 + this.duration) : (n = new Date((new Date).getTime() - this.actualLiveServerTimeDiff), e = ((i = new Date(n)) - n.setHours(0, 0, 0, 0)) / 1e3), (t = e - this.duration + this.hoverPosition * this.duration) < 0 && (t += 86400)) : t = this.hoverPosition * this.duration, {
                    seekTime: t,
                    secondsSinceMidnight: e
                }
            }, e.prototype.update = function() {
                if (this.rendered)
                    if (this.shouldBeVisible()) {
                        var t = this.getSeekTime(),
                            e = (0, s.formatTime)(t.seekTime, this.useActualLiveTime);
                        if (e !== this.displayedSeekTime && (this.$seekTimeEl.text(e), this.displayedSeekTime = e), this.durationShown) {
                            this.$durationEl.show();
                            var n = (0, s.formatTime)(this.actualLiveTime ? t.secondsSinceMidnight : this.duration, this.actualLiveTime);
                            n !== this.displayedDuration && (this.$durationEl.text(n), this.displayedDuration = n)
                        } else this.$durationEl.hide();
                        this.$el.show();
                        var i = this.mediaControl.$seekBarContainer.width(),
                            r = this.$el.width(),
                            o = this.hoverPosition * i;
                        o -= r / 2, o = Math.max(0, Math.min(o, i - r)), this.$el.css("left", o)
                    } else this.$el.hide(), this.$el.css("left", "-100%")
            }, e.prototype.shouldBeVisible = function() {
                return this.mediaControlContainer && this.mediaControlContainer.settings.seekEnabled && this.hoveringOverSeekBar && null !== this.hoverPosition && null !== this.duration
            }, e.prototype.render = function() {
                this.rendered = !0, this.displayedDuration = null, this.displayedSeekTime = null, this.$el.html(this.template()), this.$el.hide(), this.mediaControl.$el.append(this.el), this.$seekTimeEl = this.$el.find("[data-seek-time]"), this.$durationEl = this.$el.find("[data-duration]"), this.$durationEl.hide(), this.update()
            }, e
        }(l.default);
        e.default = h, t.exports = e.default
    }, function(t, e) {
        t.exports = "<span data-seek-time></span>\n<span data-duration></span>\n"
    }, function(t, e, n) {
        var i = n(227);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, '.seek-time[data-seek-time] {\n  position: absolute;\n  white-space: nowrap;\n  height: 20px;\n  line-height: 20px;\n  font-size: 0;\n  left: -100%;\n  bottom: 55px;\n  background-color: rgba(2, 2, 2, 0.5);\n  z-index: 9999;\n  transition: opacity 0.1s ease; }\n  .seek-time[data-seek-time].hidden[data-seek-time] {\n    opacity: 0; }\n  .seek-time[data-seek-time] [data-seek-time] {\n    display: inline-block;\n    color: white;\n    font-size: 10px;\n    padding-left: 7px;\n    padding-right: 7px;\n    vertical-align: top; }\n  .seek-time[data-seek-time] [data-duration] {\n    display: inline-block;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 10px;\n    padding-right: 7px;\n    vertical-align: top; }\n    .seek-time[data-seek-time] [data-duration]:before {\n      content: "|";\n      margin-right: 7px; }\n', ""])
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = u(n(0)),
            r = u(n(3)),
            o = u(n(1)),
            a = u(n(2)),
            s = u(n(35)),
            l = u(n(4));

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var c = function(t) {
            function e() {
                return (0, i.default)(this, e), (0, o.default)(this, t.apply(this, arguments))
            }
            return (0, a.default)(e, t), e.prototype.bindEvents = function() {
                this.listenTo(this.core, l.default.CORE_CONTAINERS_CREATED, this.onContainersCreated)
            }, e.prototype.onContainersCreated = function() {
                var t = this.core.containers.filter(function(t) {
                    return "no_op" !== t.playback.name
                })[0] || this.core.containers[0];
                t && this.core.containers.forEach(function(e) {
                    e !== t && e.destroy()
                })
            }, (0, r.default)(e, [{
                key: "name",
                get: function() {
                    return "sources"
                }
            }]), e
        }(s.default);
        e.default = c, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = c(n(0)),
            r = c(n(3)),
            o = c(n(1)),
            a = c(n(2)),
            s = c(n(4)),
            l = c(n(35)),
            u = n(5);

        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var d = function(t) {
            function e() {
                return (0, i.default)(this, e), (0, o.default)(this, t.apply(this, arguments))
            }
            return (0, a.default)(e, t), e.prototype.bindEvents = function() {
                this.listenTo(this.core, s.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
                var t = this.core.activeContainer;
                t && (this.listenTo(t, s.default.CONTAINER_ENDED, this.ended), this.listenTo(t, s.default.CONTAINER_STOP, this.ended))
            }, e.prototype.containerChanged = function() {
                this.stopListening(), this.bindEvents()
            }, e.prototype.ended = function() {
                (void 0 === this.core.options.exitFullscreenOnEnd || this.core.options.exitFullscreenOnEnd) && u.Fullscreen.isFullscreen() && this.core.toggleFullscreen()
            }, (0, r.default)(e, [{
                key: "name",
                get: function() {
                    return "end_video"
                }
            }]), e
        }(l.default);
        e.default = d, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = u(n(0)),
            r = u(n(1)),
            o = u(n(3)),
            a = u(n(2)),
            s = n(5),
            l = u(n(6));

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var c = function(t) {
            function e(n) {
                (0, i.default)(this, e);
                var o = (0, r.default)(this, t.call(this, n));
                return o._initializeMessages(), o
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "strings"
                }
            }]), e.prototype.t = function(t) {
                var e = this._language(),
                    n = this._messages.cn;//改：默认cn
                return (e && this._messages[e] || n)[t] || n[t] || t
            }, e.prototype._language = function() {
                return this.core.options.language || (0, s.getBrowserLanguage)()
            }, e.prototype._initializeMessages = function() {
                this._messages = l.default.extend(!0, {
                    en: {
                        live: "live",
                        back_to_live: "back to live",
                        disabled: "Disabled",
                        playback_not_supported: "Your browser does not support the playback of this video. Please try using a different browser.",
                        default_error_title: "Could not play video.",
                        default_error_message: "There was a problem trying to load the video."
                    },
                    cn: {//改：新增中文包
                        live: "直播",
                        back_to_live: "返回直播",
                        disabled: "禁止",
                        playback_not_supported: "不支持当前浏览器，请尝试更换其它浏览器。",
                        default_error_title: "无法播放视频",
                        default_error_message: "视频无法加载"
                    }
                }, this.core.options.strings || {}), this._messages["cn-ZH"] = this._messages.cn, this._messages["en-US"] = this._messages.en
            }, e
        }(u(n(35)).default);
        e.default = c, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = n(232),
            o = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.default = o.default, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = p(n(0)),
            r = p(n(1)),
            o = p(n(3)),
            a = p(n(2)),
            s = p(n(4)),
            l = p(n(23)),
            u = p(n(10)),
            c = p(n(34)),
            d = p(n(233)),
            f = p(n(234));

        function p(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(235);
        var h = function(t) {
            function e(n) {
                var o;
                (0, i.default)(this, e);
                var a = (0, r.default)(this, t.call(this, n));
                return a.options.disableErrorScreen ? (o = a.disable(), (0, r.default)(a, o)) : a
            }
            return (0, a.default)(e, t), (0, o.default)(e, [{
                key: "name",
                get: function() {
                    return "error_screen"
                }
            }, {
                key: "template",
                get: function() {
                    return (0, u.default)(f.default)
                }
            }, {
                key: "container",
                get: function() {
                    return this.core.getCurrentContainer()
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        class: "player-error-screen",
                        "data-error-screen": ""
                    }
                }
            }]), e.prototype.bindEvents = function() {
                this.listenTo(this.core, s.default.ERROR, this.onError), this.listenTo(this.core, s.default.CORE_ACTIVE_CONTAINER_CHANGED, this.onContainerChanged)
            }, e.prototype.bindReload = function() {
                this.reloadButton = this.$el.find(".player-error-screen__reload"), this.reloadButton && this.reloadButton.on("click", this.reload.bind(this))
            }, e.prototype.reload = function() {
                var t = this;
                this.listenToOnce(this.core, s.default.CORE_READY, function() {
                    return t.container.play()
                }), this.core.load(this.options.sources, this.options.mimeType), this.unbindReload()
            }, e.prototype.unbindReload = function() {
                this.reloadButton && this.reloadButton.off("click")
            }, e.prototype.onContainerChanged = function() {
                this.err = null, this.unbindReload(), this.hide()
            }, e.prototype.onError = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.level === c.default.Levels.FATAL && (this.err = t, this.container.disableMediaControl(), this.container.stop(), this.show())
            }, e.prototype.show = function() {
                this.render(), this.$el.show()
            }, e.prototype.hide = function() {
                this.$el.hide()
            }, e.prototype.render = function() {
                if (this.err) return this.$el.html(this.template({
                    title: this.err.UI.title,
                    message: this.err.UI.message,
                    code: this.err.code,
                    icon: this.err.UI.icon || "",
                    reloadIcon: d.default
                })), this.core.$el.append(this.el), this.bindReload(), this
            }, e
        }(l.default);
        e.default = h, t.exports = e.default
    }, function(t, e) {
        t.exports = '<svg fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'
    }, function(t, e) {
        t.exports = '<div class="player-error-screen__content" data-error-screen>\n  <% if (icon) { %>\n  <div class="player-error-screen__icon" data-error-screen><%= icon %></div>\n  <% } %>\n  <div class="player-error-screen__title" data-error-screen><%= title %></div>\n  <div class="player-error-screen__message" data-error-screen><%= message %></div>\n  <div class="player-error-screen__code" data-error-screen>Error code: <%= code %></div>\n  <div class="player-error-screen__reload" data-error-screen><%= reloadIcon %></div>\n</div>\n'
    }, function(t, e, n) {
        var i = n(236);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var r = {
            singleton: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(9)(i, r);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, "div.player-error-screen {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #CCCACA;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 2000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  div.player-error-screen__content[data-error-screen] {\n    font-size: 14px;\n    color: #CCCACA;\n    margin-top: 45px; }\n  div.player-error-screen__title[data-error-screen] {\n    font-weight: bold;\n    line-height: 30px;\n    font-size: 18px; }\n  div.player-error-screen__message[data-error-screen] {\n    width: 90%;\n    margin: 0 auto; }\n  div.player-error-screen__code[data-error-screen] {\n    font-size: 13px;\n    margin-top: 15px; }\n  div.player-error-screen__reload {\n    cursor: pointer;\n    width: 30px;\n    margin: 15px auto 0; }\n", ""])
    }])
});
//# sourceMappingURL=clappr.plainhtml5.js.map