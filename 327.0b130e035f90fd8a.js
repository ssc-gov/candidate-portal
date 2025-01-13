"use strict";
(self.webpackChunkcandidate_portal = self.webpackChunkcandidate_portal || []).push([
    [327], {
        97327: (A, P, n) => {
            n.r(P), n.d(P, {
                CandidateLayoutModule: () => p
            });
            var f = n(36895),
                u = n(11310),
                t = n(94650),
                i = n(67780),
                a = n(92340),
                g = n(3323);
            let m = (() => {
                class o {
                    constructor(d, s) {
                        this.cmService = d, this.router = s, this.count = "0"
                    }
                    ngOnInit() {
                        this.getUpdates(), this.getVisitorCount()
                    }
                    oncopyright() {
                        window.location.href = `${a.N.homepageUrl}home/copyright-policies`
                    }
                    onhelp() {
                        window.location.href = `${a.N.homepageUrl}home/help`
                    }
                    onpublicDisclosure() {
                        window.location.href = `${a.N.homepageUrl}home/public-disclosure`
                    }
                    onarchives() {
                        window.location.href = `${a.N.homepageUrl}home/archives`
                    }
                    ondisclaimer() {
                        window.location.href = `${a.N.homepageUrl}home/disclaimer`
                    }
                    onsitemap() {
                        window.location.href = `${a.N.homepageUrl}home/sitemap`
                    }
                    onwebInformationManager() {
                        window.location.href = `${a.N.homepageUrl}home/web-information-manager`
                    }
                    getVisitorCount() {
                        this.cmService.getStatistic("statistics").subscribe(d => {
                            "200" == d.statusCode && (this.count = d ? .data ? .visitorCount)
                        })
                    }
                    getUpdates() {
                        this.cmService.getLastUpdates().subscribe(d => {
                            "200" == d.statusCode && (this.lastUpdates = d ? .data ? .createdAt)
                        })
                    }
                    static# t = this.\u0275fac = function(s) {
                        return new(s || o)(t.Y36(g.v), t.Y36(u.F0))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: o,
                        selectors: [
                            ["app-footer"]
                        ],
                        decls: 61,
                        vars: 5,
                        consts: [
                            [1, "footer"],
                            [1, "footer-top"],
                            [1, "container"],
                            [1, "row", "ptb30"],
                            [1, "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "m0", "leftF", 2, "position", "relative"],
                            ["href", "#", 1, "footer-left"],
                            [1, "img_class"],
                            ["src", "assets/images/sscLogo.png", "alt", "SSC", 1, "footerLogo2"],
                            [1, "logo_text"],
                            [1, "footerLogoText1"],
                            [1, "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9", "m0", "p0", "rightF"],
                            ["href", "#", 1, "footer-right"],
                            [1, "largeSection"],
                            ["tabindex", "1", 1, "footerMsg", 3, "click"],
                            [1, "footerCol2"],
                            [1, "listHead"],
                            [1, "vrBtm"],
                            ["tabindex", "1", 3, "click"],
                            [1, "leftM"],
                            [2, "display", "flex"],
                            ["src", "assets/images/locationIco.svg", "height", "20"],
                            [1, "spanText"],
                            [1, "footer-bottom"],
                            [1, "container", "bootom"],
                            [2, "line-height", "100%", "display", "flex", "justify-content", "space-between"],
                            [1, "spChar"]
                        ],
                        template: function(s, C) {
                            1 & s && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6), t._UZ(7, "img", 7), t.qZA(), t.TgZ(8, "div", 8)(9, "p", 9), t._uU(10, "Staff Selection"), t.qZA(), t.TgZ(11, "p", 9), t._uU(12, "Commission"), t.qZA()()()(), t.TgZ(13, "div", 10)(14, "div", 11)(15, "ul", 12)(16, "li", 13), t.NdJ("click", function() {
                                return C.onpublicDisclosure()
                            }), t.TgZ(17, "a"), t._uU(18, "Public Disclosure of Scores and Other Details of Non-Recommended Willing Candidates"), t.qZA()()(), t.TgZ(19, "ul", 14)(20, "li", 15)(21, "b"), t._uU(22, "Useful links"), t.qZA(), t._UZ(23, "div", 16), t.qZA(), t.TgZ(24, "li")(25, "a", 17), t.NdJ("click", function() {
                                return C.onarchives()
                            }), t._uU(26, "Archives"), t.qZA()(), t.TgZ(27, "li")(28, "a", 17), t.NdJ("click", function() {
                                return C.ondisclaimer()
                            }), t._uU(29, "Disclaimer"), t.qZA()(), t.TgZ(30, "li")(31, "a", 17), t.NdJ("click", function() {
                                return C.onsitemap()
                            }), t._uU(32, "Sitemap"), t.qZA()(), t.TgZ(33, "li", 17), t.NdJ("click", function() {
                                return C.onhelp()
                            }), t.TgZ(34, "a"), t._uU(35, "Help"), t.qZA()(), t.TgZ(36, "li", 17), t.NdJ("click", function() {
                                return C.oncopyright()
                            }), t.TgZ(37, "a"), t._uU(38, "Website Policies"), t.qZA()(), t.TgZ(39, "li")(40, "a", 17), t.NdJ("click", function() {
                                return C.onwebInformationManager()
                            }), t._uU(41, "Web Information Manager"), t.qZA()()(), t.TgZ(42, "ul", 18)(43, "li", 15)(44, "b"), t._uU(45, "Contact Us"), t.qZA(), t._UZ(46, "div", 16), t.qZA(), t.TgZ(47, "li", 19), t._UZ(48, "img", 20), t.TgZ(49, "span", 21), t._uU(50, "Block No-12, CGO Complex, Lodhi Road New Delhi "), t.qZA()()()()()()()(), t.TgZ(51, "div", 22)(52, "div", 23)(53, "p", 24)(54, "span", 25), t._uU(55, "\xa9 2024 SSC. All Rights Reserved "), t.qZA(), t.TgZ(56, "span"), t._uU(57), t.qZA(), t.TgZ(58, "span"), t._uU(59), t.ALo(60, "date"), t.qZA()()()()()), 2 & s && (t.xp6(57), t.hij(" Total Visitor Count: ", C.count, ""), t.xp6(2), t.hij("Last updated on ", t.xi3(60, 2, C.lastUpdates, "MMM d, y"), ""))
                        },
                        dependencies: [f.uU],
                        styles: ['.footer[_ngcontent-%COMP%]{background:#303030 url(Ashoka_Chakra.8df3b9c67365c136.svg);background-position:bottom left;background-size:auto;z-index:10;position:relative;background-repeat:no-repeat}.footer[_ngcontent-%COMP%]   .leftF[_ngcontent-%COMP%]{align-items:center;display:flex}.ptb50[_ngcontent-%COMP%]{padding:50px 0 0}.leftM[_ngcontent-%COMP%], .m0[_ngcontent-%COMP%]{margin:0}.p0[_ngcontent-%COMP%]{padding:0}select[_ngcontent-%COMP%]{border:none;outline:none;color:#fff;font-size:var(--font-size-14);background:transparent}.footerCol2[_ngcontent-%COMP%]{white-space:nowrap}ul[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;color:#fff;text-decoration:none;margin-bottom:2px;font-size:var(--font-size-14)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .spanText[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;line-height:initial;margin-left:7px;width:100%}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:var(--font-size-14);text-decoration:none;font-weight:500;position:relative}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";display:block;width:0;height:1.5px;background:#fff;transition:width .3s;position:absolute;left:0;bottom:-1px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%;display:inline-block;position:absolute;left:0;bottom:-1px}.footer-left[_ngcontent-%COMP%]{display:flex;margin:0}.footer-left[_ngcontent-%COMP%]   .footerLogo1[_ngcontent-%COMP%]{height:70px}.footer-left[_ngcontent-%COMP%]   .footerLogo2[_ngcontent-%COMP%]{height:50px}.footer-left[_ngcontent-%COMP%]   .img_class[_ngcontent-%COMP%]{margin:10px 0}.footer-left[_ngcontent-%COMP%]   .fr[_ngcontent-%COMP%]{display:inline-block;width:2px;min-height:50px;background-color:#e39494;opacity:.25;margin:0 10px;vertical-align:middle}.footer-left[_ngcontent-%COMP%]   .footerLogoText1[_ngcontent-%COMP%]{color:var(--global-white, #fdfdfd);font-size:24px!important;margin:0;font-weight:400;line-height:110%}.footer-left[_ngcontent-%COMP%]   .logo_text[_ngcontent-%COMP%]{margin:0 0 0 10px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.footer-right[_ngcontent-%COMP%]{display:flex;gap:10px}.footer-right[_ngcontent-%COMP%]   .adIcon[_ngcontent-%COMP%]{width:25px;font-size:20px}.footerText[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-bottom:20px}.footerText[_ngcontent-%COMP%]   .fr[_ngcontent-%COMP%]{display:inline-block;width:2px;min-height:10px;background-color:#e39494;opacity:.25;margin:0 10px;vertical-align:middle}.footer-bottom[_ngcontent-%COMP%]{padding:10px 0 30px;font-size:var(--font-size-14)}.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;margin:0;text-align:center;line-height:100%;display:flex;justify-content:space-between;border-top:1px solid var(--global-border);padding-top:24px}.footer-bottom[_ngcontent-%COMP%]   .spChar[_ngcontent-%COMP%]{font-size:var(--font-size-14);vertical-align:top}.footer-bottom[_ngcontent-%COMP%]   .fr[_ngcontent-%COMP%]{display:inline-block;width:2px;min-height:10px;background-color:#e39494;opacity:.25;margin:0 10px;vertical-align:middle}.line[_ngcontent-%COMP%]{width:calc(100vw - 100px);min-height:1px;background-color:var(--global-border);opacity:.25;float:left;margin-right:64px;margin-left:65px}.footerCol2[_ngcontent-%COMP%]   .vr[_ngcontent-%COMP%]{display:none}.listHead[_ngcontent-%COMP%]{margin-bottom:10px!important;font-size:var(--font-size-16)!important}*[_ngcontent-%COMP%]:focus{outline:none}.listHeadNrml[_ngcontent-%COMP%]{margin-bottom:14px!important}.vrBtm[_ngcontent-%COMP%]{width:70px;height:1px;background:#f1f1f1;display:block;align-self:stretch;margin:2px 0}.footerMsg[_ngcontent-%COMP%]{word-break:break-word;margin-top:70px}.locIco[_ngcontent-%COMP%]{height:20px}.ptb30[_ngcontent-%COMP%]{padding-top:30px}.largeSection[_ngcontent-%COMP%]{align-items:center}@media (min-width: 1921px){.footer-right[_ngcontent-%COMP%]{justify-content:space-between}li[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-size:20px!important}.footerLogoText1[_ngcontent-%COMP%]{font-size:32px!important}.footerLogo2[_ngcontent-%COMP%]{height:100px!important}.footer-left[_ngcontent-%COMP%]{display:flex;margin-top:47px;justify-content:flex-start;align-items:center}span[_ngcontent-%COMP%]{font-size:20px!important}}@media (max-width: 1200px) and (min-width: 1000px){.footer-left[_ngcontent-%COMP%]   .footerLogoText1[_ngcontent-%COMP%]{font-size:20px!important}}@media (max-width: 1000px){.footer-left[_ngcontent-%COMP%]   .footerLogoText1[_ngcontent-%COMP%]{font-size:20px}.footer[_ngcontent-%COMP%]   .leftF[_ngcontent-%COMP%]{width:100%!important}.footer[_ngcontent-%COMP%]   .rightF[_ngcontent-%COMP%]{width:100%!important;margin-top:20px!important}.footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]{justify-content:left;margin:0}.footer[_ngcontent-%COMP%]   .row.ptb50[_ngcontent-%COMP%]{padding-top:30px}.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]{padding:21px 0 30px}}@media (max-width: 767px){.footer-right[_ngcontent-%COMP%]{flex-direction:column}.footer-right[_ngcontent-%COMP%]   .footerMsg[_ngcontent-%COMP%]{margin-top:0}.footer-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;text-align:left;margin:0}.footer-right[_ngcontent-%COMP%]   .adIcon[_ngcontent-%COMP%]{font-size:var(--font-size-16)!important}.footer-bottom[_ngcontent-%COMP%]{padding:15px 0!important}.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex-direction:column;justify-content:flex-start;gap:15px}.footer-left[_ngcontent-%COMP%]   .footerLogoText1[_ngcontent-%COMP%]{font-size:var(--font-size-18)!important}.logo_text[_ngcontent-%COMP%]{padding-top:10px}.footer-top[_ngcontent-%COMP%]   .row.ptb50[_ngcontent-%COMP%]{padding-top:20px!important}.footer-left[_ngcontent-%COMP%]{margin:0!important}.footerCol2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:5px}.ptb30[_ngcontent-%COMP%]{padding-top:10px}}']
                    })
                }
                return o
            })();
            var M = n(35998);

            function x(o, Z) {
                1 & o && (t.TgZ(0, "div", 1)(1, "div", 2), t._UZ(2, "img", 3), t.TgZ(3, "span", 4), t._uU(4, "Loading..."), t.qZA()()())
            }
            let y = (() => {
                    class o {
                        constructor(d) {
                            this.spinner = d, this.isLoading = this.spinner.isLoading, this.loadingSection = !1, this.subscription$ = this.isLoading.subscribe(s => {
                                this.loadingSection = s
                            }), this.spinner.isLoading.subscribe(s => {
                                this.loadingSection = s
                            })
                        }
                        ngOnInit() {}
                        ngOnDestroy() {
                            this.subscription$.unsubscribe()
                        }
                        static# t = this.\u0275fac = function(s) {
                            return new(s || o)(t.Y36(M.V))
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: o,
                            selectors: [
                                ["app-loader"]
                            ],
                            decls: 1,
                            vars: 1,
                            consts: [
                                ["class", "loader", 4, "ngIf"],
                                [1, "loader"],
                                [1, "gif"],
                                ["src", "assets/image/spinner.gif"],
                                [1, "loading"]
                            ],
                            template: function(s, C) {
                                1 & s && t.YNc(0, x, 5, 0, "div", 0), 2 & s && t.Q6J("ngIf", C.loadingSection)
                            },
                            dependencies: [f.O5],
                            styles: [".loader[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);transition-timing-function:ease-in-out;transition-duration:.2s;width:100%;height:100%;background:radial-gradient(circle,rgba(255,255,255,.8) 0%,rgba(255,255,255,0) 100%);display:flex;justify-content:center;align-items:center;z-index:99999999;overflow-x:hidden;overflow-y:auto}.loader[_ngcontent-%COMP%]   .gif[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.loader[_ngcontent-%COMP%]   .gif[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;margin-bottom:10px}.loader[_ngcontent-%COMP%]   .gif[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{color:var(--button-default, #8e433e);font-size:2rem!important;font-style:normal;font-weight:700;line-height:140%}"]
                        })
                    }
                    return o
                })(),
                e = (() => {
                    class o {
                        constructor() {
                            this.feedbackUrl = "", this.sscOldWebsite = ""
                        }
                        ngOnInit() {}
                        setUrl(d = "") {
                            window.location.href = d || `${a.N.homepageUrl}home/feedback`
                        }
                        static# t = this.\u0275fac = function(s) {
                            return new(s || o)
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: o,
                            selectors: [
                                ["app-top-bar"]
                            ],
                            decls: 13,
                            vars: 0,
                            consts: [
                                [1, "top-nav"],
                                [1, "container"],
                                [1, "row"],
                                [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"],
                                [1, "navbar-nav"],
                                [1, "nav-item"],
                                ["aria-current", "page", 1, "nav-link", 3, "click"],
                                [1, "vr"],
                                [1, "nav-link", 3, "click"],
                                [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8", "right"]
                            ],
                            template: function(s, C) {
                                1 & s && (t.TgZ(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6), t.NdJ("click", function() {
                                    return C.setUrl()
                                }), t._uU(7, "Feedback"), t.qZA()(), t._UZ(8, "div", 7), t.TgZ(9, "li", 5)(10, "a", 8), t.NdJ("click", function() {
                                    return C.setUrl("https://ssc.nic.in/")
                                }), t._uU(11, " SSC Old Website"), t.qZA()()()(), t._UZ(12, "div", 9), t.qZA()()())
                            },
                            styles: [".top-nav[_ngcontent-%COMP%]{background:#fffbfb!important;display:block;margin-bottom:0!important;padding:10px 0;color:var(--fonts-body);border-bottom:1px solid var(--global-border);overflow:visible}.top-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#252525!important;font-size:12px;font-style:normal;font-weight:400;padding:0 5px;white-space:nowrap;display:flex;position:relative}.top-nav[_ngcontent-%COMP%]   .drop[_ngcontent-%COMP%]{color:var(--fonts-subtext);font-family:var(--font-family);font-style:normal;font-weight:400;cursor:pointer;border:none;background-color:transparent;outline:none}.top-nav[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:rgb(249,241,241)!important}.top-nav[_ngcontent-%COMP%]   .vr[_ngcontent-%COMP%]{max-height:2em!important}.top-nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{flex-direction:row!important}.top-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{color:#000;font-size:12px;font-style:normal;font-weight:600;padding:0}.top-nav[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:none;outline:none;color:#000;font-size:12px!important;font-style:normal;font-weight:400;background:transparent;width:80%;padding:0 5px}.top-nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;justify-content:end}.top-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{position:absolute!important}.top-nav[_ngcontent-%COMP%]   .zoom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{gap:5px;font-weight:var(--font-weight-600)!important;padding-right:0}@media (max-width: 767px){.top-nav[_ngcontent-%COMP%]{display:none}}@media (max-width: 1200px){.container[_ngcontent-%COMP%]{max-width:90%;padding:0}}"]
                        })
                    }
                    return o
                })(),
                r = (() => {
                    class o {
                        static# t = this.\u0275fac = function(s) {
                            return new(s || o)
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: o,
                            selectors: [
                                ["app-candidate-layout"]
                            ],
                            decls: 10,
                            vars: 0,
                            consts: [
                                [1, "container-fluid", "p-0"],
                                [1, "main-wrapper"]
                            ],
                            template: function(s, C) {
                                1 & s && (t.TgZ(0, "div", 0)(1, "div"), t._UZ(2, "app-loader")(3, "app-top-bar")(4, "app-header"), t.qZA(), t.TgZ(5, "main", 1), t._UZ(6, "app-loader")(7, "router-outlet"), t.qZA(), t.TgZ(8, "div"), t._UZ(9, "app-footer"), t.qZA()())
                            },
                            dependencies: [u.lC, i.G, m, y, e]
                        })
                    }
                    return o
                })();
            var c = n(45140);
            const U = [{
                path: "",
                component: r,
                children: [{
                    path: "dashboard",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(415), n.e(158), n.e(634), n.e(102)]).then(n.bind(n, 82102)).then(o => o.DashboardModule),
                    canActivate: [c.g]
                }, {
                    path: "one-time-registration",
                    loadChildren: () => Promise.all([n.e(205), n.e(790), n.e(592), n.e(857)]).then(n.bind(n, 74857)).then(o => o.OneTimeRegistrationModule)
                }, {
                    path: "forgot-password",
                    loadChildren: () => Promise.all([n.e(430), n.e(592), n.e(890)]).then(n.bind(n, 54890)).then(o => o.ForgotPasswordModule)
                }, {
                    path: "answer-key-challenge",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(415), n.e(634)]).then(n.bind(n, 4634)).then(o => o.AnswerKeyChallengeModule),
                    canActivate: [c.g]
                }, {
                    path: "payment-status",
                    loadChildren: () => n.e(143).then(n.bind(n, 63143)).then(o => o.PaymentStatusModule),
                    canActivate: [c.g]
                }, {
                    path: "edit-registrationDetails",
                    loadChildren: () => Promise.all([n.e(205), n.e(790), n.e(592), n.e(183)]).then(n.bind(n, 83183)).then(o => o.ModifyOneTimeRegistrationModule),
                    canActivate: [c.g]
                }, {
                    path: "rhq-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(936), n.e(592), n.e(882)]).then(n.bind(n, 77882)).then(o => o.RhqApplicationFormModule),
                    canActivate: [c.g]
                }, {
                    path: "si-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(936), n.e(584)]).then(n.bind(n, 24584)).then(o => o.SubInspectorDelhiModule),
                    canActivate: [c.g]
                }, {
                    path: "mtsc-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(592), n.e(841)]).then(n.bind(n, 15841)).then(o => o.MtsCivilianApplicationFormModule),
                    canActivate: [c.g]
                }, {
                    path: "admit-card",
                    loadChildren: () => n.e(675).then(n.bind(n, 39675)).then(o => o.AdmitCardModule),
                    canActivate: [c.g]
                }, {
                    path: "je-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(936), n.e(95)]).then(n.bind(n, 3095)).then(o => o.JeApplicationFormModule),
                    canActivate: [c.g]
                }, {
                    path: "payment",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(415), n.e(158), n.e(634), n.e(102), n.e(161)]).then(n.bind(n, 50161)).then(o => o.PaymentModule),
                    canActivate: [c.g]
                }, {
                    path: "chsl-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(165)]).then(n.bind(n, 16165)).then(o => o.ChslApplicationFormModule),
                    canActivate: [c.g]
                }, {
                    path: "mts-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(79)]).then(n.bind(n, 53079)).then(o => o.MtsApplicationFormModule),
                    canActivate: [c.g]
                }, {
                    path: "steno-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(592), n.e(404)]).then(n.bind(n, 53404)).then(o => o.StenoApplicationFormModule)
                }, {
                    path: "cgl-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(592), n.e(994)]).then(n.bind(n, 96994)).then(o => o.CglApplicationFormModuleModule),
                    canActivate: [c.g]
                }, {
                    path: "upload-documents",
                    loadChildren: () => Promise.all([n.e(415), n.e(592), n.e(705)]).then(n.bind(n, 38119)).then(o => o.DocumentUploadsModule),
                    canActivate: [c.g]
                }, {
                    path: "jht-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(592), n.e(261)]).then(n.bind(n, 46261)).then(o => o.JhtApplicationFormModule),
                    canActivate: [c.g]
                }, {
                    path: "ctgd-application-form",
                    loadChildren: () => Promise.all([n.e(205), n.e(83), n.e(430), n.e(711), n.e(13), n.e(592), n.e(352)]).then(n.bind(n, 56352)).then(o => o.CtgdApplicationFormModule),
                    canActivate: [c.g]
                }, {
                    path: "marks",
                    loadChildren: () => n.e(987).then(n.bind(n, 72987)).then(o => o.MarksModule),
                    canActivate: [c.g]
                }, {
                    path: "**",
                    component: (() => {
                        class o {
                            static# t = this.\u0275fac = function(s) {
                                return new(s || o)
                            };
                            static# n = this.\u0275cmp = t.Xpm({
                                type: o,
                                selectors: [
                                    ["app-page-not-found"]
                                ],
                                decls: 11,
                                vars: 0,
                                consts: [
                                    [1, "main"],
                                    [1, "txt1"],
                                    [1, "txtimg"],
                                    ["src", "assets/image/404Ico.svg", "alt", "img"],
                                    [1, "txt2"],
                                    ["routerLink", "/dashboard", 1, "refreshBtn"]
                                ],
                                template: function(s, C) {
                                    1 & s && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "span"), t._uU(3, "Oops!"), t.qZA()(), t.TgZ(4, "div", 2), t._UZ(5, "img", 3), t.qZA(), t.TgZ(6, "div", 4)(7, "span"), t._uU(8, "The page you requested can not be found! We are working on it!"), t.qZA()(), t.TgZ(9, "a", 5), t._uU(10, " Back To Dashboard "), t.qZA()())
                                },
                                dependencies: [u.rH],
                                styles: [".txt1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#454444;font-size:64px!important;font-weight:700}.txt2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#c4c4c4;font-size:24px}.txt2[_ngcontent-%COMP%]{text-align:center}.main[_ngcontent-%COMP%]{width:calc(100% - 40px);margin:20px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:30px;padding:0 20px}.txtimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%}.txtimg[_ngcontent-%COMP%]{text-align:center}.refreshBtn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer}"]
                            })
                        }
                        return o
                    })()
                }]
            }];
            let N = (() => {
                class o {
                    static# t = this.\u0275fac = function(s) {
                        return new(s || o)
                    };
                    static# n = this.\u0275mod = t.oAB({
                        type: o
                    });
                    static# o = this.\u0275inj = t.cJS({
                        imports: [u.Bz.forChild(U), u.Bz]
                    })
                }
                return o
            })();
            var E = n(59721),
                v = n(24006),
                h = n(80529),
                T = n(97392),
                l = n(65412);
            let p = (() => {
                class o {
                    static# t = this.\u0275fac = function(s) {
                        return new(s || o)
                    };
                    static# n = this.\u0275mod = t.oAB({
                        type: o
                    });
                    static# o = this.\u0275inj = t.cJS({
                        imports: [f.ez, N, E.I, v.u5, v.UX, h.JF, T.Ps, l.Is]
                    })
                }
                return o
            })()
        },
        29446: (A, P, n) => {
            n.d(P, {
                b: () => f
            });
            const f = {
                ms51: {
                    genderTypes: "admin/5.1/genderTypes",
                    categories: "admin/5.1/categories",
                    nationalities: "admin/5.1/nationalities",
                    educationBoards: "admin/5.1/educationBoards",
                    states: "admin/5.1/states",
                    educationBoard: "admin/5.1/educationBoard",
                    subjects: "admin/5.1/subjects",
                    downloadFile: "candidate/2.6/uploads",
                    jeSubjects: "admin/5.1/jeSubjects",
                    jeEducationLevels: "admin/5.1/jeEducationLevels"
                },
                ms31: {
                    getDepartment: "candidate/3.1/getOptionPreferenceData",
                    submitPreference: "candidate/2.4/createPreferenceData",
                    getPreference: "candidate/2.4/getPreferenceDataById",
                    printPreference: "candidate/3.1/printPreferenceData",
                    downloadApplication: "candidate/3.1/downloadFile",
                    getAppExamDetailsById: "candidate/3.1/getAppExamDetailsById"
                },
                ms21: {
                    downloadFile: "candidate/2.1/uploads/downloadUploadedFile"
                }
            }
        },
        45140: (A, P, n) => {
            n.d(P, {
                g: () => i
            });
            var f = n(94650),
                u = n(34356),
                t = n(92340);
            const i = (a, g) => ((0, f.f3M)(u.i).isLoggedin() || (window.location.href = "localhost" !== t.N.host ? "/login" : "http://localhost:4200"), !0)
        },
        32834: (A, P, n) => {
            n.d(P, {
                s: () => M
            });
            var f = n(15861),
                u = n(16296),
                t = n(80529),
                i = n(92340),
                a = n(29446),
                g = n(90146),
                m = n(94650);
            let M = (() => {
                class x {
                    constructor(e) {
                        this.http = e, this.reliveExamList = [], this.allowedRegistrationNumbers = []
                    }
                    buildQueryParams(e) {
                        let r = new t.LE;
                        for (const c in e) e.hasOwnProperty(c) && null != e[c] && (r = r.set(c, e[c].toString()));
                        return r
                    }
                    constructUrl(e) {
                        return i.N.apiUrl + "/" + e
                    }
                    getExamNamesAndYears() {
                        return this.http.get(`${i.N.apiUrl}/v1/candidate/3.1/getExamNamesAndYears`)
                    }
                    getApplicationDataByExamYear(e) {
                        return this.http.get(`${"localhost"===i.N.host?"http://localhost:6007/api":i.N.apiUrl}/v1/candidate/3.1/myAppplicationDetails?examCode=${e.examCode}&examYear=${e?.examYear}&examId=${e?.examId}`)
                    }
                    getCompletedApplication(e, r) {
                        return this.http.get(`${i.N.apiUrl}/v1/candidate/3.1/getCompletedApplication?registrationNo=${e}&notificationId=${r}`)
                    }
                    getLiveExams() {
                        return this.http.get(`${i.N.apiUrl}/admin/5.1/liveExam`)
                    }
                    getNewLiveExams() {
                        return this.http.get(`${i.N.apiUrl}/v1/candidate/3.1/liveExams`)
                    }
                    getActiveNotifications() {
                        return this.http.get(`${i.N.apiUrl}/admin/5.1/getActiveNotifications`)
                    }
                    getMyApplications(e) {
                        return this.http.get(`${i.N.apiUrl}/candidate/3.1/myApplication?registrationNo=${e}`)
                    }
                    getMyRecentYearApplications() {
                        return this.http.get(`${i.N.apiUrl}/v1/candidate/3.1/myApplications`)
                    }
                    getMyRecentYearApplicationsHistory(e) {
                        return this.http.get(`${i.N.apiUrl}/v1/candidate/3.1/myApplicationsHistory/${e}`)
                    }
                    findAppliedExam(e, r) {
                        return this.http.get(`${i.N.apiUrl}/candidate/3.1/myApplicationCheck?notificationId=${e}&registrationNo=${r}`)
                    }
                    findPendingAppliedExam(e) {
                        return this.http.get(`${i.N.apiUrl}/v1/candidate/3.1/checkPendingApplication?notificationId=${e}`)
                    }
                    jeFindAppliedExam(e, r) {
                        return this.http.get(`${i.N.apiUrl}/candidate/3.1/jeMyApplicationCheck?notificationId=${e}&registrationNo=${r}`)
                    }
                    getNotificationDataById(e) {
                        return this.http.get(`${i.N.apiUrl}/admin/5.1/notificationById?id=${e}`)
                    }
                    getAppExamDetail(e) {
                        let r = this.buildQueryParams(e);
                        return this.http.get(this.constructUrl(a.b.ms31.getAppExamDetailsById), {
                            params: r
                        })
                    }
                    changePassword(e) {
                        return this.http.post(`${i.N.apiUrl}/candidateLdap/changePassword`, e)
                    }
                    getSecurityQuestionByRegNo(e) {
                        return this.http.get(`${i.N.apiUrl}/candidateLdap/getSecurityQuestions?registrationNo=${e}`)
                    }
                    checkSecurityQuestions() {
                        return this.http.get(`${i.N.apiUrl}/candidateLdap/security-questions`)
                    }
                    changeSecurityQuestion(e) {
                        return this.http.put(`${i.N.apiUrl}/candidateLdap/changeSecurityQuestion`, e)
                    }
                    changeProfilePic(e) {
                        return this.http.post(`${i.N.apiUrl}/candidate/3.1/documents/upload-profile-picture`, e)
                    }
                    updateProfilePic(e) {
                        return this.http.put(`${i.N.apiUrl}/candidate/3.1/documents/update-profile-picture`, e)
                    }
                    getProfilePic(e) {
                        return this.http.get(`${i.N.apiUrl}/candidate/3.1/documents/get-profile-picture?otrId=${e}`)
                    }
                    getCandidateOTRid(e) {
                        this.http.get(`${i.N.apiUrl}/candidate/2.1/otr?registrationNo=${e}`).subscribe(c => this.candidateOtrId = c.data.docs.otrPersonal.id)
                    }
                    getAllApplicationsByExamId(e, r) {
                        return this.http.get(`${i.N.apiUrl}/candidate/3.1/getAllApplicationsByExamId?notificationId=${r}&regNo=${e}`)
                    }
                    getMyApplicationByExamId(e, r) {
                        return this.http.get(`${i.N.apiUrl}/candidate/3.1/getMyApplicationByExamId?id=${e}&regNo=${r}`)
                    }
                    getExamDetailsByNotificationId(e) {
                        return this.http.get(`${i.N.apiUrl}/candidate/3.1/getExamDetailsByNotificationId?id=${e}`)
                    }
                    checkForSelectedPreference(e) {
                        let r;
                        return r = i.N.apiUrl, this.http.post(`${r}/candidate/2.4/checkSelectedForPreference`, e)
                    }
                    setReLiveExams() {
                        var e = this;
                        return (0, f.Z)(function*() {
                            if (e.reliveExamList.length > 0) return [e.reliveExamList, e.allowedRegistrationNumbers]; {
                                let E = g.l;
                                var b, r = !1,
                                    c = !1;
                                try {
                                    for (var N, U = (0, u.Z)(E); r = !(N = yield U.next()).done; r = !1) {
                                        let v = N.value;
                                        e.reliveExamList.push(v.examCode), e.allowedRegistrationNumbers[v.examCode] = v.registrationNo
                                    }
                                } catch (v) {
                                    c = !0, b = v
                                } finally {
                                    try {
                                        r && null != U.return && (yield U.return())
                                    } finally {
                                        if (c) throw b
                                    }
                                }
                                return [e.reliveExamList, e.allowedRegistrationNumbers]
                            }
                        })()
                    }
                    static# t = this.\u0275fac = function(r) {
                        return new(r || x)(m.LFG(t.eN))
                    };
                    static# n = this.\u0275prov = m.Yz7({
                        token: x,
                        factory: x.\u0275fac,
                        providedIn: "root"
                    })
                }
                return x
            })()
        },
        67780: (A, P, n) => {
            n.d(P, {
                G: () => v
            });
            var f = n(92340),
                u = n(18505),
                t = n(94650),
                i = n(11310),
                a = n(34356),
                g = n(3323),
                m = n(32834),
                M = n(70056),
                x = n(11481),
                y = n(36895);

            function e(h, T) {
                1 & h && (t.TgZ(0, "a", 17), t._UZ(1, "input", 18), t.qZA())
            }

            function r(h, T) {
                if (1 & h) {
                    const l = t.EpF();
                    t.TgZ(0, "button", 19)(1, "span", 20), t.NdJ("click", function() {
                        t.CHM(l);
                        const o = t.oxw();
                        return t.KtG(o.routeToLoginPage())
                    }), t._uU(2, "Login or Register"), t.qZA()()
                }
            }

            function c(h, T) {
                if (1 & h && (t.TgZ(0, "div"), t._UZ(1, "img", 27), t.qZA()), 2 & h) {
                    const l = t.oxw(2);
                    t.xp6(1), t.Q6J("src", l.profilePicUrl, t.LSH)
                }
            }

            function b(h, T) {
                1 & h && t._UZ(0, "img", 28)
            }

            function U(h, T) {
                if (1 & h) {
                    const l = t.EpF();
                    t.ynx(0), t.TgZ(1, "button", 34), t.NdJ("click", function() {
                        t.CHM(l);
                        const o = t.oxw(3);
                        return t.KtG(o.routeToChangeSecurityQuestions())
                    }), t._uU(2, " Change Security Questions "), t.qZA(), t.TgZ(3, "button", 34), t.NdJ("click", function() {
                        t.CHM(l);
                        const o = t.oxw(3);
                        return t.KtG(o.routeToChangePassword())
                    }), t._uU(4, "Change Password"), t.qZA(), t.BQk()
                }
            }

            function N(h, T) {
                if (1 & h) {
                    const l = t.EpF();
                    t.TgZ(0, "div", 29)(1, "div", 30)(2, "div", 31), t._uU(3), t.qZA(), t.TgZ(4, "div", 32), t._uU(5), t.qZA()(), t.YNc(6, U, 5, 0, "ng-container", 33), t.TgZ(7, "button", 34), t.NdJ("click", function() {
                        t.CHM(l);
                        const o = t.oxw(2);
                        return t.KtG(o.logout())
                    }), t._uU(8, " Logout "), t.qZA()()
                }
                if (2 & h) {
                    const l = t.oxw(2);
                    t.xp6(3), t.hij(" ", null == l.userData || null == l.userData.userDetails ? null : l.userData.userDetails.firstName, " "), t.xp6(2), t.hij(" ", null == l.userData || null == l.userData.userDetails || null == l.userData.userDetails.designation ? null : l.userData.userDetails.designation.designation, " "), t.xp6(1), t.Q6J("ngIf", 1 == l.declaration)
                }
            }

            function E(h, T) {
                if (1 & h) {
                    const l = t.EpF();
                    t.TgZ(0, "div", 21)(1, "div", 22)(2, "button", 23), t.NdJ("click", function() {
                        t.CHM(l);
                        const o = t.oxw();
                        return t.KtG(o.toggleMenu())
                    }), t.YNc(3, c, 2, 1, "div", 24), t.YNc(4, b, 1, 0, "ng-template", null, 25, t.W1O), t.qZA(), t.YNc(6, N, 9, 3, "div", 26), t.qZA()()
                }
                if (2 & h) {
                    const l = t.MAs(5),
                        p = t.oxw();
                    t.xp6(3), t.Q6J("ngIf", p.showHeaderImg)("ngIfElse", l), t.xp6(3), t.Q6J("ngIf", p.isClicked)
                }
            }
            let v = (() => {
                class h {
                    constructor(l, p, o, Z, d, s, C, O, D, L) {
                        this.router = l, this.actRoute = p, this.route = o, this.tokenService = Z, this.elRef = d, this.cmService = s, this.dashboardService = C, this.otrService = O, this.commonService = D, this.sanitizer = L, this.isClicked = !1, this.cipher = "", this.declaration = !1, this.cmService.getMessage().subscribe(I => {
                            this.logout()
                        }), this.cipher = this.actRoute.snapshot.queryParamMap.get("token"), this.cipher && Z.setCipher(this.cipher), Z.isLoggedin() && this.cmService.getUserDetails().pipe((0, u.b)(I => {
                            this.userData = I
                        }))
                    }
                    logout() {
                        this.tokenService.clearStorage(), this.toggleMenu(), window.location.href = "localhost" === f.N.host ? "http://localhost:4200" : "/"
                    }
                    toggleMenu() {
                        this.isClicked = !this.isClicked
                    }
                    isLoggedIn() {
                        return this.tokenService.isLoggedin()
                    }
                    goToHome() {
                        "localhost" === f.N.host && (window.location.href = "http://localhost:4200"), "localhost" !== f.N.host && (window.location.href = "/")
                    }
                    onDocumentClick(l) {
                        l && (this.elRef.nativeElement.contains(l.target) || (this.isClicked = !1))
                    }
                    routeToChangePassword() {
                        this.router.navigateByUrl("/dashboard/change-password"), this.toggleMenu()
                    }
                    routeToChangeSecurityQuestions() {
                        this.router.navigateByUrl("/dashboard/change-security-questions"), this.toggleMenu()
                    }
                    routeToLoginPage() {
                        window.location.href = "localhost" === f.N.host ? "http://localhost:4200/login" : "/login"
                    }
                    ngOnInit() {
                        this.otrService.getDeclaration().subscribe(l => {
                            this.declaration = l
                        }), this.tokenService.isLoggedin() && (this.tokenData = this.tokenService.getDecoded(), this.attIdentifierId = this.tokenData.userId, this.getProfilePicture(), this.cmService.getProfile().subscribe(l => {
                            l && this.getProfilePicture()
                        }), this.phaseCheck(this.tokenData ? .username))
                    }
                    phaseCheck(l) {
                        this.otrService.phaseCheck(l).subscribe(p => {
                            let o = this.tokenService.decryptData(p ? .data);
                            this.phaseCheckData = o ? .decryptedData, this.phaseCheckData && (this.declaration = this.phaseCheckData ? .declarationData ? .declaration)
                        })
                    }
                    getProfilePicture() {
                        this.profilePicUrl$ = this.dashboardService.getProfilePic(this.attIdentifierId).subscribe(l => {
                            "200" === l.statusCode ? (this.getProfilePictureHeader(l.data.fileName), this.showHeaderImg = !0) : this.showHeaderImg = !1
                        })
                    }
                    getProfilePictureHeader(l) {
                        this.cmService.getImage("profilePhoto/" + l).subscribe({
                            next: p => {
                                const o = URL.createObjectURL(p);
                                this.profilePicUrl = this.sanitizer.bypassSecurityTrustUrl(o)
                            },
                            error: p => {
                                console.error("Error loading image:", p)
                            }
                        })
                    }
                    static# t = this.\u0275fac = function(p) {
                        return new(p || h)(t.Y36(i.F0), t.Y36(i.gz), t.Y36(i.F0), t.Y36(a.i), t.Y36(t.SBq), t.Y36(g.v), t.Y36(m.s), t.Y36(M.t), t.Y36(g.v), t.Y36(x.H7))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: h,
                        selectors: [
                            ["app-header"]
                        ],
                        hostBindings: function(p, o) {
                            1 & p && t.NdJ("click", function(d) {
                                return o.onDocumentClick(d)
                            }, !1, t.evT)
                        },
                        inputs: {
                            candidateId: "candidateId"
                        },
                        decls: 19,
                        vars: 3,
                        consts: [
                            [1, "nav"],
                            [1, "container"],
                            [1, "row"],
                            [1, "col-xl-4", "col-md-4", "col-sm-6", "col-4", "header-left"],
                            [1, "navbar-brand", "items", 3, "click"],
                            ["src", "assets/images/sscLogo.png", "alt", "SSC", 1, "image"],
                            [1, "side_text"],
                            [1, "logo_class"],
                            [1, "logoText"],
                            [1, "liner_line"],
                            [1, "downText"],
                            [1, "col-xl-8", "col-md-8", "col-sm-6", "col-8", "header-right"],
                            ["class", "navbar-brand", 4, "ngIf"],
                            ["class", "btnTop noBg", 4, "ngIf"],
                            ["class", "profile-container", 4, "ngIf"],
                            [1, "lineGap"],
                            ["src", "assets/images/Satyamev-Jayate.png", "alt", "SSC", 1, "images"],
                            [1, "navbar-brand"],
                            ["type", "search", "placeholder", "Search", 1, "top-search"],
                            [1, "btnTop", "noBg"],
                            [3, "click"],
                            [1, "profile-container"],
                            [1, "profile"],
                            [1, "icon", 3, "click"],
                            [4, "ngIf", "ngIfElse"],
                            ["showImage", ""],
                            ["class", "menus", 4, "ngIf"],
                            ["alt", "profile", 3, "src"],
                            ["src", "assets/image/Profile_White.svg", "alt", "profile"],
                            [1, "menus"],
                            [1, "info"],
                            [1, "name"],
                            [1, "desgination"],
                            [4, "ngIf"],
                            [1, "menu-ic", 3, "click"]
                        ],
                        template: function(p, o) {
                            1 & p && (t.TgZ(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4), t.NdJ("click", function() {
                                return o.goToHome()
                            }), t._UZ(5, "img", 5), t.TgZ(6, "div", 6)(7, "div", 7)(8, "p", 8), t._uU(9, "Government of India"), t.qZA(), t._UZ(10, "div", 9), t.qZA(), t.TgZ(11, "p", 10), t._uU(12, "Staff Selection Commission"), t.qZA()()()(), t.TgZ(13, "div", 11), t.YNc(14, e, 2, 0, "a", 12), t.YNc(15, r, 3, 0, "button", 13), t.YNc(16, E, 7, 3, "div", 14), t._UZ(17, "div", 15)(18, "img", 16), t.qZA()()()()), 2 & p && (t.xp6(14), t.Q6J("ngIf", !o.isLoggedIn()), t.xp6(1), t.Q6J("ngIf", !o.isLoggedIn()), t.xp6(1), t.Q6J("ngIf", o.isLoggedIn()))
                        },
                        dependencies: [y.O5],
                        styles: [".nav[_ngcontent-%COMP%]{padding:10px 0;background-color:var(--global-white);margin-bottom:0!important;border-bottom:1px solid var(--global-border)}.top-search[_ngcontent-%COMP%]{width:180px;background:#fff url(search-ico.341c4c8e1fc44ea4.svg) no-repeat right;background-size:22px;background-position:92% 13px;padding:12px 32px 12px 24px;font-size:var(--font-size-14);outline:0;border-radius:50px;border:1px solid var(--global-border, #ebebeb)}.header-left[_ngcontent-%COMP%]{display:flex;justify-content:start}.header-right[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center}.items[_ngcontent-%COMP%]{align-items:center}.notification-icon[_ngcontent-%COMP%]{width:32px;height:32px;background:#d9d9d9;border-radius:50%;text-align:center;padding:3px;display:inline-block;margin:0 25px 0 30px;vertical-align:middle}.admin-img[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%}.logoText[_ngcontent-%COMP%]{display:inline-block;color:var(--fonts-body);font-size:var(--font-size-14)!important;font-style:normal;font-weight:400;margin:0}.downText[_ngcontent-%COMP%]{color:var(--fonts-primary, #1e1e1e);font-size:16px!important;font-style:normal;font-weight:600;margin:0}.logo_class[_ngcontent-%COMP%]{display:flex}.liner_line[_ngcontent-%COMP%]{width:67px;height:1px;background:linear-gradient(179deg,#b91115 0%,#fcefa5 100%);margin:8px}.navbar[_ngcontent-%COMP%]{padding:18px 0;background-color:#f6d7d5;margin-bottom:0!important}.navbar-brand[_ngcontent-%COMP%]{display:flex;padding:0;height:45px}.side_text[_ngcontent-%COMP%]{margin:0 5px}.header-left[_ngcontent-%COMP%]   .vr[_ngcontent-%COMP%]{margin:0 12px;background:#e39494!important}.header-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#a72e25;text-transform:uppercase;font-size:var(--font-size-18);line-height:22px;vertical-align:middle;margin-left:15px}.mobileLogoText[_ngcontent-%COMP%]{display:none;color:#fff}.image[_ngcontent-%COMP%]{height:45px}.noBg[_ngcontent-%COMP%]{background:transparent!important;border-radius:56px!important;border:1px solid var(--selected-color)!important;padding:13px 25px;height:auto;line-height:100%;font-weight:800;font-size:var(--font-size-16);color:var(--selected-color);margin:0 10px}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px!important;border-radius:50%;height:45px;object-fit:cover}@media (max-width: 1200px){.leftM[_ngcontent-%COMP%]{margin:0 0 0 -35px}.container[_ngcontent-%COMP%]{max-width:90%;padding:0}.top-search[_ngcontent-%COMP%]{width:270px;background-position:90% 13px}}@media (max-width: 1000px) and (min-width: 768px){.top-search[_ngcontent-%COMP%]{width:150px!important;font-size:12px}.top-search[_ngcontent-%COMP%]::placeholder{font-size:12px}.noBg[_ngcontent-%COMP%]{padding:8px 10px;font-size:10px!important;margin-left:5px}.profile-container[_ngcontent-%COMP%]{width:100px!important;margin-left:10px}}@media (max-width: 1100px){.noBg[_ngcontent-%COMP%]{padding:8px 15px;font-weight:800;font-size:12px!important;margin-left:10px}.top-search[_ngcontent-%COMP%]{width:200px}}@media (max-width: 767px){.top-search[_ngcontent-%COMP%]{display:none}.menu[_ngcontent-%COMP%]{position:absolute;right:0;top:85px;background-color:var(--primary-color);box-shadow:10px 14px 8px #706d6f40}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}li[_ngcontent-%COMP%]{padding:5px 50px}.sel[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-size:var(--font-size-14)}.btnTop[_ngcontent-%COMP%]{display:none}.navbar[_ngcontent-%COMP%]{height:auto}.navbar-toggler[_ngcontent-%COMP%]{background-color:var(--primary-color)}.navbar-dark[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]{max-width:98%;padding:0 20px}.top-search[_ngcontent-%COMP%], .notification-icon[_ngcontent-%COMP%]{display:none}.mobileLogoText[_ngcontent-%COMP%]{display:inline-block;font-size:12px;font-weight:600}.admin-img[_ngcontent-%COMP%]{display:none}.header-left[_ngcontent-%COMP%]   .vr[_ngcontent-%COMP%]{margin:0 7px}.footer-left[_ngcontent-%COMP%]   .fr[_ngcontent-%COMP%]{min-height:50px}}@media (min-width: 768px){.navbar-dark[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]{display:none}}@media (max-width: 450px){.image[_ngcontent-%COMP%]{height:33px}.profile-container[_ngcontent-%COMP%]{width:50px!important;margin-left:0}.logoText[_ngcontent-%COMP%]{font-size:12px!important}.downText[_ngcontent-%COMP%]{font-size:14px!important;line-height:100%}.navbar-toggler-icon[_ngcontent-%COMP%]{width:1em!important;height:1em!important}.images[_ngcontent-%COMP%]{height:33px!important}.header-left[_ngcontent-%COMP%], .header-right[_ngcontent-%COMP%]{padding-left:10px!important}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px!important;height:40px!important}}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:70px;align-items:center;justify-content:flex-end;margin-left:20px;margin-right:5px}.profile-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{flex-basis:60%;align-items:center;white-space:nowrap;padding:0 10px}.profile-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;color:#000;font-weight:400}.profile-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desgination[_ngcontent-%COMP%]{font-size:12px;color:gray}.profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{position:relative}.profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{border:0;background:transparent}.profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;position:absolute;z-index:11;right:0;background-color:var(--global-white);padding:10px 13px;border:1px solid var(--global-border);border-radius:8px;top:50px}.profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]   .menu-ic[_ngcontent-%COMP%]{background-color:var(--global-white);padding:10px;width:200px;border:none;display:flex}.profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]   .menu-ic[_ngcontent-%COMP%]:hover{background:var(--button-icon-background, #F9F1F1);border-radius:5px;color:var(--primary-color)}.images[_ngcontent-%COMP%]{height:45px;margin:0 0 0 10px}.lineGap[_ngcontent-%COMP%]{margin:14px 0;background:var(--global-border)!important;height:20px;min-height:20px!important;text-align:center;display:inline-block;width:1px}"]
                    })
                }
                return h
            })()
        },
        16296: (A, P, n) => {
            function f(t) {
                var i, a, g, m = 2;
                for (typeof Symbol < "u" && (a = Symbol.asyncIterator, g = Symbol.iterator); m--;) {
                    if (a && null != (i = t[a])) return i.call(t);
                    if (g && null != (i = t[g])) return new u(i.call(t));
                    a = "@@asyncIterator", g = "@@iterator"
                }
                throw new TypeError("Object is not async iterable")
            }

            function u(t) {
                function i(a) {
                    if (Object(a) !== a) return Promise.reject(new TypeError(a + " is not an object."));
                    var g = a.done;
                    return Promise.resolve(a.value).then(function(m) {
                        return {
                            value: m,
                            done: g
                        }
                    })
                }
                return (u = function(g) {
                    this.s = g, this.n = g.next
                }).prototype = {
                    s: null,
                    n: null,
                    next: function() {
                        return i(this.n.apply(this.s, arguments))
                    },
                    return: function(g) {
                        var m = this.s.return;
                        return void 0 === m ? Promise.resolve({
                            value: g,
                            done: !0
                        }) : i(m.apply(this.s, arguments))
                    },
                    throw: function(g) {
                        var m = this.s.return;
                        return void 0 === m ? Promise.reject(g) : i(m.apply(this.s, arguments))
                    }
                }, new u(t)
            }
            n.d(P, {
                Z: () => f
            })
        },
        15861: (A, P, n) => {
            function f(t, i, a, g, m, M, x) {
                try {
                    var y = t[M](x),
                        e = y.value
                } catch (r) {
                    return void a(r)
                }
                y.done ? i(e) : Promise.resolve(e).then(g, m)
            }

            function u(t) {
                return function() {
                    var i = this,
                        a = arguments;
                    return new Promise(function(g, m) {
                        var M = t.apply(i, a);

                        function x(e) {
                            f(M, g, m, x, y, "next", e)
                        }

                        function y(e) {
                            f(M, g, m, x, y, "throw", e)
                        }
                        x(void 0)
                    })
                }
            }
            n.d(P, {
                Z: () => u
            })
        }
    }
]);