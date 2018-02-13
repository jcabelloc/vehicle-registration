webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<br>\n<div class=\"container\">\n        <flash-messages></flash-messages>\n        <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_form_search_form_component__ = __webpack_require__("../../../../../src/app/components/search-form/search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_eligibility_eligibility_component__ = __webpack_require__("../../../../../src/app/components/eligibility/eligibility.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_detail_detail_component__ = __webpack_require__("../../../../../src/app/components/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_vehicle_main_vehicle_main_component__ = __webpack_require__("../../../../../src/app/components/vehicle-main/vehicle-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_vehicle_detail_vehicle_detail_component__ = __webpack_require__("../../../../../src/app/components/vehicle-detail/vehicle-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_vehicle_search_vehicle_search_component__ = __webpack_require__("../../../../../src/app/components/vehicle-search/vehicle-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_vehicle_eligibility_service__ = __webpack_require__("../../../../../src/app/services/vehicle-eligibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_eligibility_data_service__ = __webpack_require__("../../../../../src/app/services/eligibility-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_vehicle_map_vehicle_map_component__ = __webpack_require__("../../../../../src/app/components/vehicle-map/vehicle-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'owner', component: __WEBPACK_IMPORTED_MODULE_14__components_eligibility_eligibility_component__["a" /* EligibilityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'vehicle', component: __WEBPACK_IMPORTED_MODULE_16__components_vehicle_main_vehicle_main_component__["a" /* VehicleMainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_search_form_search_form_component__["a" /* SearchFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_eligibility_eligibility_component__["a" /* EligibilityComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_vehicle_main_vehicle_main_component__["a" /* VehicleMainComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_vehicle_detail_vehicle_detail_component__["a" /* VehicleDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_vehicle_search_vehicle_search_component__["a" /* VehicleSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_vehicle_map_vehicle_map_component__["a" /* VehicleMapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase, 'team6'),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyBeqddbw1nWwzoJVlPLmLgg52stHtqj16g' })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_eligibility_data_service__["a" /* EligibilityDataService */],
            __WEBPACK_IMPORTED_MODULE_20__services_vehicle_eligibility_service__["a" /* VehicleEligibilityService */],
            __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<table class=\"table table-striped\" >\n      <thead>\n        <tr>\n          <th>#</th>\n          <th class=\"w-7 text-center\" >Reported Date</th>\n          <th class=\"w-12 text-center\">Charge</th>\n          <th class=\"w-10 text-center\">Category</th>\n          <th class=\"w-7 text-center\">Level of Offense</th>\n          <th class=\"w-7 text-center\">Charges Pending</th>\n          <th class=\"w-40\">Violation Description</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor = \"let criminalDetail of criminalDetails\">\n              <td >1</td>\n              <td class=\"w-7 text-center\">{{criminalDetail.date}}</td>\n              <td class=\"w-12 text-center\">{{criminalDetail.charge}}</td>\n              <td class=\"w-10 text-center\">{{criminalDetail.category}}</td>\n              <td class=\"w-7 text-center\">{{criminalDetail.levelOfOffense}}</td>\n              <td class=\"w-7 text-center\">{{criminalDetail.chargesPending}}</td>\n              <td class=\"w-40\">{{criminalDetail.description}}</td>\n          </tr>\n      </tbody>\n  </table>\n"

/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_eligibility_data_service__ = __webpack_require__("../../../../../src/app/services/eligibility-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailComponent = (function () {
    function DetailComponent(eligibilityDataService) {
        this.eligibilityDataService = eligibilityDataService;
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.showDetail = function () {
        var _this = this;
        this.eligibilityDataService.getCriminalDetails(this.driverLicense).subscribe(function (result) {
            _this.criminalDetails = result;
        });
    };
    return DetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('driverLicense'),
    __metadata("design:type", String)
], DetailComponent.prototype, "driverLicense", void 0);
DetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__("../../../../../src/app/components/detail/detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/detail/detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_eligibility_data_service__["a" /* EligibilityDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_eligibility_data_service__["a" /* EligibilityDataService */]) === "function" && _a || Object])
], DetailComponent);

var _a;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/eligibility/eligibility.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/eligibility/eligibility.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n      <app-search-form (driverLicenseObtained)=\"showEligibility($event)\"></app-search-form>\n      <br>\n    </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"card\" [hidden]=\"isEmpty\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Eligibility result</h5>\n      </div>\n      <div class=\"card-block\">\n          <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">Driver License: {{eligibility?.driverLicense}}</li>\n              <li *ngIf=\"showAccessDetail\" class=\"list-group-item\">Name: {{eligibility?.name}}</li>\n              <li *ngIf=\"showAccessDetail && showPhone\" class=\"list-group-item\">Phone: {{eligibility?.phone}}</li>\n              <li *ngIf=\"showAccessDetail && showEmail\" class=\"list-group-item\">Email: {{eligibility?.email}}</li>\n            </ul>\n        <br>\n        <h5 class=\"card-text\">{{eligibility?.message}}</h5>\n        <br>\n        <div *ngIf=\"showAccessDetail\" >\n          <a href=\"\" routerLink=\"/owner/\" class=\"btn btn-primary\" (click)=\"showDetail(); detail.showDetail()\">Detail</a>\n          <a  href=\"\" routerLink=\"/owner/\" class=\"btn btn-primary\" (click)=\"hidePicture=!hidePicture\">Picture</a>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-2\"> \n    <div class=\"card\"  [hidden]=\"hidePicture\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Picture</h5>\n      </div>\n      <img class=\"card-img-top\" src={{eligibility.picture}} alt=\"Card image cap\">\n      <div class=\"card-body\">\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n      <app-detail [hidden] = \"hideDetail\" [driverLicense]=\"eligibility.driverLicense\" #detail></app-detail>\n  </div>\n</div>  "

/***/ }),

/***/ "../../../../../src/app/components/eligibility/eligibility.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EligibilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_eligibility_data_service__ = __webpack_require__("../../../../../src/app/services/eligibility-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EligibilityComponent = (function () {
    function EligibilityComponent(eligibilityDataService) {
        this.eligibilityDataService = eligibilityDataService;
        this.eligibility = {
            name: '',
            driverLicense: '',
            resultCode: 0,
            message: 'Default',
            email: "",
            phone: "",
            picture: ""
        };
        this.isEmpty = true;
        this.hideDetail = true;
        this.hidePicture = true;
        this.eligibility = {
            name: '',
            driverLicense: 'Default',
            resultCode: 0,
            message: 'Default',
            email: "",
            phone: "",
            picture: ""
        };
    }
    EligibilityComponent.prototype.ngOnInit = function () {
    };
    EligibilityComponent.prototype.showEligibility = function (driverLicense) {
        var _this = this;
        this.eligibilityDataService.getEligibility(driverLicense).then(function (eligibility) {
            _this.eligibility = eligibility;
            _this.isEmpty = false;
            _this.hideDetail = true;
            _this.hidePicture = true;
            _this.showEmail = false;
            _this.showPhone = false;
            _this.showAccessDetail = true;
            if (_this.eligibility.resultCode == 101) {
                _this.showAccessDetail = false;
            }
            if (_this.eligibility.email != null && _this.eligibility.email.length > 0)
                _this.showEmail = true;
            if (_this.eligibility.phone != null && _this.eligibility.phone.length > 0)
                _this.showPhone = true;
        });
    };
    EligibilityComponent.prototype.showDetail = function () {
        this.hideDetail = false;
    };
    return EligibilityComponent;
}());
EligibilityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-eligibility',
        template: __webpack_require__("../../../../../src/app/components/eligibility/eligibility.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/eligibility/eligibility.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_eligibility_data_service__["a" /* EligibilityDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_eligibility_data_service__["a" /* EligibilityDataService */]) === "function" && _a || Object])
], EligibilityComponent);

