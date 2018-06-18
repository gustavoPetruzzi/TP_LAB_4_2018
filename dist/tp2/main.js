(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_remiseros_remisero_remisero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/remiseros/remisero/remisero.component */ "./src/app/componentes/remiseros/remisero/remisero.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cliente/cliente.component */ "./src/app/cliente/cliente.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _componentes_remiseros_remisero_asignados_remisero_asignados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/remiseros/remisero-asignados/remisero-asignados.component */ "./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.ts");
/* harmony import */ var _componentes_barralateral_barralateral_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/barralateral/barralateral.component */ "./src/app/componentes/barralateral/barralateral.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/clientes/cliente-nuevo/cliente-nuevo.component */ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.ts");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/ngx-dist/src/index.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_captcha__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//reCaptcha

// calendario

function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _componentes_remiseros_remisero_remisero_component__WEBPACK_IMPORTED_MODULE_3__["RemiseroComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
                _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_11__["ClienteComponent"],
                _componentes_remiseros_remisero_asignados_remisero_asignados_component__WEBPACK_IMPORTED_MODULE_13__["RemiseroAsignadosComponent"],
                _componentes_barralateral_barralateral_component__WEBPACK_IMPORTED_MODULE_14__["BarralateralComponent"],
                _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_16__["ClienteNuevoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost                                                                                                                                               '],
                        blacklistedRoutes: ['localhost:3001/auth/']
                    }
                }),
                ngx_captcha__WEBPACK_IMPORTED_MODULE_17__["NgxCaptchaModule"].forRoot({
                    reCaptcha2SiteKey: '6Lf4rF4UAAAAAPiiMTDNqSA-8mQUd9XK1T_pdKdG',
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_9__["RuteandoModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__["LeafletModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cliente/cliente.component.css":
/*!***********************************************!*\
  !*** ./src/app/cliente/cliente.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cliente/cliente.component.html":
/*!************************************************!*\
  !*** ./src/app/cliente/cliente.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n   <div class=\"container\">\n        <div class=\"jumbotron\">\n            <div class=\"row\">\n                <div class=\"col-sm d-flex align-items-stretch\" *ngIf=\"viajeEncurso\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('curso')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viaje en curso</h5>\n                            <p class=\"card-text\">¡Mira los detalles del viaje que estas realizando!</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('nuevo')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Nuevo viaje</h5>\n                            <p class=\"card-text\">Reserva un nuevo Viaje!</p>\n                        </div>\n                    </div>                    \n                </div>                \n                <div class=\"col-sm d-flex align-items-stretch \">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('reservados')\">\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes reservados</h5>\n                            <p class=\"card-text\"> Ve la lista de los proximos viajes</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('terminados')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes Terminados</h5>\n                            <p class=\"card-text\"> Ve la lista de los viajes que ya realizaste</p>\n                        </div>\n                    </div>                      \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem; \" (click)=\"ir('asignados')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Configuracion y datos de la cuenta</h5>\n                            <p class=\"card-text\">Consulta tus datos y configura tu cuenta</p>\n                        </div>\n                    </div>                      \n                </div>\n            </div>                        \n        </div>\n   </div>"

/***/ }),

/***/ "./src/app/cliente/cliente.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cliente/cliente.component.ts ***!
  \**********************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClienteComponent = /** @class */ (function () {
    function ClienteComponent(ruteador) {
        this.ruteador = ruteador;
    }
    ClienteComponent.prototype.ngOnInit = function () {
    };
    ClienteComponent.prototype.ir = function (lugar) {
        switch (lugar) {
            case 'reservados':
                this.ruteador.navigate(['/cliente/reservados']);
                break;
            case 'nuevo':
                this.ruteador.navigate(['/cliente/nuevo']);
                break;
            default:
                break;
        }
    };
    ClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente',
            template: __webpack_require__(/*! ./cliente.component.html */ "./src/app/cliente/cliente.component.html"),
            styles: [__webpack_require__(/*! ./cliente.component.css */ "./src/app/cliente/cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "./src/app/componentes/barralateral/barralateral.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/barralateral/barralateral.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-dark\">\n  <!-- Cambiarlo por el output -->\n  <a class=\"navbar-brand\" href=\"#\">Sticky top</a>\n  <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n    <a class=\"navbar-brand\" [routerLink]=\"[menuItem.path]\" (click)=\"controlarBarra()\">\n        {{menuItem.title}}\n    </a>\n  </li>\n  <button class=\"btn btn-danger my-2 my-sm-0\"(click)=\"salir()\">Salir</button>\n</nav>"

/***/ }),

/***/ "./src/app/componentes/barralateral/barralateral.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/componentes/barralateral/barralateral.component.ts ***!
  \********************************************************************/
/*! exports provided: RutasRemisero, RutasCliente, RutasEncargado, RutasPruebas, BarralateralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasRemisero", function() { return RutasRemisero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasCliente", function() { return RutasCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasEncargado", function() { return RutasEncargado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasPruebas", function() { return RutasPruebas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarralateralComponent", function() { return BarralateralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RutasRemisero = [
    { path: '/remisero', title: 'Menu principal', icon: 'pe-7s-graph', class: '' },
    { path: '/login', title: 'Viajes en curso', icon: 'pe-7s-graph', class: '' },
    { path: '/remisero/asignados', title: 'Viajes asignados', icon: 'pe-7s-user', class: '' },
    { path: '/cliente', title: 'Viajes Terminados', icon: 'pe-7s-science', class: '' },
];
var RutasCliente = [
    { path: '/cliente', title: 'Menu Principal', icon: 'pe-7s-graph', class: '' },
    { path: '/cliente/nuevo', title: 'Nuevo Viaje', icon: 'pe-7s-graph', class: '' },
    { path: '/remisero', title: 'Viajes Terminados', icon: 'pe-7s-user', class: '' },
    { path: '/error', title: 'error', icon: 'pe-7s-rocket', class: 'active-pro' },
];
var RutasEncargado = [
    { path: '/login', title: 'login', icon: 'pe-7s-graph', class: '' },
    { path: '/remisero', title: 'Remisero', icon: 'pe-7s-user', class: '' },
    { path: '/cliente', title: 'cliente', icon: 'pe-7s-science', class: '' },
    { path: '/error', title: 'error', icon: 'pe-7s-rocket', class: 'active-pro' },
];
var RutasPruebas = [
    { path: '/login', title: 'login', icon: 'pe-7s-graph', class: '' },
    { path: '/remisero', title: 'Remisero', icon: 'pe-7s-user', class: '' },
    { path: '/cliente', title: 'cliente', icon: 'pe-7s-science', class: '' },
    { path: '/error', title: 'error', icon: 'pe-7s-rocket', class: 'active-pro' },
];
var BarralateralComponent = /** @class */ (function () {
    function BarralateralComponent(auth, ruteador) {
        this.auth = auth;
        this.ruteador = ruteador;
    }
    BarralateralComponent.prototype.ngOnInit = function () {
        this.controlarBarra();
    };
    BarralateralComponent.prototype.controlarBarra = function () {
        if (localStorage.getItem('token')) {
            var token = this.auth.obtenerToken();
            switch (token.data.tipo) {
                case 'remisero':
                    this.menuItems = RutasRemisero.filter(function (menuItem) { return menuItem; });
                    break;
                case 'cliente':
                    this.menuItems = RutasCliente.filter(function (menuItem) { return menuItem; });
                    break;
                case 'encargado':
                    this.menuItems = RutasEncargado.filter(function (menuItem) { return menuItem; });
                    break;
                default:
                    break;
            }
        }
        else {
            this.menuItems = RutasPruebas.filter(function (menuItem) { return menuItem; });
        }
    };
    BarralateralComponent.prototype.salir = function () {
        localStorage.setItem('token', "");
        this.ruteador.navigate(['/login']);
        this.controlarBarra();
    };
    BarralateralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barralateral',
            template: __webpack_require__(/*! ./barralateral.component.html */ "./src/app/componentes/barralateral/barralateral.component.html")
        }),
        __metadata("design:paramtypes", [_servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BarralateralComponent);
    return BarralateralComponent;
}());



/***/ }),

