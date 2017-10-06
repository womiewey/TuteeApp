webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SFeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remoteservice_remoteservice__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SFeedbackPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SFeedbackPage = (function () {
    function SFeedbackPage(remoteService, navctrl, http) {
        this.remoteService = remoteService;
        this.navctrl = navctrl;
        this.http = http;
    }
    SFeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SFeedbackPage');
    };
    SFeedbackPage.prototype.feedback = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = {
            name: this.name,
            email: this.email,
            message: this.message
        };
        this.http.post('http://cabonagua.pythonanywhere.com/tutorial/feedback/', JSON.stringify(data), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        }, function (err) {
            console.log(err);
        });
        this.navctrl.popToRoot();
    };
    return SFeedbackPage;
}());
SFeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-s-feedback',template:/*ion-inline-start:"C:\Users\RR\Desktop\sidemenu\src\pages\s-feedback\s-feedback.html"*/'<!--\n  Generated template for the SFeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Feedback </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label floating> Name </ion-label>\n      <ion-input type = "text"  [(ngModel)]="name"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> E-mail </ion-label>\n      <ion-input type = "email"  [(ngModel)]="email"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <textarea rows="6" maxlength="1000" name="blog" placeholder="Place your feedback here . . ." [(ngModel)]="message"></textarea>\n    </ion-item>\n    <ion-item> \n    <button ion-button color="dark" block large (click)="feedback()"> \n      Submit \n    </button>\n    </ion-item>\n  </ion-list> \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\RR\Desktop\sidemenu\src\pages\s-feedback\s-feedback.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_remoteservice_remoteservice__["a" /* RemoteserviceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_remoteservice_remoteservice__["a" /* RemoteserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], SFeedbackPage);

//# sourceMappingURL=s-feedback.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SSchedulePickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SSchedulePickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SSchedulePickerPage = (function () {
    function SSchedulePickerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.schedule = {
            date: '2017-08-19',
            timeStart: '07:30',
            timeEnd: '08:30'
        };
    }
    SSchedulePickerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SSchedulePickerPage');
    };
    return SSchedulePickerPage;
}());
SSchedulePickerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-s-schedule-picker',template:/*ion-inline-start:"C:\Users\RR\Desktop\sidemenu\src\pages\s-schedule-picker\s-schedule-picker.html"*/'<!--\n  Generated template for the SSchedulePickerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n          <ion-label floating>Subject/Course/Course Code</ion-label>\n          <ion-input type = "text"> </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Topic to be discussed</ion-label>\n          <ion-input type = "text"> </ion-input>\n        </ion-item>\n      <ion-item>\n          <ion-label>Date</ion-label>\n          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="schedule.date"></ion-datetime>\n        </ion-item>\n    \n    \n        <ion-item>\n          <ion-label>Start Time</ion-label>\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="schedule.timeStart"></ion-datetime>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>End Time</ion-label>\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="schedule.timeEnd"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <textarea rows="4" maxlength="500" name="message" placeholder ="Message to the tutor"></textarea>\n        </ion-item>\n          \n        <ion-item>\n            <button ion-button block large> Next </button>\n        </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\RR\Desktop\sidemenu\src\pages\s-schedule-picker\s-schedule-picker.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SSchedulePickerPage);

//# sourceMappingURL=s-schedule-picker.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\RR\Desktop\sidemenu\src\pages\login\login.html"*/'<ion-content>\n  \n  <div class = "loginblock">\n    <div class = "logo">\n      <img src = "assets/imgs/logo.jpg" alt = "Ace Tutors">\n     </div>\n    <ion-list no-line>\n      <ion-item>\n        <ion-label floating> Email </ion-label>\n        <ion-input type = "email"> </ion-input>\n      </ion-item>\n    <ion-item>\n      <ion-label floating> Password </ion-label>\n      <ion-input type = "password"> </ion-input>\n    </ion-item>\n    <button ion-button block (click) = "login()">\n      Log in\n    </button>\n    </ion-list>\n    <button (click) = "signup()"> No account yet? Sign up </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\RR\Desktop\sidemenu\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.category = 'gear';
        this.cards = new Array(10);
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\RR\Desktop\sidemenu\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n \n<ion-content fullscreen>\n    <div>\n      <img src = "assets/imgs/coverphoto.jpg">\n    </div>\n \n    <ion-card *ngFor="let card of cards">\n \n      <ion-item>\n        <ion-avatar item-left>\n          <img src="https://avatars.io/facebook/womiewey" />\n        </ion-avatar>\n        <h2>Romie Santiago</h2>\n        <p>August 22, 2017</p>\n      </ion-item>\n \n      <img src="http://placehold.it/500x200" />\n \n      <ion-card-content>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n      </ion-card-content>\n \n      \n    </ion-card>\n \n</ion-content>'/*ion-inline-end:"C:\Users\RR\Desktop\sidemenu\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remoteservice_remoteservice__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(remoteService, navctrl, http) {
        this.remoteService = remoteService;
        this.navctrl = navctrl;
        this.http = http;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
        this.initialize();
        this.initialize();
        this.initialize();
        this.initialize();
    };
    SignupPage.prototype.login = function () {
        this.navctrl.popToRoot();
    };
    SignupPage.prototype.info = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = {
            password: this.password,
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            username: this.username
        };
        this.http.post('http://127.0.0.1:8000/tutorial/accounts/', JSON.stringify(data), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        }, function (err) {
            console.log(err);
        });
        this.postProfile();
    };
    SignupPage.prototype.initialize = function () {
        var _this = this;
        this.remoteService.loadaccounts().subscribe(function (data) {
            // this.value=data.length+1;
            var x = data.length;
            for (var i = 0, x = data.length; i++;) {
                _this.value = data[i].id;
                console.log("number" + _this.value);
                return function () { return _this.value; };
            }
        }, function (err) {
            console.log(err);
        }, function () { return console.log('Done'); });
    };
    SignupPage.prototype.type = function () {
        var _this = this;
        this.remoteService.loadaccounts().subscribe(function (data) {
            _this.value = data.length + 1;
            console.log("number" + _this.value);
            return function () { return _this.value; };
        }, function (err) {
            console.log(err);
        }, function () { return console.log('Done'); });
        this.info();
    };
    SignupPage.prototype.postProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = {
            "user": this.value,
            "type": "tutee",
            "contact_number": this.contact_number
        };
        console.log('value' + this.value);
        this.http.post('http://127.0.0.1:8000/tutorial/userprofile/', JSON.stringify(data), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        }, function (err) {
            console.log(err);
        });
        this.navctrl.popToRoot();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\RR\Desktop\sidemenu\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class = "signupblock">\n  <ion-list no-line>\n    <ion-item>\n      <ion-label floating> Email </ion-label>\n      <ion-input type = "email"[(ngModel)]="email"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Password </ion-label>\n      <ion-input type = "password"[(ngModel)]="password"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> First Name </ion-label>\n      <ion-input type = "text" [(ngModel)]="first_name"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Last Name </ion-label>\n      <ion-input type = "text" [(ngModel)]="last_name"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Username    </ion-label>\n      <ion-input type = "text"[(ngModel)]="username"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Username    </ion-label>\n      <ion-input type = "number"[(ngModel)]="contact_number"> </ion-input>\n    </ion-item>\n    \n    <button ion-button block (click) = "type()">\n      Next\n    </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\RR\Desktop\sidemenu\src\pages\signup\signup.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_remoteservice_remoteservice__["a" /* RemoteserviceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_remoteservice_remoteservice__["a" /* RemoteserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_s_feedback_s_feedback__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_s_schedule_picker_s_schedule_picker__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_remoteservice_remoteservice__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_s_feedback_s_feedback__["a" /* SFeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_s_schedule_picker_s_schedule_picker__["a" /* SSchedulePickerPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_s_feedback_s_feedback__["a" /* SFeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_s_schedule_picker_s_schedule_picker__["a" /* SSchedulePickerPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_remoteservice_remoteservice__["a" /* RemoteserviceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_s_feedback_s_feedback__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_s_schedule_picker_s_schedule_picker__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.feedback = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_s_feedback_s_feedback__["a" /* SFeedbackPage */]);
    };
    MyApp.prototype.schedule = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_s_schedule_picker_s_schedule_picker__["a" /* SSchedulePickerPage */]);
    };
    MyApp.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Log out',
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Log out',
                    handler: function () {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\RR\Desktop\sidemenu\src\app\app.html"*/'<ion-menu [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <head> <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> </head>\n\n  <ion-content class="background">\n      <div class = "icon">\n          <button class = "profilebutton" menuClose (click)="showConfirm()">\n            <img src = "assets/imgs/profile.jpg" alt ="picture mo to">\n          </button>\n      </div>\n      <div class = "name">\n          <h3> <strong> Romie Santiago </strong> </h3>\n          <p> 1411831 </p>\n          <p> Computer Engineering <br> Department </p>\n      </div>\n      <div class = "buttons">\n         <ion-list>\n              <ion-item style="background-color: rgba(0,0,0,0.15)">\n                Options\n              </ion-item>\n              <button ion-item menuClose (click)="schedule()">\n                Schedule Appointment\n              </button>\n              <button ion-item>\n                View Available Schedule\n              </button>\n              <button ion-item>\n                Help\n              </button>\n              <button menuClose ion-item (click)="feedback()">\n                Feedback\n              </button>\n              <button menuClose ion-item (click)="showConfirm()">\n                Log out\n              </button>\n         </ion-list>\n      </div>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\RR\Desktop\sidemenu\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
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
  Generated class for the RemoteserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var RemoteserviceProvider = (function () {
    function RemoteserviceProvider(http) {
        this.http = http;
        console.log('Hello RemoteserviceProvider Provider');
    }
    Object.defineProperty(RemoteserviceProvider, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    RemoteserviceProvider.prototype.loadfeedback = function () {
        var url = "http://cabonagua.pythonanywhere.com/tutorial/feedback/";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    RemoteserviceProvider.prototype.loadaccounts = function () {
        var url = "http://127.0.0.1:8000/tutorial/accounts/";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    RemoteserviceProvider.prototype.loadusers = function () {
        var url = "http://127.0.0.1:8000/tutorial/userprofile/";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    return RemoteserviceProvider;
}());
RemoteserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RemoteserviceProvider);

//# sourceMappingURL=remoteservice.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map