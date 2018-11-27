webpackJsonp([3],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ftm_ftm__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_checker_checker__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, ftmProvider, checker, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ftmProvider = ftmProvider;
        this.checker = checker;
        this.translate = translate;
        this.register = {
            nickname: '',
            password: '',
            password2: '',
            email: ''
        };
        this.nicknameAvailability = null;
        this.errNickname = null;
        this.passwordsMatch = null;
        this.errPassword = null;
        this.emailAvailability = null;
        this.errEmail = null;
        this.registerSpinner = false;
        this.loginPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    RegisterPage.prototype.registerForm = function () {
        var _this = this;
        if (this.register.nickname == "") {
            this.errNickname = 1;
        }
        if (this.register.password == "") {
            this.errPassword = 1;
        }
        if (this.register.email == "") {
            this.errEmail = 1;
        }
        if (this.nicknameAvailability && this.passwordsMatch && this.emailAvailability) {
            this.registerSpinner = true;
            this.errRegister = false;
            this.ftmProvider.newUser(this.register.nickname, this.register.password, this.register.email).then(function (data) {
                if (data['status'] == "success") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {
                        nickname: _this.register.nickname,
                        password: _this.register.password
                    });
                }
                else {
                    _this.errRegister = true;
                }
                _this.registerSpinner = false;
            });
        }
    };
    RegisterPage.prototype.checkNickname = function () {
        var _this = this;
        this.errNickname = null;
        if (this.register.nickname == "") {
            this.nicknameAvailability = null;
        }
        else if (this.register.nickname.length < 3) {
            this.errNickname = 2;
        }
        else {
            this.ftmProvider.checkNicknameAvailability(this.register.nickname).then(function (data) {
                _this.available = data;
                if (_this.available.status == "available") {
                    _this.nicknameAvailability = true;
                }
                else if (_this.available.status == "exist") {
                    _this.nicknameAvailability = false;
                }
            });
        }
    };
    RegisterPage.prototype.checkPasswords = function () {
        this.errPassword = null;
        if ((this.register.password == "" && this.register.password2 == "") || (this.register.password != this.register.password2 && (this.register.password == "" || this.register.password2 == ""))) {
            this.passwordsMatch = null;
        }
        else if (this.register.password != this.register.password2) {
            this.errPassword = 2;
            this.passwordsMatch = false;
        }
        else if (this.register.password.length < 3 && this.register.password2.length < 3) {
            this.errPassword = 3;
            this.passwordsMatch = false;
        }
        else if (this.checker.checkPassword(this.register.password) == false) {
            this.errPassword = 4;
            this.passwordsMatch = false;
        }
        else {
            this.passwordsMatch = true;
        }
    };
    RegisterPage.prototype.checkEmail = function () {
        var _this = this;
        this.errEmail = null;
        if (this.register.email == "") {
            this.emailAvailability = null;
        }
        else if (this.checker.checkEmailPattern(this.register.email) == false) {
            this.errEmail = 2;
        }
        else {
            this.ftmProvider.checkEmailAvailability(this.register.email).then(function (data) {
                _this.available = data;
                if (_this.available.status == "available") {
                    _this.emailAvailability = true;
                }
                else if (_this.available.status == "exist") {
                    _this.emailAvailability = false;
                }
            });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\pages\register\register.html"*/'<ion-content padding>\n  <ion-grid style="height: 100%;">\n    <ion-row align-items-center style="height: 100%;">\n      <ion-col col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-4>\n          <p class="c-red" *ngIf="errRegister">{{ "An error occurred during your registration. Please try again." | translate }}</p>\n\n          <form (ngSubmit)="registerForm()">\n              <ion-item>\n                <ion-label>{{ "Nickname :" | translate }}</ion-label>\n                <ion-input type="text" [(ngModel)]="register.nickname" name="nickname" (change)="checkNickname()" *ngIf="nicknameAvailability == null"></ion-input>\n                <ion-input type="text" [(ngModel)]="register.nickname" name="nickname" (change)="checkNickname()" [ngClass]="(nicknameAvailability) ? \'c-green\' : \'\'" *ngIf="nicknameAvailability == true"></ion-input>\n                <ion-input type="text" [(ngModel)]="register.nickname" name="nickname" (change)="checkNickname()" [ngClass]="(nicknameAvailability == false) ? \'c-red\' : \'\'" *ngIf="nicknameAvailability == false"></ion-input>\n                <ion-icon name="checkmark" *ngIf="nicknameAvailability" item-right class="c-green"></ion-icon>\n                <ion-icon name="close" *ngIf="nicknameAvailability == false || errNickname != null" item-right class="c-red"></ion-icon>\n              </ion-item>\n              <p class="error c-red" *ngIf="errNickname == 1">{{ "Nickname required." | translate }}</p>\n              <p class="error c-red" *ngIf="errNickname == 2">{{ "Your nickname has at least 3 characters." | translate }}</p>\n              <p class="error c-red" *ngIf="nicknameAvailability == false">{{ "Nickname already taken." | translate }}</p>\n              <ion-item>\n                <ion-label>{{ "Password :" | translate }}</ion-label>\n                <ion-input type="password" [(ngModel)]="register.password" name="password" (change)="checkPasswords()" *ngIf="passwordsMatch == null"></ion-input>\n                <ion-input type="password" [(ngModel)]="register.password" name="password" (change)="checkPasswords()" [ngClass]="(passwordsMatch) ? \'c-green\' : \'\'" *ngIf="passwordsMatch == true"></ion-input>\n                <ion-input type="password" [(ngModel)]="register.password" name="password" (change)="checkPasswords()" [ngClass]="(passwordsMatch == false) ? \'c-red\' : \'\'" *ngIf="passwordsMatch == false"></ion-input>\n                <ion-icon name="checkmark" *ngIf="passwordsMatch" item-right class="c-green"></ion-icon>\n                <ion-icon name="close" *ngIf="passwordsMatch == false || errPassword != null" item-right class="c-red"></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>{{ "Repeat :" | translate }}</ion-label>\n                <ion-input type="password" [(ngModel)]="register.password2" name="password2" (change)="checkPasswords()" *ngIf="passwordsMatch == null"></ion-input>\n                <ion-input type="password" [(ngModel)]="register.password2" name="password2" (change)="checkPasswords()" [ngClass]="(passwordsMatch) ? \'c-green\' : \'\'" *ngIf="passwordsMatch == true"></ion-input>\n                <ion-input type="password" [(ngModel)]="register.password2" name="password2" (change)="checkPasswords()" [ngClass]="(passwordsMatch == false || errPassword != null) ? \'c-red\' : \'\'" *ngIf="passwordsMatch == false"></ion-input>\n                <ion-icon name="checkmark" *ngIf="passwordsMatch" item-right class="c-green"></ion-icon>\n                <ion-icon name="close" *ngIf="passwordsMatch == false || errPassword != null" item-right class="c-red"></ion-icon>\n              </ion-item>\n              <p class="error c-red" *ngIf="errPassword == 1">{{ "Passwords required." | translate }}</p>\n              <p class="error c-red" *ngIf="errPassword == 2">{{ "Passwords don\'t match." | translate }}</p>\n              <p class="error c-red" *ngIf="errPassword == 3">{{ "At least 3 characters required." | translate }}</p>\n              <p class="error c-red" *ngIf="errPassword == 4">{{ "One capital letter, number required and no specials caracters allowed." | translate }}</p>\n              <ion-item>\n                <ion-label>{{ "Email :" | translate }}</ion-label>\n                <ion-input type="email" [(ngModel)]="register.email" name="email" (change)="checkEmail()" [ngClass]="(errEmail != null || emailAvailability == false) ? \'c-red\' : (emailAvailability ? \'c-green\' : \'\')"></ion-input>\n                <ion-icon name="checkmark" *ngIf="emailAvailability" item-right class="c-green"></ion-icon>\n                <ion-icon name="close" *ngIf="emailAvailability == false || errEmail != null" item-right class="c-red"></ion-icon>\n              </ion-item>\n              <p class="error c-red" *ngIf="errEmail == 1">{{ "Email required." | translate }}</p>\n              <p class="error c-red" *ngIf="errEmail == 2">{{ "Invalid email type." | translate }}</p>\n              <p class="error c-red" *ngIf="emailAvailability == false">{{ "Email already used." | translate }}</p>\n              <button ion-button type="submit" block>{{ "Register" | translate }}</button>\n            </form>\n        \n            <div class="text-center">\n              <a [navPush]="loginPage">{{ "Login" | translate }}</a>\n            </div>\n        \n            <p>{{ "Provide a real email, it could be useful if you lose your account." | translate }}</p>\n\n            <ion-spinner name="bubbles" *ngIf="registerSpinner"></ion-spinner>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_ftm_ftm__["a" /* FtmProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_checker_checker__["a" /* CheckerProvider */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl, navParams, emailComposer, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.translate = translate;
        this.sendPassword();
    }
    PasswordPage.prototype.sendPassword = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            var email = {
                to: 'kevin.guillier.pro@gmail.com',
                subject: 'test',
                body: 'How are you? Nice greetings from Leipzig',
                isHtml: true
            };
            console.log(available);
            if (available) {
                console.log('envoi test');
                _this.emailComposer.open(email);
            }
            else {
                console.log('email composer pas pret');
                _this.emailComposer.open(email);
            }
        });
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\pages\password\password.html"*/'<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\pages\password\password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/index/index.module": [
		297,
		2
	],
	"../pages/password/password.module": [
		299,
		1
	],
	"../pages/register/register.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EmailCheckerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CheckerProvider = /** @class */ (function () {
    function CheckerProvider(http) {
        this.http = http;
    }
    CheckerProvider.prototype.checkEmailPattern = function (email) {
        var emailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (email && emailRegexp.test(email)) {
            return true;
        }
        else {
            return false;
        }
    };
    CheckerProvider.prototype.checkPassword = function (password) {
        var passwordRegexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[\²|\_|\-|\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|\;|\:|\s]).+$/g);
        if (password && passwordRegexp.test(password)) {
            return true;
        }
        else {
            return false;
        }
    };
    CheckerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CheckerProvider);
    return CheckerProvider;
}());