/***/ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <h1 class=\"text-center\"> ¡Reserva tu proximo viaje! </h1>\n        <form [formGroup]=\"viajeForm\">\n          <p-calendar ></p-calendar>\n\n          <div class=\"form-group\">\n            <label for=\"hora\">Hora</label>\n            <p-calendar [timeOnly]=\"true\"></p-calendar>\n            <div *ngIf=\"viajeForm.controls.hora.invalid\"\n                  class=\"alert alert-danger\">\n\n              <div *ngIf=\"viajeForm.controls.hora.required\">\n                hora is required.\n              </div>\n              <div *ngIf=\"viajeForm.controls.hora.minlength\">\n                hora must be at least 4 characters long.\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <ngx-recaptcha2\n              [size]=\"size\"\n              [hl]=\"lang\"\n              [theme]=\"theme\"\n              [type]=\"type\"\n              (expire)=\"handleExpire()\"\n              (success)=\"handleSuccess($event)\">\n            </ngx-recaptcha2>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!viajeForm.valid || !captchaOk\" >Ingresar</button>                    \n        </form>        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClienteNuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteNuevoComponent", function() { return ClienteNuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_captcha_captcha_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/captcha/captcha-service.service */ "./src/app/servicios/captcha/captcha-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClienteNuevoComponent = /** @class */ (function () {
    function ClienteNuevoComponent(captcha) {
        this.captcha = captcha;
    }
    ClienteNuevoComponent.prototype.ngOnInit = function () {
        this.viajeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
            ])
        });
    };
    ClienteNuevoComponent.prototype.handleSuccess = function (evento) {
        console.log(evento);
        this.captchaOk = true;
    };
    ClienteNuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-nuevo',
            template: __webpack_require__(/*! ./cliente-nuevo.component.html */ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.html"),
            styles: [__webpack_require__(/*! ./cliente-nuevo.component.css */ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_captcha_captcha_service_service__WEBPACK_IMPORTED_MODULE_2__["CaptchaServiceService"]])
    ], ClienteNuevoComponent);
    return ClienteNuevoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n\n"