var _a;
//# sourceMappingURL=eligibility.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-3\">Eligibility for Vehicle Registration</h1>\n  <p class=\"lead\">The Department of Motor Vehicles (DMV) for the State of New York seeks to develop a robust system to validate the criteria to permit a legal vehicle registration at the DMV office.</p>\n  <hr class=\"my-4\">\n  <p>To determine if the owner is legally permitted to register the vehicle in question, this system perfoms several checks. Also this system will check if the vehicle currently holds an existing registration by verifying it against the existing vehicle database..</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" routerLink=\"/owner\" role=\"button\">Begin</a>\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <img class=\"d-block mx-auto\" src=\"/assets/img/logo.jpg\" alt=\"\">\n        <h1 class=\"text-center\">Login</h1>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n          </div>\n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.flashMessagesService.show('You are logged in', {
                cssClass: 'alert-success', timeout: 2500
            });
            _this.router.navigate(['/home']);
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, {
                cssClass: 'alert-danger', timeout: 2500
            });
            _this.router.navigate(['/login']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsDefault\" aria-controls=\"navbarsDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\" routerLink=\"/home\">Eligibility Verification</a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/home\">Home </a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/owner\">Owner</a>\n          </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/vehicle\">Vehicle</a>\n        </li>\n        <li *ngIf=\"!isLoggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n        </li>\n  \n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" >{{loggedInUser}}</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/login\" (click)=\"onLogoutClick()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', {
            cssClass: 'alert-success', timeout: 2500
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.getToken = function () {
        var _this = this;
        this.authService.getToken()
            .then(function (res) {
            _this.flashMessagesService.show('Your token is: ' + res, {
                cssClass: 'alert-success', timeout: 6000
            });
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, {
                cssClass: 'alert-danger', timeout: 6000
            });
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-form/search-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header\">Determine Owner Eligibility</h3>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" #f=\"ngForm\" novalidate (submit)=\"onSubmit(f)\">\n      <label for=\"inlineFormInput\">Driver License</label>\n      <input \n        type=\"text\" \n        class=\"form-control mb-2 mx-sm-3 mr-sm-2 mb-sm-0\" \n        id=\"inlineFormInput\" \n        placeholder=\"99999999\"\n        [(ngModel)]=\"driverLicense\" \n        name=\"driverLicense\"\n        #dl=\"ngModel\"\n        minlength=\"6\"\n        maxlength=\"8\"\n        required\n        >\n     \n      <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\n    </form>\n    <br>\n    <div *ngIf=\"dl.errors?.required && dl.touched\" class=\"alert alert-danger\">Driver license is required</div>\n    <div *ngIf=\"dl.errors?.minlength && dl.touched\" class=\"alert alert-danger\">Driver license should be at least 6 numbers</div>\n    <div *ngIf=\"dl.errors?.maxlength && dl.touched\" class=\"alert alert-danger\">Driver license should be at most 9 numbers</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchFormComponent = (function () {
    function SearchFormComponent(flashMessagesService) {
        this.flashMessagesService = flashMessagesService;
        this.driverLicenseObtained = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!Number(value.driverLicense)) {
            valid = false;
        }
        if (valid) {
            this.getEligibility();
        }
        else {
            this.flashMessagesService.show('Invalid Submit', {
                cssClass: 'alert-danger', timeout: 2000
            });
            console.log('Form is invalid ' + value.driverLicense);
        }
    };
    SearchFormComponent.prototype.getEligibility = function () {
        this.driverLicenseObtained.emit(this.driverLicense);
    };
    return SearchFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SearchFormComponent.prototype, "driverLicenseObtained", void 0);
SearchFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-form',
        template: __webpack_require__("../../../../../src/app/components/search-form/search-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-form/search-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object])
], SearchFormComponent);