//# sourceMappingURL=checker.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_index__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_password_password__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_ftm_ftm__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_checker_checker__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_email_composer__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_password_password__["a" /* PasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/index/index.module#IndexPageModule', name: 'IndexPage', segment: 'index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb_ftm',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_password_password__["a" /* PasswordPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_ftm_ftm__["a" /* FtmProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_checker_checker__["a" /* CheckerProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_index_index__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, translate, events, network) {
        var _this = this;
        this.storage = storage;
        this.translate = translate;
        this.events = events;
        this.network = network;
        this.connected = false;
        this.storage.get('lang').then(function (val) {
            if (val != null) {
                _this.translate.use(val);
                _this.lang = val;
            }
            else {
                translate.setDefaultLang('en');
                _this.lang = "en";
            }
        });
        this.storage.get('user').then(function (val) {
            if (val != null) {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_index_index__["a" /* IndexPage */]);
                _this.events.publish('connected', true);
            }
            else {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
        });
        this.network.onConnect().subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.network.onDisconnect().subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    }
    MyApp.prototype.switchLanguage = function (language) {
        if (this.storage.ready()) {
            this.storage.set('lang', language);
            this.translate.use(language);
            this.lang = language;
        }
    };
    MyApp.prototype.logout = function () {
        if (this.storage.ready()) {
            this.storage.remove('user');
            this.connected = false;
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            this.events.publish('connected', false);
        }
    };
    MyApp.prototype.ionViewDidEnter = function () {
        this.network.onConnect().subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.network.onDisconnect().subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\app\app.html"*/'<ion-header>\n   <ion-navbar hideBackButton=\'true\' align-title="center">\n        <ion-buttons right>\n            <button ion-button menuToggle text-uppercase color="dark" #options>  \n                <ion-icon name="settings"></ion-icon>\n            </button> \n        </ion-buttons>\n        <ion-title>\n            FindTeamMate\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-menu [content]="options" type="overlay">\n    <ion-content>\n        <ion-list> <!-- fermer menu à faire après sélection !!!!!! -->\n            <button ion-item text-center style="background-color: lightgrey">\n                {{ "Language" | translate }}\n            </button>\n            <button ion-item class="menuLanguages" (click)="switchLanguage(\'en\')">\n                English\n            </button>\n            <button ion-item class="menuLanguages" (click)="switchLanguage(\'fr\')">\n                Français\n            </button>\n        </ion-list>\n        <ion-list *ngIf="connected">\n            <button ion-item text-center style="background-color: lightgrey" (click)="logout()">{{ "Logout" | translate }}</button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FtmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FtmProvider = /** @class */ (function () {
    function FtmProvider(http, translate) {
        this.http = http;
        this.translate = translate;
        this.apiUrl = "http://127.0.0.1/FindTeamMate/";
        this.errServer = "ok";
    }
    FtmProvider.prototype.checkNicknameAvailability = function (nickname) {
        var _this = this;
        var data = new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "new_user.php?nickname=" + nickname).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                return err;
            });
        });
        return data;
    };
    FtmProvider.prototype.checkEmailAvailability = function (email) {
        var _this = this;
        var data = new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "new_user.php?email=" + email).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                return err;
            });
        });
        return data;
    };
    FtmProvider.prototype.newUser = function (nickname, password, email) {
        var _this = this;
        console.log('newuser');
        var data = new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + "new_user.php", { 'nickname': nickname, 'password': password, 'email': email }, {
                headers: { 'Content-Type': 'application/json' }
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                return err;
            });
        });
        return data;
    };
    FtmProvider.prototype.getLog = function (nickname, password) {
        var _this = this;
        var data = new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + "login.php", { 'nickname': nickname, 'password': password }, {
                headers: { 'Content-Type': 'application/json' }
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                return null;
            });
        });
        return data;
    };
    FtmProvider.prototype.getGames = function () {
        var _this = this;
        var data = new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "games.php?all").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                return err;
            });
        });
        return data;
    };
    FtmProvider.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    FtmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], FtmProvider);
    return FtmProvider;
}());