/***/ }),

/***/ "./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RemiseroAsignadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemiseroAsignadosComponent", function() { return RemiseroAsignadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RemiseroAsignadosComponent = /** @class */ (function () {
    function RemiseroAsignadosComponent() {
    }
    RemiseroAsignadosComponent.prototype.ngOnInit = function () {
    };
    RemiseroAsignadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remisero-asignados',
            template: __webpack_require__(/*! ./remisero-asignados.component.html */ "./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.html"),
            styles: [__webpack_require__(/*! ./remisero-asignados.component.css */ "./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RemiseroAsignadosComponent);
    return RemiseroAsignadosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/remiseros/remisero/remisero.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero/remisero.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/remiseros/remisero/remisero.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero/remisero.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div *ngIf=\"viajesRemisero\">\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n            <div class=\"row\">\n                <div class=\"col-sm d-flex align-items-stretch\" *ngIf=\"viajeEncurso\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('asignados')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viaje en curso</h5>\n                            <p class=\"card-text\">¡Mira los detalles del viaje que estas realizando!</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\" *ngIf=\"!viajeEncurso\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('asignados')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">No esta realizando un viaje</h5>\n                            <p class=\"card-text\">Parece que no estas realizando un viaje, ¿Quieres ver los viajes?</p>\n                        </div>\n                    </div>                    \n                </div>                \n                <div class=\"col-sm d-flex align-items-stretch \">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('asignados')\">\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes Asignados</h5>\n                            <p class=\"card-text\"> Ve la lista de los proximos viajes</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('terminados')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes Terminados</h5>\n                            <p class=\"card-text\"> Ve la lista de los viajes que ya realizaste</p>\n                        </div>\n                    </div>                      \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem; \" (click)=\"ir('asignados')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Configuracion y datos de la cuenta</h5>\n                            <p class=\"card-text\">Consulta tus datos y configura tu cuenta</p>\n                        </div>\n                    </div>                      \n                </div>\n            </div>                        \n        </div>\n<div *ngIf=\"!viajesRemisero\">\n    <p> no se cargaron los viajes </p>\n</div>"

/***/ }),

/***/ "./src/app/componentes/remiseros/remisero/remisero.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero/remisero.component.ts ***!
  \**********************************************************************/
/*! exports provided: RemiseroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemiseroComponent", function() { return RemiseroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_remisero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/remisero.service */ "./src/app/servicios/remisero.service.ts");
/* harmony import */ var _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemiseroComponent = /** @class */ (function () {
    function RemiseroComponent(ruteador, auth, remiseroService) {
        this.ruteador = ruteador;
        this.auth = auth;
        this.remiseroService = remiseroService;
    }
    RemiseroComponent.prototype.ngOnInit = function () {
        this.datosRemisero();
    };
    RemiseroComponent.prototype.datosRemisero = function () {
        var _this = this;
        this.token = this.auth.obtenerToken();
        this.id = this.token.data.id;
        this.usuario = this.token.data.usuario;
        this.tipo = this.token.data.tipo;
        this.remiseroService.viajes(this.id)
            .subscribe(function (data) {
            _this.viajesRemisero = data;
            _this.viajesRemisero.forEach(function (element) {
                if (element.estado == 'transcurso') {
                    _this.viajeEncurso = element;
                }
            });
        });
    };
    RemiseroComponent.prototype.ir = function (lugar) {
        switch (lugar) {
            case 'asignados':
                this.ruteador.navigate(['/remisero/asignados']);
                break;
            case 'terminados':
                this.ruteador.navigate(['/remisero/terminados']);
                break;
            default:
                break;
        }
    };
    RemiseroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remisero',
            template: __webpack_require__(/*! ./remisero.component.html */ "./src/app/componentes/remiseros/remisero/remisero.component.html"),
            styles: [__webpack_require__(/*! ./remisero.component.css */ "./src/app/componentes/remiseros/remisero/remisero.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _servicios_remisero_service__WEBPACK_IMPORTED_MODULE_1__["RemiseroService"]])
    ], RemiseroComponent);
    return RemiseroComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\"  >Usuario </label>\n    <input type=\"email\" id=\"usuario\"\n         class=\"form-control\" [(ngModel)]=\"usuarioText\" name=\"usuario\" required pattern=\"[a-zA-Z][a-zA-Z ]+\"\n         #usuario=\"ngModel\" placeholder=\"Ingrese el usuario\">  \n    <div [hidden]=\"usuario.valid  || usuario.pristine\" class=\"alert alert-danger\">\n      <div [hidden]=\"!usuario.hasError('required')\">El usuario es requerido </div>\n      <div [hidden]=\"!usuario.hasError('pattern')\">Se requiere mas de un caracter </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\"  >Contraseña</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"passwordText\" id=\"exampleInputPassword1\" \n            required minlength=\"4\" #password=\"ngModel\" name=\"password\" placeholder=\"Contraseña\">\n    <div [hidden]=\"password.valid || password.pristine\"\n        class=\"alert alert-danger\">\n        <div [hidden]=\"!password.hasError('minlength')\">La clave es minimo de 8 caracteres</div>\n        <div [hidden]=\"!password.hasError('required')\">La clave es requerida</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <ngx-recaptcha2\n      [size]=\"size\"\n      [hl]=\"lang\"\n      [theme]=\"theme\"\n      [type]=\"type\"\n      (expire)=\"handleExpire()\"\n      (success)=\"handleSuccess($event)\">\n    </ngx-recaptcha2>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.form.valid || !captchaOk\" >Ingresar</button>\n</form> "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_loginservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/loginservice.service */ "./src/app/servicios/loginservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, ruta, ruteador, loginService) {
        this.auth = auth;
        this.ruta = ruta;
        this.ruteador = ruteador;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.captchaOk = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.loguear(this.usuarioText, this.passwordText)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            _this.decodificado = _this.auth.obtenerToken();
            if (_this.decodificado) {
                switch (_this.decodificado.data.tipo) {
                    case 'remisero':
                        _this.ruteador.navigate(['/remisero']);
                        break;
                    case 'cliente':
                        _this.ruteador.navigate(['/cliente']);
                        break;
                    case 'encargado':
                        _this.ruteador.navigate(['/encargado']);
                    default:
                        break;
                }
            }
        });
    };
    LoginComponent.prototype.handleSuccess = function (evento) {
        console.log(evento);
        this.captchaOk = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_loginservice_service__WEBPACK_IMPORTED_MODULE_1__["LoginserviceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ruteando/ruteando.module.ts ***!
  \*********************************************/
/*! exports provided: RuteandoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteandoModule", function() { return RuteandoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componentes_remiseros_remisero_remisero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/remiseros/remisero/remisero.component */ "./src/app/componentes/remiseros/remisero/remisero.component.ts");
/* harmony import */ var _componentes_remiseros_remisero_asignados_remisero_asignados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/remiseros/remisero-asignados/remisero-asignados.component */ "./src/app/componentes/remiseros/remisero-asignados/remisero-asignados.component.ts");
/* harmony import */ var _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/clientes/cliente-nuevo/cliente-nuevo.component */ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.ts");
/* harmony import */ var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cliente/cliente.component */ "./src/app/cliente/cliente.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../servicios/verificar-jwt.service */ "./src/app/servicios/verificar-jwt.service.ts");
/* harmony import */ var _servicios_verificarTipo_verificar_tipo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../servicios/verificarTipo/verificar-tipo.service */ "./src/app/servicios/verificarTipo/verificar-tipo.service.ts");
/* harmony import */ var _servicios_verificarTipo_verificar_tipo_cliente_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../servicios/verificarTipo/verificar-tipo-cliente.service */ "./src/app/servicios/verificarTipo/verificar-tipo-cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var miRuteo = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'remisero', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_9__["VerificarJWTService"], _servicios_verificarTipo_verificar_tipo_service__WEBPACK_IMPORTED_MODULE_10__["VerificarTipoService"]],
        children: [
            { path: '', component: _componentes_remiseros_remisero_remisero_component__WEBPACK_IMPORTED_MODULE_3__["RemiseroComponent"] },
            { path: 'asignados', component: _componentes_remiseros_remisero_asignados_remisero_asignados_component__WEBPACK_IMPORTED_MODULE_4__["RemiseroAsignadosComponent"] }
        ] },
    { path: 'cliente', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_9__["VerificarJWTService"], _servicios_verificarTipo_verificar_tipo_cliente_service__WEBPACK_IMPORTED_MODULE_11__["VerificarTipoClienteService"]],
        children: [
            { path: '', component: _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_6__["ClienteComponent"] },
            { path: 'nuevo', component: _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_5__["ClienteNuevoComponent"] }
        ] },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
];
var RuteandoModule = /** @class */ (function () {
    function RuteandoModule() {
    }
    RuteandoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(miRuteo)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
        })
    ], RuteandoModule);
    return RuteandoModule;
}());



