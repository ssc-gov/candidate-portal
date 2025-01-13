(self.webpackChunkcandidate_portal = self.webpackChunkcandidate_portal || []).push([
    [711], {
        98246: (D, i, c) => {
            "use strict";

            function o(l, h, f, y) {
                var O, I = arguments.length,
                    g = I < 3 ? h : null === y ? y = Object.getOwnPropertyDescriptor(h, f) : y;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(l, h, f, y);
                else
                    for (var j = l.length - 1; j >= 0; j--)(O = l[j]) && (g = (I < 3 ? O(g) : I > 3 ? O(h, f, g) : O(h, f)) || g);
                return I > 3 && g && Object.defineProperty(h, f, g), g
            }
            c.d(i, {
                F5: () => G,
                TT: () => B,
                Jk: () => A,
                zF: () => R
            });
            var m = c(94650),
                C = c(3259);
            const L = ["qrcElement"];
            var B = (() => {
                    return (l = B || (B = {})).URL = "url", l.IMG = "img", l.CANVAS = "canvas", B;
                    var l
                })(),
                A = (() => {
                    return (l = A || (A = {})).LOW = "L", l.MEDIUM = "M", l.QUARTILE = "Q", l.HIGH = "H", A;
                    var l
                })();
            const _ = {
                elementType: B.URL,
                cssClass: "qrcode",
                value: "https://www.techiediaries.com",
                version: "",
                errorCorrectionLevel: A.MEDIUM,
                margin: 4,
                scale: 4,
                width: 10,
                colorDark: "#000",
                colorLight: "#FFF"
            };
            let R = (() => {
                    let l = class {
                        constructor(f) {
                            this.renderer = f, this.elementType = _.elementType, this.cssClass = _.cssClass, this.value = _.value, this.version = _.version, this.errorCorrectionLevel = _.errorCorrectionLevel, this.margin = _.margin, this.scale = _.scale, this.width = _.width, this.colorDark = _.colorDark, this.colorLight = _.colorLight
                        }
                        ngOnChanges() {
                            this.createQRCode()
                        }
                        createQRCode() {
                            if (!this.value) return;
                            let f;
                            this.elementType === B.CANVAS ? (f = this.renderer.createElement("canvas"), this.toCanvas(f).then(() => {
                                this.renderElement(f)
                            }).catch(y => {
                                this.removeElementChildren(), console.error(y)
                            })) : (f = this.renderer.createElement("img"), this.toDataURL().then(y => {
                                f.setAttribute("src", y), this.alt && f.setAttribute("alt", this.alt), this.renderElement(f)
                            }).catch(y => {
                                this.removeElementChildren(), console.error(y)
                            }))
                        }
                        toDataURL() {
                            return C.toDataURL(this.value, {
                                version: this.version,
                                errorCorrectionLevel: this.errorCorrectionLevel,
                                margin: this.margin,
                                scale: this.scale,
                                width: this.width,
                                color: {
                                    dark: this.colorDark,
                                    light: this.colorLight
                                }
                            })
                        }
                        toCanvas(f) {
                            return C.toCanvas(f, this.value, {
                                version: this.version,
                                errorCorrectionLevel: this.errorCorrectionLevel,
                                margin: this.margin,
                                scale: this.scale,
                                width: this.width,
                                color: {
                                    dark: this.colorDark,
                                    light: this.colorLight
                                }
                            })
                        }
                        renderElement(f) {
                            this.removeElementChildren(), this.renderer.appendChild(this.qrcElement.nativeElement, f)
                        }
                        removeElementChildren() {
                            for (const f of this.qrcElement.nativeElement.childNodes) this.renderer.removeChild(this.qrcElement.nativeElement, f)
                        }
                    };
                    return l.\u0275fac = function(f) {
                        return new(f || l)(m.Y36(m.Qsj))
                    }, l.\u0275cmp = m.Xpm({
                        type: l,
                        selectors: [
                            ["ngx-qrcode"]
                        ],
                        viewQuery: function(f, y) {
                            if (1 & f && m.Gf(L, 5), 2 & f) {
                                let I;
                                m.iGM(I = m.CRH()) && (y.qrcElement = I.first)
                            }
                        },
                        inputs: {
                            elementType: "elementType",
                            cssClass: "cssClass",
                            value: "value",
                            version: "version",
                            errorCorrectionLevel: "errorCorrectionLevel",
                            margin: "margin",
                            scale: "scale",
                            width: "width",
                            colorDark: "colorDark",
                            colorLight: "colorLight",
                            alt: "alt"
                        },
                        features: [m.TTD],
                        decls: 2,
                        vars: 2,
                        consts: [
                            ["qrcElement", ""]
                        ],
                        template: function(f, y) {
                            1 & f && m._UZ(0, "div", null, 0), 2 & f && m.Tol(y.cssClass)
                        },
                        encapsulation: 2,
                        changeDetection: 0
                    }), o([(0, m.IIB)()], l.prototype, "elementType", void 0), o([(0, m.IIB)()], l.prototype, "cssClass", void 0), o([(0, m.IIB)()], l.prototype, "alt", void 0), o([(0, m.IIB)()], l.prototype, "value", void 0), o([(0, m.IIB)()], l.prototype, "version", void 0), o([(0, m.IIB)()], l.prototype, "errorCorrectionLevel", void 0), o([(0, m.IIB)()], l.prototype, "margin", void 0), o([(0, m.IIB)()], l.prototype, "scale", void 0), o([(0, m.IIB)()], l.prototype, "width", void 0), o([(0, m.IIB)()], l.prototype, "colorDark", void 0), o([(0, m.IIB)()], l.prototype, "colorLight", void 0), o([(0, m.i9L)("qrcElement")], l.prototype, "qrcElement", void 0), l
                })(),
                G = (() => {
                    let l = class {};
                    return l.\u0275fac = function(f) {
                        return new(f || l)
                    }, l.\u0275mod = m.oAB({
                        type: l
                    }), l.\u0275inj = m.cJS({}), l
                })()
        },
        74901: D => {
            "use strict";
            var i = {
                single_source_shortest_paths: function(c, n, r) {
                    var t = {},
                        e = {};
                    e[n] = 0;
                    var s, u, a, p, T, d, o = i.PriorityQueue.make();
                    for (o.push(n, 0); !o.empty();)
                        for (a in p = (s = o.pop()).cost, T = c[u = s.value] || {}) T.hasOwnProperty(a) && (d = p + T[a], (typeof e[a] > "u" || e[a] > d) && (e[a] = d, o.push(a, d), t[a] = u));
                    if (typeof r < "u" && typeof e[r] > "u") {
                        var k = ["Could not find a path from ", n, " to ", r, "."].join("");
                        throw new Error(k)
                    }
                    return t
                },
                extract_shortest_path_from_predecessor_list: function(c, n) {
                    for (var r = [], t = n; t;) r.push(t), t = c[t];
                    return r.reverse(), r
                },
                find_path: function(c, n, r) {
                    var t = i.single_source_shortest_paths(c, n, r);
                    return i.extract_shortest_path_from_predecessor_list(t, r)
                },
                PriorityQueue: {
                    make: function(c) {
                        var t, n = i.PriorityQueue,
                            r = {};
                        for (t in c = c || {}, n) n.hasOwnProperty(t) && (r[t] = n[t]);
                        return r.queue = [], r.sorter = c.sorter || n.default_sorter, r
                    },
                    default_sorter: function(c, n) {
                        return c.cost - n.cost
                    },
                    push: function(c, n) {
                        this.queue.push({
                            value: c,
                            cost: n
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            D.exports = i
        },
        38419: D => {
            "use strict";
            D.exports = function(c) {
                for (var n = [], r = c.length, t = 0; t < r; t++) {
                    var e = c.charCodeAt(t);
                    if (e >= 55296 && e <= 56319 && r > t + 1) {
                        var o = c.charCodeAt(t + 1);
                        o >= 56320 && o <= 57343 && (e = 1024 * (e - 55296) + o - 56320 + 65536, t += 1)
                    }
                    e < 128 ? n.push(e) : e < 2048 ? (n.push(e >> 6 | 192), n.push(63 & e | 128)) : e < 55296 || e >= 57344 && e < 65536 ? (n.push(e >> 12 | 224), n.push(e >> 6 & 63 | 128), n.push(63 & e | 128)) : e >= 65536 && e <= 1114111 ? (n.push(e >> 18 | 240), n.push(e >> 12 & 63 | 128), n.push(e >> 6 & 63 | 128), n.push(63 & e | 128)) : n.push(239, 191, 189)
                }
                return new Uint8Array(n).buffer
            }
        },
        3259: (D, i, c) => {
            const n = c(88695),
                r = c(71465),
                t = c(23210),
                e = c(22334);

            function o(s, u, a, p, T) {
                const F = [].slice.call(arguments, 1),
                    d = F.length,
                    E = "function" == typeof F[d - 1];
                if (!E && !n()) throw new Error("Callback required as last argument");
                if (!E) {
                    if (d < 1) throw new Error("Too few arguments provided");
                    return 1 === d ? (a = u, u = p = void 0) : 2 === d && !u.getContext && (p = a, a = u, u = void 0), new Promise(function(w, k) {
                        try {
                            const z = r.create(a, p);
                            w(s(z, u, p))
                        } catch (z) {
                            k(z)
                        }
                    })
                }
                if (d < 2) throw new Error("Too few arguments provided");
                2 === d ? (T = a, a = u, u = p = void 0) : 3 === d && (u.getContext && typeof T > "u" ? (T = p, p = void 0) : (T = p, p = a, a = u, u = void 0));
                try {
                    const w = r.create(a, p);
                    T(null, s(w, u, p))
                } catch (w) {
                    T(w)
                }
            }
            i.create = r.create, i.toCanvas = o.bind(null, t.render), i.toDataURL = o.bind(null, t.renderToDataURL), i.toString = o.bind(null, function(s, u, a) {
                return e.render(s, a)
            })
        },
        88695: D => {
            D.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        46221: (D, i, c) => {
            const n = c(34792).getSymbolSize;
            i.getRowColCoords = function(t) {
                if (1 === t) return [];
                const e = Math.floor(t / 7) + 2,
                    o = n(t),
                    s = 145 === o ? 26 : 2 * Math.ceil((o - 13) / (2 * e - 2)),
                    u = [o - 7];
                for (let a = 1; a < e - 1; a++) u[a] = u[a - 1] - s;
                return u.push(6), u.reverse()
            }, i.getPositions = function(t) {
                const e = [],
                    o = i.getRowColCoords(t),
                    s = o.length;
                for (let u = 0; u < s; u++)
                    for (let a = 0; a < s; a++) 0 === u && 0 === a || 0 === u && a === s - 1 || u === s - 1 && 0 === a || e.push([o[u], o[a]]);
                return e
            }
        },
        32424: (D, i, c) => {
            const n = c(64016),
                r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function t(e) {
                this.mode = n.ALPHANUMERIC, this.data = e
            }
            t.getBitsLength = function(o) {
                return 11 * Math.floor(o / 2) + o % 2 * 6
            }, t.prototype.getLength = function() {
                return this.data.length
            }, t.prototype.getBitsLength = function() {
                return t.getBitsLength(this.data.length)
            }, t.prototype.write = function(o) {
                let s;
                for (s = 0; s + 2 <= this.data.length; s += 2) {
                    let u = 45 * r.indexOf(this.data[s]);
                    u += r.indexOf(this.data[s + 1]), o.put(u, 11)
                }
                this.data.length % 2 && o.put(r.indexOf(this.data[s]), 6)
            }, D.exports = t
        },
        52118: D => {
            function i() {
                this.buffer = [], this.length = 0
            }
            i.prototype = {
                get: function(c) {
                    const n = Math.floor(c / 8);
                    return 1 == (this.buffer[n] >>> 7 - c % 8 & 1)
                },
                put: function(c, n) {
                    for (let r = 0; r < n; r++) this.putBit(1 == (c >>> n - r - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(c) {
                    const n = Math.floor(this.length / 8);
                    this.buffer.length <= n && this.buffer.push(0), c && (this.buffer[n] |= 128 >>> this.length % 8), this.length++
                }
            }, D.exports = i
        },
        34425: D => {
            function i(c) {
                if (!c || c < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = c, this.data = new Uint8Array(c * c), this.reservedBit = new Uint8Array(c * c)
            }
            i.prototype.set = function(c, n, r, t) {
                const e = c * this.size + n;
                this.data[e] = r, t && (this.reservedBit[e] = !0)
            }, i.prototype.get = function(c, n) {
                return this.data[c * this.size + n]
            }, i.prototype.xor = function(c, n, r) {
                this.data[c * this.size + n] ^= r
            }, i.prototype.isReserved = function(c, n) {
                return this.reservedBit[c * this.size + n]
            }, D.exports = i
        },
        85663: (D, i, c) => {
            const n = c(38419),
                r = c(64016);

            function t(e) {
                this.mode = r.BYTE, "string" == typeof e && (e = n(e)), this.data = new Uint8Array(e)
            }
            t.getBitsLength = function(o) {
                return 8 * o
            }, t.prototype.getLength = function() {
                return this.data.length
            }, t.prototype.getBitsLength = function() {
                return t.getBitsLength(this.data.length)
            }, t.prototype.write = function(e) {
                for (let o = 0, s = this.data.length; o < s; o++) e.put(this.data[o], 8)
            }, D.exports = t
        },
        14655: (D, i, c) => {
            const n = c(82259),
                r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                t = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            i.getBlocksCount = function(o, s) {
                switch (s) {
                    case n.L:
                        return r[4 * (o - 1) + 0];
                    case n.M:
                        return r[4 * (o - 1) + 1];
                    case n.Q:
                        return r[4 * (o - 1) + 2];
                    case n.H:
                        return r[4 * (o - 1) + 3];
                    default:
                        return
                }
            }, i.getTotalCodewordsCount = function(o, s) {
                switch (s) {
                    case n.L:
                        return t[4 * (o - 1) + 0];
                    case n.M:
                        return t[4 * (o - 1) + 1];
                    case n.Q:
                        return t[4 * (o - 1) + 2];
                    case n.H:
                        return t[4 * (o - 1) + 3];
                    default:
                        return
                }
            }
        },
        82259: (D, i) => {
            i.L = {
                bit: 1
            }, i.M = {
                bit: 0
            }, i.Q = {
                bit: 3
            }, i.H = {
                bit: 2
            }, i.isValid = function(r) {
                return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4
            }, i.from = function(r, t) {
                if (i.isValid(r)) return r;
                try {
                    return function c(n) {
                        if ("string" != typeof n) throw new Error("Param is not a string");
                        switch (n.toLowerCase()) {
                            case "l":
                            case "low":
                                return i.L;
                            case "m":
                            case "medium":
                                return i.M;
                            case "q":
                            case "quartile":
                                return i.Q;
                            case "h":
                            case "high":
                                return i.H;
                            default:
                                throw new Error("Unknown EC Level: " + n)
                        }
                    }(r)
                } catch {
                    return t
                }
            }
        },
        43114: (D, i, c) => {
            const n = c(34792).getSymbolSize;
            i.getPositions = function(e) {
                const o = n(e);
                return [
                    [0, 0],
                    [o - 7, 0],
                    [0, o - 7]
                ]
            }
        },
        17078: (D, i, c) => {
            const n = c(34792),
                e = n.getBCHDigit(1335);
            i.getEncodedBits = function(s, u) {
                const a = s.bit << 3 | u;
                let p = a << 10;
                for (; n.getBCHDigit(p) - e >= 0;) p ^= 1335 << n.getBCHDigit(p) - e;
                return 21522 ^ (a << 10 | p)
            }
        },
        45339: (D, i) => {
            const c = new Uint8Array(512),
                n = new Uint8Array(256);
            (function() {
                let t = 1;
                for (let e = 0; e < 255; e++) c[e] = t, n[t] = e, t <<= 1, 256 & t && (t ^= 285);
                for (let e = 255; e < 512; e++) c[e] = c[e - 255]
            })(), i.log = function(t) {
                if (t < 1) throw new Error("log(" + t + ")");
                return n[t]
            }, i.exp = function(t) {
                return c[t]
            }, i.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : c[n[t] + n[e]]
            }
        },
        80449: (D, i, c) => {
            const n = c(64016),
                r = c(34792);

            function t(e) {
                this.mode = n.KANJI, this.data = e
            }
            t.getBitsLength = function(o) {
                return 13 * o
            }, t.prototype.getLength = function() {
                return this.data.length
            }, t.prototype.getBitsLength = function() {
                return t.getBitsLength(this.data.length)
            }, t.prototype.write = function(e) {
                let o;
                for (o = 0; o < this.data.length; o++) {
                    let s = r.toSJIS(this.data[o]);
                    if (s >= 33088 && s <= 40956) s -= 33088;
                    else {
                        if (!(s >= 57408 && s <= 60351)) throw new Error("Invalid SJIS character: " + this.data[o] + "\nMake sure your charset is UTF-8");
                        s -= 49472
                    }
                    s = 192 * (s >>> 8 & 255) + (255 & s), e.put(s, 13)
                }
            }, D.exports = t
        },
        33667: (D, i) => {
            i.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };

            function n(r, t, e) {
                switch (r) {
                    case i.Patterns.PATTERN000:
                        return (t + e) % 2 == 0;
                    case i.Patterns.PATTERN001:
                        return t % 2 == 0;
                    case i.Patterns.PATTERN010:
                        return e % 3 == 0;
                    case i.Patterns.PATTERN011:
                        return (t + e) % 3 == 0;
                    case i.Patterns.PATTERN100:
                        return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0;
                    case i.Patterns.PATTERN101:
                        return t * e % 2 + t * e % 3 == 0;
                    case i.Patterns.PATTERN110:
                        return (t * e % 2 + t * e % 3) % 2 == 0;
                    case i.Patterns.PATTERN111:
                        return (t * e % 3 + (t + e) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + r)
                }
            }
            i.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, i.from = function(t) {
                return i.isValid(t) ? parseInt(t, 10) : void 0
            }, i.getPenaltyN1 = function(t) {
                const e = t.size;
                let o = 0,
                    s = 0,
                    u = 0,
                    a = null,
                    p = null;
                for (let T = 0; T < e; T++) {
                    s = u = 0, a = p = null;
                    for (let F = 0; F < e; F++) {
                        let d = t.get(T, F);
                        d === a ? s++ : (s >= 5 && (o += s - 5 + 3), a = d, s = 1), d = t.get(F, T), d === p ? u++ : (u >= 5 && (o += u - 5 + 3), p = d, u = 1)
                    }
                    s >= 5 && (o += s - 5 + 3), u >= 5 && (o += u - 5 + 3)
                }
                return o
            }, i.getPenaltyN2 = function(t) {
                const e = t.size;
                let o = 0;
                for (let s = 0; s < e - 1; s++)
                    for (let u = 0; u < e - 1; u++) {
                        const a = t.get(s, u) + t.get(s, u + 1) + t.get(s + 1, u) + t.get(s + 1, u + 1);
                        (4 === a || 0 === a) && o++
                    }
                return 3 * o
            }, i.getPenaltyN3 = function(t) {
                const e = t.size;
                let o = 0,
                    s = 0,
                    u = 0;
                for (let a = 0; a < e; a++) {
                    s = u = 0;
                    for (let p = 0; p < e; p++) s = s << 1 & 2047 | t.get(a, p), p >= 10 && (1488 === s || 93 === s) && o++, u = u << 1 & 2047 | t.get(p, a), p >= 10 && (1488 === u || 93 === u) && o++
                }
                return 40 * o
            }, i.getPenaltyN4 = function(t) {
                let e = 0;
                const o = t.data.length;
                for (let u = 0; u < o; u++) e += t.data[u];
                return 10 * Math.abs(Math.ceil(100 * e / o / 5) - 10)
            }, i.applyMask = function(t, e) {
                const o = e.size;
                for (let s = 0; s < o; s++)
                    for (let u = 0; u < o; u++) e.isReserved(u, s) || e.xor(u, s, n(t, u, s))
            }, i.getBestMask = function(t, e) {
                const o = Object.keys(i.Patterns).length;
                let s = 0,
                    u = 1 / 0;
                for (let a = 0; a < o; a++) {
                    e(a), i.applyMask(a, t);
                    const p = i.getPenaltyN1(t) + i.getPenaltyN2(t) + i.getPenaltyN3(t) + i.getPenaltyN4(t);
                    i.applyMask(a, t), p < u && (u = p, s = a)
                }
                return s
            }
        },
        64016: (D, i, c) => {
            const n = c(94406),
                r = c(2699);
            i.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, i.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, i.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, i.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, i.MIXED = {
                bit: -1
            }, i.getCharCountIndicator = function(o, s) {
                if (!o.ccBits) throw new Error("Invalid mode: " + o);
                if (!n.isValid(s)) throw new Error("Invalid version: " + s);
                return s >= 1 && s < 10 ? o.ccBits[0] : s < 27 ? o.ccBits[1] : o.ccBits[2]
            }, i.getBestModeForData = function(o) {
                return r.testNumeric(o) ? i.NUMERIC : r.testAlphanumeric(o) ? i.ALPHANUMERIC : r.testKanji(o) ? i.KANJI : i.BYTE
            }, i.toString = function(o) {
                if (o && o.id) return o.id;
                throw new Error("Invalid mode")
            }, i.isValid = function(o) {
                return o && o.bit && o.ccBits
            }, i.from = function(o, s) {
                if (i.isValid(o)) return o;
                try {
                    return function t(e) {
                        if ("string" != typeof e) throw new Error("Param is not a string");
                        switch (e.toLowerCase()) {
                            case "numeric":
                                return i.NUMERIC;
                            case "alphanumeric":
                                return i.ALPHANUMERIC;
                            case "kanji":
                                return i.KANJI;
                            case "byte":
                                return i.BYTE;
                            default:
                                throw new Error("Unknown mode: " + e)
                        }
                    }(o)
                } catch {
                    return s
                }
            }
        },
        97783: (D, i, c) => {
            const n = c(64016);

            function r(t) {
                this.mode = n.NUMERIC, this.data = t.toString()
            }
            r.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, r.prototype.getLength = function() {
                return this.data.length
            }, r.prototype.getBitsLength = function() {
                return r.getBitsLength(this.data.length)
            }, r.prototype.write = function(e) {
                let o, s, u;
                for (o = 0; o + 3 <= this.data.length; o += 3) s = this.data.substr(o, 3), u = parseInt(s, 10), e.put(u, 10);
                const a = this.data.length - o;
                a > 0 && (s = this.data.substr(o), u = parseInt(s, 10), e.put(u, 3 * a + 1))
            }, D.exports = r
        },
        61106: (D, i, c) => {
            const n = c(45339);
            i.mul = function(t, e) {
                const o = new Uint8Array(t.length + e.length - 1);
                for (let s = 0; s < t.length; s++)
                    for (let u = 0; u < e.length; u++) o[s + u] ^= n.mul(t[s], e[u]);
                return o
            }, i.mod = function(t, e) {
                let o = new Uint8Array(t);
                for (; o.length - e.length >= 0;) {
                    const s = o[0];
                    for (let a = 0; a < e.length; a++) o[a] ^= n.mul(e[a], s);
                    let u = 0;
                    for (; u < o.length && 0 === o[u];) u++;
                    o = o.slice(u)
                }
                return o
            }, i.generateECPolynomial = function(t) {
                let e = new Uint8Array([1]);
                for (let o = 0; o < t; o++) e = i.mul(e, new Uint8Array([1, n.exp(o)]));
                return e
            }
        },
        71465: (D, i, c) => {
            const n = c(34792),
                r = c(82259),
                t = c(52118),
                e = c(34425),
                o = c(46221),
                s = c(43114),
                u = c(33667),
                a = c(14655),
                p = c(12636),
                T = c(42088),
                F = c(17078),
                d = c(64016),
                E = c(62033);

            function N(b, v, m) {
                const C = b.size,
                    L = F.getEncodedBits(v, m);
                let B, A;
                for (B = 0; B < 15; B++) A = 1 == (L >> B & 1), b.set(B < 6 ? B : B < 8 ? B + 1 : C - 15 + B, 8, A, !0), b.set(8, B < 8 ? C - B - 1 : B < 9 ? 15 - B - 1 + 1 : 15 - B - 1, A, !0);
                b.set(C - 8, 8, 1, !0)
            }

            function x(b, v, m, C) {
                let L;
                if (Array.isArray(b)) L = E.fromArray(b);
                else {
                    if ("string" != typeof b) throw new Error("Invalid data"); {
                        let G = v;
                        if (!G) {
                            const l = E.rawSplit(b);
                            G = T.getBestVersionForData(l, m)
                        }
                        L = E.fromString(b, G || 40)
                    }
                }
                const B = T.getBestVersionForData(L, m);
                if (!B) throw new Error("The amount of data is too big to be stored in a QR Code");
                if (v) {
                    if (v < B) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + B + ".\n")
                } else v = B;
                const A = function M(b, v, m) {
                        const C = new t;
                        m.forEach(function(R) {
                            C.put(R.mode.bit, 4), C.put(R.getLength(), d.getCharCountIndicator(R.mode, b)), R.write(C)
                        });
                        const A = 8 * (n.getSymbolTotalCodewords(b) - a.getTotalCodewordsCount(b, v));
                        for (C.getLengthInBits() + 4 <= A && C.put(0, 4); C.getLengthInBits() % 8 != 0;) C.putBit(0);
                        const _ = (A - C.getLengthInBits()) / 8;
                        for (let R = 0; R < _; R++) C.put(R % 2 ? 17 : 236, 8);
                        return function K(b, v, m) {
                            const C = n.getSymbolTotalCodewords(v),
                                B = C - a.getTotalCodewordsCount(v, m),
                                A = a.getBlocksCount(v, m),
                                R = A - C % A,
                                G = Math.floor(C / A),
                                l = Math.floor(B / A),
                                h = l + 1,
                                f = G - l,
                                y = new p(f);
                            let I = 0;
                            const g = new Array(A),
                                O = new Array(A);
                            let j = 0;
                            const Y = new Uint8Array(b.buffer);
                            for (let Q = 0; Q < A; Q++) {
                                const W = Q < R ? l : h;
                                g[Q] = Y.slice(I, I + W), O[Q] = y.encode(g[Q]), I += W, j = Math.max(j, W)
                            }
                            const U = new Uint8Array(C);
                            let J, V, H = 0;
                            for (J = 0; J < j; J++)
                                for (V = 0; V < A; V++) J < g[V].length && (U[H++] = g[V][J]);
                            for (J = 0; J < f; J++)
                                for (V = 0; V < A; V++) U[H++] = O[V][J];
                            return U
                        }(C, b, v)
                    }(v, m, L),
                    _ = n.getSymbolSize(v),
                    R = new e(_);
                return function w(b, v) {
                        const m = b.size,
                            C = s.getPositions(v);
                        for (let L = 0; L < C.length; L++) {
                            const B = C[L][0],
                                A = C[L][1];
                            for (let _ = -1; _ <= 7; _++)
                                if (!(B + _ <= -1 || m <= B + _))
                                    for (let R = -1; R <= 7; R++) A + R <= -1 || m <= A + R || b.set(B + _, A + R, _ >= 0 && _ <= 6 && (0 === R || 6 === R) || R >= 0 && R <= 6 && (0 === _ || 6 === _) || _ >= 2 && _ <= 4 && R >= 2 && R <= 4, !0)
                        }
                    }(R, v),
                    function k(b) {
                        const v = b.size;
                        for (let m = 8; m < v - 8; m++) {
                            const C = m % 2 == 0;
                            b.set(m, 6, C, !0), b.set(6, m, C, !0)
                        }
                    }(R),
                    function z(b, v) {
                        const m = o.getPositions(v);
                        for (let C = 0; C < m.length; C++) {
                            const L = m[C][0],
                                B = m[C][1];
                            for (let A = -2; A <= 2; A++)
                                for (let _ = -2; _ <= 2; _++) b.set(L + A, B + _, -2 === A || 2 === A || -2 === _ || 2 === _ || 0 === A && 0 === _, !0)
                        }
                    }(R, v), N(R, m, 0), v >= 7 && function P(b, v) {
                        const m = b.size,
                            C = T.getEncodedBits(v);
                        let L, B, A;
                        for (let _ = 0; _ < 18; _++) L = Math.floor(_ / 3), B = _ % 3 + m - 8 - 3, A = 1 == (C >> _ & 1), b.set(L, B, A, !0), b.set(B, L, A, !0)
                    }(R, v),
                    function S(b, v) {
                        const m = b.size;
                        let C = -1,
                            L = m - 1,
                            B = 7,
                            A = 0;
                        for (let _ = m - 1; _ > 0; _ -= 2)
                            for (6 === _ && _--;;) {
                                for (let R = 0; R < 2; R++)
                                    if (!b.isReserved(L, _ - R)) {
                                        let G = !1;
                                        A < v.length && (G = 1 == (v[A] >>> B & 1)), b.set(L, _ - R, G), B--, -1 === B && (A++, B = 7)
                                    }
                                if (L += C, L < 0 || m <= L) {
                                    L -= C, C = -C;
                                    break
                                }
                            }
                    }(R, A), isNaN(C) && (C = u.getBestMask(R, N.bind(null, R, m))), u.applyMask(C, R), N(R, m, C), {
                        modules: R,
                        version: v,
                        errorCorrectionLevel: m,
                        maskPattern: C,
                        segments: L
                    }
            }
            i.create = function(v, m) {
                if (typeof v > "u" || "" === v) throw new Error("No input text");
                let L, B, C = r.M;
                return typeof m < "u" && (C = r.from(m.errorCorrectionLevel, r.M), L = T.from(m.version), B = u.from(m.maskPattern), m.toSJISFunc && n.setToSJISFunction(m.toSJISFunc)), x(v, L, C, B)
            }
        },
        12636: (D, i, c) => {
            const n = c(61106);

            function r(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            r.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = n.generateECPolynomial(this.degree)
            }, r.prototype.encode = function(e) {
                if (!this.genPoly) throw new Error("Encoder not initialized");
                const o = new Uint8Array(e.length + this.degree);
                o.set(e);
                const s = n.mod(o, this.genPoly),
                    u = this.degree - s.length;
                if (u > 0) {
                    const a = new Uint8Array(this.degree);
                    return a.set(s, u), a
                }
                return s
            }, D.exports = r
        },
        2699: (D, i) => {
            const c = "[0-9]+";
            let r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            const t = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            i.KANJI = new RegExp(r, "g"), i.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), i.BYTE = new RegExp(t, "g"), i.NUMERIC = new RegExp(c, "g"), i.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
            const e = new RegExp("^" + r + "$"),
                o = new RegExp("^" + c + "$"),
                s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            i.testKanji = function(a) {
                return e.test(a)
            }, i.testNumeric = function(a) {
                return o.test(a)
            }, i.testAlphanumeric = function(a) {
                return s.test(a)
            }
        },
        62033: (D, i, c) => {
            const n = c(64016),
                r = c(97783),
                t = c(32424),
                e = c(85663),
                o = c(80449),
                s = c(2699),
                u = c(34792),
                a = c(74901);

            function p(P) {
                return unescape(encodeURIComponent(P)).length
            }

            function T(P, N, S) {
                const M = [];
                let K;
                for (; null !== (K = P.exec(S));) M.push({
                    data: K[0],
                    index: K.index,
                    mode: N,
                    length: K[0].length
                });
                return M
            }

            function F(P) {
                const N = T(s.NUMERIC, n.NUMERIC, P),
                    S = T(s.ALPHANUMERIC, n.ALPHANUMERIC, P);
                let M, K;
                return u.isKanjiModeEnabled() ? (M = T(s.BYTE, n.BYTE, P), K = T(s.KANJI, n.KANJI, P)) : (M = T(s.BYTE_KANJI, n.BYTE, P), K = []), N.concat(S, M, K).sort(function(b, v) {
                    return b.index - v.index
                }).map(function(b) {
                    return {
                        data: b.data,
                        mode: b.mode,
                        length: b.length
                    }
                })
            }

            function d(P, N) {
                switch (N) {
                    case n.NUMERIC:
                        return r.getBitsLength(P);
                    case n.ALPHANUMERIC:
                        return t.getBitsLength(P);
                    case n.KANJI:
                        return o.getBitsLength(P);
                    case n.BYTE:
                        return e.getBitsLength(P)
                }
            }

            function z(P, N) {
                let S;
                const M = n.getBestModeForData(P);
                if (S = n.from(N, M), S !== n.BYTE && S.bit < M.bit) throw new Error('"' + P + '" cannot be encoded with mode ' + n.toString(S) + ".\n Suggested mode is: " + n.toString(M));
                switch (S === n.KANJI && !u.isKanjiModeEnabled() && (S = n.BYTE), S) {
                    case n.NUMERIC:
                        return new r(P);
                    case n.ALPHANUMERIC:
                        return new t(P);
                    case n.KANJI:
                        return new o(P);
                    case n.BYTE:
                        return new e(P)
                }
            }
            i.fromArray = function(N) {
                return N.reduce(function(S, M) {
                    return "string" == typeof M ? S.push(z(M, null)) : M.data && S.push(z(M.data, M.mode)), S
                }, [])
            }, i.fromString = function(N, S) {
                const K = function w(P) {
                        const N = [];
                        for (let S = 0; S < P.length; S++) {
                            const M = P[S];
                            switch (M.mode) {
                                case n.NUMERIC:
                                    N.push([M, {
                                        data: M.data,
                                        mode: n.ALPHANUMERIC,
                                        length: M.length
                                    }, {
                                        data: M.data,
                                        mode: n.BYTE,
                                        length: M.length
                                    }]);
                                    break;
                                case n.ALPHANUMERIC:
                                    N.push([M, {
                                        data: M.data,
                                        mode: n.BYTE,
                                        length: M.length
                                    }]);
                                    break;
                                case n.KANJI:
                                    N.push([M, {
                                        data: M.data,
                                        mode: n.BYTE,
                                        length: p(M.data)
                                    }]);
                                    break;
                                case n.BYTE:
                                    N.push([{
                                        data: M.data,
                                        mode: n.BYTE,
                                        length: p(M.data)
                                    }])
                            }
                        }
                        return N
                    }(F(N, u.isKanjiModeEnabled())),
                    x = function k(P, N) {
                        const S = {},
                            M = {
                                start: {}
                            };
                        let K = ["start"];
                        for (let x = 0; x < P.length; x++) {
                            const b = P[x],
                                v = [];
                            for (let m = 0; m < b.length; m++) {
                                const C = b[m],
                                    L = "" + x + m;
                                v.push(L), S[L] = {
                                    node: C,
                                    lastCount: 0
                                }, M[L] = {};
                                for (let B = 0; B < K.length; B++) {
                                    const A = K[B];
                                    S[A] && S[A].node.mode === C.mode ? (M[A][L] = d(S[A].lastCount + C.length, C.mode) - d(S[A].lastCount, C.mode), S[A].lastCount += C.length) : (S[A] && (S[A].lastCount = C.length), M[A][L] = d(C.length, C.mode) + 4 + n.getCharCountIndicator(C.mode, N))
                                }
                            }
                            K = v
                        }
                        for (let x = 0; x < K.length; x++) M[K[x]].end = 0;
                        return {
                            map: M,
                            table: S
                        }
                    }(K, S),
                    b = a.find_path(x.map, "start", "end"),
                    v = [];
                for (let m = 1; m < b.length - 1; m++) v.push(x.table[b[m]].node);
                return i.fromArray(function E(P) {
                    return P.reduce(function(N, S) {
                        const M = N.length - 1 >= 0 ? N[N.length - 1] : null;
                        return M && M.mode === S.mode ? (N[N.length - 1].data += S.data, N) : (N.push(S), N)
                    }, [])
                }(v))
            }, i.rawSplit = function(N) {
                return i.fromArray(F(N, u.isKanjiModeEnabled()))
            }
        },
        34792: (D, i) => {
            let c;
            const n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            i.getSymbolSize = function(t) {
                if (!t) throw new Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, i.getSymbolTotalCodewords = function(t) {
                return n[t]
            }, i.getBCHDigit = function(r) {
                let t = 0;
                for (; 0 !== r;) t++, r >>>= 1;
                return t
            }, i.setToSJISFunction = function(t) {
                if ("function" != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
                c = t
            }, i.isKanjiModeEnabled = function() {
                return typeof c < "u"
            }, i.toSJIS = function(t) {
                return c(t)
            }
        },
        94406: (D, i) => {
            i.isValid = function(n) {
                return !isNaN(n) && n >= 1 && n <= 40
            }
        },
        42088: (D, i, c) => {
            const n = c(34792),
                r = c(14655),
                t = c(82259),
                e = c(64016),
                o = c(94406),
                u = n.getBCHDigit(7973);

            function p(d, E) {
                return e.getCharCountIndicator(d, E) + 4
            }

            function T(d, E) {
                let w = 0;
                return d.forEach(function(k) {
                    const z = p(k.mode, E);
                    w += z + k.getBitsLength()
                }), w
            }
            i.from = function(E, w) {
                return o.isValid(E) ? parseInt(E, 10) : w
            }, i.getCapacity = function(E, w, k) {
                if (!o.isValid(E)) throw new Error("Invalid QR Code version");
                typeof k > "u" && (k = e.BYTE);
                const N = 8 * (n.getSymbolTotalCodewords(E) - r.getTotalCodewordsCount(E, w));
                if (k === e.MIXED) return N;
                const S = N - p(k, E);
                switch (k) {
                    case e.NUMERIC:
                        return Math.floor(S / 10 * 3);
                    case e.ALPHANUMERIC:
                        return Math.floor(S / 11 * 2);
                    case e.KANJI:
                        return Math.floor(S / 13);
                    default:
                        return Math.floor(S / 8)
                }
            }, i.getBestVersionForData = function(E, w) {
                let k;
                const z = t.from(w, t.M);
                if (Array.isArray(E)) {
                    if (E.length > 1) return function F(d, E) {
                        for (let w = 1; w <= 40; w++)
                            if (T(d, w) <= i.getCapacity(w, E, e.MIXED)) return w
                    }(E, z);
                    if (0 === E.length) return 1;
                    k = E[0]
                } else k = E;
                return function a(d, E, w) {
                    for (let k = 1; k <= 40; k++)
                        if (E <= i.getCapacity(k, w, d)) return k
                }(k.mode, k.getLength(), z)
            }, i.getEncodedBits = function(E) {
                if (!o.isValid(E) || E < 7) throw new Error("Invalid QR Code version");
                let w = E << 12;
                for (; n.getBCHDigit(w) - u >= 0;) w ^= 7973 << n.getBCHDigit(w) - u;
                return E << 12 | w
            }
        },
        23210: (D, i, c) => {
            const n = c(36355);
            i.render = function(o, s, u) {
                let a = u,
                    p = s;
                typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), s || (p = function t() {
                    try {
                        return document.createElement("canvas")
                    } catch {
                        throw new Error("You need to specify a canvas element")
                    }
                }()), a = n.getOptions(a);
                const T = n.getImageWidth(o.modules.size, a),
                    F = p.getContext("2d"),
                    d = F.createImageData(T, T);
                return n.qrToImageData(d.data, o, a),
                    function r(e, o, s) {
                        e.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = s, o.width = s, o.style.height = s + "px", o.style.width = s + "px"
                    }(F, p, T), F.putImageData(d, 0, 0), p
            }, i.renderToDataURL = function(o, s, u) {
                let a = u;
                return typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), a || (a = {}), i.render(o, s, a).toDataURL(a.type || "image/png", (a.rendererOpts || {}).quality)
            }
        },
        22334: (D, i, c) => {
            const n = c(36355);

            function r(o, s) {
                const u = o.a / 255,
                    a = s + '="' + o.hex + '"';
                return u < 1 ? a + " " + s + '-opacity="' + u.toFixed(2).slice(1) + '"' : a
            }

            function t(o, s, u) {
                let a = o + s;
                return typeof u < "u" && (a += " " + u), a
            }
            i.render = function(s, u, a) {
                const p = n.getOptions(u),
                    T = s.modules.size,
                    F = s.modules.data,
                    d = T + 2 * p.margin,
                    E = p.color.light.a ? "<path " + r(p.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "",
                    w = "<path " + r(p.color.dark, "stroke") + ' d="' + function e(o, s, u) {
                        let a = "",
                            p = 0,
                            T = !1,
                            F = 0;
                        for (let d = 0; d < o.length; d++) {
                            const E = Math.floor(d % s),
                                w = Math.floor(d / s);
                            !E && !T && (T = !0), o[d] ? (F++, d > 0 && E > 0 && o[d - 1] || (a += T ? t("M", E + u, .5 + w + u) : t("m", p, 0), p = 0, T = !1), E + 1 < s && o[d + 1] || (a += t("h", F), F = 0)) : p++
                        }
                        return a
                    }(F, T, p.margin) + '"/>',
                    P = '<svg xmlns="http://www.w3.org/2000/svg" ' + (p.width ? 'width="' + p.width + '" height="' + p.width + '" ' : "") + 'viewBox="0 0 ' + d + " " + d + '" shape-rendering="crispEdges">' + E + w + "</svg>\n";
                return "function" == typeof a && a(null, P), P
            }
        },
        36355: (D, i) => {
            function c(n) {
                if ("number" == typeof n && (n = n.toString()), "string" != typeof n) throw new Error("Color should be defined as hex string");
                let r = n.slice().replace("#", "").split("");
                if (r.length < 3 || 5 === r.length || r.length > 8) throw new Error("Invalid hex color: " + n);
                (3 === r.length || 4 === r.length) && (r = Array.prototype.concat.apply([], r.map(function(e) {
                    return [e, e]
                }))), 6 === r.length && r.push("F", "F");
                const t = parseInt(r.join(""), 16);
                return {
                    r: t >> 24 & 255,
                    g: t >> 16 & 255,
                    b: t >> 8 & 255,
                    a: 255 & t,
                    hex: "#" + r.slice(0, 6).join("")
                }
            }
            i.getOptions = function(r) {
                r || (r = {}), r.color || (r.color = {});
                const e = r.width && r.width >= 21 ? r.width : void 0;
                return {
                    width: e,
                    scale: e ? 4 : r.scale || 4,
                    margin: typeof r.margin > "u" || null === r.margin || r.margin < 0 ? 4 : r.margin,
                    color: {
                        dark: c(r.color.dark || "#000000ff"),
                        light: c(r.color.light || "#ffffffff")
                    },
                    type: r.type,
                    rendererOpts: r.rendererOpts || {}
                }
            }, i.getScale = function(r, t) {
                return t.width && t.width >= r + 2 * t.margin ? t.width / (r + 2 * t.margin) : t.scale
            }, i.getImageWidth = function(r, t) {
                const e = i.getScale(r, t);
                return Math.floor((r + 2 * t.margin) * e)
            }, i.qrToImageData = function(r, t, e) {
                const o = t.modules.size,
                    s = t.modules.data,
                    u = i.getScale(o, e),
                    a = Math.floor((o + 2 * e.margin) * u),
                    p = e.margin * u,
                    T = [e.color.light, e.color.dark];
                for (let F = 0; F < a; F++)
                    for (let d = 0; d < a; d++) {
                        let E = 4 * (F * a + d),
                            w = e.color.light;
                        F >= p && d >= p && F < a - p && d < a - p && (w = T[s[Math.floor((F - p) / u) * o + Math.floor((d - p) / u)] ? 1 : 0]), r[E++] = w.r, r[E++] = w.g, r[E++] = w.b, r[E] = w.a
                    }
            }
        },
        48580: (D, i, c) => {
            "use strict";
            c.d(i, {
                XD: () => F,
                dD: () => T,
                xI: () => a
            });
            var n = c(94650),
                r = c(95017),
                t = c(21281),
                e = c(77579),
                o = c(50727);
            let s = 0;
            const u = new n.OlP("CdkAccordion");
            let a = (() => {
                    class d {
                        constructor() {
                            this._stateChanges = new e.x, this._openCloseAllActions = new e.x, this.id = "cdk-accordion-" + s++, this._multi = !1
                        }
                        get multi() {
                            return this._multi
                        }
                        set multi(w) {
                            this._multi = (0, t.Ig)(w)
                        }
                        openAll() {
                            this._multi && this._openCloseAllActions.next(!0)
                        }
                        closeAll() {
                            this._openCloseAllActions.next(!1)
                        }
                        ngOnChanges(w) {
                            this._stateChanges.next(w)
                        }
                        ngOnDestroy() {
                            this._stateChanges.complete(), this._openCloseAllActions.complete()
                        }
                    }
                    return d.\u0275fac = function(w) {
                        return new(w || d)
                    }, d.\u0275dir = n.lG2({
                        type: d,
                        selectors: [
                            ["cdk-accordion"],
                            ["", "cdkAccordion", ""]
                        ],
                        inputs: {
                            multi: "multi"
                        },
                        exportAs: ["cdkAccordion"],
                        features: [n._Bn([{
                            provide: u,
                            useExisting: d
                        }]), n.TTD]
                    }), d
                })(),
                p = 0,
                T = (() => {
                    class d {
                        get expanded() {
                            return this._expanded
                        }
                        set expanded(w) {
                            w = (0, t.Ig)(w), this._expanded !== w && (this._expanded = w, this.expandedChange.emit(w), w ? (this.opened.emit(), this._expansionDispatcher.notify(this.id, this.accordion ? this.accordion.id : this.id)) : this.closed.emit(), this._changeDetectorRef.markForCheck())
                        }
                        get disabled() {
                            return this._disabled
                        }
                        set disabled(w) {
                            this._disabled = (0, t.Ig)(w)
                        }
                        constructor(w, k, z) {
                            this.accordion = w, this._changeDetectorRef = k, this._expansionDispatcher = z, this._openCloseAllSubscription = o.w0.EMPTY, this.closed = new n.vpe, this.opened = new n.vpe, this.destroyed = new n.vpe, this.expandedChange = new n.vpe, this.id = "cdk-accordion-child-" + p++, this._expanded = !1, this._disabled = !1, this._removeUniqueSelectionListener = () => {}, this._removeUniqueSelectionListener = z.listen((P, N) => {
                                this.accordion && !this.accordion.multi && this.accordion.id === N && this.id !== P && (this.expanded = !1)
                            }), this.accordion && (this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions())
                        }
                        ngOnDestroy() {
                            this.opened.complete(), this.closed.complete(), this.destroyed.emit(), this.destroyed.complete(), this._removeUniqueSelectionListener(), this._openCloseAllSubscription.unsubscribe()
                        }
                        toggle() {
                            this.disabled || (this.expanded = !this.expanded)
                        }
                        close() {
                            this.disabled || (this.expanded = !1)
                        }
                        open() {
                            this.disabled || (this.expanded = !0)
                        }
                        _subscribeToOpenCloseAllActions() {
                            return this.accordion._openCloseAllActions.subscribe(w => {
                                this.disabled || (this.expanded = w)
                            })
                        }
                    }
                    return d.\u0275fac = function(w) {
                        return new(w || d)(n.Y36(u, 12), n.Y36(n.sBO), n.Y36(r.A8))
                    }, d.\u0275dir = n.lG2({
                        type: d,
                        selectors: [
                            ["cdk-accordion-item"],
                            ["", "cdkAccordionItem", ""]
                        ],
                        inputs: {
                            expanded: "expanded",
                            disabled: "disabled"
                        },
                        outputs: {
                            closed: "closed",
                            opened: "opened",
                            destroyed: "destroyed",
                            expandedChange: "expandedChange"
                        },
                        exportAs: ["cdkAccordionItem"],
                        features: [n._Bn([{
                            provide: u,
                            useValue: void 0
                        }])]
                    }), d
                })(),
                F = (() => {
                    class d {}
                    return d.\u0275fac = function(w) {
                        return new(w || d)
                    }, d.\u0275mod = n.oAB({
                        type: d
                    }), d.\u0275inj = n.cJS({}), d
                })()
        }
    }
]);