var _a;
//# sourceMappingURL=search-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vehicle-detail/vehicle-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vehicle-detail/vehicle-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<table class=\"table table-striped\" >\n      <thead>\n        <tr>\n          <th>#</th>\n          <th class=\"w-15\">Type of Record</th>\n          <th class=\"w-15 text-center\" >Vehicle Make</th>\n          <th class=\"w-15 text-center\" >Reported Date</th>\n          <th class=\"w-20\" >Street Reference</th>\n          <th class=\"w-10 text-center\" >Location</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor = \"let vehicleRecord of vehicleRecords\">\n              <th scope=\"row\">1</th>\n              <td class=\"w-15\">{{vehicleRecord.recordType}}</td>\n              <td class=\"w-15 text-center\">{{vehicleRecord.vehicleMake}}</td>\n              <td class=\"w-15 text-center\">{{vehicleRecord.dateReported}}</td>\n              <td class=\"w-20\">{{vehicleRecord.streetName}}</td>\n              <td class=\"w-10 text-center\"><a href=\"\" routerLink=\"/vehicle/\" (click)=\"map.showMap()\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i></a></td>\n          </tr>\n      </tbody>\n  </table>\n\n  <app-vehicle-map [hidden] = \"map.hideMap\" [lat] = \"lat\" [lng] = \"lng\" #map></app-vehicle-map>\n  "

/***/ }),