/***/ }),

/***/ "./src/app/servicios/auth/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/auth/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.estaLogueado = function () {
        try {
            this._token = localStorage.getItem('token');
            var rta = this.jwtHelper.isTokenExpired(this._token);
            console.log(this.jwtHelper.isTokenExpired(this._token));
            return !rta;
        }
        catch (error) {
            console.log(this.jwtHelper.isTokenExpired(this._token));
            return false;
        }
    };
    AuthService.prototype.obtenerToken = function () {
        try {
            this._token = localStorage.getItem('token');
            return this.jwtHelper.decodeToken(this._token);
        }
        catch (error) {
            return undefined;
        }
    };
    AuthService.prototype.obtenerExpirationDate = function () {
        try {
            this._token = localStorage.getItem('token');
            return this.jwtHelper.getTokenExpirationDate(this._token);
        }
        catch (error) {
            return null;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/servicios/captcha/captcha-service.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/servicios/captcha/captcha-service.service.ts ***!
  \**************************************************************/
/*! exports provided: CaptchaServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaServiceService", function() { return CaptchaServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nuevohttp.service */ "./src/app/servicios/nuevohttp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaptchaServiceService = /** @class */ (function () {
    function CaptchaServiceService(nuevoHttp) {
        this.nuevoHttp = nuevoHttp;
    }
    CaptchaServiceService.prototype.obtenerCaptcha = function () {
    };
    CaptchaServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"]])
    ], CaptchaServiceService);
    return CaptchaServiceService;
}());



