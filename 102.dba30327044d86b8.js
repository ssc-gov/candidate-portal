"use strict";
(self.webpackChunkcandidate_portal = self.webpackChunkcandidate_portal || []).push([
    [102], {
        82102: (T, M, f) => {
            f.r(M), f.d(M, {
                DashboardModule: () => Yi
            });
            var l = f(36895),
                g = f(11310),
                v = f(92340),
                t = f(94650),
                _ = f(34356),
                N = f(17880),
                r = f(24006),
                s = f(65412),
                p = f(32834),
                m = f(3323),
                Z = f(11481);

            function h(i, c) {
                1 & i && (t.TgZ(0, "div"), t._UZ(1, "img", 13), t.qZA())
            }

            function C(i, c) {
                if (1 & i && (t.TgZ(0, "div"), t._UZ(1, "img", 14), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("src", n.profilePicUrl, t.LSH)
                }
            }

            function w(i, c) {
                if (1 & i && (t.TgZ(0, "div"), t._UZ(1, "img", 14), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("src", n.selectedImageUrl, t.LSH)
                }
            }
            let P = (() => {
                class i {
                    constructor(n, o, e, a, d, u) {
                        this.dialogRef = n, this.data = o, this.formBuilder = e, this.dashboardService = a, this.cmService = d, this.sanitizer = u, this.selectedFileName = "", this.candidateOtrId = "", this.selectedImageUrl = "", this.bodyKey = ["profilePhoto"], this.isProfile = "true", this.imageMsg = "", this.fileSizeErr = !1, this.pictureUploaded = !1, this.proPictureForm = this.formBuilder.group({
                            file: ["", r.kI.required]
                        })
                    }
                    ngOnInit() {
                        this.candidateOtrId = this.data.otrId, this.getProfilePicture()
                    }
                    getProfilePicture() {
                        this.dashboardService.getProfilePic(this.candidateOtrId).subscribe(n => {
                            "200" == n.statusCode ? (this.getProfilePictureMain(n.data ? .fileName), this.showProfilePic = !0, this.showIcon = !1, this.showSelectedImage = !1, this.isButtonDisabled = !0) : "404" == n.statusCode && (this.showIcon = !0, this.showProfilePic = !1, this.showSelectedImage = !1, this.isButtonDisabled = !0)
                        })
                    }
                    onFileSelected(n) {
                        const o = n.target.files[0];
                        if (!o) return;
                        const {
                            name: e,
                            size: a
                        } = o, d = e ? .split(".").pop() ? .toLowerCase();
                        if (["png", "jpg", "jpeg"].includes(d)) return this.showIcon = !1, this.showProfilePic = !1, this.showSelectedImage = !0, this.isButtonDisabled = !1, a / 1048576 > 2 ? (this.loadSelectedImage(o), void this.handleFileSizeError()) : void this.loadSelectedImage(o);
                        this.handleInvalidFile()
                    }
                    getProfilePictureMain(n) {
                        this.cmService.getImage("profilePhoto/" + n).subscribe({
                            next: o => {
                                const e = URL.createObjectURL(o);
                                this.profilePicUrl = this.sanitizer.bypassSecurityTrustUrl(e)
                            },
                            error: o => {
                                console.error("Error loading image:", o)
                            }
                        })
                    }
                    handleInvalidFile() {
                        this.selectedImageUrl = "", this.isButtonDisabled = !0, this.pictureUploaded = !1, this.imageMsg = N.oH.EXT_ERR
                    }
                    handleFileSizeError() {
                        this.selectedImageUrl = "", this.isButtonDisabled = !0, this.pictureUploaded = !1, this.imageMsg = N.oH.FILE_SIZE, this.fileSizeErr = !0
                    }
                    loadSelectedImage(n) {
                        const o = new FileReader;
                        o.onload = e => {
                            this.selectedImageUrl = e.target ? .result
                        }, o.readAsDataURL(n), this.selectedFile = n, this.selectedFileName = n ? .name, this.imageMsg = "", this.fileSizeErr = !1
                    }
                    uploadProPic() {
                        this.profilePicUrl ? this.updatePicture() : this.uploadProfilePicture()
                    }
                    uploadProfilePicture() {
                        if (null == this.selectedFile) return this.pictureUploaded = !1, void(this.imageMsg = "Please select Image");
                        this.imageMsg = "";
                        let n = new FormData;
                        n.append("file", this.selectedFile), n.append("keys", JSON.stringify(this.bodyKey)), n.append("otrId", this.candidateOtrId), n.append("isprofile", this.isProfile), this.dashboardService.changeProfilePic(n).subscribe(o => {
                            "200" == o.statusCode ? (this.pictureUploaded = !0, this.imageMsg = N.oH.PRO_SUC, this.getProfilePicture(), this.cmService.updateProfile(!0)) : this.imageMsg = ""
                        })
                    }
                    updatePicture() {
                        if (null == this.selectedFile) return this.imageMsg = "Please select Image", void(this.pictureUploaded = !1);
                        this.imageMsg = "";
                        let n = new FormData;
                        n.append("file", this.selectedFile), n.append("keys", JSON.stringify(this.bodyKey)), n.append("otrId", this.candidateOtrId), this.dashboardService.updateProfilePic(n).subscribe(o => {
                            "200" == o.statusCode ? (this.pictureUploaded = !0, this.imageMsg = N.oH.PRO_SUC, this.getProfilePicture(), this.cmService.updateProfile(!0)) : this.imageMsg = ""
                        })
                    }
                    onCancel() {
                        this.dialogRef.close()
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(s.so), t.Y36(s.WI), t.Y36(r.qu), t.Y36(p.s), t.Y36(m.v), t.Y36(Z.H7))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-profile-picture"]
                        ],
                        decls: 23,
                        vars: 12,
                        consts: [
                            [1, "dialog-overlay", "filterBox"],
                            [1, "dialog"],
                            [1, "heading"],
                            [1, "formss", 3, "formGroup"],
                            [1, "prof-co"],
                            [1, "img-block"],
                            [4, "ngIf"],
                            [1, "edit-opt"],
                            ["type", "file", "formControlName", "file", "accept", ".jpg,.png,.jpeg", 3, "change"],
                            ["src", "assets/images/edit-ic.svg", "alt", "edit", "width", "15px", "height", "15px"],
                            [1, "btn-bl"],
                            ["type", "button", 1, "btnm", "canc", 3, "click"],
                            ["type", "submit", 1, "btnm", "sv", 3, "disabled", "click"],
                            ["width", "70px", "src", "assets/image/Profile_White.svg", "alt", "profile"],
                            ["alt", "", 2, "width", "100%", 3, "src"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "h3", 2), t._uU(3, "Change Profile Picture"), t.qZA(), t.TgZ(4, "form", 3)(5, "div", 4)(6, "div", 5)(7, "div"), t.YNc(8, h, 2, 0, "div", 6), t.YNc(9, C, 2, 1, "div", 6), t.YNc(10, w, 2, 1, "div", 6), t.qZA(), t.TgZ(11, "div", 7)(12, "input", 8), t.NdJ("change", function(d) {
                                return e.onFileSelected(d)
                            }), t.qZA(), t.TgZ(13, "div"), t._UZ(14, "img", 9), t.qZA()()()(), t.TgZ(15, "div", 10)(16, "button", 11), t.NdJ("click", function() {
                                return e.onCancel()
                            }), t._uU(17, " Cancel"), t.qZA(), t.TgZ(18, "button", 12), t.NdJ("click", function() {
                                return e.uploadProPic()
                            }), t._uU(19, " Save"), t.qZA()(), t.TgZ(20, "div")(21, "span"), t._uU(22), t.qZA()()()()()), 2 & o && (t.xp6(4), t.Q6J("formGroup", e.proPictureForm), t.xp6(4), t.Q6J("ngIf", e.showIcon), t.xp6(1), t.Q6J("ngIf", e.showProfilePic), t.xp6(1), t.Q6J("ngIf", e.showSelectedImage), t.xp6(8), t.Udp("background", e.isButtonDisabled ? "#D3D3D3" : "var(--button-default, #8E433E)"), t.Q6J("disabled", e.isButtonDisabled), t.xp6(3), t.ekj("success-msg", e.pictureUploaded)("pic-err", !e.pictureUploaded), t.xp6(1), t.Oqu(e.imageMsg))
                        },
                        dependencies: [l.O5, r._Y, r.Fj, r.JJ, r.JL, r.sg, r.u],
                        styles: [".dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:rgba(0,0,0,.4705882353)}.dialog-overlay[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]{background-color:#fff;border:1px solid var(--input-border-color);border-radius:10px;box-shadow:0 0 10px #0000004d;max-width:400px;width:80%;max-height:calc(100vh - 20px);overflow:auto;padding:20px;display:flex;flex-direction:column;gap:20px}.heading[_ngcontent-%COMP%]{color:var(--primary-color, #8E433E);text-align:center;font-style:normal;font-weight:700;line-height:140%}.prof-co[_ngcontent-%COMP%]{display:flex;padding:20px 24px;flex-direction:column;align-items:center;gap:18px;border-radius:12px;border:1px solid #E6E6E6;background:#F9F1F1;position:relative}.img-block[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:50%;background-color:var(--global-white);border:1px solid var(--global-border);display:flex;justify-content:center;align-items:center;overflow:hidden}.btnm[_ngcontent-%COMP%]{display:flex;padding:13px 34px;justify-content:center;align-items:center}.canc[_ngcontent-%COMP%]{border-radius:56px;border:1px solid var(--button-default, #8E433E);background:var(--global-white, #FDFDFD);outline:none;color:var(--primary-color)}.sv[_ngcontent-%COMP%]{border-radius:56px;background:var(--button-default, #8E433E);color:var(--global-white);border:none}.btn-bl[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:10px;flex:1 0 0;margin-top:10px}.edit-opt[_ngcontent-%COMP%]{width:25px;height:25px;background-color:var(--global-white);border-radius:50%;display:flex;justify-content:center;align-items:center;position:absolute;bottom:51px;padding:10px;right:115px;box-shadow:#00000059 0 5px 15px}.edit-opt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.edit-opt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;position:absolute;left:6px;top:5px}.success-msg[_ngcontent-%COMP%]{color:green;text-align:center;display:block;margin-top:5px}.pic-err[_ngcontent-%COMP%]{color:red;text-align:center;display:block;margin-top:5px}@media (max-width: 575.98px){.edit-opt[_ngcontent-%COMP%]{right:111px}}@media (max-width: 504.98px){.edit-opt[_ngcontent-%COMP%]{right:68px}.prof-co[_ngcontent-%COMP%]{width:300px}.formss[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}}@media (max-width: 500px){.edit-opt[_ngcontent-%COMP%]{right:89px}}"]
                    })
                }
                return i
            })();
            var x = f(57930),
                $ = f(70056),
                J = f(67780),
                D = f(77334);

            function j(i, c) {
                if (1 & i && (t.ynx(0), t.TgZ(1, "h2", 25), t._uU(2), t.qZA(), t.BQk()), 2 & i) {
                    const n = t.oxw(2);
                    t.xp6(2), t.Oqu(n.nickName)
                }
            }

            function gt(i, c) {
                if (1 & i && (t.ynx(0), t._UZ(1, "img", 26), t.BQk()), 2 & i) {
                    const n = t.oxw(2);
                    t.xp6(1), t.Q6J("src", n.profilePicUrl, t.LSH)
                }
            }

            function mt(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 1), t._UZ(1, "app-bread-crumb", 2), t.TgZ(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "p", 6), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.routeToEditOTR())
                    }), t._uU(6, "Edit Registration Details"), t.qZA()()()(), t.TgZ(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.openProfilePictureDialog())
                    }), t.YNc(12, j, 3, 1, "ng-container", 12), t.YNc(13, gt, 2, 1, "ng-container", 12), t.TgZ(14, "div", 13), t._UZ(15, "img", 14), t.qZA()()(), t._UZ(16, "div", 15)(17, "span"), t.TgZ(18, "div", 16)(19, "p", 17), t._uU(20), t.qZA(), t.TgZ(21, "p", 18), t._uU(22), t.qZA()()(), t.TgZ(23, "div", 19)(24, "div", 3)(25, "div", 20)(26, "div", 21), t._uU(27), t.qZA(), t.TgZ(28, "div", 22), t._uU(29, "Father\u2019s Name"), t.qZA()(), t.TgZ(30, "div", 20)(31, "div", 21), t._uU(32), t.qZA(), t.TgZ(33, "div", 22), t._uU(34, "Mother\u2019s Name"), t.qZA()(), t.TgZ(35, "div", 20)(36, "div", 21), t._uU(37), t.qZA(), t.TgZ(38, "div", 22), t._uU(39, "Mobile Number"), t.qZA()(), t.TgZ(40, "div", 20)(41, "div", 21), t._uU(42), t.qZA(), t.TgZ(43, "div", 22), t._uU(44, " Email ID"), t.qZA()(), t.TgZ(45, "div", 23)(46, "div", 21), t._uU(47), t.qZA(), t.TgZ(48, "div", 22), t._uU(49, "Address"), t.qZA()()()()()(), t.ynx(50), t._UZ(51, "app-header", 24), t.BQk(), t.qZA()
                }
                if (2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("breadCrumb", n.breadCrumbData)("isEventRequired", n.isEventRequired)("customUrl", n.customUrl), t.xp6(11), t.Q6J("ngIf", n.showNickNameOrImg), t.xp6(1), t.Q6J("ngIf", !n.showNickNameOrImg), t.xp6(7), t.Oqu(null == n.otrData || null == n.otrData.docs ? null : n.otrData.docs.otrPersonal.name), t.xp6(2), t.hij("Reg. No : ", null == n.otrData || null == n.otrData.docs ? null : n.otrData.docs.registrationNo, ""), t.xp6(5), t.Oqu(null == n.otrData || null == n.otrData.docs ? null : n.otrData.docs.otrPersonal.fathersName), t.xp6(5), t.Oqu(null == n.otrData || null == n.otrData.docs ? null : n.otrData.docs.otrPersonal.mothersName), t.xp6(5), t.Oqu(null == n.otrData || null == n.otrData.docs ? null : n.otrData.docs.otrPersonal.mobileNumber), t.xp6(5), t.Oqu(null == n.otrData || null == n.otrData.docs ? null : n.otrData.docs.otrPersonal.emailId), t.xp6(5), t.HOy("", null == n.otrData || null == n.otrData.docs || null == n.otrData.docs.otrAdditional || null == n.otrData.docs.otrAdditional.address ? null : n.otrData.docs.otrAdditional.address.permanentAddress, " ", null == n.otrData || null == n.otrData.permanentDistrictData ? null : n.otrData.permanentDistrictData.districtName, " ", null == n.otrData || null == n.otrData.docs || null == n.otrData.docs.otrAdditional || null == n.otrData.docs.otrAdditional.address ? null : n.otrData.docs.otrAdditional.address.permanentPincode, " ", null == n.otrData || null == n.otrData.permanentStateData ? null : n.otrData.permanentStateData.state, " "), t.xp6(4), t.Q6J("candidateId", n.candidateOTRid)
                }
            }
            let _t = (() => {
                    class i {
                        constructor(n, o, e, a, d, u, b) {
                            this.otrService = n, this.tokenService = o, this.route = e, this.dialog = a, this.dashboardService = d, this.cmService = u, this.sanitizer = b, this.breadCrumbData = N.hd, this.registrationNo = "", this.notFoundMsg = "", this.customUrl = "", this.isEventRequired = !0, this.declaration = !0, this.showPage = !1, this.candiateName = "", this.candidateOTRid = "", this.showNickNameOrImg = !0
                        }
                        ngOnInit() {
                            this.otrService.setDeclaration(this.declaration), this.customUrl = "localhost" === v.N.host ? "http://localhost:4200" : "/";
                            let n = this.tokenService.getDecoded();
                            n && (this.registrationNo = n.username, this.registrationNo && this.getSecurityQuestionByRegNo(), this.otrDetails()), this.cmService.getProfile().subscribe(o => {
                                o && this.otrDetails()
                            })
                        }
                        getSecurityQuestionByRegNo() {
                            this.dashboardService.checkSecurityQuestions().subscribe(n => {
                                "200" === n.statusCode && !1 === n.data ? .isSecurityQuestionFilled && (this.secQueDialog = this.dialog.open(x.I, {
                                    data: {
                                        msgType: "Error",
                                        message: "Please set your security questions first !"
                                    }
                                }), this.secQueDialog.afterClosed().subscribe(o => {
                                    this.route.navigate(["/dashboard/change-security-questions"])
                                }))
                            })
                        }
                        otrDetails() {
                            this.otrService.getDashboardData().subscribe(n => {
                                "200" === n.statusCode ? (this.otrData = n ? .data, this.regNumber = this.otrData ? .docs ? .otrPersonal ? .registrationNo, this.candidateOTRid = this.otrData ? .docs ? .id, this.candiateName = this.otrData ? .docs ? .otrPersonal ? .name, this.isDeclaration = this.otrData ? .docs ? .otrAdditional ? .declaration, this.dashboardService.getProfilePic(this.candidateOTRid).subscribe(o => {
                                    "200" == o.statusCode ? (this.getProfilePicture(o ? .data ? .fileName), this.showNickNameOrImg = !1) : this.showNickNameOrImg = !0, this.candidateNickName()
                                }), !0 !== this.isDeclaration ? (this.showPage = !1, this.aprvDialog = this.dialog.open(x.I, {
                                    data: {
                                        msgType: "Error",
                                        message: "Please complete declaration."
                                    }
                                }), this.aprvDialog.afterClosed().subscribe(o => {
                                    this.route.navigate(["/edit-registrationDetails/edit-declaration"])
                                })) : this.showPage = !0) : this.notFoundMsg = `Details not found for registration number: ${this.registrationNo}`
                            })
                        }
                        router(n) {
                            this.route.navigate([n])
                        }
                        goToHome() {
                            "localhost" === v.N.host && (this.customUrl = "http://localhost:4200"), this.customUrl = "/"
                        }
                        routeToEditOTR() {
                            this.allowedNavigation(), this.route.navigate(["/edit-registrationDetails/edit-personal-details"])
                        }
                        allowedNavigation() {
                            this.cmService.allowedNavigation()
                        }
                        candidateNickName() {
                            this.nickName = this.candiateName ? .trim().split(" ").map(n => n ? n.substring(0, 1) : "").join("")
                        }
                        openProfilePictureDialog() {
                            this.dialog.open(P, {
                                width: "50%",
                                minHeight: "calc(100vh - 90px)",
                                height: "200px",
                                enterAnimationDuration: "0ms",
                                exitAnimationDuration: "0ms",
                                data: {
                                    otrId: this.otrData.docs.id
                                }
                            })
                        }
                        getProfilePicture(n) {
                            this.cmService.getImage("profilePhoto/" + n).subscribe({
                                next: o => {
                                    const e = URL.createObjectURL(o);
                                    this.profilePicUrl = this.sanitizer.bypassSecurityTrustUrl(e)
                                },
                                error: o => {
                                    console.error("Error loading image:", o)
                                }
                            })
                        }
                        static# t = this.\u0275fac = function(o) {
                            return new(o || i)(t.Y36($.t), t.Y36(_.i), t.Y36(g.F0), t.Y36(s.uw), t.Y36(p.s), t.Y36(m.v), t.Y36(Z.H7))
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: i,
                            selectors: [
                                ["app-profile"]
                            ],
                            decls: 1,
                            vars: 1,
                            consts: [
                                ["class", "container", 4, "ngIf"],
                                [1, "container"],
                                [3, "breadCrumb", "isEventRequired", "customUrl"],
                                [1, "row"],
                                [1, "col-lg-12"],
                                [1, "home-icon"],
                                [1, "status-text", 2, "cursor", "pointer", 3, "click"],
                                [1, "row", "ss-gap"],
                                [1, "card", "trans-background"],
                                [1, "img-cl"],
                                [1, "ot"],
                                [1, "img-block", 3, "click"],
                                [4, "ngIf"],
                                [1, "abs"],
                                ["src", "assets/images/edit-ic.svg", "alt", "edit", "width", "15px", "height", "15px"],
                                [1, "edit-opt"],
                                [1, "centre"],
                                [1, "content-text", "bold"],
                                [1, "normal-text"],
                                [1, "right-tab", "tab"],
                                [1, "col-md-4", "col-sm-6", "col-xs-6", "top-margin", "rev"],
                                [1, "tab-head"],
                                [1, "tab-body"],
                                [1, "col-md-4", "col-sm-6", "col-xs-12", "top-margin", "rev"],
                                [2, "display", "none", 3, "candidateId"],
                                [1, "m0"],
                                ["alt", "", 2, "width", "100%", 3, "src"]
                            ],
                            template: function(o, e) {
                                1 & o && t.YNc(0, mt, 52, 16, "div", 0), 2 & o && t.Q6J("ngIf", e.showPage)
                            },
                            dependencies: [l.O5, J.G, D.N],
                            styles: [".card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;padding:10px 0}.ss-gap[_ngcontent-%COMP%]{padding:0 14px}.tab[_ngcontent-%COMP%]{border-left:1px solid var(--global-border)}.top-margin[_ngcontent-%COMP%]{margin:10px 0}.edit-reg[_ngcontent-%COMP%]{position:absolute;cursor:pointer}.right-tab[_ngcontent-%COMP%]{width:80%!important}.card-body[_ngcontent-%COMP%]{padding:0}.para[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#8e433e;text-align:right}.card-header[_ngcontent-%COMP%]{background-color:var(--global-white);border:none}.img-cl[_ngcontent-%COMP%]{margin-top:-45px;width:20%!important;display:flex;flex-direction:column;align-items:center;position:relative}.centre[_ngcontent-%COMP%]{text-align:center}.centre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px;overflow-wrap:anywhere}.status-text[_ngcontent-%COMP%]{margin:0 4px;overflow-wrap:anywhere}.s-gap[_ngcontent-%COMP%]{padding:10px 0}.tab-head[_ngcontent-%COMP%]{font-size:16px;font-weight:700;padding:0 10px}.tab-body[_ngcontent-%COMP%]{font-size:14px;font-weight:400;padding:0 10px}.home-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px;margin-top:15px}.home-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background:gainsboro;padding:5px;width:35px;height:35px;display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer}.home-icon[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px}.edit-otr-text[_ngcontent-%COMP%]{font-size:16px!important;color:var(--maroon-color);font-size:600}.img-block[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:50%;background-color:var(--global-white);border:1px solid var(--global-border);display:flex;justify-content:center;align-items:center;overflow:hidden}.abs[_ngcontent-%COMP%]{width:25px;height:25px;background-color:var(--global-white);border-radius:50%;display:flex;justify-content:center;align-items:center;position:absolute;padding:10px;right:-10px;top:40px;box-shadow:#00000059 0 5px 15px}@media (max-width: 991.98px){.img-cl[_ngcontent-%COMP%]{padding:0 20px}}@media (max-width: 767.98px){.card[_ngcontent-%COMP%]{flex-direction:column;width:99%}.img-cl[_ngcontent-%COMP%]{margin-top:0;display:flex;gap:5px;align-items:center;width:100%!important}.tab[_ngcontent-%COMP%]{border:none}.tab-body[_ngcontent-%COMP%]{font-size:10px}.tab-head[_ngcontent-%COMP%]{font-size:12px}.rev[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;justify-content:flex-end}.img-cl[_ngcontent-%COMP%]{width:100%}.para[_ngcontent-%COMP%]{position:absolute;right:23px;z-index:111;top:20px}.header[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between!important}}.ot[_ngcontent-%COMP%]{overflow:visible;position:relative}"]
                        })
                    }
                    return i
                })(),
                ht = (() => {
                    class i {
                        constructor(n, o) {
                            this.route = n, this.token = o
                        }
                        ngOnInit() {
                            this.username = this.token.getDecoded(), this.showResult = v.N.showResult
                        }
                        checkResult() {
                            this.route.navigate(["/dashboard/check-result"])
                        }
                        checkAmitCard() {
                            this.route.navigate(["/admit-card/admit-card-status"])
                        }
                        static# t = this.\u0275fac = function(o) {
                            return new(o || i)(t.Y36(g.F0), t.Y36(_.i))
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: i,
                            selectors: [
                                ["app-admit-card"]
                            ],
                            decls: 37,
                            vars: 0,
                            consts: [
                                [1, "container"],
                                [1, "rows", "margins", "ss-gap"],
                                [1, "card-wi"],
                                [1, "row"],
                                [1, "admit-card", "card", "no-padding", 3, "click"],
                                [1, "card-body"],
                                [1, "content-box"],
                                [1, "img-cls"],
                                ["src", "assets/images/admit-card.svg", "height", "25", "alt", "admit-card"],
                                [1, "content-admit"],
                                [1, "mb10"],
                                [1, "content"],
                                [1, "pdf-section"],
                                [1, "icon"],
                                ["src", "assets/images/right-arrow.svg", "height", "20", "alt", "arrow"],
                                [1, "card-footer", 2, "background", "#188e18"],
                                [1, "normal-text", "footer-text"],
                                [1, "card-wi", "left-margin"],
                                [1, "admit-card", "card", "no-padding"],
                                ["src", "assets/images/result.svg", "height", "25", "alt", "result"],
                                [1, "card-footer"]
                            ],
                            template: function(o, e) {
                                1 & o && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4), t.NdJ("click", function() {
                                    return e.checkAmitCard()
                                }), t.TgZ(5, "div", 5)(6, "div", 6)(7, "div", 7), t._UZ(8, "img", 8), t.qZA(), t.TgZ(9, "div", 9)(10, "h3", 10), t._uU(11, "Admission Certificate"), t.qZA(), t.TgZ(12, "div", 11), t._UZ(13, "div", 12), t.qZA()()(), t.TgZ(14, "div", 13), t._UZ(15, "img", 14), t.qZA()(), t.ynx(16), t.TgZ(17, "div", 15)(18, "p", 16), t._uU(19, " CGLE 2024 Tier-II Admission Certificate(Know Your City) is live ! "), t.qZA()(), t.BQk(), t.qZA()()(), t.TgZ(20, "div", 17)(21, "div", 3)(22, "div", 18)(23, "div", 5)(24, "div", 6)(25, "div", 7), t._UZ(26, "img", 19), t.qZA(), t.TgZ(27, "div", 9)(28, "h3", 10), t._uU(29, "Result"), t.qZA(), t.TgZ(30, "div", 11), t._UZ(31, "div", 12), t.qZA()()(), t.TgZ(32, "div", 13), t._UZ(33, "img", 14), t.qZA()(), t.TgZ(34, "div", 20)(35, "p", 16), t._uU(36, "Result is not available !"), t.qZA()()()()()()())
                            },
                            styles: [".admit-card[_ngcontent-%COMP%]{height:140px;display:flex}.no-padding[_ngcontent-%COMP%]{padding:0!important}.margins[_ngcontent-%COMP%]{display:flex;padding:10px 14px}.left-margin[_ngcontent-%COMP%]{margin-left:46px}.card-wi[_ngcontent-%COMP%]{width:48.5%}.footer-text[_ngcontent-%COMP%]{color:#fdfdfd;margin:0}.card-body[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer}.content-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.img-cls[_ngcontent-%COMP%]{height:60px;width:60px;border-radius:50%;background-color:var(--global-white);display:flex;justify-content:center;align-items:center;box-shadow:0 4px 10px #00000026}.content-admit[_ngcontent-%COMP%]{margin:0 20px;line-height:100%}.card-footer[_ngcontent-%COMP%]{height:36px;background:linear-gradient(0deg,#434343,#434343),linear-gradient(0deg,#E6E6E6,#E6E6E6);display:flex;justify-content:center;align-items:center;border-bottom-left-radius:15px;border-bottom-right-radius:15px}@media (max-width: 1200px){.card-wi[_ngcontent-%COMP%]{width:48%}}@media (max-width: 767px){.card-wi[_ngcontent-%COMP%]{width:100%}.left-margin[_ngcontent-%COMP%]{margin-left:0}.margins[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px 14px}.content-admit[_ngcontent-%COMP%]{margin:0 10px}}"]
                        })
                    }
                    return i
                })();
            var E = f(15861),
                X = f(33974);

            function xt(i, c) {
                1 & i && (t.TgZ(0, "div", 24)(1, "p"), t._uU(2, 'Your application is already pending, please go to "My Applications" tab for further action.'), t.qZA()())
            }

            function bt(i, c) {
                1 & i && (t.TgZ(0, "div", 24)(1, "p"), t._uU(2, 'Your application is already submitted, please go to "My Applications" tab for further action.'), t.qZA()())
            }

            function yt(i, c) {
                1 & i && (t.TgZ(0, "div", 25), t._UZ(1, "img", 26), t.TgZ(2, "p", 27), t._uU(3, "Details"), t.qZA()())
            }

            function vt(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h3"), t._uU(4), t.qZA(), t.TgZ(5, "p", 10), t._uU(6), t.qZA()()(), t.TgZ(7, "div", 11)(8, "div", 12)(9, "div", 13)(10, "p", 14), t._uU(11, "Application Start Date"), t.qZA(), t.TgZ(12, "p", 15), t._uU(13), t.ALo(14, "date"), t.qZA()(), t.TgZ(15, "div", 13)(16, "p", 14), t._uU(17, "Application End Date"), t.qZA(), t.TgZ(18, "p", 16)(19, "span", 17), t._uU(20), t.ALo(21, "date"), t.qZA(), t._uU(22, "\xa0"), t.TgZ(23, "span", 18), t._uU(24), t.ALo(25, "date"), t.qZA()()(), t.TgZ(26, "div", 13)(27, "p", 14), t._uU(28, "Last Date for Online Fee payment"), t.qZA(), t.TgZ(29, "p", 16)(30, "span", 17), t._uU(31), t.ALo(32, "date"), t.qZA(), t._uU(33, "\xa0"), t.TgZ(34, "span", 18), t._uU(35), t.ALo(36, "date"), t.qZA()()(), t.TgZ(37, "div", 13)(38, "p", 14), t._uU(39, "Window for Application Form Correction and Online Payment of Correction Changes"), t.qZA(), t.TgZ(40, "p", 16)(41, "span", 17), t._uU(42), t.ALo(43, "date"), t.ynx(44), t._uU(45), t.ALo(46, "date"), t.BQk(), t.qZA(), t.TgZ(47, "span", 18), t._uU(48), t.ALo(49, "date"), t.qZA()()()(), t.YNc(50, xt, 3, 0, "div", 19), t.YNc(51, bt, 3, 0, "div", 19), t.TgZ(52, "div", 20)(53, "div", 21), t.YNc(54, yt, 4, 0, "div", 22), t.TgZ(55, "button", 23), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(),
                            a = e.index,
                            d = e.$implicit,
                            u = t.oxw(2);
                        return t.KtG(u.applyForExam(a, d.id, d.examCode))
                    }), t._uU(56, "Apply"), t.qZA()()()()()
                }
                if (2 & i) {
                    const n = t.oxw(),
                        o = n.$implicit,
                        e = n.index,
                        a = t.oxw(2);
                    t.xp6(1), t.Tol("CTGD" === (null == o ? null : o.examCode) ? "card-header-l" : ""), t.xp6(3), t.Oqu(null == o ? null : o.examName), t.xp6(2), t.Oqu(null == o ? null : o.examDescription), t.xp6(7), t.Oqu(t.xi3(14, 15, null == o ? null : o.applicationStartDate, "dd/MM/yyyy")), t.xp6(7), t.Oqu(t.xi3(21, 18, null == o ? null : o.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(25, 21, null == o ? null : o.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(32, 24, null == o ? null : o.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij(" ", null != o && o.lastDateForFee ? "(up to " + t.xi3(36, 27, o.lastDateForFee, "hh:mm a") + ")" : "-", " "), t.xp6(7), t.hij("", t.xi3(43, 30, null == o ? null : o.correctionStartDate, "dd/MM/yyyy"), " - "), t.xp6(3), t.hij(" ", t.xi3(46, 33, null == o ? null : o.correctionEndDate, "dd/MM/yyyy"), " "), t.xp6(3), t.hij(" ", null != o && o.correctionEndDate ? "(up to " + t.xi3(49, 36, o.correctionEndDate, "hh:mm a") + ")" : "-", " "), t.xp6(2), t.Q6J("ngIf", a.selectedExamIndex === e && a.alreadyAppliedMsg), t.xp6(1), t.Q6J("ngIf", a.selectedExamIndex === e && a.submittedMsg), t.xp6(3), t.Q6J("ngForOf", o.attachments)
                }
            }

            function wt(i, c) {
                1 & i && (t.TgZ(0, "div", 24)(1, "p"), t._uU(2, 'Your application is already pending, please go to "My Applications" tab for further action.'), t.qZA()())
            }

            function Ct(i, c) {
                1 & i && (t.TgZ(0, "div", 24)(1, "p"), t._uU(2, 'Your application is already submitted, please go to "My Applications" tab for further action.'), t.qZA()())
            }

            function Pt(i, c) {
                1 & i && (t.TgZ(0, "div", 25), t._UZ(1, "img", 26), t.TgZ(2, "p", 27), t._uU(3, "Details"), t.qZA()())
            }

            function Mt(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h3"), t._uU(4), t.qZA(), t.TgZ(5, "p", 10), t._uU(6), t.qZA()()(), t.TgZ(7, "div", 11)(8, "div", 12)(9, "div", 13)(10, "p", 14), t._uU(11, "Application Start Date"), t.qZA(), t.TgZ(12, "p", 15), t._uU(13), t.ALo(14, "date"), t.qZA()(), t.TgZ(15, "div", 13)(16, "p", 14), t._uU(17, "Application End Date"), t.qZA(), t.TgZ(18, "p", 16)(19, "span", 17), t._uU(20), t.ALo(21, "date"), t.qZA(), t._uU(22, "\xa0"), t.TgZ(23, "span", 18), t._uU(24), t.ALo(25, "date"), t.qZA()()(), t.TgZ(26, "div", 13)(27, "p", 14), t._uU(28, "Last Date for Online Fee payment"), t.qZA(), t.TgZ(29, "p", 16)(30, "span", 17), t._uU(31), t.ALo(32, "date"), t.qZA(), t._uU(33, "\xa0"), t.TgZ(34, "span", 18), t._uU(35), t.ALo(36, "date"), t.qZA()()(), t.TgZ(37, "div", 13)(38, "p", 14), t._uU(39, "Window for Application Form Correction and Online Payment of Correction Changes"), t.qZA(), t.TgZ(40, "p", 16)(41, "span", 17), t._uU(42), t.ALo(43, "date"), t.ynx(44), t._uU(45), t.ALo(46, "date"), t.BQk(), t.qZA(), t.TgZ(47, "span", 18), t._uU(48), t.ALo(49, "date"), t.qZA()()()(), t.YNc(50, wt, 3, 0, "div", 19), t.YNc(51, Ct, 3, 0, "div", 19), t.TgZ(52, "div", 20)(53, "div", 21), t.YNc(54, Pt, 4, 0, "div", 22), t.TgZ(55, "button", 23), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(),
                            a = e.index,
                            d = e.$implicit,
                            u = t.oxw(2);
                        return t.KtG(u.applyForExam(a, d.id, d.examCode))
                    }), t._uU(56, "Apply"), t.qZA()()()()()
                }
                if (2 & i) {
                    const n = t.oxw(),
                        o = n.$implicit,
                        e = n.index,
                        a = t.oxw(2);
                    t.xp6(1), t.Tol("CTGD" === (null == o ? null : o.examCode) ? "card-header-l" : ""), t.xp6(3), t.Oqu(null == o ? null : o.examName), t.xp6(2), t.Oqu(null == o ? null : o.examDescription), t.xp6(7), t.Oqu(t.xi3(14, 15, null == o ? null : o.applicationStartDate, "dd/MM/yyyy")), t.xp6(7), t.Oqu(t.xi3(21, 18, null == o ? null : o.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(25, 21, null == o ? null : o.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(32, 24, null == o ? null : o.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij(" ", null != o && o.lastDateForFee ? "(up to " + t.xi3(36, 27, o.lastDateForFee, "hh:mm a") + ")" : "-", " "), t.xp6(7), t.hij("", t.xi3(43, 30, null == o ? null : o.correctionStartDate, "dd/MM/yyyy"), " - "), t.xp6(3), t.hij(" ", t.xi3(46, 33, null == o ? null : o.correctionEndDate, "dd/MM/yyyy"), " "), t.xp6(3), t.hij(" ", null != o && o.correctionEndDate ? "(up to " + t.xi3(49, 36, o.correctionEndDate, "hh:mm a") + ")" : "-", " "), t.xp6(2), t.Q6J("ngIf", a.selectedExamIndex === e && a.alreadyAppliedMsg), t.xp6(1), t.Q6J("ngIf", a.selectedExamIndex === e && a.submittedMsg), t.xp6(3), t.Q6J("ngForOf", o.attachments)
                }
            }

            function At(i, c) {
                if (1 & i && (t.ynx(0), t.YNc(1, vt, 57, 39, "div", 6), t.YNc(2, Mt, 57, 39, "div", 6), t.BQk()), 2 & i) {
                    const n = c.$implicit,
                        o = t.oxw(2);
                    t.xp6(1), t.Q6J("ngIf", o.reliveExamList.indexOf(n.examCode) > -1 && (null == o.allowedRegistrationNumbers[n.examCode] ? null : o.allowedRegistrationNumbers[n.examCode].includes(o.registrationNumber))), t.xp6(1), t.Q6J("ngIf", -1 == o.reliveExamList.indexOf(n.examCode))
                }
            }

            function St(i, c) {
                1 & i && (t.ynx(0), t.TgZ(1, "div", 28)(2, "div", 29)(3, "div", 30), t._UZ(4, "img", 31), t.TgZ(5, "p", 32), t._uU(6, "At the moment, there are no live exams available."), t.qZA()()()(), t.BQk())
            }

            function Ot(i, c) {
                if (1 & i && (t.TgZ(0, "div", 2)(1, "div", 3), t.YNc(2, At, 3, 2, "ng-container", 4), t.YNc(3, St, 7, 0, "ng-container", 5), t.qZA()()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(2), t.Q6J("ngForOf", n.liveExams), t.xp6(1), t.Q6J("ngIf", 0 == (null == n.liveExams ? null : n.liveExams.length))
                }
            }

            function Nt(i, c) {
                1 & i && (t.TgZ(0, "div", 24)(1, "p"), t._uU(2, "Your application is already pending, please go to My Applications Tab for further Action."), t.qZA()())
            }

            function Zt(i, c) {
                1 & i && (t.TgZ(0, "div", 25), t._UZ(1, "img", 26), t.TgZ(2, "p", 27), t._uU(3, "Details"), t.qZA()())
            }

            function kt(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 36)(1, "div", 8)(2, "div", 9)(3, "h3"), t._uU(4), t.qZA(), t.TgZ(5, "p", 10), t._uU(6), t.qZA()()(), t.TgZ(7, "div", 11)(8, "div", 12)(9, "div", 37)(10, "p", 38), t._uU(11, "Application Start Date"), t.qZA(), t.TgZ(12, "p", 15), t._uU(13), t.ALo(14, "date"), t.qZA()(), t.TgZ(15, "div", 37)(16, "p", 38), t._uU(17, "Application End Date"), t.qZA(), t.TgZ(18, "p", 16)(19, "span", 17), t._uU(20), t.ALo(21, "date"), t.qZA(), t._uU(22, "\xa0"), t.TgZ(23, "span", 18), t._uU(24), t.ALo(25, "date"), t.qZA()()(), t.TgZ(26, "div", 37)(27, "p", 38), t._uU(28, "Last Date for Online Fee payment"), t.qZA(), t.TgZ(29, "p", 16)(30, "span", 17), t._uU(31), t.ALo(32, "date"), t.qZA(), t._uU(33, "\xa0"), t.TgZ(34, "span", 18), t._uU(35), t.ALo(36, "date"), t.qZA()()(), t.TgZ(37, "div", 37)(38, "p", 38), t._uU(39, "Window for Application Form Correction and Online Payment of Correction Changes"), t.qZA(), t.TgZ(40, "p", 16)(41, "span", 17), t._uU(42), t.ALo(43, "date"), t.ynx(44), t._uU(45), t.ALo(46, "date"), t.BQk(), t.qZA(), t.TgZ(47, "span", 18), t._uU(48), t.ALo(49, "date"), t.qZA()()()(), t.TgZ(50, "div", 39)(51, "div", 21), t.YNc(52, Nt, 3, 0, "div", 19), t.YNc(53, Zt, 4, 0, "div", 22), t.TgZ(54, "button", 23), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(),
                            a = e.index,
                            d = e.$implicit,
                            u = t.oxw(2);
                        return t.KtG(u.applyForExam(a, d.id, d.examCode))
                    }), t._uU(55, "Apply"), t.qZA()()()()()
                }
                if (2 & i) {
                    const n = t.oxw(),
                        o = n.$implicit,
                        e = n.index,
                        a = t.oxw(2);
                    t.xp6(1), t.Tol("CTGD" === (null == o ? null : o.examCode) ? "card-header-l" : ""), t.xp6(3), t.Oqu(null == o ? null : o.examName), t.xp6(2), t.Oqu(null == o ? null : o.examDescription), t.xp6(7), t.Oqu(t.xi3(14, 14, null == o ? null : o.applicationStartDate, "dd/MM/yyyy")), t.xp6(7), t.Oqu(t.xi3(21, 17, null == o ? null : o.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(25, 20, null == o ? null : o.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(32, 23, null == o ? null : o.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij(" ", null != o && o.lastDateForFee ? "(up to " + t.xi3(36, 26, o.lastDateForFee, "hh:mm a") + ")" : "-", " "), t.xp6(7), t.hij("", t.xi3(43, 29, o.correctionStartDate, "dd/MM/yyyy"), " - "), t.xp6(3), t.hij(" ", t.xi3(46, 32, null == o ? null : o.correctionEndDate, "dd/MM/yyyy"), " "), t.xp6(3), t.hij(" ", null != o && o.correctionEndDate ? "(up to " + t.xi3(49, 35, o.correctionEndDate, "hh:mm a") + ")" : "-", " "), t.xp6(4), t.Q6J("ngIf", a.selectedExamIndex === e && a.alreadyAppliedMsg), t.xp6(1), t.Q6J("ngForOf", o.attachments)
                }
            }

            function Dt(i, c) {
                1 & i && (t.TgZ(0, "div", 24)(1, "p"), t._uU(2, "Your application is already pending, please go to My Applications Tab for further Action."), t.qZA()())
            }

            function Tt(i, c) {
                1 & i && (t.TgZ(0, "div", 25), t._UZ(1, "img", 26), t.TgZ(2, "p", 27), t._uU(3, "Details"), t.qZA()())
            }

            function Et(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 36)(1, "div", 8)(2, "div", 9)(3, "h3"), t._uU(4), t.qZA(), t.TgZ(5, "p", 10), t._uU(6), t.qZA()()(), t.TgZ(7, "div", 11)(8, "div", 12)(9, "div", 37)(10, "p", 38), t._uU(11, "Application Start Date"), t.qZA(), t.TgZ(12, "p", 15), t._uU(13), t.ALo(14, "date"), t.qZA()(), t.TgZ(15, "div", 37)(16, "p", 38), t._uU(17, "Application End Date"), t.qZA(), t.TgZ(18, "p", 16)(19, "span", 17), t._uU(20), t.ALo(21, "date"), t.qZA(), t._uU(22, "\xa0"), t.TgZ(23, "span", 18), t._uU(24), t.ALo(25, "date"), t.qZA()()(), t.TgZ(26, "div", 37)(27, "p", 38), t._uU(28, "Last Date for Online Fee payment"), t.qZA(), t.TgZ(29, "p", 16)(30, "span", 17), t._uU(31), t.ALo(32, "date"), t.qZA(), t._uU(33, "\xa0"), t.TgZ(34, "span", 18), t._uU(35), t.ALo(36, "date"), t.qZA()()(), t.TgZ(37, "div", 37)(38, "p", 38), t._uU(39, "Window for Application Form Correction and Online Payment of Correction Changes"), t.qZA(), t.TgZ(40, "p", 16)(41, "span", 17), t._uU(42), t.ALo(43, "date"), t.ynx(44), t._uU(45), t.ALo(46, "date"), t.BQk(), t.qZA(), t.TgZ(47, "span", 18), t._uU(48), t.ALo(49, "date"), t.qZA()()()(), t.TgZ(50, "div", 39)(51, "div", 21), t.YNc(52, Dt, 3, 0, "div", 19), t.YNc(53, Tt, 4, 0, "div", 22), t.TgZ(54, "button", 23), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(),
                            a = e.index,
                            d = e.$implicit,
                            u = t.oxw(2);
                        return t.KtG(u.applyForExam(a, d.id, d.examCode))
                    }), t._uU(55, "Apply"), t.qZA()()()()()
                }
                if (2 & i) {
                    const n = t.oxw(),
                        o = n.$implicit,
                        e = n.index,
                        a = t.oxw(2);
                    t.xp6(1), t.Tol("CTGD" === (null == o ? null : o.examCode) ? "card-header-l" : ""), t.xp6(3), t.Oqu(null == o ? null : o.examName), t.xp6(2), t.Oqu(null == o ? null : o.examDescription), t.xp6(7), t.Oqu(t.xi3(14, 14, null == o ? null : o.applicationStartDate, "dd/MM/yyyy")), t.xp6(7), t.Oqu(t.xi3(21, 17, null == o ? null : o.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(25, 20, null == o ? null : o.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(32, 23, null == o ? null : o.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij(" ", null != o && o.lastDateForFee ? "(up to " + t.xi3(36, 26, o.lastDateForFee, "hh:mm a") + ")" : "-", " "), t.xp6(7), t.hij("", t.xi3(43, 29, o.correctionStartDate, "dd/MM/yyyy"), " - "), t.xp6(3), t.hij(" ", t.xi3(46, 32, null == o ? null : o.correctionEndDate, "dd/MM/yyyy"), " "), t.xp6(3), t.hij(" ", null != o && o.correctionEndDate ? "(up to " + t.xi3(49, 35, o.correctionEndDate, "hh:mm a") + ")" : "-", " "), t.xp6(4), t.Q6J("ngIf", a.selectedExamIndex === e && a.alreadyAppliedMsg), t.xp6(1), t.Q6J("ngForOf", o.attachments)
                }
            }

            function It(i, c) {
                if (1 & i && (t.ynx(0), t.YNc(1, kt, 56, 38, "div", 35), t.YNc(2, Et, 56, 38, "div", 35), t.BQk()), 2 & i) {
                    const n = c.$implicit,
                        o = t.oxw(2);
                    t.xp6(1), t.Q6J("ngIf", o.reliveExamList.indexOf(n.examCode) > -1 && (null == o.allowedRegistrationNumbers[n.examCode] ? null : o.allowedRegistrationNumbers[n.examCode].includes(o.registrationNumber))), t.xp6(1), t.Q6J("ngIf", -1 == o.reliveExamList.indexOf(n.examCode))
                }
            }

            function Ut(i, c) {
                1 & i && (t.ynx(0), t.TgZ(1, "div", 28)(2, "div", 29)(3, "div", 30), t._UZ(4, "img", 31), t.TgZ(5, "p", 32), t._uU(6, "At the moment, there are no live exams available."), t.qZA()()()(), t.BQk())
            }

            function qt(i, c) {
                if (1 & i && (t.TgZ(0, "div", 33)(1, "div", 34), t.YNc(2, It, 3, 2, "ng-container", 4), t.YNc(3, Ut, 7, 0, "ng-container", 5), t.qZA()()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(2), t.Q6J("ngForOf", n.liveExams), t.xp6(1), t.Q6J("ngIf", 0 == (null == n.liveExams ? null : n.liveExams.length))
                }
            }
            let zt = (() => {
                class i {
                    constructor(n, o, e, a, d, u) {
                        this.datePipe = n, this.dashboardService = o, this.route = e, this.cglService = a, this.dialog = d, this.tokenService = u, this.view = "card", this.registrationNumber = "", this.submittedMsg = !1, this.allowedRegistrationNumbers = [], this.reliveExamList = [], this.alreadyAppliedMsg = !1
                    }
                    ngOnInit() {
                        var n = this;
                        return (0, E.Z)(function*() {
                            let o = n.tokenService.getDecoded();
                            o && (n.registrationNumber = o.username, [n.reliveExamList, n.allowedRegistrationNumbers] = yield n.dashboardService.setReLiveExams()), n.liveExam()
                        })()
                    }
                    applyForExam(n, o, e) {
                        const a = e.toLowerCase();
                        this.dashboardService.findPendingAppliedExam(o).subscribe(d => {
                            if ("200" === d.statusCode && "success" === d.status) {
                                const u = d.data;
                                1 == u.isApplicationPending ? (this.selectedExamIndex = n, "01" == u.status || "otvi8ir4jdmvitt" == u.status ? this.submittedMsg = !0 : this.alreadyAppliedMsg = !0) : this.route.navigate("capf" == a ? [`/si-application-form/home-page/${o}`] : "rhq" == a || "je" == a || "capf" == a ? [`/${a}-application-form/home-page/${o}`] : [`/${a}-application-form/home-page/${o}/null/false/`])
                            } else this.dialog.open(x.I, {
                                data: {
                                    msgType: "Error",
                                    message: d.message
                                }
                            })
                        })
                    }
                    liveExam() {
                        this.dashboardService.getNewLiveExams().subscribe(n => {
                            "200" == n.statusCode && "success" == n.status && (this.liveExams = n.data)
                        })
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(l.uU), t.Y36(p.s), t.Y36(g.F0), t.Y36(X.m), t.Y36(s.uw), t.Y36(_.i))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-examinations"]
                        ],
                        inputs: {
                            view: "view"
                        },
                        decls: 2,
                        vars: 2,
                        consts: [
                            ["class", "container mob-m0", 4, "ngIf"],
                            ["class", "container", 4, "ngIf"],
                            [1, "container", "mob-m0"],
                            [1, "row", "marginss", "pb20"],
                            [4, "ngFor", "ngForOf"],
                            [4, "ngIf"],
                            ["class", "card-block blocks card-wi border-cls marginss", 4, "ngIf"],
                            [1, "card-block", "blocks", "card-wi", "border-cls", "marginss"],
                            [1, "card-header"],
                            [1, "exam"],
                            [1, "small-font", "m0"],
                            [1, "card-body"],
                            [1, "card-content", "row"],
                            [1, "header", "col-md-6", "row-type"],
                            [1, "context-text", "small-font"],
                            [1, "content-text", "bold"],
                            [1, "content-text"],
                            [1, "bold"],
                            [1, "small-font"],
                            ["style", "color:red;", 4, "ngIf"],
                            [1, "card-footer"],
                            [1, "result-button"],
                            ["class", "imgs left-fl", 4, "ngFor", "ngForOf"],
                            [1, "save-btn", "right-fl", 3, "click"],
                            [2, "color", "red"],
                            [1, "imgs", "left-fl"],
                            ["alt", "pdf-board", "src", "assets/images/pdf-board.svg", "height", "15", 2, "margin", "0px 5px"],
                            [1, "pdf-text", "bold"],
                            [1, "row", "pb20", "mt30"],
                            [1, "center-alignn"],
                            [1, "exams"],
                            ["src", "assets/image/No-data2.svg", "height", "150"],
                            [1, "mt10"],
                            [1, "container"],
                            [1, "row", "space"],
                            ["class", "card-block col-md-12 list-margin", 4, "ngIf"],
                            [1, "card-block", "col-md-12", "list-margin"],
                            [1, "header", "col-md-3", "row-type"],
                            [1, "context-text"],
                            [1, "card-footers"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.YNc(0, Ot, 4, 2, "div", 0), t.YNc(1, qt, 4, 2, "div", 1)), 2 & o && (t.Q6J("ngIf", "card" === e.view), t.xp6(1), t.Q6J("ngIf", "list" === e.view))
                        },
                        dependencies: [l.sg, l.O5, l.uU],
                        styles: [".card-wi[_ngcontent-%COMP%]{width:49%}.result-button[_ngcontent-%COMP%]{height:72px;border-radius:5px;display:flex;justify-content:end;align-items:end}.right-fl[_ngcontent-%COMP%]{float:right}.left-fl[_ngcontent-%COMP%]{float:left}.save-btn[_ngcontent-%COMP%]{margin:10px 3px!important;padding:5px 12px!important;font-size:12px}.pdf-text[_ngcontent-%COMP%]{font-size:14px!important;margin:5px!important;font-size:12px}.status-text[_ngcontent-%COMP%]{font-size:12px!important;margin:5px!important;font-size:12px}@media (max-width: 575.98px){h3[_ngcontent-%COMP%]{font-size:14px!important;margin-bottom:5px!important}.small-font[_ngcontent-%COMP%]{font-size:10px!important}}.exams[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"]
                    })
                }
                return i
            })();
            var tt = f(20269),
                nt = f(96166),
                Bt = f(4159),
                et = f.n(Bt),
                ot = f(35998);
            const Lt = ["capture"],
                Yt = ["canvas"],
                Ft = ["downloadLink"];

            function $t(i, c) {
                if (1 & i && (t.TgZ(0, "div", 23)(1, "p")(2, "b"), t._uU(3), t.qZA()(), t.TgZ(4, "div", 24)(5, "span"), t._uU(6, "Post Name - "), t.TgZ(7, "b"), t._uU(8), t.qZA()(), t.TgZ(9, "span"), t._uU(10, " . "), t.qZA(), t.TgZ(11, "span"), t._uU(12, "Post Level - "), t.TgZ(13, "b"), t._uU(14), t.qZA()(), t.TgZ(15, "span"), t._uU(16, " . "), t.qZA(), t.TgZ(17, "span"), t._uU(18, "Region - "), t.TgZ(19, "b"), t._uU(20), t.qZA()()()()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(3), t.hij("Post Code : ", null == n.appData ? null : n.appData.postCode, ""), t.xp6(5), t.Oqu(null == n.appData ? null : n.appData.postName), t.xp6(6), t.Oqu(null == n.appData ? null : n.appData.postLevel), t.xp6(6), t.Oqu(null == n.appData ? null : n.appData.postRegionInitial)
                }
            }

            function Jt(i, c) {
                if (1 & i && (t.TgZ(0, "p"), t._uU(1), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Oqu(null != n.appData && null != n.appData.myApplicationData && n.appData.myApplicationData.isExempted ? "Exempted" : "Not Exempted")
                }
            }

            function jt(i, c) {
                1 & i && (t.TgZ(0, "p"), t._uU(1, "Not Exempted"), t.qZA())
            }

            function Qt(i, c) {
                if (1 & i && (t.TgZ(0, "p"), t._uU(1), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Oqu(null != n.appData && null != n.appData.myApplicationData && n.appData.myApplicationData.isAppPaymentDone ? "Payment Done" : "Payment Pending")
                }
            }

            function Rt(i, c) {
                1 & i && (t.TgZ(0, "p"), t._uU(1, "-"), t.qZA())
            }

            function Ht(i, c) {
                if (1 & i && (t.TgZ(0, "p"), t._uU(1), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Oqu(null != n.appData && null != n.appData.myApplicationData && n.appData.myApplicationData.isFirstCorrPaymentDone ? "Payment Done" : "Payment Pending")
                }
            }

            function Kt(i, c) {
                if (1 & i && (t.TgZ(0, "p"), t._uU(1), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Oqu(null != n.appData && null != n.appData.myApplicationData && n.appData.myApplicationData.isSecondCorrPaymentDone ? "Payment Done" : "Payment Pending")
                }
            }
            let Q = (() => {
                class i {
                    constructor(n, o, e, a) {
                        this.data = n, this.dialogRef = o, this.document = e, this.spinner = a, this.popcheck = !0, this.paymentVal = !1, this.strPhotoSign = "", console.log("application data", n ? .result, n), this.appData = n ? .result ? n.result : n;
                        let d = "",
                            u = "";
                        "rhq" == this.appData.examCode.toLowerCase() || "je" == this.appData.examCode.toLowerCase() || "capf" == this.appData.examCode.toLowerCase() ? (this.appData ? .photoId && (d = "Photo "), this.appData ? .signId && (u += "Signature")) : (this.appData ? .photoName && (d = "Photo "), this.appData ? .signName && (u += "Signature")), this.strPhotoSign = "" != d && "" != u ? d + " and " + u + " uploaded" : "" != d && "" == u ? "Signature not uploaded" : "" == d && "" != u ? "Photo not uploaded" : "Photo and Signature not uploaded"
                    }
                    closeDialog() {
                        this.popcheck = !1, this.dialogRef.close()
                    }
                    exportAsPDF(n) {
                        this.spinner.show();
                        let o = document.getElementById(n);
                        this.capture.nativeElement.style.overflow = "visible", et()(this.capture.nativeElement, {
                            scale: 1.5,
                            height: o.scrollHeight
                        }).then(e => {
                            this.canvas.nativeElement.src = e.toDataURL();
                            const a = new nt.ZP("p", "mm", "a4"),
                                d = e.toDataURL("image/png"),
                                u = a.getImageProperties(d),
                                b = a.internal.pageSize.getWidth();
                            a.addImage(d, "PNG", 0, 0, b, u.height * b / u.width, "someAlias", "FAST"), a.save("details.pdf")
                        }), this.capture.nativeElement.style.overflow = "hidden", this.capture.nativeElement.style.overflow = "auto", this.spinner.hide()
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(s.WI), t.Y36(s.so), t.Y36(l.K0), t.Y36(ot.V))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-payment-detail-preview"]
                        ],
                        viewQuery: function(o, e) {
                            if (1 & o && (t.Gf(Lt, 5), t.Gf(Yt, 5), t.Gf(Ft, 5)), 2 & o) {
                                let a;
                                t.iGM(a = t.CRH()) && (e.capture = a.first), t.iGM(a = t.CRH()) && (e.canvas = a.first), t.iGM(a = t.CRH()) && (e.downloadLink = a.first)
                            }
                        },
                        decls: 126,
                        vars: 18,
                        consts: [
                            [1, "dialog-overlay", "filterBox"],
                            ["id", "print-section", 1, "dialog", "filter-dlogs"],
                            ["capture", ""],
                            [1, "row"],
                            [1, "flex", "headTop", "border-bot", "small-padding"],
                            [1, "no-margin"],
                            ["data-html2canvas-ignore", "true", 1, "atag_btn"],
                            ["src", "assets/images/cancel-maroon-Border.svg", "alt", "", "aria-hidden", "false", "aria-label", "Example close icon", "fontIcon", "close", 2, "cursor", "pointer", "width", "20px", 3, "click"],
                            ["class", "row p-2", 4, "ngIf"],
                            [1, "content-header", "items"],
                            [1, "prime"],
                            [1, "row", "p-4"],
                            [1, "col"],
                            [1, "row", "p-4", "pt-0"],
                            [1, "small-font"],
                            [1, "small-padding"],
                            [1, "bold"],
                            [4, "ngIf"],
                            [1, "filter-footer", 2, "text-align", "center"],
                            ["data-html2canvas-ignore", "true", 1, "btn", "btn-primary", 3, "click"],
                            ["id", "download"],
                            ["canvas", ""],
                            ["downloadLink", ""],
                            [1, "row", "p-2"],
                            [1, "subdet"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.TgZ(0, "div")(1, "div", 0)(2, "div", 1, 2)(4, "div", 3)(5, "div", 4)(6, "h3", 5), t._uU(7, "Application Status"), t.qZA(), t.TgZ(8, "a", 6)(9, "img", 7), t.NdJ("click", function() {
                                return e.closeDialog()
                            }), t.qZA()()()(), t.YNc(10, $t, 21, 4, "div", 8), t.TgZ(11, "div", 3)(12, "div", 9)(13, "h3", 10), t._uU(14, "Content Verification Status"), t.qZA()(), t.TgZ(15, "div", 11)(16, "div", 12)(17, "p")(18, "b"), t._uU(19, "Name"), t.qZA()(), t.TgZ(20, "p"), t._uU(21), t.qZA()(), t.TgZ(22, "div", 12)(23, "p")(24, "b"), t._uU(25, "Registration Number"), t.qZA()(), t.TgZ(26, "p"), t._uU(27), t.qZA()(), t.TgZ(28, "div", 12)(29, "p")(30, "b"), t._uU(31, "Number Of Attempts"), t.qZA()(), t.TgZ(32, "p"), t._uU(33), t.qZA()()(), t.TgZ(34, "div", 13)(35, "div", 12)(36, "p")(37, "b"), t._uU(38, "Registration Status"), t.qZA()(), t.TgZ(39, "p"), t._uU(40, "Completed (Contents not Verified)"), t.qZA()(), t.TgZ(41, "div", 12)(42, "p")(43, "b"), t._uU(44, "Application Status"), t.qZA()(), t.TgZ(45, "p"), t._uU(46), t.qZA()(), t.TgZ(47, "div", 12)(48, "p")(49, "b"), t._uU(50, "Photo & Signature Upload"), t.qZA()(), t.TgZ(51, "p"), t._uU(52), t.qZA()()()(), t.TgZ(53, "div", 3)(54, "div", 9)(55, "h3", 10), t._uU(56, "Payment Details "), t.TgZ(57, "span", 14), t._uU(58, "(Application Form)"), t.qZA()()(), t._UZ(59, "div", 15), t.TgZ(60, "p", 14)(61, "span", 16), t._uU(62, "Note :"), t.qZA(), t.TgZ(63, "span"), t._uU(64, " If your fee is deducted, please wait for 48 hours and check again"), t.qZA()(), t.TgZ(65, "div", 11)(66, "div", 12)(67, "p")(68, "b"), t._uU(69, "Exam Name"), t.qZA()(), t.TgZ(70, "p"), t._uU(71), t.qZA()(), t.TgZ(72, "div", 12)(73, "p")(74, "b"), t._uU(75, "Exam Year"), t.qZA()(), t.TgZ(76, "p"), t._uU(77), t.qZA()(), t.TgZ(78, "div", 12)(79, "p")(80, "b"), t._uU(81, "Amount"), t.qZA()(), t.TgZ(82, "p"), t._uU(83), t.qZA()(), t.TgZ(84, "div", 12)(85, "p")(86, "b"), t._uU(87, "Is Exempted"), t.qZA()(), t.YNc(88, Jt, 2, 1, "p", 17), t.YNc(89, jt, 2, 0, "p", 17), t.qZA()(), t.TgZ(90, "div", 13)(91, "div", 12)(92, "p")(93, "b"), t._uU(94, "Payment Status"), t.qZA()(), t.YNc(95, Qt, 2, 1, "p", 17), t.YNc(96, Rt, 2, 0, "p", 17), t.YNc(97, Ht, 2, 1, "p", 17), t.YNc(98, Kt, 2, 1, "p", 17), t.qZA(), t.TgZ(99, "div", 12)(100, "p")(101, "b"), t._uU(102, "Transaction Number"), t.qZA()(), t.TgZ(103, "p"), t._uU(104), t.qZA()(), t.TgZ(105, "div", 12)(106, "p")(107, "b"), t._uU(108, "Transaction Date"), t.qZA()(), t.TgZ(109, "p"), t._uU(110), t.qZA()(), t.TgZ(111, "div", 12)(112, "p")(113, "b"), t._uU(114, "Reference Number"), t.qZA()(), t.TgZ(115, "p"), t._uU(116), t.qZA()()(), t._UZ(117, "div", 13), t.qZA(), t.TgZ(118, "div", 18)(119, "button", 19), t.NdJ("click", function() {
                                return e.exportAsPDF("print-section")
                            }), t._uU(120, "Print"), t.qZA()()()()(), t.TgZ(121, "div", 20), t._UZ(122, "img", null, 21)(124, "a", null, 22), t.qZA()), 2 & o && (t.xp6(10), t.Q6J("ngIf", null == e.appData ? null : e.appData.postCode), t.xp6(11), t.Oqu(null == e.appData ? null : e.appData.name), t.xp6(6), t.Oqu(null == e.appData ? null : e.appData.registrationNo), t.xp6(6), t.Oqu(null == e.appData ? null : e.appData.numberOfAttempts), t.xp6(13), t.Oqu(null == e.appData ? null : e.appData.applicationStatus), t.xp6(6), t.Oqu(e.strPhotoSign), t.xp6(19), t.Oqu(null == e.appData ? null : e.appData.examName), t.xp6(6), t.Oqu(null == e.appData ? null : e.appData.examYear), t.xp6(6), t.Oqu(null == e.appData ? null : e.appData.examFee), t.xp6(5), t.Q6J("ngIf", 1 == (null == e.appData ? null : e.appData.numberOfAttempts)), t.xp6(1), t.Q6J("ngIf", (null == e.appData ? null : e.appData.numberOfAttempts) > 1), t.xp6(6), t.Q6J("ngIf", 1 == (null == e.appData ? null : e.appData.numberOfAttempts) && !(null != e.appData && null != e.appData.myApplicationData && e.appData.myApplicationData.isExempted)), t.xp6(1), t.Q6J("ngIf", 1 == (null == e.appData ? null : e.appData.numberOfAttempts) && (null == e.appData || null == e.appData.myApplicationData ? null : e.appData.myApplicationData.isExempted)), t.xp6(1), t.Q6J("ngIf", 2 == (null == e.appData ? null : e.appData.numberOfAttempts)), t.xp6(1), t.Q6J("ngIf", 3 == (null == e.appData ? null : e.appData.numberOfAttempts)), t.xp6(6), t.Oqu(null != e.appData && e.appData.transactionDetails ? null == e.appData || null == e.appData.transactionDetails ? null : e.appData.transactionDetails.transactionNo : "-"), t.xp6(6), t.Oqu(null != e.appData && e.appData.transactionDetails ? null == e.appData || null == e.appData.transactionDetails ? null : e.appData.transactionDetails.transactionDate : "-"), t.xp6(6), t.Oqu(null != e.appData && e.appData.transactionDetails ? null == e.appData || null == e.appData.transactionDetails ? null : e.appData.transactionDetails.sbiReferenceNo : "-"))
                        },
                        dependencies: [l.O5],
                        styles: ['@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Black.32e88a6d72728d09.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-BlackItalic.5a6d846a5f529172.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Bold.c80659c569fd7544.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-BoldItalic.34238e2263b40a9c.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraBold.80d1ae589c6b001b.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraBoldItalic.0bece5755dd78993.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraLight.991f9a1903723691.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraLightItalic.61fe06a310084b11.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Italic.dccfd84c97d4f67b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Light.2c87b5c3768c0eac.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-LightItalic.44f06927efa59759.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Medium.d56f4d956f451601.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-MediumItalic.3a9ffc7d71903586.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Regular.9d8660e99a9a3c6d.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-SemiBold.932a58e6105c7e74.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-SemiBoldItalic.557c31ee638149b0.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Black.716e7088351a2919.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-BlackItalic.aa5764c125179e8d.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Bold.6e55b815d019e3e1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-BoldItalic.06eb77e71db9ddb7.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraBold.43e0093fa5e2e95c.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraBoldItalic.fd60b3cd5fcb25f1.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraLight.e9faf35fe54b0c89.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraLightItalic.ecf44b9e9384cf05.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Italic.8742e298eab3357b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Light.d738ade7d59cb798.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-LightItalic.5ee4368275e7c52f.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Medium.3178109888cdb5e9.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-MediumItalic.2da13f4da7500cad.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Regular.9bdcc5e716fb8ece.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-SemiBold.4965cc43b18be4bf.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-SemiBoldItalic.4bbb192cceaf4274.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Black.c17f9ad76553d0ab.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-BlackItalic.75aa0f4a664972f0.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Bold.ca7c27ffb6d02c01.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-BoldItalic.039aeb8d60c5d70f.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraBold.c272c8fce32fdc37.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraBoldItalic.5580762f4286f20d.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraLight.c3fec2f9c5374107.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraLightItalic.007aa6630e457c0c.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Italic.da3999deabee6526.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Light.29ca48c8f4c0324e.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-LightItalic.f2f6e463302b0040.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Medium.598be77941e2e9e1.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-MediumItalic.817bdf1e0851e558.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Regular.04729c35cbed58bb.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-SemiBold.9176b5e088911fbf.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-SemiBoldItalic.e22fa45e671a78b7.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Black.19827a84bb9a5a43.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-BlackItalic.1d17e9fbe9e2b17c.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Bold.ea2662d6f9224ba6.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-BoldItalic.91fa39e9d1ccc261.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraBold.abf52b3050da4465.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraBoldItalic.539ac5c0760f284b.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraLight.e35bef6a04f81819.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraLightItalic.f1e3f192b040a372.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Italic.cc28cb26c10752b5.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Light.81aafd56361d6615.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-LightItalic.62df2fef320920a0.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Medium.6b2fc9a275787054.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-MediumItalic.3950c555daa23424.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Regular.483dcf5898b16649.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-SemiBold.5f45c3cb83fec8f7.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-SemiBoldItalic.a4e8813b58320025.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Black.6e40217edffbfffe.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-BlackItalic.a9719b1dd6745d76.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Bold.c0ee083586d63ea1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-BoldItalic.35ffd59cc0134784.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraBold.e12c7d83a8f6ff1e.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraBoldItalic.df6dfe9dbbce9c3a.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraLight.b45d4bea4ec24b79.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraLightItalic.f2087fbc8dac21dd.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Italic.0f56becd32d1b1ee.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Light.ec84380ee7b28ee8.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-LightItalic.f338ab33156e2b09.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Medium.67a8ee21520203b0.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-MediumItalic.78f3639eb2732e1f.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Regular.c66c0fb37990205c.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-SemiBold.498aa3656e82a9cd.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-SemiBoldItalic.bc8bbc59ad4bf053.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Black.6689094048cab74c.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-BlackItalic.b5ea81a13a4cabc8.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Bold.c99e33a0005aef86.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-BoldItalic.d92ddac9e0553e89.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraBold.86c4d9cd4e61fe6b.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraBoldItalic.ec7caf538e276c45.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraLight.a8e2d559686f3945.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraLightItalic.e249ba05ee457326.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Italic.a3baa5685a86ef25.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Light.273eed85bd232843.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-LightItalic.d97de468b69f6feb.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Medium.6c4e9a87ca5bee88.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-MediumItalic.6f4c9bb25753bcfb.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Regular.c8ed843dc06f9a74.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-SemiBold.09a06bb03a0736ad.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-SemiBoldItalic.c77bcca61c764899.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Black.a3a31db84a67e5f4.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-BlackItalic.85bd0db1f44c1979.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Bold.451f143962dbd79c.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-BoldItalic.81f883819f893f71.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraBold.a4ca9e96c373477a.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraBoldItalic.9a05eef49d97e3cd.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraLight.f639712d038c25e6.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraLightItalic.abab100e0c8e3dbb.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Italic.4c279d7b4812adb2.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Light.694b18d053a61b3c.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-LightItalic.e7a532f40e3e0a1d.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Medium.be38702af791ab1e.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-MediumItalic.30b69460f2ca2ec1.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Regular.185343ab5e247902.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-SemiBold.aef47429f3e569f1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-SemiBoldItalic.282b3e4b04d5c90b.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Black.4f54208fec1b0ecc.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-BlackItalic.778ebc7e4777112a.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Bold.7560457a41cdaee6.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-BoldItalic.ba2d78df9fd90b9f.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraBold.2a8a829d0ed8d7c1.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraBoldItalic.c03be6e0129a0049.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraLight.b14232a5f0c09d73.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraLightItalic.49a213cb813f4816.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Italic.61087e7b5279b0e5.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Light.43bfcdca43853bc3.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-LightItalic.45f1246d694c65b7.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Medium.1d66781f0780cfcb.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-MediumItalic.85ac92a412ea45d6.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Regular.25bc22f4ceeb24bd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-SemiBold.b67dfcebcb19af56.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-SemiBoldItalic.bc9c2ad43ab67e18.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Black.e3376d9bc70b6cf6.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-BlackItalic.416f57ccd9d0bfdb.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Bold.cd28dd6054dec4a2.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-BoldItalic.afb98b0ad1e92a55.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraBold.938b58959a6cfaa5.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraBoldItalic.a46e95a5c6181322.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraLight.1b23a57d204faf2a.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraLightItalic.1c2e4709f56961ff.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Italic.3069a7f3e057104b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Light.f800f8f3a817e4ad.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-LightItalic.92edc0ea6981efed.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Medium.a2faa7013f2427db.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-MediumItalic.835911035f6b998a.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Regular.4c280bf4e67de147.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-SemiBold.908436a4662ff287.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-SemiBoldItalic.1a659fb319ec2376.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Black.042dad3077a5c44b.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-BlackItalic.ce9478d32085ef99.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Bold.f322e19764d32714.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-BoldItalic.1abd82142a78a09e.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraBold.6075703b315737a6.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraBoldItalic.966ffc258b58944f.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraLight.3aa0edf9509104ca.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraLightItalic.1df3330bbbdbf0c8.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Italic.69bd3a1a95631d2d.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Light.ca38e6f63246ee12.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-LightItalic.c03778cebf7967e5.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Medium.53c2141d06fbc81d.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-MediumItalic.b43583702491ad44.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Regular.2ce32c88f66f838c.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-SemiBold.74dc433ca146c12f.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-SemiBoldItalic.2166047c045be3c7.ttf) format("truetype");font-weight:700;font-style:italic}[_ngcontent-%COMP%]:root{--font-family: "NunitoSans";--bg-color: #fff;--small-font: 12px;--main-heading-font: 24px;--heading-color: #313134;--maroon-color: #8e433e;--selected-color: #8e433e;--primary-color: #731d1d;--secondary-color: #fff3e1;--input-border-color: #ebebeb;--black-color: #000;--normal-weight: 600;--bold-font: 700;--border-radius: 8px;--full-width: 100%;--font-weight-700: 700;--font-weight-800: 800;--font-weight-600: 600;--font-weight-400: 400;--font-size-12: 11px;--font-size-12: 12px;--font-size-14: 14px;--font-size-15: 15px;--font-size-16: 16px;--font-size-17: 17px;--font-size-18: 18px;--font-size-19: 19px;--font-size-20: 20px;--mb-32: 32px;--button-disable: #ccc;--fonts-subtext: #434343;--global-border: #ebebeb;--global-white: #fdfdfd;--header-default: #8e433e;--global-frame-background: linear-gradient( 270deg, #f7eeed 0%, #f9f1f1 25%, #fcf8f8 68.75%, rgba(249, 241, 241, 0) 95.31% ), #fff;--fonts-body: #606060;--fonts-primary: #1e1e1e;--primary-color: #8e433e;--button-icon-background: #f9f1f1;--fonts-title: #252525}*[_ngcontent-%COMP%]{letter-spacing:-.6px!important}body[_ngcontent-%COMP%]{height:100%;font-family:var(--font-family)!important;background:var(--global-frame-background)!important;.hight-t {color: var(--maroon-color) !important;}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;font-size:14px}body[_ngcontent-%COMP%]{background:#fdfcfb;font-family:var(--font-family)!important}h1[_ngcontent-%COMP%]{font-size:36px!important;font-weight:700!important;margin-top:0}h2[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700!important;margin-top:0}.no-margin[_ngcontent-%COMP%]{margin:0}.marginss[_ngcontent-%COMP%]{margin:10px 0}h3[_ngcontent-%COMP%]{font-size:24px!important;font-weight:700!important;margin-top:0}h4[_ngcontent-%COMP%]{font-size:18px!important;font-weight:700!important;margin-top:0}a[_ngcontent-%COMP%]{cursor:pointer}.mb-32[_ngcontent-%COMP%]{margin-bottom:var(--mb-32)}.mt40[_ngcontent-%COMP%]{margin-top:40px!important}.mb40[_ngcontent-%COMP%]{margin-bottom:40px!important}.mb20[_ngcontent-%COMP%]{margin-bottom:20px!important}.mt20[_ngcontent-%COMP%]{margin-top:20px;.mdc-data-table__header-cell {font-family: var(--font-family) !important;}}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{&::placeholder{color:#606060!important;font-size:14px!important}}.m40[_ngcontent-%COMP%]{margin:40px}*[_ngcontent-%COMP%]{outline:none}*[_ngcontent-%COMP%]:focus{outline:none}.mat-expansion-panel[_ngcontent-%COMP%], .mat-expansion-panel-header[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%], .mdc-list-item__primary-text[_ngcontent-%COMP%]{font-family:var(--font-family)!important}body[_ngcontent-%COMP%]{margin:0;font-family:var(--font-family)!important;background:#fffbfb!important}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 15px!important;margin:0}span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:var(--font-size-14)!important}.btn-default[_ngcontent-%COMP%]{background:transparent!important;border-radius:56px!important;border:1px solid var(--selected-color)!important;color:var(--primary-color);padding:12px 30px;height:auto;line-height:100%;font-weight:800;font-size:16px;color:var(--selected-color)}select[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;color:#606060}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{&::placeholder{color:#606060!important;font-size:16px!important}}h3[_ngcontent-%COMP%]{font-family:var(--font-family);font-style:normal;font-weight:var(--bold-font);font-size:var(--main-heading-font)!important;line-height:20px;color:#000}.heading-maroon[_ngcontent-%COMP%]{color:#1e1e1e!important;text-transform:capitalize;text-align:center}.multiselect-dropdown[_ngcontent-%COMP%]{.dropdown-btn {border: none !important;}}.card-block[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #d6d6d6;background:var(--global-white, #fdfdfd);padding:40px;overflow:hidden}.list-margin[_ngcontent-%COMP%]{margin-bottom:20px}.cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.icons-w[_ngcontent-%COMP%]{width:100%;height:30px}.fs-big[_ngcontent-%COMP%]{font-size:var(--font-size-20)!important}//[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap}.form-text-alert[_ngcontent-%COMP%]{margin-top:5px}.form-fields[_ngcontent-%COMP%]{margin:6px 6px 20px;flex:0 1 calc(33% - 5px);display:flex;flex-direction:column;.labels {font-weight: var(--bold-font); font-size: var(--font-size-16) !important; line-height: 19px; color: var(--heading-color); text-align: left;} .select {background: var(--bg-color); border: 1.5px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; option {font-size: var(--font-size-14);}} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat;} &:nth-child(1) {margin-left: 0px !important;} &:nth-child(3) {margin-right: 0px !important;}}.input-form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px;.labels {font-weight: var(--bold-font); font-size: var(--font-size-14) !important; line-height: 19px; color: var(--heading-color); width: var(--full-width); text-align: left; white-space: nowrap;} .select {background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px !important; padding: 9px; box-shadow: none; font-size: var(--font-size-16);} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat; cursor: pointer;} .wo-input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; box-shadow: none; color: var(--fonts-primary, #1e1e1e); &::placeholder {color: #606060 !important; font-size: 12px !important;}} .input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; font-weight: normal;} textarea {border: 1px solid #ebebeb; font-size: var(--font-size-16); outline: none; box-shadow: none !important; padding: 10px; background: #fdfdfd;} .textareaSpan {position: absolute; font-size: 12px !important; color: #606060; right: 20px; bottom: 10px;}}.mat-expansion-panel[_ngcontent-%COMP%]{overflow:visible!important;font-family:var(--font-family)!important;.mat-expansion-indicator {margin-top: -6px !important; display: none !important; &::after {padding: 2px !important;}} .mat-expansion-panel-header {.mat-content {&:hover {img {background: #fff !important; padding: 8px; border-radius: 8px; cursor: pointer;} .afterHover {display: block;} .beforeHover {display: none;}} .afterHover {display: none; padding: 8px; border-radius: 8px; height: 40px;} .beforeHover {padding: 8px; border-radius: 8px; height: 40px;}}} .mat-content {align-items: center !important; justify-content: center; padding: 0; display: flex; flex-direction: column; .tooltiptext {visibility: hidden; width: 120px; background-color: #606060 !important; color: #fff !important; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; top: 0; left: 75px;} .tooltiptext {&::after {content: ""; position: absolute; top: 36%; left: -3%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent #606060 transparent transparent;}} &:hover {.tooltiptext {visibility: visible;}}} .mat-expansion-panel-body {padding: 0 15px !important; position: absolute; left: 46px; z-index: 1111; top: 0;} mat-nav-list {padding: 0 !important;} .aligned-with-icon {white-space: pre-wrap; line-height: initial; margin-top: 3px !important;}}.upload-section[_ngcontent-%COMP%]{position:relative;padding:25px;height:auto;text-align:center;background:#f8f8f8;border:1px dashed #e6e6e6;border-radius:8px;display:flex;flex-direction:column;img {width: 40px; height: 40px;} label {font-size: 12px !important; color: #606060; font-weight: normal; span {font-size: 12px !important;}} .visiblle {z-index: 1; position: absolute; opacity: 0; width: 100%; text-align: center; left: 0; height: 86px; top: 0;} small {word-break: break-all;}}.mt10[_ngcontent-%COMP%]{margin-top:10px}a[_ngcontent-%COMP%]{text-decoration:none}.form-control[_ngcontent-%COMP%]{display:flex;height:40px!important;padding:12px 16px!important;align-items:center;gap:6px;align-self:stretch;border-radius:2px;border:1px solid #d1d1d1;background:#fff;color:#1e1e1e;font-size:var(--font-size-14);font-style:normal;font-weight:400;line-height:22px;font-size:14px!important;border-radius:8px!important;&::placeholder{color:#606060!important;font-size:12px!important}}.remarks[_ngcontent-%COMP%]{height:80px!important}.form-label[_ngcontent-%COMP%]{font-size:var(--font-size-14);color:var(--font-color-black);font-weight:var(--font-weight-700);margin-bottom:5px}.globalContent[_ngcontent-%COMP%]{font-size:16px;color:#434343;font-weight:400;line-height:22.4px}.headings[_ngcontent-%COMP%]{font-size:var(--main-heading-font);font-weight:var(--font-weight-700)}.context-text[_ngcontent-%COMP%]{font-size:var(--font-size-14);margin:0;color:#434343}.heading-border[_ngcontent-%COMP%]{font-size:var(--main-heading-font);font-weight:var(--font-weight-700);line-height:44px;border-bottom:1px solid #e6e6e6;padding:0!important}.sub-heading[_ngcontent-%COMP%]{font-size:var(--font-size-16);font-weight:var(--font-weight-700)}.border-bot[_ngcontent-%COMP%]{border-bottom:1px solid var(--global-border)}.card[_ngcontent-%COMP%]{border-radius:16px;border:1px solid var(--global-border);background:#fff}.error-msg[_ngcontent-%COMP%]{color:red;font-size:12px}.save-btn[_ngcontent-%COMP%]{margin:10px 0 0}.mv20[_ngcontent-%COMP%]{margin:20px 0}.btn[_ngcontent-%COMP%]{background:var(--maroon-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;&:focus{color:#fff}&:hover{background:var(--maroon-color);color:#fff}}.save-btn[_ngcontent-%COMP%]{margin:10px;background:var(--maroon-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:10px 25px;line-height:100%;border:none}.gaps[_ngcontent-%COMP%]{margin:10px 15px 0 30px;width:calc(100% - 30px)}.form-text-alert[_ngcontent-%COMP%]{color:var(--states-error, #d91919);font-family:var(--font-family);line-height:140%}.save-btn[_ngcontent-%COMP%]:hover{background:var(--maroon-color);color:#fff}.cancel-btn[_ngcontent-%COMP%]{margin:10px;border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;background:var(--bg-color);color:var(--primary-color);padding:13px 34px;line-height:100%;border:none}.cancel-btn[_ngcontent-%COMP%]:hover{border:none;background-color:transparent;color:var(--primary-color)}.resetBtn[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:700;border:none!important;background:transparent;color:var(--maroon-color)!important;outline:none;&:hover{background:transparent;color:var(--maroon-color)}}.textarea[_ngcontent-%COMP%]{background:var(--bg-color);border:1.5px solid var(--input-border-color);border-radius:var(--border-radius);width:var(--full-width);height:40px;option {font-size: var(--font-size-14);} .navbar {border-radius: 0px !important;} .cdk-global-overlay-wrapper {z-index: 1112 !important;} .cdk-overlay-container {z-index: 1112 !important;} .required:after {content: " * "; color: red; margin-left: 5px;} @media (max-width: 767px) {.mat-expansion-indicator {&:after {color: var(--maroon-color) !important; padding: 2px !important;}} h3 {font-size: 20px !important;}} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat;} &:nth-child(1) {margin-left: 0px !important;} &:nth-child(3) {margin-right: 0px !important;}}.input-form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px;.labels {font-weight: var(--bold-font); font-size: var(--font-size-14) !important; line-height: 19px; color: var(--heading-color); width: var(--full-width); text-align: left; white-space: nowrap;} .select {background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px !important; padding: 9px; box-shadow: none; font-size: var(--font-size-16);} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat; cursor: pointer;} .wo-input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; box-shadow: none; color: var(--fonts-primary, #1e1e1e);} .input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; font-weight: normal;} textarea {border: 1px solid #ebebeb; font-size: var(--font-size-16); outline: none; box-shadow: none !important; padding: 10px; background: #fdfdfd;} .textareaSpan {position: absolute; font-size: 12px !important; color: #606060; right: 20px; bottom: 10px; color: var(--button-default, #8e433e); font-style: normal; font-weight: 700;}}.flb-33[_ngcontent-%COMP%]{flex-basis:33%}.mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__row[_ngcontent-%COMP%]{border-bottom:1px solid var(--global-border, #ebebeb);background:var(--global-white, #fdfdfd)}table[_ngcontent-%COMP%]{width:100%}.table-view[_ngcontent-%COMP%]{background:transparent!important}.table-container[_ngcontent-%COMP%]{height:480px;overflow:auto;.court-table {th {z-index: 10 !important;} td {z-index: 10 !important;}}}.img-field[_ngcontent-%COMP%]{color:red;margin-left:5px}.mat-mdc-dialog-container[_ngcontent-%COMP%]{margin-top:30px}.mat-expansion-panel[_ngcontent-%COMP%]{overflow:visible!important;font-family:var(--font-family)!important;.mat-expansion-indicator {margin-top: -6px !important; display: none !important; &::after {padding: 2px !important;}} .mat-expansion-panel-header {.mat-content {&:hover {img {background: #fff !important; padding: 8px; border-radius: 8px; cursor: pointer;} .afterHover {display: block;} .beforeHover {display: none;}} .afterHover {display: none; padding: 8px; border-radius: 8px; width: 35px; height: auto;} .beforeHover {padding: 8px; border-radius: 8px; width: 35px; height: auto;}}} .mat-content {align-items: center !important; justify-content: center; padding: 0; display: flex; flex-direction: column; .tooltiptext {visibility: hidden; width: 120px; background-color: #606060 !important; color: #fff !important; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; top: 0; left: 75px;} .tooltiptext {&::after {content: ""; position: absolute; top: 36%; left: -3%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent #606060 transparent transparent;}} &:hover {.tooltiptext {visibility: visible;}}} .mat-expansion-panel-body {padding: 0 15px !important; position: absolute; left: 46px; z-index: 1111; top: 0;} mat-nav-list {padding: 0 !important;} .aligned-with-icon {white-space: pre-wrap; line-height: initial; margin-top: 3px !important;}}.mat-expanded[_ngcontent-%COMP%]{.mat-expansion-indicator {margin-top: 6px !important;}}.upload-section[_ngcontent-%COMP%]{position:relative;padding:25px;height:auto;text-align:center;background:#f8f8f8;border:1px dashed #e6e6e6;border-radius:8px;display:flex;flex-direction:column;img {width: 40px; height: 40px;} label {color: var(--button-default, #8e433e); font-size: 12px !important; font-style: normal; font-weight: 700; span {font-size: 12px !important;}} .visiblle {z-index: 1; position: absolute; opacity: 0; width: 100%; text-align: center; left: 0; height: 86px; top: 0;} small {word-break: break-all;}}.mt20[_ngcontent-%COMP%]{margin:20px 0 0}.mb20[_ngcontent-%COMP%]{margin:0 0 20px}.ml10[_ngcontent-%COMP%]{margin:0 0 0 20px}.mr10[_ngcontent-%COMP%]{margin-right:0 20px 0 0}.mb10[_ngcontent-%COMP%]{margin-bottom:10px}.mt10[_ngcontent-%COMP%]{margin:10px 0 0}.m20[_ngcontent-%COMP%]{margin:20px}.m0[_ngcontent-%COMP%]{margin:0!important}.p0[_ngcontent-%COMP%]{padding:0!important}.pb20[_ngcontent-%COMP%]{padding-bottom:20px}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row}.btn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;border:0;&:focus{color:#fff}&:hover{background:var(--selected-color);color:#fff}}.save-btns[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:10px 24px;line-height:100%;border:0;&:focus{color:#fff}&:hover{background:var(--selected-color);color:#fff}}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0!important}.content-text[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:#434343}.header[_ngcontent-%COMP%]{padding:5px 10px}.status-text[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#8e433e;margin:10px;text-align:center;display:flex;justify-content:center;background-color:transparent;border:none}.gap[_ngcontent-%COMP%]{padding:10px 0!important}.gap1[_ngcontent-%COMP%]{padding:30px 0 0!important}.pageContent[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:22.4px;color:#606060}.options[_ngcontent-%COMP%]{display:flex}.img-class[_ngcontent-%COMP%]{height:32px;width:32px;border-radius:50%;background-color:#f9f1f1;display:flex;justify-content:center;align-items:center;margin:0 2px}.list-padding[_ngcontent-%COMP%]{padding:0 26px!important}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px white inset!important}.section[_ngcontent-%COMP%]{border-radius:var(--border-radius);border:1px solid var(--global-border);display:flex;justify-content:space-between;padding:20px;background-color:var(--global-white);box-shadow:0 20px 40px #0000000d}.content[_ngcontent-%COMP%]{display:flex}.pdf-section[_ngcontent-%COMP%]{margin:0 0 7px 5px}.pdf-head[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1e1e1e;margin:0}.pdf-text[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:#0b48e4;margin:0}.rws[_ngcontent-%COMP%]{padding:20px 0 80px}.top-search[_ngcontent-%COMP%]{width:320px;background:#fff url(/assets/search-ico.svg) no-repeat right;background-size:22px;background-position:94% 13px;padding:12px 20px;font-size:var(--font-size-14);outline:0;border-radius:50px;border:1px solid var(--global-border, #ebebeb)}.normal-text[_ngcontent-%COMP%]{font-size:14px}.bold[_ngcontent-%COMP%]{font-weight:700!important}.small-font[_ngcontent-%COMP%]{font-size:12px!important}.card[_ngcontent-%COMP%]{border-radius:15px;padding:20px;position:relative;margin:0 0 20px}.admit-label[_ngcontent-%COMP%]{position:absolute;top:-10px;background-color:#fff;padding:0 8px;font-size:14px;color:#606060}.imgs[_ngcontent-%COMP%]{display:flex;align-items:center}.card-block[_ngcontent-%COMP%]{border-radius:20px 20px 0 0;.card-header {height: 110px; border-bottom: 1px solid var(--global-border); display: flex; justify-content: space-between; align-items: center;} .card-header-l {height: 160px !important;} .add-img {display: flex; justify-content: center; align-items: center;} .card-footer {padding: 0; background-color: transparent; border-top: 1px solid var(--global-border); margin-top: 20px;} .card-footers {padding: 0; background-color: transparent; border-top: 1px solid var(--global-border);}}.card-header[_ngcontent-%COMP%]{height:74px;background:rgba(240,221,219,1);display:flex;justify-content:space-between;align-items:center;padding:20px}th[_ngcontent-%COMP%]{font-size:14px;font-weight:400}td[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.pos-bedge[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;border-radius:6px}.card-body[_ngcontent-%COMP%]{padding:10px 20px}.border-cls[_ngcontent-%COMP%]{border:1px solid rgba(230,230,230,1)}.results[_ngcontent-%COMP%]{height:72px;border-radius:5px;display:flex;justify-content:space-between;align-items:center}.gb[_ngcontent-%COMP%]{background-color:#188906!important;margin:0 5px}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-block[_ngcontent-%COMP%]{padding:0;background-color:var(--global-white)}.space[_ngcontent-%COMP%]{display:flex;margin:20px 0}.blocks[_ngcontent-%COMP%]{width:49%;border-radius:20px;overflow:hidden}.border-cls[_ngcontent-%COMP%]:nth-child(even){margin-left:22px}.prime[_ngcontent-%COMP%]{color:var(--primary-color)}.text-col[_ngcontent-%COMP%]{color:#999}.app-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#434343}.note-title[_ngcontent-%COMP%]{font-size:18px;font-weight:800;color:#606060}.card-width[_ngcontent-%COMP%]{width:95%}.form-block[_ngcontent-%COMP%]{background-color:var(--global-white);border:1px solid var(--global-border);padding:30px!important;border-radius:20px}.edit-input[_ngcontent-%COMP%]{height:48px;background-color:var(--global-white);border:1px solid var(--global-border);border-radius:var(--border-radius);padding:3px}.gray-area[_ngcontent-%COMP%]{height:40px;background:rgba(241,241,241,1);border-radius:5px;padding:9px 20px}.edit-text[_ngcontent-%COMP%]{color:#606060;font-size:14px;font-weight:400}.gray-back[_ngcontent-%COMP%]{background:rgba(241,241,241,1)!important;border:none;.gray-area {height: 40px; background: rgba(241,241,241,1); border-radius: 5px; padding: 9px 20px;} .edit-text {color: rgba(96,96,96,1); font-size: 14px; font-weight: 400;}}.radio-cont[_ngcontent-%COMP%]{display:flex;gap:20px}.button-block[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center}.label-checkk[_ngcontent-%COMP%]{font-weight:400!important}.form-check-input[_ngcontent-%COMP%]{border:1px solid gray}.form-check-input[_ngcontent-%COMP%]:checked{background-color:var(--primary-color)!important;border-color:var(--primary-color)!important;outline:none!important;box-shadow:none!important}.dateBg[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important}.wo-input[_ngcontent-%COMP%]{font-size:var(--font-size-16);background:var(--bg-color);border:1px solid var(--input-border-color);border-radius:var(--border-radius);width:var(--full-width);height:40px;padding:10px!important;box-shadow:none;color:var(--fonts-primary, #1e1e1e)}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:grey;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:grey}.trans-back[_ngcontent-%COMP%]{font-weight:800;font-size:16px;color:var(--primary-color);margin:0 15px;background-color:transparent;border:0;cursor:pointer;outline:none}.dateBgg[_ngcontent-%COMP%]{background:url(eyeIcon.0b318ead5f9673fd.svg) no-repeat (99%,10px),linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important;height:10px}@media (min-width: 1400px){.container[_ngcontent-%COMP%]{min-width:100%!important;padding-left:80px!important;padding-right:80px!important}}@media (max-width: 1200px){.blocks[_ngcontent-%COMP%]{width:100%!important}.save-btn[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;align-items:center!important}.border-cls.blocks[_ngcontent-%COMP%]:nth-child(even){margin-left:0}}@media (max-width: 767px){.excellency-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.border-cls[_ngcontent-%COMP%]:nth-child(even){margin-left:0;margin-top:10px}.gaps[_ngcontent-%COMP%]{margin:10px 5px 0 10px;width:calc(100% - 10px)}}.fwdLetters[_ngcontent-%COMP%]{.ng-dropdown {.drop-list {top: 44px !important; width: 96% !important; padding: 13px 34px; line-height: 100%;}}}.save-btn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.cancel-btn[_ngcontent-%COMP%]{margin:10px;border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;background:var(--bg-color);color:var(--primary-color);border:none;padding:13px 34px;line-height:100%}.cancel-btn[_ngcontent-%COMP%]:hover{border:none;background:transparent;color:var(--primary-color)}.previewBtn[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:8px;align-items:center;border-radius:50px;border:1px solid #ebebeb;background:#fffdfa;font-size:12px;font-weight:400;line-height:24px;padding:0 8px;height:24px}.resetBtn[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:700;border:none!important;background:transparent;color:var(--selected-color)!important;outline:none;&:hover{background:transparent;color:var(--selected-color)}}.textarea[_ngcontent-%COMP%]{background:var(--bg-color);border:1.5px solid var(--input-border-color);border-radius:var(--border-radius);font-size:var(--font-size-14);resize:none;width:var(--full-width);height:35px;padding:5px 10px}.navbar[_ngcontent-%COMP%]{border-radius:0!important}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{z-index:1112!important}.required[_ngcontent-%COMP%]:after{content:"*";color:red;margin-left:5px}@media (max-width: 767px){.with-nav[_ngcontent-%COMP%]{top:85px!important}.save-btn[_ngcontent-%COMP%]{padding:10px;font-size:12px}.mat-expansion-indicator[_ngcontent-%COMP%]{&:after{color:var(--selected-color)!important;padding:2px!important}}}h3[_ngcontent-%COMP%]{font-size:20px!important}.mdc-dialog__container[_ngcontent-%COMP%]{height:calc(100vh - 80px)!important}.breadcrumb[_ngcontent-%COMP%]{li {a {color: #1e1e1e !important; font-size: 14px; text-decoration: none; font-weight: 400;} a.active {color: #1e1e1e !important; font-weight: 700;}}}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:var(--bs-breadcrumb-divider, ">")!important;font-size:18px;margin-top:-3px;color:#1e1e1e!important}.active[_ngcontent-%COMP%]{color:var(--fonts-primary)!important;font-weight:var(--font-weight-600)!important}.formWidth[_ngcontent-%COMP%]{width:80%!important;margin:auto}.upload_icon[_ngcontent-%COMP%]{img {width: 15px; height: auto;}}.imgSection[_ngcontent-%COMP%]{border:1px solid #e6e6e6;padding:20px;display:flex;flex-direction:column;margin-top:10px;border-radius:20px;small {font-size: 16px; vertical-align: middle;} .attchmentIcon {border-radius: 3.484px; border: .871px solid #dfdfdf; padding: 10px 0px; margin-right: 25px; height: 48px; width: 48px; background-color: var(--bg-color);} .imgSectionInner {padding: 10px 20px; border-bottom: 1px solid #ebebeb; justify-content: space-between; display: flex; &:last-child {border: none !important;}} .wb {background-color: #f1f1f1;} .imgSectionInner:last-of-type {border: none !important;}}.btn-check[_ngcontent-%COMP%]:checked + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check) + .btn[_ngcontent-%COMP%]:active{background:var(--primary-color)!important;color:#fff;outline:none;border-color:var(--primary-color)!important;box-shadow:none}.demo-table[_ngcontent-%COMP%]{border:1px solid #e6e6e6!important;box-shadow:none;border-collapse:inherit;overflow:visible;border-radius:20px;th {background-color: #f0dddb !important; color: #252525 !important; padding: 16px 20px !important; font-weight: 600;} td {background-color: #fff; padding: 16px 20px !important;} tr:first-child {th:first-child {border-radius: 20px 0 0 0;} th:last-child {border-radius: 0 20px 0 0;}} tr:last-child {td:first-child {border-radius: 0 0 0 20px;} td:last-child {border-radius: 0 0 20px 0;}}}.with-nav[_ngcontent-%COMP%]{top:160px!important}.without-nav[_ngcontent-%COMP%]{top:110px!important}.document-container[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:20px;border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:1px;padding:20px;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:100%;position:relative;overflow:hidden}.document-card[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:0px 0px 1px 0px;padding:12px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-shrink:0;width:100%;position:relative}.document-details[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;align-items:center;justify-content:flex-start;flex-shrink:0;position:relative}.document-image-container[_ngcontent-%COMP%]{flex-shrink:0;width:47.03px;height:48px;position:static}.document-image-placeholder[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:3.48px;border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:.87px;width:47.03px;height:48px;left:0;top:0;display:flex;justify-content:center;align-items:center}.document-image[_ngcontent-%COMP%]{width:22px;height:22px}.doc-icos[_ngcontent-%COMP%]{width:100%!important}.document-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;position:relative}.document-title[_ngcontent-%COMP%]{color:var(--fonts-subtext, #434343);text-align:left;font-size:14px;font-weight:600;position:relative}.document-title-fad[_ngcontent-%COMP%]{color:#8d8686!important}.document-size[_ngcontent-%COMP%]{color:#999;text-align:left;font:var(--caption-regular, 400 12px/140% "Nunito Sans", sans-serif);position:relative}.document-icon[_ngcontent-%COMP%]{flex-shrink:0;position:relative;overflow:visible;cursor:pointer}.msg-erro[_ngcontent-%COMP%]{display:block;margin:10px 0;.mgs {color: red; font-size: 12px;}}.desg-crd[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--global-border, #e6e6e6);background:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:14px;.desig-head {padding-bottom: 10px; border-bottom: 1px solid #e6e6e6; .cret-by {color: var(--fonts-title, #252525); font-size: var(--font-size-14); font-style: normal; font-weight: 700; line-height: 140%;}} .prs-blk {display: flex; justify-content: space-between; flex-direction: row; align-items: center; padding-top: 10px; .nm {color: var(--fonts-primary, #1e1e1e); font-size: var(--font-size-14); font-style: normal; font-weight: 700; line-height: 140%;} .bgj {display: flex; justify-content: center; align-items: center; padding: 5px; border-radius: 2rem; background: #fff8ed; color: var(--button-default, #8e433e); font-size: var(--font-size-14); font-style: normal; font-weight: 600; line-height: 140%;}}}.filter-footer[_ngcontent-%COMP%]{text-align:center;border-top:1px solid #8080802e;display:flex;justify-content:flex-end;align-items:center;padding:10px 0 0}.filter-dlogs[_ngcontent-%COMP%]{padding:30px 24px 10px!important}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:10px!important;height:10px!important;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:"";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:36%!important;left:2px!important;width:7px!important;height:3px!important;margin-top:-4px!important;border-style:solid;border-color:#fff;border-width:0 0 1.5px 1.5px!important;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #e6e6e6!important;color:#1e1e1e!important;box-shadow:none!important;padding:5px!important;line-height:100%!important;background:linear-gradient(to right,#fff calc(100% - 22px),#f9f1f1 22px)!important;a {color: #000 !important; border: 1px solid #000 !important; border-radius: 50% !important; font-size: 8px !important; padding: 0px 3px 1px 3px !important; vertical-align: middle !important; margin-left: 5px !important;}}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked+div:before{background:var(--selected-color)!important}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:before{border:1.5px solid var(--selected-color)!important;color:var(--selected-color)!important}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#f0dddb!important}.dia-header[_ngcontent-%COMP%]{color:#252525;font-size:16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(128,128,128,.39);padding:5px 0 15px;margin-bottom:15px;font-weight:700}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{min-height:36px!important;max-height:69px!important;overflow:auto;border:1px solid #e6e6e6!important;padding:5px 34px 5px 12px!important;background-position:97% 14px;background-repeat:no-repeat;.selected-item {span {font-size: 10px !important;}}}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{padding-left:25px!important}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{margin-top:2px!important}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{border-color:#731d1d transparent!important;display:none!important}.th-fnt[_ngcontent-%COMP%]{font-size:14px!important;font-weight:700!important}.multiselect-dropdown[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important}.woblock[_ngcontent-%COMP%]{display:flex;.havrem {position: relative; margin-top: -12px; &:hover .toltip-notify {visibility: visible;} .toltip-notify {background: #fff9f0; display: flex; justify-content: space-between; flex-direction: column; padding: 15px 20px; width: 200px; border-radius: 8px; position: absolute; top: -105px; left: -22px; visibility: hidden; .txt {color: var(--fonts-body, #606060); font-size: 14px; font-style: normal; font-weight: 600; line-height: 140%;} a.vwrem {color: var(--button-default, #8e433e); font-size: 15px; font-style: normal; font-weight: 700; line-height: 140%; text-decoration: none; margin-top: 10px; cursor: pointer;} &::after {content: ""; position: absolute; bottom: -10px; left: 15%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #fff9f0;}} img {cursor: pointer;}}}@media (max-width: 767px){.breadcrumb[_ngcontent-%COMP%]{li {a {color: #1e1e1e !important; font-size: 12px;}}}.with-nav[_ngcontent-%COMP%]{top:85px!important}.save-btn[_ngcontent-%COMP%]{padding:10px;font-size:12px}.card-width[_ngcontent-%COMP%]{width:95%!important}.form-block[_ngcontent-%COMP%]{padding:20px!important}}@media (max-width: 450px){.with-nav[_ngcontent-%COMP%]{top:79px!important}.form-label[_ngcontent-%COMP%], label[_ngcontent-%COMP%], .input-form-fields[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{font-size:11px!important}}//[_ngcontent-%COMP%]   filter[_ngcontent-%COMP%]   sections[_ngcontent-%COMP%]   css[_ngcontent-%COMP%]   .selected-filters-section[_ngcontent-%COMP%]{.filters {display: flex; flex-wrap: wrap; .value-block {display: flex; padding: 6px 12px; justify-content: space-between; align-items: center; border-radius: 20px; border: 1px solid #e6e6e6; background: #fffcf6; margin-right: 20px; margin-top: 10px; value-block:nth-child(1) {margin-left: 0px;} .value {font-size: 12px; color: #1e1e1e; font-style: normal; font-weight: 400;} .s-icons-close {font-size: 15px; color: var(--selected-color); width: unset; height: unset; margin-left: .5rem; cursor: pointer;}}}}@media (max-width: 450px){.with-nav[_ngcontent-%COMP%]{top:79px!important}}.court-table[_ngcontent-%COMP%]{width:var(--full-width);th {height: 48px; color: var(--fonts-body); font-size: var(--base-font); background-color: #f0dddb !important; font-size: 14px; font-weight: 700; color: #252525;} td {font-size: var(--base-font); color: #252525;}}.btn.reset[_ngcontent-%COMP%]{background:transparent;color:var(--maroon-color)}.tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;.tag {display: flex; justify-content: space-between; align-items: center; border-radius: 4px; border: 1px solid var(--global-border, #e6e6e6); background: var(--global-white, #fdfdfd); .val {color: var(--fonts-primary, #1e1e1e); font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;} .crss-btn {background: var(--button-icon-background, #f9f1f1); img {width: 14px;}}}}.mat-mdc-dialog-container[_ngcontent-%COMP%]{.mdc-dialog__surface {background-color: transparent !important; box-shadow: none !important; height: 140px; .blocks {width: 100% !important; margin: 10px 0px;} .space {margin: 0px !important;} .border-cls:nth-child(even) {margin-left: 0px !important;} .row-type {display: flex; justify-content: space-between;} .content-text {font-size: 14px;} .context-text {font-size: 12px;} .ss-gap {padding: 15px !important; position: relative;} .normal-text {font-size: 12px;} .trans-background {background-color: transparent;} .list-margin {margin-bottom: 20px !important;}}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:#00000078;.dialog {background-color: white; border: 1px solid var(--input-border-color); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 700px; width: 80%; max-height: calc(100vh - 20px); overflow: auto;}}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed}.edit-input[_ngcontent-%COMP%]{height:48px;background-color:var(--global-white);border:1px solid var(--global-border);border-radius:var(--border-radius);padding:4px;.gray-area {height: 40px; background: rgba(241,241,241,1); border-radius: 5px; padding: 9px 20px;} .edit-text {color: rgba(96,96,96,1); font-size: 14px; font-weight: 400; width: 100%; border: none; background: transparent; outline: none;}}//disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:   by[_ngcontent-%COMP%]   Vikin[_ngcontent-%COMP%]   .disabled-blk[_ngcontent-%COMP%]{margin-top:10px}.disabled-input[_ngcontent-%COMP%]{padding:2px;border-radius:8px;border:1px solid;border:1px solid var(--global-border, #e6e6e6);background:#fff;display:flex;justify-content:flex-start;align-items:center;height:40px;.value {padding: 5px 10px; border-radius: 5px; background: #f1f1f1; color: var(--fonts-primary, #1e1e1e); font-size: 16px; font-style: normal; font-weight: 400; line-height: 140%; width: 100%; display: flex; justify-content: space-between; .val {width: 100%;}} .dis_input {border: none; background: transparent; outline: none; width: 100%;}}.custom-dropdown-css-class[_ngcontent-%COMP%]{position:relative}.vacancy-table[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:20px;box-shadow:none;border-collapse:inherit;border:1px solid #e6e6e6!important;th,td {padding: 10px !important; border-bottom: 1px solid #0000001f;} tr:first-child th:first-child {border-radius: 20px 0 0 0;} tr:first-child th:last-child {border-radius: 0 20px 0 0;} tr:last-child td:first-child {border-radius: 0 0 0 20px;} tr:last-child td:last-child {border-radius: 0 0 20px;}}.activeTab[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;border-radius:4px 4px 0 0;background-color:#731d1d}.table-header[_ngcontent-%COMP%]{width:100%;height:60px;justify-content:space-between;align-items:flex-start;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom:1px solid var(--global-border, #e6e6e6);background:var(--button-menu-hover, #f0dddb)}.table-row[_ngcontent-%COMP%]{width:100%;height:auto;padding:20px 40px!important;justify-content:space-between;align-items:flex-start;flex-shrink:0;border-bottom:1px solid var(--global-border, #e6e6e6)}.table-header-cell[_ngcontent-%COMP%]{font-size:14px;background-color:#f0dddb!important;color:#252525!important;padding:16px!important;font-weight:600}.table-body[_ngcontent-%COMP%]{width:100%;height:auto}.table-data-row[_ngcontent-%COMP%]{width:100%;height:60px;background:var(--global-white, #fdfdfd)}.inner-table-row[_ngcontent-%COMP%]{width:100%;height:50px;background:var(--button-icon-background, #f9f1f1)}.table-data-cell[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:#00000078;transition:opacity 1s ease;.dialog {background-color: white; border: 1px solid var(--input-border-color); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 50%; width: 36%; max-height: calc(100vh - 20px); overflow: auto; position: relative;} ::-webkit-scrollbar {padding: 1px; background: #b6b6b6; width: 10px; margin-right: 10px;} ::-webkit-scrollbar-track {background: #b6b6b6; margin-right: 10px;} ::-webkit-scrollbar-thumb {background: #8e433e; margin-right: 10px; height: 40px;} .headTop {justify-content: space-between;} .flex {display: flex; justify-content: space-between; h2 {margin: 0; font-size: var(--font-size-18); font-weight: var(--font-weight-700);}} .flexSectn {padding: 20px 0;}}.confirm-ncc[_ngcontent-%COMP%]{.label {color: #c17571 !important;}}.p0[_ngcontent-%COMP%]{.disabled-blk {margin: 0 !important;}}.form-block[_ngcontent-%COMP%]{padding:15px!important;ol {margin: 0; padding-left: 15px; li {padding: 0;}}}.dropNew[_ngcontent-%COMP%]{.drop-list {top: 43px !important;}}.form-control.wo-input.dateBg[_ngcontent-%COMP%]{display:block!important}.webcam-modal[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;.webCamGuide {width: 100% !important; &::before {left: 53% !important; transform: translate(-53%,-50%) !important; background-position: center !important; top: 60% !important;}} .modal-body {padding: 0 !important; width: 100% !important;} .webcam-wrapper {width: 100%; height: 100%; video {width: 100%; height: 100%;} canvas {width: 100%; height: 100%;}}}.matDate.mat-mdc-form-field[_ngcontent-%COMP%]{width:100%!important;font-family:var(--font-family);&:hover{.mat-mdc-form-field-focus-overlay {background: transparent !important;}}.mat-mdc-form-field-focus-overlay {background: transparent !important;} .mdc-text-field--filled:not(.mdc-text-field--disabled) {border: 1px solid var(--global-border); border-radius: var(--border-radius);} .mat-mdc-form-field-infix {padding: 0 !important; min-height: 40px !important; max-height: 40px;} .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {top: 23px !important;} .mat-mdc-text-field-wrapper {background: linear-gradient(to right,#fff calc(100% - 46px),#f9f1f1 40px) !important; padding-left: 10px !important;} .mat-mdc-form-field-flex {max-height: 40px;} .mat-datepicker-input {margin-top: 7px; font-size: 14px !important; &::placeholder {font-size: 14px !important;}} .mdc-line-ripple {display: none;} .mat-mdc-icon-button.mat-mdc-button-base { --mat-mdc-button-persistent-ripple-color: none !important; } .mat-datepicker-toggle-active {color: rgba(0,0,0,.54);} .mat-mdc-icon-button svg,.mat-mdc-icon-button img {width: var(--mdc-icon-button-icon-size, 19px); height: var(--mdc-icon-button-icon-size, 19px);}}.mat-calendar-body-cell[_ngcontent-%COMP%]{&:hover{.mat-calendar-body-cell-content.mat-focus-indicator {background-color: #f9f1f1 !important; color: #000 !important;}}}.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f9f1f1!important;color:#000!important}.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background:#f9f1f1!important}.matDate[_ngcontent-%COMP%]{.mat-mdc-form-field-subscript-wrapper {display: none;}}.cdk-overlay-container[_ngcontent-%COMP%]{.cdk-overlay-connected-position-bounding-box {z-index: 1114;}}@media (max-width: 767px){.formBlk[_ngcontent-%COMP%]   .input-form-fields[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{white-space:normal}span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:var(--font-size-12)!important}.trans-back[_ngcontent-%COMP%], .edit-input[_ngcontent-%COMP%]   .edit-text[_ngcontent-%COMP%], .save-btns[_ngcontent-%COMP%]{font-size:var(--font-size-12)}.form-control[_ngcontent-%COMP%], .matDate.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-datepicker-input[_ngcontent-%COMP%], .disabled-input[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:var(--font-size-12)!important}}@media (max-width: 1200px){.mob-m0[_ngcontent-%COMP%]{.border-cls:nth-child(even) {margin-left: 0 !important;}}}@media (max-width: 600px){.rws.mob[_ngcontent-%COMP%]{padding:20px}.edit-input[_ngcontent-%COMP%]   .gray-area[_ngcontent-%COMP%]{padding:8px}.edit-input[_ngcontent-%COMP%]   .edit-text[_ngcontent-%COMP%]{font-size:var(--font-size-11)}}.dialog-image[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;.dialog-img {background-color: white; border: 1px solid #ebebeb; border-radius: 10px; padding: 20px 40px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 950px; height: calc(100vh - 100px); width: 90%;}}.attachModal[_ngcontent-%COMP%]{.attchInner {width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; margin: auto; text-align: center; img {width: 100%;} mat-icon {position: absolute; right: 8px; cursor: pointer; top: 10px;} object {width: 100%; height: 100%;}}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:rgba(0,0,0,.4705882353)}.dialog-overlay[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]{background-color:#fff;border:1px solid var(--input-border-color);border-radius:10px;padding:20px 15px!important;box-shadow:0 0 10px #0000004d;max-width:800px;width:80%;max-height:calc(100vh - 40px);overflow:auto}.dialog-overlay[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{margin-top:10px;text-align:left;margin-left:50px;font-family:var(--font-family);font-style:normal;font-weight:var(--bold-font);font-size:var(--base-font);line-height:14px;width:150px;color:#000000d9}.dialog-overlay[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:250px}.dialog-overlay[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{margin-top:10px;text-align:left;word-wrap:break-word;font-family:var(--font-family);font-style:normal;font-weight:400;font-size:var(--small-font);line-height:14px;color:#1c1a16;padding:4px}.dialog-overlay[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.dialog-overlay[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0}.atag_btn[_ngcontent-%COMP%]{display:flex}.content-header[_ngcontent-%COMP%]{height:54px;background:rgb(255,249,240)}.prime[_ngcontent-%COMP%]{margin:0}.items[_ngcontent-%COMP%]{display:flex;align-items:center}.small-padding[_ngcontent-%COMP%]{padding:0 16px 10px}@media print{.button[_ngcontent-%COMP%]{display:none}}.html2canvas-container[_ngcontent-%COMP%]{width:3000px!important;height:3000px!important}#print-section[_ngcontent-%COMP%]{border:none!important}.flex.headTop[_ngcontent-%COMP%]{align-items:center}']
                    })
                }
                return i
            })();

            function Gt(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h3", 6), t._uU(6, "Upload Documents"), t.qZA(), t.TgZ(7, "a", 7), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.closeDialog())
                    }), t._UZ(8, "img", 8), t.qZA()()(), t.TgZ(9, "div", 9)(10, "div", 10)(11, "input", 11), t.NdJ("change", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.onRadioButtonChange())
                    }), t.qZA(), t.TgZ(12, "label", 12), t._uU(13, " Upload from the Device "), t.qZA()(), t.TgZ(14, "div", 10)(15, "input", 13), t.NdJ("change", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.onRadioButtonChange())
                    }), t.qZA(), t.TgZ(16, "label", 14), t._uU(17, " Upload using Digilocker "), t.qZA()()()(), t.TgZ(18, "div", 15)(19, "div", 16)(20, "button", 17), t._uU(21, "Cancel"), t.qZA(), t.TgZ(22, "button", 18), t._uU(23, "Confirm"), t.qZA()()()()()
                }
            }
            let Vt = (() => {
                class i {
                    constructor(n, o, e) {
                        this.data = n, this.dialogRef = o, this.router = e, this.popcheck = !0, this.selectedOption = ""
                    }
                    closeDialog() {
                        this.popcheck = !1
                    }
                    onRadioButtonChange() {
                        "option1" === this.selectedOption ? this.router.navigate(["/option1-route"]) : "option2" === this.selectedOption && this.router.navigate(["/option2-route"])
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(s.WI), t.Y36(s.so), t.Y36(g.F0))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-upload-document-preview"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["class", "dialog-overlay filterBox", 4, "ngIf"],
                            [1, "dialog-overlay", "filterBox"],
                            [1, "dialog", "filter-dlogs"],
                            [1, "dialog-body"],
                            [1, "row"],
                            [1, "flex", "headTop", "border-bot", "small-padding"],
                            [1, "no-margin"],
                            [1, "atag_btn", 3, "click"],
                            ["src", "assets/images/cancel-maroon-Border.svg", "aria-hidden", "false", "aria-label", "Example close icon", "fontIcon", "close", 2, "cursor", "pointer", "width", "20px"],
                            [1, "row", "gap"],
                            [1, "form-check"],
                            ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "value", "option1", 1, "form-check-input", 3, "change"],
                            ["for", "flexRadioDefault1", 1, "form-check-label"],
                            ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "value", "option2", 1, "form-check-input", 3, "change"],
                            ["for", "flexRadioDefault2", 1, "form-check-label"],
                            [1, "footer"],
                            [1, "side-btn", "small-padding"],
                            [1, "status-text"],
                            [1, "save-btn"]
                        ],
                        template: function(o, e) {
                            1 & o && t.YNc(0, Gt, 24, 0, "div", 0), 2 & o && t.Q6J("ngIf", e.popcheck)
                        },
                        dependencies: [l.O5],
                        styles: ['@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Black.32e88a6d72728d09.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-BlackItalic.5a6d846a5f529172.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Bold.c80659c569fd7544.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-BoldItalic.34238e2263b40a9c.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraBold.80d1ae589c6b001b.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraBoldItalic.0bece5755dd78993.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraLight.991f9a1903723691.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraLightItalic.61fe06a310084b11.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Italic.dccfd84c97d4f67b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Light.2c87b5c3768c0eac.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-LightItalic.44f06927efa59759.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Medium.d56f4d956f451601.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-MediumItalic.3a9ffc7d71903586.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Regular.9d8660e99a9a3c6d.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-SemiBold.932a58e6105c7e74.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-SemiBoldItalic.557c31ee638149b0.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Black.716e7088351a2919.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-BlackItalic.aa5764c125179e8d.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Bold.6e55b815d019e3e1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-BoldItalic.06eb77e71db9ddb7.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraBold.43e0093fa5e2e95c.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraBoldItalic.fd60b3cd5fcb25f1.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraLight.e9faf35fe54b0c89.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraLightItalic.ecf44b9e9384cf05.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Italic.8742e298eab3357b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Light.d738ade7d59cb798.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-LightItalic.5ee4368275e7c52f.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Medium.3178109888cdb5e9.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-MediumItalic.2da13f4da7500cad.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Regular.9bdcc5e716fb8ece.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-SemiBold.4965cc43b18be4bf.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-SemiBoldItalic.4bbb192cceaf4274.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Black.c17f9ad76553d0ab.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-BlackItalic.75aa0f4a664972f0.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Bold.ca7c27ffb6d02c01.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-BoldItalic.039aeb8d60c5d70f.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraBold.c272c8fce32fdc37.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraBoldItalic.5580762f4286f20d.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraLight.c3fec2f9c5374107.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraLightItalic.007aa6630e457c0c.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Italic.da3999deabee6526.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Light.29ca48c8f4c0324e.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-LightItalic.f2f6e463302b0040.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Medium.598be77941e2e9e1.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-MediumItalic.817bdf1e0851e558.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Regular.04729c35cbed58bb.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-SemiBold.9176b5e088911fbf.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-SemiBoldItalic.e22fa45e671a78b7.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Black.19827a84bb9a5a43.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-BlackItalic.1d17e9fbe9e2b17c.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Bold.ea2662d6f9224ba6.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-BoldItalic.91fa39e9d1ccc261.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraBold.abf52b3050da4465.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraBoldItalic.539ac5c0760f284b.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraLight.e35bef6a04f81819.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraLightItalic.f1e3f192b040a372.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Italic.cc28cb26c10752b5.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Light.81aafd56361d6615.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-LightItalic.62df2fef320920a0.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Medium.6b2fc9a275787054.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-MediumItalic.3950c555daa23424.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Regular.483dcf5898b16649.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-SemiBold.5f45c3cb83fec8f7.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-SemiBoldItalic.a4e8813b58320025.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Black.6e40217edffbfffe.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-BlackItalic.a9719b1dd6745d76.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Bold.c0ee083586d63ea1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-BoldItalic.35ffd59cc0134784.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraBold.e12c7d83a8f6ff1e.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraBoldItalic.df6dfe9dbbce9c3a.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraLight.b45d4bea4ec24b79.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraLightItalic.f2087fbc8dac21dd.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Italic.0f56becd32d1b1ee.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Light.ec84380ee7b28ee8.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-LightItalic.f338ab33156e2b09.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Medium.67a8ee21520203b0.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-MediumItalic.78f3639eb2732e1f.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Regular.c66c0fb37990205c.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-SemiBold.498aa3656e82a9cd.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-SemiBoldItalic.bc8bbc59ad4bf053.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Black.6689094048cab74c.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-BlackItalic.b5ea81a13a4cabc8.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Bold.c99e33a0005aef86.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-BoldItalic.d92ddac9e0553e89.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraBold.86c4d9cd4e61fe6b.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraBoldItalic.ec7caf538e276c45.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraLight.a8e2d559686f3945.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraLightItalic.e249ba05ee457326.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Italic.a3baa5685a86ef25.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Light.273eed85bd232843.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-LightItalic.d97de468b69f6feb.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Medium.6c4e9a87ca5bee88.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-MediumItalic.6f4c9bb25753bcfb.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Regular.c8ed843dc06f9a74.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-SemiBold.09a06bb03a0736ad.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-SemiBoldItalic.c77bcca61c764899.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Black.a3a31db84a67e5f4.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-BlackItalic.85bd0db1f44c1979.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Bold.451f143962dbd79c.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-BoldItalic.81f883819f893f71.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraBold.a4ca9e96c373477a.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraBoldItalic.9a05eef49d97e3cd.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraLight.f639712d038c25e6.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraLightItalic.abab100e0c8e3dbb.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Italic.4c279d7b4812adb2.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Light.694b18d053a61b3c.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-LightItalic.e7a532f40e3e0a1d.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Medium.be38702af791ab1e.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-MediumItalic.30b69460f2ca2ec1.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Regular.185343ab5e247902.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-SemiBold.aef47429f3e569f1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-SemiBoldItalic.282b3e4b04d5c90b.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Black.4f54208fec1b0ecc.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-BlackItalic.778ebc7e4777112a.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Bold.7560457a41cdaee6.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-BoldItalic.ba2d78df9fd90b9f.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraBold.2a8a829d0ed8d7c1.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraBoldItalic.c03be6e0129a0049.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraLight.b14232a5f0c09d73.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraLightItalic.49a213cb813f4816.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Italic.61087e7b5279b0e5.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Light.43bfcdca43853bc3.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-LightItalic.45f1246d694c65b7.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Medium.1d66781f0780cfcb.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-MediumItalic.85ac92a412ea45d6.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Regular.25bc22f4ceeb24bd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-SemiBold.b67dfcebcb19af56.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-SemiBoldItalic.bc9c2ad43ab67e18.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Black.e3376d9bc70b6cf6.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-BlackItalic.416f57ccd9d0bfdb.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Bold.cd28dd6054dec4a2.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-BoldItalic.afb98b0ad1e92a55.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraBold.938b58959a6cfaa5.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraBoldItalic.a46e95a5c6181322.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraLight.1b23a57d204faf2a.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraLightItalic.1c2e4709f56961ff.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Italic.3069a7f3e057104b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Light.f800f8f3a817e4ad.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-LightItalic.92edc0ea6981efed.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Medium.a2faa7013f2427db.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-MediumItalic.835911035f6b998a.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Regular.4c280bf4e67de147.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-SemiBold.908436a4662ff287.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-SemiBoldItalic.1a659fb319ec2376.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Black.042dad3077a5c44b.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-BlackItalic.ce9478d32085ef99.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Bold.f322e19764d32714.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-BoldItalic.1abd82142a78a09e.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraBold.6075703b315737a6.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraBoldItalic.966ffc258b58944f.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraLight.3aa0edf9509104ca.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraLightItalic.1df3330bbbdbf0c8.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Italic.69bd3a1a95631d2d.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Light.ca38e6f63246ee12.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-LightItalic.c03778cebf7967e5.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Medium.53c2141d06fbc81d.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-MediumItalic.b43583702491ad44.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Regular.2ce32c88f66f838c.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-SemiBold.74dc433ca146c12f.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-SemiBoldItalic.2166047c045be3c7.ttf) format("truetype");font-weight:700;font-style:italic}[_ngcontent-%COMP%]:root{--font-family: "NunitoSans";--bg-color: #fff;--small-font: 12px;--main-heading-font: 24px;--heading-color: #313134;--maroon-color: #8e433e;--selected-color: #8e433e;--primary-color: #731d1d;--secondary-color: #fff3e1;--input-border-color: #ebebeb;--black-color: #000;--normal-weight: 600;--bold-font: 700;--border-radius: 8px;--full-width: 100%;--font-weight-700: 700;--font-weight-800: 800;--font-weight-600: 600;--font-weight-400: 400;--font-size-12: 11px;--font-size-12: 12px;--font-size-14: 14px;--font-size-15: 15px;--font-size-16: 16px;--font-size-17: 17px;--font-size-18: 18px;--font-size-19: 19px;--font-size-20: 20px;--mb-32: 32px;--button-disable: #ccc;--fonts-subtext: #434343;--global-border: #ebebeb;--global-white: #fdfdfd;--header-default: #8e433e;--global-frame-background: linear-gradient( 270deg, #f7eeed 0%, #f9f1f1 25%, #fcf8f8 68.75%, rgba(249, 241, 241, 0) 95.31% ), #fff;--fonts-body: #606060;--fonts-primary: #1e1e1e;--primary-color: #8e433e;--button-icon-background: #f9f1f1;--fonts-title: #252525}*[_ngcontent-%COMP%]{letter-spacing:-.6px!important}body[_ngcontent-%COMP%]{height:100%;font-family:var(--font-family)!important;background:var(--global-frame-background)!important;.hight-t {color: var(--maroon-color) !important;}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;font-size:14px}body[_ngcontent-%COMP%]{background:#fdfcfb;font-family:var(--font-family)!important}h1[_ngcontent-%COMP%]{font-size:36px!important;font-weight:700!important;margin-top:0}h2[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700!important;margin-top:0}.no-margin[_ngcontent-%COMP%]{margin:0}.marginss[_ngcontent-%COMP%]{margin:10px 0}h3[_ngcontent-%COMP%]{font-size:24px!important;font-weight:700!important;margin-top:0}h4[_ngcontent-%COMP%]{font-size:18px!important;font-weight:700!important;margin-top:0}a[_ngcontent-%COMP%]{cursor:pointer}.mb-32[_ngcontent-%COMP%]{margin-bottom:var(--mb-32)}.mt40[_ngcontent-%COMP%]{margin-top:40px!important}.mb40[_ngcontent-%COMP%]{margin-bottom:40px!important}.mb20[_ngcontent-%COMP%]{margin-bottom:20px!important}.mt20[_ngcontent-%COMP%]{margin-top:20px;.mdc-data-table__header-cell {font-family: var(--font-family) !important;}}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{&::placeholder{color:#606060!important;font-size:14px!important}}.m40[_ngcontent-%COMP%]{margin:40px}*[_ngcontent-%COMP%]{outline:none}*[_ngcontent-%COMP%]:focus{outline:none}.mat-expansion-panel[_ngcontent-%COMP%], .mat-expansion-panel-header[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%], .mdc-list-item__primary-text[_ngcontent-%COMP%]{font-family:var(--font-family)!important}body[_ngcontent-%COMP%]{margin:0;font-family:var(--font-family)!important;background:#fffbfb!important}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 15px!important;margin:0}span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:var(--font-size-14)!important}.btn-default[_ngcontent-%COMP%]{background:transparent!important;border-radius:56px!important;border:1px solid var(--selected-color)!important;color:var(--primary-color);padding:12px 30px;height:auto;line-height:100%;font-weight:800;font-size:16px;color:var(--selected-color)}select[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;color:#606060}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{&::placeholder{color:#606060!important;font-size:16px!important}}h3[_ngcontent-%COMP%]{font-family:var(--font-family);font-style:normal;font-weight:var(--bold-font);font-size:var(--main-heading-font)!important;line-height:20px;color:#000}.heading-maroon[_ngcontent-%COMP%]{color:#1e1e1e!important;text-transform:capitalize;text-align:center}.multiselect-dropdown[_ngcontent-%COMP%]{.dropdown-btn {border: none !important;}}.card-block[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #d6d6d6;background:var(--global-white, #fdfdfd);padding:40px;overflow:hidden}.list-margin[_ngcontent-%COMP%]{margin-bottom:20px}.cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.icons-w[_ngcontent-%COMP%]{width:100%;height:30px}.fs-big[_ngcontent-%COMP%]{font-size:var(--font-size-20)!important}//[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap}.form-text-alert[_ngcontent-%COMP%]{margin-top:5px}.form-fields[_ngcontent-%COMP%]{margin:6px 6px 20px;flex:0 1 calc(33% - 5px);display:flex;flex-direction:column;.labels {font-weight: var(--bold-font); font-size: var(--font-size-16) !important; line-height: 19px; color: var(--heading-color); text-align: left;} .select {background: var(--bg-color); border: 1.5px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; option {font-size: var(--font-size-14);}} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat;} &:nth-child(1) {margin-left: 0px !important;} &:nth-child(3) {margin-right: 0px !important;}}.input-form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px;.labels {font-weight: var(--bold-font); font-size: var(--font-size-14) !important; line-height: 19px; color: var(--heading-color); width: var(--full-width); text-align: left; white-space: nowrap;} .select {background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px !important; padding: 9px; box-shadow: none; font-size: var(--font-size-16);} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat; cursor: pointer;} .wo-input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; box-shadow: none; color: var(--fonts-primary, #1e1e1e); &::placeholder {color: #606060 !important; font-size: 12px !important;}} .input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; font-weight: normal;} textarea {border: 1px solid #ebebeb; font-size: var(--font-size-16); outline: none; box-shadow: none !important; padding: 10px; background: #fdfdfd;} .textareaSpan {position: absolute; font-size: 12px !important; color: #606060; right: 20px; bottom: 10px;}}.mat-expansion-panel[_ngcontent-%COMP%]{overflow:visible!important;font-family:var(--font-family)!important;.mat-expansion-indicator {margin-top: -6px !important; display: none !important; &::after {padding: 2px !important;}} .mat-expansion-panel-header {.mat-content {&:hover {img {background: #fff !important; padding: 8px; border-radius: 8px; cursor: pointer;} .afterHover {display: block;} .beforeHover {display: none;}} .afterHover {display: none; padding: 8px; border-radius: 8px; height: 40px;} .beforeHover {padding: 8px; border-radius: 8px; height: 40px;}}} .mat-content {align-items: center !important; justify-content: center; padding: 0; display: flex; flex-direction: column; .tooltiptext {visibility: hidden; width: 120px; background-color: #606060 !important; color: #fff !important; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; top: 0; left: 75px;} .tooltiptext {&::after {content: ""; position: absolute; top: 36%; left: -3%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent #606060 transparent transparent;}} &:hover {.tooltiptext {visibility: visible;}}} .mat-expansion-panel-body {padding: 0 15px !important; position: absolute; left: 46px; z-index: 1111; top: 0;} mat-nav-list {padding: 0 !important;} .aligned-with-icon {white-space: pre-wrap; line-height: initial; margin-top: 3px !important;}}.upload-section[_ngcontent-%COMP%]{position:relative;padding:25px;height:auto;text-align:center;background:#f8f8f8;border:1px dashed #e6e6e6;border-radius:8px;display:flex;flex-direction:column;img {width: 40px; height: 40px;} label {font-size: 12px !important; color: #606060; font-weight: normal; span {font-size: 12px !important;}} .visiblle {z-index: 1; position: absolute; opacity: 0; width: 100%; text-align: center; left: 0; height: 86px; top: 0;} small {word-break: break-all;}}.mt10[_ngcontent-%COMP%]{margin-top:10px}a[_ngcontent-%COMP%]{text-decoration:none}.form-control[_ngcontent-%COMP%]{display:flex;height:40px!important;padding:12px 16px!important;align-items:center;gap:6px;align-self:stretch;border-radius:2px;border:1px solid #d1d1d1;background:#fff;color:#1e1e1e;font-size:var(--font-size-14);font-style:normal;font-weight:400;line-height:22px;font-size:14px!important;border-radius:8px!important;&::placeholder{color:#606060!important;font-size:12px!important}}.remarks[_ngcontent-%COMP%]{height:80px!important}.form-label[_ngcontent-%COMP%]{font-size:var(--font-size-14);color:var(--font-color-black);font-weight:var(--font-weight-700);margin-bottom:5px}.globalContent[_ngcontent-%COMP%]{font-size:16px;color:#434343;font-weight:400;line-height:22.4px}.headings[_ngcontent-%COMP%]{font-size:var(--main-heading-font);font-weight:var(--font-weight-700)}.context-text[_ngcontent-%COMP%]{font-size:var(--font-size-14);margin:0;color:#434343}.heading-border[_ngcontent-%COMP%]{font-size:var(--main-heading-font);font-weight:var(--font-weight-700);line-height:44px;border-bottom:1px solid #e6e6e6;padding:0!important}.sub-heading[_ngcontent-%COMP%]{font-size:var(--font-size-16);font-weight:var(--font-weight-700)}.border-bot[_ngcontent-%COMP%]{border-bottom:1px solid var(--global-border)}.card[_ngcontent-%COMP%]{border-radius:16px;border:1px solid var(--global-border);background:#fff}.error-msg[_ngcontent-%COMP%]{color:red;font-size:12px}.save-btn[_ngcontent-%COMP%]{margin:10px 0 0}.mv20[_ngcontent-%COMP%]{margin:20px 0}.btn[_ngcontent-%COMP%]{background:var(--maroon-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;&:focus{color:#fff}&:hover{background:var(--maroon-color);color:#fff}}.save-btn[_ngcontent-%COMP%]{margin:10px;background:var(--maroon-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:10px 25px;line-height:100%;border:none}.gaps[_ngcontent-%COMP%]{margin:10px 15px 0 30px;width:calc(100% - 30px)}.form-text-alert[_ngcontent-%COMP%]{color:var(--states-error, #d91919);font-family:var(--font-family);line-height:140%}.save-btn[_ngcontent-%COMP%]:hover{background:var(--maroon-color);color:#fff}.cancel-btn[_ngcontent-%COMP%]{margin:10px;border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;background:var(--bg-color);color:var(--primary-color);padding:13px 34px;line-height:100%;border:none}.cancel-btn[_ngcontent-%COMP%]:hover{border:none;background-color:transparent;color:var(--primary-color)}.resetBtn[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:700;border:none!important;background:transparent;color:var(--maroon-color)!important;outline:none;&:hover{background:transparent;color:var(--maroon-color)}}.textarea[_ngcontent-%COMP%]{background:var(--bg-color);border:1.5px solid var(--input-border-color);border-radius:var(--border-radius);width:var(--full-width);height:40px;option {font-size: var(--font-size-14);} .navbar {border-radius: 0px !important;} .cdk-global-overlay-wrapper {z-index: 1112 !important;} .cdk-overlay-container {z-index: 1112 !important;} .required:after {content: " * "; color: red; margin-left: 5px;} @media (max-width: 767px) {.mat-expansion-indicator {&:after {color: var(--maroon-color) !important; padding: 2px !important;}} h3 {font-size: 20px !important;}} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat;} &:nth-child(1) {margin-left: 0px !important;} &:nth-child(3) {margin-right: 0px !important;}}.input-form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px;.labels {font-weight: var(--bold-font); font-size: var(--font-size-14) !important; line-height: 19px; color: var(--heading-color); width: var(--full-width); text-align: left; white-space: nowrap;} .select {background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px !important; padding: 9px; box-shadow: none; font-size: var(--font-size-16);} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat; cursor: pointer;} .wo-input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; box-shadow: none; color: var(--fonts-primary, #1e1e1e);} .input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; font-weight: normal;} textarea {border: 1px solid #ebebeb; font-size: var(--font-size-16); outline: none; box-shadow: none !important; padding: 10px; background: #fdfdfd;} .textareaSpan {position: absolute; font-size: 12px !important; color: #606060; right: 20px; bottom: 10px; color: var(--button-default, #8e433e); font-style: normal; font-weight: 700;}}.flb-33[_ngcontent-%COMP%]{flex-basis:33%}.mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__row[_ngcontent-%COMP%]{border-bottom:1px solid var(--global-border, #ebebeb);background:var(--global-white, #fdfdfd)}table[_ngcontent-%COMP%]{width:100%}.table-view[_ngcontent-%COMP%]{background:transparent!important}.table-container[_ngcontent-%COMP%]{height:480px;overflow:auto;.court-table {th {z-index: 10 !important;} td {z-index: 10 !important;}}}.img-field[_ngcontent-%COMP%]{color:red;margin-left:5px}.mat-mdc-dialog-container[_ngcontent-%COMP%]{margin-top:30px}.mat-expansion-panel[_ngcontent-%COMP%]{overflow:visible!important;font-family:var(--font-family)!important;.mat-expansion-indicator {margin-top: -6px !important; display: none !important; &::after {padding: 2px !important;}} .mat-expansion-panel-header {.mat-content {&:hover {img {background: #fff !important; padding: 8px; border-radius: 8px; cursor: pointer;} .afterHover {display: block;} .beforeHover {display: none;}} .afterHover {display: none; padding: 8px; border-radius: 8px; width: 35px; height: auto;} .beforeHover {padding: 8px; border-radius: 8px; width: 35px; height: auto;}}} .mat-content {align-items: center !important; justify-content: center; padding: 0; display: flex; flex-direction: column; .tooltiptext {visibility: hidden; width: 120px; background-color: #606060 !important; color: #fff !important; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; top: 0; left: 75px;} .tooltiptext {&::after {content: ""; position: absolute; top: 36%; left: -3%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent #606060 transparent transparent;}} &:hover {.tooltiptext {visibility: visible;}}} .mat-expansion-panel-body {padding: 0 15px !important; position: absolute; left: 46px; z-index: 1111; top: 0;} mat-nav-list {padding: 0 !important;} .aligned-with-icon {white-space: pre-wrap; line-height: initial; margin-top: 3px !important;}}.mat-expanded[_ngcontent-%COMP%]{.mat-expansion-indicator {margin-top: 6px !important;}}.upload-section[_ngcontent-%COMP%]{position:relative;padding:25px;height:auto;text-align:center;background:#f8f8f8;border:1px dashed #e6e6e6;border-radius:8px;display:flex;flex-direction:column;img {width: 40px; height: 40px;} label {color: var(--button-default, #8e433e); font-size: 12px !important; font-style: normal; font-weight: 700; span {font-size: 12px !important;}} .visiblle {z-index: 1; position: absolute; opacity: 0; width: 100%; text-align: center; left: 0; height: 86px; top: 0;} small {word-break: break-all;}}.mt20[_ngcontent-%COMP%]{margin:20px 0 0}.mb20[_ngcontent-%COMP%]{margin:0 0 20px}.ml10[_ngcontent-%COMP%]{margin:0 0 0 20px}.mr10[_ngcontent-%COMP%]{margin-right:0 20px 0 0}.mb10[_ngcontent-%COMP%]{margin-bottom:10px}.mt10[_ngcontent-%COMP%]{margin:10px 0 0}.m20[_ngcontent-%COMP%]{margin:20px}.m0[_ngcontent-%COMP%]{margin:0!important}.p0[_ngcontent-%COMP%]{padding:0!important}.pb20[_ngcontent-%COMP%]{padding-bottom:20px}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row}.btn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;border:0;&:focus{color:#fff}&:hover{background:var(--selected-color);color:#fff}}.save-btns[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:10px 24px;line-height:100%;border:0;&:focus{color:#fff}&:hover{background:var(--selected-color);color:#fff}}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0!important}.content-text[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:#434343}.header[_ngcontent-%COMP%]{padding:5px 10px}.status-text[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#8e433e;margin:10px;text-align:center;display:flex;justify-content:center;background-color:transparent;border:none}.gap[_ngcontent-%COMP%]{padding:10px 0!important}.gap1[_ngcontent-%COMP%]{padding:30px 0 0!important}.pageContent[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:22.4px;color:#606060}.options[_ngcontent-%COMP%]{display:flex}.img-class[_ngcontent-%COMP%]{height:32px;width:32px;border-radius:50%;background-color:#f9f1f1;display:flex;justify-content:center;align-items:center;margin:0 2px}.list-padding[_ngcontent-%COMP%]{padding:0 26px!important}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px white inset!important}.section[_ngcontent-%COMP%]{border-radius:var(--border-radius);border:1px solid var(--global-border);display:flex;justify-content:space-between;padding:20px;background-color:var(--global-white);box-shadow:0 20px 40px #0000000d}.content[_ngcontent-%COMP%]{display:flex}.pdf-section[_ngcontent-%COMP%]{margin:0 0 7px 5px}.pdf-head[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1e1e1e;margin:0}.pdf-text[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:#0b48e4;margin:0}.rws[_ngcontent-%COMP%]{padding:20px 0 80px}.top-search[_ngcontent-%COMP%]{width:320px;background:#fff url(/assets/search-ico.svg) no-repeat right;background-size:22px;background-position:94% 13px;padding:12px 20px;font-size:var(--font-size-14);outline:0;border-radius:50px;border:1px solid var(--global-border, #ebebeb)}.normal-text[_ngcontent-%COMP%]{font-size:14px}.bold[_ngcontent-%COMP%]{font-weight:700!important}.small-font[_ngcontent-%COMP%]{font-size:12px!important}.card[_ngcontent-%COMP%]{border-radius:15px;padding:20px;position:relative;margin:0 0 20px}.admit-label[_ngcontent-%COMP%]{position:absolute;top:-10px;background-color:#fff;padding:0 8px;font-size:14px;color:#606060}.imgs[_ngcontent-%COMP%]{display:flex;align-items:center}.card-block[_ngcontent-%COMP%]{border-radius:20px 20px 0 0;.card-header {height: 110px; border-bottom: 1px solid var(--global-border); display: flex; justify-content: space-between; align-items: center;} .card-header-l {height: 160px !important;} .add-img {display: flex; justify-content: center; align-items: center;} .card-footer {padding: 0; background-color: transparent; border-top: 1px solid var(--global-border); margin-top: 20px;} .card-footers {padding: 0; background-color: transparent; border-top: 1px solid var(--global-border);}}.card-header[_ngcontent-%COMP%]{height:74px;background:rgba(240,221,219,1);display:flex;justify-content:space-between;align-items:center;padding:20px}th[_ngcontent-%COMP%]{font-size:14px;font-weight:400}td[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.pos-bedge[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;border-radius:6px}.card-body[_ngcontent-%COMP%]{padding:10px 20px}.border-cls[_ngcontent-%COMP%]{border:1px solid rgba(230,230,230,1)}.results[_ngcontent-%COMP%]{height:72px;border-radius:5px;display:flex;justify-content:space-between;align-items:center}.gb[_ngcontent-%COMP%]{background-color:#188906!important;margin:0 5px}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-block[_ngcontent-%COMP%]{padding:0;background-color:var(--global-white)}.space[_ngcontent-%COMP%]{display:flex;margin:20px 0}.blocks[_ngcontent-%COMP%]{width:49%;border-radius:20px;overflow:hidden}.border-cls[_ngcontent-%COMP%]:nth-child(even){margin-left:22px}.prime[_ngcontent-%COMP%]{color:var(--primary-color)}.text-col[_ngcontent-%COMP%]{color:#999}.app-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#434343}.note-title[_ngcontent-%COMP%]{font-size:18px;font-weight:800;color:#606060}.card-width[_ngcontent-%COMP%]{width:95%}.form-block[_ngcontent-%COMP%]{background-color:var(--global-white);border:1px solid var(--global-border);padding:30px!important;border-radius:20px}.edit-input[_ngcontent-%COMP%]{height:48px;background-color:var(--global-white);border:1px solid var(--global-border);border-radius:var(--border-radius);padding:3px}.gray-area[_ngcontent-%COMP%]{height:40px;background:rgba(241,241,241,1);border-radius:5px;padding:9px 20px}.edit-text[_ngcontent-%COMP%]{color:#606060;font-size:14px;font-weight:400}.gray-back[_ngcontent-%COMP%]{background:rgba(241,241,241,1)!important;border:none;.gray-area {height: 40px; background: rgba(241,241,241,1); border-radius: 5px; padding: 9px 20px;} .edit-text {color: rgba(96,96,96,1); font-size: 14px; font-weight: 400;}}.radio-cont[_ngcontent-%COMP%]{display:flex;gap:20px}.button-block[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center}.label-checkk[_ngcontent-%COMP%]{font-weight:400!important}.form-check-input[_ngcontent-%COMP%]{border:1px solid gray}.form-check-input[_ngcontent-%COMP%]:checked{background-color:var(--primary-color)!important;border-color:var(--primary-color)!important;outline:none!important;box-shadow:none!important}.dateBg[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important}.wo-input[_ngcontent-%COMP%]{font-size:var(--font-size-16);background:var(--bg-color);border:1px solid var(--input-border-color);border-radius:var(--border-radius);width:var(--full-width);height:40px;padding:10px!important;box-shadow:none;color:var(--fonts-primary, #1e1e1e)}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:grey;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:grey}.trans-back[_ngcontent-%COMP%]{font-weight:800;font-size:16px;color:var(--primary-color);margin:0 15px;background-color:transparent;border:0;cursor:pointer;outline:none}.dateBgg[_ngcontent-%COMP%]{background:url(eyeIcon.0b318ead5f9673fd.svg) no-repeat (99%,10px),linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important;height:10px}@media (min-width: 1400px){.container[_ngcontent-%COMP%]{min-width:100%!important;padding-left:80px!important;padding-right:80px!important}}@media (max-width: 1200px){.blocks[_ngcontent-%COMP%]{width:100%!important}.save-btn[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;align-items:center!important}.border-cls.blocks[_ngcontent-%COMP%]:nth-child(even){margin-left:0}}@media (max-width: 767px){.excellency-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.border-cls[_ngcontent-%COMP%]:nth-child(even){margin-left:0;margin-top:10px}.gaps[_ngcontent-%COMP%]{margin:10px 5px 0 10px;width:calc(100% - 10px)}}.fwdLetters[_ngcontent-%COMP%]{.ng-dropdown {.drop-list {top: 44px !important; width: 96% !important; padding: 13px 34px; line-height: 100%;}}}.save-btn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.cancel-btn[_ngcontent-%COMP%]{margin:10px;border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;background:var(--bg-color);color:var(--primary-color);border:none;padding:13px 34px;line-height:100%}.cancel-btn[_ngcontent-%COMP%]:hover{border:none;background:transparent;color:var(--primary-color)}.previewBtn[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:8px;align-items:center;border-radius:50px;border:1px solid #ebebeb;background:#fffdfa;font-size:12px;font-weight:400;line-height:24px;padding:0 8px;height:24px}.resetBtn[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:700;border:none!important;background:transparent;color:var(--selected-color)!important;outline:none;&:hover{background:transparent;color:var(--selected-color)}}.textarea[_ngcontent-%COMP%]{background:var(--bg-color);border:1.5px solid var(--input-border-color);border-radius:var(--border-radius);font-size:var(--font-size-14);resize:none;width:var(--full-width);height:35px;padding:5px 10px}.navbar[_ngcontent-%COMP%]{border-radius:0!important}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{z-index:1112!important}.required[_ngcontent-%COMP%]:after{content:"*";color:red;margin-left:5px}@media (max-width: 767px){.with-nav[_ngcontent-%COMP%]{top:85px!important}.save-btn[_ngcontent-%COMP%]{padding:10px;font-size:12px}.mat-expansion-indicator[_ngcontent-%COMP%]{&:after{color:var(--selected-color)!important;padding:2px!important}}}h3[_ngcontent-%COMP%]{font-size:20px!important}.mdc-dialog__container[_ngcontent-%COMP%]{height:calc(100vh - 80px)!important}.breadcrumb[_ngcontent-%COMP%]{li {a {color: #1e1e1e !important; font-size: 14px; text-decoration: none; font-weight: 400;} a.active {color: #1e1e1e !important; font-weight: 700;}}}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:var(--bs-breadcrumb-divider, ">")!important;font-size:18px;margin-top:-3px;color:#1e1e1e!important}.active[_ngcontent-%COMP%]{color:var(--fonts-primary)!important;font-weight:var(--font-weight-600)!important}.formWidth[_ngcontent-%COMP%]{width:80%!important;margin:auto}.upload_icon[_ngcontent-%COMP%]{img {width: 15px; height: auto;}}.imgSection[_ngcontent-%COMP%]{border:1px solid #e6e6e6;padding:20px;display:flex;flex-direction:column;margin-top:10px;border-radius:20px;small {font-size: 16px; vertical-align: middle;} .attchmentIcon {border-radius: 3.484px; border: .871px solid #dfdfdf; padding: 10px 0px; margin-right: 25px; height: 48px; width: 48px; background-color: var(--bg-color);} .imgSectionInner {padding: 10px 20px; border-bottom: 1px solid #ebebeb; justify-content: space-between; display: flex; &:last-child {border: none !important;}} .wb {background-color: #f1f1f1;} .imgSectionInner:last-of-type {border: none !important;}}.btn-check[_ngcontent-%COMP%]:checked + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check) + .btn[_ngcontent-%COMP%]:active{background:var(--primary-color)!important;color:#fff;outline:none;border-color:var(--primary-color)!important;box-shadow:none}.demo-table[_ngcontent-%COMP%]{border:1px solid #e6e6e6!important;box-shadow:none;border-collapse:inherit;overflow:visible;border-radius:20px;th {background-color: #f0dddb !important; color: #252525 !important; padding: 16px 20px !important; font-weight: 600;} td {background-color: #fff; padding: 16px 20px !important;} tr:first-child {th:first-child {border-radius: 20px 0 0 0;} th:last-child {border-radius: 0 20px 0 0;}} tr:last-child {td:first-child {border-radius: 0 0 0 20px;} td:last-child {border-radius: 0 0 20px 0;}}}.with-nav[_ngcontent-%COMP%]{top:160px!important}.without-nav[_ngcontent-%COMP%]{top:110px!important}.document-container[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:20px;border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:1px;padding:20px;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:100%;position:relative;overflow:hidden}.document-card[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:0px 0px 1px 0px;padding:12px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-shrink:0;width:100%;position:relative}.document-details[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;align-items:center;justify-content:flex-start;flex-shrink:0;position:relative}.document-image-container[_ngcontent-%COMP%]{flex-shrink:0;width:47.03px;height:48px;position:static}.document-image-placeholder[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:3.48px;border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:.87px;width:47.03px;height:48px;left:0;top:0;display:flex;justify-content:center;align-items:center}.document-image[_ngcontent-%COMP%]{width:22px;height:22px}.doc-icos[_ngcontent-%COMP%]{width:100%!important}.document-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;position:relative}.document-title[_ngcontent-%COMP%]{color:var(--fonts-subtext, #434343);text-align:left;font-size:14px;font-weight:600;position:relative}.document-title-fad[_ngcontent-%COMP%]{color:#8d8686!important}.document-size[_ngcontent-%COMP%]{color:#999;text-align:left;font:var(--caption-regular, 400 12px/140% "Nunito Sans", sans-serif);position:relative}.document-icon[_ngcontent-%COMP%]{flex-shrink:0;position:relative;overflow:visible;cursor:pointer}.msg-erro[_ngcontent-%COMP%]{display:block;margin:10px 0;.mgs {color: red; font-size: 12px;}}.desg-crd[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--global-border, #e6e6e6);background:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:14px;.desig-head {padding-bottom: 10px; border-bottom: 1px solid #e6e6e6; .cret-by {color: var(--fonts-title, #252525); font-size: var(--font-size-14); font-style: normal; font-weight: 700; line-height: 140%;}} .prs-blk {display: flex; justify-content: space-between; flex-direction: row; align-items: center; padding-top: 10px; .nm {color: var(--fonts-primary, #1e1e1e); font-size: var(--font-size-14); font-style: normal; font-weight: 700; line-height: 140%;} .bgj {display: flex; justify-content: center; align-items: center; padding: 5px; border-radius: 2rem; background: #fff8ed; color: var(--button-default, #8e433e); font-size: var(--font-size-14); font-style: normal; font-weight: 600; line-height: 140%;}}}.filter-footer[_ngcontent-%COMP%]{text-align:center;border-top:1px solid #8080802e;display:flex;justify-content:flex-end;align-items:center;padding:10px 0 0}.filter-dlogs[_ngcontent-%COMP%]{padding:30px 24px 10px!important}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:10px!important;height:10px!important;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:"";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:36%!important;left:2px!important;width:7px!important;height:3px!important;margin-top:-4px!important;border-style:solid;border-color:#fff;border-width:0 0 1.5px 1.5px!important;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #e6e6e6!important;color:#1e1e1e!important;box-shadow:none!important;padding:5px!important;line-height:100%!important;background:linear-gradient(to right,#fff calc(100% - 22px),#f9f1f1 22px)!important;a {color: #000 !important; border: 1px solid #000 !important; border-radius: 50% !important; font-size: 8px !important; padding: 0px 3px 1px 3px !important; vertical-align: middle !important; margin-left: 5px !important;}}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked+div:before{background:var(--selected-color)!important}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:before{border:1.5px solid var(--selected-color)!important;color:var(--selected-color)!important}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#f0dddb!important}.dia-header[_ngcontent-%COMP%]{color:#252525;font-size:16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(128,128,128,.39);padding:5px 0 15px;margin-bottom:15px;font-weight:700}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{min-height:36px!important;max-height:69px!important;overflow:auto;border:1px solid #e6e6e6!important;padding:5px 34px 5px 12px!important;background-position:97% 14px;background-repeat:no-repeat;.selected-item {span {font-size: 10px !important;}}}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{padding-left:25px!important}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{margin-top:2px!important}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{border-color:#731d1d transparent!important;display:none!important}.th-fnt[_ngcontent-%COMP%]{font-size:14px!important;font-weight:700!important}.multiselect-dropdown[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important}.woblock[_ngcontent-%COMP%]{display:flex;.havrem {position: relative; margin-top: -12px; &:hover .toltip-notify {visibility: visible;} .toltip-notify {background: #fff9f0; display: flex; justify-content: space-between; flex-direction: column; padding: 15px 20px; width: 200px; border-radius: 8px; position: absolute; top: -105px; left: -22px; visibility: hidden; .txt {color: var(--fonts-body, #606060); font-size: 14px; font-style: normal; font-weight: 600; line-height: 140%;} a.vwrem {color: var(--button-default, #8e433e); font-size: 15px; font-style: normal; font-weight: 700; line-height: 140%; text-decoration: none; margin-top: 10px; cursor: pointer;} &::after {content: ""; position: absolute; bottom: -10px; left: 15%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #fff9f0;}} img {cursor: pointer;}}}@media (max-width: 767px){.breadcrumb[_ngcontent-%COMP%]{li {a {color: #1e1e1e !important; font-size: 12px;}}}.with-nav[_ngcontent-%COMP%]{top:85px!important}.save-btn[_ngcontent-%COMP%]{padding:10px;font-size:12px}.card-width[_ngcontent-%COMP%]{width:95%!important}.form-block[_ngcontent-%COMP%]{padding:20px!important}}@media (max-width: 450px){.with-nav[_ngcontent-%COMP%]{top:79px!important}.form-label[_ngcontent-%COMP%], label[_ngcontent-%COMP%], .input-form-fields[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{font-size:11px!important}}//[_ngcontent-%COMP%]   filter[_ngcontent-%COMP%]   sections[_ngcontent-%COMP%]   css[_ngcontent-%COMP%]   .selected-filters-section[_ngcontent-%COMP%]{.filters {display: flex; flex-wrap: wrap; .value-block {display: flex; padding: 6px 12px; justify-content: space-between; align-items: center; border-radius: 20px; border: 1px solid #e6e6e6; background: #fffcf6; margin-right: 20px; margin-top: 10px; value-block:nth-child(1) {margin-left: 0px;} .value {font-size: 12px; color: #1e1e1e; font-style: normal; font-weight: 400;} .s-icons-close {font-size: 15px; color: var(--selected-color); width: unset; height: unset; margin-left: .5rem; cursor: pointer;}}}}@media (max-width: 450px){.with-nav[_ngcontent-%COMP%]{top:79px!important}}.court-table[_ngcontent-%COMP%]{width:var(--full-width);th {height: 48px; color: var(--fonts-body); font-size: var(--base-font); background-color: #f0dddb !important; font-size: 14px; font-weight: 700; color: #252525;} td {font-size: var(--base-font); color: #252525;}}.btn.reset[_ngcontent-%COMP%]{background:transparent;color:var(--maroon-color)}.tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;.tag {display: flex; justify-content: space-between; align-items: center; border-radius: 4px; border: 1px solid var(--global-border, #e6e6e6); background: var(--global-white, #fdfdfd); .val {color: var(--fonts-primary, #1e1e1e); font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;} .crss-btn {background: var(--button-icon-background, #f9f1f1); img {width: 14px;}}}}.mat-mdc-dialog-container[_ngcontent-%COMP%]{.mdc-dialog__surface {background-color: transparent !important; box-shadow: none !important; height: 140px; .blocks {width: 100% !important; margin: 10px 0px;} .space {margin: 0px !important;} .border-cls:nth-child(even) {margin-left: 0px !important;} .row-type {display: flex; justify-content: space-between;} .content-text {font-size: 14px;} .context-text {font-size: 12px;} .ss-gap {padding: 15px !important; position: relative;} .normal-text {font-size: 12px;} .trans-background {background-color: transparent;} .list-margin {margin-bottom: 20px !important;}}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:#00000078;.dialog {background-color: white; border: 1px solid var(--input-border-color); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 700px; width: 80%; max-height: calc(100vh - 20px); overflow: auto;}}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed}.edit-input[_ngcontent-%COMP%]{height:48px;background-color:var(--global-white);border:1px solid var(--global-border);border-radius:var(--border-radius);padding:4px;.gray-area {height: 40px; background: rgba(241,241,241,1); border-radius: 5px; padding: 9px 20px;} .edit-text {color: rgba(96,96,96,1); font-size: 14px; font-weight: 400; width: 100%; border: none; background: transparent; outline: none;}}//disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:   by[_ngcontent-%COMP%]   Vikin[_ngcontent-%COMP%]   .disabled-blk[_ngcontent-%COMP%]{margin-top:10px}.disabled-input[_ngcontent-%COMP%]{padding:2px;border-radius:8px;border:1px solid;border:1px solid var(--global-border, #e6e6e6);background:#fff;display:flex;justify-content:flex-start;align-items:center;height:40px;.value {padding: 5px 10px; border-radius: 5px; background: #f1f1f1; color: var(--fonts-primary, #1e1e1e); font-size: 16px; font-style: normal; font-weight: 400; line-height: 140%; width: 100%; display: flex; justify-content: space-between; .val {width: 100%;}} .dis_input {border: none; background: transparent; outline: none; width: 100%;}}.custom-dropdown-css-class[_ngcontent-%COMP%]{position:relative}.vacancy-table[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:20px;box-shadow:none;border-collapse:inherit;border:1px solid #e6e6e6!important;th,td {padding: 10px !important; border-bottom: 1px solid #0000001f;} tr:first-child th:first-child {border-radius: 20px 0 0 0;} tr:first-child th:last-child {border-radius: 0 20px 0 0;} tr:last-child td:first-child {border-radius: 0 0 0 20px;} tr:last-child td:last-child {border-radius: 0 0 20px;}}.activeTab[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;border-radius:4px 4px 0 0;background-color:#731d1d}.table-header[_ngcontent-%COMP%]{width:100%;height:60px;justify-content:space-between;align-items:flex-start;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom:1px solid var(--global-border, #e6e6e6);background:var(--button-menu-hover, #f0dddb)}.table-row[_ngcontent-%COMP%]{width:100%;height:auto;padding:20px 40px!important;justify-content:space-between;align-items:flex-start;flex-shrink:0;border-bottom:1px solid var(--global-border, #e6e6e6)}.table-header-cell[_ngcontent-%COMP%]{font-size:14px;background-color:#f0dddb!important;color:#252525!important;padding:16px!important;font-weight:600}.table-body[_ngcontent-%COMP%]{width:100%;height:auto}.table-data-row[_ngcontent-%COMP%]{width:100%;height:60px;background:var(--global-white, #fdfdfd)}.inner-table-row[_ngcontent-%COMP%]{width:100%;height:50px;background:var(--button-icon-background, #f9f1f1)}.table-data-cell[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:#00000078;transition:opacity 1s ease;.dialog {background-color: white; border: 1px solid var(--input-border-color); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 50%; width: 36%; max-height: calc(100vh - 20px); overflow: auto; position: relative;} ::-webkit-scrollbar {padding: 1px; background: #b6b6b6; width: 10px; margin-right: 10px;} ::-webkit-scrollbar-track {background: #b6b6b6; margin-right: 10px;} ::-webkit-scrollbar-thumb {background: #8e433e; margin-right: 10px; height: 40px;} .headTop {justify-content: space-between;} .flex {display: flex; justify-content: space-between; h2 {margin: 0; font-size: var(--font-size-18); font-weight: var(--font-weight-700);}} .flexSectn {padding: 20px 0;}}.confirm-ncc[_ngcontent-%COMP%]{.label {color: #c17571 !important;}}.p0[_ngcontent-%COMP%]{.disabled-blk {margin: 0 !important;}}.form-block[_ngcontent-%COMP%]{padding:15px!important;ol {margin: 0; padding-left: 15px; li {padding: 0;}}}.dropNew[_ngcontent-%COMP%]{.drop-list {top: 43px !important;}}.form-control.wo-input.dateBg[_ngcontent-%COMP%]{display:block!important}.webcam-modal[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;.webCamGuide {width: 100% !important; &::before {left: 53% !important; transform: translate(-53%,-50%) !important; background-position: center !important; top: 60% !important;}} .modal-body {padding: 0 !important; width: 100% !important;} .webcam-wrapper {width: 100%; height: 100%; video {width: 100%; height: 100%;} canvas {width: 100%; height: 100%;}}}.matDate.mat-mdc-form-field[_ngcontent-%COMP%]{width:100%!important;font-family:var(--font-family);&:hover{.mat-mdc-form-field-focus-overlay {background: transparent !important;}}.mat-mdc-form-field-focus-overlay {background: transparent !important;} .mdc-text-field--filled:not(.mdc-text-field--disabled) {border: 1px solid var(--global-border); border-radius: var(--border-radius);} .mat-mdc-form-field-infix {padding: 0 !important; min-height: 40px !important; max-height: 40px;} .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {top: 23px !important;} .mat-mdc-text-field-wrapper {background: linear-gradient(to right,#fff calc(100% - 46px),#f9f1f1 40px) !important; padding-left: 10px !important;} .mat-mdc-form-field-flex {max-height: 40px;} .mat-datepicker-input {margin-top: 7px; font-size: 14px !important; &::placeholder {font-size: 14px !important;}} .mdc-line-ripple {display: none;} .mat-mdc-icon-button.mat-mdc-button-base { --mat-mdc-button-persistent-ripple-color: none !important; } .mat-datepicker-toggle-active {color: rgba(0,0,0,.54);} .mat-mdc-icon-button svg,.mat-mdc-icon-button img {width: var(--mdc-icon-button-icon-size, 19px); height: var(--mdc-icon-button-icon-size, 19px);}}.mat-calendar-body-cell[_ngcontent-%COMP%]{&:hover{.mat-calendar-body-cell-content.mat-focus-indicator {background-color: #f9f1f1 !important; color: #000 !important;}}}.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f9f1f1!important;color:#000!important}.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background:#f9f1f1!important}.matDate[_ngcontent-%COMP%]{.mat-mdc-form-field-subscript-wrapper {display: none;}}.cdk-overlay-container[_ngcontent-%COMP%]{.cdk-overlay-connected-position-bounding-box {z-index: 1114;}}@media (max-width: 767px){.formBlk[_ngcontent-%COMP%]   .input-form-fields[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{white-space:normal}span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:var(--font-size-12)!important}.trans-back[_ngcontent-%COMP%], .edit-input[_ngcontent-%COMP%]   .edit-text[_ngcontent-%COMP%], .save-btns[_ngcontent-%COMP%]{font-size:var(--font-size-12)}.form-control[_ngcontent-%COMP%], .matDate.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-datepicker-input[_ngcontent-%COMP%], .disabled-input[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:var(--font-size-12)!important}}@media (max-width: 1200px){.mob-m0[_ngcontent-%COMP%]{.border-cls:nth-child(even) {margin-left: 0 !important;}}}@media (max-width: 600px){.rws.mob[_ngcontent-%COMP%]{padding:20px}.edit-input[_ngcontent-%COMP%]   .gray-area[_ngcontent-%COMP%]{padding:8px}.edit-input[_ngcontent-%COMP%]   .edit-text[_ngcontent-%COMP%]{font-size:var(--font-size-11)}}.dialog-image[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;.dialog-img {background-color: white; border: 1px solid #ebebeb; border-radius: 10px; padding: 20px 40px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 950px; height: calc(100vh - 100px); width: 90%;}}.attachModal[_ngcontent-%COMP%]{.attchInner {width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; margin: auto; text-align: center; img {width: 100%;} mat-icon {position: absolute; right: 8px; cursor: pointer; top: 10px;} object {width: 100%; height: 100%;}}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:rgba(0,0,0,.4705882353)}.dialog-overlay[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]{background-color:#fff;border:1px solid var(--input-border-color);border-radius:10px;box-shadow:0 0 10px #0000004d;max-width:500px;width:50%;max-height:calc(100vh - 20px);overflow:auto}.dialog-body[_ngcontent-%COMP%]{padding:10px 20px}.side-btn[_ngcontent-%COMP%]{display:flex;justify-content:right}.pay-btn[_ngcontent-%COMP%]{background:rgb(241,241,241);padding:10px}.pay-button[_ngcontent-%COMP%]{padding:13px!important}th[_ngcontent-%COMP%]{margin-top:10px;text-align:left;margin-left:50px;font-family:var(--font-family);font-style:normal;font-weight:var(--bold-font);font-size:var(--base-font);line-height:14px;width:150px;color:#000000d9}tr[_ngcontent-%COMP%]{width:250px}td[_ngcontent-%COMP%]{margin-top:10px;text-align:left;word-wrap:break-word;font-family:var(--font-family);font-style:normal;font-weight:400;font-size:var(--small-font);line-height:14px;color:#1c1a16;padding:4px}td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}th[_ngcontent-%COMP%]{padding:4px}.form-check[_ngcontent-%COMP%]{padding:10px 50px}.form-check-input[_ngcontent-%COMP%]:checked{background-color:var(--primary-color);border-color:var(--primary-color)}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0}.atag_btn[_ngcontent-%COMP%]{display:flex}.content-header[_ngcontent-%COMP%]{height:54px;background:rgb(255,249,240)}.prime[_ngcontent-%COMP%]{margin:0}.items[_ngcontent-%COMP%]{display:flex;align-items:center}.small-padding[_ngcontent-%COMP%]{padding:10px}label[_ngcontent-%COMP%]{font-weight:400;font-size:16px}.footer[_ngcontent-%COMP%]{background:rgb(240,221,219)}']
                    })
                }
                return i
            })();
            var it = f(77039),
                at = f(15806),
                z = f(14635),
                R = f(55469),
                I = f(80529);
            let rt = (() => {
                class i {
                    constructor(n) {
                        this.http = n, this.apiUrl1 = v.N.apiUrl + "/candidate/2.6/getApplicationData", this.apiUrl2 = v.N.apiUrl + "/candidate/2.6/printApplicationDetail"
                    }
                    getAdmitCardDetails(n, o, e) {
                        return this.http.get(`${this.apiUrl1}?registrationNo=${n}&examId=${o}&examYear=${e}`)
                    }
                    downloadAdmitCard(n, o, e) {
                        return this.http.get(`${this.apiUrl2}?registrationNo=${n}&examId=${o}&examYear=${e}`)
                    }
                    getExamName() {
                        return this.http.get(`${v.N.apiUrl}/admin/5.1/allExams`)
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.LFG(I.eN))
                    };
                    static# n = this.\u0275prov = t.Yz7({
                        token: i,
                        factory: i.\u0275fac,
                        providedIn: "root"
                    })
                }
                return i
            })();
            var lt = f(11341),
                ct = f(56633),
                st = f(45676);

            function Wt(i, c) {
                1 & i && (t.TgZ(0, "button", 27), t._uU(1, " Your payment is in pending state with bank "), t.qZA())
            }

            function Xt(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 28), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.prevToggle(e))
                    }), t._uU(1, " Applications Status "), t.qZA()
                }
            }

            function tn(i, c) {
                if (1 & i && (t.TgZ(0, "button", 29), t._uU(1, " Applications Details "), t.qZA()), 2 & i) {
                    const n = t.oxw(2).$implicit;
                    t.MGl("routerLink", "my-applications/", null == n || null == n.doc ? null : n.doc.examId, "")
                }
            }

            function nn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToOptionCumPreferenceByExamId(e.doc.examId, e))
                    }), t._uU(1, " Select Preference "), t.qZA()
                }
            }

            function en(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.uploadPhotoSignRedirect(e))
                    }), t._uU(1, " Upload Photo/Sign "), t.qZA()
                }
            }

            function on(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.makePayment(e))
                    }), t._uU(1, " Make Payment "), t.qZA()
                }
            }

            function an(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function rn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.uploadDocuments(e))
                    }), t._uU(1, " Upload Documents "), t.qZA()
                }
            }

            function ln(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.reApply(e))
                    }), t._uU(1, " Re Apply "), t.qZA()
                }
            }

            function cn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.checkResumeApp(e.examData.examCode, e.doc.applicationId, e.doc.notificationId))
                    }), t._uU(1, " Continue "), t.qZA()
                }
            }

            function sn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToAdmitCardScreen(e))
                    }), t._uU(1, " Download Admit Card "), t.qZA()
                }
            }

            function dn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t._uU(1, " Answer Key Challenge "), t.qZA()
                }
            }

            function pn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.printApplication(e))
                    }), t._uU(1, " Print "), t.qZA()
                }
            }

            function fn(i, c) {
                if (1 & i && (t.TgZ(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "h3"), t._uU(4), t.qZA(), t.TgZ(5, "p", 9), t._uU(6), t.qZA()()(), t.TgZ(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "p", 13), t._uU(11, "Application Start Date"), t.qZA(), t.TgZ(12, "p", 14), t._uU(13), t.ALo(14, "date"), t.qZA()(), t.TgZ(15, "div", 12)(16, "p", 13), t._uU(17, "Application End Date"), t.qZA(), t.TgZ(18, "p", 15)(19, "span", 16), t._uU(20), t.ALo(21, "date"), t.qZA(), t._uU(22, "\xa0"), t.TgZ(23, "span", 17), t._uU(24), t.ALo(25, "date"), t.qZA()()(), t.TgZ(26, "div", 12)(27, "p", 13), t._uU(28, " Last Date for Online Fee payment "), t.qZA(), t.TgZ(29, "p", 15)(30, "span", 16), t._uU(31), t.ALo(32, "date"), t.qZA(), t._uU(33, "\xa0"), t.TgZ(34, "span", 17), t._uU(35), t.ALo(36, "date"), t.qZA()()(), t.TgZ(37, "div", 12)(38, "p", 13), t._uU(39, " Window for Application Form Correction and Online Payment of Correction Changes "), t.qZA(), t.TgZ(40, "p", 15)(41, "span", 16), t._uU(42), t.ALo(43, "date"), t.ALo(44, "date"), t.qZA(), t.TgZ(45, "span", 17), t._uU(46), t.ALo(47, "date"), t.qZA()()(), t.YNc(48, Wt, 2, 0, "button", 18), t.qZA(), t.TgZ(49, "div", 19)(50, "div", 20), t._UZ(51, "div", 21), t.TgZ(52, "div", 22), t.YNc(53, Xt, 2, 0, "button", 23), t.YNc(54, tn, 2, 1, "button", 24), t.YNc(55, nn, 2, 0, "button", 25), t.YNc(56, en, 2, 0, "button", 25), t.YNc(57, on, 2, 0, "button", 25), t.ALo(58, "date"), t.YNc(59, an, 2, 0, "button", 25), t.ALo(60, "date"), t.YNc(61, rn, 2, 0, "button", 25), t.YNc(62, ln, 2, 0, "button", 25), t.ALo(63, "date"), t.YNc(64, cn, 2, 0, "button", 25), t.YNc(65, sn, 2, 0, "button", 26), t.YNc(66, dn, 2, 0, "button", 26), t.YNc(67, pn, 2, 0, "button", 25), t.qZA()()()()()), 2 & i) {
                    const n = t.oxw().$implicit,
                        o = t.oxw(2);
                    t.xp6(1), t.Tol("CTGD" === (null == n || null == n.examData ? null : n.examData.examCode) ? "card-header-l" : ""), t.xp6(3), t.Oqu(null == n || null == n.examData ? null : n.examData.examName), t.xp6(2), t.hij(" ", null == n || null == n.liveExamData ? null : n.liveExamData.examDescription, " "), t.xp6(7), t.hij(" ", t.xi3(14, 25, null == n || null == n.liveExamData ? null : n.liveExamData.applicationStartDate, "dd/MM/yyyy"), " "), t.xp6(7), t.Oqu(t.xi3(21, 28, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(25, 31, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(32, 34, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(36, 37, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "hh:mm a"), ")"), t.xp6(7), t.AsE("", t.xi3(43, 40, null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate, "dd/MM/yyyy"), " - ", t.xi3(44, 43, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "dd/MM/yyyy"), " "), t.xp6(4), t.hij("(up to ", t.xi3(47, 46, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "hh:mm a"), ")"), t.xp6(2), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && "Pending" == (null == n || null == n.associatedApplications[0] || null == n.associatedApplications[0].transactionDetails ? null : n.associatedApplications[0].transactionDetails.paymentStatus) && (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo))), t.xp6(5), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length > 1 || (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) > 1), t.xp6(1), t.Q6J("ngIf", o.setPreferenceBtnEnabled(n)), t.xp6(1), t.Q6J("ngIf", (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo)) && "CHSL" == (null == n || null == n.examData ? null : n.examData.examCode) && (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo))), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && !(null != n && null != n.doc && n.doc.isAppPaymentDone) && t.xi3(58, 49, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "YYYY-MM-dd") > o.todayDate), t.xp6(2), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && t.xi3(60, 52, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "YYYY-MM-dd") > o.todayDate && ("Pending" == (null == n || null == n.associatedApplications[0] || null == n.associatedApplications[0].transactionDetails ? null : n.associatedApplications[0].transactionDetails.paymentStatus) || (null == n || null == n.doc ? null : n.doc.transactionNo) && !(null != n && null != n.doc && n.doc.isAppPaymentDone))), t.xp6(2), t.Q6J("ngIf", (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && "Application Cancelled" != (null == n || null == n.doc ? null : n.doc.applicationStatus) && o.displayUploadDocument && "RHQ" == (null == n || null == n.examData ? null : n.examData.examCode) && !0 === (null == n || null == n.doc ? null : n.doc.isSelected)), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && t.xi3(63, 55, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "YYYY-MM-dd") >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate) <= o.todayDate && "Application Cancelled" != (null == n || null == n.doc ? null : n.doc.applicationStatus) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(2), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && !(null != n && null != n.doc && n.doc.isAppFormSubmitted) && o.checkDateComparison(null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate)), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && (null == n || null == n.liveExamData ? null : n.liveExamData.admitCardEndDate) >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.admitCardStartDate) <= o.todayDate && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) && (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo))), t.xp6(1), t.Q6J("ngIf", o.setChallengeBtnEnabled(n)), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length))
                }
            }

            function un(i, c) {
                if (1 & i && (t.TgZ(0, "div", 33)(1, "div", 34)(2, "div", 35), t._uU(3, " Important: Your candidature has been rejected due to the following reason. "), t.qZA(), t.TgZ(4, "div", 36)(5, "div", 37)(6, "div")(7, "strong"), t._uU(8, "Rejection Reason: "), t.qZA()(), t.TgZ(9, "div"), t._uU(10), t.qZA()(), t.TgZ(11, "span", 38)(12, "i"), t._uU(13, 'Please rectify the above in the "Correction Window"'), t.qZA()()()()()), 2 & i) {
                    const n = t.oxw(2).$implicit;
                    t.xp6(10), t.hij(" ", null == n || null == n.associatedApplications[0] ? null : n.associatedApplications[0].description, ". ")
                }
            }

            function gn(i, c) {
                1 & i && (t.TgZ(0, "button", 27), t._uU(1, " Your payment is in pending state with bank "), t.qZA())
            }

            function mn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 28), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.prevToggle(e))
                    }), t._uU(1, " Applications Status "), t.qZA()
                }
            }

            function _n(i, c) {
                if (1 & i && (t.TgZ(0, "button", 29), t._uU(1, " Applications Details "), t.qZA()), 2 & i) {
                    const n = t.oxw(2).$implicit;
                    t.MGl("routerLink", "my-applications/", null == n || null == n.doc ? null : n.doc.examId, "")
                }
            }

            function hn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToOptionCumPreferenceByExamId(e.doc.examId, e))
                    }), t._uU(1, " Select Preference "), t.qZA()
                }
            }

            function xn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.makePayment(e))
                    }), t._uU(1, " Make Payment "), t.qZA()
                }
            }

            function bn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.uploadPhotoSignRedirect(e))
                    }), t._uU(1, " Upload Photo/Sign "), t.qZA()
                }
            }

            function yn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function vn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.uploadDocuments(e))
                    }), t._uU(1, " Upload Documents "), t.qZA()
                }
            }

            function wn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.reApply(e))
                    }), t._uU(1, " Re Apply "), t.qZA()
                }
            }

            function Cn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.checkResumeApp(e.examData.examCode, e.doc.applicationId, e.doc.notificationId))
                    }), t._uU(1, " Continue "), t.qZA()
                }
            }

            function Pn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToAdmitCardScreen(e))
                    }), t._uU(1, " Download Admit Card "), t.qZA()
                }
            }

            function Mn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t._uU(1, " Answer Key Challenge "), t.qZA()
                }
            }

            function An(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.printApplication(e))
                    }), t._uU(1, " Print "), t.qZA()
                }
            }

            function Sn(i, c) {
                if (1 & i && (t.TgZ(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "h3"), t._uU(4), t.qZA(), t.TgZ(5, "p", 9), t._uU(6), t.qZA()()(), t.TgZ(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "p", 13), t._uU(11, "Application Start Date"), t.qZA(), t.TgZ(12, "p", 14), t._uU(13), t.ALo(14, "date"), t.qZA()(), t.TgZ(15, "div", 12)(16, "p", 13), t._uU(17, "Application End Date"), t.qZA(), t.TgZ(18, "p", 15)(19, "span", 16), t._uU(20), t.ALo(21, "date"), t.qZA(), t._uU(22, "\xa0"), t.TgZ(23, "span", 17), t._uU(24), t.ALo(25, "date"), t.qZA()()(), t.TgZ(26, "div", 12)(27, "p", 13), t._uU(28, " Last Date for Online Fee payment "), t.qZA(), t.TgZ(29, "p", 15)(30, "span", 16), t._uU(31), t.ALo(32, "date"), t.qZA(), t._uU(33, "\xa0"), t.TgZ(34, "span", 17), t._uU(35), t.ALo(36, "date"), t.qZA()()(), t.TgZ(37, "div", 12)(38, "p", 13), t._uU(39, " Window for Application Form Correction and Online Payment of Correction Changes "), t.qZA(), t.TgZ(40, "p", 15)(41, "span", 16), t._uU(42), t.ALo(43, "date"), t.ALo(44, "date"), t.qZA(), t.TgZ(45, "span", 17), t._uU(46), t.ALo(47, "date"), t.qZA()()(), t.YNc(48, un, 14, 1, "div", 32), t.YNc(49, gn, 2, 0, "button", 18), t.qZA(), t.TgZ(50, "div", 19)(51, "div", 20), t._UZ(52, "div", 21), t.TgZ(53, "div", 22), t.YNc(54, mn, 2, 0, "button", 23), t.YNc(55, _n, 2, 1, "button", 24), t.YNc(56, hn, 2, 0, "button", 25), t.YNc(57, xn, 2, 0, "button", 25), t.YNc(58, bn, 2, 0, "button", 25), t.YNc(59, yn, 2, 0, "button", 25), t.ALo(60, "date"), t.YNc(61, vn, 2, 0, "button", 25), t.YNc(62, wn, 2, 0, "button", 25), t.ALo(63, "date"), t.YNc(64, Cn, 2, 0, "button", 25), t.YNc(65, Pn, 2, 0, "button", 26), t.YNc(66, Mn, 2, 0, "button", 26), t.YNc(67, An, 2, 0, "button", 25), t.qZA()()()()()), 2 & i) {
                    const n = t.oxw().$implicit,
                        o = t.oxw(2);
                    t.xp6(1), t.Tol("CTGD" === (null == n || null == n.examData ? null : n.examData.examCode) ? "card-header-l" : ""), t.xp6(3), t.Oqu(null == n || null == n.examData ? null : n.examData.examName), t.xp6(2), t.hij(" ", null == n || null == n.liveExamData ? null : n.liveExamData.examDescription, " "), t.xp6(7), t.hij(" ", t.xi3(14, 26, null == n || null == n.liveExamData ? null : n.liveExamData.applicationStartDate, "dd/MM/yyyy"), " "), t.xp6(7), t.Oqu(t.xi3(21, 29, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(25, 32, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(32, 35, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(36, 38, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "hh:mm a"), ")"), t.xp6(7), t.AsE("", t.xi3(43, 41, null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate, "dd/MM/yyyy"), " - ", t.xi3(44, 44, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "dd/MM/yyyy"), " "), t.xp6(4), t.hij("(up to ", t.xi3(47, 47, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "hh:mm a"), ")"), t.xp6(2), t.Q6J("ngIf", (null == n ? null : n.associatedApplications[0]) && (null == n || null == n.associatedApplications[0] ? null : n.associatedApplications[0].isRejected)), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && "Pending" == (null == n || null == n.associatedApplications[0] || null == n.associatedApplications[0].transactionDetails ? null : n.associatedApplications[0].transactionDetails.paymentStatus)), t.xp6(5), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length > 1 || (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) > 1), t.xp6(1), t.Q6J("ngIf", o.setPreferenceBtnEnabled(n)), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && !(null != n && null != n.doc && n.doc.isAppPaymentDone) && o.checkDateComparison(null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee)), t.xp6(1), t.Q6J("ngIf", (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo)) && "CHSL" == (null == n || null == n.examData ? null : n.examData.examCode)), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && t.xi3(60, 50, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "YYYY-MM-dd") >= o.todayDate && ("Pending" == (null == n || null == n.associatedApplications[0] || null == n.associatedApplications[0].transactionDetails ? null : n.associatedApplications[0].transactionDetails.paymentStatus) || (null == n || null == n.doc ? null : n.doc.transactionNo) && !(null != n && null != n.doc && n.doc.isAppPaymentDone))), t.xp6(2), t.Q6J("ngIf", (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && "Application Cancelled" != (null == n || null == n.doc ? null : n.doc.applicationStatus) && o.displayUploadDocument && "RHQ" == (null == n || null == n.examData ? null : n.examData.examCode) && !0 === (null == n || null == n.doc ? null : n.doc.isSelected)), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && t.xi3(63, 53, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "YYYY-MM-dd") >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate) <= o.todayDate && "Application Cancelled" != (null == n || null == n.doc ? null : n.doc.applicationStatus) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(2), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && !(null != n && null != n.doc && n.doc.isAppFormSubmitted) && o.checkDateComparison(null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate)), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && (null == n || null == n.liveExamData ? null : n.liveExamData.admitCardEndDate) >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.admitCardStartDate) <= o.todayDate && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && (null == n || null == n.liveExamData ? null : n.liveExamData.answerKeyEndDate) >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.answerKeyStartDate) <= o.todayDate && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length))
                }
            }

            function On(i, c) {
                if (1 & i && (t.ynx(0), t.YNc(1, fn, 68, 58, "div", 5), t.YNc(2, Sn, 68, 56, "div", 5), t.BQk()), 2 & i) {
                    const n = c.$implicit,
                        o = t.oxw(2);
                    t.xp6(1), t.Q6J("ngIf", o.reliveExamList.indexOf(null == n || null == n.examData ? null : n.examData.examCode) > -1), t.xp6(1), t.Q6J("ngIf", -1 == o.reliveExamList.indexOf(null == n || null == n.examData ? null : n.examData.examCode))
                }
            }

            function Nn(i, c) {
                1 & i && (t.ynx(0), t.TgZ(1, "div", 39)(2, "div", 40)(3, "div", 41), t._UZ(4, "img", 42), t.TgZ(5, "p", 43), t._uU(6, "No Data Available !"), t.qZA()()()(), t.BQk())
            }

            function Zn(i, c) {
                if (1 & i && (t.TgZ(0, "div", 1)(1, "div", 2), t.YNc(2, On, 3, 2, "ng-container", 3), t.qZA(), t.YNc(3, Nn, 7, 0, "ng-container", 4), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(2), t.Q6J("ngForOf", n.myApplicationData), t.xp6(1), t.Q6J("ngIf", 0 == (null == n.myApplicationData ? null : n.myApplicationData.length))
                }
            }

            function kn(i, c) {
                1 & i && (t.TgZ(0, "button", 27), t._uU(1, " Your payment is in pending state with bank "), t.qZA())
            }

            function Dn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.prevToggle(e))
                    }), t._uU(1, " Application Status "), t.qZA()
                }
            }

            function Tn(i, c) {
                if (1 & i && (t.TgZ(0, "button", 29), t._uU(1, " Applications Details "), t.qZA()), 2 & i) {
                    const n = t.oxw(2).$implicit;
                    t.MGl("routerLink", "my-applications/", null == n || null == n.doc ? null : n.doc.examId, "")
                }
            }

            function En(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.uploadDocuments(e))
                    }), t._uU(1, " Upload Documents "), t.qZA()
                }
            }

            function In(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToOptionCumPreferenceByExamId(e.doc.examId, e))
                    }), t._uU(1, " Select Preference "), t.qZA()
                }
            }

            function Un(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToAdmitCardScreen(e))
                    }), t._uU(1, " Download Admit Card "), t.qZA()
                }
            }

            function qn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t._uU(1, " Answer Key Challenge "), t.qZA()
                }
            }

            function zn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.makePayment(e))
                    }), t._uU(1, " Make Payment "), t.qZA()
                }
            }

            function Bn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.uploadPhotoSignRedirect(e))
                    }), t._uU(1, " Upload Photo/Sign "), t.qZA()
                }
            }

            function Ln(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function Yn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.reApply(e))
                    }), t._uU(1, " Re Apply "), t.qZA()
                }
            }

            function Fn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.checkResumeApp(e.examData.examCode, e.doc.applicationId, e.doc.notificationId))
                    }), t._uU(1, " Continue "), t.qZA()
                }
            }

            function $n(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.printApplication(e))
                    }), t._uU(1, " Print "), t.qZA()
                }
            }

            function Jn(i, c) {
                if (1 & i && (t.TgZ(0, "div", 45)(1, "div", 46)(2, "div", 7)(3, "div", 8)(4, "h3"), t._uU(5), t.qZA(), t.TgZ(6, "p", 17), t._uU(7), t.qZA()()(), t.TgZ(8, "div", 10)(9, "div", 11)(10, "div", 47)(11, "p", 48), t._uU(12, "Application Start Date"), t.qZA(), t.TgZ(13, "p", 14), t._uU(14), t.ALo(15, "date"), t.qZA()(), t.TgZ(16, "div", 47)(17, "p", 48), t._uU(18, "Application End Date"), t.qZA(), t.TgZ(19, "p", 15)(20, "span", 16), t._uU(21), t.ALo(22, "date"), t.qZA(), t._uU(23, "\xa0"), t.TgZ(24, "span", 17), t._uU(25), t.ALo(26, "date"), t.qZA()()(), t.TgZ(27, "div", 47)(28, "p", 48), t._uU(29, "Last Date for Online Fee payment"), t.qZA(), t.TgZ(30, "p", 15)(31, "span", 16), t._uU(32), t.ALo(33, "date"), t.qZA(), t._uU(34, "\xa0"), t.TgZ(35, "span", 17), t._uU(36), t.ALo(37, "date"), t.qZA()()(), t.TgZ(38, "div", 47)(39, "p", 48), t._uU(40, " Window for Application Form Correction and Online Payment of Correction Changes "), t.qZA(), t.TgZ(41, "p", 15)(42, "span", 16), t._uU(43), t.ALo(44, "date"), t.ALo(45, "date"), t.qZA(), t._uU(46, "\xa0"), t.TgZ(47, "span", 17), t._uU(48), t.ALo(49, "date"), t.qZA()()(), t.YNc(50, kn, 2, 0, "button", 49), t.TgZ(51, "div", 50)(52, "div", 20), t._UZ(53, "div", 21), t.TgZ(54, "div", 22), t.YNc(55, Dn, 2, 0, "button", 25), t.YNc(56, Tn, 2, 1, "button", 24), t.YNc(57, En, 2, 0, "button", 25), t.YNc(58, In, 2, 0, "button", 26), t.YNc(59, Un, 2, 0, "button", 26), t.YNc(60, qn, 2, 0, "button", 26), t.YNc(61, zn, 2, 0, "button", 25), t.YNc(62, Bn, 2, 0, "button", 25), t.YNc(63, Ln, 2, 0, "button", 25), t.ALo(64, "date"), t.YNc(65, Yn, 2, 0, "button", 25), t.ALo(66, "date"), t.YNc(67, Fn, 2, 0, "button", 25), t.YNc(68, $n, 2, 0, "button", 25), t.qZA()()()()()()()), 2 & i) {
                    const n = t.oxw().$implicit,
                        o = t.oxw(2);
                    t.xp6(2), t.Tol("CTGD" === (null == n || null == n.examData ? null : n.examData.examCode) ? "card-header-l" : ""), t.xp6(3), t.Oqu(null == n || null == n.examData ? null : n.examData.examName), t.xp6(2), t.Oqu(null == n || null == n.liveExamData ? null : n.liveExamData.examDescription), t.xp6(7), t.hij(" ", t.xi3(15, 25, null == n || null == n.liveExamData ? null : n.liveExamData.applicationStartDate, "dd/MM/yyyy"), " "), t.xp6(7), t.Oqu(t.xi3(22, 28, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(26, 31, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(33, 34, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(37, 37, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "hh:mm a"), ")"), t.xp6(7), t.AsE("", t.xi3(44, 40, null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate, "dd/MM/yyyy"), " - ", t.xi3(45, 43, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "dd/MM/yyyy"), ""), t.xp6(5), t.hij("(up to ", t.xi3(49, 46, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "hh:mm a"), ")"), t.xp6(2), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && "Pending" == (null == n || null == n.associatedApplications[0] || null == n.associatedApplications[0].transactionDetails ? null : n.associatedApplications[0].transactionDetails.paymentStatus)), t.xp6(5), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) > 1 || (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) > 1), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && "Application Cancelled" != (null == n || null == n.doc ? null : n.doc.applicationStatus) && o.displayUploadDocument && "RHQ" == (null == n || null == n.examData ? null : n.examData.examCode) && !0 === (null == n || null == n.doc ? null : n.doc.isSelected)), t.xp6(1), t.Q6J("ngIf", o.setPreferenceBtnEnabled(n)), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && (null == n || null == n.liveExamData ? null : n.liveExamData.admitCardEndDate) >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.admitCardStartDate) <= o.todayDate && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) && (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo))), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && (null == n || null == n.liveExamData ? null : n.liveExamData.answerKeyEndDate) >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.answerKeyStartDate) <= o.todayDate && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) && (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo))), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && !(null != n && null != n.doc && n.doc.isAppPaymentDone) && o.checkDateComparison(null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee)), t.xp6(1), t.Q6J("ngIf", (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo)) && "CHSL" == (null == n || null == n.examData ? null : n.examData.examCode) && (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo))), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && t.xi3(64, 49, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "YYYY-MM-dd") >= o.todayDate && "Pending" == (null == n || null == n.associatedApplications[0] || null == n.associatedApplications[0].transactionDetails ? null : n.associatedApplications[0].transactionDetails.paymentStatus) || (null == n || null == n.doc ? null : n.doc.transactionNo) && !(null != n && null != n.doc && n.doc.isAppPaymentDone)), t.xp6(2), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && t.xi3(66, 52, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "YYYY-MM-dd") >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate) <= o.todayDate && "Application Cancelled" != (null == n || null == n.doc ? null : n.doc.applicationStatus) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(2), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && !(null != n && null != n.doc && n.doc.isAppFormSubmitted) && o.checkDateComparison(null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate)), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length))
                }
            }

            function jn(i, c) {
                if (1 & i && (t.TgZ(0, "div", 33)(1, "div", 34)(2, "div", 35), t._uU(3, " Important: Your candidature has been rejected due to the following reason. "), t.qZA(), t.TgZ(4, "div", 36)(5, "span"), t._uU(6), t.qZA(), t.TgZ(7, "span", 38)(8, "i"), t._uU(9, 'Please rectify the above in the "Correction Window"'), t.qZA()()()()()), 2 & i) {
                    const n = t.oxw(2).$implicit;
                    t.xp6(6), t.hij("", null == n || null == n.associatedApplications[0] ? null : n.associatedApplications[0].description, ".")
                }
            }

            function Qn(i, c) {
                1 & i && (t.TgZ(0, "button", 27), t._uU(1, " Your payment is in pending state with bank "), t.qZA())
            }

            function Rn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.prevToggle(e))
                    }), t._uU(1, " Application Status "), t.qZA()
                }
            }

            function Hn(i, c) {
                if (1 & i && (t.TgZ(0, "button", 29), t._uU(1, " Applications Details "), t.qZA()), 2 & i) {
                    const n = t.oxw(2).$implicit;
                    t.MGl("routerLink", "my-applications/", null == n || null == n.doc ? null : n.doc.examId, "")
                }
            }

            function Kn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.uploadDocuments(e))
                    }), t._uU(1, " Upload Documents "), t.qZA()
                }
            }

            function Gn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToOptionCumPreferenceByExamId(e.doc.examId, e))
                    }), t._uU(1, " Select Preference "), t.qZA()
                }
            }

            function Vn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToAdmitCardScreen(e))
                    }), t._uU(1, " Download Admit Card "), t.qZA()
                }
            }

            function Wn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 31), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t._uU(1, " Answer Key Challenge "), t.qZA()
                }
            }

            function Xn(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.makePayment(e))
                    }), t._uU(1, " Make Payment "), t.qZA()
                }
            }

            function te(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function ne(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.uploadPhotoSignRedirect(e))
                    }), t._uU(1, " Upload Photo/Sign "), t.qZA()
                }
            }

            function ee(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.reApply(e))
                    }), t._uU(1, " Re Apply "), t.qZA()
                }
            }

            function oe(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.checkResumeApp(e.examData.examCode, e.doc.applicationId, e.doc.notificationId))
                    }), t._uU(1, " Continue "), t.qZA()
                }
            }

            function ie(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 30), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw(2).$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.printApplication(e))
                    }), t._uU(1, " Print "), t.qZA()
                }
            }

            function ae(i, c) {
                if (1 & i && (t.TgZ(0, "div", 45)(1, "div", 46)(2, "div", 7)(3, "div", 8)(4, "h3"), t._uU(5), t.qZA(), t.TgZ(6, "p", 17), t._uU(7), t.qZA()()(), t.TgZ(8, "div", 10)(9, "div", 11)(10, "div", 47)(11, "p", 48), t._uU(12, "Application Start Date"), t.qZA(), t.TgZ(13, "p", 14), t._uU(14), t.ALo(15, "date"), t.qZA()(), t.TgZ(16, "div", 47)(17, "p", 48), t._uU(18, "Application End Date"), t.qZA(), t.TgZ(19, "p", 15)(20, "span", 16), t._uU(21), t.ALo(22, "date"), t.qZA(), t._uU(23, "\xa0"), t.TgZ(24, "span", 17), t._uU(25), t.ALo(26, "date"), t.qZA()()(), t.TgZ(27, "div", 47)(28, "p", 48), t._uU(29, "Last Date for Online Fee payment"), t.qZA(), t.TgZ(30, "p", 15)(31, "span", 16), t._uU(32), t.ALo(33, "date"), t.qZA(), t._uU(34, "\xa0"), t.TgZ(35, "span", 17), t._uU(36), t.ALo(37, "date"), t.qZA()()(), t.TgZ(38, "div", 47)(39, "p", 48), t._uU(40, " Window for Application Form Correction and Online Payment of Correction Changes "), t.qZA(), t.TgZ(41, "p", 15)(42, "span", 16), t._uU(43), t.ALo(44, "date"), t.ALo(45, "date"), t.qZA(), t._uU(46, "\xa0"), t.TgZ(47, "span", 17), t._uU(48), t.ALo(49, "date"), t.qZA()()(), t.YNc(50, jn, 10, 1, "div", 32), t.YNc(51, Qn, 2, 0, "button", 49), t.TgZ(52, "div", 50)(53, "div", 20), t._UZ(54, "div", 21), t.TgZ(55, "div", 22), t.YNc(56, Rn, 2, 0, "button", 25), t.YNc(57, Hn, 2, 1, "button", 24), t.YNc(58, Kn, 2, 0, "button", 25), t.YNc(59, Gn, 2, 0, "button", 26), t.YNc(60, Vn, 2, 0, "button", 26), t.YNc(61, Wn, 2, 0, "button", 26), t.YNc(62, Xn, 2, 0, "button", 25), t.ALo(63, "date"), t.YNc(64, te, 2, 0, "button", 25), t.ALo(65, "date"), t.YNc(66, ne, 2, 0, "button", 25), t.YNc(67, ee, 2, 0, "button", 25), t.ALo(68, "date"), t.YNc(69, oe, 2, 0, "button", 25), t.YNc(70, ie, 2, 0, "button", 25), t.qZA()()()()()()()), 2 & i) {
                    const n = t.oxw().$implicit,
                        o = t.oxw(2);
                    t.xp6(2), t.Tol("CTGD" === (null == n || null == n.examData ? null : n.examData.examCode) ? "card-header-l" : ""), t.xp6(3), t.Oqu(null == n || null == n.examData ? null : n.examData.examName), t.xp6(2), t.Oqu(null == n || null == n.liveExamData ? null : n.liveExamData.examDescription), t.xp6(7), t.hij(" ", t.xi3(15, 26, null == n || null == n.liveExamData ? null : n.liveExamData.applicationStartDate, "dd/MM/yyyy"), " "), t.xp6(7), t.Oqu(t.xi3(22, 29, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(26, 32, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(33, 35, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(37, 38, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "hh:mm a"), ")"), t.xp6(7), t.AsE("", t.xi3(44, 41, null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate, "dd/MM/yyyy"), " - ", t.xi3(45, 44, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "dd/MM/yyyy"), ""), t.xp6(5), t.hij("(up to ", t.xi3(49, 47, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "hh:mm a"), ")"), t.xp6(2), t.Q6J("ngIf", (null == n ? null : n.associatedApplications[0]) && (null == n || null == n.associatedApplications[0] ? null : n.associatedApplications[0].isRejected)), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && "Pending" == (null == n || null == n.associatedApplications[0] || null == n.associatedApplications[0].transactionDetails ? null : n.associatedApplications[0].transactionDetails.paymentStatus)), t.xp6(5), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) > 1 || (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) > 1), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && "Application Cancelled" != (null == n || null == n.doc ? null : n.doc.applicationStatus) && o.displayUploadDocument && "RHQ" == (null == n || null == n.examData ? null : n.examData.examCode) && !0 === (null == n || null == n.doc ? null : n.doc.isSelected)), t.xp6(1), t.Q6J("ngIf", o.setPreferenceBtnEnabled(n)), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && (null == n || null == n.liveExamData ? null : n.liveExamData.admitCardEndDate) >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.admitCardStartDate) <= o.todayDate && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && (null == n || null == n.liveExamData ? null : n.liveExamData.answerKeyEndDate) >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.answerKeyStartDate) <= o.todayDate && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && !(null != n && null != n.doc && n.doc.isAppPaymentDone) && t.xi3(63, 50, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "YYYY-MM-dd") > o.todayDate), t.xp6(2), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && t.xi3(65, 53, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "YYYY-MM-dd") > o.todayDate && "Pending" == (null == n || null == n.associatedApplications[0] || null == n.associatedApplications[0].transactionDetails ? null : n.associatedApplications[0].transactionDetails.paymentStatus) || (null == n || null == n.doc ? null : n.doc.transactionNo) && !(null != n && null != n.doc && n.doc.isAppPaymentDone)), t.xp6(2), t.Q6J("ngIf", (null == o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.allowedRegistrationNumbers[null == n || null == n.examData ? null : n.examData.examCode].includes(o.registrationNo)) && "CHSL" == (null == n || null == n.examData ? null : n.examData.examCode)), t.xp6(1), t.Q6J("ngIf", 1 == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length && (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && t.xi3(68, 56, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "YYYY-MM-dd") >= o.todayDate && (null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate) <= o.todayDate && "Application Cancelled" != (null == n || null == n.doc ? null : n.doc.applicationStatus) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(2), t.Q6J("ngIf", 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && !(null != n && null != n.doc && n.doc.isAppFormSubmitted) && o.checkDateComparison(null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate)), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.doc ? null : n.doc.isAppFormSubmitted) && (null == n || null == n.doc ? null : n.doc.isAppPaymentDone) && 1 == (null == o.groupedData[null == n || null == n.examData ? null : n.examData.examCode] ? null : o.groupedData[null == n || null == n.examData ? null : n.examData.examCode].length) && 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length))
                }
            }

            function re(i, c) {
                if (1 & i && (t.ynx(0), t.YNc(1, Jn, 69, 55, "div", 44), t.YNc(2, ae, 71, 59, "div", 44), t.BQk()), 2 & i) {
                    const n = c.$implicit,
                        o = t.oxw(2);
                    t.xp6(1), t.Q6J("ngIf", o.reliveExamList.indexOf(null == n || null == n.examData ? null : n.examData.examCode) > -1), t.xp6(1), t.Q6J("ngIf", -1 == o.reliveExamList.indexOf(null == n || null == n.examData ? null : n.examData.examCode))
                }
            }

            function le(i, c) {
                1 & i && (t.ynx(0), t.TgZ(1, "div", 51)(2, "div", 40)(3, "div", 41), t._UZ(4, "img", 42), t.TgZ(5, "p", 43), t._uU(6, "No Data Available !"), t.qZA()()()(), t.BQk())
            }

            function ce(i, c) {
                if (1 & i && (t.TgZ(0, "div", 1), t.YNc(1, re, 3, 2, "ng-container", 3), t.YNc(2, le, 7, 0, "ng-container", 4), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", n.myApplicationData), t.xp6(1), t.Q6J("ngIf", 0 == (null == n.myApplicationData ? null : n.myApplicationData.length))
                }
            }
            let se = (() => {
                class i {
                    constructor(n, o, e, a, d, u, b, y, A, S, k, O, G) {
                        this.dialog = n, this.router = o, this.dashboardService = e, this.tokenService = a, this.jeService = d, this.rhqService = u, this.masterService = b, this.rhqApplicationService = y, this.route = A, this.admitCard = S, this.answerKey = k, this.dialogService = O, this.subInspectorService = G, this.showPreview = !1, this.homeScreenVisible = !1, this.view = "card", this.previewData = "Riya shukla", this.uploadData = "Upload-doc", this.registrationNo = "", this.myApplicationData = [], this.payment = !1, this.reliveExamList = [], this.displayButton = !1, this.displayUploadDocument = !1;
                        const V = new Date;
                        let W = new Intl.DateTimeFormat("en-CA", {
                            timeZone: "Asia/Kolkata",
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        }).format(V);
                        this.todayDate = W
                    }
                    ngOnInit() {
                        var n = this;
                        return (0, E.Z)(function*() {
                            n.displayUploadDocument = v.N.showUploadDocument, sessionStorage.removeItem("printData"), sessionStorage.removeItem("print");
                            let o = n.tokenService.getDecoded();
                            [n.reliveExamList, n.allowedRegistrationNumbers] = yield n.dashboardService.setReLiveExams(), o && (n.userId = o.userId, n.registrationNo = o.username, n.getMyApplicationList()), n.getRegion(), n.allowedRegistrationNumbers.CHSL && (n.displayButton = !0)
                        })()
                    }
                    reApply(n) {
                        const o = n ? .examData ? .examCode.toLowerCase();
                        this.router.navigate("capf" == o ? [`/si-application-form/si-personal-details/${n.doc.notificationId}/${n.associatedApplications[0].id}`] : "rhq" == o ? [`/rhq-application-form/personal-details/reApply/${n.doc.notificationId}/${n.associatedApplications[0].id}`] : "je" == o ? [`/je-application-form/personal-details/${n.doc.notificationId}/${n.associatedApplications[0].id}`] : [`/${o}-application-form/personal-details/${n?.doc?.notificationId}/${n?.doc?.applicationId}/true`])
                    }
                    getRegion() {
                        this.masterService.getRegion().subscribe(n => {
                            this.regions = n.data
                        })
                    }
                    prevToggle(n) {
                        let o = n ? .associatedApplications[0],
                            e = n ? .liveExamData.fee,
                            a = this.regions.find(b => b.id == o ? .postRegion);
                        o.postRegionInitial = a ? .initials || "-", o.examName = n.examData.examName, o.examCode = n.examData.examCode, o.examYear = n.doc.examYear;
                        let d = "status" + n.examData.examCode.toLowerCase() + n.doc.examYear;
                        o.applicationStatus = o[d] ? .displayValue, o.myApplicationData = n.doc, o.examFee = e, this.dialog.open(Q, {
                            width: "70%",
                            minHeight: "calc(100vh - 90px)",
                            height: "auto",
                            exitAnimationDuration: 0,
                            enterAnimationDuration: 0,
                            data: {
                                result: o
                            }
                        })
                    }
                    uploadPreview() {
                        this.dialog.open(Vt, {
                            width: "70%",
                            minHeight: "calc(100vh - 90px)",
                            height: "auto",
                            exitAnimationDuration: 0,
                            enterAnimationDuration: 0,
                            data: {
                                result: this.uploadData
                            }
                        })
                    }
                    onViewDoc() {
                        this.router.navigate(["/payment-status"])
                    }
                    navigateToAdmitCardScreen(n) {
                        this.elements = n, this.admitCard.ExamsData = this.elements, sessionStorage.setItem("examData", JSON.stringify(this.elements)), this.route.navigateByUrl("admit-card")
                    }
                    navigateToChallengeScreen(n) {
                        this.answerKeyElements = {
                            examId: n ? .doc ? .examId,
                            examYear: n ? .doc ? .examYear,
                            examName: n ? .examData ? .examName,
                            examCode: n ? .doc ? .examCode ? n ? .doc ? .examCode : n ? .examData ? .examName,
                            notificationId: n ? .doc ? .notificationId
                        }, sessionStorage.setItem("examDataForAnswerKey", JSON.stringify(this.answerKeyElements)), this.homeScreenVisible = !0, this.dialog.open(it.H, {
                            width: "70%",
                            minHeight: "calc(100vh - 90px)",
                            height: "auto",
                            exitAnimationDuration: 0,
                            enterAnimationDuration: 0,
                            data: {
                                result: this.answerKeyElements
                            }
                        })
                    }
                    getMyApplicationList() {
                        this.registrationNo && this.dashboardService.getMyApplications(this.registrationNo).subscribe(n => {
                            if ("200" === n.statusCode) {
                                this.myApplicationData = [];
                                let o = [];
                                this.allMyApplicationData = n.data, n.data.map(a => {
                                    if (!o.includes(a.examData.examCode)) {
                                        if ("rhq" === a.examData ? .examCode ? .toLowerCase()) {
                                            let d = n ? .data ? .find(u => "rhq" === u ? .examData ? .examCode ? .toLowerCase() && !0 === u ? .doc ? .isSelected);
                                            this.myApplicationData.push(d || a)
                                        } else this.myApplicationData.push(a);
                                        o.push(a.examData.examCode)
                                    }
                                    this.groupedData = n.data.reduce(function(d, u) {
                                        return (d[u.examData.examCode] = d[u.examData.examCode] || []).push(u), d
                                    }, [])
                                })
                            }
                        }, n => {
                            this.dialog.open(x.I, {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: n ? .error ? .message
                                }
                            }).afterClosed().subscribe(o => {
                                this.router.navigate(["/dashboard"])
                            })
                        })
                    }
                    checkResumeApp(n, o, e) {
                        const a = n.toLowerCase();
                        "capf" === a ? this.subInspectorService.resumeAppStatus(o, e).subscribe(d => {
                            "200" === d.statusCode && this.router.navigate([`/si-application-form/si-personal-details/${e}`])
                        }) : "je" === a ? this.jeService.resumeAppStatus(o, e).subscribe(d => {
                            "200" === d.statusCode && this.router.navigate([`/je-application-form/personal-details/${e}`])
                        }) : "rhq" === a ? this.rhqService.resumeAppStatus(o, e).subscribe(d => {
                            "200" === d.statusCode && (this.rhqExamData = d.data, this.rhqHighQualification = this.rhqExamData.docs ? .tenthEducationBoardId, this.rhqExServiceMen = this.rhqExamData.docs.lengthOfService, this.rhqExamCenterPreference = this.rhqExamData.docs.examCentrePreferenceId1, this.router.navigate([`/rhq-application-form/personal-details/${e}`]))
                        }) : this.router.navigate(o ? [`/${a}-application-form/personal-details/${e}/${o}/false`] : [`/${a}-application-form/personal-details/${e}/null/false`])
                    }
                    navigateToOptionCumPreferenceForm() {
                        this.router.navigate([`dashboard/option-cum-preference/${this.myApplicationData[3].doc.examId}/${this.myApplicationData[3].doc.examYear}`])
                    }
                    navigateToOptionCumPreferenceByExamId(n, o) {
                        o.doc.examId && o.doc.examYear && o.examData.examCode ? this.dashboardService.checkForSelectedPreference({
                            examCode: o.examData.examCode,
                            examYear: o.doc.examYear
                        }).subscribe({
                            next: e => {
                                if ("200" == e ? .statusCode) {
                                    let a = this.tokenService.encryptData(JSON.stringify(e ? .data));
                                    sessionStorage.setItem("pref_desc", a.encryptedData);
                                    let d = this.tokenService.encryptKeyValue(o.doc.examId),
                                        u = this.tokenService.encryptKeyValue(o.doc.examYear),
                                        b = this.tokenService.encryptKeyValue(o.examData.examCode),
                                        y = this.tokenService.encryptKeyValue(o.doc.notificationId);
                                    this.router.navigate([`dashboard/option-cum-preference/${y.encryptedData}/${d.encryptedData}/${u.encryptedData}/${b.encryptedData}`])
                                } else this.dialog.open(x.I, {
                                    width: "380px",
                                    minHeight: "360px",
                                    height: "360px",
                                    data: {
                                        msgType: "Error",
                                        message: "Data not found to proceed to option form!"
                                    }
                                })
                            },
                            error: e => {
                                this.dialog.open(x.I, {
                                    width: "380px",
                                    minHeight: "360px",
                                    height: "360px",
                                    data: {
                                        msgType: "Error",
                                        message: "Internal server error!"
                                    }
                                })
                            }
                        }) : console.error("Exam ID not found!")
                    }
                    navigateToPreferenceWindow() {
                        let e, a, n = this.myApplicationData[0].doc.examId,
                            o = this.myApplicationData[0].doc.examYear;
                        this.dashboardService.getAppExamDetail({
                            examId: n,
                            examYear: o,
                            registrationNo: this.registrationNo
                        }).subscribe(u => {
                            e = u ? .data ? .find(b => !0 === b ? .examinationObjectDetails ? .isActive), e && (a = {
                                notificationId: e ? .applicationStatus ? .notificationId,
                                examId: n,
                                examYear: o,
                                gender: e ? .genderData ? .genderType,
                                isPwBD: e ? .examinationObjectDetails ? .isPwbd,
                                regNumber: this.registrationNo,
                                name: e ? .examinationObjectDetails ? .name,
                                newName: e ? .examinationObjectDetails ? .newName,
                                rollNum: e ? .examinationObjectDetails ? .applicationRollNum
                            }, this.dashboardService.getPreferenceData = a), this.router.navigate(["dashboard/option-cum-preference"])
                        })
                    }
                    printApplication(n) {
                        const o = n ? .examData ? .examCode.toLowerCase();
                        this.router.navigate("capf" == o ? [`/si-application-form/si-print-application/${n.associatedApplications[0]?.id}/${n?.doc?.notificationId}`] : "mtsc" == o ? [`/mts-civilian-application-form/mts-civilian-print-application/${n.associatedApplications[0]?.id}/${n?.doc?.notificationId}`] : "je" == o || "rhq" == o ? [`/${o}-application-form/print-application/${n.associatedApplications[0]?.id}/${n?.doc?.notificationId}`] : [`/${o}-application-form/print-application/${n?.doc?.notificationId}/${n.associatedApplications[0]?.id}`])
                    }
                    verifyPayment(n) {
                        this.rhqApplicationService.verifyPayments({
                            transactionNo: n ? .associatedApplications[0] ? .transactionDetails ? .transactionNo ? n ? .associatedApplications[0] ? .transactionDetails ? .transactionNo : n ? .doc ? .transactionNo,
                            myApplicationId: n ? .doc ? .id,
                            applicationId: n ? .associatedApplications[0] ? .id,
                            examCode: n ? .examData ? .examCode
                        }).subscribe(a => {
                            "200" == a.statusCode ? window.location.reload() : this.dialog.open(x.I, "203" == a.statusCode ? {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: "string" === a.error ? a.error : "Payment not found. Please make payment"
                                }
                            } : {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: "Payment is still pending, Please verify after some time"
                                }
                            })
                        })
                    }
                    uploadDocuments(n) {
                        console.log("obj?.doc?.notificationId", n ? .doc ? .notificationId), this.router.navigate([`/upload-documents/common-documents/${n?.doc?.notificationId}`])
                    }
                    uploadPhotoSignRedirect(n) {
                        this.dashboardService.getCompletedApplication(this.registrationNo, n ? .doc ? .notificationId).subscribe(o => {
                            "200" == o.statusCode ? (console.log("------------------\x3e", o.data), "CHSL" == n ? .examData ? .examCode && this.router.navigate([`/chsl-application-form/upload-documents/${n?.doc?.notificationId}/${o.data.id}/false`])) : this.dialog.open(x.I, {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: o.error
                                }
                            })
                        })
                    }
                    makePayment(n) {
                        console.log("obj", n), n.type = "fee", this.rhqApplicationService.checkForApplicationPayments(n.associatedApplications[0].id, n ? .doc ? .notificationId).subscribe(o => {
                            "200" == o.statusCode ? "01" == o.data.code || "02" == o.data.code ? this.dialog.open(x.I, {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: o.data.message
                                }
                            }) : (n = { ...n,
                                isPgActive: !0
                            }, this.dialog.open(tt.y, {
                                width: "70%",
                                minHeight: "calc(100vh - 90px)",
                                height: "auto",
                                exitAnimationDuration: 0,
                                enterAnimationDuration: 0,
                                data: {
                                    result: n
                                }
                            })) : this.dialog.open(x.I, {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: "Please pass required details to make the payment"
                                }
                            })
                        })
                    }
                    setChallengeBtnEnabled(n) {
                        let o = !1;
                        const e = n ? .examData ? .examCode,
                            a = this.allowedRegistrationNumbers[e] ? .includes(this.registrationNo),
                            d = this.groupedData[e].some(k => k.associatedApplications.some(O => "otvi8ir4jdmvitt" === O.statusId || "01" === O.statusId)),
                            u = n ? .liveExamData ? .answerKeyEndDate,
                            b = n ? .liveExamData ? .answerKeyStartDate,
                            y = this.todayDate;
                        return o = !!(a && d || d && u >= y && b <= y), o
                    }
                    setPreferenceBtnEnabled(n) {
                        let o = !1;
                        const e = n ? .examData ? .examCode,
                            a = this.allowedRegistrationNumbers[e] ? .includes(this.registrationNo),
                            d = this.groupedData[e].some(k => k.associatedApplications.some(O => "otvi8ir4jdmvitt" === O.statusId || "01" === O.statusId)),
                            u = n ? .liveExamData ? .postPrefStartDate,
                            b = n ? .liveExamData ? .postPrefEndDate,
                            y = this.todayDate,
                            A = a && d;
                        console.group(a);
                        const S = d && b >= y && u <= y;
                        return console.group(S), console.group(b <= y), o = !(!A && !S), o
                    }
                    marksBTN(n) {
                        let o = !1;
                        const e = n ? .examData ? .examCode,
                            a = this.allowedRegistrationNumbers[e] ? .includes(this.registrationNo),
                            d = this.groupedData[e].some(k => k.associatedApplications.some(O => "otvi8ir4jdmvitt" === O.statusId || "01" === O.statusId)),
                            u = n ? .liveExamData ? .answerKeyEndDate,
                            b = n ? .liveExamData ? .answerKeyStartDate,
                            y = this.todayDate;
                        return o = !!(a && d || d && u >= y && b <= y), o
                    }
                    checkDateComparison(n) {
                        return !(new Date((new Date).toLocaleString("en-US", {
                            timeZone: "Asia/Kolkata"
                        })) > this.convertDate(n))
                    }
                    convertDate(n) {
                        const o = new Date(n);
                        return new Date(o.toLocaleString("en-US", {
                            timeZone: "Asia/Kolkata"
                        }))
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(s.uw), t.Y36(g.F0), t.Y36(p.s), t.Y36(_.i), t.Y36(at.L), t.Y36(z.N), t.Y36(R.m), t.Y36(z.N), t.Y36(g.F0), t.Y36(rt), t.Y36(lt.t), t.Y36(ct.x), t.Y36(st.w))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-my-applications"]
                        ],
                        inputs: {
                            view: "view"
                        },
                        decls: 2,
                        vars: 2,
                        consts: [
                            ["class", "container", 4, "ngIf"],
                            [1, "container"],
                            [1, "row", "marginss", "pb20"],
                            [4, "ngFor", "ngForOf"],
                            [4, "ngIf"],
                            ["class", "card-block blocks card-wi border-cls marginss", 4, "ngIf"],
                            [1, "card-block", "blocks", "card-wi", "border-cls", "marginss"],
                            [1, "card-header"],
                            [1, "exam"],
                            [1, "small-font", "m0"],
                            [1, "card-body"],
                            [1, "card-content", "row"],
                            [1, "header", "col-md-6", "row-type"],
                            [1, "context-text", "small-font"],
                            [1, "content-text", "bold"],
                            [1, "content-text"],
                            [1, "bold"],
                            [1, "small-font"],
                            ["style", "text-align: left", "class", "trans-back", 4, "ngIf"],
                            [1, "card-footer"],
                            [1, "results"],
                            [1, "imgs"],
                            [1, "side-btn"],
                            ["class", "status-text", 3, "click", 4, "ngIf"],
                            ["class", "save-btn", 3, "routerLink", 4, "ngIf"],
                            ["class", "save-btn", 3, "click", 4, "ngIf"],
                            ["class", "save-btn", "style", "padding: 0", 3, "click", 4, "ngIf"],
                            [1, "trans-back", 2, "text-align", "left"],
                            [1, "status-text", 3, "click"],
                            [1, "save-btn", 3, "routerLink"],
                            [1, "save-btn", 3, "click"],
                            [1, "save-btn", 2, "padding", "0", 3, "click"],
                            ["class", "notes", 4, "ngIf"],
                            [1, "notes"],
                            [1, "msg"],
                            [1, "n_1"],
                            [1, "n_2"],
                            [1, "rgn"],
                            [1, "small"],
                            [1, "row", "pb20"],
                            [1, "center-alignn"],
                            [1, "exams"],
                            ["src", "assets/image/No-data2.svg", "height", "150"],
                            [1, "mt10"],
                            ["class", "row space", 4, "ngIf"],
                            [1, "row", "space"],
                            [1, "card-block", "col-md-12", "list-margin"],
                            [1, "header", "col-md-3", "row-type"],
                            [1, "context-text"],
                            ["class", "trans-back", "style", "text-align: left", 4, "ngIf"],
                            [1, "card-footers"],
                            [1, "row", "pb20", "mt30"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.YNc(0, Zn, 4, 2, "div", 0), t.YNc(1, ce, 3, 2, "div", 0)), 2 & o && (t.Q6J("ngIf", "card" === e.view), t.xp6(1), t.Q6J("ngIf", "list" === e.view))
                        },
                        dependencies: [l.sg, l.O5, g.rH, l.uU],
                        styles: [".card[_ngcontent-%COMP%]{border-radius:15px;padding:20px;position:relative;margin:0 0 20px}.admit-label[_ngcontent-%COMP%]{position:absolute;top:-10px;background-color:#fff;padding:0 8px;font-size:14px;color:#606060}.trans-back[_ngcontent-%COMP%]{margin:0}.imgs[_ngcontent-%COMP%]{display:flex;align-items:center}.img-class[_ngcontent-%COMP%]{padding:7px}.disabled[_ngcontent-%COMP%]{background-color:#b6b6b6}.results[_ngcontent-%COMP%]{height:72px;border-radius:5px;display:flex;justify-content:space-between;align-items:center}.gb[_ngcontent-%COMP%]{background-color:#188906!important;margin:0 5px}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.space[_ngcontent-%COMP%]{display:flex;margin:20px 10px}.side-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.pay-btn[_ngcontent-%COMP%]{background:rgb(241,241,241);padding:10px}.pay-button[_ngcontent-%COMP%]{padding:13px!important}.less-margin[_ngcontent-%COMP%]{margin-bottom:2px}.card-wi[_ngcontent-%COMP%]{width:49%}.save-btn[_ngcontent-%COMP%]{margin:10px 3px!important;padding:5px 15px!important;font-size:12px}.mt30[_ngcontent-%COMP%]{margin-top:30px}.exams[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.pb0[_ngcontent-%COMP%]{padding-bottom:0!important}.pdf-text[_ngcontent-%COMP%]{font-size:14px!important;margin:5px!important;font-size:12px}.status-text[_ngcontent-%COMP%]{font-size:12px!important;margin:5px!important;font-size:12px}.centers[_ngcontent-%COMP%]{justify-content:center!important;background-color:transparent!important;border:none!important}@media (max-width: 767.98px){.status-text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:#8e433e;margin:5px;text-align:center;display:flex;justify-content:center;background-color:transparent;border:none}}@media (max-width: 575.98px){h3[_ngcontent-%COMP%]{font-size:14px!important;margin-bottom:5px!important}.small-font[_ngcontent-%COMP%]{font-size:10px!important}}.notes[_ngcontent-%COMP%]{padding:5px;background:rgba(128,128,128,.0784313725)}.msg[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:9px}.msg[_ngcontent-%COMP%]   .n_1[_ngcontent-%COMP%]{font-weight:800}.msg[_ngcontent-%COMP%]   .n_2[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px;color:red}.msg[_ngcontent-%COMP%]   .n_2[_ngcontent-%COMP%]   .rgn[_ngcontent-%COMP%]{margin-bottom:5px!important}.msg[_ngcontent-%COMP%]   .n_2[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{font-size:12px!important;color:#000!important}"]
                    })
                }
                return i
            })();

            function de(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 24), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.prevToggle(e))
                    }), t._uU(1, " Applications Status "), t.qZA()
                }
            }

            function pe(i, c) {
                if (1 & i && (t.TgZ(0, "button", 25), t._uU(1, " Applications Details "), t.qZA()), 2 & i) {
                    const n = t.oxw().$implicit;
                    t.MGl("routerLink", "my-applications-history/", null == n || null == n.myApplication || null == n.myApplication.notificationMaster ? null : n.myApplication.notificationMaster.examId, "")
                }
            }

            function fe(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 26), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.printApplication(e))
                    }), t._uU(1, " Print "), t.qZA()
                }
            }

            function ue(i, c) {
                if (1 & i && (t.ynx(0), t.TgZ(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h3"), t._uU(5), t.qZA(), t.TgZ(6, "p", 8), t._uU(7), t.qZA()()(), t.TgZ(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "p", 12), t._uU(12, "Application Start Date"), t.qZA(), t.TgZ(13, "p", 13), t._uU(14), t.ALo(15, "date"), t.qZA()(), t.TgZ(16, "div", 11)(17, "p", 14), t._uU(18, "Application End Date"), t.qZA(), t.TgZ(19, "p", 15)(20, "span", 16), t._uU(21), t.ALo(22, "date"), t.qZA(), t._uU(23, "\xa0"), t.TgZ(24, "span", 8), t._uU(25), t.ALo(26, "date"), t.qZA()()(), t.TgZ(27, "div", 11)(28, "p", 14), t._uU(29, " Last Date for Online Fee payment "), t.qZA(), t.TgZ(30, "p", 15)(31, "span", 16), t._uU(32), t.ALo(33, "date"), t.qZA(), t._uU(34, "\xa0"), t.TgZ(35, "span", 8), t._uU(36), t.ALo(37, "date"), t.qZA()()(), t.TgZ(38, "div", 11)(39, "p", 14), t._uU(40, " Window for Application Form Correction and Online Payment of Correction Changes "), t.qZA(), t.TgZ(41, "p", 15)(42, "span", 16), t._uU(43), t.ALo(44, "date"), t.ALo(45, "date"), t.qZA(), t._uU(46, "\xa0"), t.TgZ(47, "span", 8), t._uU(48), t.ALo(49, "date"), t.qZA()()()(), t.TgZ(50, "div", 17)(51, "div", 18), t._UZ(52, "div", 19), t.TgZ(53, "div", 20), t.YNc(54, de, 2, 0, "button", 21), t.YNc(55, pe, 2, 1, "button", 22), t.YNc(56, fe, 2, 0, "button", 23), t.qZA()()()()(), t.BQk()), 2 & i) {
                    const n = c.$implicit;
                    t.xp6(5), t.Oqu(null == n || null == n.examData ? null : n.examData.examName), t.xp6(2), t.Oqu(null == n || null == n.liveExamData ? null : n.liveExamData.examDescription), t.xp6(7), t.hij(" ", t.xi3(15, 13, null == n || null == n.liveExamData ? null : n.liveExamData.applicationStartDate, "dd/MM/yyyy"), " "), t.xp6(7), t.Oqu(t.xi3(22, 16, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(26, 19, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(33, 22, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(37, 25, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "hh:mm a"), ")"), t.xp6(7), t.AsE("", t.xi3(44, 28, null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate, "dd/MM/yyyy"), " - ", t.xi3(45, 31, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "dd/MM/yyyy"), ""), t.xp6(5), t.hij("(up to ", t.xi3(49, 34, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "hh:mm a"), ")"), t.xp6(6), t.Q6J("ngIf", 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) > 1), t.xp6(1), t.Q6J("ngIf", 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) && (null == n || null == n.myApplication ? null : n.myApplication.isAppFormSubmitted) && (null == n || null == n.myApplication ? null : n.myApplication.isAppPaymentDone))
                }
            }

            function ge(i, c) {
                1 & i && (t.ynx(0), t.TgZ(1, "div", 27)(2, "div", 28)(3, "div", 29), t._UZ(4, "img", 30), t.TgZ(5, "p", 31), t._uU(6, "No Data Available !"), t.qZA()()()(), t.BQk())
            }

            function me(i, c) {
                if (1 & i && (t.TgZ(0, "div", 1)(1, "div", 2), t.YNc(2, ue, 57, 37, "ng-container", 3), t.qZA(), t.YNc(3, ge, 7, 0, "ng-container", 4), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(2), t.Q6J("ngForOf", n.myApplicationData), t.xp6(1), t.Q6J("ngIf", 0 == n.myApplicationData.length)
                }
            }

            function _e(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 24), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.prevToggle(e))
                    }), t._uU(1, " Applications Status "), t.qZA()
                }
            }

            function he(i, c) {
                if (1 & i && (t.TgZ(0, "button", 25), t._uU(1, " Applications Details "), t.qZA()), 2 & i) {
                    const n = t.oxw().$implicit;
                    t.MGl("routerLink", "my-applications-history/", null == n || null == n.myApplication || null == n.myApplication.notificationMaster ? null : n.myApplication.notificationMaster.examId, "")
                }
            }

            function xe(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 26), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(2);
                        return t.KtG(a.printApplication(e))
                    }), t._uU(1, " Print "), t.qZA()
                }
            }

            function be(i, c) {
                if (1 & i && (t.ynx(0), t.TgZ(1, "div", 32)(2, "div", 33)(3, "div", 6)(4, "div", 7)(5, "h3"), t._uU(6), t.qZA(), t.TgZ(7, "p", 8), t._uU(8), t.qZA()()(), t.TgZ(9, "div", 9)(10, "div", 10)(11, "div", 34)(12, "p", 12), t._uU(13, "Application Start Date"), t.qZA(), t.TgZ(14, "p", 13), t._uU(15), t.ALo(16, "date"), t.qZA()(), t.TgZ(17, "div", 34)(18, "p", 12), t._uU(19, "Application End Date"), t.qZA(), t.TgZ(20, "p", 15)(21, "span", 16), t._uU(22), t.ALo(23, "date"), t.qZA(), t._uU(24, "\xa0"), t.TgZ(25, "span", 8), t._uU(26), t.ALo(27, "date"), t.qZA()()(), t.TgZ(28, "div", 34)(29, "p", 12), t._uU(30, "Last Date for Online Fee payment"), t.qZA(), t.TgZ(31, "p", 15)(32, "span", 16), t._uU(33), t.ALo(34, "date"), t.qZA(), t._uU(35, "\xa0"), t.TgZ(36, "span", 8), t._uU(37), t.ALo(38, "date"), t.qZA()()(), t.TgZ(39, "div", 34)(40, "p", 12), t._uU(41, " Window for Application Form Correction and Online Payment of Correction Changes "), t.qZA(), t.TgZ(42, "p", 15)(43, "span", 16), t._uU(44), t.ALo(45, "date"), t.ALo(46, "date"), t.qZA(), t._uU(47, "\xa0"), t.TgZ(48, "span", 8), t._uU(49), t.ALo(50, "date"), t.qZA()()(), t.TgZ(51, "div", 35)(52, "div", 18), t._UZ(53, "div", 19), t.TgZ(54, "div", 20), t.YNc(55, _e, 2, 0, "button", 21), t.YNc(56, he, 2, 1, "button", 22), t.YNc(57, xe, 2, 0, "button", 23), t.qZA()()()()()()(), t.BQk()), 2 & i) {
                    const n = c.$implicit;
                    t.xp6(6), t.Oqu(null == n || null == n.examData ? null : n.examData.examName), t.xp6(2), t.Oqu(null == n || null == n.liveExamData ? null : n.liveExamData.examDescription), t.xp6(7), t.hij(" ", t.xi3(16, 13, null == n || null == n.liveExamData ? null : n.liveExamData.applicationStartDate, "dd/MM/yyyy"), " "), t.xp6(7), t.Oqu(t.xi3(23, 16, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(27, 19, null == n || null == n.liveExamData ? null : n.liveExamData.applicationEndDate, "hh:mm a"), ")"), t.xp6(7), t.Oqu(t.xi3(34, 22, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "dd/MM/yyyy")), t.xp6(4), t.hij("(up to ", t.xi3(38, 25, null == n || null == n.liveExamData ? null : n.liveExamData.lastDateForFee, "hh:mm a"), ")"), t.xp6(7), t.AsE("", t.xi3(45, 28, null == n || null == n.liveExamData ? null : n.liveExamData.correctionStartDate, "dd/MM/yyyy"), " - ", t.xi3(46, 31, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "dd/MM/yyyy"), ""), t.xp6(5), t.hij("(up to ", t.xi3(50, 34, null == n || null == n.liveExamData ? null : n.liveExamData.correctionEndDate, "hh:mm a"), ")"), t.xp6(6), t.Q6J("ngIf", 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length)), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) > 1), t.xp6(1), t.Q6J("ngIf", 1 == (null == n || null == n.associatedApplications ? null : n.associatedApplications.length) && (null == n || null == n.myApplication ? null : n.myApplication.isAppFormSubmitted) && (null == n || null == n.myApplication ? null : n.myApplication.isAppPaymentDone))
                }
            }

            function ye(i, c) {
                1 & i && (t.ynx(0), t.TgZ(1, "div", 36)(2, "div", 28)(3, "div", 29), t._UZ(4, "img", 30), t.TgZ(5, "p", 31), t._uU(6, "No Data Available !"), t.qZA()()()(), t.BQk())
            }

            function ve(i, c) {
                if (1 & i && (t.TgZ(0, "div", 1), t.YNc(1, be, 58, 37, "ng-container", 3), t.YNc(2, ye, 7, 0, "ng-container", 4), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", n.myApplicationData), t.xp6(1), t.Q6J("ngIf", 0 == n.myApplicationData.length)
                }
            }
            let we = (() => {
                class i {
                    constructor(n, o, e, a, d) {
                        this.dialog = n, this.router = o, this.dashboardService = e, this.tokenService = a, this.masterService = d, this.view = "card", this.myApplicationData = [], this.todayDate = (new Date).toISOString().split("T")[0]
                    }
                    ngOnInit() {
                        sessionStorage.removeItem("printData"), sessionStorage.removeItem("print");
                        let n = this.tokenService.getDecoded();
                        n && (this.registrationNo = n.username, this.getMyApplicationList()), this.getRegion()
                    }
                    prevToggle(n) {
                        let o = n ? .associatedApplications[0],
                            e = n ? .liveExamData.fee,
                            a = this.regions.find(u => u.id == o ? .postRegion);
                        o.postRegionInitial = a ? .initials || "-", o.examName = n.examData.examName, o.examCode = n.examData.examCode, o.examYear = n ? .myApplication ? .notificationMaster ? .examYear;
                        let d = "status" + n.examData.examCode.toLowerCase() + n ? .myApplication ? .notificationMaster ? .examYear;
                        o.applicationStatus = o[d] ? .displayValue, o.myApplicationData = n.myApplication, o.examFee = e, this.dialog.open(Q, {
                            width: "70%",
                            minHeight: "calc(100vh - 90px)",
                            height: "auto",
                            exitAnimationDuration: 0,
                            enterAnimationDuration: 0,
                            data: {
                                result: o
                            }
                        })
                    }
                    getMyApplicationList() {
                        const o = (new Date).getFullYear().toString();
                        this.registrationNo && this.dashboardService.getMyRecentYearApplicationsHistory(o).subscribe(e => {
                            "200" === e.statusCode && "success" === e.status && (this.myApplicationData = e.data)
                        }, e => {
                            this.dialog.open(x.I, {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: e ? .error ? .message
                                }
                            }).afterClosed().subscribe(a => {
                                this.router.navigate(["/dashboard"])
                            })
                        })
                    }
                    printApplication(n) {
                        const o = n ? .examData ? .examCode.toLowerCase();
                        this.router.navigate("capf" == o ? [`/si-application-form/si-print-application/${n.associatedApplications[0]?.id}/${n?.myApplication?.notificationId}`] : "mtsc" == o ? [`/mts-civilian-application-form/mts-civilian-print-application/${n.associatedApplications[0]?.id}/${n?.myApplication?.notificationId}`] : "je" == o || "rhq" == o ? [`/${o}-application-form/print-application/${n.associatedApplications[0]?.id}/${n?.myApplication?.notificationId}`] : [`/${o}-application-form/print-application/${n?.myApplication?.notificationId}/${n.associatedApplications[0]?.id}`])
                    }
                    getRegion() {
                        this.masterService.getRegion().subscribe(n => {
                            this.regions = n.data
                        })
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(s.uw), t.Y36(g.F0), t.Y36(p.s), t.Y36(_.i), t.Y36(R.m))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-application-history"]
                        ],
                        inputs: {
                            view: "view"
                        },
                        decls: 2,
                        vars: 2,
                        consts: [
                            ["class", "container", 4, "ngIf"],
                            [1, "container"],
                            [1, "row", "marginss", "pb20"],
                            [4, "ngFor", "ngForOf"],
                            [4, "ngIf"],
                            [1, "card-block", "blocks", "card-wi", "border-cls", "marginss"],
                            [1, "card-header"],
                            [1, "exam"],
                            [1, "small-font"],
                            [1, "card-body"],
                            [1, "card-content", "row"],
                            [1, "header", "col-md-6", "row-type"],
                            [1, "context-text"],
                            [1, "content-text", "bold"],
                            [1, "context-text", "small-font"],
                            [1, "content-text"],
                            [1, "bold"],
                            [1, "card-footer"],
                            [1, "results"],
                            [1, "imgs"],
                            [1, "side-btn"],
                            ["class", "status-text", 3, "click", 4, "ngIf"],
                            ["class", "save-btn", 3, "routerLink", 4, "ngIf"],
                            ["class", "save-btn", 3, "click", 4, "ngIf"],
                            [1, "status-text", 3, "click"],
                            [1, "save-btn", 3, "routerLink"],
                            [1, "save-btn", 3, "click"],
                            [1, "row", "pb20"],
                            [1, "center-alignn"],
                            [1, "exams"],
                            ["src", "assets/image/No-data2.svg", "height", "150"],
                            [1, "mt10"],
                            [1, "row", "space"],
                            [1, "card-block", "col-md-12", "list-margin"],
                            [1, "header", "col-md-3", "row-type"],
                            [1, "card-footers"],
                            [1, "row", "mt30", "pb20"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.YNc(0, me, 4, 2, "div", 0), t.YNc(1, ve, 3, 2, "div", 0)), 2 & o && (t.Q6J("ngIf", "card" === e.view), t.xp6(1), t.Q6J("ngIf", "list" === e.view))
                        },
                        dependencies: [l.sg, l.O5, g.rH, l.uU],
                        styles: [".card-wi[_ngcontent-%COMP%]{width:49%}.centers[_ngcontent-%COMP%]{justify-content:center!important}.save-btn[_ngcontent-%COMP%]{margin:10px 3px!important;padding:5px 12px!important;font-size:12px}.pdf-text[_ngcontent-%COMP%]{font-size:14px!important;margin:5px!important;font-size:12px}.pdf-text[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:15px;padding:20px;position:relative;margin:0 0 20px}.pdf-text[_ngcontent-%COMP%]   .admit-label[_ngcontent-%COMP%]{position:absolute;top:-10px;background-color:#fff;padding:0 8px;font-size:14px;color:#606060}.pdf-text[_ngcontent-%COMP%]   .trans-back[_ngcontent-%COMP%]{margin:0}.pdf-text[_ngcontent-%COMP%]   .imgs[_ngcontent-%COMP%]{display:flex;align-items:center}.pdf-text[_ngcontent-%COMP%]   .img-class[_ngcontent-%COMP%]{padding:7px}.pdf-text[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#b6b6b6}.pdf-text[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]{height:72px;border-radius:5px;display:flex;justify-content:space-between;align-items:center}.pdf-text[_ngcontent-%COMP%]   .gb[_ngcontent-%COMP%]{background-color:#188906!important;margin:0 5px}.pdf-text[_ngcontent-%COMP%]   .main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.pdf-text[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{display:flex;margin:20px 10px}.pdf-text[_ngcontent-%COMP%]   .side-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.pdf-text[_ngcontent-%COMP%]   .pay-btn[_ngcontent-%COMP%]{background:rgb(241,241,241);padding:10px}.pdf-text[_ngcontent-%COMP%]   .pay-button[_ngcontent-%COMP%]{padding:13px!important}.pdf-text[_ngcontent-%COMP%]   .less-margin[_ngcontent-%COMP%]{margin-bottom:2px}.pdf-text[_ngcontent-%COMP%]   .card-wi[_ngcontent-%COMP%]{width:49%}.pdf-text[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]{margin:10px 3px!important;padding:5px 12px!important;font-size:12px}.pdf-text[_ngcontent-%COMP%]   .pdf-text[_ngcontent-%COMP%]{font-size:14px!important;margin:5px!important;font-size:12px}.pdf-text[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%]{font-size:12px!important;margin:5px!important;font-size:12px}.pdf-text[_ngcontent-%COMP%]   .centers[_ngcontent-%COMP%]{justify-content:center!important}.mt30[_ngcontent-%COMP%]{margin-top:30px}.exams[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.center-alignn[_ngcontent-%COMP%]{display:flex;justify-content:center}.status-text[_ngcontent-%COMP%]{font-size:12px!important;margin:5px!important;font-size:12px}.side-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media (max-width: 767.98px){.status-text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:#8e433e;margin:5px;text-align:center;display:flex;justify-content:center;background-color:transparent;border:none}}@media (max-width: 575.98px){h3[_ngcontent-%COMP%]{font-size:14px!important;margin-bottom:5px!important}.small-font[_ngcontent-%COMP%]{font-size:10px!important}}"]
                    })
                }
                return i
            })();

            function Ce(i, c) {
                1 & i && t._UZ(0, "span")
            }

            function Pe(i, c) {
                1 & i && t._UZ(0, "span")
            }

            function Me(i, c) {
                1 & i && t._UZ(0, "span")
            }

            function Ae(i, c) {
                1 & i && (t.TgZ(0, "div", 18)(1, "div", 19), t._UZ(2, "input", 20), t.TgZ(3, "label", 21), t._uU(4, " New to old "), t.qZA()(), t.TgZ(5, "div", 19), t._UZ(6, "input", 22), t.TgZ(7, "label", 23), t._uU(8, " Old to new "), t.qZA()()())
            }

            function Se(i, c) {
                if (1 & i && (t.ynx(0), t._UZ(1, "app-examinations", 24), t.BQk()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("view", n.viewValue)
                }
            }

            function Oe(i, c) {
                if (1 & i && (t.ynx(0), t._UZ(1, "app-my-applications", 24), t.BQk()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("view", n.viewValue)
                }
            }

            function Ne(i, c) {
                if (1 & i && (t.ynx(0), t._UZ(1, "app-application-history", 24), t.BQk()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("view", n.viewValue)
                }
            }
            let Ze = (() => {
                    class i {
                        constructor(n, o) {
                            this.tokenService = n, this.dashboardService = o, this.viewValue = "card", this.tabValue = "Examinations", this.listView = !1, this.drop = !1, this.history = !1, this.application = !1, this.Examinations = !0, this.reliveExamList = [], this.allowedRegistrationNumbers = []
                        }
                        ngOnInit() {
                            var n = this;
                            return (0, E.Z)(function*() {
                                sessionStorage.removeItem("printData"), sessionStorage.removeItem("print");
                                let o = n.tokenService.getDecoded();
                                [n.reliveExamList, n.allowedRegistrationNumbers] = yield n.dashboardService.setReLiveExams(), n.reliveExamList.pop(), o && (n.userId = o.userId, n.registrationNo = o.username)
                            })()
                        }
                        toggleTab(n) {
                            this.tabValue = n, this.Examinations = "Examinations" === n, this.application = "application" === n, this.history = "history" === n
                        }
                        toggleView(n) {
                            this.viewValue = n
                        }
                        showdropdown() {
                            this.drop = !this.drop
                        }
                        static# t = this.\u0275fac = function(o) {
                            return new(o || i)(t.Y36(_.i), t.Y36(p.s))
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: i,
                            selectors: [
                                ["app-exams-and-applications"]
                            ],
                            decls: 30,
                            vars: 17,
                            consts: [
                                [1, "container"],
                                [1, "navba"],
                                [1, "nav", "navv", "nav-tabs", "gap"],
                                [1, "nav-item", "nav-items"],
                                ["aria-current", "page", 1, "nav-link", 2, "cursor", "pointer", 3, "click"],
                                [4, "ngIf"],
                                [1, "nav-item"],
                                ["tabindex", "-1", "aria-disabled", "true", 1, "nav-link", 2, "cursor", "pointer", 3, "click"],
                                [1, "options-side"],
                                [1, "dropdown", 3, "click"],
                                ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "drop"],
                                [1, "sort-opt"],
                                ["src", "assets/images/sort.svg"],
                                [1, "content-text", "bold"],
                                ["class", "dropdown-menu", "aria-labelledby", "dropdownMenuButton", 4, "ngIf"],
                                [1, "list-view", 3, "click"],
                                ["src", "assets/images/Icon_eq.svg"],
                                ["src", "assets/images/frame.svg"],
                                ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"],
                                [1, "form-check"],
                                ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"],
                                ["for", "flexRadioDefault1", 1, "form-check-label", "label-checkk"],
                                ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"],
                                ["for", "flexRadioDefault2", 1, "form-check-label", "label-checkk"],
                                [3, "view"]
                            ],
                            template: function(o, e) {
                                1 & o && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4), t.NdJ("click", function() {
                                    return e.toggleTab("Examinations")
                                }), t._uU(5, "Live Examinations"), t.qZA(), t.YNc(6, Ce, 1, 0, "span", 5), t.qZA(), t.TgZ(7, "li", 6)(8, "a", 7), t.NdJ("click", function() {
                                    return e.toggleTab("application")
                                }), t._uU(9, "My Applications"), t.qZA(), t.YNc(10, Pe, 1, 0, "span", 5), t.qZA(), t.TgZ(11, "li", 6)(12, "a", 7), t.NdJ("click", function() {
                                    return e.toggleTab("history")
                                }), t._uU(13, "Applications History"), t.qZA(), t.YNc(14, Me, 1, 0, "span", 5), t.qZA()(), t.TgZ(15, "div", 8)(16, "div", 9), t.NdJ("click", function() {
                                    return e.showdropdown()
                                }), t.TgZ(17, "button", 10)(18, "div", 11), t._UZ(19, "img", 12), t.TgZ(20, "p", 13), t._uU(21, "Sort"), t.qZA()()(), t.YNc(22, Ae, 9, 0, "div", 14), t.qZA(), t.TgZ(23, "button", 15), t.NdJ("click", function() {
                                    return e.toggleView("list")
                                }), t._UZ(24, "img", 16), t.qZA(), t.TgZ(25, "button", 15), t.NdJ("click", function() {
                                    return e.toggleView("card")
                                }), t._UZ(26, "img", 17), t.qZA()()()(), t.YNc(27, Se, 2, 1, "ng-container", 5), t.YNc(28, Oe, 2, 1, "ng-container", 5), t.YNc(29, Ne, 2, 1, "ng-container", 5)), 2 & o && (t.xp6(4), t.Tol("Examinations" === e.tabValue ? "active" : ""), t.xp6(2), t.Q6J("ngIf", "Examinations" === e.tabValue), t.xp6(2), t.Tol("application" === e.tabValue ? "active" : ""), t.xp6(2), t.Q6J("ngIf", "application" === e.tabValue), t.xp6(2), t.Tol("history" === e.tabValue ? "active" : ""), t.xp6(2), t.Q6J("ngIf", "history" === e.tabValue), t.xp6(8), t.Q6J("ngIf", e.drop), t.xp6(1), t.ekj("active", "list" === e.viewValue), t.xp6(2), t.ekj("active", "card" === e.viewValue), t.xp6(2), t.Q6J("ngIf", e.Examinations), t.xp6(1), t.Q6J("ngIf", e.application), t.xp6(1), t.Q6J("ngIf", e.history))
                            },
                            dependencies: [l.O5, zt, se, we],
                            styles: [".navv[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{text-align:center;color:var(--fonts-subtext);font-size:var(--font-size-14);font-weight:400;background:rgba(240,221,219,.7);margin-right:5px!important}.navv[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#fff!important;background-color:#8e433e!important;outline:none!important;border:none!important;position:relative}.navv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:none!important}a[_ngcontent-%COMP%]:hover{border:none;outline:none}li[_ngcontent-%COMP%]{border:none;outline:none;position:relative}.list-view[_ngcontent-%COMP%]{background-color:transparent;border:none;margin:0 20px 0 0;padding:10px}.list-view[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border-radius:6px;border:1px solid var(--global-border, #e6e6e6);background:var(--button-icon-background, #f9f1f1)}.sort-opt[_ngcontent-%COMP%]{display:flex;margin:0 19px}.sort-opt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px!important}p[_ngcontent-%COMP%]{margin:4px}.drop[_ngcontent-%COMP%]{color:var(--fonts-subtext);font-family:var(--font-family);font-style:normal;font-weight:400;cursor:pointer;border:none;background-color:transparent;outline:none;padding:0}.dropdown-item[_ngcontent-%COMP%]{font-size:14px;padding:12px!important;border-bottom:1px solid var(--global-border)}.dropdown-item[_ngcontent-%COMP%]:hover{background:rgb(249,241,241)!important;clear:none}a[_ngcontent-%COMP%]:hover{text-decoration:none!important}.dropdown-menu[_ngcontent-%COMP%]{display:block;padding:0 10px}.form-check[_ngcontent-%COMP%]{padding:8px 20px}.drop[_ngcontent-%COMP%]:hover{background-color:transparent!important}.navba[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}button[_ngcontent-%COMP%]:focus{outline:0!important;background-color:transparent!important;border:0!important}.frame-img[_ngcontent-%COMP%]{height:32px;width:32px;border-radius:6px;padding:4px;background-color:transparent;border:none;display:flex;justify-content:center;align-items:center;margin:0 10px}.nav-tabs[_ngcontent-%COMP%]{border:none;background-color:transparent;padding-bottom:0!important}.nav-tabs[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{outline:none!important}.options-side[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.options-side[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border-radius:6px;border:1px solid var(--global-border, #e6e6e6)!important;background:var(--button-icon-background, #f9f1f1)!important}.p-2[_ngcontent-%COMP%]{padding:.3rem!important}@media (max-width: 767px){.navba[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.list-view[_ngcontent-%COMP%]{display:none}.sort-opt[_ngcontent-%COMP%]{margin:15px 0 0}.options-side[_ngcontent-%COMP%]{justify-content:flex-start;width:100%}.options-side[_ngcontent-%COMP%]   .sort-opt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:17px}}.form-check[_ngcontent-%COMP%]   .label-checkk[_ngcontent-%COMP%]{margin:1px 0 0}@media (max-width: 600px){.options-side[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{right:0}}@media (max-width: 500px){.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:9px 7px;font-size:11px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]{margin-right:0!important}.options-side[_ngcontent-%COMP%]{height:20px}}.slider-box[_ngcontent-%COMP%]{background:rgba(240,221,219,.7);margin-bottom:10px;padding:4px;display:flex;align-items:center}.slider-box[_ngcontent-%COMP%]   marquee[_ngcontent-%COMP%]{font-weight:800;color:#8e433e;cursor:pointer}"]
                        })
                    }
                    return i
                })(),
                ke = (() => {
                    class i {
                        constructor(n, o, e) {
                            this.router = n, this.actRoute = o, this.tokenService = e, "localhost" === v.N.host && this.actRoute.queryParams.subscribe(a => {
                                a.token && (e.setCipher(a.token), window.location.href = "/dashboard")
                            })
                        }
                        ngOnInit() {}
                        static# t = this.\u0275fac = function(o) {
                            return new(o || i)(t.Y36(g.F0), t.Y36(g.gz), t.Y36(_.i))
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: i,
                            selectors: [
                                ["app-dashboard"]
                            ],
                            decls: 3,
                            vars: 0,
                            template: function(o, e) {
                                1 & o && t._UZ(0, "app-profile")(1, "app-admit-card")(2, "app-exams-and-applications")
                            },
                            dependencies: [_t, ht, Ze],
                            styles: [".wb[_ngcontent-%COMP%]{background-color:var(--global-white)}"]
                        })
                    }
                    return i
                })();
            var De = f(21544);

            function Te(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5)(5, "img", 6), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.closeDialog())
                    }), t.qZA()()()(), t.TgZ(6, "div", 3)(7, "div", 7)(8, "div", 8)(9, "div", 9), t._UZ(10, "img", 10), t.qZA()(), t.TgZ(11, "div", 11)(12, "div", 12), t._uU(13, " Capture Again "), t.qZA(), t.TgZ(14, "button", 13), t._uU(15, " Capture"), t.qZA()()()()()()
                }
            }
            let Ee = (() => {
                class i {
                    constructor(n, o) {
                        this.data = n, this.dialogRef = o, this.popcheck = !0
                    }
                    closeDialog() {
                        this.popcheck = !1
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(s.WI), t.Y36(s.so))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-image-capture"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["class", "dialog-overlay filterBox", 4, "ngIf"],
                            [1, "dialog-overlay", "filterBox"],
                            [1, "dialog", "filter-dlogs"],
                            [1, "row"],
                            [1, "button-block", "headTop", "border-bot", "small-padding"],
                            [1, "atag_btn"],
                            ["src", "assets/images/cancel-maroon-Border.svg", "aria-hidden", "false", "aria-label", "Example close icon", "fontIcon", "close", 2, "cursor", "pointer", "width", "20px", 3, "click"],
                            [1, "dailog-body", "gap"],
                            [1, "img-count"],
                            [1, "img"],
                            ["src", "assets/images/capture-img.svg", "height", "220"],
                            [1, "flex", "gap"],
                            [1, "trans-back"],
                            [1, "save-btn"]
                        ],
                        template: function(o, e) {
                            1 & o && t.YNc(0, Te, 16, 0, "div", 0), 2 & o && t.Q6J("ngIf", e.popcheck)
                        },
                        dependencies: [l.O5],
                        styles: ['@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Black.32e88a6d72728d09.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-BlackItalic.5a6d846a5f529172.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Bold.c80659c569fd7544.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-BoldItalic.34238e2263b40a9c.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraBold.80d1ae589c6b001b.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraBoldItalic.0bece5755dd78993.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraLight.991f9a1903723691.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraLightItalic.61fe06a310084b11.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Italic.dccfd84c97d4f67b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Light.2c87b5c3768c0eac.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-LightItalic.44f06927efa59759.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Medium.d56f4d956f451601.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-MediumItalic.3a9ffc7d71903586.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Regular.9d8660e99a9a3c6d.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-SemiBold.932a58e6105c7e74.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-SemiBoldItalic.557c31ee638149b0.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Black.716e7088351a2919.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-BlackItalic.aa5764c125179e8d.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Bold.6e55b815d019e3e1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-BoldItalic.06eb77e71db9ddb7.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraBold.43e0093fa5e2e95c.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraBoldItalic.fd60b3cd5fcb25f1.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraLight.e9faf35fe54b0c89.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraLightItalic.ecf44b9e9384cf05.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Italic.8742e298eab3357b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Light.d738ade7d59cb798.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-LightItalic.5ee4368275e7c52f.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Medium.3178109888cdb5e9.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-MediumItalic.2da13f4da7500cad.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Regular.9bdcc5e716fb8ece.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-SemiBold.4965cc43b18be4bf.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-SemiBoldItalic.4bbb192cceaf4274.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Black.c17f9ad76553d0ab.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-BlackItalic.75aa0f4a664972f0.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Bold.ca7c27ffb6d02c01.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-BoldItalic.039aeb8d60c5d70f.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraBold.c272c8fce32fdc37.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraBoldItalic.5580762f4286f20d.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraLight.c3fec2f9c5374107.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraLightItalic.007aa6630e457c0c.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Italic.da3999deabee6526.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Light.29ca48c8f4c0324e.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-LightItalic.f2f6e463302b0040.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Medium.598be77941e2e9e1.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-MediumItalic.817bdf1e0851e558.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Regular.04729c35cbed58bb.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-SemiBold.9176b5e088911fbf.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-SemiBoldItalic.e22fa45e671a78b7.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Black.19827a84bb9a5a43.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-BlackItalic.1d17e9fbe9e2b17c.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Bold.ea2662d6f9224ba6.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-BoldItalic.91fa39e9d1ccc261.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraBold.abf52b3050da4465.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraBoldItalic.539ac5c0760f284b.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraLight.e35bef6a04f81819.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraLightItalic.f1e3f192b040a372.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Italic.cc28cb26c10752b5.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Light.81aafd56361d6615.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-LightItalic.62df2fef320920a0.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Medium.6b2fc9a275787054.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-MediumItalic.3950c555daa23424.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Regular.483dcf5898b16649.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-SemiBold.5f45c3cb83fec8f7.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-SemiBoldItalic.a4e8813b58320025.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Black.6e40217edffbfffe.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-BlackItalic.a9719b1dd6745d76.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Bold.c0ee083586d63ea1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-BoldItalic.35ffd59cc0134784.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraBold.e12c7d83a8f6ff1e.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraBoldItalic.df6dfe9dbbce9c3a.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraLight.b45d4bea4ec24b79.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraLightItalic.f2087fbc8dac21dd.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Italic.0f56becd32d1b1ee.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Light.ec84380ee7b28ee8.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-LightItalic.f338ab33156e2b09.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Medium.67a8ee21520203b0.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-MediumItalic.78f3639eb2732e1f.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Regular.c66c0fb37990205c.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-SemiBold.498aa3656e82a9cd.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-SemiBoldItalic.bc8bbc59ad4bf053.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Black.6689094048cab74c.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-BlackItalic.b5ea81a13a4cabc8.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Bold.c99e33a0005aef86.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-BoldItalic.d92ddac9e0553e89.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraBold.86c4d9cd4e61fe6b.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraBoldItalic.ec7caf538e276c45.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraLight.a8e2d559686f3945.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraLightItalic.e249ba05ee457326.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Italic.a3baa5685a86ef25.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Light.273eed85bd232843.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-LightItalic.d97de468b69f6feb.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Medium.6c4e9a87ca5bee88.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-MediumItalic.6f4c9bb25753bcfb.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Regular.c8ed843dc06f9a74.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-SemiBold.09a06bb03a0736ad.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-SemiBoldItalic.c77bcca61c764899.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Black.a3a31db84a67e5f4.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-BlackItalic.85bd0db1f44c1979.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Bold.451f143962dbd79c.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-BoldItalic.81f883819f893f71.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraBold.a4ca9e96c373477a.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraBoldItalic.9a05eef49d97e3cd.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraLight.f639712d038c25e6.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraLightItalic.abab100e0c8e3dbb.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Italic.4c279d7b4812adb2.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Light.694b18d053a61b3c.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-LightItalic.e7a532f40e3e0a1d.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Medium.be38702af791ab1e.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-MediumItalic.30b69460f2ca2ec1.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Regular.185343ab5e247902.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-SemiBold.aef47429f3e569f1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-SemiBoldItalic.282b3e4b04d5c90b.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Black.4f54208fec1b0ecc.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-BlackItalic.778ebc7e4777112a.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Bold.7560457a41cdaee6.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-BoldItalic.ba2d78df9fd90b9f.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraBold.2a8a829d0ed8d7c1.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraBoldItalic.c03be6e0129a0049.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraLight.b14232a5f0c09d73.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraLightItalic.49a213cb813f4816.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Italic.61087e7b5279b0e5.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Light.43bfcdca43853bc3.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-LightItalic.45f1246d694c65b7.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Medium.1d66781f0780cfcb.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-MediumItalic.85ac92a412ea45d6.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Regular.25bc22f4ceeb24bd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-SemiBold.b67dfcebcb19af56.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-SemiBoldItalic.bc9c2ad43ab67e18.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Black.e3376d9bc70b6cf6.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-BlackItalic.416f57ccd9d0bfdb.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Bold.cd28dd6054dec4a2.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-BoldItalic.afb98b0ad1e92a55.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraBold.938b58959a6cfaa5.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraBoldItalic.a46e95a5c6181322.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraLight.1b23a57d204faf2a.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraLightItalic.1c2e4709f56961ff.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Italic.3069a7f3e057104b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Light.f800f8f3a817e4ad.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-LightItalic.92edc0ea6981efed.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Medium.a2faa7013f2427db.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-MediumItalic.835911035f6b998a.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Regular.4c280bf4e67de147.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-SemiBold.908436a4662ff287.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-SemiBoldItalic.1a659fb319ec2376.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Black.042dad3077a5c44b.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-BlackItalic.ce9478d32085ef99.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Bold.f322e19764d32714.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-BoldItalic.1abd82142a78a09e.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraBold.6075703b315737a6.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraBoldItalic.966ffc258b58944f.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraLight.3aa0edf9509104ca.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraLightItalic.1df3330bbbdbf0c8.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Italic.69bd3a1a95631d2d.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Light.ca38e6f63246ee12.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-LightItalic.c03778cebf7967e5.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Medium.53c2141d06fbc81d.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-MediumItalic.b43583702491ad44.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Regular.2ce32c88f66f838c.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-SemiBold.74dc433ca146c12f.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-SemiBoldItalic.2166047c045be3c7.ttf) format("truetype");font-weight:700;font-style:italic}[_ngcontent-%COMP%]:root{--font-family: "NunitoSans";--bg-color: #fff;--small-font: 12px;--main-heading-font: 24px;--heading-color: #313134;--maroon-color: #8e433e;--selected-color: #8e433e;--primary-color: #731d1d;--secondary-color: #fff3e1;--input-border-color: #ebebeb;--black-color: #000;--normal-weight: 600;--bold-font: 700;--border-radius: 8px;--full-width: 100%;--font-weight-700: 700;--font-weight-800: 800;--font-weight-600: 600;--font-weight-400: 400;--font-size-12: 11px;--font-size-12: 12px;--font-size-14: 14px;--font-size-15: 15px;--font-size-16: 16px;--font-size-17: 17px;--font-size-18: 18px;--font-size-19: 19px;--font-size-20: 20px;--mb-32: 32px;--button-disable: #ccc;--fonts-subtext: #434343;--global-border: #ebebeb;--global-white: #fdfdfd;--header-default: #8e433e;--global-frame-background: linear-gradient( 270deg, #f7eeed 0%, #f9f1f1 25%, #fcf8f8 68.75%, rgba(249, 241, 241, 0) 95.31% ), #fff;--fonts-body: #606060;--fonts-primary: #1e1e1e;--primary-color: #8e433e;--button-icon-background: #f9f1f1;--fonts-title: #252525}*[_ngcontent-%COMP%]{letter-spacing:-.6px!important}body[_ngcontent-%COMP%]{height:100%;font-family:var(--font-family)!important;background:var(--global-frame-background)!important;.hight-t {color: var(--maroon-color) !important;}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;font-size:14px}body[_ngcontent-%COMP%]{background:#fdfcfb;font-family:var(--font-family)!important}h1[_ngcontent-%COMP%]{font-size:36px!important;font-weight:700!important;margin-top:0}h2[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700!important;margin-top:0}.no-margin[_ngcontent-%COMP%]{margin:0}.marginss[_ngcontent-%COMP%]{margin:10px 0}h3[_ngcontent-%COMP%]{font-size:24px!important;font-weight:700!important;margin-top:0}h4[_ngcontent-%COMP%]{font-size:18px!important;font-weight:700!important;margin-top:0}a[_ngcontent-%COMP%]{cursor:pointer}.mb-32[_ngcontent-%COMP%]{margin-bottom:var(--mb-32)}.mt40[_ngcontent-%COMP%]{margin-top:40px!important}.mb40[_ngcontent-%COMP%]{margin-bottom:40px!important}.mb20[_ngcontent-%COMP%]{margin-bottom:20px!important}.mt20[_ngcontent-%COMP%]{margin-top:20px;.mdc-data-table__header-cell {font-family: var(--font-family) !important;}}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{&::placeholder{color:#606060!important;font-size:14px!important}}.m40[_ngcontent-%COMP%]{margin:40px}*[_ngcontent-%COMP%]{outline:none}*[_ngcontent-%COMP%]:focus{outline:none}.mat-expansion-panel[_ngcontent-%COMP%], .mat-expansion-panel-header[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%], .mdc-list-item__primary-text[_ngcontent-%COMP%]{font-family:var(--font-family)!important}body[_ngcontent-%COMP%]{margin:0;font-family:var(--font-family)!important;background:#fffbfb!important}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 15px!important;margin:0}span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:var(--font-size-14)!important}.btn-default[_ngcontent-%COMP%]{background:transparent!important;border-radius:56px!important;border:1px solid var(--selected-color)!important;color:var(--primary-color);padding:12px 30px;height:auto;line-height:100%;font-weight:800;font-size:16px;color:var(--selected-color)}select[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;color:#606060}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{&::placeholder{color:#606060!important;font-size:16px!important}}h3[_ngcontent-%COMP%]{font-family:var(--font-family);font-style:normal;font-weight:var(--bold-font);font-size:var(--main-heading-font)!important;line-height:20px;color:#000}.heading-maroon[_ngcontent-%COMP%]{color:#1e1e1e!important;text-transform:capitalize;text-align:center}.multiselect-dropdown[_ngcontent-%COMP%]{.dropdown-btn {border: none !important;}}.card-block[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #d6d6d6;background:var(--global-white, #fdfdfd);padding:40px;overflow:hidden}.list-margin[_ngcontent-%COMP%]{margin-bottom:20px}.cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.icons-w[_ngcontent-%COMP%]{width:100%;height:30px}.fs-big[_ngcontent-%COMP%]{font-size:var(--font-size-20)!important}//[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap}.form-text-alert[_ngcontent-%COMP%]{margin-top:5px}.form-fields[_ngcontent-%COMP%]{margin:6px 6px 20px;flex:0 1 calc(33% - 5px);display:flex;flex-direction:column;.labels {font-weight: var(--bold-font); font-size: var(--font-size-16) !important; line-height: 19px; color: var(--heading-color); text-align: left;} .select {background: var(--bg-color); border: 1.5px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; option {font-size: var(--font-size-14);}} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat;} &:nth-child(1) {margin-left: 0px !important;} &:nth-child(3) {margin-right: 0px !important;}}.input-form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px;.labels {font-weight: var(--bold-font); font-size: var(--font-size-14) !important; line-height: 19px; color: var(--heading-color); width: var(--full-width); text-align: left; white-space: nowrap;} .select {background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px !important; padding: 9px; box-shadow: none; font-size: var(--font-size-16);} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat; cursor: pointer;} .wo-input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; box-shadow: none; color: var(--fonts-primary, #1e1e1e); &::placeholder {color: #606060 !important; font-size: 12px !important;}} .input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; font-weight: normal;} textarea {border: 1px solid #ebebeb; font-size: var(--font-size-16); outline: none; box-shadow: none !important; padding: 10px; background: #fdfdfd;} .textareaSpan {position: absolute; font-size: 12px !important; color: #606060; right: 20px; bottom: 10px;}}.mat-expansion-panel[_ngcontent-%COMP%]{overflow:visible!important;font-family:var(--font-family)!important;.mat-expansion-indicator {margin-top: -6px !important; display: none !important; &::after {padding: 2px !important;}} .mat-expansion-panel-header {.mat-content {&:hover {img {background: #fff !important; padding: 8px; border-radius: 8px; cursor: pointer;} .afterHover {display: block;} .beforeHover {display: none;}} .afterHover {display: none; padding: 8px; border-radius: 8px; height: 40px;} .beforeHover {padding: 8px; border-radius: 8px; height: 40px;}}} .mat-content {align-items: center !important; justify-content: center; padding: 0; display: flex; flex-direction: column; .tooltiptext {visibility: hidden; width: 120px; background-color: #606060 !important; color: #fff !important; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; top: 0; left: 75px;} .tooltiptext {&::after {content: ""; position: absolute; top: 36%; left: -3%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent #606060 transparent transparent;}} &:hover {.tooltiptext {visibility: visible;}}} .mat-expansion-panel-body {padding: 0 15px !important; position: absolute; left: 46px; z-index: 1111; top: 0;} mat-nav-list {padding: 0 !important;} .aligned-with-icon {white-space: pre-wrap; line-height: initial; margin-top: 3px !important;}}.upload-section[_ngcontent-%COMP%]{position:relative;padding:25px;height:auto;text-align:center;background:#f8f8f8;border:1px dashed #e6e6e6;border-radius:8px;display:flex;flex-direction:column;img {width: 40px; height: 40px;} label {font-size: 12px !important; color: #606060; font-weight: normal; span {font-size: 12px !important;}} .visiblle {z-index: 1; position: absolute; opacity: 0; width: 100%; text-align: center; left: 0; height: 86px; top: 0;} small {word-break: break-all;}}.mt10[_ngcontent-%COMP%]{margin-top:10px}a[_ngcontent-%COMP%]{text-decoration:none}.form-control[_ngcontent-%COMP%]{display:flex;height:40px!important;padding:12px 16px!important;align-items:center;gap:6px;align-self:stretch;border-radius:2px;border:1px solid #d1d1d1;background:#fff;color:#1e1e1e;font-size:var(--font-size-14);font-style:normal;font-weight:400;line-height:22px;font-size:14px!important;border-radius:8px!important;&::placeholder{color:#606060!important;font-size:12px!important}}.remarks[_ngcontent-%COMP%]{height:80px!important}.form-label[_ngcontent-%COMP%]{font-size:var(--font-size-14);color:var(--font-color-black);font-weight:var(--font-weight-700);margin-bottom:5px}.globalContent[_ngcontent-%COMP%]{font-size:16px;color:#434343;font-weight:400;line-height:22.4px}.headings[_ngcontent-%COMP%]{font-size:var(--main-heading-font);font-weight:var(--font-weight-700)}.context-text[_ngcontent-%COMP%]{font-size:var(--font-size-14);margin:0;color:#434343}.heading-border[_ngcontent-%COMP%]{font-size:var(--main-heading-font);font-weight:var(--font-weight-700);line-height:44px;border-bottom:1px solid #e6e6e6;padding:0!important}.sub-heading[_ngcontent-%COMP%]{font-size:var(--font-size-16);font-weight:var(--font-weight-700)}.border-bot[_ngcontent-%COMP%]{border-bottom:1px solid var(--global-border)}.card[_ngcontent-%COMP%]{border-radius:16px;border:1px solid var(--global-border);background:#fff}.error-msg[_ngcontent-%COMP%]{color:red;font-size:12px}.save-btn[_ngcontent-%COMP%]{margin:10px 0 0}.mv20[_ngcontent-%COMP%]{margin:20px 0}.btn[_ngcontent-%COMP%]{background:var(--maroon-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;&:focus{color:#fff}&:hover{background:var(--maroon-color);color:#fff}}.save-btn[_ngcontent-%COMP%]{margin:10px;background:var(--maroon-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:10px 25px;line-height:100%;border:none}.gaps[_ngcontent-%COMP%]{margin:10px 15px 0 30px;width:calc(100% - 30px)}.form-text-alert[_ngcontent-%COMP%]{color:var(--states-error, #d91919);font-family:var(--font-family);line-height:140%}.save-btn[_ngcontent-%COMP%]:hover{background:var(--maroon-color);color:#fff}.cancel-btn[_ngcontent-%COMP%]{margin:10px;border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;background:var(--bg-color);color:var(--primary-color);padding:13px 34px;line-height:100%;border:none}.cancel-btn[_ngcontent-%COMP%]:hover{border:none;background-color:transparent;color:var(--primary-color)}.resetBtn[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:700;border:none!important;background:transparent;color:var(--maroon-color)!important;outline:none;&:hover{background:transparent;color:var(--maroon-color)}}.textarea[_ngcontent-%COMP%]{background:var(--bg-color);border:1.5px solid var(--input-border-color);border-radius:var(--border-radius);width:var(--full-width);height:40px;option {font-size: var(--font-size-14);} .navbar {border-radius: 0px !important;} .cdk-global-overlay-wrapper {z-index: 1112 !important;} .cdk-overlay-container {z-index: 1112 !important;} .required:after {content: " * "; color: red; margin-left: 5px;} @media (max-width: 767px) {.mat-expansion-indicator {&:after {color: var(--maroon-color) !important; padding: 2px !important;}} h3 {font-size: 20px !important;}} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat;} &:nth-child(1) {margin-left: 0px !important;} &:nth-child(3) {margin-right: 0px !important;}}.input-form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px;.labels {font-weight: var(--bold-font); font-size: var(--font-size-14) !important; line-height: 19px; color: var(--heading-color); width: var(--full-width); text-align: left; white-space: nowrap;} .select {background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px !important; padding: 9px; box-shadow: none; font-size: var(--font-size-16);} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat; cursor: pointer;} .wo-input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; box-shadow: none; color: var(--fonts-primary, #1e1e1e);} .input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; font-weight: normal;} textarea {border: 1px solid #ebebeb; font-size: var(--font-size-16); outline: none; box-shadow: none !important; padding: 10px; background: #fdfdfd;} .textareaSpan {position: absolute; font-size: 12px !important; color: #606060; right: 20px; bottom: 10px; color: var(--button-default, #8e433e); font-style: normal; font-weight: 700;}}.flb-33[_ngcontent-%COMP%]{flex-basis:33%}.mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__row[_ngcontent-%COMP%]{border-bottom:1px solid var(--global-border, #ebebeb);background:var(--global-white, #fdfdfd)}table[_ngcontent-%COMP%]{width:100%}.table-view[_ngcontent-%COMP%]{background:transparent!important}.table-container[_ngcontent-%COMP%]{height:480px;overflow:auto;.court-table {th {z-index: 10 !important;} td {z-index: 10 !important;}}}.img-field[_ngcontent-%COMP%]{color:red;margin-left:5px}.mat-mdc-dialog-container[_ngcontent-%COMP%]{margin-top:30px}.mat-expansion-panel[_ngcontent-%COMP%]{overflow:visible!important;font-family:var(--font-family)!important;.mat-expansion-indicator {margin-top: -6px !important; display: none !important; &::after {padding: 2px !important;}} .mat-expansion-panel-header {.mat-content {&:hover {img {background: #fff !important; padding: 8px; border-radius: 8px; cursor: pointer;} .afterHover {display: block;} .beforeHover {display: none;}} .afterHover {display: none; padding: 8px; border-radius: 8px; width: 35px; height: auto;} .beforeHover {padding: 8px; border-radius: 8px; width: 35px; height: auto;}}} .mat-content {align-items: center !important; justify-content: center; padding: 0; display: flex; flex-direction: column; .tooltiptext {visibility: hidden; width: 120px; background-color: #606060 !important; color: #fff !important; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; top: 0; left: 75px;} .tooltiptext {&::after {content: ""; position: absolute; top: 36%; left: -3%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent #606060 transparent transparent;}} &:hover {.tooltiptext {visibility: visible;}}} .mat-expansion-panel-body {padding: 0 15px !important; position: absolute; left: 46px; z-index: 1111; top: 0;} mat-nav-list {padding: 0 !important;} .aligned-with-icon {white-space: pre-wrap; line-height: initial; margin-top: 3px !important;}}.mat-expanded[_ngcontent-%COMP%]{.mat-expansion-indicator {margin-top: 6px !important;}}.upload-section[_ngcontent-%COMP%]{position:relative;padding:25px;height:auto;text-align:center;background:#f8f8f8;border:1px dashed #e6e6e6;border-radius:8px;display:flex;flex-direction:column;img {width: 40px; height: 40px;} label {color: var(--button-default, #8e433e); font-size: 12px !important; font-style: normal; font-weight: 700; span {font-size: 12px !important;}} .visiblle {z-index: 1; position: absolute; opacity: 0; width: 100%; text-align: center; left: 0; height: 86px; top: 0;} small {word-break: break-all;}}.mt20[_ngcontent-%COMP%]{margin:20px 0 0}.mb20[_ngcontent-%COMP%]{margin:0 0 20px}.ml10[_ngcontent-%COMP%]{margin:0 0 0 20px}.mr10[_ngcontent-%COMP%]{margin-right:0 20px 0 0}.mb10[_ngcontent-%COMP%]{margin-bottom:10px}.mt10[_ngcontent-%COMP%]{margin:10px 0 0}.m20[_ngcontent-%COMP%]{margin:20px}.m0[_ngcontent-%COMP%]{margin:0!important}.p0[_ngcontent-%COMP%]{padding:0!important}.pb20[_ngcontent-%COMP%]{padding-bottom:20px}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row}.btn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;border:0;&:focus{color:#fff}&:hover{background:var(--selected-color);color:#fff}}.save-btns[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:10px 24px;line-height:100%;border:0;&:focus{color:#fff}&:hover{background:var(--selected-color);color:#fff}}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0!important}.content-text[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:#434343}.header[_ngcontent-%COMP%]{padding:5px 10px}.status-text[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#8e433e;margin:10px;text-align:center;display:flex;justify-content:center;background-color:transparent;border:none}.gap[_ngcontent-%COMP%]{padding:10px 0!important}.gap1[_ngcontent-%COMP%]{padding:30px 0 0!important}.pageContent[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:22.4px;color:#606060}.options[_ngcontent-%COMP%]{display:flex}.img-class[_ngcontent-%COMP%]{height:32px;width:32px;border-radius:50%;background-color:#f9f1f1;display:flex;justify-content:center;align-items:center;margin:0 2px}.list-padding[_ngcontent-%COMP%]{padding:0 26px!important}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px white inset!important}.section[_ngcontent-%COMP%]{border-radius:var(--border-radius);border:1px solid var(--global-border);display:flex;justify-content:space-between;padding:20px;background-color:var(--global-white);box-shadow:0 20px 40px #0000000d}.content[_ngcontent-%COMP%]{display:flex}.pdf-section[_ngcontent-%COMP%]{margin:0 0 7px 5px}.pdf-head[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1e1e1e;margin:0}.pdf-text[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:#0b48e4;margin:0}.rws[_ngcontent-%COMP%]{padding:20px 0 80px}.top-search[_ngcontent-%COMP%]{width:320px;background:#fff url(/assets/search-ico.svg) no-repeat right;background-size:22px;background-position:94% 13px;padding:12px 20px;font-size:var(--font-size-14);outline:0;border-radius:50px;border:1px solid var(--global-border, #ebebeb)}.normal-text[_ngcontent-%COMP%]{font-size:14px}.bold[_ngcontent-%COMP%]{font-weight:700!important}.small-font[_ngcontent-%COMP%]{font-size:12px!important}.card[_ngcontent-%COMP%]{border-radius:15px;padding:20px;position:relative;margin:0 0 20px}.admit-label[_ngcontent-%COMP%]{position:absolute;top:-10px;background-color:#fff;padding:0 8px;font-size:14px;color:#606060}.imgs[_ngcontent-%COMP%]{display:flex;align-items:center}.card-block[_ngcontent-%COMP%]{border-radius:20px 20px 0 0;.card-header {height: 110px; border-bottom: 1px solid var(--global-border); display: flex; justify-content: space-between; align-items: center;} .card-header-l {height: 160px !important;} .add-img {display: flex; justify-content: center; align-items: center;} .card-footer {padding: 0; background-color: transparent; border-top: 1px solid var(--global-border); margin-top: 20px;} .card-footers {padding: 0; background-color: transparent; border-top: 1px solid var(--global-border);}}.card-header[_ngcontent-%COMP%]{height:74px;background:rgba(240,221,219,1);display:flex;justify-content:space-between;align-items:center;padding:20px}th[_ngcontent-%COMP%]{font-size:14px;font-weight:400}td[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.pos-bedge[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;border-radius:6px}.card-body[_ngcontent-%COMP%]{padding:10px 20px}.border-cls[_ngcontent-%COMP%]{border:1px solid rgba(230,230,230,1)}.results[_ngcontent-%COMP%]{height:72px;border-radius:5px;display:flex;justify-content:space-between;align-items:center}.gb[_ngcontent-%COMP%]{background-color:#188906!important;margin:0 5px}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-block[_ngcontent-%COMP%]{padding:0;background-color:var(--global-white)}.space[_ngcontent-%COMP%]{display:flex;margin:20px 0}.blocks[_ngcontent-%COMP%]{width:49%;border-radius:20px;overflow:hidden}.border-cls[_ngcontent-%COMP%]:nth-child(even){margin-left:22px}.prime[_ngcontent-%COMP%]{color:var(--primary-color)}.text-col[_ngcontent-%COMP%]{color:#999}.app-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#434343}.note-title[_ngcontent-%COMP%]{font-size:18px;font-weight:800;color:#606060}.card-width[_ngcontent-%COMP%]{width:95%}.form-block[_ngcontent-%COMP%]{background-color:var(--global-white);border:1px solid var(--global-border);padding:30px!important;border-radius:20px}.edit-input[_ngcontent-%COMP%]{height:48px;background-color:var(--global-white);border:1px solid var(--global-border);border-radius:var(--border-radius);padding:3px}.gray-area[_ngcontent-%COMP%]{height:40px;background:rgba(241,241,241,1);border-radius:5px;padding:9px 20px}.edit-text[_ngcontent-%COMP%]{color:#606060;font-size:14px;font-weight:400}.gray-back[_ngcontent-%COMP%]{background:rgba(241,241,241,1)!important;border:none;.gray-area {height: 40px; background: rgba(241,241,241,1); border-radius: 5px; padding: 9px 20px;} .edit-text {color: rgba(96,96,96,1); font-size: 14px; font-weight: 400;}}.radio-cont[_ngcontent-%COMP%]{display:flex;gap:20px}.button-block[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center}.label-checkk[_ngcontent-%COMP%]{font-weight:400!important}.form-check-input[_ngcontent-%COMP%]{border:1px solid gray}.form-check-input[_ngcontent-%COMP%]:checked{background-color:var(--primary-color)!important;border-color:var(--primary-color)!important;outline:none!important;box-shadow:none!important}.dateBg[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important}.wo-input[_ngcontent-%COMP%]{font-size:var(--font-size-16);background:var(--bg-color);border:1px solid var(--input-border-color);border-radius:var(--border-radius);width:var(--full-width);height:40px;padding:10px!important;box-shadow:none;color:var(--fonts-primary, #1e1e1e)}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:grey;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:grey}.trans-back[_ngcontent-%COMP%]{font-weight:800;font-size:16px;color:var(--primary-color);margin:0 15px;background-color:transparent;border:0;cursor:pointer;outline:none}.dateBgg[_ngcontent-%COMP%]{background:url(eyeIcon.0b318ead5f9673fd.svg) no-repeat (99%,10px),linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important;height:10px}@media (min-width: 1400px){.container[_ngcontent-%COMP%]{min-width:100%!important;padding-left:80px!important;padding-right:80px!important}}@media (max-width: 1200px){.blocks[_ngcontent-%COMP%]{width:100%!important}.save-btn[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;align-items:center!important}.border-cls.blocks[_ngcontent-%COMP%]:nth-child(even){margin-left:0}}@media (max-width: 767px){.excellency-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.border-cls[_ngcontent-%COMP%]:nth-child(even){margin-left:0;margin-top:10px}.gaps[_ngcontent-%COMP%]{margin:10px 5px 0 10px;width:calc(100% - 10px)}}.fwdLetters[_ngcontent-%COMP%]{.ng-dropdown {.drop-list {top: 44px !important; width: 96% !important; padding: 13px 34px; line-height: 100%;}}}.save-btn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.cancel-btn[_ngcontent-%COMP%]{margin:10px;border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;background:var(--bg-color);color:var(--primary-color);border:none;padding:13px 34px;line-height:100%}.cancel-btn[_ngcontent-%COMP%]:hover{border:none;background:transparent;color:var(--primary-color)}.previewBtn[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:8px;align-items:center;border-radius:50px;border:1px solid #ebebeb;background:#fffdfa;font-size:12px;font-weight:400;line-height:24px;padding:0 8px;height:24px}.resetBtn[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:700;border:none!important;background:transparent;color:var(--selected-color)!important;outline:none;&:hover{background:transparent;color:var(--selected-color)}}.textarea[_ngcontent-%COMP%]{background:var(--bg-color);border:1.5px solid var(--input-border-color);border-radius:var(--border-radius);font-size:var(--font-size-14);resize:none;width:var(--full-width);height:35px;padding:5px 10px}.navbar[_ngcontent-%COMP%]{border-radius:0!important}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{z-index:1112!important}.required[_ngcontent-%COMP%]:after{content:"*";color:red;margin-left:5px}@media (max-width: 767px){.with-nav[_ngcontent-%COMP%]{top:85px!important}.save-btn[_ngcontent-%COMP%]{padding:10px;font-size:12px}.mat-expansion-indicator[_ngcontent-%COMP%]{&:after{color:var(--selected-color)!important;padding:2px!important}}}h3[_ngcontent-%COMP%]{font-size:20px!important}.mdc-dialog__container[_ngcontent-%COMP%]{height:calc(100vh - 80px)!important}.breadcrumb[_ngcontent-%COMP%]{li {a {color: #1e1e1e !important; font-size: 14px; text-decoration: none; font-weight: 400;} a.active {color: #1e1e1e !important; font-weight: 700;}}}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:var(--bs-breadcrumb-divider, ">")!important;font-size:18px;margin-top:-3px;color:#1e1e1e!important}.active[_ngcontent-%COMP%]{color:var(--fonts-primary)!important;font-weight:var(--font-weight-600)!important}.formWidth[_ngcontent-%COMP%]{width:80%!important;margin:auto}.upload_icon[_ngcontent-%COMP%]{img {width: 15px; height: auto;}}.imgSection[_ngcontent-%COMP%]{border:1px solid #e6e6e6;padding:20px;display:flex;flex-direction:column;margin-top:10px;border-radius:20px;small {font-size: 16px; vertical-align: middle;} .attchmentIcon {border-radius: 3.484px; border: .871px solid #dfdfdf; padding: 10px 0px; margin-right: 25px; height: 48px; width: 48px; background-color: var(--bg-color);} .imgSectionInner {padding: 10px 20px; border-bottom: 1px solid #ebebeb; justify-content: space-between; display: flex; &:last-child {border: none !important;}} .wb {background-color: #f1f1f1;} .imgSectionInner:last-of-type {border: none !important;}}.btn-check[_ngcontent-%COMP%]:checked + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check) + .btn[_ngcontent-%COMP%]:active{background:var(--primary-color)!important;color:#fff;outline:none;border-color:var(--primary-color)!important;box-shadow:none}.demo-table[_ngcontent-%COMP%]{border:1px solid #e6e6e6!important;box-shadow:none;border-collapse:inherit;overflow:visible;border-radius:20px;th {background-color: #f0dddb !important; color: #252525 !important; padding: 16px 20px !important; font-weight: 600;} td {background-color: #fff; padding: 16px 20px !important;} tr:first-child {th:first-child {border-radius: 20px 0 0 0;} th:last-child {border-radius: 0 20px 0 0;}} tr:last-child {td:first-child {border-radius: 0 0 0 20px;} td:last-child {border-radius: 0 0 20px 0;}}}.with-nav[_ngcontent-%COMP%]{top:160px!important}.without-nav[_ngcontent-%COMP%]{top:110px!important}.document-container[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:20px;border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:1px;padding:20px;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:100%;position:relative;overflow:hidden}.document-card[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:0px 0px 1px 0px;padding:12px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-shrink:0;width:100%;position:relative}.document-details[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;align-items:center;justify-content:flex-start;flex-shrink:0;position:relative}.document-image-container[_ngcontent-%COMP%]{flex-shrink:0;width:47.03px;height:48px;position:static}.document-image-placeholder[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:3.48px;border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:.87px;width:47.03px;height:48px;left:0;top:0;display:flex;justify-content:center;align-items:center}.document-image[_ngcontent-%COMP%]{width:22px;height:22px}.doc-icos[_ngcontent-%COMP%]{width:100%!important}.document-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;position:relative}.document-title[_ngcontent-%COMP%]{color:var(--fonts-subtext, #434343);text-align:left;font-size:14px;font-weight:600;position:relative}.document-title-fad[_ngcontent-%COMP%]{color:#8d8686!important}.document-size[_ngcontent-%COMP%]{color:#999;text-align:left;font:var(--caption-regular, 400 12px/140% "Nunito Sans", sans-serif);position:relative}.document-icon[_ngcontent-%COMP%]{flex-shrink:0;position:relative;overflow:visible;cursor:pointer}.msg-erro[_ngcontent-%COMP%]{display:block;margin:10px 0;.mgs {color: red; font-size: 12px;}}.desg-crd[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--global-border, #e6e6e6);background:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:14px;.desig-head {padding-bottom: 10px; border-bottom: 1px solid #e6e6e6; .cret-by {color: var(--fonts-title, #252525); font-size: var(--font-size-14); font-style: normal; font-weight: 700; line-height: 140%;}} .prs-blk {display: flex; justify-content: space-between; flex-direction: row; align-items: center; padding-top: 10px; .nm {color: var(--fonts-primary, #1e1e1e); font-size: var(--font-size-14); font-style: normal; font-weight: 700; line-height: 140%;} .bgj {display: flex; justify-content: center; align-items: center; padding: 5px; border-radius: 2rem; background: #fff8ed; color: var(--button-default, #8e433e); font-size: var(--font-size-14); font-style: normal; font-weight: 600; line-height: 140%;}}}.filter-footer[_ngcontent-%COMP%]{text-align:center;border-top:1px solid #8080802e;display:flex;justify-content:flex-end;align-items:center;padding:10px 0 0}.filter-dlogs[_ngcontent-%COMP%]{padding:30px 24px 10px!important}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:10px!important;height:10px!important;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:"";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:36%!important;left:2px!important;width:7px!important;height:3px!important;margin-top:-4px!important;border-style:solid;border-color:#fff;border-width:0 0 1.5px 1.5px!important;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #e6e6e6!important;color:#1e1e1e!important;box-shadow:none!important;padding:5px!important;line-height:100%!important;background:linear-gradient(to right,#fff calc(100% - 22px),#f9f1f1 22px)!important;a {color: #000 !important; border: 1px solid #000 !important; border-radius: 50% !important; font-size: 8px !important; padding: 0px 3px 1px 3px !important; vertical-align: middle !important; margin-left: 5px !important;}}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked+div:before{background:var(--selected-color)!important}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:before{border:1.5px solid var(--selected-color)!important;color:var(--selected-color)!important}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#f0dddb!important}.dia-header[_ngcontent-%COMP%]{color:#252525;font-size:16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(128,128,128,.39);padding:5px 0 15px;margin-bottom:15px;font-weight:700}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{min-height:36px!important;max-height:69px!important;overflow:auto;border:1px solid #e6e6e6!important;padding:5px 34px 5px 12px!important;background-position:97% 14px;background-repeat:no-repeat;.selected-item {span {font-size: 10px !important;}}}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{padding-left:25px!important}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{margin-top:2px!important}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{border-color:#731d1d transparent!important;display:none!important}.th-fnt[_ngcontent-%COMP%]{font-size:14px!important;font-weight:700!important}.multiselect-dropdown[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important}.woblock[_ngcontent-%COMP%]{display:flex;.havrem {position: relative; margin-top: -12px; &:hover .toltip-notify {visibility: visible;} .toltip-notify {background: #fff9f0; display: flex; justify-content: space-between; flex-direction: column; padding: 15px 20px; width: 200px; border-radius: 8px; position: absolute; top: -105px; left: -22px; visibility: hidden; .txt {color: var(--fonts-body, #606060); font-size: 14px; font-style: normal; font-weight: 600; line-height: 140%;} a.vwrem {color: var(--button-default, #8e433e); font-size: 15px; font-style: normal; font-weight: 700; line-height: 140%; text-decoration: none; margin-top: 10px; cursor: pointer;} &::after {content: ""; position: absolute; bottom: -10px; left: 15%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #fff9f0;}} img {cursor: pointer;}}}@media (max-width: 767px){.breadcrumb[_ngcontent-%COMP%]{li {a {color: #1e1e1e !important; font-size: 12px;}}}.with-nav[_ngcontent-%COMP%]{top:85px!important}.save-btn[_ngcontent-%COMP%]{padding:10px;font-size:12px}.card-width[_ngcontent-%COMP%]{width:95%!important}.form-block[_ngcontent-%COMP%]{padding:20px!important}}@media (max-width: 450px){.with-nav[_ngcontent-%COMP%]{top:79px!important}.form-label[_ngcontent-%COMP%], label[_ngcontent-%COMP%], .input-form-fields[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{font-size:11px!important}}//[_ngcontent-%COMP%]   filter[_ngcontent-%COMP%]   sections[_ngcontent-%COMP%]   css[_ngcontent-%COMP%]   .selected-filters-section[_ngcontent-%COMP%]{.filters {display: flex; flex-wrap: wrap; .value-block {display: flex; padding: 6px 12px; justify-content: space-between; align-items: center; border-radius: 20px; border: 1px solid #e6e6e6; background: #fffcf6; margin-right: 20px; margin-top: 10px; value-block:nth-child(1) {margin-left: 0px;} .value {font-size: 12px; color: #1e1e1e; font-style: normal; font-weight: 400;} .s-icons-close {font-size: 15px; color: var(--selected-color); width: unset; height: unset; margin-left: .5rem; cursor: pointer;}}}}@media (max-width: 450px){.with-nav[_ngcontent-%COMP%]{top:79px!important}}.court-table[_ngcontent-%COMP%]{width:var(--full-width);th {height: 48px; color: var(--fonts-body); font-size: var(--base-font); background-color: #f0dddb !important; font-size: 14px; font-weight: 700; color: #252525;} td {font-size: var(--base-font); color: #252525;}}.btn.reset[_ngcontent-%COMP%]{background:transparent;color:var(--maroon-color)}.tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;.tag {display: flex; justify-content: space-between; align-items: center; border-radius: 4px; border: 1px solid var(--global-border, #e6e6e6); background: var(--global-white, #fdfdfd); .val {color: var(--fonts-primary, #1e1e1e); font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;} .crss-btn {background: var(--button-icon-background, #f9f1f1); img {width: 14px;}}}}.mat-mdc-dialog-container[_ngcontent-%COMP%]{.mdc-dialog__surface {background-color: transparent !important; box-shadow: none !important; height: 140px; .blocks {width: 100% !important; margin: 10px 0px;} .space {margin: 0px !important;} .border-cls:nth-child(even) {margin-left: 0px !important;} .row-type {display: flex; justify-content: space-between;} .content-text {font-size: 14px;} .context-text {font-size: 12px;} .ss-gap {padding: 15px !important; position: relative;} .normal-text {font-size: 12px;} .trans-background {background-color: transparent;} .list-margin {margin-bottom: 20px !important;}}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:#00000078;.dialog {background-color: white; border: 1px solid var(--input-border-color); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 700px; width: 80%; max-height: calc(100vh - 20px); overflow: auto;}}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed}.edit-input[_ngcontent-%COMP%]{height:48px;background-color:var(--global-white);border:1px solid var(--global-border);border-radius:var(--border-radius);padding:4px;.gray-area {height: 40px; background: rgba(241,241,241,1); border-radius: 5px; padding: 9px 20px;} .edit-text {color: rgba(96,96,96,1); font-size: 14px; font-weight: 400; width: 100%; border: none; background: transparent; outline: none;}}//disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:   by[_ngcontent-%COMP%]   Vikin[_ngcontent-%COMP%]   .disabled-blk[_ngcontent-%COMP%]{margin-top:10px}.disabled-input[_ngcontent-%COMP%]{padding:2px;border-radius:8px;border:1px solid;border:1px solid var(--global-border, #e6e6e6);background:#fff;display:flex;justify-content:flex-start;align-items:center;height:40px;.value {padding: 5px 10px; border-radius: 5px; background: #f1f1f1; color: var(--fonts-primary, #1e1e1e); font-size: 16px; font-style: normal; font-weight: 400; line-height: 140%; width: 100%; display: flex; justify-content: space-between; .val {width: 100%;}} .dis_input {border: none; background: transparent; outline: none; width: 100%;}}.custom-dropdown-css-class[_ngcontent-%COMP%]{position:relative}.vacancy-table[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:20px;box-shadow:none;border-collapse:inherit;border:1px solid #e6e6e6!important;th,td {padding: 10px !important; border-bottom: 1px solid #0000001f;} tr:first-child th:first-child {border-radius: 20px 0 0 0;} tr:first-child th:last-child {border-radius: 0 20px 0 0;} tr:last-child td:first-child {border-radius: 0 0 0 20px;} tr:last-child td:last-child {border-radius: 0 0 20px;}}.activeTab[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;border-radius:4px 4px 0 0;background-color:#731d1d}.table-header[_ngcontent-%COMP%]{width:100%;height:60px;justify-content:space-between;align-items:flex-start;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom:1px solid var(--global-border, #e6e6e6);background:var(--button-menu-hover, #f0dddb)}.table-row[_ngcontent-%COMP%]{width:100%;height:auto;padding:20px 40px!important;justify-content:space-between;align-items:flex-start;flex-shrink:0;border-bottom:1px solid var(--global-border, #e6e6e6)}.table-header-cell[_ngcontent-%COMP%]{font-size:14px;background-color:#f0dddb!important;color:#252525!important;padding:16px!important;font-weight:600}.table-body[_ngcontent-%COMP%]{width:100%;height:auto}.table-data-row[_ngcontent-%COMP%]{width:100%;height:60px;background:var(--global-white, #fdfdfd)}.inner-table-row[_ngcontent-%COMP%]{width:100%;height:50px;background:var(--button-icon-background, #f9f1f1)}.table-data-cell[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:#00000078;transition:opacity 1s ease;.dialog {background-color: white; border: 1px solid var(--input-border-color); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 50%; width: 36%; max-height: calc(100vh - 20px); overflow: auto; position: relative;} ::-webkit-scrollbar {padding: 1px; background: #b6b6b6; width: 10px; margin-right: 10px;} ::-webkit-scrollbar-track {background: #b6b6b6; margin-right: 10px;} ::-webkit-scrollbar-thumb {background: #8e433e; margin-right: 10px; height: 40px;} .headTop {justify-content: space-between;} .flex {display: flex; justify-content: space-between; h2 {margin: 0; font-size: var(--font-size-18); font-weight: var(--font-weight-700);}} .flexSectn {padding: 20px 0;}}.confirm-ncc[_ngcontent-%COMP%]{.label {color: #c17571 !important;}}.p0[_ngcontent-%COMP%]{.disabled-blk {margin: 0 !important;}}.form-block[_ngcontent-%COMP%]{padding:15px!important;ol {margin: 0; padding-left: 15px; li {padding: 0;}}}.dropNew[_ngcontent-%COMP%]{.drop-list {top: 43px !important;}}.form-control.wo-input.dateBg[_ngcontent-%COMP%]{display:block!important}.webcam-modal[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;.webCamGuide {width: 100% !important; &::before {left: 53% !important; transform: translate(-53%,-50%) !important; background-position: center !important; top: 60% !important;}} .modal-body {padding: 0 !important; width: 100% !important;} .webcam-wrapper {width: 100%; height: 100%; video {width: 100%; height: 100%;} canvas {width: 100%; height: 100%;}}}.matDate.mat-mdc-form-field[_ngcontent-%COMP%]{width:100%!important;font-family:var(--font-family);&:hover{.mat-mdc-form-field-focus-overlay {background: transparent !important;}}.mat-mdc-form-field-focus-overlay {background: transparent !important;} .mdc-text-field--filled:not(.mdc-text-field--disabled) {border: 1px solid var(--global-border); border-radius: var(--border-radius);} .mat-mdc-form-field-infix {padding: 0 !important; min-height: 40px !important; max-height: 40px;} .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {top: 23px !important;} .mat-mdc-text-field-wrapper {background: linear-gradient(to right,#fff calc(100% - 46px),#f9f1f1 40px) !important; padding-left: 10px !important;} .mat-mdc-form-field-flex {max-height: 40px;} .mat-datepicker-input {margin-top: 7px; font-size: 14px !important; &::placeholder {font-size: 14px !important;}} .mdc-line-ripple {display: none;} .mat-mdc-icon-button.mat-mdc-button-base { --mat-mdc-button-persistent-ripple-color: none !important; } .mat-datepicker-toggle-active {color: rgba(0,0,0,.54);} .mat-mdc-icon-button svg,.mat-mdc-icon-button img {width: var(--mdc-icon-button-icon-size, 19px); height: var(--mdc-icon-button-icon-size, 19px);}}.mat-calendar-body-cell[_ngcontent-%COMP%]{&:hover{.mat-calendar-body-cell-content.mat-focus-indicator {background-color: #f9f1f1 !important; color: #000 !important;}}}.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f9f1f1!important;color:#000!important}.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background:#f9f1f1!important}.matDate[_ngcontent-%COMP%]{.mat-mdc-form-field-subscript-wrapper {display: none;}}.cdk-overlay-container[_ngcontent-%COMP%]{.cdk-overlay-connected-position-bounding-box {z-index: 1114;}}@media (max-width: 767px){.formBlk[_ngcontent-%COMP%]   .input-form-fields[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{white-space:normal}span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:var(--font-size-12)!important}.trans-back[_ngcontent-%COMP%], .edit-input[_ngcontent-%COMP%]   .edit-text[_ngcontent-%COMP%], .save-btns[_ngcontent-%COMP%]{font-size:var(--font-size-12)}.form-control[_ngcontent-%COMP%], .matDate.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-datepicker-input[_ngcontent-%COMP%], .disabled-input[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:var(--font-size-12)!important}}@media (max-width: 1200px){.mob-m0[_ngcontent-%COMP%]{.border-cls:nth-child(even) {margin-left: 0 !important;}}}@media (max-width: 600px){.rws.mob[_ngcontent-%COMP%]{padding:20px}.edit-input[_ngcontent-%COMP%]   .gray-area[_ngcontent-%COMP%]{padding:8px}.edit-input[_ngcontent-%COMP%]   .edit-text[_ngcontent-%COMP%]{font-size:var(--font-size-11)}}.dialog-image[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;.dialog-img {background-color: white; border: 1px solid #ebebeb; border-radius: 10px; padding: 20px 40px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 950px; height: calc(100vh - 100px); width: 90%;}}.attachModal[_ngcontent-%COMP%]{.attchInner {width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; margin: auto; text-align: center; img {width: 100%;} mat-icon {position: absolute; right: 8px; cursor: pointer; top: 10px;} object {width: 100%; height: 100%;}}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:rgba(0,0,0,.4705882353)}.dialog-overlay[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]{background-color:#fff;border:1px solid var(--input-border-color);border-radius:10px;padding:20px 40px;box-shadow:0 0 10px #0000004d;max-width:500px;width:80%;max-height:calc(100vh - 20px);overflow:auto}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.atag_btn[_ngcontent-%COMP%]{display:flex}.content-header[_ngcontent-%COMP%]{height:54px;background:rgb(255,249,240)}.prime[_ngcontent-%COMP%]{margin:0}.items[_ngcontent-%COMP%]{display:flex;align-items:center}.small-padding[_ngcontent-%COMP%]{padding:10px}li[_ngcontent-%COMP%]{padding:2px 0}.image-group[_ngcontent-%COMP%]{display:flex;justify-content:center}.img[_ngcontent-%COMP%]{background-color:var(--global-white);display:flex;justify-content:center;align-items:center}.action[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}.bttn[_ngcontent-%COMP%]{display:flex;justify-content:center}']
                    })
                }
                return i
            })();

            function Ie(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3", 5), t._uU(5, "Please Note"), t.qZA(), t.TgZ(6, "a", 6)(7, "img", 7), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.closeDialog())
                    }), t.qZA()()()(), t.TgZ(8, "div", 3)(9, "div", 8)(10, "ol", 9)(11, "li"), t._uU(12, "Find a place with good lighting and plain background "), t.qZA(), t.TgZ(13, "li"), t._uU(14, " Put the Camera on eye level"), t.qZA(), t.TgZ(15, "li"), t._uU(16, " Frame yourself right in front of the webcam looking straight"), t.qZA(), t.TgZ(17, "li"), t._uU(18, " Candidates shouldn't wear a mask or glasses when taking a live photo."), t.qZA()(), t.TgZ(19, "div", 10)(20, "div", 11)(21, "div", 12), t._UZ(22, "img", 13), t.TgZ(23, "div", 14), t._UZ(24, "img", 15), t.qZA()()(), t.TgZ(25, "div", 11)(26, "div", 12), t._UZ(27, "img", 16), t.TgZ(28, "div", 14), t._UZ(29, "img", 17), t.qZA()()(), t.TgZ(30, "div", 11)(31, "div", 12), t._UZ(32, "img", 18), t.TgZ(33, "div", 14), t._UZ(34, "img", 15), t.qZA()()()(), t.TgZ(35, "div", 19)(36, "button", 20), t._UZ(37, "img", 21), t._uU(38, " Capture Live Photo"), t.qZA()()()()()()
                }
            }
            let Ue = (() => {
                class i {
                    constructor(n, o) {
                        this.data = n, this.dialogRef = o, this.popcheck = !0
                    }
                    closeDialog() {
                        this.popcheck = !1
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(s.WI), t.Y36(s.so))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-live-photo-capture"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["class", "dialog-overlay filterBox", 4, "ngIf"],
                            [1, "dialog-overlay", "filterBox"],
                            [1, "dialog", "filter-dlogs"],
                            [1, "row"],
                            [1, "flex", "headTop", "border-bot", "small-padding"],
                            [1, "no-margin"],
                            [1, "atag_btn"],
                            ["src", "assets/images/cancel-maroon-Border.svg", "aria-hidden", "false", "aria-label", "Example close icon", "fontIcon", "close", 2, "cursor", "pointer", "width", "20px", 3, "click"],
                            [1, "dailog-body", "gap"],
                            ["type", "1"],
                            [1, "image-group"],
                            [1, "img-count"],
                            [1, "img"],
                            ["src", "assets/images/Mask_group.svg"],
                            [1, "action"],
                            ["src", "assets/images/cancel-i.svg"],
                            ["src", "assets/images/Mask_group1.svg"],
                            ["src", "assets/images/accept.svg"],
                            ["src", "assets/images/Mask_group2.svg"],
                            [1, "bttn", "gap"],
                            [1, "save-btn"],
                            ["src", "assets/images/camera.svg"]
                        ],
                        template: function(o, e) {
                            1 & o && t.YNc(0, Ie, 39, 0, "div", 0), 2 & o && t.Q6J("ngIf", e.popcheck)
                        },
                        dependencies: [l.O5],
                        styles: ['@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Black.32e88a6d72728d09.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-BlackItalic.5a6d846a5f529172.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Bold.c80659c569fd7544.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-BoldItalic.34238e2263b40a9c.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraBold.80d1ae589c6b001b.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraBoldItalic.0bece5755dd78993.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraLight.991f9a1903723691.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-ExtraLightItalic.61fe06a310084b11.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Italic.dccfd84c97d4f67b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Light.2c87b5c3768c0eac.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-LightItalic.44f06927efa59759.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Medium.d56f4d956f451601.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-MediumItalic.3a9ffc7d71903586.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-Regular.9d8660e99a9a3c6d.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-SemiBold.932a58e6105c7e74.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Condensed-SemiBoldItalic.557c31ee638149b0.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Black.716e7088351a2919.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-BlackItalic.aa5764c125179e8d.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Bold.6e55b815d019e3e1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-BoldItalic.06eb77e71db9ddb7.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraBold.43e0093fa5e2e95c.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraBoldItalic.fd60b3cd5fcb25f1.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraLight.e9faf35fe54b0c89.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-ExtraLightItalic.ecf44b9e9384cf05.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Italic.8742e298eab3357b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Light.d738ade7d59cb798.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-LightItalic.5ee4368275e7c52f.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Medium.3178109888cdb5e9.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-MediumItalic.2da13f4da7500cad.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-Regular.9bdcc5e716fb8ece.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-SemiBold.4965cc43b18be4bf.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_Expanded-SemiBoldItalic.4bbb192cceaf4274.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Black.c17f9ad76553d0ab.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-BlackItalic.75aa0f4a664972f0.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Bold.ca7c27ffb6d02c01.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-BoldItalic.039aeb8d60c5d70f.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraBold.c272c8fce32fdc37.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraBoldItalic.5580762f4286f20d.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraLight.c3fec2f9c5374107.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-ExtraLightItalic.007aa6630e457c0c.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Italic.da3999deabee6526.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Light.29ca48c8f4c0324e.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-LightItalic.f2f6e463302b0040.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Medium.598be77941e2e9e1.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-MediumItalic.817bdf1e0851e558.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-Regular.04729c35cbed58bb.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-SemiBold.9176b5e088911fbf.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiCondensed-SemiBoldItalic.e22fa45e671a78b7.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Black.19827a84bb9a5a43.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-BlackItalic.1d17e9fbe9e2b17c.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Bold.ea2662d6f9224ba6.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-BoldItalic.91fa39e9d1ccc261.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraBold.abf52b3050da4465.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraBoldItalic.539ac5c0760f284b.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraLight.e35bef6a04f81819.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-ExtraLightItalic.f1e3f192b040a372.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Italic.cc28cb26c10752b5.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Light.81aafd56361d6615.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-LightItalic.62df2fef320920a0.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Medium.6b2fc9a275787054.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-MediumItalic.3950c555daa23424.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-Regular.483dcf5898b16649.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-SemiBold.5f45c3cb83fec8f7.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt_SemiExpanded-SemiBoldItalic.a4e8813b58320025.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Black.6e40217edffbfffe.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-BlackItalic.a9719b1dd6745d76.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Bold.c0ee083586d63ea1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-BoldItalic.35ffd59cc0134784.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraBold.e12c7d83a8f6ff1e.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraBoldItalic.df6dfe9dbbce9c3a.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraLight.b45d4bea4ec24b79.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-ExtraLightItalic.f2087fbc8dac21dd.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Italic.0f56becd32d1b1ee.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Light.ec84380ee7b28ee8.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-LightItalic.f338ab33156e2b09.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Medium.67a8ee21520203b0.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-MediumItalic.78f3639eb2732e1f.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-Regular.c66c0fb37990205c.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-SemiBold.498aa3656e82a9cd.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_10pt-SemiBoldItalic.bc8bbc59ad4bf053.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Black.6689094048cab74c.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-BlackItalic.b5ea81a13a4cabc8.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Bold.c99e33a0005aef86.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-BoldItalic.d92ddac9e0553e89.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraBold.86c4d9cd4e61fe6b.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraBoldItalic.ec7caf538e276c45.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraLight.a8e2d559686f3945.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-ExtraLightItalic.e249ba05ee457326.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Italic.a3baa5685a86ef25.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Light.273eed85bd232843.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-LightItalic.d97de468b69f6feb.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Medium.6c4e9a87ca5bee88.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-MediumItalic.6f4c9bb25753bcfb.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-Regular.c8ed843dc06f9a74.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-SemiBold.09a06bb03a0736ad.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Condensed-SemiBoldItalic.c77bcca61c764899.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Black.a3a31db84a67e5f4.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-BlackItalic.85bd0db1f44c1979.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Bold.451f143962dbd79c.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-BoldItalic.81f883819f893f71.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraBold.a4ca9e96c373477a.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraBoldItalic.9a05eef49d97e3cd.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraLight.f639712d038c25e6.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-ExtraLightItalic.abab100e0c8e3dbb.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Italic.4c279d7b4812adb2.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Light.694b18d053a61b3c.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-LightItalic.e7a532f40e3e0a1d.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Medium.be38702af791ab1e.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-MediumItalic.30b69460f2ca2ec1.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-Regular.185343ab5e247902.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-SemiBold.aef47429f3e569f1.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_Expanded-SemiBoldItalic.282b3e4b04d5c90b.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Black.4f54208fec1b0ecc.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-BlackItalic.778ebc7e4777112a.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Bold.7560457a41cdaee6.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-BoldItalic.ba2d78df9fd90b9f.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraBold.2a8a829d0ed8d7c1.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraBoldItalic.c03be6e0129a0049.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraLight.b14232a5f0c09d73.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-ExtraLightItalic.49a213cb813f4816.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Italic.61087e7b5279b0e5.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Light.43bfcdca43853bc3.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-LightItalic.45f1246d694c65b7.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Medium.1d66781f0780cfcb.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-MediumItalic.85ac92a412ea45d6.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-Regular.25bc22f4ceeb24bd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-SemiBold.b67dfcebcb19af56.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiCondensed-SemiBoldItalic.bc9c2ad43ab67e18.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Black.e3376d9bc70b6cf6.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-BlackItalic.416f57ccd9d0bfdb.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Bold.cd28dd6054dec4a2.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-BoldItalic.afb98b0ad1e92a55.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraBold.938b58959a6cfaa5.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraBoldItalic.a46e95a5c6181322.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraLight.1b23a57d204faf2a.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-ExtraLightItalic.1c2e4709f56961ff.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Italic.3069a7f3e057104b.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Light.f800f8f3a817e4ad.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-LightItalic.92edc0ea6981efed.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Medium.a2faa7013f2427db.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-MediumItalic.835911035f6b998a.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-Regular.4c280bf4e67de147.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-SemiBold.908436a4662ff287.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt_SemiExpanded-SemiBoldItalic.1a659fb319ec2376.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Black.042dad3077a5c44b.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-BlackItalic.ce9478d32085ef99.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Bold.f322e19764d32714.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-BoldItalic.1abd82142a78a09e.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraBold.6075703b315737a6.ttf) format("truetype");font-weight:800;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraBoldItalic.966ffc258b58944f.ttf) format("truetype");font-weight:800;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraLight.3aa0edf9509104ca.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-ExtraLightItalic.1df3330bbbdbf0c8.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Italic.69bd3a1a95631d2d.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Light.ca38e6f63246ee12.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-LightItalic.c03778cebf7967e5.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Medium.53c2141d06fbc81d.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-MediumItalic.b43583702491ad44.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-Regular.2ce32c88f66f838c.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-SemiBold.74dc433ca146c12f.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:NunitoSans;src:url(NunitoSans_7pt-SemiBoldItalic.2166047c045be3c7.ttf) format("truetype");font-weight:700;font-style:italic}[_ngcontent-%COMP%]:root{--font-family: "NunitoSans";--bg-color: #fff;--small-font: 12px;--main-heading-font: 24px;--heading-color: #313134;--maroon-color: #8e433e;--selected-color: #8e433e;--primary-color: #731d1d;--secondary-color: #fff3e1;--input-border-color: #ebebeb;--black-color: #000;--normal-weight: 600;--bold-font: 700;--border-radius: 8px;--full-width: 100%;--font-weight-700: 700;--font-weight-800: 800;--font-weight-600: 600;--font-weight-400: 400;--font-size-12: 11px;--font-size-12: 12px;--font-size-14: 14px;--font-size-15: 15px;--font-size-16: 16px;--font-size-17: 17px;--font-size-18: 18px;--font-size-19: 19px;--font-size-20: 20px;--mb-32: 32px;--button-disable: #ccc;--fonts-subtext: #434343;--global-border: #ebebeb;--global-white: #fdfdfd;--header-default: #8e433e;--global-frame-background: linear-gradient( 270deg, #f7eeed 0%, #f9f1f1 25%, #fcf8f8 68.75%, rgba(249, 241, 241, 0) 95.31% ), #fff;--fonts-body: #606060;--fonts-primary: #1e1e1e;--primary-color: #8e433e;--button-icon-background: #f9f1f1;--fonts-title: #252525}*[_ngcontent-%COMP%]{letter-spacing:-.6px!important}body[_ngcontent-%COMP%]{height:100%;font-family:var(--font-family)!important;background:var(--global-frame-background)!important;.hight-t {color: var(--maroon-color) !important;}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;font-size:14px}body[_ngcontent-%COMP%]{background:#fdfcfb;font-family:var(--font-family)!important}h1[_ngcontent-%COMP%]{font-size:36px!important;font-weight:700!important;margin-top:0}h2[_ngcontent-%COMP%]{font-size:32px!important;font-weight:700!important;margin-top:0}.no-margin[_ngcontent-%COMP%]{margin:0}.marginss[_ngcontent-%COMP%]{margin:10px 0}h3[_ngcontent-%COMP%]{font-size:24px!important;font-weight:700!important;margin-top:0}h4[_ngcontent-%COMP%]{font-size:18px!important;font-weight:700!important;margin-top:0}a[_ngcontent-%COMP%]{cursor:pointer}.mb-32[_ngcontent-%COMP%]{margin-bottom:var(--mb-32)}.mt40[_ngcontent-%COMP%]{margin-top:40px!important}.mb40[_ngcontent-%COMP%]{margin-bottom:40px!important}.mb20[_ngcontent-%COMP%]{margin-bottom:20px!important}.mt20[_ngcontent-%COMP%]{margin-top:20px;.mdc-data-table__header-cell {font-family: var(--font-family) !important;}}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{&::placeholder{color:#606060!important;font-size:14px!important}}.m40[_ngcontent-%COMP%]{margin:40px}*[_ngcontent-%COMP%]{outline:none}*[_ngcontent-%COMP%]:focus{outline:none}.mat-expansion-panel[_ngcontent-%COMP%], .mat-expansion-panel-header[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%], .mdc-list-item__primary-text[_ngcontent-%COMP%]{font-family:var(--font-family)!important}body[_ngcontent-%COMP%]{margin:0;font-family:var(--font-family)!important;background:#fffbfb!important}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 15px!important;margin:0}span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:var(--font-size-14)!important}.btn-default[_ngcontent-%COMP%]{background:transparent!important;border-radius:56px!important;border:1px solid var(--selected-color)!important;color:var(--primary-color);padding:12px 30px;height:auto;line-height:100%;font-weight:800;font-size:16px;color:var(--selected-color)}select[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;color:#606060}select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{&::placeholder{color:#606060!important;font-size:16px!important}}h3[_ngcontent-%COMP%]{font-family:var(--font-family);font-style:normal;font-weight:var(--bold-font);font-size:var(--main-heading-font)!important;line-height:20px;color:#000}.heading-maroon[_ngcontent-%COMP%]{color:#1e1e1e!important;text-transform:capitalize;text-align:center}.multiselect-dropdown[_ngcontent-%COMP%]{.dropdown-btn {border: none !important;}}.card-block[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #d6d6d6;background:var(--global-white, #fdfdfd);padding:40px;overflow:hidden}.list-margin[_ngcontent-%COMP%]{margin-bottom:20px}.cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.icons-w[_ngcontent-%COMP%]{width:100%;height:30px}.fs-big[_ngcontent-%COMP%]{font-size:var(--font-size-20)!important}//[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap}.form-text-alert[_ngcontent-%COMP%]{margin-top:5px}.form-fields[_ngcontent-%COMP%]{margin:6px 6px 20px;flex:0 1 calc(33% - 5px);display:flex;flex-direction:column;.labels {font-weight: var(--bold-font); font-size: var(--font-size-16) !important; line-height: 19px; color: var(--heading-color); text-align: left;} .select {background: var(--bg-color); border: 1.5px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; option {font-size: var(--font-size-14);}} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat;} &:nth-child(1) {margin-left: 0px !important;} &:nth-child(3) {margin-right: 0px !important;}}.input-form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px;.labels {font-weight: var(--bold-font); font-size: var(--font-size-14) !important; line-height: 19px; color: var(--heading-color); width: var(--full-width); text-align: left; white-space: nowrap;} .select {background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px !important; padding: 9px; box-shadow: none; font-size: var(--font-size-16);} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat; cursor: pointer;} .wo-input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; box-shadow: none; color: var(--fonts-primary, #1e1e1e); &::placeholder {color: #606060 !important; font-size: 12px !important;}} .input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; font-weight: normal;} textarea {border: 1px solid #ebebeb; font-size: var(--font-size-16); outline: none; box-shadow: none !important; padding: 10px; background: #fdfdfd;} .textareaSpan {position: absolute; font-size: 12px !important; color: #606060; right: 20px; bottom: 10px;}}.mat-expansion-panel[_ngcontent-%COMP%]{overflow:visible!important;font-family:var(--font-family)!important;.mat-expansion-indicator {margin-top: -6px !important; display: none !important; &::after {padding: 2px !important;}} .mat-expansion-panel-header {.mat-content {&:hover {img {background: #fff !important; padding: 8px; border-radius: 8px; cursor: pointer;} .afterHover {display: block;} .beforeHover {display: none;}} .afterHover {display: none; padding: 8px; border-radius: 8px; height: 40px;} .beforeHover {padding: 8px; border-radius: 8px; height: 40px;}}} .mat-content {align-items: center !important; justify-content: center; padding: 0; display: flex; flex-direction: column; .tooltiptext {visibility: hidden; width: 120px; background-color: #606060 !important; color: #fff !important; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; top: 0; left: 75px;} .tooltiptext {&::after {content: ""; position: absolute; top: 36%; left: -3%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent #606060 transparent transparent;}} &:hover {.tooltiptext {visibility: visible;}}} .mat-expansion-panel-body {padding: 0 15px !important; position: absolute; left: 46px; z-index: 1111; top: 0;} mat-nav-list {padding: 0 !important;} .aligned-with-icon {white-space: pre-wrap; line-height: initial; margin-top: 3px !important;}}.upload-section[_ngcontent-%COMP%]{position:relative;padding:25px;height:auto;text-align:center;background:#f8f8f8;border:1px dashed #e6e6e6;border-radius:8px;display:flex;flex-direction:column;img {width: 40px; height: 40px;} label {font-size: 12px !important; color: #606060; font-weight: normal; span {font-size: 12px !important;}} .visiblle {z-index: 1; position: absolute; opacity: 0; width: 100%; text-align: center; left: 0; height: 86px; top: 0;} small {word-break: break-all;}}.mt10[_ngcontent-%COMP%]{margin-top:10px}a[_ngcontent-%COMP%]{text-decoration:none}.form-control[_ngcontent-%COMP%]{display:flex;height:40px!important;padding:12px 16px!important;align-items:center;gap:6px;align-self:stretch;border-radius:2px;border:1px solid #d1d1d1;background:#fff;color:#1e1e1e;font-size:var(--font-size-14);font-style:normal;font-weight:400;line-height:22px;font-size:14px!important;border-radius:8px!important;&::placeholder{color:#606060!important;font-size:12px!important}}.remarks[_ngcontent-%COMP%]{height:80px!important}.form-label[_ngcontent-%COMP%]{font-size:var(--font-size-14);color:var(--font-color-black);font-weight:var(--font-weight-700);margin-bottom:5px}.globalContent[_ngcontent-%COMP%]{font-size:16px;color:#434343;font-weight:400;line-height:22.4px}.headings[_ngcontent-%COMP%]{font-size:var(--main-heading-font);font-weight:var(--font-weight-700)}.context-text[_ngcontent-%COMP%]{font-size:var(--font-size-14);margin:0;color:#434343}.heading-border[_ngcontent-%COMP%]{font-size:var(--main-heading-font);font-weight:var(--font-weight-700);line-height:44px;border-bottom:1px solid #e6e6e6;padding:0!important}.sub-heading[_ngcontent-%COMP%]{font-size:var(--font-size-16);font-weight:var(--font-weight-700)}.border-bot[_ngcontent-%COMP%]{border-bottom:1px solid var(--global-border)}.card[_ngcontent-%COMP%]{border-radius:16px;border:1px solid var(--global-border);background:#fff}.error-msg[_ngcontent-%COMP%]{color:red;font-size:12px}.save-btn[_ngcontent-%COMP%]{margin:10px 0 0}.mv20[_ngcontent-%COMP%]{margin:20px 0}.btn[_ngcontent-%COMP%]{background:var(--maroon-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;&:focus{color:#fff}&:hover{background:var(--maroon-color);color:#fff}}.save-btn[_ngcontent-%COMP%]{margin:10px;background:var(--maroon-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:10px 25px;line-height:100%;border:none}.gaps[_ngcontent-%COMP%]{margin:10px 15px 0 30px;width:calc(100% - 30px)}.form-text-alert[_ngcontent-%COMP%]{color:var(--states-error, #d91919);font-family:var(--font-family);line-height:140%}.save-btn[_ngcontent-%COMP%]:hover{background:var(--maroon-color);color:#fff}.cancel-btn[_ngcontent-%COMP%]{margin:10px;border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;background:var(--bg-color);color:var(--primary-color);padding:13px 34px;line-height:100%;border:none}.cancel-btn[_ngcontent-%COMP%]:hover{border:none;background-color:transparent;color:var(--primary-color)}.resetBtn[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:700;border:none!important;background:transparent;color:var(--maroon-color)!important;outline:none;&:hover{background:transparent;color:var(--maroon-color)}}.textarea[_ngcontent-%COMP%]{background:var(--bg-color);border:1.5px solid var(--input-border-color);border-radius:var(--border-radius);width:var(--full-width);height:40px;option {font-size: var(--font-size-14);} .navbar {border-radius: 0px !important;} .cdk-global-overlay-wrapper {z-index: 1112 !important;} .cdk-overlay-container {z-index: 1112 !important;} .required:after {content: " * "; color: red; margin-left: 5px;} @media (max-width: 767px) {.mat-expansion-indicator {&:after {color: var(--maroon-color) !important; padding: 2px !important;}} h3 {font-size: 20px !important;}} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat;} &:nth-child(1) {margin-left: 0px !important;} &:nth-child(3) {margin-right: 0px !important;}}.input-form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px;.labels {font-weight: var(--bold-font); font-size: var(--font-size-14) !important; line-height: 19px; color: var(--heading-color); width: var(--full-width); text-align: left; white-space: nowrap;} .select {background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px !important; padding: 9px; box-shadow: none; font-size: var(--font-size-16);} select {display: inline-block; font: inherit; margin: 0; box-sizing: border-box;} select.classic {background-image: linear-gradient(45deg,transparent 50%,black 50%),linear-gradient(135deg,black 50%,transparent 50%),linear-gradient(to right,#f9f1f1,#f9f1f1); background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),100% 0; background-size: 5px 5px,5px 5px,2.5em 2.5em; background-repeat: no-repeat; cursor: pointer;} .wo-input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; box-shadow: none; color: var(--fonts-primary, #1e1e1e);} .input {font-size: var(--font-size-16); background: var(--bg-color); border: 1px solid var(--input-border-color); border-radius: var(--border-radius); width: var(--full-width); height: 40px; padding: 10px; font-weight: normal;} textarea {border: 1px solid #ebebeb; font-size: var(--font-size-16); outline: none; box-shadow: none !important; padding: 10px; background: #fdfdfd;} .textareaSpan {position: absolute; font-size: 12px !important; color: #606060; right: 20px; bottom: 10px; color: var(--button-default, #8e433e); font-style: normal; font-weight: 700;}}.flb-33[_ngcontent-%COMP%]{flex-basis:33%}.mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__row[_ngcontent-%COMP%]{border-bottom:1px solid var(--global-border, #ebebeb);background:var(--global-white, #fdfdfd)}table[_ngcontent-%COMP%]{width:100%}.table-view[_ngcontent-%COMP%]{background:transparent!important}.table-container[_ngcontent-%COMP%]{height:480px;overflow:auto;.court-table {th {z-index: 10 !important;} td {z-index: 10 !important;}}}.img-field[_ngcontent-%COMP%]{color:red;margin-left:5px}.mat-mdc-dialog-container[_ngcontent-%COMP%]{margin-top:30px}.mat-expansion-panel[_ngcontent-%COMP%]{overflow:visible!important;font-family:var(--font-family)!important;.mat-expansion-indicator {margin-top: -6px !important; display: none !important; &::after {padding: 2px !important;}} .mat-expansion-panel-header {.mat-content {&:hover {img {background: #fff !important; padding: 8px; border-radius: 8px; cursor: pointer;} .afterHover {display: block;} .beforeHover {display: none;}} .afterHover {display: none; padding: 8px; border-radius: 8px; width: 35px; height: auto;} .beforeHover {padding: 8px; border-radius: 8px; width: 35px; height: auto;}}} .mat-content {align-items: center !important; justify-content: center; padding: 0; display: flex; flex-direction: column; .tooltiptext {visibility: hidden; width: 120px; background-color: #606060 !important; color: #fff !important; text-align: center; border-radius: 6px; padding: 8px; position: absolute; z-index: 1; top: 0; left: 75px;} .tooltiptext {&::after {content: ""; position: absolute; top: 36%; left: -3%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: transparent #606060 transparent transparent;}} &:hover {.tooltiptext {visibility: visible;}}} .mat-expansion-panel-body {padding: 0 15px !important; position: absolute; left: 46px; z-index: 1111; top: 0;} mat-nav-list {padding: 0 !important;} .aligned-with-icon {white-space: pre-wrap; line-height: initial; margin-top: 3px !important;}}.mat-expanded[_ngcontent-%COMP%]{.mat-expansion-indicator {margin-top: 6px !important;}}.upload-section[_ngcontent-%COMP%]{position:relative;padding:25px;height:auto;text-align:center;background:#f8f8f8;border:1px dashed #e6e6e6;border-radius:8px;display:flex;flex-direction:column;img {width: 40px; height: 40px;} label {color: var(--button-default, #8e433e); font-size: 12px !important; font-style: normal; font-weight: 700; span {font-size: 12px !important;}} .visiblle {z-index: 1; position: absolute; opacity: 0; width: 100%; text-align: center; left: 0; height: 86px; top: 0;} small {word-break: break-all;}}.mt20[_ngcontent-%COMP%]{margin:20px 0 0}.mb20[_ngcontent-%COMP%]{margin:0 0 20px}.ml10[_ngcontent-%COMP%]{margin:0 0 0 20px}.mr10[_ngcontent-%COMP%]{margin-right:0 20px 0 0}.mb10[_ngcontent-%COMP%]{margin-bottom:10px}.mt10[_ngcontent-%COMP%]{margin:10px 0 0}.m20[_ngcontent-%COMP%]{margin:20px}.m0[_ngcontent-%COMP%]{margin:0!important}.p0[_ngcontent-%COMP%]{padding:0!important}.pb20[_ngcontent-%COMP%]{padding-bottom:20px}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row}.btn[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:13px 34px;line-height:100%;border:0;&:focus{color:#fff}&:hover{background:var(--selected-color);color:#fff}}.save-btns[_ngcontent-%COMP%]{background:var(--selected-color);border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;color:var(--bg-color);text-align:center;padding:10px 24px;line-height:100%;border:0;&:focus{color:#fff}&:hover{background:var(--selected-color);color:#fff}}.mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0!important}.content-text[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:#434343}.header[_ngcontent-%COMP%]{padding:5px 10px}.status-text[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#8e433e;margin:10px;text-align:center;display:flex;justify-content:center;background-color:transparent;border:none}.gap[_ngcontent-%COMP%]{padding:10px 0!important}.gap1[_ngcontent-%COMP%]{padding:30px 0 0!important}.pageContent[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:22.4px;color:#606060}.options[_ngcontent-%COMP%]{display:flex}.img-class[_ngcontent-%COMP%]{height:32px;width:32px;border-radius:50%;background-color:#f9f1f1;display:flex;justify-content:center;align-items:center;margin:0 2px}.list-padding[_ngcontent-%COMP%]{padding:0 26px!important}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px white inset!important}.section[_ngcontent-%COMP%]{border-radius:var(--border-radius);border:1px solid var(--global-border);display:flex;justify-content:space-between;padding:20px;background-color:var(--global-white);box-shadow:0 20px 40px #0000000d}.content[_ngcontent-%COMP%]{display:flex}.pdf-section[_ngcontent-%COMP%]{margin:0 0 7px 5px}.pdf-head[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1e1e1e;margin:0}.pdf-text[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:#0b48e4;margin:0}.rws[_ngcontent-%COMP%]{padding:20px 0 80px}.top-search[_ngcontent-%COMP%]{width:320px;background:#fff url(/assets/search-ico.svg) no-repeat right;background-size:22px;background-position:94% 13px;padding:12px 20px;font-size:var(--font-size-14);outline:0;border-radius:50px;border:1px solid var(--global-border, #ebebeb)}.normal-text[_ngcontent-%COMP%]{font-size:14px}.bold[_ngcontent-%COMP%]{font-weight:700!important}.small-font[_ngcontent-%COMP%]{font-size:12px!important}.card[_ngcontent-%COMP%]{border-radius:15px;padding:20px;position:relative;margin:0 0 20px}.admit-label[_ngcontent-%COMP%]{position:absolute;top:-10px;background-color:#fff;padding:0 8px;font-size:14px;color:#606060}.imgs[_ngcontent-%COMP%]{display:flex;align-items:center}.card-block[_ngcontent-%COMP%]{border-radius:20px 20px 0 0;.card-header {height: 110px; border-bottom: 1px solid var(--global-border); display: flex; justify-content: space-between; align-items: center;} .card-header-l {height: 160px !important;} .add-img {display: flex; justify-content: center; align-items: center;} .card-footer {padding: 0; background-color: transparent; border-top: 1px solid var(--global-border); margin-top: 20px;} .card-footers {padding: 0; background-color: transparent; border-top: 1px solid var(--global-border);}}.card-header[_ngcontent-%COMP%]{height:74px;background:rgba(240,221,219,1);display:flex;justify-content:space-between;align-items:center;padding:20px}th[_ngcontent-%COMP%]{font-size:14px;font-weight:400}td[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.pos-bedge[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;border-radius:6px}.card-body[_ngcontent-%COMP%]{padding:10px 20px}.border-cls[_ngcontent-%COMP%]{border:1px solid rgba(230,230,230,1)}.results[_ngcontent-%COMP%]{height:72px;border-radius:5px;display:flex;justify-content:space-between;align-items:center}.gb[_ngcontent-%COMP%]{background-color:#188906!important;margin:0 5px}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-block[_ngcontent-%COMP%]{padding:0;background-color:var(--global-white)}.space[_ngcontent-%COMP%]{display:flex;margin:20px 0}.blocks[_ngcontent-%COMP%]{width:49%;border-radius:20px;overflow:hidden}.border-cls[_ngcontent-%COMP%]:nth-child(even){margin-left:22px}.prime[_ngcontent-%COMP%]{color:var(--primary-color)}.text-col[_ngcontent-%COMP%]{color:#999}.app-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#434343}.note-title[_ngcontent-%COMP%]{font-size:18px;font-weight:800;color:#606060}.card-width[_ngcontent-%COMP%]{width:95%}.form-block[_ngcontent-%COMP%]{background-color:var(--global-white);border:1px solid var(--global-border);padding:30px!important;border-radius:20px}.edit-input[_ngcontent-%COMP%]{height:48px;background-color:var(--global-white);border:1px solid var(--global-border);border-radius:var(--border-radius);padding:3px}.gray-area[_ngcontent-%COMP%]{height:40px;background:rgba(241,241,241,1);border-radius:5px;padding:9px 20px}.edit-text[_ngcontent-%COMP%]{color:#606060;font-size:14px;font-weight:400}.gray-back[_ngcontent-%COMP%]{background:rgba(241,241,241,1)!important;border:none;.gray-area {height: 40px; background: rgba(241,241,241,1); border-radius: 5px; padding: 9px 20px;} .edit-text {color: rgba(96,96,96,1); font-size: 14px; font-weight: 400;}}.radio-cont[_ngcontent-%COMP%]{display:flex;gap:20px}.button-block[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center}.label-checkk[_ngcontent-%COMP%]{font-weight:400!important}.form-check-input[_ngcontent-%COMP%]{border:1px solid gray}.form-check-input[_ngcontent-%COMP%]:checked{background-color:var(--primary-color)!important;border-color:var(--primary-color)!important;outline:none!important;box-shadow:none!important}.dateBg[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important}.wo-input[_ngcontent-%COMP%]{font-size:var(--font-size-16);background:var(--bg-color);border:1px solid var(--input-border-color);border-radius:var(--border-radius);width:var(--full-width);height:40px;padding:10px!important;box-shadow:none;color:var(--fonts-primary, #1e1e1e)}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:grey;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:grey}.trans-back[_ngcontent-%COMP%]{font-weight:800;font-size:16px;color:var(--primary-color);margin:0 15px;background-color:transparent;border:0;cursor:pointer;outline:none}.dateBgg[_ngcontent-%COMP%]{background:url(eyeIcon.0b318ead5f9673fd.svg) no-repeat (99%,10px),linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important;height:10px}@media (min-width: 1400px){.container[_ngcontent-%COMP%]{min-width:100%!important;padding-left:80px!important;padding-right:80px!important}}@media (max-width: 1200px){.blocks[_ngcontent-%COMP%]{width:100%!important}.save-btn[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;align-items:center!important}.border-cls.blocks[_ngcontent-%COMP%]:nth-child(even){margin-left:0}}@media (max-width: 767px){.excellency-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.border-cls[_ngcontent-%COMP%]:nth-child(even){margin-left:0;margin-top:10px}.gaps[_ngcontent-%COMP%]{margin:10px 5px 0 10px;width:calc(100% - 10px)}}.fwdLetters[_ngcontent-%COMP%]{.ng-dropdown {.drop-list {top: 44px !important; width: 96% !important; padding: 13px 34px; line-height: 100%;}}}.save-btn[_ngcontent-%COMP%]:hover{background:var(--selected-color);color:#fff}.cancel-btn[_ngcontent-%COMP%]{margin:10px;border-radius:34px;width:auto;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:var(--font-size-14);line-height:17px;background:var(--bg-color);color:var(--primary-color);border:none;padding:13px 34px;line-height:100%}.cancel-btn[_ngcontent-%COMP%]:hover{border:none;background:transparent;color:var(--primary-color)}.previewBtn[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:8px;align-items:center;border-radius:50px;border:1px solid #ebebeb;background:#fffdfa;font-size:12px;font-weight:400;line-height:24px;padding:0 8px;height:24px}.resetBtn[_ngcontent-%COMP%]{font-size:16px;font-style:normal;font-weight:700;border:none!important;background:transparent;color:var(--selected-color)!important;outline:none;&:hover{background:transparent;color:var(--selected-color)}}.textarea[_ngcontent-%COMP%]{background:var(--bg-color);border:1.5px solid var(--input-border-color);border-radius:var(--border-radius);font-size:var(--font-size-14);resize:none;width:var(--full-width);height:35px;padding:5px 10px}.navbar[_ngcontent-%COMP%]{border-radius:0!important}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{z-index:1112!important}.required[_ngcontent-%COMP%]:after{content:"*";color:red;margin-left:5px}@media (max-width: 767px){.with-nav[_ngcontent-%COMP%]{top:85px!important}.save-btn[_ngcontent-%COMP%]{padding:10px;font-size:12px}.mat-expansion-indicator[_ngcontent-%COMP%]{&:after{color:var(--selected-color)!important;padding:2px!important}}}h3[_ngcontent-%COMP%]{font-size:20px!important}.mdc-dialog__container[_ngcontent-%COMP%]{height:calc(100vh - 80px)!important}.breadcrumb[_ngcontent-%COMP%]{li {a {color: #1e1e1e !important; font-size: 14px; text-decoration: none; font-weight: 400;} a.active {color: #1e1e1e !important; font-weight: 700;}}}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:var(--bs-breadcrumb-divider, ">")!important;font-size:18px;margin-top:-3px;color:#1e1e1e!important}.active[_ngcontent-%COMP%]{color:var(--fonts-primary)!important;font-weight:var(--font-weight-600)!important}.formWidth[_ngcontent-%COMP%]{width:80%!important;margin:auto}.upload_icon[_ngcontent-%COMP%]{img {width: 15px; height: auto;}}.imgSection[_ngcontent-%COMP%]{border:1px solid #e6e6e6;padding:20px;display:flex;flex-direction:column;margin-top:10px;border-radius:20px;small {font-size: 16px; vertical-align: middle;} .attchmentIcon {border-radius: 3.484px; border: .871px solid #dfdfdf; padding: 10px 0px; margin-right: 25px; height: 48px; width: 48px; background-color: var(--bg-color);} .imgSectionInner {padding: 10px 20px; border-bottom: 1px solid #ebebeb; justify-content: space-between; display: flex; &:last-child {border: none !important;}} .wb {background-color: #f1f1f1;} .imgSectionInner:last-of-type {border: none !important;}}.btn-check[_ngcontent-%COMP%]:checked + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check) + .btn[_ngcontent-%COMP%]:active{background:var(--primary-color)!important;color:#fff;outline:none;border-color:var(--primary-color)!important;box-shadow:none}.demo-table[_ngcontent-%COMP%]{border:1px solid #e6e6e6!important;box-shadow:none;border-collapse:inherit;overflow:visible;border-radius:20px;th {background-color: #f0dddb !important; color: #252525 !important; padding: 16px 20px !important; font-weight: 600;} td {background-color: #fff; padding: 16px 20px !important;} tr:first-child {th:first-child {border-radius: 20px 0 0 0;} th:last-child {border-radius: 0 20px 0 0;}} tr:last-child {td:first-child {border-radius: 0 0 0 20px;} td:last-child {border-radius: 0 0 20px 0;}}}.with-nav[_ngcontent-%COMP%]{top:160px!important}.without-nav[_ngcontent-%COMP%]{top:110px!important}.document-container[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:20px;border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:1px;padding:20px;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:100%;position:relative;overflow:hidden}.document-card[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:0px 0px 1px 0px;padding:12px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-shrink:0;width:100%;position:relative}.document-details[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;align-items:center;justify-content:flex-start;flex-shrink:0;position:relative}.document-image-container[_ngcontent-%COMP%]{flex-shrink:0;width:47.03px;height:48px;position:static}.document-image-placeholder[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:3.48px;border-style:solid;border-color:var(--global-border, #e6e6e6);border-width:.87px;width:47.03px;height:48px;left:0;top:0;display:flex;justify-content:center;align-items:center}.document-image[_ngcontent-%COMP%]{width:22px;height:22px}.doc-icos[_ngcontent-%COMP%]{width:100%!important}.document-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;position:relative}.document-title[_ngcontent-%COMP%]{color:var(--fonts-subtext, #434343);text-align:left;font-size:14px;font-weight:600;position:relative}.document-title-fad[_ngcontent-%COMP%]{color:#8d8686!important}.document-size[_ngcontent-%COMP%]{color:#999;text-align:left;font:var(--caption-regular, 400 12px/140% "Nunito Sans", sans-serif);position:relative}.document-icon[_ngcontent-%COMP%]{flex-shrink:0;position:relative;overflow:visible;cursor:pointer}.msg-erro[_ngcontent-%COMP%]{display:block;margin:10px 0;.mgs {color: red; font-size: 12px;}}.desg-crd[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--global-border, #e6e6e6);background:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:14px;.desig-head {padding-bottom: 10px; border-bottom: 1px solid #e6e6e6; .cret-by {color: var(--fonts-title, #252525); font-size: var(--font-size-14); font-style: normal; font-weight: 700; line-height: 140%;}} .prs-blk {display: flex; justify-content: space-between; flex-direction: row; align-items: center; padding-top: 10px; .nm {color: var(--fonts-primary, #1e1e1e); font-size: var(--font-size-14); font-style: normal; font-weight: 700; line-height: 140%;} .bgj {display: flex; justify-content: center; align-items: center; padding: 5px; border-radius: 2rem; background: #fff8ed; color: var(--button-default, #8e433e); font-size: var(--font-size-14); font-style: normal; font-weight: 600; line-height: 140%;}}}.filter-footer[_ngcontent-%COMP%]{text-align:center;border-top:1px solid #8080802e;display:flex;justify-content:flex-end;align-items:center;padding:10px 0 0}.filter-dlogs[_ngcontent-%COMP%]{padding:30px 24px 10px!important}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:10px!important;height:10px!important;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:"";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:36%!important;left:2px!important;width:7px!important;height:3px!important;margin-top:-4px!important;border-style:solid;border-color:#fff;border-width:0 0 1.5px 1.5px!important;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #e6e6e6!important;color:#1e1e1e!important;box-shadow:none!important;padding:5px!important;line-height:100%!important;background:linear-gradient(to right,#fff calc(100% - 22px),#f9f1f1 22px)!important;a {color: #000 !important; border: 1px solid #000 !important; border-radius: 50% !important; font-size: 8px !important; padding: 0px 3px 1px 3px !important; vertical-align: middle !important; margin-left: 5px !important;}}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked+div:before{background:var(--selected-color)!important}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox]+div[_ngcontent-%COMP%]:before{border:1.5px solid var(--selected-color)!important;color:var(--selected-color)!important}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#f0dddb!important}.dia-header[_ngcontent-%COMP%]{color:#252525;font-size:16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(128,128,128,.39);padding:5px 0 15px;margin-bottom:15px;font-weight:700}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{min-height:36px!important;max-height:69px!important;overflow:auto;border:1px solid #e6e6e6!important;padding:5px 34px 5px 12px!important;background-position:97% 14px;background-repeat:no-repeat;.selected-item {span {font-size: 10px !important;}}}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{padding-left:25px!important}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{margin-top:2px!important}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{border-color:#731d1d transparent!important;display:none!important}.th-fnt[_ngcontent-%COMP%]{font-size:14px!important;font-weight:700!important}.multiselect-dropdown[_ngcontent-%COMP%]{background:linear-gradient(to right,#fff calc(100% - 40px),#f9f1f1 40px)!important}.woblock[_ngcontent-%COMP%]{display:flex;.havrem {position: relative; margin-top: -12px; &:hover .toltip-notify {visibility: visible;} .toltip-notify {background: #fff9f0; display: flex; justify-content: space-between; flex-direction: column; padding: 15px 20px; width: 200px; border-radius: 8px; position: absolute; top: -105px; left: -22px; visibility: hidden; .txt {color: var(--fonts-body, #606060); font-size: 14px; font-style: normal; font-weight: 600; line-height: 140%;} a.vwrem {color: var(--button-default, #8e433e); font-size: 15px; font-style: normal; font-weight: 700; line-height: 140%; text-decoration: none; margin-top: 10px; cursor: pointer;} &::after {content: ""; position: absolute; bottom: -10px; left: 15%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #fff9f0;}} img {cursor: pointer;}}}@media (max-width: 767px){.breadcrumb[_ngcontent-%COMP%]{li {a {color: #1e1e1e !important; font-size: 12px;}}}.with-nav[_ngcontent-%COMP%]{top:85px!important}.save-btn[_ngcontent-%COMP%]{padding:10px;font-size:12px}.card-width[_ngcontent-%COMP%]{width:95%!important}.form-block[_ngcontent-%COMP%]{padding:20px!important}}@media (max-width: 450px){.with-nav[_ngcontent-%COMP%]{top:79px!important}.form-label[_ngcontent-%COMP%], label[_ngcontent-%COMP%], .input-form-fields[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{font-size:11px!important}}//[_ngcontent-%COMP%]   filter[_ngcontent-%COMP%]   sections[_ngcontent-%COMP%]   css[_ngcontent-%COMP%]   .selected-filters-section[_ngcontent-%COMP%]{.filters {display: flex; flex-wrap: wrap; .value-block {display: flex; padding: 6px 12px; justify-content: space-between; align-items: center; border-radius: 20px; border: 1px solid #e6e6e6; background: #fffcf6; margin-right: 20px; margin-top: 10px; value-block:nth-child(1) {margin-left: 0px;} .value {font-size: 12px; color: #1e1e1e; font-style: normal; font-weight: 400;} .s-icons-close {font-size: 15px; color: var(--selected-color); width: unset; height: unset; margin-left: .5rem; cursor: pointer;}}}}@media (max-width: 450px){.with-nav[_ngcontent-%COMP%]{top:79px!important}}.court-table[_ngcontent-%COMP%]{width:var(--full-width);th {height: 48px; color: var(--fonts-body); font-size: var(--base-font); background-color: #f0dddb !important; font-size: 14px; font-weight: 700; color: #252525;} td {font-size: var(--base-font); color: #252525;}}.btn.reset[_ngcontent-%COMP%]{background:transparent;color:var(--maroon-color)}.tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;.tag {display: flex; justify-content: space-between; align-items: center; border-radius: 4px; border: 1px solid var(--global-border, #e6e6e6); background: var(--global-white, #fdfdfd); .val {color: var(--fonts-primary, #1e1e1e); font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;} .crss-btn {background: var(--button-icon-background, #f9f1f1); img {width: 14px;}}}}.mat-mdc-dialog-container[_ngcontent-%COMP%]{.mdc-dialog__surface {background-color: transparent !important; box-shadow: none !important; height: 140px; .blocks {width: 100% !important; margin: 10px 0px;} .space {margin: 0px !important;} .border-cls:nth-child(even) {margin-left: 0px !important;} .row-type {display: flex; justify-content: space-between;} .content-text {font-size: 14px;} .context-text {font-size: 12px;} .ss-gap {padding: 15px !important; position: relative;} .normal-text {font-size: 12px;} .trans-background {background-color: transparent;} .list-margin {margin-bottom: 20px !important;}}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:#00000078;.dialog {background-color: white; border: 1px solid var(--input-border-color); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 700px; width: 80%; max-height: calc(100vh - 20px); overflow: auto;}}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed}.edit-input[_ngcontent-%COMP%]{height:48px;background-color:var(--global-white);border:1px solid var(--global-border);border-radius:var(--border-radius);padding:4px;.gray-area {height: 40px; background: rgba(241,241,241,1); border-radius: 5px; padding: 9px 20px;} .edit-text {color: rgba(96,96,96,1); font-size: 14px; font-weight: 400; width: 100%; border: none; background: transparent; outline: none;}}//disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:   by[_ngcontent-%COMP%]   Vikin[_ngcontent-%COMP%]   .disabled-blk[_ngcontent-%COMP%]{margin-top:10px}.disabled-input[_ngcontent-%COMP%]{padding:2px;border-radius:8px;border:1px solid;border:1px solid var(--global-border, #e6e6e6);background:#fff;display:flex;justify-content:flex-start;align-items:center;height:40px;.value {padding: 5px 10px; border-radius: 5px; background: #f1f1f1; color: var(--fonts-primary, #1e1e1e); font-size: 16px; font-style: normal; font-weight: 400; line-height: 140%; width: 100%; display: flex; justify-content: space-between; .val {width: 100%;}} .dis_input {border: none; background: transparent; outline: none; width: 100%;}}.custom-dropdown-css-class[_ngcontent-%COMP%]{position:relative}.vacancy-table[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:20px;box-shadow:none;border-collapse:inherit;border:1px solid #e6e6e6!important;th,td {padding: 10px !important; border-bottom: 1px solid #0000001f;} tr:first-child th:first-child {border-radius: 20px 0 0 0;} tr:first-child th:last-child {border-radius: 0 20px 0 0;} tr:last-child td:first-child {border-radius: 0 0 0 20px;} tr:last-child td:last-child {border-radius: 0 0 20px;}}.activeTab[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;border-radius:4px 4px 0 0;background-color:#731d1d}.table-header[_ngcontent-%COMP%]{width:100%;height:60px;justify-content:space-between;align-items:flex-start;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom:1px solid var(--global-border, #e6e6e6);background:var(--button-menu-hover, #f0dddb)}.table-row[_ngcontent-%COMP%]{width:100%;height:auto;padding:20px 40px!important;justify-content:space-between;align-items:flex-start;flex-shrink:0;border-bottom:1px solid var(--global-border, #e6e6e6)}.table-header-cell[_ngcontent-%COMP%]{font-size:14px;background-color:#f0dddb!important;color:#252525!important;padding:16px!important;font-weight:600}.table-body[_ngcontent-%COMP%]{width:100%;height:auto}.table-data-row[_ngcontent-%COMP%]{width:100%;height:60px;background:var(--global-white, #fdfdfd)}.inner-table-row[_ngcontent-%COMP%]{width:100%;height:50px;background:var(--button-icon-background, #f9f1f1)}.table-data-cell[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:#00000078;transition:opacity 1s ease;.dialog {background-color: white; border: 1px solid var(--input-border-color); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 50%; width: 36%; max-height: calc(100vh - 20px); overflow: auto; position: relative;} ::-webkit-scrollbar {padding: 1px; background: #b6b6b6; width: 10px; margin-right: 10px;} ::-webkit-scrollbar-track {background: #b6b6b6; margin-right: 10px;} ::-webkit-scrollbar-thumb {background: #8e433e; margin-right: 10px; height: 40px;} .headTop {justify-content: space-between;} .flex {display: flex; justify-content: space-between; h2 {margin: 0; font-size: var(--font-size-18); font-weight: var(--font-weight-700);}} .flexSectn {padding: 20px 0;}}.confirm-ncc[_ngcontent-%COMP%]{.label {color: #c17571 !important;}}.p0[_ngcontent-%COMP%]{.disabled-blk {margin: 0 !important;}}.form-block[_ngcontent-%COMP%]{padding:15px!important;ol {margin: 0; padding-left: 15px; li {padding: 0;}}}.dropNew[_ngcontent-%COMP%]{.drop-list {top: 43px !important;}}.form-control.wo-input.dateBg[_ngcontent-%COMP%]{display:block!important}.webcam-modal[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;.webCamGuide {width: 100% !important; &::before {left: 53% !important; transform: translate(-53%,-50%) !important; background-position: center !important; top: 60% !important;}} .modal-body {padding: 0 !important; width: 100% !important;} .webcam-wrapper {width: 100%; height: 100%; video {width: 100%; height: 100%;} canvas {width: 100%; height: 100%;}}}.matDate.mat-mdc-form-field[_ngcontent-%COMP%]{width:100%!important;font-family:var(--font-family);&:hover{.mat-mdc-form-field-focus-overlay {background: transparent !important;}}.mat-mdc-form-field-focus-overlay {background: transparent !important;} .mdc-text-field--filled:not(.mdc-text-field--disabled) {border: 1px solid var(--global-border); border-radius: var(--border-radius);} .mat-mdc-form-field-infix {padding: 0 !important; min-height: 40px !important; max-height: 40px;} .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {top: 23px !important;} .mat-mdc-text-field-wrapper {background: linear-gradient(to right,#fff calc(100% - 46px),#f9f1f1 40px) !important; padding-left: 10px !important;} .mat-mdc-form-field-flex {max-height: 40px;} .mat-datepicker-input {margin-top: 7px; font-size: 14px !important; &::placeholder {font-size: 14px !important;}} .mdc-line-ripple {display: none;} .mat-mdc-icon-button.mat-mdc-button-base { --mat-mdc-button-persistent-ripple-color: none !important; } .mat-datepicker-toggle-active {color: rgba(0,0,0,.54);} .mat-mdc-icon-button svg,.mat-mdc-icon-button img {width: var(--mdc-icon-button-icon-size, 19px); height: var(--mdc-icon-button-icon-size, 19px);}}.mat-calendar-body-cell[_ngcontent-%COMP%]{&:hover{.mat-calendar-body-cell-content.mat-focus-indicator {background-color: #f9f1f1 !important; color: #000 !important;}}}.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f9f1f1!important;color:#000!important}.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background:#f9f1f1!important}.matDate[_ngcontent-%COMP%]{.mat-mdc-form-field-subscript-wrapper {display: none;}}.cdk-overlay-container[_ngcontent-%COMP%]{.cdk-overlay-connected-position-bounding-box {z-index: 1114;}}@media (max-width: 767px){.formBlk[_ngcontent-%COMP%]   .input-form-fields[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{white-space:normal}span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:var(--font-size-12)!important}.trans-back[_ngcontent-%COMP%], .edit-input[_ngcontent-%COMP%]   .edit-text[_ngcontent-%COMP%], .save-btns[_ngcontent-%COMP%]{font-size:var(--font-size-12)}.form-control[_ngcontent-%COMP%], .matDate.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-datepicker-input[_ngcontent-%COMP%], .disabled-input[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:var(--font-size-12)!important}}@media (max-width: 1200px){.mob-m0[_ngcontent-%COMP%]{.border-cls:nth-child(even) {margin-left: 0 !important;}}}@media (max-width: 600px){.rws.mob[_ngcontent-%COMP%]{padding:20px}.edit-input[_ngcontent-%COMP%]   .gray-area[_ngcontent-%COMP%]{padding:8px}.edit-input[_ngcontent-%COMP%]   .edit-text[_ngcontent-%COMP%]{font-size:var(--font-size-11)}}.dialog-image[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;.dialog-img {background-color: white; border: 1px solid #ebebeb; border-radius: 10px; padding: 20px 40px; box-shadow: 0 0 10px rgba(0,0,0,.3); max-width: 950px; height: calc(100vh - 100px); width: 90%;}}.attachModal[_ngcontent-%COMP%]{.attchInner {width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; margin: auto; text-align: center; img {width: 100%;} mat-icon {position: absolute; right: 8px; cursor: pointer; top: 10px;} object {width: 100%; height: 100%;}}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:9999;background:rgba(0,0,0,.4705882353)}.dialog-overlay[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]{background-color:#fff;border:1px solid var(--input-border-color);border-radius:10px;padding:20px 40px;box-shadow:0 0 10px #0000004d;max-width:800px;width:80%;max-height:calc(100vh - 20px);overflow:auto}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0}.atag_btn[_ngcontent-%COMP%]{display:flex}.content-header[_ngcontent-%COMP%]{height:54px;background:rgb(255,249,240)}.prime[_ngcontent-%COMP%]{margin:0}.items[_ngcontent-%COMP%]{display:flex;align-items:center}.small-padding[_ngcontent-%COMP%]{padding:10px 0}li[_ngcontent-%COMP%]{padding:2px 0}.image-group[_ngcontent-%COMP%]{display:flex;justify-content:center}.img[_ngcontent-%COMP%]{background-color:var(--global-white);padding:10px;position:relative}.action[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}.bttn[_ngcontent-%COMP%]{display:flex;justify-content:center}']
                    })
                }
                return i
            })();
            var H = f(48580);

            function qe(i, c) {
                1 & i && (t.TgZ(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "p", 19), t._uU(4, "Candidate Information"), t.qZA(), t.TgZ(5, "h3"), t._uU(6, "Personal Details"), t.qZA()(), t.TgZ(7, "form")(8, "div", 20)(9, "label", 21), t._uU(10, "1. Candidate Name (As per Matriculation Certificate)"), t.qZA(), t.TgZ(11, "div", 22)(12, "div", 23)(13, "p", 24), t._uU(14, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(15, "div", 20)(16, "label", 21), t._uU(17, "2. New / Changed Name"), t.qZA(), t.TgZ(18, "div", 22)(19, "div", 23)(20, "p", 24), t._uU(21, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(22, "div", 20)(23, "label", 21), t._uU(24, "3. Gender"), t.qZA(), t.TgZ(25, "div", 22)(26, "div", 23)(27, "p", 24), t._uU(28, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(29, "div", 20)(30, "label", 21), t._uU(31, "4. Category"), t.qZA(), t.TgZ(32, "div", 22)(33, "div", 23)(34, "p", 24), t._uU(35, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(36, "div", 20)(37, "label", 21), t._uU(38, "5. Fathers Name"), t.qZA(), t.TgZ(39, "div", 22)(40, "div", 23)(41, "p", 24), t._uU(42, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(43, "div", 20)(44, "label", 21), t._uU(45, "6. Mother\u2019s Name"), t.qZA(), t.TgZ(46, "div", 22)(47, "div", 23)(48, "p", 24), t._uU(49, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(50, "div", 20)(51, "label", 21), t._uU(52, "7. Date Of Birth (As per Matriculation Certificate)"), t.qZA(), t.TgZ(53, "div", 22)(54, "div", 23)(55, "p", 24), t._uU(56, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(57, "div", 20)(58, "label", 21), t._uU(59, "8. Age as of 1/08/2023"), t.qZA(), t.TgZ(60, "div", 22)(61, "div", 23)(62, "p", 24), t._uU(63, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(64, "div", 20)(65, "label", 21), t._uU(66, "9. Nationality"), t.qZA(), t.TgZ(67, "div", 22)(68, "div", 23)(69, "p", 24), t._uU(70, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(71, "div", 20)(72, "label", 21), t._uU(73, "10. Visible Identification Mark"), t.qZA(), t.TgZ(74, "div", 22)(75, "div", 23)(76, "p", 24), t._uU(77, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(78, "div", 20)(79, "label", 21), t._uU(80, "11. Whether Person with Benchmark Disability (PWBD)?"), t.qZA(), t.TgZ(81, "div", 25)(82, "div", 26)(83, "div", 27), t._UZ(84, "input", 28), t.TgZ(85, "label", 29), t._uU(86, " Yes "), t.qZA()(), t.TgZ(87, "div", 27), t._UZ(88, "input", 30), t.TgZ(89, "label", 31), t._uU(90, " No "), t.qZA()()()(), t.TgZ(91, "div", 32)(92, "label", 21), t._uU(93, "a. If yes, type of disability?"), t.qZA(), t.TgZ(94, "div", 22)(95, "div", 23)(96, "p", 24), t._uU(97, " Ankur Trivedi"), t.qZA()()()()(), t.TgZ(98, "div", 1)(99, "div", 33)(100, "button", 34), t._uU(101, "Save & Next"), t.qZA()()()()()())
            }

            function ze(i, c) {
                1 & i && (t.TgZ(0, "div", 41)(1, "div", 20)(2, "label", 21), t._uU(3, "3. Details of Qualifying Educational Qualification*"), t.qZA(), t.TgZ(4, "div", 22)(5, "div", 23)(6, "p", 24), t._uU(7, " Ankur Trivedi"), t.qZA()()(), t.TgZ(8, "div", 25)(9, "div", 35)(10, "label", 21), t._uU(11, "a. Status"), t.qZA(), t.TgZ(12, "div", 22)(13, "div", 23)(14, "p", 24), t._uU(15, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(16, "div", 35)(17, "label", 21), t._uU(18, "b. Passing Year"), t.qZA(), t.TgZ(19, "div", 22)(20, "div", 23)(21, "p", 24), t._uU(22, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(23, "div", 35)(24, "label", 21), t._uU(25, "c. State/UT of Board/ University"), t.qZA(), t.TgZ(26, "div", 22)(27, "div", 23)(28, "p", 24), t._uU(29, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(30, "div", 35)(31, "label", 21), t._uU(32, "d. Name of Board/University"), t.qZA(), t.TgZ(33, "div", 22)(34, "div", 23)(35, "p", 24), t._uU(36, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(37, "div", 35)(38, "label", 21), t._uU(39, "e. Roll Number"), t.qZA(), t.TgZ(40, "div", 22)(41, "div", 23)(42, "p", 24), t._uU(43, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(44, "div", 35)(45, "label", 21), t._uU(46, "f. Percentage"), t.qZA(), t.TgZ(47, "div", 22)(48, "div", 23)(49, "p", 24), t._uU(50, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(51, "div", 35)(52, "label", 21), t._uU(53, "g. CGPA"), t.qZA(), t.TgZ(54, "div", 22)(55, "div", 23)(56, "p", 24), t._uU(57, " Ankur Trivedi"), t.qZA()()()()()()())
            }

            function Be(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "p", 19), t._uU(4, "Candidate Information"), t.qZA(), t.TgZ(5, "h3"), t._uU(6, "Education Details"), t.qZA()(), t.TgZ(7, "form")(8, "div", 20)(9, "label", 21), t._uU(10, "1. Matriculation ( 10th Class) Examination Board"), t.qZA(), t.TgZ(11, "div", 22)(12, "div", 23)(13, "p", 24), t._uU(14, " Ankur Trivedi"), t.qZA()()(), t.TgZ(15, "div", 25)(16, "div", 35)(17, "label", 21), t._uU(18, "a. Matriculation ( 10th Class) Year of Passing"), t.qZA(), t.TgZ(19, "div", 22)(20, "div", 23)(21, "p", 24), t._uU(22, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(23, "div", 35)(24, "label", 21), t._uU(25, "b. Matriculation ( 10th Class) Roll Number"), t.qZA(), t.TgZ(26, "div", 22)(27, "div", 23)(28, "p", 24), t._uU(29, " Ankur Trivedi"), t.qZA()()()()()(), t.TgZ(30, "div", 20)(31, "label", 21), t._uU(32, "2. Highest Educational Qualification*"), t.qZA(), t.TgZ(33, "div", 22)(34, "div", 23)(35, "p", 24), t._uU(36, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(37, "div", 20)(38, "div", 36)(39, "label", 21), t._uU(40, "Qualifying Educational Qualification"), t.qZA(), t.TgZ(41, "div", 37), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.addCard())
                    }), t._UZ(42, "img", 38), t.qZA()()(), t.YNc(43, ze, 58, 0, "div", 39), t.TgZ(44, "div", 20)(45, "div", 33)(46, "div", 40), t._uU(47, "Go Back"), t.qZA(), t.TgZ(48, "button", 34), t._uU(49, "Save & Next"), t.qZA()()()()()()
                }
                if (2 & i) {
                    const n = t.oxw();
                    t.xp6(43), t.Q6J("ngForOf", n.cards)
                }
            }

            function Le(i, c) {
                1 & i && (t.TgZ(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "p", 19), t._uU(4, "Additional Information"), t.qZA(), t.TgZ(5, "h3"), t._uU(6, "Professional Background"), t.qZA()(), t.TgZ(7, "div", 20)(8, "label", 21), t._uU(9, "1. Whether you are an Ex-Servicemen (ESM) or serving in the Armed Forces?*"), t.qZA(), t.TgZ(10, "div", 25)(11, "div", 26)(12, "div", 27), t._UZ(13, "input", 28), t.TgZ(14, "label", 29), t._uU(15, " Yes "), t.qZA()(), t.TgZ(16, "div", 27), t._UZ(17, "input", 30), t.TgZ(18, "label", 31), t._uU(19, " No "), t.qZA()()(), t.TgZ(20, "div", 42)(21, "label", 21), t._uU(22, "a. Date of Joining the Armed Forces"), t.qZA(), t._UZ(23, "input", 43), t.qZA(), t.TgZ(24, "div", 42)(25, "label", 21), t._uU(26, "b. Date of Discharge/Likely Date of Discharge from the Armed Forces"), t.qZA(), t._UZ(27, "input", 43), t.qZA(), t.TgZ(28, "div", 42)(29, "label", 21), t._uU(30, "c. Length of service in the Armed Forces"), t.qZA(), t._UZ(31, "input", 44), t.qZA(), t.TgZ(32, "div", 42)(33, "label", 21), t._uU(34, "d. Have you already joined a civil post by availing benefit of reservation for Ex-Serviceman (ESM)"), t.qZA(), t.TgZ(35, "div", 26)(36, "div", 27), t._UZ(37, "input", 28), t.TgZ(38, "label", 29), t._uU(39, " Yes "), t.qZA()(), t.TgZ(40, "div", 27), t._UZ(41, "input", 30), t.TgZ(42, "label", 31), t._uU(43, " No "), t.qZA()()()(), t.TgZ(44, "div", 25)(45, "div", 45), t._UZ(46, "img", 46), t.TgZ(47, "div", 47)(48, "p", 48), t._uU(49, "Please refer to Notice of Examination, Para 5.6"), t.qZA()()()(), t.TgZ(50, "div", 42)(51, "label", 21), t._uU(52, "e. Date of Joining to Civil Post"), t.qZA(), t._UZ(53, "input", 43), t.qZA()()(), t.TgZ(54, "div", 20)(55, "label", 21), t._uU(56, "2. Are you applying for the Post of Junior Statistical Officer (MoSPI)? *"), t.qZA(), t.TgZ(57, "div", 25)(58, "div", 26)(59, "div", 27), t._UZ(60, "input", 28), t.TgZ(61, "label", 29), t._uU(62, " Yes "), t.qZA()(), t.TgZ(63, "div", 27), t._UZ(64, "input", 30), t.TgZ(65, "label", 31), t._uU(66, " No "), t.qZA()()(), t.TgZ(67, "div", 32)(68, "label", 21), t._uU(69, "a. Do you possess EQ for the Post of Junior Statistical Officer (MoSPI)?*"), t.qZA(), t.TgZ(70, "div", 26)(71, "div", 27), t._UZ(72, "input", 28), t.TgZ(73, "label", 29), t._uU(74, " Yes "), t.qZA()(), t.TgZ(75, "div", 27), t._UZ(76, "input", 30), t.TgZ(77, "label", 31), t._uU(78, " No "), t.qZA()()()()()(), t.TgZ(79, "div", 20)(80, "label", 21), t._uU(81, "3. Are you also applying for the Post of Statistical Investigator Grade II (RGI)?*"), t.qZA(), t.TgZ(82, "div", 25)(83, "div", 26)(84, "div", 27), t._UZ(85, "input", 28), t.TgZ(86, "label", 29), t._uU(87, " Yes "), t.qZA()(), t.TgZ(88, "div", 27), t._UZ(89, "input", 30), t.TgZ(90, "label", 31), t._uU(91, " No "), t.qZA()()(), t.TgZ(92, "div", 32)(93, "label", 21), t._uU(94, "a. Do you possess EQ for the Post of Statistical Investigator Grade II (RGI)?*"), t.qZA(), t.TgZ(95, "div", 26)(96, "div", 27), t._UZ(97, "input", 28), t.TgZ(98, "label", 29), t._uU(99, " Yes "), t.qZA()(), t.TgZ(100, "div", 27), t._UZ(101, "input", 30), t.TgZ(102, "label", 31), t._uU(103, " No "), t.qZA()()()()()(), t.TgZ(104, "div", 20)(105, "label", 21), t._uU(106, "4. Whether seeking Age Relaxation?*"), t.qZA(), t.TgZ(107, "div", 25)(108, "div", 26)(109, "div", 27), t._UZ(110, "input", 28), t.TgZ(111, "label", 29), t._uU(112, " Yes "), t.qZA()(), t.TgZ(113, "div", 27), t._UZ(114, "input", 30), t.TgZ(115, "label", 31), t._uU(116, " No "), t.qZA()()(), t.TgZ(117, "div", 32)(118, "label", 21), t._uU(119, "a. If yes, Age Relaxation Code"), t.qZA(), t.TgZ(120, "div", 26)(121, "div", 27), t._UZ(122, "input", 28), t.TgZ(123, "label", 29), t._uU(124, " Yes "), t.qZA()(), t.TgZ(125, "div", 27), t._UZ(126, "input", 30), t.TgZ(127, "label", 31), t._uU(128, " No "), t.qZA()()()(), t.TgZ(129, "div", 25)(130, "div", 45), t._UZ(131, "img", 46), t.TgZ(132, "div", 47)(133, "p", 48), t._uU(134, "Please refer to Notice of Examination, Para 5.6"), t.qZA()()()()()(), t.TgZ(135, "div", 20)(136, "label", 21), t._uU(137, "5. Do you want to make your personal information available for accessing job opportunities in terms of DoP&T\u2019s OM No. 390201/1/2016-Estt.(P) dated 21/06/2016?*"), t.qZA(), t.TgZ(138, "div", 25)(139, "div", 26)(140, "div", 27), t._UZ(141, "input", 28), t.TgZ(142, "label", 29), t._uU(143, " Yes "), t.qZA()(), t.TgZ(144, "div", 27), t._UZ(145, "input", 30), t.TgZ(146, "label", 31), t._uU(147, " No "), t.qZA()()(), t.TgZ(148, "div", 1)(149, "div", 25)(150, "div", 45), t._UZ(151, "img", 46), t.TgZ(152, "div", 47)(153, "p", 48), t._uU(154, "Please refer to Notice of Examination, Para 5.6"), t.qZA()()()()(), t.TgZ(155, "div", 1)(156, "div", 33)(157, "div", 40), t._uU(158, "Go Back"), t.qZA(), t.TgZ(159, "button", 34), t._uU(160, "Save & Next"), t.qZA()()()()()()())
            }

            function Ye(i, c) {
                1 & i && (t.TgZ(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "p", 19), t._uU(4, "Additional Information"), t.qZA(), t.TgZ(5, "h3"), t._uU(6, "Exam Requirements"), t.qZA()(), t.TgZ(7, "div", 20)(8, "label", 21), t._uU(9, "1. Preference of Examination Centre*"), t.qZA(), t.TgZ(10, "div", 25)(11, "div", 42)(12, "label", 21), t._uU(13, "a. Preference 1"), t.qZA(), t._UZ(14, "input", 44), t.qZA(), t.TgZ(15, "div", 42)(16, "label", 21), t._uU(17, "a. Preference 2"), t.qZA(), t._UZ(18, "input", 44), t.qZA(), t.TgZ(19, "div", 42)(20, "label", 21), t._uU(21, "a. Preference 3"), t.qZA(), t._UZ(22, "input", 44), t.qZA()()(), t.TgZ(23, "div", 20)(24, "label", 21), t._uU(25, "2. Are you a person with benchmark disabilities (40% or more) in the category of Blindness (VH)?"), t.qZA(), t.TgZ(26, "div", 25)(27, "div", 26)(28, "div", 27), t._UZ(29, "input", 28), t.TgZ(30, "label", 29), t._uU(31, " Yes "), t.qZA()(), t.TgZ(32, "div", 27), t._UZ(33, "input", 30), t.TgZ(34, "label", 31), t._uU(35, " No "), t.qZA()()(), t.TgZ(36, "div", 1)(37, "div", 25)(38, "div", 45), t._UZ(39, "img", 46), t.TgZ(40, "div", 47)(41, "p", 48), t._uU(42, "Please refer to Notice of Examination, Para 5.6"), t.qZA()()()()(), t.TgZ(43, "div", 32)(44, "label", 21), t._uU(45, "a. Are you a person with benchmark disabilities (40% or more) in the category of OH-Both Arms Affected (OH-BA) or OH-Cerebral Palsy (OH-CP)?"), t.qZA(), t.TgZ(46, "div", 26)(47, "div", 27), t._UZ(48, "input", 28), t.TgZ(49, "label", 29), t._uU(50, " Yes "), t.qZA()(), t.TgZ(51, "div", 27), t._UZ(52, "input", 30), t.TgZ(53, "label", 31), t._uU(54, " No "), t.qZA()()(), t.TgZ(55, "div", 1)(56, "div", 25)(57, "div", 45), t._UZ(58, "img", 46), t.TgZ(59, "div", 47)(60, "p", 48), t._uU(61, "Please refer to Notice of Examination, Para 5.6"), t.qZA()()()()()(), t.TgZ(62, "div", 32)(63, "label", 21), t._uU(64, "b. Do you have a physical limitation to write as per Para 7.2 or 7.3 of the Notice (Certificate to this effect from competent authority as per format at Annexure-I / Annexure-IA to the Notice of Examination, would be required at the time of Examination?"), t.qZA(), t.TgZ(65, "div", 26)(66, "div", 27), t._UZ(67, "input", 28), t.TgZ(68, "label", 29), t._uU(69, " Yes "), t.qZA()(), t.TgZ(70, "div", 27), t._UZ(71, "input", 30), t.TgZ(72, "label", 31), t._uU(73, " No "), t.qZA()()()(), t.TgZ(74, "div", 32)(75, "label", 21), t._uU(76, "c. Whether scribe is required?"), t.qZA(), t.TgZ(77, "div", 26)(78, "div", 27), t._UZ(79, "input", 28), t.TgZ(80, "label", 29), t._uU(81, " Yes "), t.qZA()(), t.TgZ(82, "div", 27), t._UZ(83, "input", 30), t.TgZ(84, "label", 31), t._uU(85, " No "), t.qZA()()()(), t.TgZ(86, "div", 32)(87, "label", 21), t._uU(88, "d. Will you make your own arrangement of scribe?"), t.qZA(), t.TgZ(89, "div", 26)(90, "div", 27), t._UZ(91, "input", 28), t.TgZ(92, "label", 29), t._uU(93, " Yes "), t.qZA()(), t.TgZ(94, "div", 27), t._UZ(95, "input", 30), t.TgZ(96, "label", 31), t._uU(97, " No "), t.qZA()()()(), t.TgZ(98, "div", 32)(99, "label", 21), t._uU(100, "e. If scribe is to be arranged by SSC, then indicate medium?"), t.qZA(), t._UZ(101, "input", 44), t.qZA()()(), t.TgZ(102, "div", 1)(103, "div", 33)(104, "div", 40), t._uU(105, "Go Back"), t.qZA(), t.TgZ(106, "button", 34), t._uU(107, "Save & Next"), t.qZA()()()()())
            }

            function Fe(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 49)(1, "div", 50)(2, "div", 18)(3, "p", 19), t._uU(4, "CHSL Application Form"), t.qZA(), t.TgZ(5, "h3"), t._uU(6, "Upload Documents"), t.qZA()(), t.TgZ(7, "div", 1)(8, "div", 25)(9, "div", 51)(10, "div", 52)(11, "label", 53), t._uU(12, "1. Upload your Photograph"), t.qZA(), t.TgZ(13, "div", 54)(14, "button", 55), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.prevToggle())
                    }), t._UZ(15, "img", 56), t._uU(16, " Capture Live Photo"), t.qZA()()(), t.TgZ(17, "div", 57), t._UZ(18, "img", 58), t.qZA()(), t.TgZ(19, "div", 59)(20, "p", 60), t._uU(21, "Or"), t.qZA(), t._UZ(22, "div", 61), t.qZA(), t.TgZ(23, "div", 1)(24, "p", 62), t._uU(25, "Scan QR Code"), t.qZA(), t.TgZ(26, "p", 63), t._uU(27, "To download the app from the Play Store, if you are unable to capture live photos with your device"), t.qZA(), t.TgZ(28, "div", 64), t._UZ(29, "img", 65), t.qZA()(), t.TgZ(30, "div", 1)(31, "div", 51)(32, "div", 52)(33, "label", 66), t._uU(34, "2. Upload Your Signature *"), t.qZA(), t.TgZ(35, "div", 67)(36, "p"), t._uU(37, "Please Note: "), t.qZA(), t.TgZ(38, "p"), t._uU(39, "a) Allowed file size 10KB to 20KB in JPEG/JPG format"), t.qZA(), t.TgZ(40, "p"), t._uU(41, " b) images size about 4.0cm (width) X 2.0 cm (height)"), t.qZA()(), t.TgZ(42, "button", 34), t._uU(43, "Choose File"), t.qZA()(), t.TgZ(44, "div", 57), t._UZ(45, "img", 68), t.qZA()()()()()(), t.TgZ(46, "div", 1)(47, "div", 33)(48, "div", 40), t._uU(49, "Go Back"), t.qZA(), t.TgZ(50, "button", 55), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.imageCapture())
                    }), t._uU(51, "Save & Next"), t.qZA()()()()
                }
            }

            function $e(i, c) {
                1 & i && (t.TgZ(0, "div", 49)(1, "div", 69)(2, "h2"), t._uU(3, "Declaration"), t.qZA(), t.TgZ(4, "ol", 70)(5, "li"), t._uU(6, " I have read the Notice of Examination and accept all the Terms & Conditions mentioned therein. "), t.qZA(), t.TgZ(7, "li"), t._uU(8, " I hereby declare that all the statements made in this application are true, complete and correct to the best of my knowledge and belief. I understand that in the event of any information found suppressed / false or incorrect at any stage or ineligibility being detected before or after the Examination, my candidature / appointment is liable to be cancelled. I am willing to serve anywhere in India. "), t.qZA(), t.TgZ(9, "li"), t._uU(10, " I declare that the photograph uploaded in the Application Form has been taken on or after the stipulated dated. "), t.qZA(), t.TgZ(11, "li"), t._uU(12, " I agree to authorize SSC to use my Aadhar data for verification purpose.* "), t.qZA()(), t.TgZ(13, "h4"), t._uU(14, "Verification will be subject to authorization from a competent authority."), t.qZA(), t.TgZ(15, "div", 27), t._UZ(16, "input", 71), t.TgZ(17, "label", 72), t._uU(18, " I agree "), t.qZA()(), t.TgZ(19, "div", 1)(20, "div", 33)(21, "div", 40), t._uU(22, "Go Back"), t.qZA(), t.TgZ(23, "button", 34), t._uU(24, "Save & Next"), t.qZA()()()()())
            }

            function Je(i, c) {
                1 & i && (t.ynx(0), t._UZ(1, "img", 88), t.BQk())
            }

            function je(i, c) {
                1 & i && (t.ynx(0), t._UZ(1, "img", 89), t.BQk())
            }

            function Qe(i, c) {
                1 & i && (t.TgZ(0, "div", 90)(1, "div", 18)(2, "h3"), t._uU(3, "Personal Details"), t.qZA()(), t.TgZ(4, "form")(5, "div", 20)(6, "label", 21), t._uU(7, "1. Candidate Name (As per Matriculation Certificate)"), t.qZA(), t.TgZ(8, "div", 22)(9, "div", 23)(10, "p", 24), t._uU(11, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(12, "div", 20)(13, "label", 21), t._uU(14, "2. New / Changed Name"), t.qZA(), t.TgZ(15, "div", 22)(16, "div", 23)(17, "p", 24), t._uU(18, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(19, "div", 20)(20, "label", 21), t._uU(21, "3. Gender"), t.qZA(), t.TgZ(22, "div", 22)(23, "div", 23)(24, "p", 24), t._uU(25, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(26, "div", 20)(27, "label", 21), t._uU(28, "4. Category"), t.qZA(), t.TgZ(29, "div", 22)(30, "div", 23)(31, "p", 24), t._uU(32, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(33, "div", 20)(34, "label", 21), t._uU(35, "5. Fathers Name"), t.qZA(), t.TgZ(36, "div", 22)(37, "div", 23)(38, "p", 24), t._uU(39, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(40, "div", 20)(41, "label", 21), t._uU(42, "6. Mother\u2019s Name"), t.qZA(), t.TgZ(43, "div", 22)(44, "div", 23)(45, "p", 24), t._uU(46, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(47, "div", 20)(48, "label", 21), t._uU(49, "7. Date Of Birth (As per Matriculation Certificate)"), t.qZA(), t.TgZ(50, "div", 22)(51, "div", 23)(52, "p", 24), t._uU(53, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(54, "div", 20)(55, "label", 21), t._uU(56, "8. Age as of 1/08/2023"), t.qZA(), t.TgZ(57, "div", 22)(58, "div", 23)(59, "p", 24), t._uU(60, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(61, "div", 20)(62, "label", 21), t._uU(63, "9. Nationality"), t.qZA(), t.TgZ(64, "div", 22)(65, "div", 23)(66, "p", 24), t._uU(67, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(68, "div", 20)(69, "label", 21), t._uU(70, "10. Visible Identification Mark"), t.qZA(), t.TgZ(71, "div", 22)(72, "div", 23)(73, "p", 24), t._uU(74, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(75, "div", 20)(76, "label", 21), t._uU(77, "11. Whether Person with Benchmark Disability (PWBD)?"), t.qZA(), t.TgZ(78, "div", 25)(79, "div", 26)(80, "div", 27), t._UZ(81, "input", 28), t.TgZ(82, "label", 29), t._uU(83, " Yes "), t.qZA()(), t.TgZ(84, "div", 27), t._UZ(85, "input", 30), t.TgZ(86, "label", 31), t._uU(87, " No "), t.qZA()()()(), t.TgZ(88, "div", 32)(89, "label", 21), t._uU(90, "a. If yes, type of disability?"), t.qZA(), t.TgZ(91, "div", 22)(92, "div", 23)(93, "p", 24), t._uU(94, " Ankur Trivedi"), t.qZA()()()()()(), t.TgZ(95, "div", 91)(96, "h3"), t._uU(97, "Educational Details"), t.qZA(), t.TgZ(98, "div", 36), t._UZ(99, "img", 92), t.TgZ(100, "span", 93), t._uU(101, "Edit"), t.qZA()()(), t.TgZ(102, "form")(103, "div", 20)(104, "label", 21), t._uU(105, "1. Matriculation ( 10th Class) Examination Board"), t.qZA(), t.TgZ(106, "div", 22)(107, "div", 23)(108, "p", 24), t._uU(109, " Ankur Trivedi"), t.qZA()()(), t.TgZ(110, "div", 25)(111, "div", 35)(112, "label", 21), t._uU(113, "a. Matriculation ( 10th Class) Year of Passing"), t.qZA(), t.TgZ(114, "div", 22)(115, "div", 23)(116, "p", 24), t._uU(117, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(118, "div", 35)(119, "label", 21), t._uU(120, "b. Matriculation ( 10th Class) Roll Number"), t.qZA(), t.TgZ(121, "div", 22)(122, "div", 23)(123, "p", 24), t._uU(124, " Ankur Trivedi"), t.qZA()()()()()(), t.TgZ(125, "div", 20)(126, "label", 21), t._uU(127, "2. Highest Educational Qualification*"), t.qZA(), t.TgZ(128, "div", 22)(129, "div", 23)(130, "p", 24), t._uU(131, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(132, "div", 41)(133, "div", 20)(134, "label", 21), t._uU(135, "3. Details of Qualifying Educational Qualification*"), t.qZA(), t.TgZ(136, "div", 22)(137, "div", 23)(138, "p", 24), t._uU(139, " Ankur Trivedi"), t.qZA()()(), t.TgZ(140, "div", 25)(141, "div", 35)(142, "label", 21), t._uU(143, "a. Status"), t.qZA(), t.TgZ(144, "div", 22)(145, "div", 23)(146, "p", 24), t._uU(147, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(148, "div", 35)(149, "label", 21), t._uU(150, "b. Passing Year"), t.qZA(), t.TgZ(151, "div", 22)(152, "div", 23)(153, "p", 24), t._uU(154, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(155, "div", 35)(156, "label", 21), t._uU(157, "c. State/UT of Board/ University"), t.qZA(), t.TgZ(158, "div", 22)(159, "div", 23)(160, "p", 24), t._uU(161, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(162, "div", 35)(163, "label", 21), t._uU(164, "d. Name of Board/University"), t.qZA(), t.TgZ(165, "div", 22)(166, "div", 23)(167, "p", 24), t._uU(168, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(169, "div", 35)(170, "label", 21), t._uU(171, "e. Roll Number"), t.qZA(), t.TgZ(172, "div", 22)(173, "div", 23)(174, "p", 24), t._uU(175, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(176, "div", 35)(177, "label", 21), t._uU(178, "f. Percentage"), t.qZA(), t.TgZ(179, "div", 22)(180, "div", 23)(181, "p", 24), t._uU(182, " Ankur Trivedi"), t.qZA()()()(), t.TgZ(183, "div", 35)(184, "label", 21), t._uU(185, "g. CGPA"), t.qZA(), t.TgZ(186, "div", 22)(187, "div", 23)(188, "p", 24), t._uU(189, " Ankur Trivedi"), t.qZA()()()()()()()()())
            }

            function Re(i, c) {
                1 & i && (t.ynx(0), t._UZ(1, "img", 88), t.BQk())
            }

            function He(i, c) {
                1 & i && (t.ynx(0), t._UZ(1, "img", 89), t.BQk())
            }

            function Ke(i, c) {
                1 & i && (t.TgZ(0, "div", 90)(1, "div", 94)(2, "div", 91)(3, "h3"), t._uU(4, "Professional Background"), t.qZA(), t.TgZ(5, "div", 36), t._UZ(6, "img", 92), t.TgZ(7, "span", 93), t._uU(8, "Edit"), t.qZA()()(), t.TgZ(9, "div", 20)(10, "label", 21), t._uU(11, "1. Whether you are an Ex-Servicemen (ESM) or serving in the Armed Forces?*"), t.qZA(), t.TgZ(12, "div", 25)(13, "div", 26)(14, "div", 27), t._UZ(15, "input", 28), t.TgZ(16, "label", 29), t._uU(17, " Yes "), t.qZA()(), t.TgZ(18, "div", 27), t._UZ(19, "input", 30), t.TgZ(20, "label", 31), t._uU(21, " No "), t.qZA()()(), t.TgZ(22, "div", 42)(23, "label", 21), t._uU(24, "a. Date of Joining the Armed Forces"), t.qZA(), t._UZ(25, "input", 43), t.qZA(), t.TgZ(26, "div", 42)(27, "label", 21), t._uU(28, "b. Date of Discharge/Likely Date of Discharge from the Armed Forces"), t.qZA(), t._UZ(29, "input", 43), t.qZA(), t.TgZ(30, "div", 42)(31, "label", 21), t._uU(32, "c. Length of service in the Armed Forces"), t.qZA(), t._UZ(33, "input", 44), t.qZA(), t.TgZ(34, "div", 42)(35, "label", 21), t._uU(36, "d. Have you already joined a civil post by availing benefit of reservation for Ex-Serviceman (ESM)"), t.qZA(), t.TgZ(37, "div", 26)(38, "div", 27), t._UZ(39, "input", 28), t.TgZ(40, "label", 29), t._uU(41, " Yes "), t.qZA()(), t.TgZ(42, "div", 27), t._UZ(43, "input", 30), t.TgZ(44, "label", 31), t._uU(45, " No "), t.qZA()()()(), t.TgZ(46, "div", 25)(47, "div", 45), t._UZ(48, "img", 46), t.TgZ(49, "div", 47)(50, "p", 48), t._uU(51, "Please refer to Notice of Examination, Para 5.6 "), t.qZA()()()(), t.TgZ(52, "div", 42)(53, "label", 21), t._uU(54, "e. Date of Joining to Civil Post"), t.qZA(), t._UZ(55, "input", 43), t.qZA()()(), t.TgZ(56, "div", 20)(57, "label", 21), t._uU(58, "2. Are you applying for the Post of Junior Statistical Officer (MoSPI)? *"), t.qZA(), t.TgZ(59, "div", 25)(60, "div", 26)(61, "div", 27), t._UZ(62, "input", 28), t.TgZ(63, "label", 29), t._uU(64, " Yes "), t.qZA()(), t.TgZ(65, "div", 27), t._UZ(66, "input", 30), t.TgZ(67, "label", 31), t._uU(68, " No "), t.qZA()()(), t.TgZ(69, "div", 32)(70, "label", 21), t._uU(71, "a. Do you possess EQ for the Post of Junior Statistical Officer (MoSPI)?*"), t.qZA(), t.TgZ(72, "div", 26)(73, "div", 27), t._UZ(74, "input", 28), t.TgZ(75, "label", 29), t._uU(76, " Yes "), t.qZA()(), t.TgZ(77, "div", 27), t._UZ(78, "input", 30), t.TgZ(79, "label", 31), t._uU(80, " No "), t.qZA()()()()()(), t.TgZ(81, "div", 20)(82, "label", 21), t._uU(83, "3. Are you also applying for the Post of Statistical Investigator Grade II (RGI)?*"), t.qZA(), t.TgZ(84, "div", 25)(85, "div", 26)(86, "div", 27), t._UZ(87, "input", 28), t.TgZ(88, "label", 29), t._uU(89, " Yes "), t.qZA()(), t.TgZ(90, "div", 27), t._UZ(91, "input", 30), t.TgZ(92, "label", 31), t._uU(93, " No "), t.qZA()()(), t.TgZ(94, "div", 32)(95, "label", 21), t._uU(96, "a. Do you possess EQ for the Post of Statistical Investigator Grade II (RGI)?*"), t.qZA(), t.TgZ(97, "div", 26)(98, "div", 27), t._UZ(99, "input", 28), t.TgZ(100, "label", 29), t._uU(101, " Yes "), t.qZA()(), t.TgZ(102, "div", 27), t._UZ(103, "input", 30), t.TgZ(104, "label", 31), t._uU(105, " No "), t.qZA()()()()()(), t.TgZ(106, "div", 20)(107, "label", 21), t._uU(108, "4. Whether seeking Age Relaxation?*"), t.qZA(), t.TgZ(109, "div", 25)(110, "div", 26)(111, "div", 27), t._UZ(112, "input", 28), t.TgZ(113, "label", 29), t._uU(114, " Yes "), t.qZA()(), t.TgZ(115, "div", 27), t._UZ(116, "input", 30), t.TgZ(117, "label", 31), t._uU(118, " No "), t.qZA()()(), t.TgZ(119, "div", 32)(120, "label", 21), t._uU(121, "a. If yes, Age Relaxation Code"), t.qZA(), t.TgZ(122, "div", 26)(123, "div", 27), t._UZ(124, "input", 28), t.TgZ(125, "label", 29), t._uU(126, " Yes "), t.qZA()(), t.TgZ(127, "div", 27), t._UZ(128, "input", 30), t.TgZ(129, "label", 31), t._uU(130, " No "), t.qZA()()()(), t.TgZ(131, "div", 25)(132, "div", 45), t._UZ(133, "img", 46), t.TgZ(134, "div", 47)(135, "p", 48), t._uU(136, "Please refer to Notice of Examination, Para 5.6 "), t.qZA()()()()()(), t.TgZ(137, "div", 20)(138, "label", 21), t._uU(139, "5. Do you want to make your personal information available for accessing job opportunities in terms of DoP&T\u2019s OM No. 390201/1/2016-Estt.(P) dated 21/06/2016?*"), t.qZA(), t.TgZ(140, "div", 25)(141, "div", 26)(142, "div", 27), t._UZ(143, "input", 28), t.TgZ(144, "label", 29), t._uU(145, " Yes "), t.qZA()(), t.TgZ(146, "div", 27), t._UZ(147, "input", 30), t.TgZ(148, "label", 31), t._uU(149, " No "), t.qZA()()(), t.TgZ(150, "div", 1)(151, "div", 25)(152, "div", 45), t._UZ(153, "img", 46), t.TgZ(154, "div", 47)(155, "p", 48), t._uU(156, "Please refer to Notice of Examination, Para 5.6"), t.qZA()()()()()()()(), t.TgZ(157, "div", 95)(158, "div", 91)(159, "h3"), t._uU(160, "Exam Requirements"), t.qZA(), t.TgZ(161, "div", 36), t._UZ(162, "img", 92), t.TgZ(163, "span", 93), t._uU(164, "Edit"), t.qZA()()(), t.TgZ(165, "div", 20)(166, "label", 21), t._uU(167, "1. Preference of Examination Centre*"), t.qZA(), t.TgZ(168, "div", 25)(169, "div", 42)(170, "label", 21), t._uU(171, "a. Preference 1"), t.qZA(), t._UZ(172, "input", 44), t.qZA(), t.TgZ(173, "div", 42)(174, "label", 21), t._uU(175, "a. Preference 2"), t.qZA(), t._UZ(176, "input", 44), t.qZA(), t.TgZ(177, "div", 42)(178, "label", 21), t._uU(179, "a. Preference 3"), t.qZA(), t._UZ(180, "input", 44), t.qZA()()(), t.TgZ(181, "div", 20)(182, "label", 21), t._uU(183, "2. Are you a person with benchmark disabilities (40% or more) in the category of Blindness (VH)?"), t.qZA(), t.TgZ(184, "div", 25)(185, "div", 26)(186, "div", 27), t._UZ(187, "input", 28), t.TgZ(188, "label", 29), t._uU(189, " Yes "), t.qZA()(), t.TgZ(190, "div", 27), t._UZ(191, "input", 30), t.TgZ(192, "label", 31), t._uU(193, " No "), t.qZA()()(), t.TgZ(194, "div", 1)(195, "div", 25)(196, "div", 45), t._UZ(197, "img", 46), t.TgZ(198, "div", 47)(199, "p", 48), t._uU(200, "Please refer to Notice of Examination, Para 5.6"), t.qZA()()()()(), t.TgZ(201, "div", 32)(202, "label", 21), t._uU(203, "a. Are you a person with benchmark disabilities (40% or more) in the category of OH-Both Arms Affected (OH-BA) or OH-Cerebral Palsy (OH-CP)?"), t.qZA(), t.TgZ(204, "div", 26)(205, "div", 27), t._UZ(206, "input", 28), t.TgZ(207, "label", 29), t._uU(208, " Yes "), t.qZA()(), t.TgZ(209, "div", 27), t._UZ(210, "input", 30), t.TgZ(211, "label", 31), t._uU(212, " No "), t.qZA()()(), t.TgZ(213, "div", 1)(214, "div", 25)(215, "div", 45), t._UZ(216, "img", 46), t.TgZ(217, "div", 47)(218, "p", 48), t._uU(219, "Please refer to Notice of Examination, Para 5.6"), t.qZA()()()()()(), t.TgZ(220, "div", 32)(221, "label", 21), t._uU(222, "b. Do you have a physical limitation to write as per Para 7.2 or 7.3 of the Notice (Certificate to this effect from competent authority as per format at Annexure-I / Annexure-IA to the Notice of Examination, would be required at the time of Examination?"), t.qZA(), t.TgZ(223, "div", 26)(224, "div", 27), t._UZ(225, "input", 28), t.TgZ(226, "label", 29), t._uU(227, " Yes "), t.qZA()(), t.TgZ(228, "div", 27), t._UZ(229, "input", 30), t.TgZ(230, "label", 31), t._uU(231, " No "), t.qZA()()()(), t.TgZ(232, "div", 32)(233, "label", 21), t._uU(234, "c. Whether scribe is required?"), t.qZA(), t.TgZ(235, "div", 26)(236, "div", 27), t._UZ(237, "input", 28), t.TgZ(238, "label", 29), t._uU(239, " Yes "), t.qZA()(), t.TgZ(240, "div", 27), t._UZ(241, "input", 30), t.TgZ(242, "label", 31), t._uU(243, " No "), t.qZA()()()(), t.TgZ(244, "div", 32)(245, "label", 21), t._uU(246, "d. Will you make your own arrangement of scribe?"), t.qZA(), t.TgZ(247, "div", 26)(248, "div", 27), t._UZ(249, "input", 28), t.TgZ(250, "label", 29), t._uU(251, " Yes "), t.qZA()(), t.TgZ(252, "div", 27), t._UZ(253, "input", 30), t.TgZ(254, "label", 31), t._uU(255, " No "), t.qZA()()()(), t.TgZ(256, "div", 32)(257, "label", 21), t._uU(258, "e. If scribe is to be arranged by SSC, then indicate medium?"), t.qZA(), t._UZ(259, "input", 44), t.qZA()()()()())
            }

            function Ge(i, c) {
                1 & i && (t.ynx(0), t._UZ(1, "img", 88), t.BQk())
            }

            function Ve(i, c) {
                1 & i && (t.ynx(0), t._UZ(1, "img", 89), t.BQk())
            }

            function We(i, c) {
                1 & i && (t.TgZ(0, "div", 90)(1, "div", 96)(2, "div", 91)(3, "h3"), t._uU(4, "Photo & Signature"), t.qZA(), t.TgZ(5, "div", 36), t._UZ(6, "img", 92), t.TgZ(7, "span", 93), t._uU(8, "Edit"), t.qZA()()(), t.TgZ(9, "div", 97)(10, "div", 98), t._UZ(11, "img", 58), t.qZA(), t.TgZ(12, "div", 98), t._UZ(13, "img", 68), t.qZA()()(), t.TgZ(14, "div", 99)(15, "div", 18)(16, "h3"), t._uU(17, "Declaration"), t.qZA()(), t.TgZ(18, "ol", 70)(19, "li"), t._uU(20, " I have read the Notice of Examination and accept all the Terms & Conditions mentioned therein. "), t.qZA(), t.TgZ(21, "li"), t._uU(22, " I hereby declare that all the statements made in this application are true, complete and correct to the best of my knowledge and belief. I understand that in the event of any information found suppressed / false or incorrect at any stage or ineligibility being detected before or after the Examination, my candidature / appointment is liable to be cancelled. I am willing to serve anywhere in India. "), t.qZA(), t.TgZ(23, "li"), t._uU(24, " I declare that the photograph uploaded in the Application Form has been taken on or after the stipulated dated. "), t.qZA(), t.TgZ(25, "li"), t._uU(26, " I agree to authorize SSC to use my Aadhar data for verification purpose.* "), t.qZA()(), t.TgZ(27, "h4"), t._uU(28, "Verification will be subject to authorization from a competent authority."), t.qZA(), t.TgZ(29, "div", 27), t._UZ(30, "input", 71), t.TgZ(31, "label", 72), t._uU(32, " I agree "), t.qZA()()()())
            }

            function Xe(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "div", 73)(1, "div", 74)(2, "h1"), t._uU(3, "Preview Form"), t.qZA()(), t.TgZ(4, "cdk-accordion", 75)(5, "cdk-accordion-item", 76, 77)(7, "div", 78), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.toggle2())
                    }), t.TgZ(8, "div", 79)(9, "div", 80)(10, "span", 81), t._uU(11, "1"), t.qZA()(), t.TgZ(12, "h4", 82), t._uU(13, "Candidate Information"), t.qZA()(), t.TgZ(14, "div", 83), t.YNc(15, Je, 2, 0, "ng-container", 84), t.YNc(16, je, 2, 0, "ng-container", 84), t.qZA()(), t.YNc(17, Qe, 190, 0, "div", 85), t.qZA()(), t.TgZ(18, "cdk-accordion", 86)(19, "cdk-accordion-item", 76, 77)(21, "div", 78), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.toggle1())
                    }), t.TgZ(22, "div", 79)(23, "div", 80)(24, "span", 81), t._uU(25, "2"), t.qZA()(), t.TgZ(26, "h4", 82), t._uU(27, "Additional Details"), t.qZA()(), t.TgZ(28, "div", 83), t.YNc(29, Re, 2, 0, "ng-container", 84), t.YNc(30, He, 2, 0, "ng-container", 84), t.qZA()(), t.YNc(31, Ke, 260, 0, "div", 85), t.qZA()(), t.TgZ(32, "cdk-accordion", 86)(33, "cdk-accordion-item", 76, 77)(35, "div", 78), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.toggle3())
                    }), t.TgZ(36, "div", 79)(37, "div", 80)(38, "span", 81), t._uU(39, "3"), t.qZA()(), t.TgZ(40, "h4", 82), t._uU(41, "Upload Documents"), t.qZA()(), t.TgZ(42, "div", 83), t.YNc(43, Ge, 2, 0, "ng-container", 84), t.YNc(44, Ve, 2, 0, "ng-container", 84), t.qZA()(), t.YNc(45, We, 33, 0, "div", 85), t.qZA()(), t.TgZ(46, "div", 87)(47, "div", 33)(48, "div", 40), t._uU(49, "Go Back"), t.qZA(), t.TgZ(50, "button", 55), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.confirm())
                    }), t._uU(51, "Save & Next"), t.qZA()()()()
                }
                if (2 & i) {
                    const n = t.oxw();
                    t.xp6(15), t.Q6J("ngIf", n.expand2), t.xp6(1), t.Q6J("ngIf", !n.expand2), t.xp6(1), t.Q6J("ngIf", n.expand2), t.xp6(12), t.Q6J("ngIf", n.expand1), t.xp6(1), t.Q6J("ngIf", !n.expand1), t.xp6(1), t.Q6J("ngIf", n.expand1), t.xp6(12), t.Q6J("ngIf", n.expand3), t.xp6(1), t.Q6J("ngIf", !n.expand3), t.xp6(1), t.Q6J("ngIf", n.expand3)
                }
            }

            function to(i, c) {
                1 & i && (t.TgZ(0, "div", 73)(1, "div", 100)(2, "div", 98), t._UZ(3, "img", 101), t.qZA(), t.TgZ(4, "h1"), t._uU(5, "Form received successfully, content verification pending."), t.qZA(), t.TgZ(6, "div", 102), t._UZ(7, "img", 46), t.TgZ(8, "div", 47)(9, "p", 48), t._uU(10, "Download Form"), t.qZA()()(), t.TgZ(11, "div", 103)(12, "button", 34), t._uU(13, "Go to Dashboard"), t.qZA()()()())
            }
            let no = (() => {
                    class i {
                        constructor(n) {
                            this.dialog = n, this.currentStep = 1, this.confirmdata = "confirm", this.previewData = "Riya shukla", this.imageCap = "image", this.cards = [], this.expand2 = !0, this.expand1 = !0, this.expand3 = !0, this.expand4 = !0
                        }
                        prevToggle() {
                            this.dialog.open(Ue, {
                                data: {
                                    result: this.previewData
                                }
                            })
                        }
                        confirm() {
                            this.dialog.open(De.$, {
                                data: {
                                    result: this.confirmdata
                                }
                            })
                        }
                        imageCapture() {
                            this.dialog.open(Ee, {
                                data: {
                                    result: this.imageCap
                                }
                            })
                        }
                        goToStep(n) {
                            this.currentStep = n
                        }
                        addCard() {
                            this.cards.push(`New Card ${this.cards.length+1}`)
                        }
                        toggle2() {
                            this.expand2 = !this.expand2
                        }
                        toggle1() {
                            this.expand1 = !this.expand1
                        }
                        toggle3() {
                            this.expand3 = !this.expand3
                        }
                        toggle4() {
                            this.expand4 = !this.expand4
                        }
                        static# t = this.\u0275fac = function(o) {
                            return new(o || i)(t.Y36(s.uw))
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: i,
                            selectors: [
                                ["app-exam-application"]
                            ],
                            decls: 63,
                            vars: 62,
                            consts: [
                                [1, "container-fluid"],
                                [1, "row"],
                                [1, "col-md-3", "col-sm-12", "left-panel"],
                                [1, "custom-stepper-vertical", "gap"],
                                [1, "stepper-class"],
                                [1, "step", 3, "click"],
                                [1, "opac", "white-col"],
                                [1, "sub-progress-line"],
                                [1, "sub-step", "opac", 3, "click"],
                                [1, "opac", "white-sub-col"],
                                [1, "progress-line"],
                                [1, "col-md-9", "col-sm-12", "right-panel"],
                                ["class", "row cards rws", 4, "ngIf"],
                                ["class", "row rws", 4, "ngIf"],
                                ["class", "row rws ", 4, "ngIf"],
                                ["class", "row rws cards", 4, "ngIf"],
                                [1, "row", "cards", "rws"],
                                [1, "form-block", "card-width"],
                                [1, "form-header", "border-bot"],
                                [1, "app-title"],
                                [1, "row", "gap"],
                                [1, "form-label"],
                                [1, "col-md-12", "edit-input"],
                                [1, "gray-area"],
                                [1, "edit-text"],
                                [1, "col-md-12"],
                                [1, "radio-cont"],
                                [1, "form-check"],
                                ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"],
                                ["for", "flexRadioDefault1", 1, "form-check-label", "label-checkk"],
                                ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"],
                                ["for", "flexRadioDefault2", 1, "form-check-label", "label-checkk"],
                                [1, "col-md-12", "gaps"],
                                [1, "button-block"],
                                [1, "save-btn"],
                                [1, "row", "gaps"],
                                [1, "action-block"],
                                [1, "add-block", 3, "click"],
                                ["src", "assets/images/plus_circle.svg"],
                                ["class", "add-opp", 4, "ngFor", "ngForOf"],
                                [1, "trans-back"],
                                [1, "add-opp"],
                                [1, "col-md-12", "input-form-fields", "header"],
                                ["type", "date", 1, "form-control", "wo-input", "dateBg"],
                                ["type", "text", 1, "form-control", "wo-input"],
                                [1, "content"],
                                ["src", "assets/images/pdf-board.svg", "height", "15"],
                                [1, "pdf-section"],
                                [1, "pdf-text"],
                                [1, "row", "rws"],
                                [1, "main-container", "col-md-11"],
                                [1, "uploads"],
                                [1, "upload-content"],
                                [1, "form-label", "gap"],
                                [1, "btnn-cl"],
                                [1, "save-btn", 3, "click"],
                                ["src", "assets/images/camera.svg"],
                                [1, "upload-photo", "mt10"],
                                ["src", "assets/images/user-img.svg"],
                                [1, "mid-cont", "gap"],
                                [1, "content-text", "no-margin"],
                                [1, "mid-line"],
                                [1, "content-text", "bold"],
                                [1, "context-text"],
                                [1, "img-cont", "gap"],
                                ["src", "assets/images/qr_code.svg"],
                                [1, "form-label", "header"],
                                [1, "text-cont", "context-text", "header"],
                                ["src", "assets/images/sign-img.svg"],
                                [1, "main-container"],
                                ["type", "1", 1, "lists-padding"],
                                ["type", "checkbox", "value", "", "id", "flexCheckChecked", "checked", "", 1, "form-check-input"],
                                ["for", "flexCheckChecked", 1, "form-check-label"],
                                [1, "row", "rws", "cards"],
                                [1, "hedd"],
                                [1, "example-accordion"],
                                ["role", "button", "tabindex", "0", "id", "mj1", "aria-expanded", "mj1", "aria-controls", "mj1", 1, "example-accordion-item"],
                                ["accordionItem", "cdkAccordionItem"],
                                [1, "example-accordion-item-header", 3, "click"],
                                [1, "left-acc"],
                                [1, "cir"],
                                [1, "normal-text", "bold"],
                                [1, "no-margin"],
                                [1, "example-accordion-item-description"],
                                [4, "ngIf"],
                                ["class", "example-accordion-item-body", "role", "region", "id", "mj1", "aria-labelledby", "mj1", 4, "ngIf"],
                                [1, "example-accordion", "mt20"],
                                [1, "row", "gap", "card-width"],
                                ["src", "assets/images/Globals.svg"],
                                ["src", "assets/images/down_arr.svg"],
                                ["role", "region", "id", "mj1", "aria-labelledby", "mj1", 1, "example-accordion-item-body"],
                                [1, "form-header", "border-bot", "flex-cont"],
                                ["src", "assets/images/edit-ic.svg"],
                                [1, "status-text"],
                                [1, "pro-bag"],
                                [1, "exam-req"],
                                [1, "photo-sign"],
                                [1, "img-sec", "gap"],
                                [1, "img"],
                                [1, "declaration"],
                                [1, "submit-block"],
                                ["src", "assets/images/sucees.svg"],
                                [1, "contents", "gap"],
                                [1, "btn-contain"]
                            ],
                            template: function(o, e) {
                                1 & o && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5), t.NdJ("click", function() {
                                    return e.goToStep(1)
                                }), t._uU(6, " 1 "), t.qZA(), t.TgZ(7, "span", 6), t._uU(8, "Candidate Information"), t.qZA()(), t._UZ(9, "div", 7), t.TgZ(10, "div", 4)(11, "div", 8), t.NdJ("click", function() {
                                    return e.goToStep(1.3)
                                }), t.qZA(), t.TgZ(12, "span", 9), t._uU(13, "Personal Details"), t.qZA()(), t._UZ(14, "div", 7), t.TgZ(15, "div", 4)(16, "div", 8), t.NdJ("click", function() {
                                    return e.goToStep(1.5)
                                }), t.qZA(), t.TgZ(17, "span", 9), t._uU(18, "Education Details"), t.qZA()(), t._UZ(19, "div", 10), t.TgZ(20, "div", 4)(21, "div", 5), t.NdJ("click", function() {
                                    return e.goToStep(2)
                                }), t._uU(22, " 2 "), t.qZA(), t.TgZ(23, "span", 6), t._uU(24, "Additional Information"), t.qZA()(), t._UZ(25, "div", 7), t.TgZ(26, "div", 4)(27, "div", 8), t.NdJ("click", function() {
                                    return e.goToStep(2.3)
                                }), t.qZA(), t.TgZ(28, "span", 9), t._uU(29, "Exam Requirements"), t.qZA()(), t._UZ(30, "div", 7), t.TgZ(31, "div", 4)(32, "div", 8), t.NdJ("click", function() {
                                    return e.goToStep(2.5)
                                }), t.qZA(), t.TgZ(33, "span", 9), t._uU(34, "Professional Background "), t.qZA()(), t._UZ(35, "div", 10), t.TgZ(36, "div", 4)(37, "div", 5), t.NdJ("click", function() {
                                    return e.goToStep(3)
                                }), t._uU(38, " 3 "), t.qZA(), t.TgZ(39, "span", 6), t._uU(40, "Upload Documents"), t.qZA()(), t._UZ(41, "div", 10), t.TgZ(42, "div", 4)(43, "div", 5), t.NdJ("click", function() {
                                    return e.goToStep(4)
                                }), t._uU(44, " 4 "), t.qZA(), t.TgZ(45, "span", 6), t._uU(46, "Preview Form"), t.qZA()(), t._UZ(47, "div", 10), t.TgZ(48, "div", 4)(49, "div", 5), t.NdJ("click", function() {
                                    return e.goToStep(5)
                                }), t._uU(50, " 5 "), t.qZA(), t.TgZ(51, "span", 6), t._uU(52, "Submit Form"), t.qZA()(), t._UZ(53, "div", 10), t.qZA()(), t.TgZ(54, "div", 11), t.YNc(55, qe, 102, 0, "div", 12), t.YNc(56, Be, 50, 1, "div", 12), t.YNc(57, Le, 161, 0, "div", 12), t.YNc(58, Ye, 108, 0, "div", 12), t.YNc(59, Fe, 52, 0, "div", 13), t.YNc(60, $e, 25, 0, "div", 14), t.YNc(61, Xe, 52, 9, "div", 15), t.YNc(62, to, 14, 0, "div", 15), t.qZA()()()), 2 & o && (t.xp6(5), t.ekj("active", e.currentStep > 0), t.xp6(2), t.ekj("active", e.currentStep > 0), t.xp6(2), t.ekj("active", e.currentStep > 0), t.xp6(2), t.ekj("active", e.currentStep > 1), t.xp6(1), t.ekj("active", e.currentStep > 1), t.xp6(2), t.ekj("active", e.currentStep > 1), t.xp6(2), t.ekj("active", e.currentStep > 1.3), t.xp6(1), t.ekj("active", e.currentStep > 1.3), t.xp6(2), t.ekj("active", e.currentStep > 1.3), t.xp6(2), t.ekj("active", e.currentStep > 1.5), t.xp6(2), t.ekj("active", e.currentStep > 1.5), t.xp6(2), t.ekj("active", e.currentStep > 1.5), t.xp6(2), t.ekj("active", e.currentStep > 2), t.xp6(1), t.ekj("active", e.currentStep > 2), t.xp6(2), t.ekj("active", e.currentStep > 2), t.xp6(2), t.ekj("active", e.currentStep > 2.3), t.xp6(1), t.ekj("active", e.currentStep > 2.3), t.xp6(2), t.ekj("active", e.currentStep > 2.3), t.xp6(2), t.ekj("active", e.currentStep > 2.5), t.xp6(2), t.ekj("active", e.currentStep > 2.5), t.xp6(2), t.ekj("active", e.currentStep > 2.5), t.xp6(2), t.ekj("active", e.currentStep > 3), t.xp6(2), t.ekj("active", e.currentStep > 3), t.xp6(2), t.ekj("active", e.currentStep > 3), t.xp6(2), t.ekj("active", 5 == e.currentStep), t.xp6(2), t.ekj("active", 5 == e.currentStep), t.xp6(2), t.ekj("active", e.currentStep > 4), t.xp6(2), t.Q6J("ngIf", 1.3 == e.currentStep), t.xp6(1), t.Q6J("ngIf", 1.5 == e.currentStep), t.xp6(1), t.Q6J("ngIf", 2.3 == e.currentStep), t.xp6(1), t.Q6J("ngIf", 2.5 == e.currentStep), t.xp6(1), t.Q6J("ngIf", 3 == e.currentStep), t.xp6(1), t.Q6J("ngIf", 3.4 == e.currentStep), t.xp6(1), t.Q6J("ngIf", 4 == e.currentStep), t.xp6(1), t.Q6J("ngIf", 5 == e.currentStep))
                            },
                            dependencies: [l.sg, l.O5, H.xI, H.dD, r._Y, r.JL, r.F],
                            styles: [".custom-stepper-vertical[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:left}.left-panel[_ngcontent-%COMP%]{background-color:var(--primary-color)}.step[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--global-white);border-radius:50%;font-size:16px;font-weight:700;opacity:50%}.sub-step[_ngcontent-%COMP%]{width:15px;height:15px;display:flex;align-items:center;justify-content:center;background-color:var(--global-white);border-radius:50%;margin:-2px 13.5px -1.5px}.progress-line[_ngcontent-%COMP%]{width:4px;height:40px;background-color:#ccc;margin:0 19px;position:relative}.sub-progress-line[_ngcontent-%COMP%]{width:4px;height:20px;background-color:#ccc;margin:0 19px;position:relative}.action-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.stepper-class[_ngcontent-%COMP%]{display:flex;align-items:center;width:200px;gap:10px;cursor:pointer}.step.active[_ngcontent-%COMP%]{background-color:var(--global-white);opacity:100%}.sub-step.active[_ngcontent-%COMP%]{background-color:var(--global-white)}.opac.active[_ngcontent-%COMP%]{opacity:100%}.opac[_ngcontent-%COMP%]{opacity:50%}.progress-line.active[_ngcontent-%COMP%], .sub-progress-line.active[_ngcontent-%COMP%]{background-color:var(--global-white)}.white-col[_ngcontent-%COMP%]{color:var(--global-white)}.white-sub-col[_ngcontent-%COMP%]{color:var(--global-white);font-size:12px;line-height:100%}.form-header[_ngcontent-%COMP%]{padding-bottom:20px}.cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.gaps[_ngcontent-%COMP%]{padding:20px 0 0 20px}.left-panel[_ngcontent-%COMP%]{width:20%!important}.right-panel[_ngcontent-%COMP%]{width:80%!important}.add-opp[_ngcontent-%COMP%]{border:1px solid var(--global-border);padding:24px;border-radius:12px}.main-container[_ngcontent-%COMP%]{padding:20px 40px}.mid-line[_ngcontent-%COMP%]{width:100%;border:1px solid var(--global-border);margin:0 10px}.mid-cont[_ngcontent-%COMP%]{display:flex;align-items:center}li[_ngcontent-%COMP%]{padding:10px 0}.lists-padding[_ngcontent-%COMP%]{padding:5px 20px}.hedd[_ngcontent-%COMP%]{width:80%}.example-accordion[_ngcontent-%COMP%]{width:80%;background-color:var(--global-white);border-radius:20px;border:1px solid var(--global-border);padding:0;overflow:hidden}.example-accordion-item-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;height:65px;align-items:center;background:rgb(249,241,241);padding:0 10px}.example-accordion-item-body[_ngcontent-%COMP%]{padding:20px 40px}.img-sec[_ngcontent-%COMP%]{display:flex}.img-sec[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-color:var(--global-white);padding:10px;border:1px solid var(--global-border);margin:0 10px}.action-block[_ngcontent-%COMP%]{display:flex}.flex-cont[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.cir[_ngcontent-%COMP%]{height:24px;width:24px;border-radius:50%;border:1px solid rgb(67,67,67);display:flex;justify-content:center;align-items:center;margin-right:10px}.left-acc[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.submit-block[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);width:50%}.img[_ngcontent-%COMP%]{display:flex;justify-content:center}.content[_ngcontent-%COMP%]{display:flex}.contents[_ngcontent-%COMP%], .btn-contain[_ngcontent-%COMP%]{display:flex;justify-content:center}.uploads[_ngcontent-%COMP%]{display:flex;justify-content:space-between}@media (max-width: 907px){.white-col[_ngcontent-%COMP%]{font-size:13px!important}}@media (max-width: 767px){.left-panel[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]{width:100%!important}.custom-stepper-vertical[_ngcontent-%COMP%]{flex-direction:column}.stepper-class[_ngcontent-%COMP%]{align-items:center;gap:0px;cursor:pointer;display:flex;flex-direction:row;justify-content:center}.stp[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:center}.progress-line[_ngcontent-%COMP%]{height:4px;width:100px;margin:0;width:135px}.stepper-class1[_ngcontent-%COMP%]{display:flex}.no-show[_ngcontent-%COMP%]{display:none}.content-step[_ngcontent-%COMP%]{width:100%;height:auto;display:flex;justify-content:center;text-align:center}}@media (max-width: 676px){.white-col[_ngcontent-%COMP%]{font-size:12px!important}.progress-line[_ngcontent-%COMP%]{width:110px}}@media (max-width: 543px){.progress-line[_ngcontent-%COMP%]{width:80px}.white-col[_ngcontent-%COMP%]{font-size:12px!important}}@media (max-width: 450px){.progress-line[_ngcontent-%COMP%]{width:36px}.white-col[_ngcontent-%COMP%]{font-size:10px!important}.stepper-class1[_ngcontent-%COMP%]{display:flex;justify-content:center}.content-step[_ngcontent-%COMP%]{width:22%}}"]
                        })
                    }
                    return i
                })(),
                eo = (() => {
                    class i {
                        static# t = this.\u0275fac = function(o) {
                            return new(o || i)
                        };
                        static# n = this.\u0275cmp = t.Xpm({
                            type: i,
                            selectors: [
                                ["app-application-form"]
                            ],
                            decls: 25,
                            vars: 0,
                            consts: [
                                [1, "container"],
                                [1, "row", "gap"],
                                [1, "col-md-12"],
                                [1, "app-title", "gray-col"],
                                [1, "row", "border-bot"],
                                [1, "row", "rws"],
                                [1, "header"],
                                [1, "button-block"],
                                [1, "save-btns"],
                                ["src", "assets/images/icon-rightarr.svg"]
                            ],
                            template: function(o, e) {
                                1 & o && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3), t._uU(4, "Application Form"), t.qZA(), t.TgZ(5, "h3"), t._uU(6, "Combined Graduate Level Examination, 2023"), t.qZA()()(), t.TgZ(7, "div", 4)(8, "div", 2)(9, "p", 3), t._uU(10, "Instructions to follow"), t.qZA()()(), t.TgZ(11, "div", 5)(12, "ul")(13, "li", 6), t._uU(14, "Please be very careful while filling the application form and read the latest Notice "), t.qZA(), t.TgZ(15, "li", 6), t._uU(16, " Application form once filled cannot be modified again. "), t.qZA(), t.TgZ(17, "li", 6), t._uU(18, " Application fee, if applicable, can be paid through SBI using either a challan or SBI Net Banking, or any other bank Credit/Debit Card. "), t.qZA(), t.TgZ(19, "li", 6), t._uU(20, " Keep all your education and personal documents ready while filling the form"), t.qZA()(), t.TgZ(21, "div", 7)(22, "button", 8), t._uU(23, "Fill Form "), t._UZ(24, "img", 9), t.qZA()()()())
                            },
                            styles: [".gray-col[_ngcontent-%COMP%]{color:#434343}@media (max-width: 767.98px){.rws[_ngcontent-%COMP%]{padding:20px 20px 80px}}"]
                        })
                    }
                    return i
                })();
            var B = f(65355),
                oo = f(31158),
                L = f(98246),
                Y = f(29446);
            let io = (() => {
                class i {
                    constructor(n) {
                        this.http = n
                    }
                    buildQueryParams(n) {
                        let o = new I.LE;
                        for (const e in n) n.hasOwnProperty(e) && null != n[e] && (o = o.set(e, n[e].toString()));
                        return o
                    }
                    constructUrl(n) {
                        return v.N.apiUrl + "/" + n
                    }
                    getOptionPreferenceData(n) {
                        let o = this.buildQueryParams(n);
                        return this.http.get(this.constructUrl(Y.b.ms31.getDepartment), {
                            params: o
                        })
                    }
                    getPosts() {
                        return this.http.get(`${v.N.apiUrl}/candidate/2.4/getPostDetails`)
                    }
                    onSubmitPreference(n) {
                        let o;
                        return o = "localhost" === v.N ? .host ? "http://localhost:6004/api" : v.N.apiUrl, this.http.post(`${o}/candidate/2.4/createPreferenceData`, n)
                    }
                    getPreferenceData(n) {
                        let o = this.buildQueryParams(n);
                        return this.http.get(this.constructUrl(Y.b.ms31.getPreference), {
                            params: o
                        })
                    }
                    printApplicationDetail(n) {
                        let o = this.buildQueryParams(n);
                        return this.http.get(this.constructUrl(Y.b.ms31.printPreference), {
                            params: o
                        })
                    }
                    downloadApplication(n) {
                        console.log("query", n);
                        let o = this.buildQueryParams(n);
                        return this.http.get(this.constructUrl(Y.b.ms31.downloadApplication), {
                            params: o
                        })
                    }
                    commonDownload(n, o) {
                        n && o && window.open(`${v.N.apiUrl}/${o}/${n}`, "_self")
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.LFG(I.eN))
                    };
                    static# n = this.\u0275prov = t.Yz7({
                        token: i,
                        factory: i.\u0275fac,
                        providedIn: "root"
                    })
                }
                return i
            })();
            const ao = ["capture"],
                ro = ["canvas"],
                lo = ["downloadLink"];

            function co(i, c) {
                if (1 & i && (t.TgZ(0, "tr")(1, "td", 63), t._uU(2), t.qZA(), t._UZ(3, "td", 64), t.qZA()), 2 & i) {
                    const n = c.$implicit;
                    t.xp6(2), t.Oqu(n.postId), t.xp6(1), t.Q6J("innerHTML", n.postName, t.oJD)
                }
            }

            function so(i, c) {
                if (1 & i && (t.TgZ(0, "th", 58), t._uU(1), t.qZA()), 2 & i) {
                    const n = c.index;
                    t.xp6(1), t.Oqu(n + 1)
                }
            }

            function po(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "td")(1, "input", 65), t.NdJ("ngModelChange", function(e) {
                        const d = t.CHM(n).index,
                            u = t.oxw();
                        return t.KtG(u.preferences[d] = e)
                    })("input", function(e) {
                        const d = t.CHM(n).index,
                            u = t.oxw();
                        return t.KtG(u.onInputChange(d, e))
                    })("paste", function(e) {
                        t.CHM(n);
                        const a = t.oxw();
                        return t.KtG(a.preventPaste(e))
                    })("keypress", function(e) {
                        t.CHM(n);
                        const a = t.oxw();
                        return t.KtG(!!a.validateKeyPress(e) || e.preventDefault())
                    }), t.qZA()()
                }
                if (2 & i) {
                    const n = c.index,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("name", "preference" + n)("ngModel", o.preferences[n])("disabled", n > 0 && !o.preferences[n - 1])
                }
            }

            function fo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.ynx(0, 66), t._UZ(1, "div", 22), t.TgZ(2, "div", 23)(3, "div", 24)(4, "h3"), t._uU(5, "Declaration"), t.qZA()(), t.TgZ(6, "div", 25)(7, "ol")(8, "li"), t._uU(9, " The options exercised above by me are final. I am also fully aware that no change in the Order of Preference(s) in the options exercised by me above would be permitted. "), t.qZA(), t.TgZ(10, "li"), t._uU(11, " (*)While giving preference for the post of LDC in BRO (L01), I have gone through the requirement of Physical Standard, Physical Efficiency Tests and Medical Standards for the post of Lower Division Clerk in BRO available at Annexure-XVI to the Notice of Examination. I fully understand that these posts carry higher physical and medical standards. I also understand that the SSC makes the final allocation of posts in accordance with Merit cum Preference of the candidate and once a post is allotted, no change is made by the Commission for any reason whatsoever. Accordingly, if I am selected and nominated for the post of LDC in BRO and subsequently fail in the physical and medical examination, I am aware that I will not be considered for any other post/ Department. "), t.qZA(), t.TgZ(12, "li"), t._uU(13, " I have gone through the eligibility criteria in respect of Educational Qualification, Age, caste/ category certificate, PwBDs certificate, etc. as prescribed in the notice of examination for the post(s) opted by me. "), t.qZA(), t.TgZ(14, "li"), t._uU(15, " I have gone through the eligibility criteria in respect of Educational Qualification, Age, caste/ category certificate, PwBDs certificate, etc. as prescribed in the notice of examination for the post(s) opted by me "), t.qZA(), t.TgZ(16, "li"), t._uU(17, " I have gone through the eligibility criteria in respect of Educational Qualification, Age, caste/ category certificate, PwBDs certificate, etc. as prescribed in the notice of examination for the post(s) opted by me "), t.qZA(), t.TgZ(18, "li"), t._uU(19, " I understand that the Option-cum-Preference exercised by me is final and no subsequent changes therein would be allowed after prescribed period given by the Commission for exercising the Option-cum-Preference. "), t.qZA()(), t.TgZ(20, "div", 26)(21, "input", 27), t.NdJ("change", function() {
                        t.CHM(n);
                        const e = t.oxw();
                        return t.KtG(e.onSubmitDeclare())
                    }), t.qZA(), t.TgZ(22, "label", 28), t._uU(23, " I agree to above terms and conditions. "), t.qZA()()()(), t._UZ(24, "div", 22), t.BQk()
                }
            }

            function uo(i, c) {
                1 & i && (t.TgZ(0, "div", 67)(1, "div", 68)(2, "div", 69)(3, "div", 70)(4, "h3", 71), t._uU(5, "Preference Submitted Successfully"), t.qZA(), t._UZ(6, "button", 72), t.qZA(), t.TgZ(7, "div", 73)(8, "div", 7)(9, "div", 30)(10, "p"), t._uU(11, " Your selected preferecne has been submitted Successfully."), t._UZ(12, "br"), t._uU(13, " Please Note that you can change your preference until this window is open in Notification. "), t.qZA()()()(), t.TgZ(14, "div", 74)(15, "button", 75), t._uU(16, "Close"), t.qZA()()()()())
            }
            let go = (() => {
                class i {
                    constructor(n, o, e, a, d, u, b, y, A, S, k) {
                        this.fb = n, this.spinner = o, this.dialog = e, this.elementRef = a, this.optionPreference = d, this.dashboardService = u, this.route = b, this.tokenService = y, this.router = A, this.http = S, this.cdr = k, this.previewData = "", this.windowToggle = !1, this.preferenceForm = r.cw, this.isDisablePreview = !0, this.isDeclare = !1, this.preferenceData = [], this.hasUnsavedChanges = !1, this.isUpdating = !1, this.Posts = [], this.qrStr = "", this.dynamicRegex = new RegExp(""), this.isSubmitted = !1, this.preferences = Array(this.Posts.length).fill(""), this.preferenceForm = this.fb.group({
                            name: [""],
                            registrationNo: [""],
                            rollNumber: [""]
                        })
                    }
                    ngOnInit() {
                        if (this.tokenService.isLoggedin()) {
                            let o = this.tokenService.getDecoded();
                            o && (this.registrationNo = o.username)
                        }
                        this.candidateInfo = this.tokenService.decryptData(sessionStorage.getItem("pref_desc")) ? .decryptedData, console.log("Candidate Information", this.candidateInfo), this.candidateInfo || this.router.navigate(["/dashboard"]), this.dashboardService.getExamNamesAndYears(), this.elementType = L.TT.CANVAS, this.correctionLevel = L.Jk.LOW, this.examinationId = this.tokenService.decryptKeyValue(this.route ? .snapshot ? .paramMap ? .get("examId")).decryptedData, this.examinationYear = this.tokenService.decryptKeyValue(this.route.snapshot.paramMap.get("examYear")).decryptedData, this.examCode = this.tokenService.decryptKeyValue(this.route.snapshot.paramMap.get("examCode")).decryptedData, this.notificationId = this.tokenService.decryptKeyValue(this.route.snapshot.paramMap.get("notificationId")).decryptedData, this.registrationNo = this.candidateInfo ? .registrationNo;
                        let n = this.dashboardService.getPreferenceData;
                        this.notificationIdUrl = n ? .notificationId, this.examIdUrl = n ? .examId, this.examYearUrl = n ? .examYear, this.gender = n ? .gender, this.isPwBD = n ? .isPwBD, this.regNumber = n ? .regNumber, this.preferenceForm.get("name") ? .patchValue(this.candidateInfo ? .name), this.preferenceForm.get("registrationNo") ? .patchValue(this.candidateInfo ? .registrationNo), this.preferenceForm.get("rollNumber") ? .patchValue(this.candidateInfo ? .rollNumber), this.rollNum = n ? .rollNum, this.getPostsDetails(), this.http.get("https://jsonip.com/").subscribe(o => {
                            this.ip = o ? .ip
                        })
                    }
                    getPostsDetails() {
                        this.optionPreference.getPosts().subscribe(n => {
                            if (console.log("post details", n.data), 200 == n.statusCode) {
                                this.Posts = n.data;
                                let o = this.Posts.map(e => e.postId).join("");
                                this.dynamicRegex = new RegExp(`[${o}]`, "i"), this.Posts.length > 0 ? this.loadPreferences() : this.dialog.open(x.I, {
                                    data: {
                                        msgType: "Error",
                                        message: "Preference post details not found"
                                    }
                                }).afterClosed().subscribe(e => {
                                    this.router.navigate(["/dashboard"])
                                })
                            }
                        })
                    }
                    validateKeyPress(n) {
                        return this.dynamicRegex.test(n.key)
                    }
                    loadPreferences() {
                        this.optionPreference.getPreferenceData({
                            examId: this.examinationId,
                            examYear: this.examinationYear,
                            examCode: this.examCode
                        }).subscribe(o => {
                            "200" == o.statusCode && (this.Values = o ? .data, this.Values.preferredDeptCodeList && this.Values.preferredDeptCodeList.length && (this.preferences = this.Values.preferredDeptCodeList.slice(0, this.Posts.length), this.isSubmitted = !0), this.qrStr = `\n          Reg No: ${this.candidateInfo.registrationNo},\n          Roll No:${this.candidateInfo?.rollNumber},\n          Date & time of submission : ${this.dateandTime(this.Values?.updatedAt)},\n          IP Address :${this.ip} `)
                        })
                    }
                    dateandTime(n) {
                        return oo(n).tz("Asia/Kolkata").format("DD/MM/YYYY h:mm:ss A")
                    }
                    onReset() {
                        this.preferences = Array(this.Posts.length).fill(""), this.preferences[0] = "", this.hasUnsavedChanges = !0
                    }
                    onSubmitDeclare() {
                        this.isDeclare = !this.isDeclare
                    }
                    onSubmit() {
                        if (!this.isUniquePreferences()) return void this.dialog.open(x.I, {
                            data: {
                                msgType: "Error",
                                message: "preferences must be unique!"
                            }
                        });
                        if (!this.preferences.some(a => a ? .trim() && "X" !== a)) return void this.dialog.open(x.I, {
                            width: "380px",
                            minHeight: "380px",
                            height: "380px",
                            data: {
                                msgType: "Error",
                                message: "At least one preference must be filled."
                            }
                        });
                        if (!1 === this.isDeclare) return void this.dialog.open(x.I, {
                            data: {
                                msgType: "Error",
                                message: "Please Accept Declaration checkbox before submit!"
                            }
                        });
                        for (; this.preferences.length < this.Posts.length;) this.preferences.push("");
                        const o = this.preferences.map(a => "" === a ? "X" : a);
                        this.optionPreference.onSubmitPreference({
                            notificationId: this.notificationId,
                            registrationNo: this.registrationNo,
                            selectedDeptCode: o,
                            isDeclared: this.isDeclare,
                            examCode: this.examCode,
                            examYear: this.examinationYear,
                            rollNumber: this.candidateInfo ? .rollNumber,
                            ipAddress: this.ip
                        }).subscribe({
                            next: a => {
                                "200" === a.statusCode && 0 == this.isSubmitted && (this.isSubmitted = !1, this.hasUnsavedChanges = !1, this.isUpdating = !1, this.aprvDialog = this.dialog.open(B.V, {
                                    width: "380px",
                                    minHeight: "380px",
                                    height: "380px",
                                    data: {
                                        msgType: "Success",
                                        message: "Your preferecne has been submitted Successfully."
                                    }
                                })), "200" === a.statusCode && 1 == this.isSubmitted ? (this.aprvDialog = this.dialog.open(B.V, {
                                    width: "380px",
                                    minHeight: "380px",
                                    height: "380px",
                                    data: {
                                        msgType: "Success",
                                        message: "Preferences Updated Successfully."
                                    }
                                }), this.isSubmitted = !0, this.hasUnsavedChanges = !1) : "203" == a.statusCode && this.dialog.open(x.I, {
                                    data: {
                                        msgType: "Error",
                                        message: `${a.error}`
                                    }
                                }), this.loadPreferences()
                            },
                            error: a => {
                                this.dialog.open(x.I, "409" === a.error.statusCode ? {
                                    data: {
                                        msgType: "Error!",
                                        message: `${a?.error?.data}`
                                    }
                                } : {
                                    data: {
                                        msgType: "Error!",
                                        message: `${a?.error?.statusMessage}`
                                    }
                                })
                            }
                        })
                    }
                    exportAsPDF(n) {
                        this.spinner.show(), this.currentDate = new Date, this.cdr.detectChanges();
                        const o = document.getElementById("print-area");
                        o && o.classList.remove("disp_none");
                        let e = document.getElementById(n);
                        this.capture.nativeElement.style.overflow = "visible", et()(this.capture.nativeElement, {
                            scale: 1.5,
                            height: e.scrollHeight
                        }).then(a => {
                            this.canvas.nativeElement.src = a.toDataURL();
                            const d = new nt.ZP("p", "mm", "a4"),
                                u = a.toDataURL("image/png"),
                                b = d.getImageProperties(u),
                                y = d.internal.pageSize.getWidth();
                            d.addImage(u, "PNG", 0, 0, y, b.height * y / b.width, "someAlias", "FAST"), d.save(`${this.candidateInfo?.rollNumber||this.candidateInfo?.registrationNo}.pdf`), this.capture.nativeElement.style.overflow = "hidden", this.capture.nativeElement.style.overflow = "auto", this.canvas.nativeElement.src = ""
                        }), this.capture.nativeElement.style.overflow = "hidden", this.capture.nativeElement.style.overflow = "auto", this.spinner.hide(), o && o.classList.add("disp_none")
                    }
                    navigateToHome() {
                        window.location.href = "https://ssc.gov.in/"
                    }
                    get getPreferenceArr() {
                        return this.preferenceForm.get("preferenceArr")
                    }
                    isUniquePreferences() {
                        const o = this.preferences.filter(a => a && "X" !== a.toUpperCase());
                        return o.length === new Set(o).size
                    }
                    onInputChange(n, o) {
                        const e = o.target.value;
                        if (this.hasUnsavedChanges = !0, e && this.preferences.some((a, d) => d !== n && a.toUpperCase() === e.toUpperCase())) return this.dialog.open(x.I, {
                            width: "380px",
                            minHeight: "380px",
                            height: "380px",
                            data: {
                                msgType: "Error",
                                message: "No duplicate post code allowed"
                            }
                        }), void setTimeout(() => {
                            this.preferences[n] = "", this.cdr.detectChanges()
                        }, 100);
                        if ("" === this.preferences[n])
                            for (let a = 0; a < this.preferences.length; a++) "X" === this.preferences[a] && (this.preferences[a] = "");
                        if (!this.preferences[n])
                            for (let a = n + 1; a < this.preferences.length; a++) this.preferences[a] = ""
                    }
                    get formattedPreferences() {
                        return this.preferences.map(n => n || "X")
                    }
                    preventPaste(n) {
                        n.preventDefault()
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(r.qu), t.Y36(ot.V), t.Y36(s.uw), t.Y36(t.SBq), t.Y36(io), t.Y36(p.s), t.Y36(g.gz), t.Y36(_.i), t.Y36(g.F0), t.Y36(I.eN), t.Y36(t.sBO))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-option-cum-preference-form"]
                        ],
                        viewQuery: function(o, e) {
                            if (1 & o && (t.Gf(ao, 5), t.Gf(ro, 5), t.Gf(lo, 5)), 2 & o) {
                                let a;
                                t.iGM(a = t.CRH()) && (e.capture = a.first), t.iGM(a = t.CRH()) && (e.canvas = a.first), t.iGM(a = t.CRH()) && (e.downloadLink = a.first)
                            }
                        },
                        decls: 246,
                        vars: 35,
                        consts: [
                            [1, "container"],
                            [1, "row", "cards", "rws"],
                            [1, "form-block", "card-width"],
                            [1, "form-header", "border-bot"],
                            [1, "content-text", "bold"],
                            [1, "header"],
                            [3, "formGroup"],
                            [1, "row"],
                            [1, "col-md-4", "input-form-fields", "header"],
                            [1, "form-label", "bold"],
                            ["type", "text", "formControlName", "name", "readonly", "", 1, "form-control", "wo-input", "pink-bg"],
                            ["type", "text", "formControlName", "registrationNo", "readonly", "", 1, "form-control", "wo-input", "pink-bg"],
                            ["type", "text", "formControlName", "rollNumber", "readonly", "", 1, "form-control", "wo-input", "pink-bg"],
                            [1, "pref"],
                            [1, "table-container2"],
                            [2, "width", "20%"],
                            [4, "ngFor", "ngForOf"],
                            [1, "table-container1"],
                            ["style", "text-align: center;", 4, "ngFor", "ngForOf"],
                            [1, "isError"],
                            [1, "button-block"],
                            [1, "save-btn", 3, "click"],
                            [1, "gap"],
                            [1, "form-blocks", "cards-width"],
                            [1, "card-header"],
                            [1, "cards-body"],
                            [1, "form-check", 2, "margin-left", "2.2rem"],
                            ["type", "checkbox", "value", "true", "id", "flexCheckChecked", 1, "form-check-input", 3, "change"],
                            ["for", "flexCheckChecked", 1, "form-check-label", 2, "margin-left", "1rem"],
                            [1, "col", 2, "display", "flex", "justify-content", "center"],
                            [1, "col-md-12", 2, "display", "flex", "justify-content", "center"],
                            [1, "save-btn", 3, "disabled", "ngClass", "click"],
                            ["id", "targetDiv", 4, "ngIf"],
                            ["class", "modal", "data-bs-backdrop", "static", "id", "onPreferenceSubmit", "tabindex", "1", "aria-hidden", "true", 4, "ngIf"],
                            ["id", "print-area", 1, "col-lg-12", "disp_none"],
                            [1, "contt"],
                            ["id", "print-section", 1, "table-view", "work-table"],
                            ["capture", ""],
                            [1, "candidate-info", 2, "border", "1px solid #ddd", "padding", "5px", "margin-bottom", "10px"],
                            [1, "watermark"],
                            [2, "display", "flex", "justify-content", "center", "width", "100%", "margin-top", "5px", "margin-left", "30px"],
                            ["src", "assets/images/sscLogo.png", "alt", "SSC", "height", "200PX", 2, "text-align", "center", "align-items", "center"],
                            [2, "display", "flex", "justify-content", "left", "width", "20%"],
                            [1, "col-sm-12"],
                            [2, "display", "flex", "gap", "10px", "padding", "10px"],
                            [2, "justify-content", "left", "width", "20%"],
                            [1, "qrcodeImage", 2, "height", "250px"],
                            ["qrc-class", "test-class", 1, "bshadow", 3, "elementType", "value", "errorCorrectionLevel"],
                            [1, "sectionHd"],
                            [2, "margin-right", "70px"],
                            [2, "margin-right", "20px"],
                            [1, "col-sm-12", 2, "border", "1px solid black", "font-family", "Arial, sans-serif", "width", "100%", "margin", "0 auto", "padding", "40px", "background", "#fff"],
                            [2, "text-align", "center", "font-weight", "bold", "font-size", "20px", "margin-bottom", "20px"],
                            [2, "width", "100%", "border-collapse", "collapse"],
                            [2, "border", "1px solid black", "padding", "8px"],
                            ["colspan", "4", 2, "border", "1px solid black", "padding", "8px", "text-align", "center"],
                            [1, "col-sm-12", 2, "border", "1px solid black", "font-family", "Arial, sans-serif", "width", "100%", "margin", "0 auto", "padding", "5px", "background", "#fff"],
                            [1, "form-blocks1", "cards-width"],
                            [2, "text-align", "center"],
                            [2, "padding", "10px"],
                            ["id", "download"],
                            ["canvas", ""],
                            ["downloadLink", ""],
                            [1, "code"],
                            [3, "innerHTML"],
                            ["type", "text", "maxlength", "1", "oninput", "this.value = this.value.toUpperCase()", 2, "text-align", "center", 3, "name", "ngModel", "disabled", "ngModelChange", "input", "paste", "keypress"],
                            ["id", "targetDiv"],
                            ["data-bs-backdrop", "static", "id", "onPreferenceSubmit", "tabindex", "1", "aria-hidden", "true", 1, "modal"],
                            [1, "modal-dialog"],
                            [1, "modal-content", 2, "border-radius", "16px"],
                            [1, "modal-header"],
                            [1, "no-margin"],
                            ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"],
                            [1, "modal-body"],
                            [1, "modal-footer", 2, "border-radius", "0px 0px 16px 16px"],
                            ["data-bs-dismiss", "modal", 1, "trans-back"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3"), t._uU(5, "Option Cum Preference Form"), t.qZA(), t.TgZ(6, "p", 4), t._uU(7, "Junior Engineer (Civil, Mechanical & Electrical) Examination, 2024"), t.qZA()(), t._UZ(8, "div", 5), t.TgZ(9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9), t._uU(13, "1. Candidate Name"), t.qZA(), t._UZ(14, "input", 10), t.qZA(), t.TgZ(15, "div", 8)(16, "label", 9), t._uU(17, "2. Registration Number"), t.qZA(), t._UZ(18, "input", 11), t.qZA(), t.TgZ(19, "div", 8)(20, "label", 9), t._uU(21, "3. Roll Number"), t.qZA(), t._UZ(22, "input", 12), t.qZA()()(), t.TgZ(23, "div", 13)(24, "h3"), t._uU(25, "Select Preferences"), t.qZA(), t.TgZ(26, "div", 14)(27, "table")(28, "thead")(29, "tr")(30, "th", 15), t._uU(31, "Post Code"), t.qZA(), t.TgZ(32, "th"), t._uU(33, "Post Name"), t.qZA()()(), t.TgZ(34, "tbody"), t.YNc(35, co, 4, 2, "tr", 16), t.qZA()()(), t._UZ(36, "br")(37, "br"), t.TgZ(38, "h5"), t._uU(39, "Candidates should indicate their option(s), in order of preference, in the Boxes given below:"), t.qZA(), t.TgZ(40, "div", 17)(41, "form")(42, "table")(43, "thead")(44, "tr"), t.YNc(45, so, 2, 1, "th", 18), t.qZA()(), t.TgZ(46, "tbody")(47, "tr"), t.YNc(48, po, 2, 3, "td", 16), t.qZA()()()()(), t.TgZ(49, "small", 19)(50, "b"), t._uU(51, "NOTE 1"), t.qZA(), t._uU(52, ": Candidates will be considered for only those posts for which they are eligible."), t.qZA(), t._UZ(53, "br"), t.TgZ(54, "small", 19)(55, "b"), t._uU(56, "NOTE 2"), t.qZA(), t._uU(57, ": You will not be considered for the posts for which you have not opted and consequently, preference has been marked as 'X'."), t.qZA(), t._UZ(58, "br")(59, "br"), t.TgZ(60, "div", 20)(61, "button", 21), t.NdJ("click", function() {
                                return e.onReset()
                            }), t._uU(62, "Reset"), t.qZA()(), t._UZ(63, "div", 22), t.TgZ(64, "div", 23)(65, "div", 24)(66, "h3"), t._uU(67, "Declaration"), t.qZA()(), t.TgZ(68, "div", 25)(69, "ol")(70, "li"), t._uU(71, " The option(s) exercised above by me are final. I am also fully aware that no change in the Order of Preference(s) in the option(s) exercised by me above would be permitted after the period specified for obtaining option is over. "), t.qZA(), t.TgZ(72, "li"), t._uU(73, " While giving preference for the post of"), t.TgZ(74, "b"), t._uU(75, " Junior Engineer (Electrical and Mechanical) & Junior Engineer (Civil) in Border Roads Organization (For male candidates only), "), t.qZA(), t._uU(76, "Post Code-A and Post Code-B respectively, I have gone through the medical standards for the above post available in the Notice of Examination. I fully understand that this post carries higher medical standards. I also understand that the SSC makes the final allocation of posts in accordance with Merit-cum-Preference of the candidate and once a post is allotted, no change is made by the Commission for any reason whatsoever. Accordingly, if I am selected and nominated for the post of"), t.TgZ(77, "b"), t._uU(78, " Junior Engineer (Electrical and Mechanical) or Junior Engineer (Civil) in Border Roads Organization (For male candidates only)"), t.qZA(), t._uU(79, " and subsequently fail in the medical examination, I am aware that I will not be considered for any other post/Ministries/Departments/Organizations."), t.TgZ(80, "b"), t._uU(81, "[applicable only for the candidates applying for Border Roads Organization]"), t.qZA()(), t.TgZ(82, "li"), t._uU(83, " I have gone through the eligibility criteria in respect of Educational Qualification, Age, caste/category certificate, PwBDs certificate, experience/diploma certificate, etc. as prescribed in the notice of examination for the post(s) opted by me. "), t.qZA(), t.TgZ(84, "li"), t._uU(85, " I certify that I hold the requisite certificates to support my claim in this regard and undertake to produce the same as and when required including at the time of Document Verification by the concerned User Department/Organization allocated to me after declaration of final result. I understand that the post/Department allocated to me would be final and any failure on my part to produce the requisite documents of eligibility in support of my candidature would lead to cancellation of my candidature and there would be no further consideration of my candidature for any other post/Department even though I might be fulfilling the eligibility criteria for the latter. "), t.qZA(), t.TgZ(86, "li"), t._uU(87, " I also understand that if any incongruence between my declaration in application form/Option-cum-Preference Form and requisite documents is found at any stage, my candidature is liable to be rejected. "), t.qZA(), t.TgZ(88, "li"), t._uU(89, " I understand that the option-cum-preference exercised by me is final and no subsequent changes therein would be allowed after prescribed period given by the Commission for exercising the Option-Cum-Preference. "), t.qZA(), t.TgZ(90, "li"), t._uU(91, " I understand that any claim of my candidature after such rejection will not be considered and also that the Commission would not entertain any representation submitted through email, post, fax, etc. against such rejection. "), t.qZA()()()(), t._UZ(92, "br"), t.TgZ(93, "div", 26)(94, "input", 27), t.NdJ("change", function() {
                                return e.onSubmitDeclare()
                            }), t.qZA(), t.TgZ(95, "label", 28), t._uU(96, " I agree to above terms and conditions. "), t.qZA(), t._UZ(97, "br"), t.qZA(), t.TgZ(98, "small", 19)(99, "b"), t._uU(100, "NOTE"), t.qZA(), t._uU(101, ": You can change your preferences until this window is open."), t.qZA(), t._UZ(102, "div", 22), t.TgZ(103, "div", 7)(104, "div", 29), t._UZ(105, "div", 20), t.TgZ(106, "div", 30)(107, "button", 21), t.NdJ("click", function() {
                                return e.onSubmit()
                            }), t._uU(108), t.qZA(), t.TgZ(109, "button", 31), t.NdJ("click", function() {
                                return e.exportAsPDF("print-section")
                            }), t._uU(110, " Print "), t.qZA(), t.TgZ(111, "button", 21), t.NdJ("click", function() {
                                return e.navigateToHome()
                            }), t._uU(112, "Close"), t.qZA()()()()(), t.YNc(113, fo, 25, 0, "ng-container", 32), t.YNc(114, uo, 17, 0, "div", 33), t.qZA()()(), t.TgZ(115, "div", 34), t.ynx(116, 35), t.TgZ(117, "div", 36, 37), t._UZ(119, "div", 38), t.TgZ(120, "div", 39)(121, "div", 40), t._UZ(122, "img", 41), t.qZA(), t._UZ(123, "div", 42), t.TgZ(124, "div", 0)(125, "div", 43)(126, "div", 44)(127, "div", 45)(128, "div", 46), t._UZ(129, "ngx-qrcode", 47), t.qZA(), t._UZ(130, "br")(131, "br"), t.qZA(), t.TgZ(132, "div", 48)(133, "h2", 49), t._uU(134, "STAFF SELECTION COMMISSION"), t.qZA(), t.TgZ(135, "h2", 49), t._uU(136, "BLOCK NO. 12, CGO COMPLEX, LODHI ROAD, "), t.qZA(), t.TgZ(137, "h2", 49), t._uU(138, "NEW DELHI 110003"), t.qZA(), t._UZ(139, "br"), t.TgZ(140, "h2", 50), t._uU(141, "Junior Engineer (Civil, Mechanical & Electrical) Examination, 2024"), t.qZA()()()()(), t.TgZ(142, "div", 0)(143, "div", 51)(144, "div", 52), t._uU(145, " CANDIDATE'S DETAILS "), t.qZA(), t.TgZ(146, "table", 53)(147, "tr")(148, "th", 54), t._uU(149, "REGISTRATION NUMBER"), t.qZA(), t.TgZ(150, "td", 54), t._uU(151), t.qZA(), t.TgZ(152, "th", 54), t._uU(153, "ROLL NUMBER"), t.qZA(), t.TgZ(154, "td", 54), t._uU(155), t.qZA()(), t.TgZ(156, "tr")(157, "th", 54), t._uU(158, "NAME"), t.qZA(), t.TgZ(159, "td", 54), t._uU(160), t.qZA(), t.TgZ(161, "th", 54), t._uU(162, "FATHER'S NAME"), t.qZA(), t.TgZ(163, "td", 54), t._uU(164), t.qZA()(), t.TgZ(165, "tr")(166, "th", 54), t._uU(167, "MOTHER'S NAME"), t.qZA(), t.TgZ(168, "td", 54), t._uU(169), t.qZA(), t.TgZ(170, "th", 54), t._uU(171, "GENDER"), t.qZA(), t.TgZ(172, "td", 54), t._uU(173), t.qZA()(), t.TgZ(174, "tr")(175, "th", 54), t._uU(176, "CAT1"), t.qZA(), t.TgZ(177, "td", 54), t._uU(178), t.qZA(), t.TgZ(179, "th", 54), t._uU(180, "DATE OF BIRTH (DD/MM/YYYY)"), t.qZA(), t.TgZ(181, "td", 54), t._uU(182), t.ALo(183, "date"), t.qZA()(), t.TgZ(184, "tr")(185, "th", 54), t._uU(186, "CAT2"), t.qZA(), t.TgZ(187, "td", 54), t._uU(188), t.qZA(), t.TgZ(189, "th", 54), t._uU(190, "CAT3"), t.qZA(), t.TgZ(191, "td", 54), t._uU(192), t.qZA()(), t.TgZ(193, "tr")(194, "th", 55), t._uU(195, "OPTIONS EXERCISED (IN ORDER OF PREFERENCE):"), t.qZA()(), t.TgZ(196, "tr")(197, "td", 55)(198, "p")(199, "strong"), t._uU(200, "Preferences : "), t.qZA(), t._uU(201), t.qZA()()(), t.TgZ(202, "tr")(203, "th", 54), t._uU(204, "SUBMITTED ON"), t.qZA(), t.TgZ(205, "td", 54), t._uU(206), t.ALo(207, "date"), t.qZA(), t.TgZ(208, "th", 54), t._uU(209, "PRINT TAKEN ON"), t.qZA(), t.TgZ(210, "td", 54), t._uU(211), t.ALo(212, "date"), t.qZA()()()()(), t._UZ(213, "br")(214, "br"), t.TgZ(215, "div", 0)(216, "div", 56)(217, "div", 57)(218, "div", 24)(219, "h3", 58), t._uU(220, "Declaration"), t.qZA()(), t.TgZ(221, "div", 25)(222, "ol")(223, "li"), t._uU(224, "\xa0 The option(s) exercised above by me are final. I am also fully aware that no change in the Order of Preference(s) in the option(s) exercised by me above would be permitted after the period specified for obtaining option is over. "), t.qZA(), t.TgZ(225, "li"), t._uU(226, "\xa0 (*)While giving preference for the post of LDC in BRO (L01), I have gone through the requirement of Physical Standard, Physical Efficiency Tests and Medical Standards for the post of Lower Division Clerk in BRO available at Annexure-XVI to the Notice of Examination. I fully understand that these posts carry higher physical and medical standards. I also understand that the SSC makes the final allocation of posts in accordance with Merit cum Preference of the candidate and once a post is allotted, no change is made by the Commission for any reason whatsoever. Accordingly, if I am selected and nominated for the post of LDC in BRO and subsequently fail in the physical and medical examination, I am aware that I will not be considered for any other post/ Department. "), t.qZA(), t.TgZ(227, "li"), t._uU(228, "\xa0 I have gone through the eligibility criteria in respect of Educational Qualification, Age, caste/ category certificate, PwBDs certificate, etc. as prescribed in the notice of examination for the post(s) opted by me. "), t.qZA(), t.TgZ(229, "li"), t._uU(230, "\xa0 I certify that I hold the requisite certificates to support my claim in this regard and undertake to produce the same as and when required including at the time of Document Verification by the concerned User Department/Organization allocated to me after declaration of final result. I understand that the post/Department allocated to me would be final and any failure on my part to produce the requisite documents of eligibility in support of my candidature would lead to cancellation of my candidature and there would be no further consideration of my candidature for any other post/Department even though I might be fulfilling the eligibility criteria for the latter. "), t.qZA(), t.TgZ(231, "li"), t._uU(232, "\xa0 I also understand that if any incongruence between my declaration in application form/Option-cum-Preference Form and requisite documents is found at any stage, my candidature is liable to be rejected. "), t.qZA(), t.TgZ(233, "li"), t._uU(234, "\xa0 I understand that the Option-cum-Preference exercised by me is final and no subsequent changes therein would be allowed after prescribed period given by the Commission for exercising the Option-cum-Preference. "), t.qZA(), t.TgZ(235, "li"), t._uU(236, "\xa0 I understand that any claim of my candidature after such rejection will not be considered and also that the Commission would not entertain any representation submitted through email, post, fax, etc. against such rejection. "), t.qZA()()()()()(), t.TgZ(237, "div", 0)(238, "div", 43)(239, "h5", 59), t._uU(240), t.qZA()()()()(), t.TgZ(241, "div", 60), t._UZ(242, "img", null, 61)(244, "a", null, 62), t.qZA(), t.BQk(), t.qZA()), 2 & o && (t.xp6(9), t.Q6J("formGroup", e.preferenceForm), t.xp6(26), t.Q6J("ngForOf", e.Posts), t.xp6(10), t.Q6J("ngForOf", e.Posts), t.xp6(3), t.Q6J("ngForOf", e.Posts), t.xp6(60), t.hij(" ", e.isSubmitted ? "Update" : "Submit", " "), t.xp6(1), t.Q6J("disabled", !e.isSubmitted || e.hasUnsavedChanges)("ngClass", !e.isSubmitted || e.hasUnsavedChanges ? "disableButton" : "save-btn"), t.xp6(4), t.Q6J("ngIf", e.windowToggle), t.xp6(1), t.Q6J("ngIf", !0), t.xp6(15), t.Q6J("elementType", e.elementType)("value", e.qrStr)("errorCorrectionLevel", e.correctionLevel), t.xp6(22), t.Oqu(e.candidateInfo.registrationNo), t.xp6(4), t.hij("", (null == e.candidateInfo ? null : e.candidateInfo.rollNumber) || "--", " "), t.xp6(5), t.Oqu(null == e.candidateInfo ? null : e.candidateInfo.name), t.xp6(4), t.Oqu(null == e.candidateInfo ? null : e.candidateInfo.fatherName), t.xp6(5), t.Oqu(null == e.candidateInfo ? null : e.candidateInfo.motherName), t.xp6(4), t.Oqu(null == e.candidateInfo ? null : e.candidateInfo.gender), t.xp6(5), t.hij(" ", null != e.candidateInfo && e.candidateInfo.cat1 ? null == e.candidateInfo ? null : e.candidateInfo.cat1 : "No", ""), t.xp6(4), t.Oqu(t.xi3(183, 26, null == e.candidateInfo ? null : e.candidateInfo.dob, "dd/MM/yyyy")), t.xp6(6), t.hij("", null != e.candidateInfo && e.candidateInfo.cat2 ? null == e.candidateInfo ? null : e.candidateInfo.cat2 : "-", " "), t.xp6(4), t.hij(" ", null != e.candidateInfo && e.candidateInfo.cat3 ? null == e.candidateInfo ? null : e.candidateInfo.cat3 : "-", ""), t.xp6(9), t.Oqu(e.formattedPreferences.join(", ")), t.xp6(5), t.Oqu(t.xi3(207, 29, null == e.Values ? null : e.Values.updatedAt, "dd/MM/yyyy h:mm:ss a")), t.xp6(5), t.Oqu(t.xi3(212, 32, e.currentDate, "dd/MM/yyyy h:mm:ss a")), t.xp6(29), t.hij("IP ADDRESS: ", e.ip, ""))
                        },
                        dependencies: [l.mk, l.sg, l.O5, r._Y, r.Fj, r.JJ, r.JL, r.nD, r.On, r.F, r.sg, r.u, L.zF, l.uU],
                        styles: [".cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.spaces[_ngcontent-%COMP%]{white-space:pre}.content-block[_ngcontent-%COMP%]{background:rgb(249,241,241);padding:10px}.pink-bg[_ngcontent-%COMP%]{background:rgb(249,241,241)}label[_ngcontent-%COMP%]{font-size:14px}.form-check-label[_ngcontent-%COMP%]{font-weight:400}.option-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100px;height:36px;border-radius:20px;padding:0 7px 0 3px;border:1px solid var(--global-border);background-color:#fffcf6;align-items:center;margin-right:10px}.selected-options[_ngcontent-%COMP%]{display:flex}.cards-width[_ngcontent-%COMP%]{width:100%}.dec[_ngcontent-%COMP%]{display:flex;justify-content:center}.form-blocks[_ngcontent-%COMP%]{background-color:var(--global-white);border:1px solid var(--global-border);border-radius:20px;overflow:hidden}.form-blocks1[_ngcontent-%COMP%]{background-color:var(--global-white);border:2px solid var(--global-border);overflow:hidden;width:90%;margin:0 auto;text-transform:uppercase}.logo-prr[_ngcontent-%COMP%]{width:90%;margin:0 auto;overflow:hidden}.card-header[_ngcontent-%COMP%]{background:rgb(249,241,241);height:50px;display:flex;align-items:center;padding:20px;text-align:center!important}.cards-body[_ngcontent-%COMP%]{padding:15px}li[_ngcontent-%COMP%]{padding:10px 0}.disableButton[_ngcontent-%COMP%]{background-color:gray}.index-identifier[_ngcontent-%COMP%]{background:rgb(255,226,226);min-width:30px;border-radius:15px;display:flex;justify-content:center;height:30px;margin-top:0}.number-check[_ngcontent-%COMP%]{cursor:context-menu;background-color:#fff;padding:0;margin:0;border-radius:4px;height:1.2rem;width:1.2rem;border:1px solid;display:flex;justify-content:center}.number-check-active[_ngcontent-%COMP%]{cursor:context-menu;background-color:#8e433e;padding:0;margin:0;border-radius:4px;height:1.2rem;width:1.2rem;border:1px solid;display:flex;justify-content:center}.check-text[_ngcontent-%COMP%]{font-size:85%;font-weight:700;color:#fff;margin-top:-1px}.modal-dialog[_ngcontent-%COMP%]{min-width:740px}th[_ngcontent-%COMP%]{margin-top:10px;text-align:left;margin-left:50px;font-family:var(--font-family);font-style:normal;font-weight:var(--bold-font);font-size:var(--base-font);line-height:14px;width:150px;color:#000000d9}tr[_ngcontent-%COMP%]{width:250px}td[_ngcontent-%COMP%]{margin-top:10px;text-align:left;word-wrap:break-word;font-family:var(--font-family);font-style:normal;font-weight:400;font-size:var(--small-font);line-height:14px;color:#1c1a16;padding:4px}td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}th[_ngcontent-%COMP%]{padding:4px}.form-check-input[_ngcontent-%COMP%]:checked{background-color:var(--primary-color);border-color:var(--primary-color)}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0}.atag_btn[_ngcontent-%COMP%]{display:flex}.prime[_ngcontent-%COMP%]{margin-left:1rem}.items[_ngcontent-%COMP%]{display:flex;align-items:center}.small-padding[_ngcontent-%COMP%]{padding:10px}.content-header[_ngcontent-%COMP%]{height:54px;background:rgb(255,249,240)}.footer[_ngcontent-%COMP%]{background:rgb(240,221,219)}.form-check-label[_ngcontent-%COMP%]{font-size:14px}.form-check[_ngcontent-%COMP%]{display:flex;padding:0}.badge[_ngcontent-%COMP%]{display:inline-block;min-width:25px!important;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:var(--primary-color);margin:0 5px 0 0;height:20px;border-radius:5px}.isError[_ngcontent-%COMP%]{color:red;font-weight:700}@media (max-width: 1000px){.spaces[_ngcontent-%COMP%]{white-space:break-spaces}}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f4f9;display:flex;justify-content:center;align-items:center;padding:20px}.table-container[_ngcontent-%COMP%]{max-width:800px;width:100%;background-color:#fff;box-shadow:0 0 10px #0000001a;border-radius:8px;overflow:hidden}.downer[_ngcontent-%COMP%]{font-family:Arial,sans-serif;width:100%;max-width:800px;margin:0 auto;border:1px solid black;padding:20px;background:#fff}.watermark[_ngcontent-%COMP%]{background-image:url(sscWatermark.72596ab6dfce2636.png);background-repeat:repeat;opacity:.7;top:0;left:0;width:100%;height:100%;z-index:-1;bottom:auto;color:#000!important}.table-container2[_ngcontent-%COMP%]{height:auto;overflow:auto}.table-container1[_ngcontent-%COMP%]{height:90px;overflow:auto;text-align:center}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px 15px;text-align:left;border-bottom:1px solid #ddd}td[_ngcontent-%COMP%]{color:#070606;font-size:16px!important;font-weight:700!important}th[_ngcontent-%COMP%]{background-color:#f9f1f1;color:#070606;text-align:left;vertical-align:middle}tr[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}td.code[_ngcontent-%COMP%]{font-weight:700;text-align:left;color:#036}input[type=text][_ngcontent-%COMP%]{width:100%;padding:5px;border:1px solid #ddd;border-radius:4px}.sectionHd[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.disp_none[_ngcontent-%COMP%]{display:none}"]
                    })
                }
                return i
            })();

            function mo(i, c) {
                1 & i && (t.TgZ(0, "div", 22), t._uU(1, " Username is a required field. "), t.qZA())
            }

            function _o(i, c) {
                1 & i && t._UZ(0, "img", 23)
            }

            function ho(i, c) {
                1 & i && t._UZ(0, "img", 24)
            }

            function xo(i, c) {
                1 & i && (t.TgZ(0, "div", 22), t._uU(1, " Old Password is a required field. "), t.qZA())
            }

            function bo(i, c) {
                1 & i && t._UZ(0, "img", 23)
            }

            function yo(i, c) {
                1 & i && t._UZ(0, "img", 24)
            }

            function vo(i, c) {
                1 & i && (t.TgZ(0, "div", 22), t._uU(1, " New Password is a required field. "), t.qZA())
            }

            function wo(i, c) {
                1 & i && (t.TgZ(0, "div", 22), t._uU(1, " Please Enter a Valid Password. "), t.qZA())
            }

            function Co(i, c) {
                1 & i && t._UZ(0, "img", 23)
            }

            function Po(i, c) {
                1 & i && t._UZ(0, "img", 24)
            }

            function Mo(i, c) {
                1 & i && (t.TgZ(0, "div", 22), t._uU(1, " Confirm Password is a required field. "), t.qZA())
            }

            function Ao(i, c) {
                1 & i && (t.TgZ(0, "div", 22), t._uU(1, " Password is not matching. "), t.qZA())
            }
            const F = function() {
                    return {
                        standalone: !0
                    }
                },
                U = function(i, c) {
                    return {
                        "pass-content": i,
                        "warn-content": c
                    }
                },
                q = function(i, c) {
                    return {
                        gd: i,
                        wp: c
                    }
                };
            let So = (() => {
                class i {
                    constructor(n, o, e, a, d) {
                        this.tokenStorageService = n, this.dashboardService = o, this.dialog = e, this.router = a, this.commonService = d, this.breadCrumbData = N.E7, this.usernameMandatory = !1, this.oldPassword = "", this.oldPasswordMandatory = !1, this.newPassword = "", this.newPasswordMandatory = !1, this.confirmPassword = "", this.confirmPasswordMandatory = !1, this.passwordNotMatch = !1, this.isFormIncomplete = !1, this.isOldPasswordVisible = !1, this.isNewPasswordVisible = !1, this.isConfirmPasswordVisible = !1, this.passwordIsNotValid = !1, this.includeCapLetter = !1, this.includeSmallLetter = !1, this.containsEightLetters = !1, this.includeNumber = !1, this.includeSpecialCharachter = !1, this.isPaste = !1
                    }
                    ngOnInit() {
                        this.token = this.tokenStorageService.getCipher(), this.token && (this.tokenData = this.tokenStorageService.getDecoded(), this.tokenData && (this.username = this.tokenData ? .username), this.usernameMandatory = !this.username)
                    }
                    blockPaste(n) {
                        this.dialog.open(x.I, {
                            data: {
                                msgType: "Error",
                                message: "Copy and Paste is not allowed!"
                            }
                        }), n.preventDefault()
                    }
                    blockCopy(n) {
                        this.isPaste = !0, n.preventDefault()
                    }
                    blockCut(n) {
                        this.isPaste = !0, n.preventDefault()
                    }
                    toggleOldPasswordVisibility() {
                        this.isOldPasswordVisible = !this.isOldPasswordVisible
                    }
                    toggleNewPasswordVisibility() {
                        this.isNewPasswordVisible = !this.isNewPasswordVisible
                    }
                    toggleConfirmPasswordVisibility() {
                        this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible
                    }
                    onChangeRegistrationNo(n) {
                        this.usernameMandatory = !this.username
                    }
                    onChangeOldPassword(n) {
                        this.oldPassword = this.oldPassword ? .trim(), this.oldPasswordMandatory = !this.oldPassword
                    }
                    routeToDashboard() {
                        this.router.navigateByUrl("/dashboard")
                    }
                    onChangePassword(n) {
                        this.newPassword = this.newPassword ? .trim(), this.confirmPassword = this.confirmPassword ? .trim(), ("" === this.newPassword || null == this.newPassword) && (this.includeCapLetter = !1, this.includeSmallLetter = !1, this.includeSpecialCharachter = !1, this.includeNumber = !1, this.containsEightLetters = !1), this.newPassword && (this.newPasswordMandatory = !1, this.includeCapLetter = !!/[A-Z]/.test(this.newPassword), this.includeSmallLetter = !!/[a-z]/.test(this.newPassword), this.includeNumber = !!/[0-9]/.test(this.newPassword), this.includeSpecialCharachter = !!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.newPassword), this.containsEightLetters = this.newPassword.length >= 8), this.confirmPassword && (this.confirmPasswordMandatory = !1), this.passwordIsNotValid = null != this.newPassword && "" !== this.newPassword && !(this.newPassword.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/) && this.newPassword.length >= 8), this.passwordNotMatch = null != this.newPassword && null != this.newPassword && "" != this.newPassword && null != this.confirmPassword && null != this.confirmPassword && "" != this.confirmPassword && this.newPassword !== this.confirmPassword
                    }
                    setNewPassword() {
                        ("" == this.username || null == this.username || null == this.username) && (this.usernameMandatory = !0, this.isFormIncomplete = !0), ("" == this.oldPassword || null == this.oldPassword || null == this.oldPassword) && (this.oldPasswordMandatory = !0, this.isFormIncomplete = !0), ("" == this.newPassword || null == this.newPassword || null == this.newPassword) && (this.newPasswordMandatory = !0, this.isFormIncomplete = !0), ("" == this.confirmPassword || null == this.confirmPassword || null == this.confirmPassword) && (this.confirmPasswordMandatory = !0, this.isFormIncomplete = !0), this.passwordNotMatch = null != this.newPassword && null != this.confirmPassword && this.newPassword !== this.confirmPassword && null !== this.confirmPassword, 1 != this.isFormIncomplete && 1 != this.passwordNotMatch && 1 != this.passwordIsNotValid && this.changePassword()
                    }
                    changePassword() {
                        this.dashboardService.changePassword({
                            registrationNo: this.username,
                            oldPassword: this.oldPassword,
                            newPassword: this.newPassword
                        }).subscribe({
                            next: o => {
                                "200" === o.statusCode ? (this.aprvDialog = this.dialog.open(B.V, {
                                    data: {
                                        msgType: "Success",
                                        message: "Password Changed successfully!",
                                        redirectUri: ""
                                    }
                                }), this.aprvDialog.afterClosed().subscribe(e => {
                                    this.commonService.sendMessage("true")
                                })) : this.dialog.open(x.I, {
                                    data: {
                                        msgType: "Error",
                                        message: o ? .error ? .lde_message ? o ? .error ? .lde_message : o ? .error
                                    }
                                })
                            },
                            error: o => {
                                console.log("errorResponse", o), this.dialog.open(x.I, {
                                    data: {
                                        msgType: "Error",
                                        message: `${o?.error?.error?o?.error?.error:o?.statusText}`
                                    }
                                })
                            }
                        })
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(_.i), t.Y36(p.s), t.Y36(s.uw), t.Y36(g.F0), t.Y36(m.v))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-change-password"]
                        ],
                        hostBindings: function(o, e) {
                            1 & o && t.NdJ("paste", function(d) {
                                return e.blockPaste(d)
                            })("copy", function(d) {
                                return e.blockCopy(d)
                            })("cut", function(d) {
                                return e.blockCut(d)
                            })
                        },
                        decls: 72,
                        vars: 71,
                        consts: [
                            [1, "container"],
                            [3, "breadCrumb"],
                            [1, "heading"],
                            [1, "card-outers", "rws"],
                            [1, "card-password"],
                            [1, "row", "gap"],
                            [1, "col-md-12", "mt20"],
                            [1, "form-label"],
                            [1, "img-field"],
                            [1, "col-md-12", "edit-input"],
                            ["type", "text", "readonly", "", 1, "col-md-12", "pink-area", 3, "ngModel", "ngModelOptions", "ngModelChange"],
                            ["class", "form-text-alert", 4, "ngIf"],
                            ["onkeypress", "return event.key !== ' ';", 1, "form-control", "wo-input", "pos", 3, "type", "ngModel", "ngModelOptions", "maxLength", "ngModelChange"],
                            [1, "datIc", 3, "click"],
                            ["src", "assets/images/eyeIcon.svg ", 4, "ngIf"],
                            ["src", "assets/images/eye_hiddenIcon.svg", 4, "ngIf"],
                            [1, "datIc1", 3, "click"],
                            [1, "note"],
                            [3, "ngClass"],
                            [1, "button-blocks"],
                            ["type", "button", 1, "trans-back", 3, "click"],
                            ["type", "button", 1, "save-btn", 3, "click"],
                            [1, "form-text-alert"],
                            ["src", "assets/images/eyeIcon.svg "],
                            ["src", "assets/images/eye_hiddenIcon.svg"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.TgZ(0, "div", 0), t._UZ(1, "app-bread-crumb", 1), t.TgZ(2, "h3", 2), t._uU(3, "Change Password"), t.qZA(), t.TgZ(4, "div", 3)(5, "div", 4)(6, "form")(7, "div", 5)(8, "div", 6)(9, "label", 7), t._uU(10, "Username"), t.TgZ(11, "span", 8), t._uU(12, "*"), t.qZA()(), t.TgZ(13, "div", 9)(14, "input", 10), t.NdJ("ngModelChange", function(d) {
                                return e.username = d
                            })("ngModelChange", function(d) {
                                return e.onChangeRegistrationNo(d)
                            }), t.qZA()(), t.YNc(15, mo, 2, 0, "div", 11), t.qZA(), t.TgZ(16, "div", 6)(17, "label", 7), t._uU(18, "Old Password"), t.TgZ(19, "span", 8), t._uU(20, "*"), t.qZA()(), t.TgZ(21, "input", 12), t.NdJ("ngModelChange", function(d) {
                                return e.oldPassword = d
                            })("ngModelChange", function(d) {
                                return e.onChangeOldPassword(d)
                            }), t.qZA(), t.TgZ(22, "div", 13), t.NdJ("click", function() {
                                return e.toggleOldPasswordVisibility()
                            }), t.YNc(23, _o, 1, 0, "img", 14), t.YNc(24, ho, 1, 0, "img", 15), t.qZA(), t.YNc(25, xo, 2, 0, "div", 11), t.qZA(), t.TgZ(26, "div", 6)(27, "label", 7), t._uU(28, "New Password"), t.TgZ(29, "span", 8), t._uU(30, "*"), t.qZA()(), t.TgZ(31, "input", 12), t.NdJ("ngModelChange", function(d) {
                                return e.newPassword = d
                            })("ngModelChange", function(d) {
                                return e.onChangePassword(d)
                            }), t.qZA(), t.TgZ(32, "div", 16), t.NdJ("click", function() {
                                return e.toggleNewPasswordVisibility()
                            }), t.YNc(33, bo, 1, 0, "img", 14), t.YNc(34, yo, 1, 0, "img", 15), t.qZA(), t.YNc(35, vo, 2, 0, "div", 11), t.YNc(36, wo, 2, 0, "div", 11), t.qZA(), t.TgZ(37, "div", 6), t._UZ(38, "ul"), t.TgZ(39, "div", 17)(40, "p", 18), t._UZ(41, "span", 18), t._uU(42, " Password must be minimum 8 characters"), t.qZA(), t.TgZ(43, "p", 18), t._UZ(44, "span", 18), t._uU(45, " Include one or more uppercase letters"), t.qZA(), t.TgZ(46, "p", 18), t._UZ(47, "span", 18), t._uU(48, " Include one or more lowercase letters"), t.qZA(), t.TgZ(49, "p", 18), t._UZ(50, "span", 18), t._uU(51, " Include one or more number"), t.qZA(), t.TgZ(52, "p", 18), t._UZ(53, "span", 18), t._uU(54, " Include one or more special character"), t.qZA()()(), t.TgZ(55, "div", 6)(56, "label", 7), t._uU(57, "Confirm Password"), t.TgZ(58, "span", 8), t._uU(59, "*"), t.qZA()(), t.TgZ(60, "input", 12), t.NdJ("ngModelChange", function(d) {
                                return e.confirmPassword = d
                            })("ngModelChange", function(d) {
                                return e.onChangePassword(d)
                            }), t.qZA(), t.TgZ(61, "div", 16), t.NdJ("click", function() {
                                return e.toggleConfirmPasswordVisibility()
                            }), t.YNc(62, Co, 1, 0, "img", 14), t.YNc(63, Po, 1, 0, "img", 15), t.qZA(), t.YNc(64, Mo, 2, 0, "div", 11), t.YNc(65, Ao, 2, 0, "div", 11), t.qZA(), t.TgZ(66, "div", 6)(67, "div", 19)(68, "button", 20), t.NdJ("click", function() {
                                return e.routeToDashboard()
                            }), t._uU(69, "Cancel"), t.qZA(), t.TgZ(70, "button", 21), t.NdJ("click", function() {
                                return e.setNewPassword()
                            }), t._uU(71, "Save"), t.qZA()()()()()()()()), 2 & o && (t.xp6(1), t.Q6J("breadCrumb", e.breadCrumbData), t.xp6(13), t.Q6J("ngModel", e.username)("ngModelOptions", t.DdM(37, F)), t.xp6(1), t.Q6J("ngIf", 1 == e.usernameMandatory), t.xp6(6), t.Q6J("type", e.isOldPasswordVisible ? "text" : "password")("ngModel", e.oldPassword)("ngModelOptions", t.DdM(38, F))("maxLength", 25), t.xp6(2), t.Q6J("ngIf", !e.isOldPasswordVisible), t.xp6(1), t.Q6J("ngIf", e.isOldPasswordVisible), t.xp6(1), t.Q6J("ngIf", 1 == e.oldPasswordMandatory), t.xp6(6), t.Q6J("type", e.isNewPasswordVisible ? "text" : "password")("ngModel", e.newPassword)("ngModelOptions", t.DdM(39, F))("maxLength", 25), t.xp6(2), t.Q6J("ngIf", !e.isNewPasswordVisible), t.xp6(1), t.Q6J("ngIf", e.isNewPasswordVisible), t.xp6(1), t.Q6J("ngIf", 1 == e.newPasswordMandatory), t.xp6(1), t.Q6J("ngIf", e.passwordIsNotValid), t.xp6(4), t.Q6J("ngClass", t.WLB(40, U, !0 === e.containsEightLetters, !0 !== e.containsEightLetters)), t.xp6(1), t.Q6J("ngClass", t.WLB(43, q, !0 === e.containsEightLetters, !0 !== e.containsEightLetters)), t.xp6(2), t.Q6J("ngClass", t.WLB(46, U, !0 === e.includeCapLetter, !0 !== e.includeCapLetter)), t.xp6(1), t.Q6J("ngClass", t.WLB(49, q, !0 === e.includeCapLetter, !0 !== e.includeCapLetter)), t.xp6(2), t.Q6J("ngClass", t.WLB(52, U, !0 === e.includeSmallLetter, !0 !== e.includeSmallLetter)), t.xp6(1), t.Q6J("ngClass", t.WLB(55, q, !0 === e.includeSmallLetter, !0 !== e.includeSmallLetter)), t.xp6(2), t.Q6J("ngClass", t.WLB(58, U, !0 === e.includeNumber, !0 !== e.includeNumber)), t.xp6(1), t.Q6J("ngClass", t.WLB(61, q, !0 === e.includeNumber, !0 !== e.includeNumber)), t.xp6(2), t.Q6J("ngClass", t.WLB(64, U, !0 === e.includeSpecialCharachter, !0 !== e.includeSpecialCharachter)), t.xp6(1), t.Q6J("ngClass", t.WLB(67, q, !0 === e.includeSpecialCharachter, !0 !== e.includeSpecialCharachter)), t.xp6(7), t.Q6J("type", e.isConfirmPasswordVisible ? "text" : "password")("ngModel", e.confirmPassword)("ngModelOptions", t.DdM(70, F))("maxLength", 25), t.xp6(2), t.Q6J("ngIf", !e.isConfirmPasswordVisible), t.xp6(1), t.Q6J("ngIf", e.isConfirmPasswordVisible), t.xp6(1), t.Q6J("ngIf", 1 == e.confirmPasswordMandatory), t.xp6(1), t.Q6J("ngIf", 1 == e.passwordNotMatch))
                        },
                        dependencies: [l.mk, l.O5, D.N, r._Y, r.Fj, r.JJ, r.JL, r.On, r.F],
                        styles: [".heading[_ngcontent-%COMP%]{color:var(--primary-color, #8E433E);text-align:center;font-style:normal;font-weight:700;line-height:140%}.card-password[_ngcontent-%COMP%]{display:flex;padding:20px;flex-direction:column;align-items:center;gap:30px;border-radius:12px;border-right:1px solid var(--global-border, #E6E6E6);border-bottom:1px solid var(--global-border, #E6E6E6);border-left:1px solid var(--global-border, #E6E6E6);background:var(--global-white, #FDFDFD);box-shadow:0 10px 30px #73727254;width:50%}.card-outers[_ngcontent-%COMP%]{display:flex;justify-content:center}.pink-area[_ngcontent-%COMP%]{background:rgb(249,241,241)!important;height:40px;border-radius:5px;padding:9px 20px;border:none;outline:none;width:100%}.datIc[_ngcontent-%COMP%]{height:38.5px;position:absolute;right:15.5px;top:25.5px;background:rgb(249,241,241)!important;width:40px;display:flex;justify-content:center;align-items:center;border-radius:0 7px 7px 0;cursor:pointer}.datIc1[_ngcontent-%COMP%]{height:38.5px;position:absolute;right:15.5px;top:26px;background:rgb(249,241,241)!important;width:40px;display:flex;justify-content:center;align-items:center;border-radius:0 7px 7px 0;cursor:pointer}.gd[_ngcontent-%COMP%]{height:5px;width:5px;border-radius:50%;background-color:var(--states-success, #188906);display:inline-block;margin-right:5px}.pass-content[_ngcontent-%COMP%]{color:var(--states-success, #188906);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.warn-content[_ngcontent-%COMP%]{color:var(--states-error, #D91919);font-size:14px;font-style:normal;font-weight:400;line-height:140%}.wp[_ngcontent-%COMP%]{height:5px;width:5px;border-radius:50%;background-color:var(--states-error, #D91919);display:inline-block;margin-right:5px}.button-blocks[_ngcontent-%COMP%]{display:flex;justify-content:center}.cancel-btns[_ngcontent-%COMP%]{margin:10px;background:var(--global-white);border-radius:34px;width:auto;height:40px;font-weight:600;font-size:var(--font-size-14);color:var(--primary-color);text-align:center;padding:13px 34px;line-height:100%;border:1px solid var(--primary-color)}.edit-input[_ngcontent-%COMP%]{padding:3.5px!important}@media (max-width: 767px){.card-password[_ngcontent-%COMP%]{padding:10px;gap:10px;width:90%}}.form-text-alert[_ngcontent-%COMP%]{color:var(--states-error, #d91919);font-family:var(--font-family);font-size:12px;font-style:normal;font-weight:700;line-height:140%}"]
                    })
                }
                return i
            })();
            var dt = f(82182),
                pt = f(98290);

            function Oo(i, c) {
                1 & i && (t.TgZ(0, "div", 24), t._uU(1, " Registration Number is a mandatory field. "), t.qZA())
            }

            function No(i, c) {
                1 & i && (t.TgZ(0, "div", 24), t._uU(1, " Please Select a Security Question. "), t.qZA())
            }

            function Zo(i, c) {
                1 & i && (t.TgZ(0, "div", 24), t._uU(1, " Please answer above Security Question. "), t.qZA())
            }

            function ko(i, c) {
                1 & i && (t.TgZ(0, "div", 24), t._uU(1, " Please Select a Security Question. "), t.qZA())
            }

            function Do(i, c) {
                1 & i && (t.TgZ(0, "div", 24), t._uU(1, " Please answer above Security Question. "), t.qZA())
            }
            const K = function() {
                    return {
                        standalone: !0
                    }
                },
                ft = function() {
                    return ["securityQuestion"]
                };
            let To = (() => {
                class i {
                    constructor(n, o, e, a, d, u) {
                        this.nsDropdownService = n, this.dashboardService = o, this.tokenStorageService = e, this.otrServices = a, this.dialog = d, this.router = u, this.breadCrumbData = N.yq, this.showRequired = "true", this.isEventRequired = !0, this.usernameMandatory = !1, this.questionOneIdMandatory = !1, this.questionTwoIdMandatory = !1, this.answerOne = "", this.answerOneMandatory = !1, this.answerTwo = "", this.answerTwoMandatory = !1, this.securityQuestions = [], this.isFormIncomplete = !1, this.securityQuestionsArray = [], this.skipArrayForQueOne = [], this.skipArrayForQueTwo = [], this.q1Array = [], this.q2Array = []
                    }
                    ngOnInit() {
                        this.token = this.tokenStorageService.getCipher(), this.token && (this.tokenData = this.tokenStorageService.getDecoded(), this.tokenData && (this.username = this.tokenData ? .username), this.usernameMandatory = !this.username), this.getAllSecurityQuestions()
                    }
                    getAllSecurityQuestions() {
                        this.otrServices.getAllSecurityQuestions().subscribe(n => {
                            "200" === n.statusCode && (this.securityQuestionsArray = n.data, this.securityQuestionsArray && this.getSecurityQuestionByRegNo())
                        })
                    }
                    getSecurityQuestionByRegNo() {
                        this.dashboardService.getSecurityQuestionByRegNo(this.username).subscribe(n => {
                            "200" === n.statusCode && (this.securityQuestionsData = n.data, this.oldSecurityQuestionIdOne = this.securityQuestionsData[0] ? .id, this.oldSecurityQuestionIdTwo = this.securityQuestionsData[1] ? .id, this.questionOneId = this.securityQuestionsData[0] ? .securityQuestionId, this.questionTwoId = this.securityQuestionsData[1] ? .securityQuestionId, this.skipArrayForQueOne = [this.questionTwoId], this.skipArrayForQueTwo = [this.questionOneId], this.q1Array = this.securityQuestionsArray.filter(o => !this.skipArrayForQueOne.includes(o ? .id)), this.q2Array = this.securityQuestionsArray.filter(o => !this.skipArrayForQueTwo.includes(o ? .id)), this.patchData())
                        })
                    }
                    patchData() {
                        const n = this.q1Array.filter(e => e ? .id === this.questionOneId),
                            o = this.q2Array.filter(e => e ? .id === this.questionTwoId);
                        this.questionOneSelectedValue = n[0] ? .id, this.questionTwoSelectedValue = o[0] ? .id, this.answerOne = this.securityQuestionsData[0] ? .answer, this.answerTwo = this.securityQuestionsData[1] ? .answer
                    }
                    resetForm() {
                        this.answerOne = "", this.answerTwo = "", this.questionOneId = "", this.questionTwoId = "", this.nsDropdownService.triggerReset()
                    }
                    onRegistrationChange(n) {
                        n && (this.usernameMandatory = !this.username)
                    }
                    onQuestionOneSelection(n) {
                        n && (this.questionOneId = n.id, this.questionOneSelectedValue = n.id, this.questionOneId && (this.questionOneIdMandatory = !1, this.skipArrayForQueTwo = [this.questionOneId], this.q2Array = this.securityQuestionsArray.filter(o => !this.skipArrayForQueTwo.includes(o ? .id)), this.answerOne = ""))
                    }
                    onQuestionTwoSelection(n) {
                        n && (this.questionTwoId = n.id, this.questionTwoSelectedValue = n.id, this.questionTwoId && (this.questionTwoIdMandatory = !1, this.skipArrayForQueOne = [this.questionTwoId], this.q1Array = this.securityQuestionsArray.filter(o => !this.skipArrayForQueOne.includes(o ? .id)), this.answerTwo = ""))
                    }
                    onChangeAnswerOne(n) {
                        this.answerOne = this.answerOne ? .trim(), this.answerOne && (this.answerOneMandatory = !1)
                    }
                    onChangeAnswerTwo(n) {
                        this.answerTwo = this.answerTwo ? .trim(), this.answerTwo && (this.answerTwoMandatory = !1)
                    }
                    submit() {
                        if (("" == this.username || null == this.username || null == this.username) && (this.usernameMandatory = !0, this.isFormIncomplete = !0), ("" == this.questionOneId || null == this.questionOneId || null == this.questionOneId) && (this.questionOneIdMandatory = !0, this.isFormIncomplete = !0), ("" == this.questionTwoId || null == this.questionTwoId || null == this.questionTwoId) && (this.questionTwoIdMandatory = !0, this.isFormIncomplete = !0), ("" == this.answerOne || null == this.answerOne || null == this.answerOne) && (this.answerOneMandatory = !0, this.isFormIncomplete = !0), ("" == this.answerTwo || null == this.answerTwo || null == this.answerTwo) && (this.answerTwoMandatory = !0, this.isFormIncomplete = !0), 1 == this.isFormIncomplete) return this.securityQuestions = [], void(this.isFormIncomplete = !1);
                        this.passwordCreation()
                    }
                    securityData() {
                        this.objOne = {
                            oldSecurityQuestionId: this.oldSecurityQuestionIdOne,
                            newSecurityQuestionId: this.questionOneId,
                            answer: this.answerOne
                        }, this.securityQuestions.push(this.objOne), this.objTwo = {
                            oldSecurityQuestionId: this.oldSecurityQuestionIdTwo,
                            newSecurityQuestionId: this.questionTwoId,
                            answer: this.answerTwo
                        }, this.securityQuestions.push(this.objTwo)
                    }
                    passwordCreation() {
                        this.securityData(), this.dashboardService.changeSecurityQuestion({
                            username: this.username,
                            securityQuestions: this.securityQuestions
                        }).subscribe({
                            next: o => {
                                "200" === o.statusCode ? (this.aprvDialog = this.dialog.open(B.V, {
                                    data: {
                                        msgType: "Success",
                                        message: "Security Questions Changed successfully!",
                                        redirectUri: ""
                                    }
                                }), this.aprvDialog.afterClosed().subscribe(e => {
                                    this.router.navigateByUrl("/dashboard")
                                })) : (this.securityQuestions = [], this.dialog.open(x.I, {
                                    data: {
                                        msgType: "Error",
                                        message: `${o.statusMessage}`
                                    }
                                }))
                            },
                            error: o => {
                                this.securityQuestions = [], this.dialog.open(x.I, {
                                    data: {
                                        msgType: "Error",
                                        message: `${o.error.data}`
                                    }
                                })
                            }
                        })
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(dt.P), t.Y36(p.s), t.Y36(_.i), t.Y36($.t), t.Y36(s.uw), t.Y36(g.F0))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-change-security-questions"]
                        ],
                        decls: 55,
                        vars: 34,
                        consts: [
                            [1, "container"],
                            [1, "row", "cards", "rws"],
                            [3, "breadCrumb"],
                            [1, "form-block", "card-width"],
                            [1, "row", "gap"],
                            [1, "col-md-12", "mt20"],
                            [1, "form-label"],
                            [1, "img-field"],
                            [1, "col-md-12", "edit-input"],
                            ["type", "text", "readonly", "", 1, "col-md-12", "pink-area", 3, "ngModel", "ngModelOptions", "maxLength", "ngModelChange"],
                            ["class", "form-text-alert", 4, "ngIf"],
                            [1, "border-bot", "header", "mt20"],
                            [1, "row"],
                            [1, "col-md-12"],
                            [1, "blocs"],
                            [1, "headers"],
                            [1, "row", "m0"],
                            ["label", "Security Question: 1", 3, "showSearch", "showRequired", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                            [1, "row", "mt20"],
                            ["type", "text", 1, "form-control", "wo-input", 3, "ngModel", "ngModelOptions", "maxLength", "ngModelChange"],
                            ["label", "Security Question: 2", 3, "showSearch", "showRequired", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                            [1, "button-block"],
                            ["type", "button", 1, "trans-back", 3, "click"],
                            ["type", "button", 1, "save-btn", 3, "click"],
                            [1, "form-text-alert"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.TgZ(0, "div", 0)(1, "div", 1), t._UZ(2, "app-bread-crumb", 2), t.TgZ(3, "div", 3)(4, "form")(5, "div", 4)(6, "div", 5)(7, "label", 6), t._uU(8, "Registration Number"), t.TgZ(9, "span", 7), t._uU(10, "*"), t.qZA()(), t.TgZ(11, "div", 8)(12, "input", 9), t.NdJ("ngModelChange", function(d) {
                                return e.username = d
                            })("ngModelChange", function(d) {
                                return e.onRegistrationChange(d)
                            }), t.qZA()(), t.YNc(13, Oo, 2, 0, "div", 10), t.qZA(), t.TgZ(14, "div", 11)(15, "h3"), t._uU(16, "Security Questions "), t.qZA()(), t.TgZ(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15), t._uU(21, "Note"), t.qZA(), t.TgZ(22, "ul", 14)(23, "li"), t._uU(24, "Security Questions allow you to regain entry to your account if you have forgotten your password and no longer have access to the email or Mobile number associated with your account."), t.qZA()()()()(), t.TgZ(25, "div", 16)(26, "div", 13)(27, "app-dropdown", 17), t.NdJ("selectionChange", function(d) {
                                return e.onQuestionOneSelection(d)
                            }), t.qZA(), t.YNc(28, No, 2, 0, "div", 10), t.qZA()(), t.TgZ(29, "div", 18)(30, "div", 13)(31, "label", 6), t._uU(32, "Answer"), t.TgZ(33, "span", 7), t._uU(34, "*"), t.qZA()(), t.TgZ(35, "input", 19), t.NdJ("ngModelChange", function(d) {
                                return e.answerOne = d
                            })("ngModelChange", function(d) {
                                return e.onChangeAnswerOne(d)
                            }), t.qZA()(), t.YNc(36, Zo, 2, 0, "div", 10), t.qZA(), t.TgZ(37, "div", 18)(38, "div", 13)(39, "app-dropdown", 20), t.NdJ("selectionChange", function(d) {
                                return e.onQuestionTwoSelection(d)
                            }), t.qZA(), t.YNc(40, ko, 2, 0, "div", 10), t.qZA()(), t.TgZ(41, "div", 18)(42, "div", 13)(43, "label", 6), t._uU(44, "Answer"), t.TgZ(45, "span", 7), t._uU(46, "*"), t.qZA()(), t.TgZ(47, "input", 19), t.NdJ("ngModelChange", function(d) {
                                return e.answerTwo = d
                            })("ngModelChange", function(d) {
                                return e.onChangeAnswerTwo(d)
                            }), t.qZA()(), t.YNc(48, Do, 2, 0, "div", 10), t.qZA(), t.TgZ(49, "div", 18)(50, "div", 21)(51, "button", 22), t.NdJ("click", function() {
                                return e.resetForm()
                            }), t._uU(52, "Reset"), t.qZA(), t.TgZ(53, "button", 23), t.NdJ("click", function() {
                                return e.submit()
                            }), t._uU(54, "Save & Next"), t.qZA()()()()()()()()), 2 & o && (t.xp6(2), t.Q6J("breadCrumb", e.breadCrumbData), t.xp6(10), t.Q6J("ngModel", e.username)("ngModelOptions", t.DdM(29, K))("maxLength", 11), t.xp6(1), t.Q6J("ngIf", e.usernameMandatory), t.xp6(14), t.Q6J("showSearch", !1)("showRequired", e.showRequired)("searchPlaceholder", "Search options...")("options", e.q1Array)("selectedOption", e.questionOneSelectedValue)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", t.DdM(30, ft)), t.xp6(1), t.Q6J("ngIf", e.questionOneIdMandatory), t.xp6(7), t.Q6J("ngModel", e.answerOne)("ngModelOptions", t.DdM(31, K))("maxLength", 50), t.xp6(1), t.Q6J("ngIf", e.answerOneMandatory), t.xp6(3), t.Q6J("showSearch", !1)("showRequired", e.showRequired)("searchPlaceholder", "Search options...")("options", e.q2Array)("selectedOption", e.questionTwoSelectedValue)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", t.DdM(32, ft)), t.xp6(1), t.Q6J("ngIf", e.questionTwoIdMandatory), t.xp6(7), t.Q6J("ngModel", e.answerTwo)("ngModelOptions", t.DdM(33, K))("maxLength", 50), t.xp6(1), t.Q6J("ngIf", e.answerTwoMandatory))
                        },
                        dependencies: [l.O5, pt.J, D.N, r._Y, r.Fj, r.JJ, r.JL, r.On, r.F],
                        styles: [".custom-stepper-vertical[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:left}.left-panel[_ngcontent-%COMP%]{background-color:var(--primary-color)}.step[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--global-white);border-radius:50%;font-size:16px;font-weight:700;opacity:50%}.sub-step[_ngcontent-%COMP%]{width:5px;height:5px;display:flex;align-items:center;justify-content:center;background-color:var(--global-white);border-radius:50%}.progress-line[_ngcontent-%COMP%]{width:4px;height:40px;background-color:#ccc;margin:0 19px}.action-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.stepper-class[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;cursor:pointer}.step.active[_ngcontent-%COMP%]{background-color:var(--global-white);opacity:100%}.sub-step.active[_ngcontent-%COMP%]{background-color:var(--global-white)}.opac.active[_ngcontent-%COMP%]{opacity:100%}.opac[_ngcontent-%COMP%]{opacity:50%}.progress-line.active[_ngcontent-%COMP%]{background-color:var(--global-white)}.white-col[_ngcontent-%COMP%]{color:var(--global-white)}.whites-col[_ngcontent-%COMP%]{font-size:12px;color:var(--global-white)}.spaces[_ngcontent-%COMP%]{margin:20px 10px 0 9px}.content-step[_ngcontent-%COMP%]{width:74%;line-height:70%}.form-header[_ngcontent-%COMP%]{padding-bottom:20px}.cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.gaps[_ngcontent-%COMP%]{padding:20px 10px 0 20px}.btn-saveNnext[_ngcontent-%COMP%]{background-color:#000;color:#fff}.close-btn[_ngcontent-%COMP%]{background:black;border-radius:4px;height:40px;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:14px;line-height:17px;color:#fff}.over[_ngcontent-%COMP%]{overflow:hidden}.sub-heders[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-size:14px;font-style:normal;font-weight:700;line-height:140%}.blocs[_ngcontent-%COMP%]{padding:15px}.pink-area[_ngcontent-%COMP%]{background:rgb(249,241,241)!important;height:40px;border-radius:5px;padding:9px 20px;border:none;outline:none;width:100%}.datIc[_ngcontent-%COMP%]{height:38.5px;position:absolute;right:16px;top:27.5px;background:rgb(249,241,241)!important;width:40px;display:flex;justify-content:center;align-items:center;border-radius:7px;cursor:pointer}.datIc2[_ngcontent-%COMP%]{height:38.5px;position:absolute;right:16px;top:28px;background:rgb(249,241,241)!important;width:40px;display:flex;justify-content:center;align-items:center;border-radius:7px;cursor:pointer}.pos[_ngcontent-%COMP%]{position:relative}.headers[_ngcontent-%COMP%]{color:var(--fonts-body, #606060);font-size:18px;font-style:normal;font-weight:600;line-height:140%}.blocs[_ngcontent-%COMP%]{padding:10px;border-radius:8px}.form-text-alert[_ngcontent-%COMP%]{color:var(--states-error, #d91919);font-family:var(--font-family);font-size:12px;font-style:normal;font-weight:700;line-height:140%}"]
                    })
                }
                return i
            })();
            var Eo = f(88168);

            function Io(i, c) {
                1 & i && (t.ynx(0), t.TgZ(1, "div", 8)(2, "div", 9)(3, "div", 10), t._uU(4, "No data found"), t.qZA()()(), t.BQk())
            }

            function Uo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 39), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.printApplication(e))
                    }), t._UZ(1, "img", 40), t.qZA()
                }
            }

            function qo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 41), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.reApply(e))
                    }), t._UZ(1, "img", 42), t.qZA()
                }
            }

            function zo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 43), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToPreferenceWindow(e))
                    }), t._UZ(1, "img", 44), t.qZA()
                }
            }

            function Bo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 45), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function Lo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 45), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function Yo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 45), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function Fo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 46), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.makePayment(e))
                    }), t._UZ(1, "img", 47), t.qZA()
                }
            }

            function $o(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 46), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.makePayment(e))
                    }), t._UZ(1, "img", 47), t.qZA()
                }
            }

            function Jo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 46), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.makePayment(e))
                    }), t._UZ(1, "img", 47), t.qZA()
                }
            }

            function jo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 48), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.checkResumeApp(null == e || null == e.examData ? null : e.examData.examCode, null == e ? null : e.id, null == e || null == e.notificationData ? null : e.notificationData.id, e))
                    }), t._uU(1, " Continue "), t.qZA()
                }
            }

            function Qo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 48), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.checkResumeApp(null == e || null == e.examData ? null : e.examData.examCode, null == e ? null : e.id, null == e || null == e.notificationData ? null : e.notificationData.id, e))
                    }), t._uU(1, " Continue "), t.qZA()
                }
            }

            function Ro(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 43), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToPreferenceWindow(e))
                    }), t._UZ(1, "img", 44), t.qZA()
                }
            }

            function Ho(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 49), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToAdmitCardScreen(e))
                    }), t.TgZ(1, "div", 50), t._UZ(2, "img", 51), t.qZA()()
                }
            }

            function Ko(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 52), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t.TgZ(1, "div", 50), t._UZ(2, "img", 53), t.qZA()()
                }
            }

            function Go(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 52), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t.TgZ(1, "div", 50), t._UZ(2, "img", 53), t.qZA()()
                }
            }

            function Vo(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 52), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t.TgZ(1, "div", 50), t._UZ(2, "img", 53), t.qZA()()
                }
            }

            function Wo(i, c) {
                1 & i && (t.TgZ(0, "p", 54), t._uU(1, " Last date to apply for the exam has passed. "), t.qZA())
            }

            function Xo(i, c) {
                1 & i && (t.TgZ(0, "p", 55), t._uU(1, " Last date to re apply for the exam has passed. "), t.qZA())
            }

            function ti(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "tr", 24)(1, "td", 25), t._uU(2), t.qZA(), t.TgZ(3, "td", 25), t._uU(4), t.qZA(), t.TgZ(5, "td", 25), t._uU(6), t.qZA(), t.TgZ(7, "td", 25), t._uU(8), t.qZA(), t.TgZ(9, "td", 25), t._uU(10), t.qZA(), t.TgZ(11, "td", 25), t._uU(12), t.qZA(), t.TgZ(13, "td", 25)(14, "div", 26)(15, "button", 27), t.NdJ("click", function() {
                        const a = t.CHM(n).$implicit,
                            d = t.oxw(4);
                        return t.KtG(d.prevToggle(a))
                    }), t._UZ(16, "img", 28), t.qZA(), t.YNc(17, Uo, 2, 0, "button", 29), t.YNc(18, qo, 2, 0, "button", 30), t.YNc(19, zo, 2, 0, "button", 31), t.YNc(20, Bo, 2, 0, "button", 32), t.ALo(21, "date"), t.YNc(22, Lo, 2, 0, "button", 32), t.ALo(23, "date"), t.YNc(24, Yo, 2, 0, "button", 32), t.ALo(25, "date"), t.YNc(26, Fo, 2, 0, "button", 33), t.YNc(27, $o, 2, 0, "button", 33), t.YNc(28, Jo, 2, 0, "button", 33), t.YNc(29, jo, 2, 0, "button", 34), t.YNc(30, Qo, 2, 0, "button", 34), t.YNc(31, Ro, 2, 0, "button", 31), t.YNc(32, Ho, 3, 0, "button", 35), t.YNc(33, Ko, 3, 0, "button", 36), t.YNc(34, Go, 3, 0, "button", 36), t.YNc(35, Vo, 3, 0, "button", 36), t.YNc(36, Wo, 2, 0, "p", 37), t.ALo(37, "date"), t.YNc(38, Xo, 2, 0, "p", 38), t.ALo(39, "date"), t.qZA()()()
                }
                if (2 & i) {
                    const n = c.$implicit,
                        o = c.index,
                        e = t.oxw(4);
                    t.xp6(2), t.hij(" ", null == n ? null : n.registrationNo, " "), t.xp6(2), t.hij(" ", (null == n ? null : n.name) || "-", " "), t.xp6(2), t.hij(" ", (null == n || null == n.examData ? null : n.examData.examName) || "-", " "), t.xp6(2), t.hij(" ", null == n || null == n.notificationData ? null : n.notificationData.examYear, " "), t.xp6(2), t.hij(" ", null == n ? null : n.numberOfAttempts, " "), t.xp6(2), t.hij(" ", null == n ? null : n.applicationStatus, " "), t.xp6(5), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n ? null : n.isDeclaration) && e.showPrintButton[o]), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n ? null : n.isDeclaration) && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate) && (null == n || null == n.notificationData ? null : n.notificationData.correctionStartDate) <= e.todayDate && "APPLICATION CANCELLED" != (null == n ? null : n.applicationStatus) && (null == n ? null : n.numberOfAttempts) < "3" && e.showReApply[o] && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isOptionPreferenceForm) && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && !(null != n && null != n.myApplicationData && n.myApplicationData.isAppPaymentDone) && 1 == (null == n ? null : n.numberOfAttempts) && t.xi3(21, 24, null == n || null == n.notificationData ? null : n.notificationData.lastDateForFee, "YYYY-MM-dd") >= e.todayDate && !e.dontShowAnyButton), t.xp6(2), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && !(null != n && null != n.myApplicationData && n.myApplicationData.isFirstCorrPaymentDone) && 2 == (null == n ? null : n.numberOfAttempts) && t.xi3(23, 27, null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate, "YYYY-MM-dd") >= e.todayDate && !e.dontShowAnyButton), t.xp6(2), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && !(null != n && null != n.myApplicationData && n.myApplicationData.isSecondCorrPaymentDone) && 3 == (null == n ? null : n.numberOfAttempts) && t.xi3(25, 30, null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate, "YYYY-MM-dd") >= e.todayDate && !e.dontShowAnyButton), t.xp6(2), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && !(null != n && null != n.myApplicationData && n.myApplicationData.isAppPaymentDone) && 1 == (null == n ? null : n.numberOfAttempts) && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.lastDateForFee) && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isCorrectionWindowFilled) && !(null != n && null != n.myApplicationData && n.myApplicationData.isFirstCorrPaymentDone) && 2 == (null == n ? null : n.numberOfAttempts) && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate) && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isCorrectionWindowFilled) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isFirstCorrPaymentDone) && !(null != n && null != n.myApplicationData && n.myApplicationData.isSecondCorrPaymentDone) && 3 == (null == n ? null : n.numberOfAttempts) && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate) && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", !(null != n && n.isDeclaration) && (null == n ? null : n.numberOfAttempts) > 1 && !e.dontShowAnyButton && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate)), t.xp6(1), t.Q6J("ngIf", !(null != n && n.isDeclaration) && 1 == (null == n ? null : n.numberOfAttempts) && !e.dontShowAnyButton && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.applicationEndDate)), t.xp6(1), t.Q6J("ngIf", null == n || null == n.myApplicationData ? null : n.myApplicationData.isOptionPreferenceForm), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n ? null : n.isDeclaration) && (null == n || null == n.notificationData ? null : n.notificationData.admitCardEndDate) >= e.todayDate && (null == n || null == n.notificationData ? null : n.notificationData.admitCardStartDate) <= e.todayDate && (null == n ? null : n.numberOfAttempts) < "3" && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && 1 == (null == n ? null : n.numberOfAttempts) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && "APPLICATION CANCELLED" != (null == n ? null : n.applicationStatus) && (null == n ? null : n.isDeclaration) && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyEndDate) >= e.todayDate && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyStartDate) <= e.todayDate && !e.dontShowAnyButton && e.showReApply[o]), t.xp6(1), t.Q6J("ngIf", 2 == (null == n ? null : n.numberOfAttempts) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isFirstCorrPaymentDone) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n ? null : n.isDeclaration) && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyEndDate) >= e.todayDate && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyStartDate) <= e.todayDate && "APPLICATION CANCELLED" != (null == n ? null : n.applicationStatus) && !e.dontShowAnyButton && e.showReApply[o]), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && 3 == (null == n ? null : n.numberOfAttempts) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isSecondCorrPaymentDone) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && "APPLICATION CANCELLED" != (null == n ? null : n.applicationStatus) && (null == n ? null : n.isDeclaration) && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyEndDate) >= e.todayDate && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyStartDate) <= e.todayDate && !e.dontShowAnyButton && e.showReApply[o]), t.xp6(1), t.Q6J("ngIf", !n.isDeclaration && 1 == n.numberOfAttempts && (n ? t.xi3(37, 33, n.notificationData.applicationEndDate, "YYYY-MM-dd") : "") < e.todayDate && !e.dontShowAnyButton), t.xp6(2), t.Q6J("ngIf", !n.isDeclaration && (2 == n.numberOfAttempts || 3 == n.numberOfAttempts) && (n ? t.xi3(39, 36, null == n.notificationData ? null : n.notificationData.correctionEndDate, "YYYY-MM-dd") : "") < e.todayDate && !e.dontShowAnyButton)
                }
            }

            function ni(i, c) {
                if (1 & i && (t.TgZ(0, "tbody", 22), t.YNc(1, ti, 40, 39, "tr", 23), t.qZA()), 2 & i) {
                    const n = t.oxw(2).$implicit,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", o.convertToArray(n.value))
                }
            }

            function ei(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 39), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.printApplication(e))
                    }), t._UZ(1, "img", 40), t.qZA()
                }
            }

            function oi(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 41), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.reApply(e))
                    }), t._UZ(1, "img", 42), t.qZA()
                }
            }

            function ii(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 43), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToPreferenceWindow(e))
                    }), t._UZ(1, "img", 44), t.qZA()
                }
            }

            function ai(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 45), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function ri(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 45), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function li(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 45), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.verifyPayment(e))
                    }), t._uU(1, " Verify Payment "), t.qZA()
                }
            }

            function ci(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 46), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.makePayment(e))
                    }), t._UZ(1, "img", 47), t.qZA()
                }
            }

            function si(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 46), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.makePayment(e))
                    }), t._UZ(1, "img", 47), t.qZA()
                }
            }

            function di(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 46), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.makePayment(e))
                    }), t._UZ(1, "img", 47), t.qZA()
                }
            }

            function pi(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 48), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.checkResumeApp(null == e || null == e.examData ? null : e.examData.examCode, null == e ? null : e.id, null == e || null == e.notificationData ? null : e.notificationData.id, e))
                    }), t._uU(1, " Continue "), t.qZA()
                }
            }

            function fi(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 48), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.checkResumeApp(null == e || null == e.examData ? null : e.examData.examCode, null == e ? null : e.id, null == e || null == e.notificationData ? null : e.notificationData.id, e))
                    }), t._uU(1, " Continue "), t.qZA()
                }
            }

            function ui(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 43), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToPreferenceWindow(e))
                    }), t._UZ(1, "img", 44), t.qZA()
                }
            }

            function gi(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 49), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToAdmitCardScreen(e))
                    }), t.TgZ(1, "div", 50), t._UZ(2, "img", 51), t.qZA()()
                }
            }

            function mi(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 52), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t.TgZ(1, "div", 50), t._UZ(2, "img", 53), t.qZA()()
                }
            }

            function _i(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 52), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t.TgZ(1, "div", 50), t._UZ(2, "img", 53), t.qZA()()
                }
            }

            function hi(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "button", 52), t.NdJ("click", function() {
                        t.CHM(n);
                        const e = t.oxw().$implicit,
                            a = t.oxw(4);
                        return t.KtG(a.navigateToChallengeScreen(e))
                    }), t.TgZ(1, "div", 50), t._UZ(2, "img", 53), t.qZA()()
                }
            }

            function xi(i, c) {
                1 & i && (t.TgZ(0, "p", 54), t._uU(1, " Last date to apply for the exam has passed. "), t.qZA())
            }

            function bi(i, c) {
                1 & i && (t.TgZ(0, "p", 55), t._uU(1, " Last date to re apply for the exam has passed. "), t.qZA())
            }

            function yi(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.TgZ(0, "tr", 24)(1, "td", 25), t._uU(2), t.qZA(), t.TgZ(3, "td", 25), t._uU(4), t.qZA(), t.TgZ(5, "td", 25), t._uU(6), t.qZA(), t.TgZ(7, "td", 25), t._uU(8), t.qZA(), t.TgZ(9, "td", 25), t._uU(10), t.qZA(), t.TgZ(11, "td", 25), t._uU(12), t.qZA(), t.TgZ(13, "td", 25)(14, "div", 26)(15, "button", 27), t.NdJ("click", function() {
                        const a = t.CHM(n).$implicit,
                            d = t.oxw(4);
                        return t.KtG(d.prevToggle(a))
                    }), t._UZ(16, "img", 28), t.qZA(), t.YNc(17, ei, 2, 0, "button", 29), t.YNc(18, oi, 2, 0, "button", 30), t.YNc(19, ii, 2, 0, "button", 31), t.YNc(20, ai, 2, 0, "button", 32), t.ALo(21, "date"), t.YNc(22, ri, 2, 0, "button", 32), t.ALo(23, "date"), t.YNc(24, li, 2, 0, "button", 32), t.ALo(25, "date"), t.YNc(26, ci, 2, 0, "button", 33), t.YNc(27, si, 2, 0, "button", 33), t.YNc(28, di, 2, 0, "button", 33), t.YNc(29, pi, 2, 0, "button", 34), t.YNc(30, fi, 2, 0, "button", 34), t.YNc(31, ui, 2, 0, "button", 31), t.YNc(32, gi, 3, 0, "button", 35), t.YNc(33, mi, 3, 0, "button", 36), t.YNc(34, _i, 3, 0, "button", 36), t.YNc(35, hi, 3, 0, "button", 36), t.YNc(36, xi, 2, 0, "p", 37), t.ALo(37, "date"), t.YNc(38, bi, 2, 0, "p", 38), t.ALo(39, "date"), t.qZA()()()
                }
                if (2 & i) {
                    const n = c.$implicit,
                        o = c.index,
                        e = t.oxw(4);
                    t.xp6(2), t.hij(" ", null == n ? null : n.registrationNo, " "), t.xp6(2), t.hij(" ", (null == n ? null : n.name) || "-", " "), t.xp6(2), t.hij(" ", (null == n || null == n.examData ? null : n.examData.examName) || "-", " "), t.xp6(2), t.hij(" ", null == n || null == n.notificationData ? null : n.notificationData.examYear, " "), t.xp6(2), t.hij(" ", null == n ? null : n.numberOfAttempts, " "), t.xp6(2), t.hij(" ", null == n ? null : n.applicationStatus, " "), t.xp6(5), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n ? null : n.isDeclaration) && e.showPrintButton[o]), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n ? null : n.isDeclaration) && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate) && (null == n || null == n.notificationData ? null : n.notificationData.correctionStartDate) <= e.todayDate && "APPLICATION CANCELLED" != (null == n ? null : n.applicationStatus) && (null == n ? null : n.numberOfAttempts) < "3" && e.showReApply[o] && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isOptionPreferenceForm) && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && !(null != n && null != n.myApplicationData && n.myApplicationData.isAppPaymentDone) && 1 == (null == n ? null : n.numberOfAttempts) && t.xi3(21, 24, null == n || null == n.notificationData ? null : n.notificationData.lastDateForFee, "YYYY-MM-dd") >= e.todayDate && !e.dontShowAnyButton), t.xp6(2), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && !(null != n && null != n.myApplicationData && n.myApplicationData.isFirstCorrPaymentDone) && 2 == (null == n ? null : n.numberOfAttempts) && t.xi3(23, 27, null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate, "YYYY-MM-dd") >= e.todayDate && !e.dontShowAnyButton), t.xp6(2), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && !(null != n && null != n.myApplicationData && n.myApplicationData.isSecondCorrPaymentDone) && 3 == (null == n ? null : n.numberOfAttempts) && t.xi3(25, 30, null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate, "YYYY-MM-dd") >= e.todayDate && !e.dontShowAnyButton), t.xp6(2), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && !(null != n && null != n.myApplicationData && n.myApplicationData.isAppPaymentDone) && 1 == (null == n ? null : n.numberOfAttempts) && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.lastDateForFee) && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isCorrectionWindowFilled) && !(null != n && null != n.myApplicationData && n.myApplicationData.isFirstCorrPaymentDone) && 2 == (null == n ? null : n.numberOfAttempts) && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate) && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n ? null : n.isDeclaration) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isCorrectionWindowFilled) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isFirstCorrPaymentDone) && !(null != n && null != n.myApplicationData && n.myApplicationData.isSecondCorrPaymentDone) && 3 == (null == n ? null : n.numberOfAttempts) && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate) && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", !(null != n && n.isDeclaration) && (null == n ? null : n.numberOfAttempts) > 1 && !e.dontShowAnyButton && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.correctionEndDate)), t.xp6(1), t.Q6J("ngIf", !(null != n && n.isDeclaration) && 1 == (null == n ? null : n.numberOfAttempts) && !e.dontShowAnyButton && e.checkDateComparison(null == n || null == n.notificationData ? null : n.notificationData.applicationEndDate)), t.xp6(1), t.Q6J("ngIf", null == n || null == n.myApplicationData ? null : n.myApplicationData.isOptionPreferenceForm), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n ? null : n.isDeclaration) && (null == n || null == n.notificationData ? null : n.notificationData.admitCardEndDate) >= e.todayDate && (null == n || null == n.notificationData ? null : n.notificationData.admitCardStartDate) <= e.todayDate && (null == n ? null : n.numberOfAttempts) < "3" && !e.dontShowAnyButton), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && 1 == (null == n ? null : n.numberOfAttempts) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && "APPLICATION CANCELLED" != (null == n ? null : n.applicationStatus) && (null == n ? null : n.isDeclaration) && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyEndDate) >= e.todayDate && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyStartDate) <= e.todayDate && !e.dontShowAnyButton && e.showReApply[o]), t.xp6(1), t.Q6J("ngIf", 2 == (null == n ? null : n.numberOfAttempts) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isFirstCorrPaymentDone) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && (null == n ? null : n.isDeclaration) && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyEndDate) >= e.todayDate && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyStartDate) <= e.todayDate && "APPLICATION CANCELLED" != (null == n ? null : n.applicationStatus) && !e.dontShowAnyButton && e.showReApply[o]), t.xp6(1), t.Q6J("ngIf", (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppFormSubmitted) && 3 == (null == n ? null : n.numberOfAttempts) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isSecondCorrPaymentDone) && (null == n || null == n.myApplicationData ? null : n.myApplicationData.isAppPaymentDone) && "APPLICATION CANCELLED" != (null == n ? null : n.applicationStatus) && (null == n ? null : n.isDeclaration) && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyEndDate) >= e.todayDate && (null == n || null == n.notificationData ? null : n.notificationData.answerKeyStartDate) <= e.todayDate && !e.dontShowAnyButton && e.showReApply[o]), t.xp6(1), t.Q6J("ngIf", !n.isDeclaration && 1 == n.numberOfAttempts && (n ? t.xi3(37, 33, n.notificationData.applicationEndDate, "YYYY-MM-dd") : "") < e.todayDate && !e.dontShowAnyButton), t.xp6(2), t.Q6J("ngIf", !n.isDeclaration && (2 == n.numberOfAttempts || 3 == n.numberOfAttempts) && (n ? t.xi3(39, 36, null == n.notificationData ? null : n.notificationData.correctionEndDate, "YYYY-MM-dd") : "") < e.todayDate && !e.dontShowAnyButton)
                }
            }

            function vi(i, c) {
                if (1 & i && (t.TgZ(0, "tbody", 22), t.YNc(1, yi, 40, 39, "tr", 23), t.qZA()), 2 & i) {
                    const n = t.oxw(2).$implicit,
                        o = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", o.convertToArray(n.value))
                }
            }

            function wi(i, c) {
                if (1 & i && (t.ynx(0), t.TgZ(1, "table", 17)(2, "thead", 18)(3, "tr", 19)(4, "th", 20), t._uU(5, "Registration No"), t.qZA(), t.TgZ(6, "th", 20), t._uU(7, "Name"), t.qZA(), t.TgZ(8, "th", 20), t._uU(9, "Exam Name"), t.qZA(), t.TgZ(10, "th", 20), t._uU(11, "Year"), t.qZA(), t.TgZ(12, "th", 20), t._uU(13, "No. Of Attempts"), t.qZA(), t.TgZ(14, "th", 20), t._uU(15, "Application Status"), t.qZA(), t.TgZ(16, "th", 20), t._uU(17, "Action"), t.qZA()()(), t.YNc(18, ni, 2, 1, "tbody", 21), t.YNc(19, vi, 2, 1, "tbody", 21), t.qZA(), t.BQk()), 2 & i) {
                    const n = t.oxw(2);
                    t.xp6(18), t.Q6J("ngIf", n.reliveExamList.indexOf(n.examCode) > -1 && (null == n.allowedRegistrationNumbers[n.examCode] ? null : n.allowedRegistrationNumbers[n.examCode].includes(n.registrationNo))), t.xp6(1), t.Q6J("ngIf", -1 == n.reliveExamList.indexOf(n.examCode))
                }
            }
            const Ci = function(i) {
                return {
                    "color-head": i
                }
            };

            function Pi(i, c) {
                if (1 & i) {
                    const n = t.EpF();
                    t.ynx(0), t.TgZ(1, "div", 8)(2, "div", 11)(3, "div", 12), t.NdJ("click", function() {
                        const a = t.CHM(n).index,
                            d = t.oxw();
                        return t.KtG(d.toggleVisibility(a))
                    }), t._UZ(4, "div", 13), t.TgZ(5, "div", 14), t._UZ(6, "img", 15), t.qZA()(), t.TgZ(7, "div", 16), t.YNc(8, wi, 20, 2, "ng-container", 6), t.qZA()()(), t.BQk()
                }
                if (2 & i) {
                    const n = c.$implicit,
                        o = c.index,
                        e = t.oxw();
                    t.xp6(2), t.Q6J("ngClass", t.VKq(4, Ci, e.accOpen[o])), t.xp6(2), t.Q6J("innerHTML", n.key, t.oJD), t.xp6(2), t.Q6J("src", e.isDataVisible[o] ? "assets/images/angle_up.svg" : "assets/images/angle_down.svg", t.LSH), t.xp6(2), t.Q6J("ngIf", e.isDataVisible[o])
                }
            }
            const Mi = function() {
                return ["examYear"]
            };
            let ut = (() => {
                class i {
                    constructor(n, o, e, a, d, u, b, y, A, S, k, O, G, V, W, Fi, $i) {
                        this.dialog = n, this.router = o, this.dashboardService = e, this.tokenService = a, this.cglService = d, this.rhqService = u, this.activeRoute = b, this.masterService = y, this.rhqApplicationService = A, this.route = S, this.admitCard = k, this.answerKey = O, this.jeService = G, this.paymentService = V, this.commonService = W, this.dialogService = Fi, this.subInspectorService = $i, this.myApplicationData = [], this.searchQueryModel = "", this.searchQuery = "", this.homeScreenVisible = !1, this.listOfSelectedFilteredItems = [], this.pagination = !0, this.accOpen = [], this.globalSearchParams = {
                            page: 1,
                            limit: 10,
                            searchQuery: "",
                            orderBy: "DESC",
                            hearingDate: null,
                            exams: [],
                            examYears: [],
                            status: [],
                            caseTypes: [],
                            regions: [],
                            courts: []
                        }, this.breadCrumbData = N.MN, this.showReApply = [], this.showPrintButton = [], this.dropdownData = [{
                            id: 1,
                            name: "display all forms"
                        }, {
                            id: 2,
                            name: "display correction window 1 forms"
                        }, {
                            id: 3,
                            name: "display correction window 2 forms"
                        }, {
                            id: 4,
                            name: "display original forms"
                        }], this.isDataVisible = [], this.dontShowAnyButton = !1, this.examYearsArr = [], this.reliveExamList = [], this.allowedRegistrationNumbers = [], this.page = 1, this.filterOpen = !1
                    }
                    ngOnInit() {
                        var n = this;
                        return (0, E.Z)(function*() {
                            "history" == n.activeRoute.snapshot.url[0].path.split("-").pop() && (n.dontShowAnyButton = !0), console.log("this.router.url ", n.router.url), n.router.events.subscribe(y => {
                                y instanceof g.m2 && console.log(y.url)
                            }), sessionStorage.removeItem("printData"), sessionStorage.removeItem("print");
                            let d = n.tokenService.getDecoded();
                            n.getRegion(), n.getHighestEducationalQualification(), d && (n.registrationNo = d.username, n.getMyApplicationByExamId());
                            const u = new Date;
                            let b = new Intl.DateTimeFormat("en-CA", {
                                timeZone: "Asia/Kolkata",
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit"
                            }).format(u);
                            n.todayDate = b, console.log(n.todayDate), [n.reliveExamList, n.allowedRegistrationNumbers] = yield n.dashboardService.setReLiveExams()
                        })()
                    }
                    getExamDetails() {
                        this.dashboardService.getExamDetailsByNotificationId(this.notificationId).subscribe(n => {
                            this.currentExamDetails = n.data, this.key = n ? .data.examCode.toLowerCase() + n ? .data.examYear, this.examCode = n ? .data.examCode
                        })
                    }
                    onChange(n) {
                        this.notificationId = n.notificationId, this.getMyApplicationList()
                    }
                    getMyApplicationByExamId() {
                        this.registrationNo && this.dashboardService.getMyApplicationByExamId(this.activeRoute.snapshot.params.notificationId, this.registrationNo).subscribe(o => {
                            "200" === o.statusCode && o.data.map(a => {
                                0 == this.examYearsArr.filter(d => d.notificationId === a.notificationId).length && this.examYearsArr.push(a)
                            })
                        })
                    }
                    setPage(n) {}
                    onDropdownChange(n) {
                        console.log(n)
                    }
                    getStatusClass(n) {
                        switch (n) {
                            case "Provisionally Accepted":
                                return "provisionally-accepted-bg";
                            case "Accepted":
                                return "accepted-bg";
                            case "Rejected":
                                return "rejected-bg";
                            default:
                                return "default-bg"
                        }
                    }
                    getStatusImage(n) {
                        switch (n) {
                            case "Provisionally Accepted":
                                return "assets/image/provisionallyAccepted.svg";
                            case "Accepted":
                                return "assets/image/accepted.svg";
                            case "Rejected":
                                return "assets/image/rejected.svg";
                            default:
                                return "assets/image/pending-icon.webp"
                        }
                    }
                    pageChange(n) {
                        this.query = { ...this.query,
                            page: n
                        }
                    }
                    getStatusColorClass(n) {
                        switch (n) {
                            case "Provisionally Accepted":
                                return "provisionally-accepted-color";
                            case "Accepted":
                                return "accepted-color";
                            case "Rejected":
                                return "rejected-color";
                            default:
                                return "default-color"
                        }
                    }
                    getItemValue(n) {
                        return n.examName ? n.examName : n.regionName ? n.regionName : n.courtName ? n.courtName : n.caseType ? n.caseType : n.year ? n.year : n.displayValue ? n.displayValue : "item"
                    }
                    orderBy(n) {}
                    getMyApplicationData() {
                        this.registrationNo && this.dashboardService.getMyApplications(this.registrationNo).subscribe(n => {
                            "200" === n.statusCode && (this.allApplicationData = n.data, this.getMyApplicationList())
                        })
                    }
                    navigateToAdmitCardScreen(n) {
                        this.elements = n, this.admitCard.ExamsData = this.elements, sessionStorage.setItem("examData", JSON.stringify(this.elements)), this.route.navigateByUrl("admit-card")
                    }
                    navigateToChallengeScreen(n) {
                        this.answerKeyElements = {
                            examId: n.myApplicationData.examId,
                            examName: n.examData.examName,
                            examCode: n.examData.examCode,
                            applicationId: n.id,
                            notificationId: n.myApplicationData.notificationId,
                            examYear: n.myApplicationData.examYear
                        }, sessionStorage.setItem("examDataForAnswerKey", JSON.stringify(this.answerKeyElements)), this.homeScreenVisible = !0, console.log("this.homeScreenVisible---------\x3e>>>", this.homeScreenVisible), this.dialog.open(it.H, {
                            width: "70%",
                            minHeight: "calc(100vh - 90px)",
                            height: "auto",
                            exitAnimationDuration: 0,
                            enterAnimationDuration: 0,
                            data: {
                                result: this.answerKeyElements
                            }
                        })
                    }
                    groupByKey(n) {
                        return (n = n.sort((o, e) => o ? .numberOfAttempts - e ? .numberOfAttempts)).reduce((o, e) => {
                            let d, a = this.regions.find(u => u.id == e ? .postRegion);
                            return e.postRegionInitial = a ? .initials || "-", d = "RHQ" == e.examData.examCode ? `<div class="basicNapprovalDetails">Post Code : ${e?.postCode||"-"}</div>\n      <div class="subdet">\n        <span>Post Name - <b>${e?.postName||"-"}</b></span>\n        <span class="p-1"> . </span>\n        <span>Post Level - <b>${e?.postLevel||"-"}</b></span>\n        <span class="p-1"> . </span>\n        <span>Region - <b>${a?.initials||"-"}</b> </span>\n      </div>` : `<div class="basicNapprovalDetails">Exam Name : ${e?.examData?.examName} , ${e?.myApplicationData?.examYear}</div>`, Object.assign(o, {
                                [d || "-"]: (o[d] || []).concat(e)
                            })
                        }, {})
                    }
                    getMyApplicationList() {
                        this.registrationNo && this.dashboardService.getAllApplicationsByExamId(this.registrationNo, this.notificationId).subscribe(n => {
                            "200" === n.statusCode ? (this.myApplicationData = n.data, this.applicationDetails = n ? .data, this.myApplicationData.map((o, e) => {
                                o.applicationStatus = o["status" + o.examData.examCode.toLowerCase() + o.notificationData.examYear] ? .displayValue
                            }), this.myApplicationData = this.groupByKey(this.myApplicationData)) : this.myApplicationData = []
                        }, n => {
                            console.log("----------------\x3e", n ? .error ? .message), this.dialog.open(x.I, {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: n ? .error ? .message
                                }
                            }).afterClosed().subscribe(e => {
                                this.router.navigate(["/dashboard"])
                            })
                        })
                    }
                    reApply(n) {
                        const e = n.examData.examCode.toLowerCase();
                        "capf" == e ? this.router.navigate([`/si-application-form/si-personal-details/${n.notificationData.id}/${n.id}`]) : "je" == e ? this.router.navigate([`/je-application-form/personal-details/${n.notificationData.id}/${n.id}`]) : "rhq" == e || this.router.navigate([`/${e}-application-form/personal-details/${n.notificationData.id}/${n.id}/true`])
                    }
                    toggleVisibility(n) {
                        this.isDataVisible[n] = !this.isDataVisible[n], this.accOpen[n] = !this.accOpen[n]
                    }
                    getRegion() {
                        this.masterService.getRegion().subscribe(n => {
                            this.regions = n.data
                        })
                    }
                    checkResumeApp(n, o, e, a) {
                        let d = a ? .examData ? .examCode.toLowerCase();
                        if ("capf" === d) this.subInspectorService.resumeAppStatus(o, e).subscribe(u => {
                            "200" === u.statusCode && this.router.navigate([`/si-application-form/si-personal-details/${e}/${a.previousID}`])
                        });
                        else if ("je" === d) {
                            this.applicationDetails.find(y => Number(a ? .numberOfAttempts) - Number(y ? .numberOfAttempts) == 1);
                            let b = a ? .myApplicationData ? .notificationId;
                            this.jeService.resumeAppStatus(o, b).subscribe(y => {
                                console.log(y.data), "200" === y.statusCode && this.router.navigate([`/je-application-form/personal-details/${e}`])
                            })
                        } else "rhq" === d ? this.rhqService.resumeAppStatus(o, e).subscribe(u => {
                            "200" === u.statusCode && (this.rhqExamData = u.data, this.rhqHighQualification = this.rhqExamData.docs ? .tenthEducationBoardId, this.rhqExServiceMen = this.rhqExamData.docs.lengthOfService, this.rhqExamCenterPreference = this.rhqExamData.docs.examCentrePreferenceId1, console.log("photoIDphotoIDphotoID", !this.rhqExamData.docs.photoId && !this.rhqExamData.docs.signId), this.router.navigate([`/rhq-application-form/personal-details/${e}/${o}`]))
                        }) : this.router.navigate([`/${d}-application-form/personal-details/${e}/${o}/true`])
                    }
                    convertToArray(n) {
                        let o;
                        return o = Array.from(n), o.forEach((e, a) => {
                            e.myApplicationData.isAppPaymentDone && (this.showReApply[a] = !1, this.showPrintButton[a] = !1, 1 == parseInt(e.numberOfAttempts) && e.myApplicationData ? .isAppFormSubmitted && e.myApplicationData ? .isAppPaymentDone && (this.showPrintButton[a] = !0), 2 == parseInt(e.numberOfAttempts) && e.myApplicationData.isCorrectionWindowFilled && e.myApplicationData.isFirstCorrPaymentDone && (this.showPrintButton[a] = !0), 3 == parseInt(e.numberOfAttempts) && e.myApplicationData.isSecondCorrectionWindowFilled && e.myApplicationData.isSecondCorrPaymentDone && (this.showPrintButton[a] = !0), 1 == parseInt(e.numberOfAttempts) && e.myApplicationData ? .isAppFormSubmitted && e.myApplicationData ? .isAppPaymentDone && 1 === o.length && (this.showReApply[a] = !0), 2 == parseInt(e.numberOfAttempts) && e.myApplicationData.isCorrectionWindowFilled && e.myApplicationData.isFirstCorrPaymentDone && 2 === o.length && (this.showReApply[a] = !0), 3 == parseInt(e.numberOfAttempts) && e.myApplicationData.isSecondCorrectionWindowFilled && e.myApplicationData.isSecondCorrPaymentDone && 3 === o.length && (this.showReApply[a] = !0))
                        }), o
                    }
                    getRegionName(n, o) {
                        let e = this.regions.find(a => a.id == n);
                        return o.postDetailsRHQ[0].postRegionInitial = e ? .initials || "", e ? .initials || ""
                    }
                    getPostName(n) {
                        return this.HighestEducationalQualificationData.find(e => e.id = n) ? .levelOfEducation || ""
                    }
                    getHighestEducationalQualification() {
                        this.rhqApplicationService.getHighestEduQualification().subscribe(n => {
                            this.HighestEducationalQualificationData = n.data
                        })
                    }
                    prevToggle(n) {
                        n.examName = n ? .examData ? .examName, n.examCode = n ? .examData ? .examCode, n.examYear = n ? .myApplicationData ? .examYear, 1 == n ? .numberOfAttempts && (n.examFee = n ? .notificationData ? .fee), 2 == n ? .numberOfAttempts && (n.examFee = n ? .notificationData ? .cwfee1), 3 == n ? .numberOfAttempts && (n.examFee = n ? .notificationData ? .cwfee2), n.applicationStatus = n ? .applicationStatus, this.dialog.open(Q, {
                            enterAnimationDuration: "0ms",
                            exitAnimationDuration: "0ms",
                            data: {
                                result: n
                            }
                        })
                    }
                    navigateToPreferenceWindow(n) {
                        let a, d, o = n.myApplicationData.examId,
                            e = n.myApplicationData.examYear;
                        this.dashboardService.getAppExamDetail({
                            examId: o,
                            examYear: e,
                            registrationNo: this.registrationNo
                        }).subscribe(b => {
                            a = b ? .data, console.log("badRequest", a), a && (d = {
                                notificationId: a ? .examModel ? .notificationId,
                                examId: o,
                                examYear: e,
                                gender: a ? .genderData ? .genderType,
                                isPwBD: a ? .examApplicationDetails ? .isPwbd,
                                regNumber: this.registrationNo,
                                name: a ? .examApplicationDetails ? .name,
                                newName: a ? .examApplicationDetails ? .newName,
                                rollNum: a ? .examApplicationDetails ? .applicationRollNum
                            }, this.dashboardService.getPreferenceData = d), this.router.navigate(["dashboard/option-cum-preference"])
                        })
                    }
                    verifyPayment(n) {
                        this.rhqApplicationService.verifyPayments({
                            transactionNo: n ? .transactionDetails ? .transactionNo ? n ? .transactionDetails ? .transactionNo : n.myApplicationData ? .transactionNo,
                            myApplicationId: n ? .myApplicationId,
                            applicationId: n ? .id,
                            examCode: n ? .examData ? .examCode
                        }).subscribe(a => {
                            "200" == a.statusCode ? window.location.reload() : this.dialog.open(x.I, "203" == a.statusCode && "02" == a.data ? .code ? {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: a.data ? .message
                                }
                            } : "203" == a.statusCode ? {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: "string" === a.error ? a.error : "Payment not found. Please make payment"
                                }
                            } : {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: "Payment is still pending, Please verify after some time"
                                }
                            })
                        })
                    }
                    makePayment(n) {
                        this.rhqApplicationService.checkForApplicationPayments(n.id, this.notificationId).subscribe(o => {
                            if ("200" == o.statusCode)
                                if ("01" == o.data.code || "02" == o.data.code) this.dialog.open(x.I, {
                                    width: "380px",
                                    minHeight: "360px",
                                    height: "360px",
                                    data: {
                                        msgType: "Error",
                                        message: o.data.message
                                    }
                                });
                                else {
                                    let e = [];
                                    e.push({
                                        numberOfAttempts: n.numberOfAttempts
                                    }), this.dialog.open(tt.y, {
                                        width: "70%",
                                        minHeight: "calc(100vh - 90px)",
                                        height: "auto",
                                        exitAnimationDuration: 0,
                                        enterAnimationDuration: 0,
                                        data: {
                                            result: {
                                                type: "fee",
                                                doc: {
                                                    examId: n.myApplicationData.examId,
                                                    registrationNum: n.myApplicationData.registrationNo,
                                                    applicationId: n.id,
                                                    notificationId: n.myApplicationData.notificationId,
                                                    examYear: n.myApplicationData.examYear
                                                },
                                                examData: {
                                                    examCode: n.examData.examCode
                                                },
                                                associatedApplications: e,
                                                liveExamData: n.notificationData
                                            }
                                        }
                                    })
                                }
                            else this.dialog.open(x.I, {
                                width: "380px",
                                minHeight: "360px",
                                height: "360px",
                                data: {
                                    msgType: "Error",
                                    message: "Something went wrong."
                                }
                            })
                        })
                    }
                    printApplication(n) {
                        var o = this;
                        return (0, E.Z)(function*() {
                            const e = n ? .examData ? .examCode.toLowerCase();
                            o.route.navigate("capf" == e ? [`/si-application-form/si-print-application/${n.id}/${n.notificationData.id}`] : "mtsc" == e ? [`/mts-civilian-application-form/mts-civilian-print-application/${n.id}/${n.notificationData.id}`] : "rhq" == e ? [`/rhq-application-form/print-application/${n.id}/${n.notificationData.id}`] : "je" == e ? [`/je-application-form/print-application/${n.id}/${n.notificationData.id}`] : [`/${e}-application-form/print-application/${n.notificationData.id}/${n.id}`])
                        })()
                    }
                    checkDateComparison(n) {
                        return !(new Date((new Date).toLocaleString("en-US", {
                            timeZone: "Asia/Kolkata"
                        })) > this.convertDate(n))
                    }
                    convertDate(n) {
                        const o = new Date(n);
                        return new Date(o.toLocaleString("en-US", {
                            timeZone: "Asia/Kolkata"
                        }))
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)(t.Y36(s.uw), t.Y36(g.F0), t.Y36(p.s), t.Y36(_.i), t.Y36(X.m), t.Y36(z.N), t.Y36(g.gz), t.Y36(R.m), t.Y36(z.N), t.Y36(g.F0), t.Y36(rt), t.Y36(lt.t), t.Y36(at.L), t.Y36(Eo.t), t.Y36(m.v), t.Y36(ct.x), t.Y36(st.w))
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-application-listing"]
                        ],
                        decls: 11,
                        vars: 13,
                        consts: [
                            [1, "container"],
                            [3, "breadCrumb"],
                            [1, "main-cont"],
                            [1, "row"],
                            [1, "col-sm-6"],
                            ["label", "Select year:", 3, "showRequired", "showSearch", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                            [4, "ngIf"],
                            [4, "ngFor", "ngForOf"],
                            [1, "acc-cont"],
                            [1, "basicDetails"],
                            [1, "head-detailss"],
                            [1, "basicDetails", 3, "ngClass"],
                            [1, "head-detailss", 3, "click"],
                            [1, "left-side-de", 3, "innerHTML"],
                            [1, "angleButton"],
                            ["alt", "arrow", 3, "src"],
                            [1, "table-div"],
                            ["aria-label", "", 1, "vacancy-table", "mt20"],
                            [1, "table-header"],
                            [1, "table-row"],
                            [1, "table-header-cell"],
                            ["class", "table-body", 4, "ngIf"],
                            [1, "table-body"],
                            ["class", "table-data-row cursor", 4, "ngFor", "ngForOf"],
                            [1, "table-data-row", "cursor"],
                            [1, "table-data-cell"],
                            [1, "side-btn"],
                            ["title", "Preview Applications", 1, "trans-back", "m0", 3, "click"],
                            ["alt", "icon", "src", "assets/images/eyeIcon.svg", "height", "10", 1, "img-class", "ex-gapps"],
                            ["class", "trans-back", "title", "Print Applications", 3, "click", 4, "ngIf"],
                            ["class", "trans-back", "title", "Re Apply Applications", 3, "click", 4, "ngIf"],
                            ["class", "trans-back", "style", "padding: 0", 3, "click", 4, "ngIf"],
                            ["class", "save-btn", "title", "Verify Payment", 3, "click", 4, "ngIf"],
                            ["class", "trans-back", "title", "Payment", 3, "click", 4, "ngIf"],
                            ["class", "save-btn less-btn", 3, "click", 4, "ngIf"],
                            ["class", "trans-back", "title", "Download Document", 3, "click", 4, "ngIf"],
                            ["class", "trans-back", "title", "Answer Key Challange", 3, "click", 4, "ngIf"],
                            ["style", "color: red; margin: 0px", 4, "ngIf"],
                            ["style", "color: red", 4, "ngIf"],
                            ["title", "Print Applications", 1, "trans-back", 3, "click"],
                            ["alt", "icon", "src", "assets/images/print.svg", "height", "10", 1, "img-class", "ex-gapps", "m0"],
                            ["title", "Re Apply Applications", 1, "trans-back", 3, "click"],
                            ["alt", "icon", "src", "assets/image/reApply.svg", "height", "10", 1, "img-class", "ex-gapps", "m0"],
                            [1, "trans-back", 2, "padding", "0", 3, "click"],
                            ["alt", "icon", "src", "assets/image/select-pref.svg", "height", "10", 1, "img-class", "ex-gapps", "m0"],
                            ["title", "Verify Payment", 1, "save-btn", 3, "click"],
                            ["title", "Payment", 1, "trans-back", 3, "click"],
                            ["alt", "icon", "src", "assets/image/payments.svg", "height", "10", 1, "img-class", "ex-gapps", "m0"],
                            [1, "save-btn", "less-btn", 3, "click"],
                            ["title", "Download Document", 1, "trans-back", 3, "click"],
                            [1, "img-class", "ex-gapps", "m0"],
                            ["alt", "icon", "src", "assets/image/download-document.png", "height", "16"],
                            ["title", "Answer Key Challange", 1, "trans-back", 3, "click"],
                            ["alt", "icon", "src", "assets/image/answer-key-challange.svg", "height", "17"],
                            [2, "color", "red", "margin", "0px"],
                            [2, "color", "red"]
                        ],
                        template: function(o, e) {
                            1 & o && (t.TgZ(0, "div", 0), t._UZ(1, "app-bread-crumb", 1), t.TgZ(2, "div", 2), t.ynx(3), t.TgZ(4, "div", 3)(5, "div", 4)(6, "app-dropdown", 5), t.NdJ("selectionChange", function(d) {
                                return e.onChange(d)
                            }), t.qZA()()(), t.BQk(), t.YNc(7, Io, 5, 0, "ng-container", 6), t.YNc(8, Pi, 9, 6, "ng-container", 7), t.ALo(9, "keyvalue"), t.qZA()(), t.GkF(10)), 2 & o && (t.xp6(1), t.Q6J("breadCrumb", e.breadCrumbData), t.xp6(5), t.Q6J("showRequired", "true")("showSearch", !1)("searchPlaceholder", "Search options...")("options", e.examYearsArr)("selectedOption", e.selectedId)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", t.DdM(12, Mi)), t.xp6(1), t.Q6J("ngIf", 0 == e.myApplicationData.length), t.xp6(1), t.Q6J("ngForOf", t.lcZ(9, 10, e.myApplicationData)))
                        },
                        dependencies: [l.mk, l.sg, l.O5, pt.J, D.N, l.uU, l.Nd],
                        styles: [".less-btn{padding:7px!important;margin:2px!important;font-size:10px!important}.head-detailss{width:100%;flex-shrink:0;border-radius:6px;display:flex;justify-content:space-between;align-items:center}.basicNapprovalDetails{color:#1e1e1e;font-size:18px;font-style:normal;font-weight:700;line-height:140%;width:90%;display:flex;justify-content:space-between}.angleButton{width:24px;height:24px;margin-right:20px}.basicDetails{border:1px solid var(--global-border);border-radius:8px;padding:20px;background-color:var(--global-white);cursor:pointer}.basicDetails:hover{background-color:#f9f1f1}.dot{border-radius:50%!important;background:#606060;width:2px;height:2px;display:inline-block;padding:2px;margin:0 5px}.subdet{display:flex;justify-content:flex-start;align-items:center}.main-cont{display:flex;flex-direction:column;gap:20px;padding:20px 0}.left-side-de{width:100%;display:flex;flex-direction:column}.ex-gapps{padding:5px}.side-btn{display:flex;align-items:center}.color-head{background-color:#f9f1f1}.trans-back{margin:0}.img-class:hover .image-description{opacity:1}@media (max-width: 994px){.vacancy-table{display:inline-block;overflow:auto}}\n"],
                        encapsulation: 2
                    })
                }
                return i
            })();
            var Ai = f(68479),
                Si = f(28221);

            function Oi(i, c) {
                if (1 & i && (t.TgZ(0, "div", 3), t._uU(1), t.qZA()), 2 & i) {
                    const n = t.oxw(2);
                    t.xp6(1), t.hij(" ", n.msg, " ")
                }
            }

            function Ni(i, c) {
                if (1 & i && (t.TgZ(0, "div", 1), t.YNc(1, Oi, 2, 1, "div", 2), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("ngIf", (null == n.control ? null : n.control.hasError("required")) || (null == n.control ? null : n.control.invalid))
                }
            }
            let Zi = (() => {
                class i {
                    constructor() {
                        this.msg = "Field is required."
                    }
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)
                    };
                    static# n = this.\u0275cmp = t.Xpm({
                        type: i,
                        selectors: [
                            ["app-validation-msg"]
                        ],
                        inputs: {
                            control: "control",
                            submitted: "submitted",
                            msg: "msg"
                        },
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["class", "error-msg", 4, "ngIf"],
                            [1, "error-msg"],
                            ["class", "text-danger", 4, "ngIf"],
                            [1, "text-danger"]
                        ],
                        template: function(o, e) {
                            1 & o && t.YNc(0, Ni, 2, 1, "div", 0), 2 & o && t.Q6J("ngIf", (null == e.control ? null : e.control.invalid) && e.submitted)
                        },
                        dependencies: [l.O5],
                        styles: [".error-msg[_ngcontent-%COMP%]{color:red}"]
                    })
                }
                return i
            })();

            function ki(i, c) {
                if (1 & i && (t.ynx(0), t.TgZ(1, "div", 18)(2, "div", 19)(3, "div", 20), t._UZ(4, "img", 21), t.TgZ(5, "p", 22), t._uU(6), t.qZA()()()(), t.BQk()), 2 & i) {
                    const n = t.oxw(2);
                    t.xp6(6), t.Oqu(n.errorMessage)
                }
            }

            function Di(i, c) {
                if (1 & i && (t.TgZ(0, "div", 2), t.YNc(1, ki, 7, 1, "ng-container", 17), t.qZA()), 2 & i) {
                    const n = t.oxw();
                    t.xp6(1), t.Q6J("ngIf", n.errorMessage)
                }
            }
            const Ti = function() {
                    return ["examName"]
                },
                Ei = function() {
                    return ["year"]
                },
                Ii = [{
                    path: "",
                    component: ke
                }, {
                    path: "exams-app",
                    component: no
                }, {
                    path: "app-form",
                    component: eo
                }, {
                    path: "option-cum-preference/:notificationId/:examId/:examYear/:examCode",
                    component: go
                }, {
                    path: "change-password",
                    component: So
                }, {
                    path: "change-security-questions",
                    component: To
                }, {
                    path: "my-applications/:notificationId",
                    component: ut
                }, {
                    path: "my-applications-history/:notificationId",
                    component: ut
                }, {
                    path: "upload-documents",
                    loadChildren: () => Promise.all([f.e(592), f.e(413)]).then(f.bind(f, 96413)).then(i => i.UploadDocumentsModule)
                }, {
                    path: "check-result",
                    component: (() => {
                        class i {
                            constructor(n, o, e, a, d, u, b) {
                                this.dashboardService = n, this.dialog = o, this.route = e, this.commonService = a, this.commonDataService = d, this.fb = u, this.dropdown = b, this.showRequired = "true", this.exmas = [], this.examYears = [], this.breadCrumbData = N.Db, this.isEventRequired = !1, this.exams = [], this.submitted = !1
                            }
                            ngOnInit() {
                                this.resultForm = this.fb.group({
                                    examCode: ["", r.kI.required],
                                    examYear: ["", r.kI.required],
                                    examId: [""]
                                }), this.exams = this.commonDataService.getExams(), this.examYears = this.commonService.getYears(5)
                            }
                            getExamNamesAndYears() {
                                this.dashboardService.getExamNamesAndYears().subscribe(n => {
                                    const e = [];
                                    n.data.map(a => {
                                        e.push(a.examYear), this.examYears.push({
                                            examYear: a.examYear
                                        }), this.exmas.push(a)
                                    }), this.examYears = this.examYears.filter((a, d) => !e.includes(a.examYear, d + 1))
                                })
                            }
                            onExamChange(n) {
                                this.resultForm.patchValue({
                                    examCode: n ? .examCode
                                }), this.resultForm.patchValue({
                                    examId: n ? .id
                                })
                            }
                            onExamYearChange(n) {
                                this.resultForm.patchValue({
                                    examYear: n ? .year
                                })
                            }
                            checkResult() {
                                this.submitted = !0, !this.resultForm.invalid && this.dashboardService.getApplicationDataByExamYear(this.resultForm.value).subscribe({
                                    next: n => {
                                        if ("200" == n.statusCode) {
                                            const {
                                                applicationId: o,
                                                notificationId: e
                                            } = n.data;
                                            this.route.navigate([`/marks/details/${e}/${o}`])
                                        } else this.submitted = !1, this.errorMessage = n.error
                                    },
                                    error: n => {
                                        this.submitted = !1, this.dialog.open(x.I, {
                                            width: "380px",
                                            minHeight: "360px",
                                            height: "360px",
                                            data: {
                                                msgType: "Error",
                                                message: "Internal server error."
                                            }
                                        })
                                    }
                                })
                            }
                            reset() {
                                this.errorMessage = "", this.selectedExam = void 0, this.selectedExamYear = void 0, this.submitted = !1, this.dropdown.triggerReset(), this.resultForm.reset()
                            }
                            static# t = this.\u0275fac = function(o) {
                                return new(o || i)(t.Y36(p.s), t.Y36(s.uw), t.Y36(g.F0), t.Y36(m.v), t.Y36(Ai.I), t.Y36(r.qu), t.Y36(dt.P))
                            };
                            static# n = this.\u0275cmp = t.Xpm({
                                type: i,
                                selectors: [
                                    ["app-result"]
                                ],
                                decls: 22,
                                vars: 24,
                                consts: [
                                    [1, "container"],
                                    [3, "breadCrumb", "isEventRequired"],
                                    [1, "row"],
                                    [1, "col-lg-12"],
                                    [1, "note-section"],
                                    [3, "formGroup"],
                                    [1, "row", "p-2", "mb-20"],
                                    [1, "col-lg-8"],
                                    [1, "col-lg-6"],
                                    ["label", "Examination Name", 3, "showSearch", "showRequired", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                                    ["msg", "Examination name is required.", 3, "control", "submitted"],
                                    ["label", "Examination Year", 3, "showSearch", "showRequired", "searchPlaceholder", "options", "selectedOption", "dropdownClass", "displayNameKeys", "selectionChange"],
                                    ["msg", "Examination year is required.", 3, "control", "submitted"],
                                    [1, "col-lg-4"],
                                    [1, "btn-section"],
                                    ["type", "submit", 1, "save-btn", "mt-btn", 3, "click"],
                                    ["class", "row", 4, "ngIf"],
                                    [4, "ngIf"],
                                    [1, "row", "mt30", "pb20"],
                                    [1, "center-alignn"],
                                    [1, "exams"],
                                    ["src", "assets/image/No-data2.svg", "height", "150"],
                                    [1, "mt10"]
                                ],
                                template: function(o, e) {
                                    1 & o && (t.TgZ(0, "div", 0), t._UZ(1, "app-bread-crumb", 1), t.TgZ(2, "div", 2)(3, "div", 3), t._UZ(4, "div", 4), t.qZA()(), t.TgZ(5, "form", 5)(6, "div", 6)(7, "div", 7)(8, "div", 2)(9, "div", 8)(10, "app-dropdown-new", 9), t.NdJ("selectionChange", function(d) {
                                        return e.onExamChange(d)
                                    }), t.qZA(), t._UZ(11, "app-validation-msg", 10), t.qZA(), t.TgZ(12, "div", 8)(13, "app-dropdown-new", 11), t.NdJ("selectionChange", function(d) {
                                        return e.onExamYearChange(d)
                                    }), t.qZA(), t._UZ(14, "app-validation-msg", 12), t.qZA()()(), t.TgZ(15, "div", 13)(16, "div", 14)(17, "button", 15), t.NdJ("click", function() {
                                        return e.checkResult()
                                    }), t._uU(18, " View Marks "), t.qZA(), t.TgZ(19, "button", 15), t.NdJ("click", function() {
                                        return e.reset()
                                    }), t._uU(20, " Reset "), t.qZA()()()()(), t.YNc(21, Di, 2, 1, "div", 16), t.qZA()), 2 & o && (t.xp6(1), t.Q6J("breadCrumb", e.breadCrumbData)("isEventRequired", e.isEventRequired), t.xp6(4), t.Q6J("formGroup", e.resultForm), t.xp6(5), t.Q6J("showSearch", !1)("showRequired", e.showRequired)("searchPlaceholder", "Search options...")("options", e.exams)("selectedOption", e.selectedExam)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", t.DdM(22, Ti)), t.xp6(1), t.Q6J("control", e.resultForm.get("examCode"))("submitted", e.submitted), t.xp6(2), t.Q6J("showSearch", !1)("showRequired", e.showRequired)("searchPlaceholder", "Search options...")("options", e.examYears)("selectedOption", e.selectedExamYear)("dropdownClass", "custom-dropdown-css-class")("displayNameKeys", t.DdM(23, Ei)), t.xp6(1), t.Q6J("control", e.resultForm.get("examYear"))("submitted", e.submitted), t.xp6(7), t.Q6J("ngIf", e.errorMessage))
                                },
                                dependencies: [l.O5, D.N, Si.J, Zi, r._Y, r.JL, r.sg],
                                styles: [".mb-20[_ngcontent-%COMP%]{margin-bottom:20px}.mt-btn[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:0}.exams[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.center-alignn[_ngcontent-%COMP%]{display:flex;justify-content:center}.status-text[_ngcontent-%COMP%]{font-size:12px!important;margin:5px!important;font-size:12px}.side-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media (max-width: 767.98px){.status-text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:#8e433e;margin:5px;text-align:center;display:flex;justify-content:center;background-color:transparent;border:none}}@media (max-width: 575.98px){h3[_ngcontent-%COMP%]{font-size:14px!important;margin-bottom:5px!important}.small-font[_ngcontent-%COMP%]{font-size:10px!important}}.btn-section[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}"]
                            })
                        }
                        return i
                    })()
                }];
            let Ui = (() => {
                class i {
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)
                    };
                    static# n = this.\u0275mod = t.oAB({
                        type: i
                    });
                    static# e = this.\u0275inj = t.cJS({
                        imports: [g.Bz.forChild(Ii), g.Bz]
                    })
                }
                return i
            })();
            var qi = f(59721),
                zi = f(97392),
                Bi = f(4634),
                Li = f(7155);
            let Yi = (() => {
                class i {
                    static# t = this.\u0275fac = function(o) {
                        return new(o || i)
                    };
                    static# n = this.\u0275mod = t.oAB({
                        type: i
                    });
                    static# e = this.\u0275inj = t.cJS({
                        providers: [l.uU],
                        imports: [l.ez, Ui, s.Is, H.XD, qi.I, r.u5, r.UX, zi.Ps, Bi.AnswerKeyChallengeModule, Li.p0, L.F5, I.JF]
                    })
                }
                return i
            })()
        },
        45676: (T, M, f) => {
            f.d(M, {
                w: () => t
            });
            var l = f(92340),
                g = f(94650),
                v = f(80529);
            let t = (() => {
                class _ {
                    constructor(r) {
                        this.http = r
                    }
                    resumeAppStatus(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/application?id=${r}&notificationId=${s}`)
                    }
                    postSiDetails(r, s) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/capfCreatePersonalDetails?notificationId=${r}`, s)
                    }
                    getQualifyingEducationalQualification() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/applicationEducationLevels`)
                    }
                    getEducationalDetails(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfGetEducationalDetails?applicationId=${r}&notificationId=${s}`)
                    }
                    postSIeducationDetails(r, s, p, m) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/capfEducationalDetails?registrationNo=${r}&applicationId=${s}&notificationId=${p}`, m)
                    }
                    postSIprofessionalBackground(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/capfCreateProfessionalBackground?applicationId=${r}&notificationId=${s}`, p)
                    }
                    getAllExamCentre(r) {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/getExamCentresByNotificationId?id=${r}`)
                    }
                    getSIprofessionalBgDetail(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfGetProfessionalBackground?applicationId=${r}&notificationId=${s}`)
                    }
                    postExamRequirements(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/capfCreateExamRequirement?applicationId=${r}&notificationId=${s}`, p)
                    }
                    getExamRequirements(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfGetExamRequirement?applicationId=${r}&notificationId=${s}`)
                    }
                    uploadSiPhotoSign(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/capfUploadPhoto?id=${r}&notificationId=${s}`, p)
                    }
                    getUploadSiPhotoSign(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfAttachmentsById?applicationId=${r}&notificationId=${s}`)
                    }
                    getSIpreviewDetails(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfApplicationPreview?applicationId=${r}&notificationId=${s}`)
                    }
                    submitDeclaration(r, s, p) {
                        return this.http.put(`${l.N.apiUrl}/candidate/3.1/capfDeclaration?applicationId=${r}&notificationId=${s}`, p)
                    }
                    getPersonalDetails(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfGetPersonalDetail?id=${r}&notificationId=${s}`)
                    }
                    checkUploadedAttachment(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfAttachmentsCheck?applicationId=${r}&notificationId=${s}`)
                    }
                    uploadPhotoSign(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/capfUploadPhoto?id=${r}&notificationId=${s}`, p)
                    }
                    getCapfArcCodes() {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfAgeRelaxations`)
                    }
                    getMyApplicationDetailsById(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/capfGetMyApplicationDetailsById?id=${r}&notificationId=${s}`)
                    }
                    static# t = this.\u0275fac = function(s) {
                        return new(s || _)(g.LFG(v.eN))
                    };
                    static# n = this.\u0275prov = g.Yz7({
                        token: _,
                        factory: _.\u0275fac,
                        providedIn: "root"
                    })
                }
                return _
            })()
        },
        33974: (T, M, f) => {
            f.d(M, {
                m: () => t
            });
            var l = f(92340),
                g = f(94650),
                v = f(80529);
            let t = (() => {
                class _ {
                    constructor(r) {
                        this.http = r
                    }
                    getPreviousApplicationData(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getApplicationById?id=${r}&notificationId=${s}`)
                    }
                    getAllExamCentre(r) {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/getExamCentresByNotificationId?id=${r}`)
                    }
                    getAllPosts(r = "") {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getAllPosts`)
                    }
                    getApplicantDetails(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/2.1/otr?registrationNo=${r}`)
                    }
                    postAppPersonalDetail(r, s, p, m) {
                        return "null" == s && (console.log("in"), s = ""), this.http.post(`${l.N.apiUrl}/v1/candidate/3.1/cgl/personalDetail?notificationId=${r}&applicationId=${s}&reApply=${p}&ip=${m}`, {})
                    }
                    postEducationDetails(r, s, p, m) {
                        return this.http.post(`${l.N.apiUrl}/v1/candidate/3.1/cgl/educationalDetails?applicationId=${r}&notificationId=${s}&reApply=${p}`, m)
                    }
                    getAgeRelaxationCode(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/ageRelaxations?notificationId=${r}`)
                    }
                    getAgeRelaxationCodeCgl(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/cglAgeRelaxations`)
                    }
                    getAgeRelaxationById(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/ageRelaxation?id=${r}`)
                    }
                    postProfessionalBackground(r, s, p, m) {
                        return this.http.post(`${l.N.apiUrl}/v1/candidate/3.1/cgl/professionalBackground?applicationId=${r}&notificationId=${s}&reApply=${p}`, m)
                    }
                    postExamRequirements(r, s, p, m) {
                        return this.http.post(`${l.N.apiUrl}/v1/candidate/3.1/cgl/examRequirement?applicationId=${r}&notificationId=${s}&reApply=${p}`, m)
                    }
                    getDeclarationDetail(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/v1/candidate/3.1/cgl/declaration?notificationId=${r}&applicationId=${s}&reApply=${p}`)
                    }
                    submitDeclaration(r, s, p, m) {
                        return this.http.post(`${l.N.apiUrl}/v1/candidate/3.1/cgl/declaration?notificationId=${r}&applicationId=${s}&reApply=${p}`, m)
                    }
                    getPersonalDetails(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/cgl/personalDetail?notificationId=${s}${null!=r?`&applicationId=${r}`:""}&reApply=${p}`, {
                            params: {
                                applicationId: r ? ? ""
                            }
                        })
                    }
                    getEducationalDetails(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/v1/candidate/3.1/cgl/educationalDetails?notificationId=${r}&applicationId=${s}&reApply=${p}`)
                    }
                    getDebarredDetails(r) {
                        return this.http.get(`${l.N.apiUrl}/ro-nodal/15.1/debarred?registrationNumber=${r}`)
                    }
                    getProfessionalBgDetail(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/v1/candidate/3.1/cgl/professionalBackground?applicationId=${r}&notificationId=${s}&reApply=${p}`)
                    }
                    getExamRequirement(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/v1/candidate/3.1/cgl/examRequirement?applicationId=${r}&notificationId=${s}&reApply=${p}`)
                    }
                    getPrintFormData(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/v1/candidate/3.1/printApplication?applicationId=${s}&notificationId=${r}`)
                    }
                    getPreview(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/v1/candidate/3.1/cgl/preview?notificationId=${r}&applicationId=${s}&reApply=${p}`)
                    }
                    uploadPhotoSign(r, s, p, m) {
                        return this.http.post(`${l.N.apiUrl}/v1/candidate/3.1/cgl/uploadPhoto?applicationId=${r}&notificationId=${s}&reApply=${p}`, m)
                    }
                    resumeAppStatus(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/application?id=${r}&notificationId=${s}`)
                    }
                    getExamDetailsById(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getExamDetailsById?id=${r}&examId=${s}`)
                    }
                    getQualifyingEducationalQualification() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/applicationEducationLevels`)
                    }
                    getHighestEduQualification() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/educationLevels`)
                    }
                    getPhotoAndSign(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/cgl/attachments?applicationId=${r}&notificationId=${s}&reApply=${p}`)
                    }
                    checkUploadedAttachment(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/v1/candidate/3.1/cgl/attachments?notificationId=${r}&applicationId=${s}&reApply=${p}`)
                    }
                    static# t = this.\u0275fac = function(s) {
                        return new(s || _)(g.LFG(v.eN))
                    };
                    static# n = this.\u0275prov = g.Yz7({
                        token: _,
                        factory: _.\u0275fac,
                        providedIn: "root"
                    })
                }
                return _
            })()
        },
        15806: (T, M, f) => {
            f.d(M, {
                L: () => t
            });
            var l = f(92340),
                g = f(94650),
                v = f(80529);
            let t = (() => {
                class _ {
                    constructor(r) {
                        this.http = r
                    }
                    getPreviousApplicationData(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getApplicationById?id=${r}&notificationId=${s}`)
                    }
                    getApplicantDetails(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/2.1/otr?registrationNo=${r}`)
                    }
                    getAllPosts(r = "") {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getAllPosts`)
                    }
                    getOtrDetails(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/2.1/otr?registrationNo=${r}`)
                    }
                    postAppPersonalDetail(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/jePersonalDetailApp?registrationNo=${r}&notificationId=${s}`, p)
                    }
                    postEducationDetails(r, s, p, m, Z) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/jeEducationalDetailApp?registrationNo=${r}&applicationId=${s}&notificationId=${p}`, Z)
                    }
                    getAgeRelaxationCode(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/ageRelaxations?notificationId=${r}`)
                    }
                    getAgeRelaxationById(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/ageRelaxation?id=${r}`)
                    }
                    postProfessionalBackground(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/jeProfessionalDetailApp?applicationId=${r}&notificationId=${s}`, p)
                    }
                    getAllExamCentre(r) {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/getExamCentresByNotificationId?id=${r}`)
                    }
                    postExamRequirements(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/jeExamRequirement?applicationId=${r}&notificationId=${s}`, p)
                    }
                    submitDeclaration(r, s, p) {
                        return this.http.put(`${l.N.apiUrl}/candidate/3.1/jeDeclaration?id=${r}&notificationId=${s}`, p)
                    }
                    getPersonalDetails(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jePersonalDetailApp?id=${r}&notificationId=${s}`)
                    }
                    getEducationalDetails(r, s, p) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jeEducationalDetailApp?id=${r}&notificationId=${s}`)
                    }
                    getPatchDataForApplication(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jeGetPatchDataForApplication?applicationId=${r}&notificationId=${s}`)
                    }
                    getpreviewDetails(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jeApplicationPreview?applicationId=${r}&notificationId=${s}`)
                    }
                    getEducationalDetailsCheck(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jeGetEducationalDetailsCheck?id=${r}&notificationId=${s}`)
                    }
                    getProfessionalBgDetail(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jeProfessionalDetailApp?id=${r}&notificationId=${s}`)
                    }
                    getExamRequirement(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jeExamRequirement?id=${r}&notificationId=${s}`)
                    }
                    getMyApplicationDetailsById(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getMyApplicationDetailsById?id=${r}&notificationId=${s}`)
                    }
                    resumeAppStatus(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/application?id=${r}&notificationId=${s}`)
                    }
                    getExamDetailsById(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getExamDetailsById?id=${r}&examId=${s}`)
                    }
                    getHighestEduQualificationByType(r) {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/getApplicationEducationLevelByType?type=${r}`)
                    }
                    getHighestEduQualification() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/educationLevels`)
                    }
                    getQualifyingEducationalQualification() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/applicationEducationLevels`)
                    }
                    checkUploadedAttachment(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jeAttachmentsCheck?applicationId=${r}&notificationId=${s}`)
                    }
                    uploadPhotoSign(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/jeUploadPhoto?id=${r}&notificationId=${s}`, p)
                    }
                    checkForCurrentApplications(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/checkForCurrentApplications?id=${r}&notificationId=${s}`)
                    }
                    getJeQualification() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/jeEducationLevels`)
                    }
                    getJePostDetails() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/jePostDetails`)
                    }
                    getJeSubjects(r) {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/jeSubjects?postId=${r}`)
                    }
                    getJeArcCodes() {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/jeAgeRelaxations`)
                    }
                    static# t = this.\u0275fac = function(s) {
                        return new(s || _)(g.LFG(v.eN))
                    };
                    static# n = this.\u0275prov = g.Yz7({
                        token: _,
                        factory: _.\u0275fac,
                        providedIn: "root"
                    })
                }
                return _
            })()
        },
        14635: (T, M, f) => {
            f.d(M, {
                N: () => t
            });
            var l = f(92340),
                g = f(94650),
                v = f(80529);
            let t = (() => {
                class _ {
                    constructor(r) {
                        this.http = r
                    }
                    getPassedPostDetails(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getPassedPostDetails?notificationId=${r}`)
                    }
                    getAllQualifications(r) {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/getApplicationEducationLevelByType?type=${r}`)
                    }
                    getPatchDataForApplication(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getPatchDataForApplication?applicationId=${r}&notificationId=${s}`)
                    }
                    checkIfReApply(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/checkIfReApply?id=${r}`)
                    }
                    getRhqPostsByRegionId(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getRhqPostsByRegionId?id=${r}`)
                    }
                    getPostById(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getPostDetailsById?id=${r}`)
                    }
                    getPreviousApplicationData(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getApplicationById?id=${r}&notificationId=${s}`)
                    }
                    getAllPosts(r = "") {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getAllPosts`)
                    }
                    getApplicantDetails(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/2.1/otr?registrationNo=${r}`)
                    }
                    postAppPersonalDetail(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/personalDetailApp?registrationNo=${r}&notificationId=${s}`, p)
                    }
                    postEducationDetails(r, s, p, m) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/educationalDetailApp?registrationNo=${r}&applicationId=${s}&notificationId=${p}`, m)
                    }
                    getAgeRelaxationCode(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/ageRelaxations?notificationId=${r}`)
                    }
                    getAgeRelaxationById(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/ageRelaxation?id=${r}`)
                    }
                    postProfessionalBackground(r, s) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/professionalBackgroundApp?applicationId=${r}`, s)
                    }
                    getAllExamCentre(r) {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/getExamCentresByNotificationId?id=${r}`)
                    }
                    postExamRequirements(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/examRequirement?applicationId=${r}&notificationId=${s}`, p)
                    }
                    submitDeclaration(r, s, p) {
                        return this.http.put(`${l.N.apiUrl}/candidate/3.1/isDeclaration?id=${r}&notificationId=${s}`, p)
                    }
                    getPersonalDetails(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/personalDetailApp?id=${r}&notificationId=${s}`)
                    }
                    checkForCurrentApplications(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/checkForCurrentApplications?id=${r}&notificationId=${s}`)
                    }
                    checkForApplications(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/checkForApplications?registrationNo=${r}&notificationId=${s}`)
                    }
                    getEducationalDetails(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/educationalDetailApp?id=${r}&notificationId=${s}`)
                    }
                    getDebarredDetails(r) {
                        return this.http.get(`${l.N.apiUrl}/ro-nodal/15.1/debarred?registrationNumber=${r}`)
                    }
                    getProfessionalBgDetail(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/professionalBackgroundApp?id=${r}&notificationId=${s}`)
                    }
                    getExamRequirement(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/examRequirement?id=${r}&notificationId=${s}`)
                    }
                    getMyApplicationDetailsById(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getMyApplicationDetailsById?id=${r}&notificationId=${s}`)
                    }
                    uploadPhotoSign(r, s, p) {
                        return this.http.post(`${l.N.apiUrl}/candidate/3.1/uploadPhoto?id=${r}&notificationId=${s}`, p)
                    }
                    resumeAppStatus(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/application?id=${r}&notificationId=${s}`)
                    }
                    getExamDetailsById(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/getExamDetailsById?id=${r}&examId=${s}`)
                    }
                    getHighestEduQualificationByType(r) {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/getApplicationEducationLevelByType?type=${r}`)
                    }
                    getHighestEduQualification() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/applicationEducationLevels`)
                    }
                    getQualifyingEducationalQualification() {
                        return this.http.get(`${l.N.apiUrl}/admin/5.1/educationLevels`)
                    }
                    getPhotoAndSign(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/attachmentsByAppId?applicationId=${r}&notificationId=${s}`)
                    }
                    checkUploadedAttachment(r) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/attachmentsCheck?applicationId=${r}`)
                    }
                    checkForApplicationPayments(r, s) {
                        return this.http.get(`${l.N.apiUrl}/candidate/3.1/checkForApplicationPayments?id=${r}&notificationId=${s}`)
                    }
                    verifyPayments(r) {
                        return "rhq" == r.examCode.toLowerCase() || "je" == r.examCode.toLowerCase() || "capf" == r.examCode.toLowerCase() ? this.http.post(`${l.N.apiUrl}/ssc/payment/verify-payment`, r) : this.http.post(`${l.N.apiUrl}/ssc/payment/verify-payment-dtls`, r)
                    }
                    setPrintData(r) {
                        this.printData = r
                    }
                    static# t = this.\u0275fac = function(s) {
                        return new(s || _)(g.LFG(v.eN))
                    };
                    static# n = this.\u0275prov = g.Yz7({
                        token: _,
                        factory: _.\u0275fac,
                        providedIn: "root"
                    })
                }
                return _
            })()
        },
        21544: (T, M, f) => {
            f.d(M, {
                $: () => t
            });
            var l = f(65412),
                g = f(94650),
                v = f(11310);
            let t = (() => {
                class _ {
                    constructor(r, s, p, m) {
                        this.data = r, this.dialogRef = s, this.router = p, this.activeRoute = m, this.deletePayload = {
                            isActive: !1
                        }, r.msgType = r.msgType ? r.msgType : "Error", r.message = r.message ? r.message : "", this.notificationId = r.apiData, console.log("this.notificationId", this.notificationId)
                    }
                    closeDialog() {
                        this.dialogRef.close()
                    }
                    proceed(r) {
                        this.router.navigate(["upload-documents/eligible-post-details/" + this.notificationId]), this.dialogRef.close(!0)
                    }
                    static# t = this.\u0275fac = function(s) {
                        return new(s || _)(g.Y36(l.WI), g.Y36(l.so), g.Y36(v.F0), g.Y36(v.gz))
                    };
                    static# n = this.\u0275cmp = g.Xpm({
                        type: _,
                        selectors: [
                            ["app-confirm-dialog"]
                        ],
                        decls: 12,
                        vars: 2,
                        consts: [
                            ["src", "assets/image/confirm-dialog.svg", "alt", "icon", 1, "extImage", 2, "margin-left", "45%", "text-align", "center", "width", "auto", "z-index", "11111111", "position", "relative"],
                            [1, "confirmDialog"],
                            [1, "dialogBody"],
                            [1, "buttons"],
                            [1, "noBg", 3, "click"],
                            ["cdkFocusInitial", "", 1, "btn", 3, "click"]
                        ],
                        template: function(s, p) {
                            1 & s && (g._UZ(0, "img", 0), g.TgZ(1, "div", 1)(2, "div", 2)(3, "h3"), g._uU(4), g.qZA(), g.TgZ(5, "p"), g._uU(6), g.qZA(), g.TgZ(7, "div", 3)(8, "button", 4), g.NdJ("click", function() {
                                return p.closeDialog()
                            }), g._uU(9, "Cancel"), g.qZA(), g.TgZ(10, "button", 5), g.NdJ("click", function() {
                                return p.proceed("Yes")
                            }), g._uU(11, " Proceed "), g.qZA()()()()), 2 & s && (g.xp6(4), g.Oqu(p.data.msgType), g.xp6(2), g.Oqu(p.data.message))
                        },
                        styles: [".confirmDialog[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.confirmDialog[_ngcontent-%COMP%]{background:var(--global-white, #fdfdfd);border-radius:20px;padding:32px;margin:-35px auto auto;position:relative;box-shadow:var(--shadow-box-shadow, 0px 20px 40px 0px rgba(0, 0, 0, .11));width:485px;height:293px}.dialogBody[_ngcontent-%COMP%]{text-align:center;margin:50px auto 0}.dialogBody[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:800;padding-bottom:15px!important;margin-bottom:15px!important;border-bottom:1px solid #e6e6e6}.dialogBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--heading-font);font-weight:400;color:#606060;line-height:22px;margin:0;padding:0}.dialogBody[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:50px;float:right}.dialogBody[_ngcontent-%COMP%]   .noBg[_ngcontent-%COMP%]{color:#731d1d;font-size:14px;background:transparent;border:0;outline:0;margin-right:20px;font-weight:800}.dialogBody[_ngcontent-%COMP%]   .extImage[_ngcontent-%COMP%]{position:absolute;top:-44px;left:44%}  .mat-mdc-dialog-container .mdc-dialog__surface{height:auto;background:transparent;box-shadow:none}"]
                    })
                }
                return _
            })()
        },
        28221: (T, M, f) => {
            f.d(M, {
                J: () => p
            });
            var l = f(94650),
                g = f(82182),
                v = f(36895);

            function t(m, Z) {
                if (1 & m && (l.TgZ(0, "div", 9), l._uU(1), l.qZA()), 2 & m) {
                    const h = l.oxw();
                    l.xp6(1), l.hij(" ", h.getDisplayText(h.selectedOption), " ")
                }
            }

            function _(m, Z) {
                1 & m && (l.TgZ(0, "div", 10), l._uU(1, "Select"), l.qZA())
            }

            function N(m, Z) {
                if (1 & m) {
                    const h = l.EpF();
                    l.ynx(0), l.TgZ(1, "li", 14), l.NdJ("click", function() {
                        const P = l.CHM(h).$implicit,
                            x = l.oxw(2);
                        return l.KtG(x.selectOption(P))
                    }), l._uU(2), l.qZA(), l.BQk()
                }
                if (2 & m) {
                    const h = Z.$implicit,
                        C = l.oxw(2);
                    l.xp6(1), l.Tol((null == C.highlightedOption ? null : C.highlightedOption.id) === h.id ? "active" : ""), l.Q6J("value", h.id)("id", h.id), l.xp6(1), l.hij(" ", C.getDisplayText(h), " ")
                }
            }

            function r(m, Z) {
                if (1 & m && (l.TgZ(0, "div", 11)(1, "ul", 12), l.YNc(2, N, 3, 5, "ng-container", 13), l.qZA()()), 2 & m) {
                    const h = l.oxw();
                    l.xp6(1), l.Tol(h.options && h.options.length > 8 ? "scroll" : ""), l.xp6(1), l.Q6J("ngForOf", h.options)
                }
            }
            const s = function(m) {
                return {
                    disabled: m
                }
            };
            let p = (() => {
                class m {
                    constructor(h, C, w) {
                        this.elementRef = h, this.dropService = C, this.renderer = w, this.searchStr = "", this.searchTimeout = null, this.dropCheck = !1, this.haveValue = !1, this.default = !0, this.prevSelectedOption = "", this.showSearch = !0, this.searchPlaceholder = "Search...", this.options = [], this.selectedOption = null, this.dropdownClass = "custom-dropdown-css-class", this.displayNameKeys = [], this.label = "Label", this.selectionChange = new l.vpe, this.showRequired = "false", this.showDropdown = !1, this.searchText = "", this.filteredOptions = [], this.optionData = [], this.disabled = !1, this.dropService.resetObservable.subscribe(P => {
                            P && this.reset()
                        })
                    }
                    dropTogge() {
                        if (!this.disabled) {
                            this.dropCheck = !this.dropCheck;
                            let h = document.getElementById("iconId");
                            this.dropCheck ? (h ? .classList.remove("downIcon"), h ? .classList.add("upIcon")) : (h ? .classList.remove("upIcon"), h ? .classList.add("downIcon"))
                        }
                    }
                    itemSelect() {}
                    ngOnChanges(h) {
                        h ? .selectedOption && h ? .selectedOption ? .currentValue && (this.prevSelectedOption = h.selectedOption.currentValue);
                        const C = this.displayNameKeys[0];
                        if (this.options && this.options ? .length > 0 && "" !== this.prevSelectedOption) {
                            switch (C) {
                                case "year":
                                case "levelOfEducation":
                                case "state":
                                case "universityBoardName":
                                    this.selectedOption = this.options ? .find(w => w[C] === this.prevSelectedOption);
                                    break;
                                default:
                                    this.selectedOption = this.options ? .find(w => w.id === this.prevSelectedOption)
                            }
                            this.selectedOption && (this.haveValue = !0, this.default = !1)
                        }
                    }
                    ngOnInit() {
                        this.filteredOptions = this.options
                    }
                    filterOptions() {
                        this.filteredOptions = this.options ? .filter(h => this.getDisplayText(h).toLowerCase().includes(this.searchText.toLowerCase()))
                    }
                    selectOption(h) {
                        this.selectedOption = h, this.showDropdown = !1, this.haveValue = !0, this.default = !1, this.dropTogge(), this.selectionChange.emit(h)
                    }
                    reset() {
                        this.selectedOption = null, this.searchText = "", this.filteredOptions = this.options, this.haveValue = !1, this.default = !0, this.prevSelectedOption = "", this.selectionChange.emit(null)
                    }
                    toggleDropdown() {
                        this.showDropdown = !this.showDropdown, this.showDropdown || (this.searchText = "", this.filteredOptions = this.options)
                    }
                    getDisplayText(h) {
                        return null == h ? "" : this.displayNameKeys.map(C => h[C]).join(" - ")
                    }
                    onDocumentClick(h) {
                        const C = h.target;
                        if (!this.elementRef.nativeElement.querySelector("#dropsection").contains(C)) {
                            this.dropCheck = !1;
                            let P = document.getElementById("iconId");
                            this.dropCheck ? (P ? .classList.remove("downIcon"), P ? .classList.add("upIcon")) : (P ? .classList.remove("upIcon"), P ? .classList.add("downIcon"))
                        }
                    }
                    onKeyPress(h) {
                        if (!this.dropCheck) return;
                        this.searchStr += h.key.toLowerCase(), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(() => {
                            this.searchStr = ""
                        }, 500);
                        const w = this.options.find(P => this.getDisplayText(P).toLowerCase().startsWith(this.searchStr));
                        if (w) {
                            this.highlightedOption = w;
                            const x = 35,
                                J = (this.options.indexOf(this.highlightedOption) - Math.floor(1.5)) * x,
                                D = this.elementRef.nativeElement.querySelector(".list"),
                                j = this.elementRef.nativeElement.querySelector(".active");
                            D && j && this.renderer.setProperty(D, "scrollTop", J)
                        }
                    }
                    static# t = this.\u0275fac = function(C) {
                        return new(C || m)(l.Y36(l.SBq), l.Y36(g.P), l.Y36(l.Qsj))
                    };
                    static# n = this.\u0275cmp = l.Xpm({
                        type: m,
                        selectors: [
                            ["app-dropdown-new"]
                        ],
                        hostBindings: function(C, w) {
                            1 & C && l.NdJ("click", function(x) {
                                return w.onDocumentClick(x)
                            }, !1, l.evT)("keypress", function(x) {
                                return w.onKeyPress(x)
                            }, !1, l.evT)
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
                        features: [l.TTD],
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
                        template: function(C, w) {
                            1 & C && (l.TgZ(0, "div", 0)(1, "div", 1), l._uU(2), l.qZA(), l.TgZ(3, "div", 2), l.NdJ("click", function() {
                                return w.dropTogge()
                            })("keypress", function(x) {
                                return w.onKeyPress(x)
                            }), l.YNc(4, t, 2, 1, "div", 3), l.YNc(5, _, 2, 0, "div", 4), l.TgZ(6, "div", 5), l._UZ(7, "img", 6)(8, "img", 7), l.qZA()(), l.YNc(9, r, 3, 3, "div", 8), l.qZA()), 2 & C && (l.Tol(w.dropdownClass), l.xp6(1), l.Tol("true" === w.showRequired ? "required" : ""), l.xp6(1), l.hij(" ", w.label, " "), l.xp6(1), l.Tol(w.dropCheck ? "color-hgt" : ""), l.Q6J("ngClass", l.VKq(11, s, 1 == w.disabled)), l.xp6(1), l.Q6J("ngIf", w.haveValue), l.xp6(1), l.Q6J("ngIf", w.default), l.xp6(4), l.Q6J("ngIf", w.dropCheck))
                        },
                        dependencies: [v.mk, v.sg, v.O5],
                        styles: [".ng-dropdown[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column}.ng-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f1f1f1!important}.ng-dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#252525;font-size:14px;font-style:normal;font-weight:700;line-height:140%;display:flex;justify-content:left;padding-left:0!important}.ng-dropdown[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{color:#606060;font-size:16px;font-style:normal;font-weight:400;line-height:140%}.ng-dropdown[_ngcontent-%COMP%]   .value-area[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-radius:8px;border:1px solid var(--global-border, #e6e6e6);background:var(--global-white, #fdfdfd);position:relative;height:40px;overflow:auto}.ng-dropdown[_ngcontent-%COMP%]   .value-area[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;padding-left:10px;font-size:14px;justify-content:flex-start;align-items:flex-start}.ng-dropdown[_ngcontent-%COMP%]   .drop-list[_ngcontent-%COMP%]{border-radius:8px;border:1px solid var(--global-border, #e6e6e6);background:var(--global-white, #fdfdfd);margin:4px 0;box-shadow:0 20px 40px #0000000d;top:62px!important;z-index:11;width:100%;padding-top:2px;position:absolute}.ng-dropdown[_ngcontent-%COMP%]   .drop-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.ng-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:2px}.ng-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--fonts-primary, #1e1e1e);font-size:14px;font-style:normal;font-weight:400;list-style-type:none;padding:8px 20px;border-radius:4px}.ng-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .ng-dropdown[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:var(--button-menu-default, #f0dddb)}.ng-dropdown[_ngcontent-%COMP%]   .select-type[_ngcontent-%COMP%]{color:var(--fonts-primary, #1e1e1e);font-size:14px;font-style:normal;font-weight:400;line-height:140%;padding-left:15px}.ng-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:40px;display:flex;justify-content:center;align-items:center;background-color:#f9f1f1;height:100%;cursor:pointer}.ng-dropdown[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{display:none}.downIcon[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{display:block!important}.downIcon[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{display:none!important}.upIcon[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{display:block!important}.upIcon[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{display:none!important}.scroll[_ngcontent-%COMP%]{overflow-y:scroll;height:220px}.cursor-nt-allowed[_ngcontent-%COMP%]{cursor:not-allowed!important}[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px;height:7px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--primary-color);border-radius:2px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--primary-color)}@media (max-width: 767px){.ng-dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{white-space:inherit}}@media (max-width: 427px){.ng-dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:11px}.ng-dropdown[_ngcontent-%COMP%]   .drop-list[_ngcontent-%COMP%]{top:57px}}.ng-dropdown.hei[_ngcontent-%COMP%]   .value-area[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{height:100%;align-items:flex-start;padding:10px}@media (max-width: 767px){.ng-dropdown[_ngcontent-%COMP%]   .select-type[_ngcontent-%COMP%], .ng-dropdown[_ngcontent-%COMP%]   .value-area[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:var(--font-size-12)}}"]
                    })
                }
                return m
            })()
        }
    }
]);