/***/ "../../../../../src/app/components/vehicle-detail/vehicle-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_eligibility_service__ = __webpack_require__("../../../../../src/app/services/vehicle-eligibility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleDetailComponent = (function () {
    function VehicleDetailComponent(vehicleEligibilityService) {
        this.vehicleEligibilityService = vehicleEligibilityService;
    }
    VehicleDetailComponent.prototype.ngOnInit = function () {
    };
    VehicleDetailComponent.prototype.showDetail = function () {
        var _this = this;
        this.vehicleEligibilityService.getVehicleEligibility(this.vin).subscribe(function (result) {
            _this.vehicleEligibility = result;
            _this.vehicleRecords = _this.vehicleEligibility.vehicleRecords;
            _this.lat = _this.vehicleRecords[0].lat;
            _this.lng = _this.vehicleRecords[0].lng;
        });
    };
    return VehicleDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('vin'),
    __metadata("design:type", String)
], VehicleDetailComponent.prototype, "vin", void 0);
VehicleDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-detail',
        template: __webpack_require__("../../../../../src/app/components/vehicle-detail/vehicle-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vehicle-detail/vehicle-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vehicle_eligibility_service__["a" /* VehicleEligibilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vehicle_eligibility_service__["a" /* VehicleEligibilityService */]) === "function" && _a || Object])
], VehicleDetailComponent);

var _a;
//# sourceMappingURL=vehicle-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vehicle-main/vehicle-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vehicle-main/vehicle-main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-vehicle-search (vinObtained)=\"showVehicleEligibility($event)\"></app-vehicle-search>\n<br>\n<div class=\"card\" [hidden]=\"isEmpty\">\n    <div class=\"card-header\">\n      <h5 class=\"card-title\">Eligibility result</h5>\n    </div>\n    <div class=\"card-block\">\n      <h6 class=\"card-title\">VIN: {{vehicleEligibility?.vin}}</h6>\n      <h1></h1>\n      <p class=\"card-text\">{{vehicleEligibility?.message}}</p>\n      <a *ngIf = \"showDetailButton\" href=\"\" routerLink=\"/vehicle/\" class=\"btn btn-primary\" (click)=\"showDetail(); detail.showDetail()\">Detail</a>\n    </div>\n  </div>\n\n  <app-vehicle-detail [hidden] = \"hideDetail\" [vin]=\"vehicleEligibility.vin\" #detail></app-vehicle-detail>\n"

/***/ }),

/***/ "../../../../../src/app/components/vehicle-main/vehicle-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_eligibility_service__ = __webpack_require__("../../../../../src/app/services/vehicle-eligibility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleMainComponent = (function () {
    function VehicleMainComponent(vehicleEligibilityService) {
        this.vehicleEligibilityService = vehicleEligibilityService;
        this.isEmpty = true;
        this.hideDetail = true;
        this.showDetailButton = false;
        this.vehicleEligibility = {
            vin: '',
            resultCode: 0,
            message: '',
            vehicleRecords: []
        };
    }
    VehicleMainComponent.prototype.ngOnInit = function () {
    };
    VehicleMainComponent.prototype.showVehicleEligibility = function (vin) {
        var _this = this;
        this.vehicleEligibilityService.getVehicleEligibility(vin).subscribe(function (vehicleEligibility) {
            _this.showDetailButton = false;
            _this.vehicleEligibility = vehicleEligibility;
            _this.isEmpty = false;
            _this.hideDetail = true;
            if (_this.vehicleEligibility.vehicleRecords.length > 0)
                _this.showDetailButton = true;
        });
    };
    VehicleMainComponent.prototype.showDetail = function () {
        this.hideDetail = false;
    };
    return VehicleMainComponent;
}());
VehicleMainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-main',
        template: __webpack_require__("../../../../../src/app/components/vehicle-main/vehicle-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vehicle-main/vehicle-main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vehicle_eligibility_service__["a" /* VehicleEligibilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vehicle_eligibility_service__["a" /* VehicleEligibilityService */]) === "function" && _a || Object])
], VehicleMainComponent);