//# sourceMappingURL=ftm.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ftm_ftm__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexPage = /** @class */ (function () {
    function IndexPage(navCtrl, navParams, ftmProvider, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ftmProvider = ftmProvider;
        this.translate = translate;
        this.gamesStatus = null;
        this.loadingIndex();
    }
    IndexPage.prototype.loadingIndex = function () {
        this.loading = true;
        this.getAllGames();
    };
    IndexPage.prototype.getAllGames = function () {
        var _this = this;
        this.ftmProvider.getGames().then(function (data) {
            _this.gamesProvider = data;
            if (_this.gamesProvider.status == "success") {
                _this.games = _this.gamesProvider.games;
                _this.gamesStatus = true;
            }
            else if (_this.gamesProvider.status == "error") {
                _this.games = null;
                _this.gamesStatus = false;
            }
            _this.loading = false;
        });
    };
    IndexPage.prototype.selectGame = function (id) {
        this.selected = id;
    };
    IndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-index',template:/*ion-inline-start:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\pages\index\index.html"*/'<ion-content padding id="indexGames">\n    <ion-spinner name="bubbles" *ngIf="loading"></ion-spinner>\n\n    <ion-grid *ngIf="gamesStatus">\n        <ion-row>\n            <ion-col *ngFor="let game of games" col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2>\n                <ion-card>\n                    <ion-card-content>\n                        <img src="assets/thumbnails/{{game.thumbnail_game}}" alt="{{game.name_game}}" (click)="selectGame(game.id_game)">\n                        <div *ngIf="selected === game.id_game" class="divSelectGame">\n                            <ion-row class="selectGame">\n                                <ion-col col-3>\n\n                                </ion-col>\n                                <ion-col col-6>\n\n                                </ion-col>\n                                <ion-col col-3 (click)="selectGame(0)">\n\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n    <div *ngIf="gamesStatus === false && loading === false">\n        <p>{{ "An error occured while loading !" | translate }}</p>\n        <button ion-button (click)="loadingIndex()" full>{{ "Reload" | translate }}</button>\n    </div>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\pages\index\index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ftm_ftm__["a" /* FtmProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], IndexPage);
    return IndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ftm_ftm__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_index__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_password__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, ftm, storage, translate, events, navParams) {
        // si login existant sur le device
        this.navCtrl = navCtrl;
        this.ftm = ftm;
        this.storage = storage;
        this.translate = translate;
        this.events = events;
        this.navParams = navParams;
        this.login = {
            nickname: '',
            password: ''
        };
        this.spinner = false;
        this.registerPage = __WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */];
        this.passwordPage = __WEBPACK_IMPORTED_MODULE_6__password_password__["a" /* PasswordPage */];
        if (navParams.get("nickname") != undefined && navParams.get("password") != undefined) {
            var nickname = navParams.get("nickname");
            var password = navParams.get("password");
            this.loginAction(nickname, password);
        }
    }
    LoginPage.prototype.loginForm = function () {
        this.errNickname = "";
        this.errPassword = "";
        this.errInvalid = "";
        this.errServer = "";
        this.checkConnectionServer = "";
        if (!this.login.nickname || this.login.nickname.length < 3) {
            this.errNickname = true;
        }
        if (!this.login.password || this.login.password.length < 3) {
            this.errPassword = true;
        }
        if (this.login.nickname && this.login.password && this.login.nickname.length > 2 && this.login.password.length > 2) {
            this.loginAction(this.login.nickname, this.login.password);
        }
    };
    LoginPage.prototype.loginAction = function (nickname, password) {
        var _this = this;
        this.spinner = true;
        this.checkConnectionServer = "start";
        this.ftm.getLog(nickname, password).then(function (data) {
            _this.logData = data;
            _this.checkConnectionServer = "end";
            if (_this.logData.status == "error") {
                _this.errInvalid = true;
            }
            else if (_this.logData.status == "success") {
                if (_this.storage.ready()) {
                    var user = { 'nickname': _this.logData.user.nickname, 'email': _this.logData.user.email };
                    _this.storage.set('user', user);
                    _this.events.publish('connected', true);
                }
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__index_index__["a" /* IndexPage */]);
            }
            _this.spinner = false;
        });
        setTimeout(function (errServer) {
            if (_this.checkConnectionServer === "start") {
                _this.errServer = true;
                _this.spinner = false;
            }
        }, 10000);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\pages\login\login.html"*/'<ion-content>\n    <ion-grid style="height: 100%;">\n        <ion-row center align-items-center style="height: 100%;">\n              <ion-col col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-4>\n                  <form (ngSubmit)="loginForm()">\n                      <ion-item>\n                          <ion-label>{{ "Nickname :" | translate }}</ion-label>\n                          <ion-input type="text" [(ngModel)]="login.nickname" name="nickname"></ion-input>\n                        </ion-item>\n                        <p class="error c-red" *ngIf="errNickname">{{ "Your nickname has at least 3 characters" | translate }}</p>\n                \n                        <ion-item>\n                          <ion-label>{{ "Password :" | translate}}</ion-label>\n                          <ion-input type="password" [(ngModel)]="login.password" name="password"></ion-input>\n                        </ion-item>\n                        <p class="error c-red" *ngIf="errPassword">{{ "Your password has at least 3 characters" | translate }}</p>\n                        <p class="error c-red" *ngIf="errInvalid">{{ "Nickname or password invalid" | translate }}</p>\n                        <p class="error c-red" *ngIf="errServer">{{ "Server down, try again later" | translate }}</p>\n                        \n                        <button ion-button type="submit" block *ngIf="spinner === false ">{{ "Login" | translate }}</button>\n                    </form>\n                    <div class="text-center" *ngIf="spinner === false">\n                      <a [navPush]="passwordPage">{{ "Forgot your password ?" | translate }}</a>\n                    </div>\n                    <div class="text-center" *ngIf="spinner === false">\n                        <a [navPush]="registerPage">{{ "Register" | translate }}</a>\n                    </div>\n                    <ion-spinner name="bubbles" *ngIf="spinner"></ion-spinner>\n              </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\kevin\Documents\FTM\FindTeamMate\FTM\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_ftm_ftm__["a" /* FtmProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map