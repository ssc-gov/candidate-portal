"use strict";
(self.webpackChunkcandidate_portal = self.webpackChunkcandidate_portal || []).push([
    [634], {
        4634: (I, v, s) => {
            s.r(v), s.d(v, {
                AnswerKeyChallengeModule: () => Ve
            });
            var o = s(36895),
                b = s(80529),
                f = s(11310),
                e = s(94650);
            let w = (() => {
                class n {
                    static# e = this.\u0275fac = function(i) {
                        return new(i || n)
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["app-answer-key-challenge"]
                        ],
                        decls: 1,
                        vars: 0,
                        template: function(i, a) {
                            1 & i && e._UZ(0, "router-outlet")
                        },
                        dependencies: [f.lC]
                    })
                }
                return n
            })();
            var C = s(77039),
                O = s(7206),
                m = s(20269),
                g = s(24006),
                h = s(11341),
                u = s(88168),
                l = s(65412),
                p = s(68479),
                c = s(7155);

            function _(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 30), e.NdJ("click", function() {
                        e.CHM(t);
                        const a = e.oxw(2);
                        return e.KtG(a.openDialog())
                    }), e._uU(1, " Proceed for payment "), e.qZA()
                }
            }

            function y(n, r) {
                1 & n && (e.TgZ(0, "th", 31), e._uU(1, " Roll No "), e.qZA())
            }

            function N(n, r) {
                if (1 & n && (e.TgZ(0, "td", 32), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t ? null : t.rollNumber, " ")
                }
            }

            function Z(n, r) {
                1 & n && (e.TgZ(0, "th", 33), e._uU(1, "Exam Name"), e.qZA())
            }

            function P(n, r) {
                if (1 & n && (e.TgZ(0, "td", 32), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit,
                        i = e.oxw(2);
                    e.xp6(1), e.hij(" ", i.getExamName(null == t ? null : t.examId), " ")
                }
            }

            function A(n, r) {
                1 & n && (e.TgZ(0, "th", 33), e._uU(1, " Exam Date and Shift "), e.qZA())
            }

            function F(n, r) {
                if (1 & n && (e.TgZ(0, "td", 32), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t ? null : t.examDateShiftId, " ")
                }
            }

            function U(n, r) {
                1 & n && (e.TgZ(0, "th", 33), e._uU(1, "Question Id"), e.qZA())
            }

            function q(n, r) {
                if (1 & n && (e.TgZ(0, "td", 32), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t ? null : t.questionId, " ")
                }
            }

            function Y(n, r) {
                1 & n && (e.TgZ(0, "th", 33), e._uU(1, " Nature of Objection "), e.qZA())
            }

            function j(n, r) {
                if (1 & n && (e.TgZ(0, "td", 32), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t || null == t.natureOfObjection ? null : t.natureOfObjection.name, " ")
                }
            }

            function R(n, r) {
                1 & n && (e.TgZ(0, "th", 33), e._uU(1, "Submit Time"), e.qZA())
            }

            function z(n, r) {
                if (1 & n && (e.TgZ(0, "td", 32), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.Oqu(null == t ? null : t.createdAt)
                }
            }

            function K(n, r) {
                1 & n && e._UZ(0, "tr", 34)
            }

            function Q(n, r) {
                1 & n && e._UZ(0, "tr", 35)
            }

            function B(n, r) {
                if (1 & n && (e.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4), e._uU(4, "Payment Information"), e.qZA(), e.TgZ(5, "div", 5), e._uU(6), e.qZA(), e.TgZ(7, "div", 6), e._uU(8, " Candidates can submit representations by depositing Rs. 100/- per challenge "), e.qZA(), e.TgZ(9, "form", 7)(10, "label", 8), e._uU(11, "Roll Number:"), e.qZA(), e._UZ(12, "br")(13, "input", 9), e.qZA(), e.TgZ(14, "div", 10)(15, "div", 11), e._uU(16, "Note:"), e.qZA(), e.TgZ(17, "ul", 12)(18, "li"), e._uU(19, " You will be redirected to payment gateway after proceeding(If a successfull payment is already done and no challenge is submitted for this payment then,you will be redirected to the challenge form after proceeding) "), e.qZA()()(), e.TgZ(20, "div", 13), e.YNc(21, _, 2, 0, "button", 14), e.qZA()()(), e.ynx(22), e.TgZ(23, "div", 15), e._uU(24, "Challenges Submitted by you"), e.qZA(), e.TgZ(25, "div", 16)(26, "div", 17)(27, "table", 18), e.ynx(28, 19), e.YNc(29, y, 2, 0, "th", 20), e.YNc(30, N, 2, 1, "td", 21), e.BQk(), e.ynx(31, 22), e.YNc(32, Z, 2, 0, "th", 23), e.YNc(33, P, 2, 1, "td", 21), e.BQk(), e.ynx(34, 24), e.YNc(35, A, 2, 0, "th", 23), e.YNc(36, F, 2, 1, "td", 21), e.BQk(), e.ynx(37, 25), e.YNc(38, U, 2, 0, "th", 23), e.YNc(39, q, 2, 1, "td", 21), e.BQk(), e.ynx(40, 26), e.YNc(41, Y, 2, 0, "th", 23), e.YNc(42, j, 2, 1, "td", 21), e.BQk(), e.ynx(43, 27), e.YNc(44, R, 2, 0, "th", 23), e.YNc(45, z, 2, 1, "td", 21), e.BQk(), e.YNc(46, K, 1, 0, "tr", 28), e.YNc(47, Q, 1, 0, "tr", 29), e.qZA()()(), e.BQk(), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(6), e.Oqu(t.examName), e.xp6(3), e.Q6J("formGroup", t.paymentForm), e.xp6(12), e.Q6J("ngIf", !t.disableBtn), e.xp6(6), e.Q6J("dataSource", t.allChallenges), e.xp6(19), e.Q6J("matHeaderRowDef", t.displayedColumns), e.xp6(1), e.Q6J("matRowDefColumns", t.displayedColumns)
                }
            }

            function J(n, r) {
                1 & n && (e.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 10)(4, "div", 11), e._uU(5, "Note:"), e.qZA(), e.TgZ(6, "ul", 12)(7, "li"), e._uU(8, "You are not authorized to access this page."), e.qZA()()()()()())
            }
            let L = (() => {
                class n {
                    constructor(t, i, a, d, x, M, T) {
                        this.formBuilder = t, this.answerKeyChallengeService = i, this.route = a, this.paymentService = d, this.activeRoute = x, this.dialog = M, this.commonDataService = T, this.dialogOpen = !1, this.displayedColumns = ["Roll No", "Exam Name", "Exam Date and Shift", "Question Id", "Nature of Objection", "Submit Time"], this.rollNo = 14456, this.showErrorMessage = !1, this.disableBtn = !1, this.exams = []
                    }
                    ngOnInit() {
                        this.exams = this.commonDataService.getExams(), this.activeRoute.queryParams.subscribe(a => {
                            this.rollNo = a.rollNo, this.key = a.key, this.chId = a.chId, this.chId = this.chId.replace(/ /g, "+")
                        }), this.paymentForm = this.formBuilder.group({
                            rollNo: [this.rollNo],
                            saltValue: [""],
                            challengeUrl: [""]
                        }), this.answerKeyChallengeService.peep$.subscribe(a => {
                            this.examName = a
                        }), this.getDetailsByChID();
                        const t = sessionStorage.getItem("examDataForAnswerKey"),
                            i = JSON.parse(t);
                        this.examId = i ? .examId, this.examYear = i ? .examYear, this.examName = i ? .examName, this.notificationId = i ? .notificationId, this.examId && this.getAllChallenges()
                    }
                    getAllChallenges() {
                        this.answerKeyChallengeService.getRaisedChallenge(this.examId).subscribe(t => {
                            this.allChallenges = t.data
                        })
                    }
                    getDetailsByChID() {
                        this.answerKeyChallengeService.getDetailsByChID({
                            chId: this.chId
                        }).subscribe(i => {
                            if ("200" == i.statusCode) {
                                let a = i.data[0];
                                this.saltValue = a ? .saltValue, this.challengeUrl = a ? .challengeUrl, this.decryptedChid = a ? .chId, this.fee = a ? .fee, this.decryptUsingAES256()
                            } else console.log("error=====>", i), this.disableBtn = !0
                        }, i => {
                            console.log("error=====>", i)
                        })
                    }
                    decryptUsingAES256() {
                        const i = O.MD5(this.rollNo + this.saltValue).toString(O.enc.Hex);
                        console.group("md5 and key::", i, this.key), console.group("matched::", i == this.key), i == this.key ? console.group("proceeding-------\x3e") : this.showErrorMessage = !0
                    }
                    openDialog() {
                        this.dialog.open(m.y, {
                            width: "70%",
                            minHeight: "calc(100vh - 90px)",
                            height: "auto",
                            exitAnimationDuration: 0,
                            enterAnimationDuration: 0,
                            data: {
                                result: {
                                    rollNumber: this.rollNo,
                                    saltValue: this.saltValue,
                                    challengeUrl: this.challengeUrl,
                                    notificationId: this.notificationId,
                                    fee: this.fee,
                                    type: "answerKey",
                                    chId: this.decryptedChid
                                }
                            }
                        }), this.dialogOpen = !0
                    }
                    closeDialog() {
                        this.dialogOpen = !1
                    }
                    getExamName(t) {
                        return this.exams ? .find(a => a.id === t) ? .examName
                    }
                    static# e = this.\u0275fac = function(i) {
                        return new(i || n)(e.Y36(g.qu), e.Y36(h.t), e.Y36(f.F0), e.Y36(u.t), e.Y36(f.gz), e.Y36(l.uw), e.Y36(p.I))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["app-challenge-payment-screen"]
                        ],
                        decls: 2,
                        vars: 2,
                        consts: [
                            ["class", "container", 4, "ngIf"],
                            [1, "container"],
                            [1, "row", "cards", "rws"],
                            [1, "form-block", "card-width"],
                            [1, "pay"],
                            [1, "ftty"],
                            [1, "fftyy"],
                            [1, "form", 3, "formGroup"],
                            ["for", "inputField", 1, "roll"],
                            ["type", "text", "formControlName", "rollNo", "id", "inputField", "name", "inputField", "readonly", "", 1, "input"],
                            [1, "note-section"],
                            [1, "note"],
                            [1, "bullet-list"],
                            [1, "proceed-button-container"],
                            ["class", "proceed-button", 3, "click", 4, "ngIf"],
                            [1, "chall"],
                            [1, "table-box", "rws"],
                            [1, "table-view", "work-table"],
                            ["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"],
                            ["matColumnDef", "Roll No"],
                            ["width", "14%", "class", "head-class", "mat-header-cell", "", 4, "matHeaderCellDef"],
                            ["mat-cell", "", 4, "matCellDef"],
                            ["matColumnDef", "Exam Name"],
                            ["width", "12%", "mat-header-cell", "", 4, "matHeaderCellDef"],
                            ["matColumnDef", "Exam Date and Shift"],
                            ["matColumnDef", "Question Id"],
                            ["matColumnDef", "Nature of Objection"],
                            ["matColumnDef", "Submit Time"],
                            ["mat-header-row", "", 4, "matHeaderRowDef"],
                            ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
                            [1, "proceed-button", 3, "click"],
                            ["width", "14%", "mat-header-cell", "", 1, "head-class"],
                            ["mat-cell", ""],
                            ["width", "12%", "mat-header-cell", ""],
                            ["mat-header-row", ""],
                            ["mat-row", ""]
                        ],
                        template: function(i, a) {
                            1 & i && (e.YNc(0, B, 48, 6, "div", 0), e.YNc(1, J, 9, 0, "div", 0)), 2 & i && (e.Q6J("ngIf", !a.showErrorMessage), e.xp6(1), e.Q6J("ngIf", a.showErrorMessage))
                        },
                        dependencies: [o.O5, g._Y, g.Fj, g.JJ, g.JL, g.sg, g.u, c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk],
                        styles: ['@charset "UTF-8";.cardd-block[_ngcontent-%COMP%]{border:1px solid #d6d6d6;background:var(--global-white, #fdfdfd);padding:40px;width:50%;height:auto;margin-left:30px;margin-top:30px;margin-bottom:30px}.pay[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:24px;font-style:normal;font-weight:700;line-height:140%}.ftty[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:16px;font-style:normal;font-weight:700;line-height:140%;padding-top:16px}.fftyy[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.roll[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:14px;font-style:normal;font-weight:700;line-height:140%}.input[_ngcontent-%COMP%]{display:flex;padding:0 16px;align-items:center;gap:10px;border-radius:5px;background:var(--button-icon-background, #F9F1F1);border:none;outline:none;box-shadow:none;width:100%;height:35px}.form[_ngcontent-%COMP%]{padding-top:40px}.note-section[_ngcontent-%COMP%]{margin-top:32px}.note[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-size:18px;font-style:normal;font-weight:800;line-height:140%;margin-bottom:5px}.bullet-list[_ngcontent-%COMP%]{list-style-type:none;margin-left:0;padding-left:0}.bullet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:15px;color:var(--fonts-body, #606060);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.bullet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0}.proceed-button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:20px}.proceed-button[_ngcontent-%COMP%]{background-color:#8e433e;border-radius:56px;padding:13px 27px;cursor:pointer;color:#fff;border:none}.chall[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:24px;font-style:normal;font-weight:700;line-height:140%;margin-left:30px;margin-bottom:30px}.new-card-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:64px}.center-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.new-card-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{text-align:center;margin-top:40px;color:var(--fonts-title, #252525);font-size:36px;font-style:normal;font-weight:700;line-height:140%}.new-card-block[_ngcontent-%COMP%]   .additional-content[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:16px;font-style:normal;font-weight:400;line-height:140%;margin-top:16px}.new-card-block[_ngcontent-%COMP%]   .click-button-container[_ngcontent-%COMP%]{margin-top:20px}.click-button[_ngcontent-%COMP%]{border-radius:56px;background:var(--button-default, #8E433E);color:var(--global-white, #FDFDFD);font-size:16px;font-style:normal;font-weight:800;line-height:140%;border:none;padding:10px 26px;cursor:pointer}.dialog-overlay[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999}.dialog[_ngcontent-%COMP%]{background-color:var(--bg-color);border:1px solid var(--input-border-color);border-radius:5px;box-shadow:none;width:33%}.dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid var(--global-border);padding:10px 0 2px}.dialog[_ngcontent-%COMP%]   .di-head[_ngcontent-%COMP%]{font-family:var(--font-family);font-size:24px;font-weight:700a;padding:0 24px}.button-cont[_ngcontent-%COMP%]{display:flex;justify-content:end;background-color:#f0dddb;padding-bottom:10px;padding-top:13px}.modl[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);margin-top:24px;margin-left:24px;margin-right:24px;font-family:Nunito Sans;font-size:16px;font-style:normal;font-weight:400;line-height:140%}.exm[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);margin-top:40px;margin-left:24px;font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:400;line-height:140%}.nme[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);margin-top:8px;margin-left:24px;font-family:Nunito Sans;font-size:18px;font-style:normal;font-weight:700;line-height:140%;margin-bottom:26px}.Cancel[_ngcontent-%COMP%]{color:var(--button-default, #8E433E);font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:800;line-height:140%;padding-top:12px;padding-right:15px}.btnn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:56px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;margin-right:20px;cursor:pointer}.btnn[_ngcontent-%COMP%]:focus{color:#fff}.btnn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.payment-mode[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;padding:0 24px;margin-top:15px}.mode[_ngcontent-%COMP%]{font-weight:700}.mode-type[_ngcontent-%COMP%]{text-align:right}.amount-section[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 24px;margin-bottom:25px}.amount-label[_ngcontent-%COMP%]{flex:1;font-weight:700}.amount-value[_ngcontent-%COMP%]{flex:1;text-align:right}.separator-line[_ngcontent-%COMP%]{border-top:1px solid #E6E6E6;margin:10px 0}.table-box[_ngcontent-%COMP%]{display:flex;justify-content:center}.table-view[_ngcontent-%COMP%]{width:95%;overflow:auto}']
                    })
                }
                return n
            })();
            var D = s(57930),
                V = s(98290);

            function H(n, r) {
                1 & n && (e.TgZ(0, "div", 18), e._uU(1, " Exam Date&Shift is Mandatory field "), e.qZA())
            }

            function G(n, r) {
                1 & n && (e.TgZ(0, "div", 18), e._uU(1, " QuestionID is mandatory field "), e.qZA())
            }

            function $(n, r) {
                1 & n && (e.TgZ(0, "div", 18), e._uU(1, " QuestionID is only number field "), e.qZA())
            }

            function W(n, r) {
                1 & n && (e.TgZ(0, "div", 18), e._uU(1, " Nature of Objection is Mandatory field "), e.qZA())
            }
            const S = function() {
                return ["name"]
            };

            function X(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.ynx(0), e.TgZ(1, "div", 6)(2, "div", 7)(3, "app-dropdown", 19), e.NdJ("selectionChange", function(a) {
                        e.CHM(t);
                        const d = e.oxw();
                        return e.KtG(d.objectionChange(a))
                    }), e.qZA(), e.YNc(4, W, 2, 0, "div", 12), e.qZA()(), e.TgZ(5, "div", 20)(6, "div", 21)(7, "label", 22), e._uU(8, "5. Reason (Optional) "), e.qZA(), e.TgZ(9, "div", 23), e._UZ(10, "textarea", 24), e.TgZ(11, "div", 25), e._uU(12, "Maximum 250 characters allowed"), e.qZA()()()(), e.BQk()
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.xp6(3), e.Q6J("showRequired", "true")("showSearch", !1)("searchPlaceholder", "Search options...")("options", t.allObjections)("selectedOption", t.optEmptyVal2)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", e.DdM(8, S)), e.xp6(1), e.Q6J("ngIf", t.submitted && t.challengeForm.controls.nobId.errors)
                }
            }

            function ee(n, r) {
                1 & n && (e.TgZ(0, "div", 18), e._uU(1, " Language is Mandatory field "), e.qZA())
            }

            function te(n, r) {
                1 & n && (e.TgZ(0, "div", 18), e._uU(1, " Nature of Objection is Mandatory field "), e.qZA())
            }
            const E = function(n) {
                return {
                    "disabled-input": n
                }
            };

            function ne(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "input", 33), e.NdJ("keypress", function(a) {
                        e.CHM(t);
                        const d = e.oxw(3);
                        return e.KtG(d.numericOnlySingle(a))
                    })("paste", function() {
                        return !1
                    }), e.qZA()
                }
                if (2 & n) {
                    const t = e.oxw(3);
                    let i;
                    e.Q6J("ngClass", e.VKq(1, E, null == (i = t.challengeForm.get("correctId")) ? null : i.disabled))
                }
            }

            function oe(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "input", 33), e.NdJ("keypress", function(a) {
                        e.CHM(t);
                        const d = e.oxw(3);
                        return e.KtG(d.numericOnlyWithComma(a))
                    })("paste", function() {
                        return !1
                    }), e.qZA()
                }
                if (2 & n) {
                    const t = e.oxw(3);
                    let i;
                    e.Q6J("ngClass", e.VKq(1, E, null == (i = t.challengeForm.get("correctId")) ? null : i.disabled))
                }
            }

            function ie(n, r) {
                1 & n && (e.TgZ(0, "div", 18), e._uU(1, " option ID is a mandatory field "), e.qZA())
            }

            function ae(n, r) {
                1 & n && (e.TgZ(0, "div", 18), e._uU(1, " incorrect value "), e.qZA())
            }

            function le(n, r) {
                if (1 & n && (e.TgZ(0, "div", 6)(1, "div", 7)(2, "label", 8), e._uU(3, "6. Correct Option ID as per candidate "), e.TgZ(4, "span", 9), e._uU(5, "*"), e.qZA()(), e.YNc(6, ne, 1, 3, "input", 32), e.YNc(7, oe, 1, 3, "input", 32), e.YNc(8, ie, 2, 0, "div", 12), e.YNc(9, ae, 2, 0, "div", 12), e.qZA()()), 2 & n) {
                    const t = e.oxw(2);
                    e.xp6(6), e.Q6J("ngIf", t.incorectAnsKey), e.xp6(1), e.Q6J("ngIf", t.multipleAns), e.xp6(1), e.Q6J("ngIf", t.submitted && !t.challengeForm.controls.correctId.value), e.xp6(1), e.Q6J("ngIf", t.submitted && t.challengeForm.get("correctId").hasError("pattern"))
                }
            }

            function re(n, r) {
                1 & n && (e.TgZ(0, "div", 34)(1, "span", 9), e._uU(2, "Note : "), e._UZ(3, "br"), e._uU(4, " Please enter the option ID which you think is correct./\u0915\u0943\u092a\u092f\u093e \u0935\u0939 \u0935\u093f\u0915\u0932\u094d\u092a \u0906\u0908\u0921\u0940 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902 \u091c\u093f\u0938\u0947 \u0906\u092a \u0938\u0939\u0940 \u092e\u093e\u0928\u0924\u0947 \u0939\u0948\u0902\u0964 "), e.qZA()())
            }

            function se(n, r) {
                1 & n && (e.TgZ(0, "div", 34)(1, "span", 9), e._uU(2, "Note : "), e._UZ(3, "br"), e._uU(4, " Please enter the option ID which you think are correct.You can add maximum 4 options separated by comma (For eg. 123456789,9876543210)/\u0915\u0943\u092a\u092f\u093e \u0935\u0939 \u0935\u093f\u0915\u0932\u094d\u092a \u0906\u0908\u0921\u0940 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902 \u091c\u093f\u0938\u0947 \u0906\u092a \u0938\u0939\u0940 \u092e\u093e\u0928\u0924\u0947 \u0939\u0948\u0902\u0964 \u0906\u092a \u0905\u0927\u093f\u0915\u0924\u092e 4 \u0935\u093f\u0915\u0932\u094d\u092a \u0905\u0932\u094d\u092a\u0935\u093f\u0930\u093e\u092e \u0926\u094d\u0935\u093e\u0930\u093e \u091c\u094b\u0921\u093c \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 (\u0909\u0926\u093e\u0939\u0930\u0923 \u0915\u0947 \u0932\u093f\u090f, 123456789,9876543210). "), e.qZA()())
            }

            function ce(n, r) {
                if (1 & n) {
                    const t = e.EpF();
                    e.ynx(0), e.TgZ(1, "div", 6)(2, "div", 7)(3, "app-dropdown", 26), e.NdJ("selectionChange", function(a) {
                        e.CHM(t);
                        const d = e.oxw();
                        return e.KtG(d.languageChange(a))
                    }), e.qZA(), e.YNc(4, ee, 2, 0, "div", 12), e.qZA()(), e.TgZ(5, "div", 6)(6, "div", 7)(7, "app-dropdown", 27), e.NdJ("selectionChange", function(a) {
                        e.CHM(t);
                        const d = e.oxw();
                        return e.KtG(d.objectionChange(a))
                    }), e.qZA(), e.YNc(8, te, 2, 0, "div", 12), e.qZA()(), e.YNc(9, le, 10, 4, "div", 28), e.ynx(10), e.TgZ(11, "div", 29)(12, "div", 21)(13, "div", 30), e.YNc(14, re, 5, 0, "div", 31), e.YNc(15, se, 5, 0, "div", 31), e.qZA()()(), e.BQk(), e.TgZ(16, "div", 20)(17, "div", 21)(18, "label", 22), e._uU(19), e.qZA(), e.TgZ(20, "div", 23), e._UZ(21, "textarea", 24), e.TgZ(22, "div", 25), e._uU(23, "Maximum 250 characters allowed"), e.qZA()()()(), e.BQk()
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.xp6(3), e.Q6J("showRequired", "true")("showSearch", !1)("searchPlaceholder", "Search options...")("options", t.allLanguages)("selectedOption", t.optEmptyVal1)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", e.DdM(20, S)), e.xp6(1), e.Q6J("ngIf", t.submitted && t.challengeForm.controls.languageId.errors), e.xp6(3), e.Q6J("showRequired", "true")("showSearch", !1)("searchPlaceholder", "Search options...")("options", t.allObjections)("selectedOption", t.optEmptyVal2)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", e.DdM(21, S)), e.xp6(1), e.Q6J("ngIf", t.submitted && t.challengeForm.controls.nobId.errors), e.xp6(1), e.Q6J("ngIf", t.multipleAns || t.incorectAnsKey), e.xp6(5), e.Q6J("ngIf", t.incorectAnsKey), e.xp6(1), e.Q6J("ngIf", t.multipleAns), e.xp6(4), e.hij("", t.numbering, ". Reason (Optional) ")
                }
            }
            const de = function() {
                return ["shift"]
            };
            let ge = (() => {
                class n {
                    constructor(t, i, a, d, x) {
                        this.formBuilder = t, this.answerKeyChallengeService = i, this.dialog = a, this.route = d, this.activeRoute = x, this.numericNumberReg = "^-?[0-9]\\d*(\\.\\d{1,2})?$", this.submitted = !1, this.allObjections = [], this.showAdditionalFields = !1, this.multipleAns = !1, this.incorectAnsKey = !1, this.numbering = "6"
                    }
                    ngOnInit() {
                        const t = sessionStorage.getItem("examDataForAnswerKey"),
                            i = JSON.parse(t);
                        this.examId = i ? .examId, this.examYear = i ? .examYear, this.examName = i ? .examName, this.examCode = i ? .examCode, ("CHSL" == this.examCode.toUpperCase() || "MTS" == this.examCode.toUpperCase() || "CTGD" == this.examCode.toUpperCase()) && (this.showAdditionalFields = !0), this.notificationId = i ? .notificationId, this.activeRoute.queryParams.subscribe(a => {
                            this.status = a.status, ("error" == this.status || "pending" == this.status) && this.route.navigate(["/dashboard"]), this.tNo = a.tno, this.rollNo = a.rollNo
                        }), this.challengeForm = this.formBuilder.group({
                            rollNumber: [this.rollNo, g.kI.required],
                            examDateShiftId: ["", g.kI.required],
                            questionId: ["", [g.kI.required, g.kI.pattern(this.numericNumberReg)]],
                            nobId: ["", g.kI.required],
                            languageId: [""],
                            correctId: [""],
                            reason: [""],
                            tno: [this.tNo]
                        }), this.showAdditionalFields && (this.challengeForm.get("correctId") ? .disable(), this.challengeForm.get("languageId").setValidators([g.kI.required]), this.challengeForm.get("languageId").updateValueAndValidity(), this.getAllLanguages()), this.getAllObjections(), this.getExamShift()
                    }
                    getAllLanguages() {
                        this.answerKeyChallengeService.getAllLanguage().subscribe(t => {
                            this.allLanguages = t.data
                        })
                    }
                    getAllObjections() {
                        this.answerKeyChallengeService.getAllObjections().subscribe(t => {
                            this.allObjections = t.data, this.showAdditionalFields && (this.allObjections = this.allObjections.filter(i => "Translation error" != i.name))
                        })
                    }
                    examDateOnChange(t) {
                        t && this.challengeForm.controls.examDateShiftId.setValue(t ? .shift)
                    }
                    objectionChange(t) {
                        t && this.challengeForm.controls.nobId.setValue(t ? .id), this.showAdditionalFields && ("multiple correct answers" === t ? .name ? .toLowerCase() ? (this.multipleAns = !0, this.challengeForm.get("correctId").setValidators([g.kI.required]), this.challengeForm.get("correctId").updateValueAndValidity()) : (this.challengeForm.controls.correctId.reset(), this.multipleAns = !1, this.challengeForm.get("correctId").clearValidators(), this.challengeForm.get("correctId").updateValueAndValidity()), "incorrect answer key" === t ? .name ? .toLowerCase() ? (this.incorectAnsKey = !0, this.challengeForm.get("correctId").setValidators([g.kI.required]), this.challengeForm.get("correctId").updateValueAndValidity()) : (this.challengeForm.controls.correctId.reset(), this.incorectAnsKey = !1, this.challengeForm.get("correctId").clearValidators(), this.challengeForm.get("correctId").updateValueAndValidity()), !t || "multiple correct answers" !== t ? .name ? .toLowerCase() && "incorrect answer key" !== t ? .name ? .toLowerCase() ? (this.numbering = "6", this.challengeForm.get("correctId") ? .disable(), this.challengeForm.get("correctId").clearValidators()) : (this.challengeForm.get("correctId") ? .enable(), this.numbering = "7"))
                    }
                    numericOnly(t) {
                        return /^([0-9])$/.test(t.key)
                    }
                    numericOnlyWithCommaOld(t) {
                        const i = t.target;
                        if (this.challengeForm.get("correctId") ? .value.length > 66) return !1;
                        const a = t.key;
                        return "Backspace" === a || "Delete" === a || "ArrowLeft" === a || "ArrowRight" === a || !!/[0-9,]/.test(a) && /^(?:\d{16},)*(?:\d{1,16})?$/.test(i.value + a)
                    }
                    numericOnlyWithComma(t) {
                        const a = this.challengeForm.get("correctId") ? .value || "";
                        if (a.length >= 66) return t.preventDefault(), !1;
                        const d = t.key;
                        if ("Backspace" === d || "Delete" === d || "ArrowLeft" === d || "ArrowRight" === d) return !0;
                        if (!/[0-9,]/.test(d)) return t.preventDefault(), !1;
                        const x = a + d;
                        return !(x.split(",").length > 4 || x.length > 66) || (t.preventDefault(), !1)
                    }
                    numericOnlySingle(t) {
                        if ((this.challengeForm.get("correctId") ? .value || "").length >= 25) return t.preventDefault(), !1;
                        const d = t.key;
                        return !("Backspace" !== d && "Delete" !== d && "ArrowLeft" !== d && "ArrowRight" !== d && !/[0-9]/.test(d) && (t.preventDefault(), 1))
                    }
                    languageChange(t) {
                        t && this.challengeForm.controls.languageId.setValue(t ? .id)
                    }
                    getExamShift() {
                        this.answerKeyChallengeService.getExamShifts(this.examId, this.examYear).subscribe(t => {
                            this.examShifts = t.data, console.log("shifts", this.examShifts)
                        })
                    }
                    submitChallenge() {
                        if (this.submitted = !0, this.challengeForm.invalid && this.submitted) return this.challengeForm.controls.examDateShiftId.markAsTouched(), this.challengeForm.controls.questionId.markAsTouched(), this.challengeForm.controls.nobId.markAsTouched(), this.challengeForm.controls.languageId.markAsTouched(), void this.challengeForm.controls.correctId.markAsTouched();
                        if (!1 === this.checkCorrect()) return;
                        let t = { ...this.challengeForm.value
                        };
                        (this.multipleAns || this.incorectAnsKey) && (t = { ...t,
                            correctId: this.challengeForm.get("correctId") ? .disabled ? "" : this.challengeForm.get("correctId") ? .value
                        }), t.examId = this.examId, this.answerKeyChallengeService.submitChallenge(t).subscribe(i => {
                            "200" === i.statusCode ? (this.challengeList = i.data, this.route.navigateByUrl(`/answer-key-challenge/challenge-final-screen/${this.examId}`)) : "203" === i.statusCode && this.dialog.open(D.I, {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: i.error
                                }
                            })
                        })
                    }
                    checkCorrect() {
                        return !(("" === this.challengeForm.controls.correctId.value || null === this.challengeForm.controls.correctId.value || "null" === this.challengeForm.controls.correctId.value || "undefined" === this.challengeForm.controls.correctId.value || void 0 === this.challengeForm.controls.correctId.value) && (this.multipleAns || this.incorectAnsKey))
                    }
                    static# e = this.\u0275fac = function(i) {
                        return new(i || n)(e.Y36(g.qu), e.Y36(h.t), e.Y36(l.uw), e.Y36(f.F0), e.Y36(f.gz))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["app-challenge-main-screen"]
                        ],
                        decls: 34,
                        vars: 16,
                        consts: [
                            [1, "container"],
                            [1, "row", "cards", "rws"],
                            [1, "form-block", "card-width"],
                            [1, "heading-maroon"],
                            [3, "formGroup"],
                            [1, "head"],
                            [1, "row", "input-form-fields"],
                            [1, "col-md-12", "mt10"],
                            ["for", "", 1, "form-label", "labels"],
                            [2, "color", "red"],
                            ["type", "text", "formControlName", "rollNumber", "id", "", "readonly", "", 1, "select", "form-control", 2, "background-color", "#F9F1F1"],
                            ["label", "2. Exam Date & Shift", 3, "showRequired", "showSearch", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                            ["class", "form-text-alert", 4, "ngIf"],
                            ["type", "text", "formControlName", "questionId", "id", "", 1, "select", "form-control"],
                            [4, "ngIf"],
                            [1, "button-cont"],
                            [1, "Cancel"],
                            [1, "btnn", 3, "click"],
                            [1, "form-text-alert"],
                            ["label", "4. Nature of Objection", 3, "showRequired", "showSearch", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                            [1, "row", "gap", "input-form-fields"],
                            [1, "col-md-12"],
                            ["for", "", 1, "labels"],
                            [1, "col-md-12", "textarea-container"],
                            ["cols", "4", "rows", "3", "formControlName", "reason", "placeholder", "Enter here", "id", "remarks", "maxlength", "250", 1, "remarks", "form-control"],
                            [1, "textareaSpan"],
                            ["label", "4. Language on which question was answered ", 3, "showRequired", "showSearch", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                            ["label", "5. Nature of Objection", 3, "showRequired", "showSearch", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                            ["class", "row input-form-fields", 4, "ngIf"],
                            [1, "row", "p-2"],
                            [1, "blocks-note", 2, "height", "auto", "width", "inherit"],
                            ["class", "gray-area", "style", "height: auto;", 4, "ngIf"],
                            ["type", "text", "class", "select form-control", "formControlName", "correctId", "id", "", 3, "ngClass", "keypress", "paste", 4, "ngIf"],
                            ["type", "text", "formControlName", "correctId", "id", "", 1, "select", "form-control", 3, "ngClass", "keypress", "paste"],
                            [1, "gray-area", 2, "height", "auto"]
                        ],
                        template: function(i, a) {
                            1 & i && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3), e._uU(4), e.qZA(), e.TgZ(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "label", 8), e._uU(10, "1. Roll Number "), e.TgZ(11, "span", 9), e._uU(12, "*"), e.qZA()(), e._UZ(13, "input", 10), e.qZA()(), e.TgZ(14, "div", 6)(15, "div", 7)(16, "app-dropdown", 11), e.NdJ("selectionChange", function(x) {
                                return a.examDateOnChange(x)
                            }), e.qZA(), e.YNc(17, H, 2, 0, "div", 12), e.qZA()(), e.TgZ(18, "div", 6)(19, "div", 7)(20, "label", 8), e._uU(21, "3. Question ID "), e.TgZ(22, "span", 9), e._uU(23, "*"), e.qZA()(), e._UZ(24, "input", 13), e.YNc(25, G, 2, 0, "div", 12), e.YNc(26, $, 2, 0, "div", 12), e.qZA()(), e.YNc(27, X, 13, 9, "ng-container", 14), e.YNc(28, ce, 24, 22, "ng-container", 14), e.qZA(), e.TgZ(29, "div", 15)(30, "div", 16), e._uU(31, " Cancel "), e.qZA(), e.TgZ(32, "button", 17), e.NdJ("click", function() {
                                return a.submitChallenge()
                            }), e._uU(33, " Submit "), e.qZA()()()()()()), 2 & i && (e.xp6(4), e.AsE("", a.examName, ",", a.examYear, ""), e.xp6(1), e.Q6J("formGroup", a.challengeForm), e.xp6(11), e.Q6J("showRequired", "true")("showSearch", !1)("searchPlaceholder", "Search options...")("options", a.examShifts)("selectedOption", a.optEmptyVal)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", e.DdM(15, de)), e.xp6(1), e.Q6J("ngIf", a.submitted && a.challengeForm.controls.examDateShiftId.errors), e.xp6(8), e.Q6J("ngIf", a.submitted && a.challengeForm.controls.questionId.errors), e.xp6(1), e.Q6J("ngIf", a.submitted && !a.challengeForm.controls.questionId.valid), e.xp6(1), e.Q6J("ngIf", !a.showAdditionalFields), e.xp6(1), e.Q6J("ngIf", a.showAdditionalFields))
                        },
                        dependencies: [o.mk, o.O5, g._Y, g.Fj, g.JJ, g.JL, g.nD, g.sg, g.u, V.J],
                        styles: [".heading-maroon[_ngcontent-%COMP%]{margin-bottom:20px!important;text-align:left;border-bottom:1px solid rgba(144,144,144,.3607843137);padding-bottom:20px;font-family:var(--font-family)}.body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;margin:0}.cardd-block[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #d6d6d6;background:var(--global-white, #fdfdfd);padding:30px;width:50%;margin-top:30px;margin-bottom:30px;margin-left:400px;position:relative}.textarea-container[_ngcontent-%COMP%]{position:relative}.remarks[_ngcontent-%COMP%]{position:relative;padding:10px;resize:vertical;width:100%;box-sizing:border-box}.textareaSpan[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:5px;background:rgba(255,255,255,.9);padding:2px 6px;font-size:12px;margin-right:10px}.button-cont[_ngcontent-%COMP%]{display:flex;justify-content:end;padding-bottom:10px;padding-top:13px}.Cancel[_ngcontent-%COMP%]{color:var(--button-default, #8E433E);font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:800;line-height:140%;padding-top:12px;padding-right:15px}.btnn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:56px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;margin-right:20px;border:none}.btnn[_ngcontent-%COMP%]:focus{color:#fff}.btnn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.disabled-input[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#a0a0a0}.form-text-alert[_ngcontent-%COMP%]{color:red!important;font-size:revert;font-family:var(--font-family);font-style:normal;font-weight:700;font-size:12px}"]
                    })
                }
                return n
            })();
            var pe = s(15861),
                he = s(4159),
                me = s.n(he),
                ue = s(96166),
                fe = s(35998);
            const _e = ["capture"],
                xe = ["canvas"],
                Ce = ["downloadLink"];

            function ye(n, r) {
                1 & n && (e.TgZ(0, "th", 33), e._uU(1, " Roll No "), e.qZA())
            }

            function ve(n, r) {
                if (1 & n && (e.TgZ(0, "td", 34), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t ? null : t.rollNumber, " ")
                }
            }

            function be(n, r) {
                1 & n && (e.TgZ(0, "th", 35), e._uU(1, "Exam Name"), e.qZA())
            }

            function we(n, r) {
                if (1 & n && (e.TgZ(0, "td", 36), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit,
                        i = e.oxw();
                    e.xp6(1), e.hij(" ", i.getExamName(null == t ? null : t.examId), " ")
                }
            }

            function Oe(n, r) {
                1 & n && (e.TgZ(0, "th", 35), e._uU(1, " Exam Date and Shift "), e.qZA())
            }

            function Me(n, r) {
                if (1 & n && (e.TgZ(0, "td", 37), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t ? null : t.examDateShiftId, " ")
                }
            }

            function Pe(n, r) {
                1 & n && (e.TgZ(0, "th", 35), e._uU(1, "Question Id"), e.qZA())
            }

            function Te(n, r) {
                if (1 & n && (e.TgZ(0, "td", 37), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t ? null : t.questionId, " ")
                }
            }

            function Ie(n, r) {
                1 & n && (e.TgZ(0, "th", 35), e._uU(1, " Nature of Objection "), e.qZA())
            }

            function Ze(n, r) {
                if (1 & n && (e.TgZ(0, "td", 37), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t || null == t.natureOfObjection ? null : t.natureOfObjection.name, " ")
                }
            }

            function Ae(n, r) {
                1 & n && (e.TgZ(0, "th", 35), e._uU(1, "Submit Time"), e.qZA())
            }

            function Se(n, r) {
                if (1 & n && (e.TgZ(0, "td", 37), e._uU(1), e.qZA()), 2 & n) {
                    const t = r.$implicit;
                    e.xp6(1), e.hij(" ", null == t ? null : t.createdAt, " ")
                }
            }

            function Ne(n, r) {
                1 & n && e._UZ(0, "tr", 38)
            }

            function De(n, r) {
                1 & n && e._UZ(0, "tr", 39)
            }
            const ke = [{
                path: "",
                component: w,
                children: [{
                    path: "redirecting-screen",
                    component: C.H
                }, {
                    path: "challenge-payment-screen",
                    component: L
                }, {
                    path: "challenge-main-screen",
                    component: ge
                }, {
                    path: "challenge-final-screen/:examId",
                    component: (() => {
                        class n {
                            constructor(t, i, a, d, x) {
                                this.spinner = t, this.answerKeyChallengeService = i, this.route = a, this.activeRoute = d, this.commonDataService = x, this.displayedColumns = ["Roll No", "Exam Name", "Exam Date and Shift", "Question Id", "Nature of Objection", "Submit Time"], this.exams = []
                            }
                            ngOnInit() {
                                var t = this;
                                return (0, pe.Z)(function*() {
                                    sessionStorage.removeItem("examDataForAnswerKey"), t.examId = t.activeRoute.snapshot.paramMap.get("examId"), t.exams = t.commonDataService.getExams(), console.log(t.exams), t.getAllChallenges()
                                })()
                            }
                            getAllChallenges() {
                                this.answerKeyChallengeService.getRaisedChallenge(this.examId).subscribe(t => {
                                    this.allChallenges = t.data
                                })
                            }
                            router() {
                                this.route.navigate(["/dashboard"])
                            }
                            exportAsPDF(t) {
                                this.spinner.show();
                                let i = document.getElementById(t);
                                this.capture.nativeElement.style.overflow = "visible", me()(this.capture.nativeElement, {
                                    scale: 1.5,
                                    height: i.scrollHeight
                                }).then(a => {
                                    this.canvas.nativeElement.src = a.toDataURL();
                                    const d = new ue.ZP("p", "mm", "a4"),
                                        x = a.toDataURL("image/png"),
                                        M = d.getImageProperties(x),
                                        T = d.internal.pageSize.getWidth();
                                    d.addImage(x, "PNG", 0, 0, T, M.height * T / M.width, "someAlias", "FAST"), d.save("details.pdf"), this.capture.nativeElement.style.overflow = "hidden", this.capture.nativeElement.style.overflow = "auto", this.canvas.nativeElement.src = ""
                                }), this.capture.nativeElement.style.overflow = "hidden", this.capture.nativeElement.style.overflow = "auto", this.spinner.hide()
                            }
                            getExamName(t) {
                                return this.exams ? .find(a => a.id === t) ? .examName
                            }
                            static# e = this.\u0275fac = function(i) {
                                return new(i || n)(e.Y36(fe.V), e.Y36(h.t), e.Y36(f.F0), e.Y36(f.gz), e.Y36(p.I))
                            };
                            static# t = this.\u0275cmp = e.Xpm({
                                type: n,
                                selectors: [
                                    ["app-challenge-final-screen"]
                                ],
                                viewQuery: function(i, a) {
                                    if (1 & i && (e.Gf(_e, 5), e.Gf(xe, 5), e.Gf(Ce, 5)), 2 & i) {
                                        let d;
                                        e.iGM(d = e.CRH()) && (a.capture = d.first), e.iGM(d = e.CRH()) && (a.canvas = d.first), e.iGM(d = e.CRH()) && (a.downloadLink = d.first)
                                    }
                                },
                                decls: 48,
                                vars: 3,
                                consts: [
                                    [1, "container"],
                                    [1, "row"],
                                    [1, "col-lg-12"],
                                    [1, "new-card-block"],
                                    [1, "center-icon"],
                                    ["src", "assets/image/check-broken.svg", "alt", "Icon"],
                                    [1, "content"],
                                    [1, "additional-content"],
                                    [1, "click-button-container"],
                                    [1, "click-button", 3, "click"],
                                    [1, "col-lg-12", 2, "text-align", "right"],
                                    ["data-html2canvas-ignore", "true", 1, "btn", "btn-primary", 3, "click"],
                                    [1, "contt"],
                                    [1, "chall"],
                                    ["id", "print-section", 1, "table-view", "work-table"],
                                    ["capture", ""],
                                    ["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"],
                                    ["matColumnDef", "Roll No"],
                                    ["width", "16%", "class", "head-class", "mat-header-cell", "", 4, "matHeaderCellDef"],
                                    ["style", "cursor: pointer; color: #8f2a3a; font-weight: bold", "mat-cell", "", 4, "matCellDef"],
                                    ["matColumnDef", "Exam Name"],
                                    ["width", "14%", "mat-header-cell", "", 4, "matHeaderCellDef"],
                                    ["style", "cursor: pointer", "mat-cell", "", 4, "matCellDef"],
                                    ["matColumnDef", "Exam Date and Shift"],
                                    ["mat-cell", "", 4, "matCellDef"],
                                    ["matColumnDef", "Question Id"],
                                    ["matColumnDef", "Nature of Objection"],
                                    ["matColumnDef", "Submit Time"],
                                    ["mat-header-row", "", 4, "matHeaderRowDef"],
                                    ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
                                    ["id", "download"],
                                    ["canvas", ""],
                                    ["downloadLink", ""],
                                    ["width", "16%", "mat-header-cell", "", 1, "head-class"],
                                    ["mat-cell", "", 2, "cursor", "pointer", "color", "#8f2a3a", "font-weight", "bold"],
                                    ["width", "14%", "mat-header-cell", ""],
                                    ["mat-cell", "", 2, "cursor", "pointer"],
                                    ["mat-cell", ""],
                                    ["mat-header-row", ""],
                                    ["mat-row", ""]
                                ],
                                template: function(i, a) {
                                    1 & i && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4), e._UZ(5, "img", 5), e.qZA(), e.TgZ(6, "div", 6), e._uU(7, " Your Challenge has been submitted successfully "), e.qZA(), e.TgZ(8, "div", 7), e._uU(9, " If you want challenge another question "), e.qZA(), e.TgZ(10, "div", 8)(11, "button", 9), e.NdJ("click", function() {
                                        return a.router()
                                    }), e._uU(12, "Click here"), e.qZA()()()(), e.TgZ(13, "div", 10)(14, "button", 11), e.NdJ("click", function() {
                                        return a.exportAsPDF("print-section")
                                    }), e._uU(15, " Print "), e.qZA()(), e.TgZ(16, "div", 2), e.ynx(17, 12), e.TgZ(18, "div", 13), e._uU(19, "Challenges Submitted by you"), e.qZA(), e.TgZ(20, "div", 14, 15)(22, "table", 16), e.ynx(23, 17), e.YNc(24, ye, 2, 0, "th", 18), e.YNc(25, ve, 2, 1, "td", 19), e.BQk(), e.ynx(26, 20), e.YNc(27, be, 2, 0, "th", 21), e.YNc(28, we, 2, 1, "td", 22), e.BQk(), e.ynx(29, 23), e.YNc(30, Oe, 2, 0, "th", 21), e.YNc(31, Me, 2, 1, "td", 24), e.BQk(), e.ynx(32, 25), e.YNc(33, Pe, 2, 0, "th", 21), e.YNc(34, Te, 2, 1, "td", 24), e.BQk(), e.ynx(35, 26), e.YNc(36, Ie, 2, 0, "th", 21), e.YNc(37, Ze, 2, 1, "td", 24), e.BQk(), e.ynx(38, 27), e.YNc(39, Ae, 2, 0, "th", 21), e.YNc(40, Se, 2, 1, "td", 24), e.BQk(), e.YNc(41, Ne, 1, 0, "tr", 28), e.YNc(42, De, 1, 0, "tr", 29), e.qZA()(), e.BQk(), e.TgZ(43, "div", 30), e._UZ(44, "img", null, 31)(46, "a", null, 32), e.qZA()()()()), 2 & i && (e.xp6(22), e.Q6J("dataSource", a.allChallenges), e.xp6(19), e.Q6J("matHeaderRowDef", a.displayedColumns), e.xp6(1), e.Q6J("matRowDefColumns", a.displayedColumns))
                                },
                                dependencies: [c.BZ, c.fO, c.as, c.w1, c.Dz, c.nj, c.ge, c.ev, c.XQ, c.Gk],
                                styles: ['@charset "UTF-8";.cardd-block[_ngcontent-%COMP%]{border:1px solid #d6d6d6;background:var(--global-white, #fdfdfd);padding:40px;width:50%;height:auto;margin-left:30px;margin-top:30px;margin-bottom:30px}.pay[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:24px;font-style:normal;font-weight:700;line-height:140%}.ftty[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:16px;font-style:normal;font-weight:700;line-height:140%;padding-top:16px}.fftyy[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.roll[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:14px;font-style:normal;font-weight:700;line-height:140%}.input[_ngcontent-%COMP%]{display:flex;padding:0 16px;align-items:center;gap:10px;border-radius:5px;background:var(--button-icon-background, #F9F1F1);border:none;outline:none;box-shadow:none;width:100%;height:35px}.form[_ngcontent-%COMP%]{padding-top:40px}.note-section[_ngcontent-%COMP%]{margin-top:32px}.note[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-size:18px;font-style:normal;font-weight:800;line-height:140%;margin-bottom:5px}.bullet-list[_ngcontent-%COMP%]{list-style-type:none;margin-left:0;padding-left:0}.bullet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:15px;color:var(--fonts-body, #606060);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.bullet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0}.proceed-button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:20px}.proceed-button[_ngcontent-%COMP%]{background-color:#8e433e;border-radius:56px;padding:13px 27px;cursor:pointer;color:#fff;border:none}.chall[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:24px;font-style:normal;font-weight:700;line-height:140%;margin-left:30px;margin-bottom:30px}.new-card-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:64px}.center-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.new-card-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{text-align:center;margin-top:40px;color:var(--fonts-title, #252525);font-size:36px;font-style:normal;font-weight:700;line-height:140%}.new-card-block[_ngcontent-%COMP%]   .additional-content[_ngcontent-%COMP%]{color:var(--fonts-title, #252525);font-size:16px;font-style:normal;font-weight:400;line-height:140%;margin-top:16px}.new-card-block[_ngcontent-%COMP%]   .click-button-container[_ngcontent-%COMP%]{margin-top:20px}.click-button[_ngcontent-%COMP%]{border-radius:56px;background:var(--button-default, #8E433E);color:var(--global-white, #FDFDFD);font-size:16px;font-style:normal;font-weight:800;line-height:140%;border:none;padding:10px 26px;cursor:pointer}.dialog-overlay[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999}.dialog[_ngcontent-%COMP%]{background-color:var(--bg-color);border:1px solid var(--input-border-color);border-radius:5px;box-shadow:none;width:33%}.dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid var(--global-border);padding:10px 0 2px}.dialog[_ngcontent-%COMP%]   .di-head[_ngcontent-%COMP%]{font-family:var(--font-family);font-size:24px;font-weight:700a;padding:0 24px}.button-cont[_ngcontent-%COMP%]{display:flex;justify-content:end;background-color:#f0dddb;padding-bottom:10px;padding-top:13px}.modl[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);margin-top:24px;margin-left:24px;margin-right:24px;font-family:Nunito Sans;font-size:16px;font-style:normal;font-weight:400;line-height:140%}.exm[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);margin-top:40px;margin-left:24px;font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:400;line-height:140%}.nme[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);margin-top:8px;margin-left:24px;font-family:Nunito Sans;font-size:18px;font-style:normal;font-weight:700;line-height:140%;margin-bottom:26px}.Cancel[_ngcontent-%COMP%]{color:var(--button-default, #8E433E);font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:800;line-height:140%;padding-top:12px;padding-right:15px}.btnn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:56px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;margin-right:20px;cursor:pointer}.btnn[_ngcontent-%COMP%]:focus{color:#fff}.btnn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.payment-mode[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;padding:0 24px;margin-top:15px}.mode[_ngcontent-%COMP%]{font-weight:700}.mode-type[_ngcontent-%COMP%]{text-align:right}.amount-section[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 24px;margin-bottom:25px}.amount-label[_ngcontent-%COMP%]{flex:1;font-weight:700}.amount-value[_ngcontent-%COMP%]{flex:1;text-align:right}.separator-line[_ngcontent-%COMP%]{border-top:1px solid #E6E6E6;margin:10px 0}']
                            })
                        }
                        return n
                    })()
                }]
            }];
            let Fe = (() => {
                class n {
                    static# e = this.\u0275fac = function(i) {
                        return new(i || n)
                    };
                    static# t = this.\u0275mod = e.oAB({
                        type: n
                    });
                    static# n = this.\u0275inj = e.cJS({
                        imports: [f.Bz.forChild(ke), f.Bz]
                    })
                }
                return n
            })();
            var Ue = s(71948),
                qe = s(97392),
                Ye = s(59798),
                je = s(10266),
                Re = s(86257),
                ze = s(4859),
                Ke = s(59549),
                Qe = s(44144),
                k = s(73546),
                Be = s(56709),
                Je = s(59721),
                Le = s(56633);
            let Ve = (() => {
                class n {
                    static# e = this.\u0275fac = function(i) {
                        return new(i || n)
                    };
                    static# t = this.\u0275mod = e.oAB({
                        type: n
                    });
                    static# n = this.\u0275inj = e.cJS({
                        providers: [Le.x],
                        imports: [o.ez, Fe, b.JF, k.QW, g.u5, g.UX, qe.Ps, c.p0, Ye.TU, l.Is, je.AV, f.Bz, Re.T5, ze.ot, Ke.lN, Qe.c, k.QW, g.UX, g.u5, Be.p9, Ue.Fk, Je.I, l.Is]
                    })
                }
                return n
            })()
        },
        77039: (I, v, s) => {
            s.d(v, {
                H: () => m
            });
            var o = s(94650),
                b = s(11310),
                f = s(65412),
                e = s(24006),
                w = s(11341),
                C = s(36895);

            function O(g, h) {
                if (1 & g) {
                    const u = o.EpF();
                    o.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2", 4), o._uU(4, "Challenge System"), o.qZA(), o.TgZ(5, "img", 5), o.NdJ("click", function() {
                        o.CHM(u);
                        const p = o.oxw();
                        return o.KtG(p.closeDialog())
                    }), o.qZA()(), o.TgZ(6, "div", 6)(7, "div", 7), o._uU(8, " Module for candidate's response, correct answer and submissions of representations if any"), o.qZA(), o.TgZ(9, "div", 8), o._uU(10, " Exam Name :"), o.qZA(), o.TgZ(11, "div", 9), o._uU(12), o.qZA(), o.TgZ(13, "div", 10), o._uU(14, " Representations about the answer key may be submitted through this system only"), o.qZA()(), o.TgZ(15, "div", 11)(16, "div", 12), o.NdJ("click", function() {
                        o.CHM(u);
                        const p = o.oxw();
                        return o.KtG(p.redirectPage())
                    }), o._uU(17, " Click Here "), o.qZA()()()()
                }
                if (2 & g) {
                    const u = o.oxw();
                    o.xp6(12), o.AsE("", u.examName, ",", u.examYear, "")
                }
            }
            let m = (() => {
                class g {
                    constructor(u, l, p, c) {
                        this.router = u, this.dialogRef = l, this.formBuilder = p, this.answerKeyChallengeService = c, this.dialogOpen = !1
                    }
                    ngOnInit() {
                        this.dialogOpen = !0;
                        const u = sessionStorage.getItem("examDataForAnswerKey"),
                            l = JSON.parse(u);
                        this.examId = l ? .examId, this.examYear = l ? .examYear, this.examName = l ? .examName, this.notificationId = l ? .notificationId, this.getDetails(this.notificationId)
                    }
                    getDetails(u) {
                        this.answerKeyChallengeService.getDetailsByNotificationId(u).subscribe(l => {
                            200 == l.statusCode && (this.challenegeData = l ? .data)
                        })
                    }
                    redirectPage() {
                        console.log("opening"), window.open(this.challenegeData ? .challengeUrl, "_self")
                    }
                    openDialog() {
                        this.dialogOpen = !0
                    }
                    closeDialog() {
                        this.dialogOpen = !1, this.dialogRef.close()
                    }
                    static# e = this.\u0275fac = function(l) {
                        return new(l || g)(o.Y36(b.F0), o.Y36(f.so), o.Y36(e.qu), o.Y36(w.t))
                    };
                    static# t = this.\u0275cmp = o.Xpm({
                        type: g,
                        selectors: [
                            ["app-redirecting-screen"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["class", "dialog-overlay", 4, "ngIf"],
                            [1, "dialog-overlay"],
                            [1, "dialog"],
                            [1, "dialog-header"],
                            [1, "di-head"],
                            ["src", "assets/image/Global.svg", "alt", "close", 2, "cursor", "pointer", "padding", "0px 24px", 3, "click"],
                            [1, "di-body"],
                            [1, "modl"],
                            [1, "exm"],
                            [1, "nme"],
                            [1, "redirect"],
                            [1, "button-cont"],
                            [1, "btnn", 3, "click"]
                        ],
                        template: function(l, p) {
                            1 & l && o.YNc(0, O, 18, 2, "div", 0), 2 & l && o.Q6J("ngIf", p.dialogOpen)
                        },
                        dependencies: [C.O5],
                        styles: [".dialog-overlay[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999}.dialog[_ngcontent-%COMP%]{background-color:var(--bg-color);border:1px solid var(--input-border-color);border-radius:5px;box-shadow:none;width:46%}.dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid var(--global-border);padding:10px 0 2px}.dialog[_ngcontent-%COMP%]   .di-head[_ngcontent-%COMP%]{font-family:var(--font-family);font-size:24px;font-weight:700;padding:0 24px}.button-cont[_ngcontent-%COMP%]{display:flex;justify-content:end;background-color:#f0dddb;padding-bottom:10px;padding-top:13px}.modl[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);font-size:16px;font-style:normal;font-weight:400;line-height:140%}.exm[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.nme[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);font-size:18px;font-style:normal;font-weight:700;line-height:140%}.Cancel[_ngcontent-%COMP%]{color:var(--button-default, #8E433E);font-family:Nunito Sans;font-size:14px;font-style:normal;font-weight:800;line-height:140%;padding-top:12px;padding-right:15px}.btnn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:56px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;margin-right:20px;cursor:pointer}.btnn[_ngcontent-%COMP%]:focus{color:#fff}.btnn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.redirect[_ngcontent-%COMP%]{color:var(--fonts-primary, #1E1E1E);font-size:16px;font-style:normal;font-weight:400;line-height:140%;margin-bottom:26px}.di-body[_ngcontent-%COMP%]{padding:10px 20px;display:flex;justify-content:center;flex-direction:column;gap:15px}@media (max-width: 767px){.dialog[_ngcontent-%COMP%]{background-color:var(--bg-color);border:1px solid var(--input-border-color);border-radius:5px;box-shadow:none;width:90%}.dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid var(--global-border);padding:10px 0 2px}.dialog[_ngcontent-%COMP%]   .di-head[_ngcontent-%COMP%]{font-family:var(--font-family);font-size:18px!important;font-weight:700;padding:0 14px}.img-mob[_ngcontent-%COMP%]{height:20px}.di-body[_ngcontent-%COMP%]{padding:10px 15px}}"]
                    })
                }
                return g
            })()
        },
        11341: (I, v, s) => {
            s.d(v, {
                t: () => w
            });
            var o = s(92340),
                b = s(61135),
                f = s(94650),
                e = s(80529);
            let w = (() => {
                class C {
                    constructor(m) {
                        this.http = m, this.peep = new b.X(""), this.peep$ = this.peep.asObservable(), this.apiUrl1 = o.N.apiUrl + "/candidate/2.3/examDateShifts"
                    }
                    passExamName(m) {
                        this.peep.next(m)
                    }
                    getDetailsByNotificationId(m) {
                        return this.http.get(o.N.apiUrl + "/candidate/2.3/getChallengeDetailsByNotificationId?notificationId=" + m)
                    }
                    getDetailsByChID(m) {
                        return this.http.post(o.N.apiUrl + "/candidate/2.3/getDetailsByChID", m)
                    }
                    getAllActiveExams() {
                        return this.http.get(o.N.apiUrl + "/admin/5.1/challengeExams")
                    }
                    getAllLanguage() {
                        return this.http.get(o.N.apiUrl + "/candidate/2.3/languages")
                    }
                    getAllObjections() {
                        return this.http.get(o.N.apiUrl + "/candidate/2.3/natureOfObjections")
                    }
                    getAllChallenge() {
                        return this.http.get(o.N.apiUrl + "/candidate/2.3/challengesById")
                    }
                    getRaisedChallenge(m) {
                        return this.http.get(o.N.apiUrl + `/candidate/2.3/challenges?examId=${m}`)
                    }
                    getExamShifts(m, g = null) {
                        return this.http.get(`${this.apiUrl1}?examId=${m}&examYear=${g}`)
                    }
                    submitChallenge(m) {
                        return this.http.post(o.N.apiUrl + "/candidate/2.3/challenge", m)
                    }
                    static# e = this.\u0275fac = function(g) {
                        return new(g || C)(f.LFG(e.eN))
                    };
                    static# t = this.\u0275prov = f.Yz7({
                        token: C,
                        factory: C.\u0275fac,
                        providedIn: "root"
                    })
                }
                return C
            })()
        },
        98290: (I, v, s) => {
            s.d(v, {
                J: () => g
            });
            var o = s(94650),
                b = s(82182),
                f = s(36895);

            function e(h, u) {
                if (1 & h && (o.TgZ(0, "div", 9), o._uU(1), o.qZA()), 2 & h) {
                    const l = o.oxw();
                    o.xp6(1), o.hij(" ", l.getDisplayText(l.selectedOption), " ")
                }
            }

            function w(h, u) {
                1 & h && (o.TgZ(0, "div", 10), o._uU(1, "Select"), o.qZA())
            }

            function C(h, u) {
                if (1 & h) {
                    const l = o.EpF();
                    o.ynx(0), o.TgZ(1, "li", 14), o.NdJ("click", function() {
                        const _ = o.CHM(l).$implicit,
                            y = o.oxw(2);
                        return o.KtG(y.selectOption(_))
                    }), o._uU(2), o.qZA(), o.BQk()
                }
                if (2 & h) {
                    const l = u.$implicit,
                        p = o.oxw(2);
                    o.xp6(1), o.Tol((null == p.highlightedOption ? null : p.highlightedOption.id) === l.id ? "active" : ""), o.Q6J("value", l.id)("id", l.id), o.xp6(1), o.hij(" ", p.getDisplayText(l), " ")
                }
            }

            function O(h, u) {
                if (1 & h && (o.TgZ(0, "div", 11)(1, "ul", 12), o.YNc(2, C, 3, 5, "ng-container", 13), o.qZA()()), 2 & h) {
                    const l = o.oxw();
                    o.xp6(1), o.Tol(l.options && l.options.length > 8 ? "scroll" : ""), o.xp6(1), o.Q6J("ngForOf", l.options)
                }
            }
            const m = function(h) {
                return {
                    disabled: h
                }
            };
            let g = (() => {
                class h {
                    constructor(l, p, c) {
                        this.elementRef = l, this.dropService = p, this.renderer = c, this.searchStr = "", this.searchTimeout = null, this.dropCheck = !1, this.haveValue = !1, this.default = !0, this.prevSelectedOption = "", this.showSearch = !0, this.searchPlaceholder = "Search...", this.options = [], this.selectedOption = null, this.dropdownClass = "custom-dropdown-css-class", this.displayNameKeys = [], this.label = "Label", this.selectionChange = new o.vpe, this.showRequired = "false", this.showDropdown = !1, this.searchText = "", this.filteredOptions = [], this.optionData = [], this.disabled = !1, this.dropService.resetObservable.subscribe(_ => {
                            _ && this.reset()
                        })
                    }
                    dropTogge() {
                        if (!this.disabled) {
                            this.dropCheck = !this.dropCheck;
                            let l = document.getElementById("iconId");
                            this.dropCheck ? (l ? .classList.remove("downIcon"), l ? .classList.add("upIcon")) : (l ? .classList.remove("upIcon"), l ? .classList.add("downIcon"))
                        }
                    }
                    itemSelect() {}
                    ngOnChanges(l) {
                        l ? .selectedOption && l ? .selectedOption ? .currentValue && (this.prevSelectedOption = l.selectedOption.currentValue);
                        const p = this.displayNameKeys[0];
                        this.options && this.options ? .length > 0 && "" !== this.prevSelectedOption && (this.selectedOption = "year" === p ? this.options ? .find(c => c[p] === this.prevSelectedOption) : this.options ? .find(c => c.id === this.prevSelectedOption), this.selectedOption && (this.haveValue = !0, this.default = !1))
                    }
                    ngOnInit() {
                        this.filteredOptions = this.options
                    }
                    filterOptions() {
                        this.filteredOptions = this.options ? .filter(l => this.getDisplayText(l).toLowerCase().includes(this.searchText.toLowerCase()))
                    }
                    selectOption(l) {
                        this.selectedOption = l, this.showDropdown = !1, this.haveValue = !0, this.default = !1, this.dropTogge(), this.selectionChange.emit(l)
                    }
                    reset() {
                        this.selectedOption = null, this.searchText = "", this.filteredOptions = this.options, this.haveValue = !1, this.default = !0, this.prevSelectedOption = "", this.selectionChange.emit(null)
                    }
                    toggleDropdown() {
                        this.showDropdown = !this.showDropdown, this.showDropdown || (this.searchText = "", this.filteredOptions = this.options)
                    }
                    getDisplayText(l) {
                        return null == l ? "" : this.displayNameKeys.map(p => l[p]).join(" - ")
                    }
                    onDocumentClick(l) {
                        const p = l.target;
                        if (!this.elementRef.nativeElement.querySelector("#dropsection").contains(p)) {
                            this.dropCheck = !1;
                            let _ = document.getElementById("iconId");
                            this.dropCheck ? (_ ? .classList.remove("downIcon"), _ ? .classList.add("upIcon")) : (_ ? .classList.remove("upIcon"), _ ? .classList.add("downIcon"))
                        }
                    }
                    onKeyPress(l) {
                        if (!this.dropCheck) return;
                        this.searchStr += l.key.toLowerCase(), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(() => {
                            this.searchStr = ""
                        }, 500);
                        const c = this.options.find(_ => this.getDisplayText(_).toLowerCase().startsWith(this.searchStr));
                        if (c) {
                            this.highlightedOption = c;
                            const y = 35,
                                Z = (this.options.indexOf(this.highlightedOption) - Math.floor(1.5)) * y,
                                P = this.elementRef.nativeElement.querySelector(".list"),
                                A = this.elementRef.nativeElement.querySelector(".active");
                            P && A && this.renderer.setProperty(P, "scrollTop", Z)
                        }
                    }
                    static# e = this.\u0275fac = function(p) {
                        return new(p || h)(o.Y36(o.SBq), o.Y36(b.P), o.Y36(o.Qsj))
                    };
                    static# t = this.\u0275cmp = o.Xpm({
                        type: h,
                        selectors: [
                            ["app-dropdown"]
                        ],
                        hostBindings: function(p, c) {
                            1 & p && o.NdJ("click", function(y) {
                                return c.onDocumentClick(y)
                            }, !1, o.evT)("keypress", function(y) {
                                return c.onKeyPress(y)
                            }, !1, o.evT)
                        },
                        inputs: {
                            showSearch: "showSearch",
                            searchPlaceholder: "searchPlaceholder",
                            options: "options",
                            selectedOption: "selectedOption",
                            dropdownClass: "dropdownClass",
                            displayNameKeys: "displayNameKeys",
                            label: "label",
                            showRequired: "showRequired",
                            optionData: "optionData",
                            disabled: "disabled"
                        },
                        outputs: {
                            selectionChange: "selectionChange"
                        },
                        features: [o.TTD],
                        decls: 10,
                        vars: 13,
                        consts: [
                            ["id", "dropsection", 1, "ng-dropdown"],
                            [1, "label"],
                            ["tabindex", "0", 1, "value-area", 3, "ngClass", "click", "keypress"],
                            ["class", "value", 4, "ngIf"],
                            ["class", "defulat", "class", "select-type", 4, "ngIf"],
                            ["id", "iconId", 1, "icon", "img"],
                            ["src", "assets/images/Globals.svg", "alt", "icon", 1, "up"],
                            ["src", "assets/images/angle_down.svg", "alt", "icon", 1, "down"],
                            ["class", "drop-list active", 4, "ngIf"],
                            [1, "value"],
                            [1, "select-type"],
                            [1, "drop-list", "active"],
                            [1, "list"],
                            [4, "ngFor", "ngForOf"],
                            [3, "value", "id", "click"]
                        ],
                        template: function(p, c) {
                            1 & p && (o.TgZ(0, "div", 0)(1, "div", 1), o._uU(2), o.qZA(), o.TgZ(3, "div", 2), o.NdJ("click", function() {
                                return c.dropTogge()
                            })("keypress", function(y) {
                                return c.onKeyPress(y)
                            }), o.YNc(4, e, 2, 1, "div", 3), o.YNc(5, w, 2, 0, "div", 4), o.TgZ(6, "div", 5), o._UZ(7, "img", 6)(8, "img", 7), o.qZA()(), o.YNc(9, O, 3, 3, "div", 8), o.qZA()), 2 & p && (o.Tol(c.dropdownClass), o.xp6(1), o.Tol("true" === c.showRequired ? "required" : ""), o.xp6(1), o.hij(" ", c.label, " "), o.xp6(1), o.Tol(c.dropCheck ? "color-hgt" : ""), o.Q6J("ngClass", o.VKq(11, m, 1 == c.disabled)), o.xp6(1), o.Q6J("ngIf", c.haveValue), o.xp6(1), o.Q6J("ngIf", c.default), o.xp6(4), o.Q6J("ngIf", c.dropCheck))
                        },
                        dependencies: [f.mk, f.sg, f.O5],
                        styles: [".ng-dropdown[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column}.ng-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f1f1f1!important}.ng-dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#252525;font-size:14px;font-style:normal;font-weight:700;line-height:140%;display:flex;justify-content:left;padding-left:0!important}.ng-dropdown[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{color:#606060;font-size:16px;font-style:normal;font-weight:400;line-height:140%}.ng-dropdown[_ngcontent-%COMP%]   .value-area[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-radius:8px;border:1px solid var(--global-border, #e6e6e6);background:var(--global-white, #fdfdfd);position:relative;height:40px;overflow:auto}.ng-dropdown[_ngcontent-%COMP%]   .value-area[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;padding-left:10px;font-size:14px;justify-content:flex-start;align-items:flex-start}.ng-dropdown[_ngcontent-%COMP%]   .drop-list[_ngcontent-%COMP%]{border-radius:8px;border:1px solid var(--global-border, #e6e6e6);background:var(--global-white, #fdfdfd);margin:4px 0;box-shadow:0 20px 40px #0000000d;top:62px!important;z-index:11;width:100%;padding-top:2px;position:absolute}.ng-dropdown[_ngcontent-%COMP%]   .drop-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.ng-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:2px}.ng-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--fonts-primary, #1e1e1e);font-size:14px;font-style:normal;font-weight:400;list-style-type:none;padding:8px 20px;border-radius:4px}.ng-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .ng-dropdown[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:var(--button-menu-default, #f0dddb)}.ng-dropdown[_ngcontent-%COMP%]   .select-type[_ngcontent-%COMP%]{color:var(--fonts-primary, #1e1e1e);font-size:14px;font-style:normal;font-weight:400;line-height:140%;padding-left:15px}.ng-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:40px;display:flex;justify-content:center;align-items:center;background-color:#f9f1f1;height:100%;cursor:pointer}.ng-dropdown[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{display:none}.downIcon[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{display:block!important}.downIcon[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{display:none!important}.upIcon[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{display:block!important}.upIcon[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{display:none!important}.scroll[_ngcontent-%COMP%]{overflow-y:scroll;height:220px}.cursor-nt-allowed[_ngcontent-%COMP%]{cursor:not-allowed!important}[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px;height:7px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--primary-color);border-radius:2px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--primary-color)}@media (max-width: 767px){.ng-dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{white-space:inherit}}@media (max-width: 427px){.ng-dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:11px}.ng-dropdown[_ngcontent-%COMP%]   .drop-list[_ngcontent-%COMP%]{top:57px}}.ng-dropdown.hei[_ngcontent-%COMP%]   .value-area[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{height:100%;align-items:flex-start;padding:10px}@media (max-width: 767px){.ng-dropdown[_ngcontent-%COMP%]   .select-type[_ngcontent-%COMP%], .ng-dropdown[_ngcontent-%COMP%]   .value-area[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:var(--font-size-12)}}"]
                    })
                }
                return h
            })()
        }
    }
]);