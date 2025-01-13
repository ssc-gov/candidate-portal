"use strict";
(self.webpackChunkcandidate_portal = self.webpackChunkcandidate_portal || []).push([
    [83], {
        88168: (k, M, c) => {
            c.d(M, {
                t: () => A
            });
            var S = c(77579),
                g = c(92340),
                P = c(94650),
                t = c(80529);
            let A = (() => {
                class x {
                    constructor(h) {
                        this.http = h, this.baseUrl = g.N.apiUrl, this.paymentObj = new S.x
                    }
                    initiatePayment(h) {
                        const u = h ? .examCode.toLowerCase();
                        let b;
                        return b = "rhq" == u || "capf" == u || "je" == u ? `${g.N.apiUrl}/ssc/payment/initiate-payment` : `${g.N.apiUrl}/ssc/payment/create-payment`, this.http.post(b, h)
                    }
                    initiatePaymentForAnswerKey(h) {
                        return this.http.post(`${g.N.apiUrl}/ssc/payment/challenge-system-payment`, h)
                    }
                    setPaymentObject(h) {
                        this.paymentObj.next(h)
                    }
                    getPaymentObject() {
                        return this.paymentObj
                    }
                    getPaymentDetails(h) {
                        return this.http.post(`${g.N.apiUrl}/ssc/payment/payment-details`, h)
                    }
                    getAllPaymentStatus() {
                        return this.http.get(`${g.N.apiUrl}/candidate/3.1/getAllPaymentStatus`)
                    }
                    getAllExams() {
                        return this.http.get(`${g.N.apiUrl}/admin/5.1/allExams`)
                    }
                    static# t = this.\u0275fac = function(u) {
                        return new(u || x)(P.LFG(t.eN))
                    };
                    static# e = this.\u0275prov = P.Yz7({
                        token: x,
                        factory: x.\u0275fac,
                        providedIn: "root"
                    })
                }
                return x
            })()
        },
        20269: (k, M, c) => {
            c.d(M, {
                y: () => U
            });
            var S = c(15861),
                g = c(36895),
                P = c(65412),
                t = c(94650),
                A = c(56633),
                x = c(88168),
                T = c(92340),
                h = c(57930),
                u = c(80529),
                b = c(11310);
            let N = (() => {
                class r {
                    constructor(e, a, i) {
                        this.http = e, this.route = a, this.dialog = i, this.paymentHandler = null, this.basePath = "/ssc/payment"
                    }
                    endpoints(e) {
                        return "localhost" === T.N.host ? "http://localhost:6010/api" + e : T.N.apiUrl + e
                    }
                    setPaymentData(e) {
                        this.paymentData = e
                    }
                    getPaymentData() {
                        return this.paymentData
                    }
                    initializeRazorpay(e) {
                        return this.paymentHandler = new Razorpay({
                            key: e.key,
                            amount: 100 * Number(e.amount),
                            currency: e.currency,
                            name: "Staff Selection Commission",
                            description: "Application Form Fee Payment",
                            image: "https://ssc.gov.in/assets/sscLogo.webp",
                            order_id: e ? .order_id,
                            handler: this.razorpaySuccessHandler.bind(this),
                            notes: {
                                applicationId: e ? .notes ? .applicationId,
                                transactionNo: e ? .notes ? .transactionNo
                            },
                            theme: {
                                color: "#8B423C"
                            }
                        })
                    }
                    createOrder(e) {
                        return this.http.post(this.endpoints(`${this.basePath}/create-payment-pg`), { ...e
                        })
                    }
                    razorpaySuccessHandler(e) {
                        const a = this.getPaymentData();
                        let i = {
                            paymentId: e ? .razorpay_payment_id,
                            orderId: e ? .razorpay_order_id,
                            signature: e ? .razorpay_signature,
                            ...a
                        };
                        console.log("razorpaySuccessHandler----\x3e", i), this.http.post(this.endpoints(`${this.basePath}/verify-payment-pg`), i).subscribe({
                            next: d => {
                                if (console.log("verifyPayment----\x3e", d), "200" == d.statusCode) {
                                    const {
                                        tno: E,
                                        mId: D
                                    } = d ? .data;
                                    this.route.navigate(["/payment/e-receipt"], {
                                        queryParams: {
                                            tno: E,
                                            mId: D
                                        }
                                    })
                                } else "203" == d ? .statusCode && this.dialog.open(h.I, {
                                    width: "380px",
                                    minHeight: "360px",
                                    height: "360px",
                                    data: {
                                        msgType: "Error",
                                        message: `${d.error}`
                                    }
                                })
                            },
                            error: d => {
                                this.dialog.open(h.I, {
                                    width: "380px",
                                    minHeight: "360px",
                                    height: "360px",
                                    data: {
                                        msgType: "Error",
                                        message: `${d.error}`
                                    }
                                })
                            }
                        })
                    }
                    verifyPayment(e) {
                        return this.http.post(this.endpoints(`${this.basePath}/verify-payment-rz`), { ...e
                        })
                    }
                    getPaymentGateway() {
                        return this.http.get(this.endpoints(`${this.basePath}/payment-gateways`))
                    }
                    static# t = this.\u0275fac = function(a) {
                        return new(a || r)(t.LFG(u.eN), t.LFG(b.F0), t.LFG(P.uw))
                    };
                    static# e = this.\u0275prov = t.Yz7({
                        token: r,
                        factory: r.\u0275fac,
                        providedIn: "root"
                    })
                }
                return r
            })();
            var m = c(34356),
                n = c(32834),
                o = c(3323),
                s = c(35998),
                p = c(24006);
            const l = ["myForm"];

            function f(r, w) {
                1 & r && t._UZ(0, "input", 5)
            }
            let v = (() => {
                class r {
                    constructor(e, a, i) {
                        this.commonService = e, this.paymentService = a, this.spinner = i, this.show = !1, this.encData = "", this.merchantCode = "", this.merchantLoginUrl = "https://merchant.onlinesbi.sbi/merchant/merchantprelogin.htm", this.cnt = 0
                    }
                    ngOnChanges(e) {
                        "paymentObj" in e && this.initiatePayment(this.paymentObj)
                    }
                    ngOnInit() {}
                    get_action() {
                        return this.merchantLoginUrl
                    }
                    initiatePayment(e) {
                        console.group("xxxxxxx", e), e ? .merchantCode && e ? .encdata && (document.getElementById("myForm").reset(), this.spinner.show(), document.forms[document.forms.length - 1].action = this.merchantLoginUrl, this.merchantCode = e.merchantCode, this.encData = e.encdata, document.getElementById("merchant_code").value = this.merchantCode, document.getElementById("encdata").value = this.encData, this.merchantLoginUrl && this.merchantCode && this.encData && (this.show = !0, this.spinner.hide(), setTimeout(() => {
                            this.myForm.nativeElement.submit()
                        }, 0)))
                    }
                    static# t = this.\u0275fac = function(a) {
                        return new(a || r)(t.Y36(o.v), t.Y36(x.t), t.Y36(s.V))
                    };
                    static# e = this.\u0275cmp = t.Xpm({
                        type: r,
                        selectors: [
                            ["app-payment"]
                        ],
                        viewQuery: function(a, i) {
                            if (1 & a && t.Gf(l, 5), 2 & a) {
                                let d;
                                t.iGM(d = t.CRH()) && (i.myForm = d.first)
                            }
                        },
                        inputs: {
                            paymentObj: "paymentObj"
                        },
                        features: [t.TTD],
                        decls: 5,
                        vars: 1,
                        consts: [
                            ["id", "myForm", "action", "", "method", "post"],
                            ["myForm", ""],
                            ["name", "encdata", "id", "encdata", "type", "hidden"],
                            ["name", "merchant_code", "id", "merchant_code", "type", "hidden"],
                            ["type", "submit", "value", "Submit", "name", "Submit", "style", "opacity: 0;", 4, "ngIf"],
                            ["type", "submit", "value", "Submit", "name", "Submit", 2, "opacity", "0"]
                        ],
                        template: function(a, i) {
                            1 & a && (t.TgZ(0, "form", 0, 1), t._UZ(2, "input", 2)(3, "input", 3), t.YNc(4, f, 1, 0, "input", 4), t.qZA()), 2 & a && (t.xp6(4), t.Q6J("ngIf", i.show))
                        },
                        dependencies: [g.O5, p._Y, p.JL, p.F]
                    })
                }
                return r
            })();

            function C(r, w) {
                1 & r && (t.TgZ(0, "div", 6)(1, "div", 7), t._uU(2, "Select Payment Gateway"), t.qZA()())
            }

            function y(r, w) {
                1 & r && (t.TgZ(0, "div", 26), t._UZ(1, "img", 27), t.qZA())
            }

            function _(r, w) {
                if (1 & r) {
                    const e = t.EpF();
                    t.ynx(0), t.TgZ(1, "div", 20), t.NdJ("click", function() {
                        const i = t.CHM(e),
                            d = i.$implicit,
                            E = i.index,
                            D = t.oxw(2);
                        return t.KtG(D.setPG(d, E))
                    }), t.TgZ(2, "div", 21)(3, "div", 22), t._UZ(4, "img", 23), t.qZA(), t.TgZ(5, "div", 24), t._uU(6), t.qZA()(), t.YNc(7, y, 2, 0, "div", 25), t.qZA(), t.BQk()
                }
                if (2 & r) {
                    const e = w.$implicit,
                        a = w.index,
                        i = t.oxw(2);
                    t.xp6(1), t.ekj("active", i.activeIndex === a), t.xp6(3), t.Q6J("src", e.iconUrl, t.LSH), t.xp6(2), t.Oqu(null == e ? null : e.name), t.xp6(1), t.Q6J("ngIf", i.activeIndex === a)
                }
            }

            function O(r, w) {
                if (1 & r && (t.ynx(0), t.TgZ(1, "div", 18), t.YNc(2, _, 8, 5, "ng-container", 19), t.qZA(), t.BQk()), 2 & r) {
                    const e = t.oxw();
                    t.xp6(2), t.Q6J("ngForOf", e.paymentGateways)
                }
            }
            let U = (() => {
                class r {
                    constructor(e, a, i, d, E, D, I, z) {
                        this.data = e, this.dialogRef = a, this.document = i, this.dialogService = d, this.paymentService = E, this.pg = D, this.tokenService = I, this.dashboardService = z, this.isPgActive = !1, this.paymentGateways = [], this.btnDisabled = !0, this.allowedRegistrationNumbers = [], this.liveExams = [], this.userData = this.tokenService.getDecoded(), e.result && (this.requestBody = {
                            examId: e ? .result ? .doc ? .examId,
                            registrationNum: e ? .result ? .doc ? .registrationNum,
                            applicationId: e ? .result ? .doc ? .applicationId,
                            notificationId: e ? .result ? .doc ? .notificationId,
                            examCode: e ? .result ? .examData ? .examCode,
                            examYear: e ? .result ? .doc ? .examYear,
                            pymntCode: e ? .result ? .liveExamData ? .pymntCode
                        }), this.getRegistratioNumbers(), e.result.isPgActive || (this.btnDisabled = !1), e.result.isPgActive && this.getPaymentGateways(), "answerKey" == e ? .result ? .type && (this.paymentAmount = e.result ? .fee), "fee" == e ? .result ? .type && ("1" == e ? .result ? .associatedApplications[0] ? .numberOfAttempts && (this.paymentAmount = e ? .result ? .liveExamData ? .fee), "2" == e ? .result ? .associatedApplications[0] ? .numberOfAttempts && (this.paymentAmount = e ? .result ? .liveExamData ? .cwfee1), "3" == e ? .result ? .associatedApplications[0] ? .numberOfAttempts && (this.paymentAmount = e ? .result ? .liveExamData ? .cwfee2))
                    }
                    getRegistratioNumbers() {
                        var e = this;
                        return (0, S.Z)(function*() {
                            [e.liveExams, e.allowedRegistrationNumbers] = yield e.dashboardService.setReLiveExams(), console.log(e.allowedRegistrationNumbers)
                        })()
                    }
                    onSubmit(e) {
                        let a;
                        "answerKey" == this.data ? .result ? .type && (a = this.data ? .result, this.paymentService.initiatePaymentForAnswerKey(a).subscribe(i => {
                            if ("200" == i.statusCode) {
                                let d = i.data;
                                this.initiatePaymentObj = {
                                    encdata: d.encdata,
                                    merchantCode: d.merchantCode
                                }
                            } else console.log("error=====>", i)
                        }, i => {
                            console.log("error=====>", i)
                        })), "fee" == this.data ? .result ? .type && (e = this.data ? .result, a = {
                            examId: e.doc.examId,
                            registrationNum: e.doc.registrationNum,
                            applicationId: e.doc.applicationId,
                            notificationId: e.doc.notificationId,
                            examCode: e.examData.examCode,
                            examYear: e.doc.examYear,
                            pymntCode: e ? .liveExamData ? .pymntCode
                        }, this.paymentService.initiatePayment(a).subscribe(i => {
                            if ("200" == i.statusCode) {
                                let d = i.data;
                                this.initiatePaymentObj = {
                                    encdata: d.encdata,
                                    merchantCode: d.merchantCode
                                }
                            } else "203" === i.statusCode && this.dialogService.openDialog("Error", i ? .error), console.log("error=====>", i)
                        }, i => {
                            "203" === i.error.statusCode && this.dialogService.openDialog("Error", i ? .error ? .error), console.log("error=====>", i)
                        }))
                    }
                    closeDialog() {
                        this.dialogRef.close()
                    }
                    getPaymentGateways() {
                        this.pg.getPaymentGateway().subscribe({
                            next: e => {
                                if ("200" == e.statusCode) {
                                    let a = this.tokenService.decryptData(e ? .data);
                                    "error" !== a ? .decryptedData ? ((a ? .decryptedData.some(i => "UAT" === i ? .mode ? .toUpperCase()) && this.allowedRegistrationNumbers[this.requestBody ? .examCode.toUpperCase()] && this.allowedRegistrationNumbers[this.requestBody ? .examCode.toUpperCase()].includes(this.userData ? .username) || a ? .decryptedData.some(i => "PRODUCTION" === i ? .mode ? .toUpperCase())) && (this.paymentGateways = a ? .decryptedData), this.paymentGateways.length > 0 ? this.isPgActive = !0 : (this.isPgActive = !1, this.btnDisabled = !1)) : (this.isPgActive = !1, this.btnDisabled = !1)
                                }
                            }
                        })
                    }
                    setPG(e, a) {
                        this.activeIndex = a, this.requestBody = { ...this.requestBody,
                            gatewayCode: e ? .code
                        }, this.btnDisabled = !1
                    }
                    payNow() {
                        this.isPgActive ? "KMB" === this.requestBody.gatewayCode ? this.createPaymentPG() : "SBI" === this.requestBody.gatewayCode && this.onSubmit("") : this.onSubmit("")
                    }
                    createPaymentPG() {
                        this.pg.createOrder(this.requestBody).subscribe({
                            next: e => {
                                if ("200" == e.statusCode) try {
                                    let {
                                        decryptedData: a
                                    } = this.tokenService.decryptData(e ? .data ? .options);
                                    if (a) {
                                        this.pg.setPaymentData(this.requestBody);
                                        let i = this.pg.initializeRazorpay(a);
                                        this.closeDialog(), i.open()
                                    }
                                } catch {
                                    this.dialogService.openDialog("Error", "Faced some issue, please try again")
                                } else "203" == e.statusCode && this.dialogService.openDialog("Error", e.error)
                            },
                            error: e => {
                                this.dialogService.openDialog("Error", "Internal Server Error")
                            }
                        })
                    }
                    static# t = this.\u0275fac = function(a) {
                        return new(a || r)(t.Y36(P.WI), t.Y36(P.so), t.Y36(g.K0), t.Y36(A.x), t.Y36(x.t), t.Y36(N), t.Y36(m.i), t.Y36(n.s))
                    };
                    static# e = this.\u0275cmp = t.Xpm({
                        type: r,
                        selectors: [
                            ["app-payment-confirmation"]
                        ],
                        decls: 25,
                        vars: 5,
                        consts: [
                            [1, "dialog-overlay"],
                            ["paymentDialog", ""],
                            [1, "dialog"],
                            [1, "dialog-header"],
                            [1, "di-head"],
                            ["src", "assets/image/Global.svg", "alt", "close", 2, "cursor", "pointer", "padding", "0px 24px", 3, "click"],
                            [1, "payment-mode"],
                            [1, "mode"],
                            [1, "mode-type"],
                            [1, "separator-line"],
                            [1, "amount-section"],
                            [1, "amount-label"],
                            [1, "amount-value"],
                            ["class", "payment-mode", 4, "ngIf"],
                            [4, "ngIf"],
                            [1, "button-cont", 2, "padding-right", "14px"],
                            ["type", "button", 1, "save-btn", 3, "disabled", "click"],
                            [3, "paymentObj"],
                            [1, "pg-section"],
                            [4, "ngFor", "ngForOf"],
                            [1, "pg-row", 3, "click"],
                            [1, "con"],
                            [1, "pg-icon"],
                            [1, "bank-logo", 3, "src"],
                            [1, "pg-desc"],
                            ["class", "tick", 4, "ngIf"],
                            [1, "tick"],
                            ["src", "assets/images/tick.svg"]
                        ],
                        template: function(a, i) {
                            1 & a && (t.TgZ(0, "div", 0, 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4), t._uU(5, "Make a payment"), t.qZA(), t.TgZ(6, "img", 5), t.NdJ("click", function() {
                                return i.closeDialog()
                            }), t.qZA()(), t.TgZ(7, "div", 6)(8, "div", 7), t._uU(9, "Fees Payment Mode:"), t.qZA(), t.TgZ(10, "div", 8), t._uU(11, "Online"), t.qZA()(), t._UZ(12, "div", 9), t.TgZ(13, "div", 10)(14, "div", 11), t._uU(15, "Amount:"), t.qZA(), t.TgZ(16, "div", 12), t._uU(17), t.qZA()(), t._UZ(18, "div", 9), t.YNc(19, C, 3, 0, "div", 13), t.YNc(20, O, 3, 1, "ng-container", 14), t.TgZ(21, "div", 15)(22, "button", 16), t.NdJ("click", function() {
                                return i.payNow()
                            }), t._uU(23, " Pay "), t.qZA()()()(), t._UZ(24, "app-payment", 17)), 2 & a && (t.xp6(17), t.Oqu(i.paymentAmount), t.xp6(2), t.Q6J("ngIf", i.isPgActive), t.xp6(1), t.Q6J("ngIf", i.isPgActive), t.xp6(2), t.Q6J("disabled", i.btnDisabled), t.xp6(2), t.Q6J("paymentObj", i.initiatePaymentObj))
                        },
                        dependencies: [g.sg, g.O5, v],
                        styles: ['@charset "UTF-8";.cardd-block[_ngcontent-%COMP%]{border:1px solid #d6d6d6;background:var(--global-white, #fdfdfd);padding:40px;width:50%;height:auto;margin-left:30px;margin-top:30px;margin-bottom:30px}.pay[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-family:Nunito Sans;font-size:24px;font-style:normal;font-weight:700;line-height:140%}.ftty[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-family:Nunito Sans;font-size:16px;font-style:normal;font-weight:700;line-height:140%;padding-top:16px}.fftyy[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:400;line-height:140%}.roll[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:700;line-height:140%}.input[_ngcontent-%COMP%]{display:flex;padding:0 16px;align-items:center;gap:10px;border-radius:5px;background:var(--button-icon-background, #f9f1f1);border:none;outline:none;box-shadow:none;width:100%;height:35px}.form[_ngcontent-%COMP%]{padding-top:40px}.note-section[_ngcontent-%COMP%]{margin-top:32px}.note[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-family:Nunito Sans;font-size:18px;font-style:normal;font-weight:800;line-height:140%;margin-bottom:5px}.bullet-list[_ngcontent-%COMP%]{list-style-type:none;margin-left:0;padding-left:0}.bullet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:15px;color:var(--fonts-body, #606060);font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:400;line-height:140%}.bullet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0}.proceed-button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:20px}.proceed-button[_ngcontent-%COMP%]{background-color:#8e433e;border-radius:56px;padding:13px 27px;cursor:pointer;color:#fff;border:none}.chall[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-family:Nunito Sans;font-size:24px;font-style:normal;font-weight:700;line-height:140%;margin-left:30px;margin-bottom:30px}.new-card-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:64px}.center-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.new-card-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{text-align:center;margin-top:40px;color:var(--fonts-title, #252525);font-family:Nunito Sans;font-size:36px;font-style:normal;font-weight:700;line-height:140%}.new-card-block[_ngcontent-%COMP%]   .additional-content[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-family:Nunito Sans;font-size:16px;font-style:normal;font-weight:400;line-height:140%;margin-top:16px}.new-card-block[_ngcontent-%COMP%]   .click-button-container[_ngcontent-%COMP%]{margin-top:20px}.click-button[_ngcontent-%COMP%]{border-radius:56px;background:var(--button-default, #8e433e);color:var(--global-white, #fdfdfd);font-family:Nunito Sans;font-size:16px;font-style:normal;font-weight:800;line-height:140%;border:none;padding:10px 26px;cursor:pointer}.dialog-overlay[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999}.dialog[_ngcontent-%COMP%]{background-color:var(--bg-color);border:1px solid var(--input-border-color);border-radius:5px;box-shadow:none;width:40%}.dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid var(--global-border);padding:10px 0 2px}.dialog[_ngcontent-%COMP%]   .di-head[_ngcontent-%COMP%]{font-family:var(--font-family);font-size:24px;font-weight:700a;padding:0 24px}.button-cont[_ngcontent-%COMP%]{display:flex;justify-content:end;background-color:#f0dddb;padding-bottom:10px;padding-top:13px}.modl[_ngcontent-%COMP%]{color:var(--fonts-primary, #1e1e1e);margin-top:24px;margin-left:24px;margin-right:24px;font-family:Nunito Sans;font-size:16px;font-style:normal;font-weight:400;line-height:140%}.exm[_ngcontent-%COMP%]{color:var(--fonts-primary, #1e1e1e);margin-top:40px;margin-left:24px;font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:400;line-height:140%}.nme[_ngcontent-%COMP%]{color:var(--fonts-primary, #1e1e1e);margin-top:8px;margin-left:24px;font-family:Nunito Sans;font-size:18px;font-style:normal;font-weight:700;line-height:140%;margin-bottom:26px}.Cancel[_ngcontent-%COMP%]{color:var(--button-default, #8e433e);font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:800;line-height:140%;padding-top:12px;padding-right:15px}.btnn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:56px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;margin-right:20px;cursor:pointer}.btnn[_ngcontent-%COMP%]:focus{color:#fff}.btnn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.payment-mode[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;padding:0 24px;margin-top:15px}.mode[_ngcontent-%COMP%]{font-weight:700}.mode-type[_ngcontent-%COMP%]{text-align:right}.amount-section[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 24px;margin-bottom:25px}.amount-label[_ngcontent-%COMP%]{flex:1;font-weight:700}.amount-value[_ngcontent-%COMP%]{flex:1;text-align:right}.separator-line[_ngcontent-%COMP%]{border-top:1px solid #e6e6e6;margin:10px 0}.table-box[_ngcontent-%COMP%]{display:flex;justify-content:center}.table-view[_ngcontent-%COMP%]{width:95%;overflow:auto}.pg-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column;margin-bottom:15px;padding:0 14px;margin-top:15px}.pg-section[_ngcontent-%COMP%]   .pg-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10px;align-items:center;padding:10px;margin-bottom:10px;border:1.5px solid rgba(243,231,231,.9607843137);cursor:pointer}.pg-section[_ngcontent-%COMP%]   .pg-row[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.pg-section[_ngcontent-%COMP%]   .pg-row[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .pg-icon[_ngcontent-%COMP%]   .bank-logo[_ngcontent-%COMP%]{width:30px}.pg-section[_ngcontent-%COMP%]   .pg-row[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .pg-desc[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.pg-section[_ngcontent-%COMP%]   .pg-row[_ngcontent-%COMP%]:hover, .pg-section[_ngcontent-%COMP%]   .pg-row.active[_ngcontent-%COMP%]{border:1.5px solid rgba(139,66,60,.4117647059)}.pg-section[_ngcontent-%COMP%]   .pg-row[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}button[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%]{cursor:not-allowed;background:#cec5c5}']
                    })
                }
                return r
            })()
        },
        95017: (k, M, c) => {
            c.d(M, {
                A8: () => b,
                Z9: () => t,
                eX: () => T,
                k: () => N,
                yy: () => x
            });
            var S = c(94033),
                g = c(94650);

            function t(m) {
                return m && "function" == typeof m.connect && !(m instanceof S.c)
            }
            class x {
                applyChanges(n, o, s, p, l) {
                    n.forEachOperation((f, v, C) => {
                        let y, _;
                        if (null == f.previousIndex) {
                            const O = s(f, v, C);
                            y = o.createEmbeddedView(O.templateRef, O.context, O.index), _ = 1
                        } else null == C ? (o.remove(v), _ = 3) : (y = o.get(v), o.move(y, C), _ = 2);
                        l && l({
                            context: y ? .context,
                            operation: _,
                            record: f
                        })
                    })
                }
                detach() {}
            }
            class T {
                constructor() {
                    this.viewCacheSize = 20, this._viewCache = []
                }
                applyChanges(n, o, s, p, l) {
                    n.forEachOperation((f, v, C) => {
                        let y, _;
                        null == f.previousIndex ? (y = this._insertView(() => s(f, v, C), C, o, p(f)), _ = y ? 1 : 0) : null == C ? (this._detachAndCacheView(v, o), _ = 3) : (y = this._moveView(v, C, o, p(f)), _ = 2), l && l({
                            context: y ? .context,
                            operation: _,
                            record: f
                        })
                    })
                }
                detach() {
                    for (const n of this._viewCache) n.destroy();
                    this._viewCache = []
                }
                _insertView(n, o, s, p) {
                    const l = this._insertViewFromCache(o, s);
                    if (l) return void(l.context.$implicit = p);
                    const f = n();
                    return s.createEmbeddedView(f.templateRef, f.context, f.index)
                }
                _detachAndCacheView(n, o) {
                    const s = o.detach(n);
                    this._maybeCacheView(s, o)
                }
                _moveView(n, o, s, p) {
                    const l = s.get(n);
                    return s.move(l, o), l.context.$implicit = p, l
                }
                _maybeCacheView(n, o) {
                    if (this._viewCache.length < this.viewCacheSize) this._viewCache.push(n);
                    else {
                        const s = o.indexOf(n); - 1 === s ? n.destroy() : o.remove(s)
                    }
                }
                _insertViewFromCache(n, o) {
                    const s = this._viewCache.pop();
                    return s && o.insert(s, n), s || null
                }
            }
            let b = (() => {
                class m {
                    constructor() {
                        this._listeners = []
                    }
                    notify(o, s) {
                        for (let p of this._listeners) p(o, s)
                    }
                    listen(o) {
                        return this._listeners.push(o), () => {
                            this._listeners = this._listeners.filter(s => o !== s)
                        }
                    }
                    ngOnDestroy() {
                        this._listeners = []
                    }
                }
                return m.\u0275fac = function(o) {
                    return new(o || m)
                }, m.\u0275prov = g.Yz7({
                    token: m,
                    factory: m.\u0275fac,
                    providedIn: "root"
                }), m
            })();
            const N = new g.OlP("_ViewRepeater")
        }
    }
]);