var _a;
//# sourceMappingURL=vehicle-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vehicle-map/vehicle-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vehicle-map/vehicle-map.component.html":
/***/ (function(module, exports) {

module.exports = "<h6>{{ title }}</h6>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n   [zoom]=\"zoom\"\n      [disableDefaultUI]=\"false\"\n      [zoomControl]=\"false\"\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/components/vehicle-map/vehicle-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleMapComponent = (function () {
    function VehicleMapComponent() {
        this.title = 'Vehicle Location';
    }
    VehicleMapComponent.prototype.ngOnInit = function () {
        this.hideMap = true;
    };
    VehicleMapComponent.prototype.showMap = function () {
        this.agmMap.triggerResize();
        this.hideMap = !this.hideMap;
    };
    return VehicleMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lat'),
    __metadata("design:type", Number)
], VehicleMapComponent.prototype, "lat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lng'),
    __metadata("design:type", Number)
], VehicleMapComponent.prototype, "lng", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */]) === "function" && _a || Object)
], VehicleMapComponent.prototype, "agmMap", void 0);
VehicleMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-map',
        template: __webpack_require__("../../../../../src/app/components/vehicle-map/vehicle-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vehicle-map/vehicle-map.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VehicleMapComponent);

var _a;
//# sourceMappingURL=vehicle-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vehicle-search/vehicle-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vehicle-search/vehicle-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <h3 class=\"card-header\">Determine Vehicle Eligibility</h3>\n    <div class=\"card-block\">\n      <form class=\"form-inline\" #f=\"ngForm\" novalidate (submit)=\"onSubmit(f)\">\n        <label for=\"inlineFormInput\"> VIN  </label>\n        <input \n          type=\"text\" \n          class=\"form-control mx-sm-3 mb-2 mr-sm-2 mb-sm-0\" \n          id=\"inlineFormInput\" \n          placeholder=\"UMWK36M11RVXKL1II\" \n          style=\"text-transform:uppercase\"\n          [(ngModel)]=\"vin\" \n          name=\"vin\"\n          #vn=\"ngModel\"\n          minlength=\"12\"\n          maxlength=\"17\"\n          required\n          >\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\n      </form>\n      <br>\n      <div *ngIf=\"vn.errors?.required && vn.touched\" class=\"alert alert-danger\">VIN is required</div>\n      <div *ngIf=\"vn.errors?.minlength && vn.touched\" class=\"alert alert-danger\">VIN should be at least 12 characteres</div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/vehicle-search/vehicle-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleSearchComponent = (function () {
    function VehicleSearchComponent(flashMessagesService) {
        this.flashMessagesService = flashMessagesService;
        this.vinObtained = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VehicleSearchComponent.prototype.ngOnInit = function () {
    };
    VehicleSearchComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.getVehicleEligibility();
        }
        else {
            this.flashMessagesService.show('Invalid Submit', {
                cssClass: 'alert-danger', timeout: 2000
            });
            console.log('Form is invalid ' + value.vin);
        }
    };
    VehicleSearchComponent.prototype.getVehicleEligibility = function () {
        this.vinObtained.emit(this.vin);
    };
    return VehicleSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], VehicleSearchComponent.prototype, "vinObtained", void 0);
VehicleSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-search',
        template: __webpack_require__("../../../../../src/app/components/vehicle-search/vehicle-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vehicle-search/vehicle-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object])
], VehicleSearchComponent);

var _a;
//# sourceMappingURL=vehicle-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.currentUser.getIdToken(/* forceRefresh */ true)
                .then(function (userToken) { return resolve(userToken); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/eligibility-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EligibilityDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http } from '@angular/http';



var EligibilityDataService = (function () {
    function EligibilityDataService(http, 
        //public http:Http,
        authService) {
        this.http = http;
        this.authService = authService;
    }
    EligibilityDataService.prototype.getEligibility = function (driverLicense) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:8080/eligibility?driverLicense=' + driverLicense)
                .toPromise()
                .then(function (res) { return resolve(res); });
        });
    };
    EligibilityDataService.prototype.getCriminalHistories = function (driverLicense) {
        return this.http.get('http://localhost:8080/criminalHistories?driverLicense=' + driverLicense);
        //.map(res => res.json());
    };
    EligibilityDataService.prototype.getCriminalDetails = function (driverLicense) {
        return this.http.get('http://localhost:8080/criminalDetail?driverLicense=' + driverLicense);
        //.map(res => res.json());
    };
    return EligibilityDataService;
}());
EligibilityDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], EligibilityDataService);

var _a, _b;
//# sourceMappingURL=eligibility-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/vehicle-eligibility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleEligibilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleEligibilityService = (function () {
    function VehicleEligibilityService(http) {
        this.http = http;
    }
    VehicleEligibilityService.prototype.getVehicleEligibility = function (vin) {
        return this.http.get('http://localhost:8080/vehicleEligibility?vin=' + vin)
            .map(function (res) { return res.json(); });
    };
    return VehicleEligibilityService;
}());
VehicleEligibilityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], VehicleEligibilityService);

var _a;
//# sourceMappingURL=vehicle-eligibility.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD2vXhF5g2pGmRS19FvLmUOPwv7kgHcWy4",
        authDomain: "adm-team6.firebaseapp.com",
        databaseURL: "https://adm-team6.firebaseio.com",
        projectId: "adm-team6",
        storageBucket: "adm-team6.appspot.com",
        messagingSenderId: "124564159563"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map