/***/ }),

/***/ "./src/app/servicios/loginservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/servicios/loginservice.service.ts ***!
  \***************************************************/
/*! exports provided: LoginserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginserviceService", function() { return LoginserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuevohttp.service */ "./src/app/servicios/nuevohttp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginserviceService = /** @class */ (function () {
    function LoginserviceService(nuevohttp) {
        this.nuevohttp = nuevohttp;
    }
    LoginserviceService.prototype.loguear = function (usuario, password) {
        var datos = "usuario=" + usuario + "&password=" + password;
        return this.nuevohttp.httpPostData('ingreso/in', datos);
    };
    LoginserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"]])
    ], LoginserviceService);
    return LoginserviceService;
}());



/***/ }),

/***/ "./src/app/servicios/nuevohttp.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/nuevohttp.service.ts ***!
  \************************************************/
/*! exports provided: NuevohttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevohttpService", function() { return NuevohttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NuevohttpService = /** @class */ (function () {
    function NuevohttpService(nuevoHttp) {
        this.nuevoHttp = nuevoHttp;
        //api = "http://localhost/backendTp2/index.php/";
        this.api = "http://remiseriagustavopetruzzi.000webhostapp.com/index.php/";
        this.cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
    }
    NuevohttpService.prototype.httpGet = function (url) {
        return this.nuevoHttp
            .get(this.api + url);
    };
    NuevohttpService.prototype.httpPostData = function (url, data) {
        return this.nuevoHttp
            .post(this.api + url, data, { headers: this.cabecera });
    };
    NuevohttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NuevohttpService);
    return NuevohttpService;
}());



/***/ }),

/***/ "./src/app/servicios/remisero.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/remisero.service.ts ***!
  \***********************************************/
/*! exports provided: RemiseroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemiseroService", function() { return RemiseroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuevohttp.service */ "./src/app/servicios/nuevohttp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemiseroService = /** @class */ (function () {
    function RemiseroService(nuevohttp) {
        this.nuevohttp = nuevohttp;
    }
    RemiseroService.prototype.listar = function () {
        return this.nuevohttp.httpGet("ingreso/token");
    };
    RemiseroService.prototype.viajes = function (idRemisero) {
        var token = localStorage.getItem('token');
        var datos = "id=" + idRemisero + "&token=" + token;
        return this.nuevohttp.httpPostData("remisero/viajes", datos);
    };
    RemiseroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"]])
    ], RemiseroService);
    return RemiseroService;
}());



/***/ }),

/***/ "./src/app/servicios/verificar-jwt.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/verificar-jwt.service.ts ***!
  \****************************************************/
/*! exports provided: VerificarJWTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarJWTService", function() { return VerificarJWTService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificarJWTService = /** @class */ (function () {
    function VerificarJWTService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    VerificarJWTService.prototype.canActivate = function (route, state) {
        if (this.auth.estaLogueado()) {
            return true;
        }
        else {
            this.router.navigate(['/error']);
            return !true;
        }
    };
    VerificarJWTService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerificarJWTService);
    return VerificarJWTService;
}());



/***/ }),

/***/ "./src/app/servicios/verificarTipo/verificar-tipo-cliente.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/servicios/verificarTipo/verificar-tipo-cliente.service.ts ***!
  \***************************************************************************/
/*! exports provided: VerificarTipoClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarTipoClienteService", function() { return VerificarTipoClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificarTipoClienteService = /** @class */ (function () {
    function VerificarTipoClienteService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    VerificarTipoClienteService.prototype.canActivate = function (route, state) {
        this.token = this.auth.obtenerToken();
        if (this.token.data.tipo == 'cliente') {
            return true;
        }
        else {
            this.router.navigate(['/error']);
            return !true;
        }
    };
    VerificarTipoClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerificarTipoClienteService);
    return VerificarTipoClienteService;
}());



/***/ }),

/***/ "./src/app/servicios/verificarTipo/verificar-tipo.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/servicios/verificarTipo/verificar-tipo.service.ts ***!
  \*******************************************************************/
/*! exports provided: VerificarTipoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarTipoService", function() { return VerificarTipoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificarTipoService = /** @class */ (function () {
    function VerificarTipoService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    VerificarTipoService.prototype.canActivate = function (route, state) {
        this.token = this.auth.obtenerToken();
        if (this.token.data.tipo == 'remisero') {
            return true;
        }
        else {
            this.router.navigate(['/error']);
            return !true;
        }
    };
    VerificarTipoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerificarTipoService);
    return VerificarTipoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gustavo/Escritorio/programming/angular6/TP_LAB_4_2018/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map