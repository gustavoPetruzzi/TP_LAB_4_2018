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
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _componentes_clientes_cliente_info_nuevo_cliente_info_nuevo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component */ "./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.ts");
/* harmony import */ var _componentes_encargado_principal_principal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/encargado/principal/principal.component */ "./src/app/componentes/encargado/principal/principal.component.ts");
/* harmony import */ var _componentes_encargado_remiseros_encargado_remiseros_encargado_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/encargado/remiseros-encargado/remiseros-encargado.component */ "./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.ts");
/* harmony import */ var _pipes_premium_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/premium.pipe */ "./src/app/pipes/premium.pipe.ts");
/* harmony import */ var _componentes_vehiculos_vista_vehiculos_vista_vehiculos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/vehiculos/vista-vehiculos/vista-vehiculos.component */ "./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.ts");
/* harmony import */ var _componentes_vehiculos_lista_vehiculos_lista_vehiculos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/vehiculos/lista-vehiculos/lista-vehiculos.component */ "./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.ts");
/* harmony import */ var _componentes_vehiculos_modificar_vehiculos_modificar_vehiculos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component */ "./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.ts");
/* harmony import */ var _componentes_vehiculos_nuevo_vehiculo_nuevo_vehiculo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component */ "./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_viajes_detalle_viajes_detalle_viajes_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/viajes/detalle-viajes/detalle-viajes.component */ "./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.ts");
/* harmony import */ var _componentes_viajes_vista_viajes_vista_viajes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/viajes/vista-viajes/vista-viajes.component */ "./src/app/componentes/viajes/vista-viajes/vista-viajes.component.ts");
/* harmony import */ var _pipes_viaje_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/viaje.pipe */ "./src/app/pipes/viaje.pipe.ts");
/* harmony import */ var _componentes_viajes_ver_viaje_ver_viaje_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/viajes/ver-viaje/ver-viaje.component */ "./src/app/componentes/viajes/ver-viaje/ver-viaje.component.ts");
/* harmony import */ var _componentes_encargado_remiseros_nuevo_remiseros_nuevo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./componentes/encargado/remiseros-nuevo/remiseros-nuevo.component */ "./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.ts");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _componentes_clientes_cliente_modificar_cliente_modificar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./componentes/clientes/cliente-modificar/cliente-modificar.component */ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.ts");
/* harmony import */ var _componentes_clientes_cliente_cancelar_cliente_cancelar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./componentes/clientes/cliente-cancelar/cliente-cancelar.component */ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.ts");
/* harmony import */ var _componentes_remiseros_remisero_rechazar_remisero_rechazar_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./componentes/remiseros/remisero-rechazar/remisero-rechazar.component */ "./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.ts");
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/captcha */ "./node_modules/primeng/captcha.js");
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(primeng_captcha__WEBPACK_IMPORTED_MODULE_44__);
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
                _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_16__["ClienteNuevoComponent"],
                _componentes_clientes_cliente_info_nuevo_cliente_info_nuevo_component__WEBPACK_IMPORTED_MODULE_21__["ClienteInfoNuevoComponent"],
                _componentes_encargado_principal_principal_component__WEBPACK_IMPORTED_MODULE_22__["PrincipalComponent"],
                _componentes_encargado_remiseros_encargado_remiseros_encargado_component__WEBPACK_IMPORTED_MODULE_23__["RemiserosEncargadoComponent"],
                _pipes_premium_pipe__WEBPACK_IMPORTED_MODULE_24__["PremiumPipe"],
                _componentes_vehiculos_vista_vehiculos_vista_vehiculos_component__WEBPACK_IMPORTED_MODULE_25__["VistaVehiculosComponent"],
                _componentes_vehiculos_lista_vehiculos_lista_vehiculos_component__WEBPACK_IMPORTED_MODULE_26__["ListaVehiculosComponent"],
                _componentes_vehiculos_modificar_vehiculos_modificar_vehiculos_component__WEBPACK_IMPORTED_MODULE_27__["ModificarVehiculosComponent"],
                _componentes_vehiculos_nuevo_vehiculo_nuevo_vehiculo_component__WEBPACK_IMPORTED_MODULE_28__["NuevoVehiculoComponent"],
                _componentes_viajes_detalle_viajes_detalle_viajes_component__WEBPACK_IMPORTED_MODULE_30__["DetalleViajesComponent"],
                _componentes_viajes_vista_viajes_vista_viajes_component__WEBPACK_IMPORTED_MODULE_31__["VistaViajesComponent"],
                _pipes_viaje_pipe__WEBPACK_IMPORTED_MODULE_32__["ViajePipe"],
                _componentes_viajes_ver_viaje_ver_viaje_component__WEBPACK_IMPORTED_MODULE_33__["VerViajeComponent"],
                _componentes_encargado_remiseros_nuevo_remiseros_nuevo_component__WEBPACK_IMPORTED_MODULE_34__["RemiserosNuevoComponent"],
                _componentes_clientes_cliente_modificar_cliente_modificar_component__WEBPACK_IMPORTED_MODULE_41__["ClienteModificarComponent"],
                _componentes_clientes_cliente_cancelar_cliente_cancelar_component__WEBPACK_IMPORTED_MODULE_42__["ClienteCancelarComponent"],
                _componentes_remiseros_remisero_rechazar_remisero_rechazar_component__WEBPACK_IMPORTED_MODULE_43__["RemiseroRechazarComponent"]
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
                _agm_core__WEBPACK_IMPORTED_MODULE_29__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCeoEzhaOnnzaVZpPGrcHb48vwKcyrJ9p4',
                    libraries: ["places", "geometry", "drawing"]
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_9__["RuteandoModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__["LeafletModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__["RadioButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_36__["MessageModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_35__["MessagesModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_37__["DropdownModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__["InputTextareaModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_39__["TooltipModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_40__["ButtonModule"],
                primeng_captcha__WEBPACK_IMPORTED_MODULE_44__["CaptchaModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clases/lugar.ts":
/*!*********************************!*\
  !*** ./src/app/clases/lugar.ts ***!
  \*********************************/
/*! exports provided: lugar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lugar", function() { return lugar; });
var lugar = /** @class */ (function () {
    function lugar(latitud, longitud) {
        if (latitud && longitud) {
            this.latitud = latitud;
            this.longitud = longitud;
        }
        else if (latitud) {
            this.latitud = latitud;
        }
        else if (longitud) {
            this.longitud = longitud;
        }
    }
    return lugar;
}());



/***/ }),

/***/ "./src/app/clases/usuario.ts":
/*!***********************************!*\
  !*** ./src/app/clases/usuario.ts ***!
  \***********************************/
/*! exports provided: usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuario", function() { return usuario; });
var usuario = /** @class */ (function () {
    function usuario(usuario, password, tipo, id) {
        if (id) {
            this.id = id;
        }
        else {
            this.id = -1;
        }
        this.usuario = usuario;
        this.password = password;
        this.tipo = tipo;
    }
    return usuario;
}());



/***/ }),

/***/ "./src/app/clases/vehiculo.ts":
/*!************************************!*\
  !*** ./src/app/clases/vehiculo.ts ***!
  \************************************/
/*! exports provided: vehiculo, marcas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehiculo", function() { return vehiculo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marcas", function() { return marcas; });
var vehiculo = /** @class */ (function () {
    function vehiculo(marca, modelo, anio, premium) {
        this.id = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.premium = premium;
        this.foto = "";
    }
    vehiculo.obtenerAnios = function () {
        var anios = new Array();
        for (var index = 1989; index < 2019; index++) {
            anios.push(index);
        }
        return anios;
    };
    return vehiculo;
}());

var marcas = ['chevrolet', 'ford', 'renault', 'BMW', 'fiat'];


/***/ }),

/***/ "./src/app/clases/viajeMaps.ts":
/*!*************************************!*\
  !*** ./src/app/clases/viajeMaps.ts ***!
  \*************************************/
/*! exports provided: viajeMaps, opcionesCancelar, opcionesRechazar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viajeMaps", function() { return viajeMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opcionesCancelar", function() { return opcionesCancelar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opcionesRechazar", function() { return opcionesRechazar; });
/* harmony import */ var _viajes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viajes */ "./src/app/clases/viajes.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var viajeMaps = /** @class */ (function (_super) {
    __extends(viajeMaps, _super);
    function viajeMaps(id, fecha, hora, estado, idCliente, monto, origen, destino, premium) {
        var _this = _super.call(this, id, fecha, hora, idCliente, estado) || this;
        _this.origen = origen;
        _this.destino = destino;
        _this.premium = _this.formatearPremium(premium);
        _this.monto = parseFloat(_this.calcularMonto());
        return _this;
    }
    viajeMaps.prototype.calcularDistancia = function () {
        var origenGoogle = new google.maps.LatLng(this.origen.latitud, this.origen.longitud);
        var destinoGoogle = new google.maps.LatLng(this.destino.latitud, this.destino.longitud);
        var distancia = google.maps.geometry.spherical.computeDistanceBetween(origenGoogle, destinoGoogle);
        distancia = distancia / 1000;
        return distancia;
    };
    viajeMaps.prototype.calcularMonto = function () {
        return (viajeMaps.precio * this.calcularDistancia()).toFixed(2);
    };
    viajeMaps.prototype.formatearPremium = function (tipo) {
        if (tipo) {
            return 1;
        }
        return 0;
    };
    viajeMaps.precio = 30;
    return viajeMaps;
}(_viajes__WEBPACK_IMPORTED_MODULE_0__["viaje"]));

var opcionesCancelar = ['Problemas personales', 'Demora del chofer', 'Otro'];
var opcionesRechazar = ['Problemas personales', 'Problemas mecanicos', 'Otro'];


/***/ }),

/***/ "./src/app/clases/viajes.ts":
/*!**********************************!*\
  !*** ./src/app/clases/viajes.ts ***!
  \**********************************/
/*! exports provided: viaje */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viaje", function() { return viaje; });
var viaje = /** @class */ (function () {
    function viaje(id, fecha, hora, idCliente, estado) {
        if (typeof (fecha) === "string" && typeof (hora) === "string") {
            this.fecha = fecha;
            this.hora = hora;
        }
        else {
            this.fecha = this.formatearFecha(fecha);
            this.hora = this.formatearHora(hora);
        }
        this.idCliente = idCliente;
        this.estado = estado;
        this.id = id;
    }
    viaje.prototype.formatearFecha = function (fecha) {
        var formateada = fecha.getUTCFullYear() + '-' +
            ('00' + (fecha.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + fecha.getUTCDate()).slice(-2) + ' ' +
            ('00' + fecha.getUTCHours()).slice(-2) + ':' +
            ('00' + fecha.getUTCMinutes()).slice(-2) + ':' +
            ('00' + fecha.getUTCSeconds()).slice(-2);
        formateada = formateada.split(' ')[0];
        return formateada;
    };
    viaje.prototype.formatearHora = function (hora) {
        var horaFormateada = hora.toTimeString().split(' ')[0];
        return horaFormateada;
    };
    return viaje;
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

module.exports = "<app-barralateral></app-barralateral>\n   <div class=\"container\">\n        <div class=\"jumbotron\">\n            <div class=\"row row-center\">\n                <div class=\"col-sm d-flex align-items-stretch\" *ngIf=\"viajeEncurso\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('curso')\" >\n                        <img class=\"card-img-top\" src=\"../assets/remiseros/encurso.jpeg\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viaje en curso</h5>\n                            <p class=\"card-text\">¡Mira los detalles del viaje que estas realizando!</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card \" style=\"width: 18rem;\" (click)=\"ir('nuevo')\" >\n                        <img class=\"card-img-top\" src=\"../assets/remiseros/encurso.jpeg\" alt=\"\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title text-center\">Nuevo viaje</h5>\n                            <p class=\"card-text text-center\">Reserva un nuevo Viaje!</p>\n                        </div>\n                    </div>                    \n                </div>                \n                <div class=\"col-sm d-flex align-items-stretch \">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('reservados')\">\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes reservados</h5>\n                            <p class=\"card-text\"> Ve la lista de los proximos viajes</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('terminados')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes Terminados</h5>\n                            <p class=\"card-text\"> Ve la lista de los viajes que ya realizaste</p>\n                        </div>\n                    </div>                      \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch col-center\">\n                    <div class=\"card\" style=\"width: 18rem; \" (click)=\"ir('asignados')\" >\n                        <img class=\"card-img-top\" src=\"../assets/configuracion.jpg\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Configuracion y datos de la cuenta</h5>\n                            <p class=\"card-text\">Consulta tus datos y configura tu cuenta</p>\n                        </div>\n                    </div>                      \n                </div>\n            </div>                        \n        </div>\n   </div>"

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

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-dark\">\n  <!-- Cambiarlo por el output -->\n  <a class=\"navbar-brand\" href=\"#\">Remiseria</a>\n  <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n    <a class=\"navbar-brand\" [routerLink]=\"[menuItem.path]\" (click)=\"controlarBarra()\">\n        {{menuItem.title}}\n    </a>\n  </li>\n  <button [hidden]=\"!logueado\" class=\"btn btn-danger my-2 my-sm-0\"(click)=\"salir()\">Salir</button>\n</nav>"

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
    { path: '/viajes', title: 'Viajes', icon: 'pe-7s-graph', class: '' },
    { path: '/vehiculos', title: 'Vehiculo', icon: 'pe-7s-user', class: '' },
    { path: '/error', title: 'Configuracion', icon: 'pe-7s-science', class: '' },
];
var RutasCliente = [
    { path: '/cliente', title: 'Menu Principal', icon: 'pe-7s-graph', class: '' },
    { path: '/cliente/nuevo', title: 'Nuevo Viaje', icon: 'pe-7s-graph', class: '' },
    { path: '/viajes', title: 'Viajes', icon: 'pe-7s-user', class: '' },
    { path: '/error', title: 'Configuracion', icon: 'pe-7s-rocket', class: 'active-pro' },
];
var RutasEncargado = [
    { path: '/encargado', title: 'Menu Principal', icon: 'pe-7s-graph', class: '' },
    { path: '/encargado/remiseros', title: 'Remiseros', icon: 'pe-7s-user', class: '' },
    { path: '/encargado/vehiculos', title: 'Vehiculos', icon: 'pe-7s-science', class: '' },
    { path: '/viajes', title: 'Viajes', icon: 'pe-7s-science', class: '' },
];
var RutasPruebas = [];
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
        if (localStorage.getItem('logueado') == 'true') {
            this.logueado = true;
        }
        else {
            this.logueado = false;
        }
    };
    BarralateralComponent.prototype.salir = function () {
        localStorage.setItem('token', "");
        localStorage.setItem('logueado', 'false');
        this.ruteador.navigate(['/login']);
        this.logueado = false;
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

/***/ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" *ngIf=\"cargoBien\">\n      <div class=\"col-sm\">\n        <h3 class=\" text-center first\"> Motivo: </h3>\n        <form [formGroup]=\"cancelarForm\" class=\"text-center\">\n          <div class=\"row justify-content-center\">\n            <p-dropdown [options]=\"motivos\" formControlName=\"motivo\"></p-dropdown>  \n          </div>\n          <div class=\"row justify-content-center\">\n            <textarea [rows]=\"12\" [cols]=\"50\" autoResize=\"autoResize\" pInputTextArea formControlName=\"mensaje\" pTooltip=\"minimo: 20 caracteres, maximo 159 caracteres\"></textarea>\n          </div>\n          <div class=\"row justify-content-center\">\n            <button (click)=\"cancelarViaje()\" [hidden]=\"cancelando || cancelado\" class=\"btn btn-primary\" [disabled]=\"!cancelarForm.valid\" > <i class=\"pi pi-check\"></i> Enviar</button>\n            <button (click)=\"volver()\" [hidden]=\"cancelando || cancelado\" class=\"btn btn-danger\" > <i class=\"pi pi-ban\"></i> Cancelar</button>\n            <i [hidden]=\"!cancelando\" class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"></i>\n            <button [hidden]=\"!cancelado\" class=\"btn btn-primary btn-block\" (click)=\"volver()\">Menu principal</button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm\" *ngIf=\"!cargoBien\">\n        <h1 class=\"text-center\"> Hubo un error al procesar lo pedido </h1>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClienteCancelarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCancelarComponent", function() { return ClienteCancelarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
/* harmony import */ var _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clases/viajeMaps */ "./src/app/clases/viajeMaps.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../servicios/cliente/cliente.service */ "./src/app/servicios/cliente/cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteCancelarComponent = /** @class */ (function () {
    function ClienteCancelarComponent(data, ruteador, servicioCliente) {
        this.data = data;
        this.ruteador = ruteador;
        this.servicioCliente = servicioCliente;
        this.opciones = _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_2__["opcionesCancelar"];
    }
    ClienteCancelarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage
            .subscribe(function (viaje) {
            if (typeof (viaje) === 'string') {
                _this.cargoBien = false;
            }
            else {
                _this.cargoBien = true;
                _this.cancelando = false;
                _this.cancelado = false;
                _this.viajeCancelado = viaje;
                _this.motivos = new Array();
                _this.motivos.push({ label: 'Seleccione un motivo', value: null });
                _this.opciones.forEach(function (element) {
                    _this.motivos.push({ label: element, value: element });
                });
                _this.cancelarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                    motivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                    ]),
                    mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(159),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                    ])
                });
            }
        });
    };
    ClienteCancelarComponent.prototype.cancelarViaje = function () {
        var _this = this;
        this.cancelando = true;
        this.servicioCliente.cancelarViaje(this.viajeCancelado.id, this.cancelarForm.controls['motivo'].value, this.cancelarForm.controls['mensaje'].value)
            .subscribe(function (data) {
            console.log(data);
            _this.cancelando = false;
            _this.cancelado = true;
        });
    };
    ClienteCancelarComponent.prototype.volver = function () {
        this.ruteador.navigate(['/cliente']);
    };
    ClienteCancelarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-cancelar',
            template: __webpack_require__(/*! ./cliente-cancelar.component.html */ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.html"),
            styles: [__webpack_require__(/*! ./cliente-cancelar.component.css */ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"]])
    ], ClienteCancelarComponent);
    return ClienteCancelarComponent;
}());



/***/ }),

/***/ "./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapita{\n    height: 300px;\n}"

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" [hidden]=\"!cargoBien\">\n      <div class=\"col-sm\" [hidden]=\"reservoViaje\">\n        <h1 class=\"text-center\"> Datos del viaje </h1>\n        <div class=\"mapita\" #mapa ></div>\n          <h2> Distancia: {{viaje.calcularDistancia()}} Km. </h2>\n          <h2> Monto: $ {{viaje.calcularMonto()}} </h2>\n          <button class=\"btn btn-danger\" >Cancelar</button>\n          <button [hidden]=\"modificado\" (click)=\"reservar()\" class=\"btn btn-primary\" >Reservar</button>\n          <button [hidden]=\"!modificado\" (click)=\"modificar()\" class=\"btn btn-primary\" >Modificar</button>\n      </div>\n      <div class=\"col-sm\" [hidden]=\"!reservoViaje\">\n        <h1 class=\"text-center\"> {{mensaje}}</h1>\n        <button class=\"btn btn-primary\"> Reservar un nuevo viaje </button>\n        <button class=\"btn btn-primary\"> Menu principal </button>\n      </div>\n      <div class=\"col-sm\" [hidden]=\"!errorReserva\">\n        <h1> Ha ocurrido un error reservando su viaje </h1> \n      </div>\n    </div>\n    <div class=\"row\" [hidden]=\"cargoBien\">\n      <div class=\"col-sm\" [hidden]=\"cargoBien\">\n        <h1 class=\"text-center\"> Hubo un error al procesar lo pedido</h1>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClienteInfoNuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteInfoNuevoComponent", function() { return ClienteInfoNuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
/* harmony import */ var _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clases/viajeMaps */ "./src/app/clases/viajeMaps.ts");
/* harmony import */ var _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
/* harmony import */ var _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicios/cliente/cliente.service */ "./src/app/servicios/cliente/cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteInfoNuevoComponent = /** @class */ (function () {
    function ClienteInfoNuevoComponent(data, auth, clienteService) {
        this.data = data;
        this.auth = auth;
        this.clienteService = clienteService;
        this.errorReserva = false;
    }
    ClienteInfoNuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reservoViaje = false;
        this.errorReserva = false;
        this.data.currentMessage.subscribe(function (viaje) {
            if (typeof (viaje) === 'string') {
                _this.cargoBien = false;
            }
            else {
                _this.cargoBien = true;
                var tipo = false;
                if (viaje.tipo == 'premium') {
                    tipo = true;
                }
                _this.viaje = new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_2__["viajeMaps"](viaje.id, viaje.fecha, viaje.hora, viaje.estado, 0, 0, viaje.origen, viaje.destino, tipo);
                _this.modificado = viaje.modificar;
                if (_this.modificado) {
                    _this.mensaje = "¡Su Viaje ha sido modificado!";
                }
                else {
                    _this.mensaje = "¡Su viaje ha sido reservado!";
                }
                _this.token = _this.auth.obtenerToken();
                _this.viaje.idCliente = _this.token.data.id;
                console.log(_this.viaje);
                console.log(_this.viaje.origen.longitud);
                _this.direccionService = new google.maps.DirectionsService;
                _this.direccionRenderer = new google.maps.DirectionsRenderer();
                _this.iniciarMapa();
            }
        });
    };
    ClienteInfoNuevoComponent.prototype.iniciarMapa = function () {
        this.mapa = new google.maps.Map(this.mapaElementRef.nativeElement, {
            zoom: 14,
            center: { lat: this.viaje.origen.latitud, lng: this.viaje.origen.longitud }
        });
        this.direccionService = new google.maps.DirectionsService;
        this.direccionRenderer = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.mapa,
        });
        this.mostrarRuta();
    };
    ClienteInfoNuevoComponent.prototype.mostrarRuta = function () {
        var _this = this;
        var desde = this.viaje.origen.latitud + ", " + this.viaje.origen.longitud;
        var hasta = this.viaje.destino.latitud + ", " + this.viaje.destino.longitud;
        this.direccionService.route({
            origin: desde,
            destination: hasta,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                _this.direccionRenderer.setDirections(response);
            }
        });
    };
    ClienteInfoNuevoComponent.prototype.reservar = function () {
        var _this = this;
        this.clienteService.nuevoViaje(this.viaje)
            .subscribe(function (data) {
            console.log(data);
            _this.reservoViaje = true;
        }, function (error) {
            _this.errorReserva = true;
        });
    };
    ClienteInfoNuevoComponent.prototype.modificar = function () {
        var _this = this;
        //console.log(this.viaje);
        this.clienteService.modificarViaje(this.viaje)
            .subscribe(function (data) {
            console.log(data);
            _this.reservoViaje = true;
        }, function (error) {
            _this.errorReserva = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapa'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClienteInfoNuevoComponent.prototype, "mapaElementRef", void 0);
    ClienteInfoNuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-info-nuevo',
            template: __webpack_require__(/*! ./cliente-info-nuevo.component.html */ "./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.html"),
            styles: [__webpack_require__(/*! ./cliente-info-nuevo.component.css */ "./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"]])
    ], ClienteInfoNuevoComponent);
    return ClienteInfoNuevoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm\" *ngIf=\"cargoBien\" >\n        <h1 class=\"text-center\"> {{titulo}} </h1>\n\n\n\n        <form [formGroup]=\"viajeForm\" (submit)=\"modificarViaje()\">\n          <div class=\"form-group\">\n            <label for=\"fecha\">Fecha</label>\n            <p-calendar [inline]=\"true\"  formControlName=\"fecha\" dateFormat=\"yy/mm/dd\" ></p-calendar>\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"Origen\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #origen [formControl]=\"origenControl\">\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"Destino\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #destino [formControl]=\"destinoControl\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"center-block\">Hora\n              <p-calendar [timeOnly]=\"true\" [inline]=\"true\" formControlName=\"hora\" hourFormat=\"24\"></p-calendar>\n            </label>\n            <div *ngIf=\"viajeForm.controls.hora.invalid\"\n                  class=\"alert alert-danger\">\n\n              <div *ngIf=\"!viajeForm.controls.hora.required\">\n                hora is required.\n              </div>\n              <div *ngIf=\"!viajeForm.controls.hora.minlength\">\n                hora must be at least 4 characters long.\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <h2 class=\"text-center\">Tipo de vehiculo </h2>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"tipo\" value=\"comun\" checked>\n              <label class=\"form-check-label\" for=\"exampleRadios1\">\n                Comun\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"tipo\" value=\"premium\">\n              <label class=\"form-check-label\">\n                Premium\n              </label>\n            </div>            \n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!viajeForm.valid || captchaOk\" >Modificar Viaje</button>                    \n        </form>        \n      </div>\n      <div class=\"col-sm\" *ngIf=\"!cargoBien\">\n        <h1 class=\"text-center\"> Hubo un error al procesar lo pedido </h1>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ClienteModificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModificarComponent", function() { return ClienteModificarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _clases_lugar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../clases/lugar */ "./src/app/clases/lugar.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClienteModificarComponent = /** @class */ (function () {
    function ClienteModificarComponent(ruteador, data, mapsAPILoader, ngZone) {
        this.ruteador = ruteador;
        this.data = data;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    ClienteModificarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modificado = null;
        this.latitude = -34.603722;
        this.longitude = -58.381592;
        this.zoom = 12;
        this.origenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.destinoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.data.currentMessage.subscribe(function (viaje) {
            if (typeof (viaje) === 'string') {
                _this.cargoBien = false;
            }
            else {
                _this.modificado = viaje;
                console.log(_this.modificado);
                _this.cargoBien = true;
                var dia = new Date(_this.modificado.fecha);
                dia.setDate(dia.getDate() + 1);
                _this.titulo = 'Modifica tu viaje';
                var tiempo = new Date("2018-04-20T" + _this.modificado.hora);
                _this.viajeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](tiempo, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                    ]),
                    fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](dia, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    ]),
                    tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.modificado.premium, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                });
            }
        });
        this.mapsAPILoader.load().then(function () {
            var autocompleteOrigen = new google.maps.places.Autocomplete(_this.origenElementRef.nativeElement, {
                types: ["address"]
            });
            var autocompleteDestino = new google.maps.places.Autocomplete(_this.destinoElementRef.nativeElement, {
                types: ["address"]
            });
            autocompleteOrigen.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteOrigen.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.origen = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                    console.log(_this.origen);
                });
            });
            autocompleteDestino.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteDestino.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.destino = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                    console.log(_this.destino);
                });
            });
        });
    };
    //CAPTCHA
    ClienteModificarComponent.prototype.modificarViaje = function () {
        var origen = new _clases_lugar__WEBPACK_IMPORTED_MODULE_5__["lugar"]();
        var destino = new _clases_lugar__WEBPACK_IMPORTED_MODULE_5__["lugar"]();
        origen.latitud = this.origen.lat();
        origen.longitud = this.origen.lng();
        destino.latitud = this.destino.lat();
        destino.longitud = this.destino.lng();
        var mensaje = {
            fecha: this.viajeForm.controls['fecha'].value,
            hora: this.viajeForm.controls['hora'].value,
            origen: origen,
            destino: destino,
            tipo: this.viajeForm.controls['tipo'].value,
            modificar: true,
            estado: this.modificado.estado,
            id: this.modificado.id
        };
        this.data.changeMessage(mensaje);
        this.ruteador.navigate(['/cliente/infoNuevo']);
    };
    ClienteModificarComponent.prototype.posicionActual = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 18;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapita'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClienteModificarComponent.prototype, "mapitaElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('origen'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClienteModificarComponent.prototype, "origenElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('destino'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClienteModificarComponent.prototype, "destinoElementRef", void 0);
    ClienteModificarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-modificar',
            template: __webpack_require__(/*! ./cliente-modificar.component.html */ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.html"),
            styles: [__webpack_require__(/*! ./cliente-modificar.component.css */ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ClienteModificarComponent);
    return ClienteModificarComponent;
}());



/***/ }),

/***/ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapa {\n  height: 300px;\n}"

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<!--<script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha\" async defer></script>-->\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <h1 class=\"text-center\"> {{titulo}} </h1>\n\n\n\n        <form [formGroup]=\"viajeForm\" (submit)=\"llenarFormulario()\">\n          <div class=\"form-group\">\n            <label for=\"fecha\">Fecha</label>\n            <p-calendar [inline]=\"true\"  formControlName=\"fecha\" dateFormat=\"yy/mm/dd\" ></p-calendar>\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"Origen\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #origen [formControl]=\"origenControl\">\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"Destino\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #destino [formControl]=\"destinoControl\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"center-block\">Hora\n              <p-calendar [timeOnly]=\"true\" [inline]=\"true\" formControlName=\"hora\" hourFormat=\"24\"></p-calendar>\n            </label>\n            <div *ngIf=\"viajeForm.controls.hora.invalid\"\n                  class=\"alert alert-danger\">\n\n              <div *ngIf=\"!viajeForm.controls.hora.required\">\n                La hora es requerida\n              </div>\n              <div *ngIf=\"!viajeForm.controls.hora.minlength\">\n                la hora tiene que tener como minimo 4 caracteres\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <h2 class=\"text-center\">Tipo de vehiculo </h2>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"tipo\" value=\"comun\" checked>\n              <label class=\"form-check-label\" for=\"exampleRadios1\">\n                Comun\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"tipo\" value=\"premium\">\n              <label class=\"form-check-label\">\n                Premium\n              </label>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\"  >Reservar viaje</button>                    \n         <!--<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!viajeForm.valid\" >Reservar viaje</button>                    -->\n        </form>        \n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _clases_lugar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../clases/lugar */ "./src/app/clases/lugar.ts");
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
    function ClienteNuevoComponent(ruteador, data, mapsAPILoader, ngZone) {
        this.ruteador = ruteador;
        this.data = data;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    ClienteNuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //-58.381592
        this.captchaOk = true;
        this.modificado = null;
        this.latitude = -34.603722;
        this.longitude = -58.381592;
        this.zoom = 12;
        this.origenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.destinoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.titulo = '¡Reserva tu proximo viaje!';
        this.viajeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
            ]),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
        });
        this.mapsAPILoader.load().then(function () {
            var autocompleteOrigen = new google.maps.places.Autocomplete(_this.origenElementRef.nativeElement, {
                types: ["address"]
            });
            var autocompleteDestino = new google.maps.places.Autocomplete(_this.destinoElementRef.nativeElement, {
                types: ["address"]
            });
            autocompleteOrigen.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteOrigen.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.origen = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                    console.log(_this.origen);
                });
            });
            autocompleteDestino.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocompleteDestino.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.destino = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                    console.log(_this.destino);
                });
            });
        });
    };
    //CAPTCHA
    ClienteNuevoComponent.prototype.llenarFormulario = function () {
        var origen = new _clases_lugar__WEBPACK_IMPORTED_MODULE_5__["lugar"]();
        var destino = new _clases_lugar__WEBPACK_IMPORTED_MODULE_5__["lugar"]();
        origen.latitud = this.origen.lat();
        origen.longitud = this.origen.lng();
        destino.latitud = this.destino.lat();
        destino.longitud = this.destino.lng();
        var mensaje = {
            fecha: this.viajeForm.controls['fecha'].value,
            hora: this.viajeForm.controls['hora'].value,
            origen: origen,
            destino: destino,
            tipo: this.viajeForm.controls['tipo'].value,
            modificar: false,
            estado: 'solicitado',
            id: -1
        };
        this.data.changeMessage(mensaje);
        this.ruteador.navigate(['/cliente/infoNuevo']);
    };
    ClienteNuevoComponent.prototype.posicionActual = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 18;
            });
        }
    };
    ClienteNuevoComponent.prototype.showResponse = function (evento) {
        this.captchaOk = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapita'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClienteNuevoComponent.prototype, "mapitaElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('origen'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClienteNuevoComponent.prototype, "origenElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('destino'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClienteNuevoComponent.prototype, "destinoElementRef", void 0);
    ClienteNuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-nuevo',
            template: __webpack_require__(/*! ./cliente-nuevo.component.html */ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.html"),
            styles: [__webpack_require__(/*! ./cliente-nuevo.component.css */ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ClienteNuevoComponent);
    return ClienteNuevoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/encargado/principal/principal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/encargado/principal/principal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/encargado/principal/principal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/encargado/principal/principal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>    \n<div class=\"container\">\n  <div class=\"jumbotron\">\n      <div class=\"row\">\n          <div class=\"col-sm d-flex align-items-stretch\">\n              <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('remiseros')\" >\n                  <img class=\"card-img-top\" src=\"../assets/remiseros/remisero.jpeg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\">Remiseros</h5>\n                      <p class=\"card-text\">¡Consulta el listado de remiseros!</p>\n                  </div>\n              </div>                    \n          </div>                \n          <div class=\"col-sm d-flex align-items-stretch \">\n              <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('vehiculos')\">\n                  <img class=\"card-img-top\" src=\"../assets/remiseros/autos.jpeg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\">Vehiculos</h5>\n                      <p class=\"card-text\"> ¡Consulta el listado de vehiculos!</p>\n                  </div>\n              </div>                    \n          </div>\n          <div class=\"col-sm d-flex align-items-stretch\">\n              <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('viajes')\" >\n                  <img class=\"card-img-top\" src=\"../assets/remiseros/viaje.jpg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\">Viajes </h5>\n                      <p class=\"card-text\"> ¡Consulta los viajes ! </p>\n                  </div>\n              </div>                      \n          </div>\n      </div>                        \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/encargado/principal/principal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/encargado/principal/principal.component.ts ***!
  \************************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
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


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent(ruteador) {
        this.ruteador = ruteador;
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent.prototype.ir = function (lugar) {
        switch (lugar) {
            case 'remiseros':
                this.ruteador.navigate(['/encargado/remiseros']);
                break;
            case 'vehiculos':
                this.ruteador.navigate(['/encargado/vehiculos']);
                break;
            case 'viajes':
                this.ruteador.navigate(['/viajes']);
                break;
            case 'terminados':
                this.ruteador.navigate(['/encargado/terminados']);
                break;
            default:
                break;
        }
    };
    PrincipalComponent.prototype.ver = function (id) {
        console.log(id);
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/componentes/encargado/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/encargado/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"text-center\"> Remiseros </h1>\n    <button class=\"btn btn-primary btn-block\" (click)=\"ir()\"> Agregar Remisero</button>\n    <div class=\"row\">\n      <div class=\"col-sm\">  \n        <table class=\"table\" *ngIf=\"remiseros\">\n          <thead>\n            <tr>\n              <th> Nombre </th>\n              <th> Apellido </th>\n              <th> Vehiculo </th>\n              <th> Opciones </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let remisero of remiseros\" (click)=\"ver(remisero)\" >\n              <td> {{ remisero.nombre }} </td>\n              <td> {{ remisero.apellido }} </td>\n              <td *ngIf=\"remisero.vehiculo\"> Asignado </td>\n              <td *ngIf=\"!remisero.vehiculo\"> Sin asignar </td>\n              <td> <button class=\"btn btn-success\" (click)=\"modificar(remisero)\"> Modificar </button> </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-sm\">\n        <div class=\"card\" style=\"width: 18rem;\">\n          <div class=\"card-body\" *ngIf=\"asignado\">\n            <h4> Chofer </h4>\n            <h5 class=\"card-title\">Nombre: {{ asignado.nombre }}</h5>\n            <h5 class=\"card-title\">Apellido: {{ asignado.apellido }}</h5>\n            <h5 class=\"card-title\">Usuario: {{ asignado.usuario }}</h5>\n            <button class=\"btn btn-primary\" (click)=\"mostrarListado()\" [hidden]=\"vehiculoAsignado\"> Asignar Vehiculo </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm\" >\n        <div class=\"card\" style=\"width: 18rem;\">\n          <div class=\"card-body\" *ngIf=\"vehiculoAsignado\">\n            <h4> Vehiculo </h4>\n            <h5 class=\"card-title\"> Modelo: {{vehiculoAsignado.modelo }}</h5>\n            <h5 class=\"card-title\"> Marca: {{ vehiculoAsignado.marca}}</h5>            \n            <h5 class=\"card-title\"> Tipo: {{ vehiculoAsignado.premium | premium }}</h5>\n            <button class=\"btn btn-primary\" (click)=\"mostrarListado()\" > Reasignar vehiculo </button>     \n            <button class=\"btn btn-danger\" (click)=\"removerVehiculo( vehiculoAsignado.id )\" > Remover vehiculo </button>     \n        </div>       \n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"mostrarVehiculos\">\n      <div class=\"col-sm\">\n        <h4 class=\"text-center\"> Asignar a: {{asignado.nombre}} {{asignado.apellido}}</h4>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th> Modelo </th>\n              <th> Marca </th>\n              <th> Año </th>\n              <th> Tipo </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let noAsignado of noAsignados\">\n              <td> {{ noAsignado.modelo }} </td>\n              <td> {{ noAsignado.marca }} </td>\n              <td> {{ noAsignado.anio }} </td>\n              <td> {{ noAsignado.premium | premium }} </td>\n              <td> <button class=\"btn btn-primary\" (click)=\"asignar(noAsignado)\"> asignar </button>\n            </tr>\n          </tbody>\n        </table>    \n      </div>      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RemiserosEncargadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemiserosEncargadoComponent", function() { return RemiserosEncargadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_remisero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/remisero.service */ "./src/app/servicios/remisero.service.ts");
/* harmony import */ var _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/vehiculo/vehiculo.service */ "./src/app/servicios/vehiculo/vehiculo.service.ts");
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemiserosEncargadoComponent = /** @class */ (function () {
    function RemiserosEncargadoComponent(ruteador, remiseroService, vehiculoService, dataServicio) {
        this.ruteador = ruteador;
        this.remiseroService = remiseroService;
        this.vehiculoService = vehiculoService;
        this.dataServicio = dataServicio;
    }
    RemiserosEncargadoComponent.prototype.ngOnInit = function () {
        this.obtenerRemiseros();
        this.obtenerVehiculos();
        this.obtenerVehiculosSinAsignar();
        this.mostrarVehiculos = false;
    };
    RemiserosEncargadoComponent.prototype.obtenerRemiseros = function () {
        var _this = this;
        this.remiseroService.listaRemiseros()
            .subscribe(function (data) {
            _this.remiseros = data;
        });
    };
    RemiserosEncargadoComponent.prototype.ver = function (remisero) {
        var _this = this;
        this.asignado = remisero;
        this.vehiculoAsignado = null;
        if (remisero.vehiculo) {
            this.vehiculos.forEach(function (element) {
                if (remisero.vehiculo == element.id) {
                    _this.vehiculoAsignado = element;
                }
            });
        }
    };
    RemiserosEncargadoComponent.prototype.obtenerVehiculos = function () {
        var _this = this;
        this.vehiculoService.vehiculos()
            .subscribe(function (data) {
            _this.vehiculos = data;
        });
    };
    RemiserosEncargadoComponent.prototype.obtenerVehiculosSinAsignar = function () {
        var _this = this;
        this.vehiculoService.noAsignados()
            .subscribe(function (data) {
            _this.noAsignados = data;
        });
    };
    RemiserosEncargadoComponent.prototype.mostrarListado = function () {
        this.mostrarVehiculos = true;
    };
    RemiserosEncargadoComponent.prototype.asignar = function (auto) {
        var _this = this;
        console.log(this.asignado.id);
        this.remiseroService.asignarvehiculo(auto.id, this.asignado.id)
            .subscribe(function (data) {
            _this.mostrarVehiculos = false;
            _this.vehiculoAsignado = auto;
            _this.obtenerVehiculos();
            _this.obtenerVehiculosSinAsignar();
            _this.obtenerRemiseros();
        });
    };
    RemiserosEncargadoComponent.prototype.removerVehiculo = function (id) {
        var _this = this;
        this.mostrarVehiculos = false;
        this.remiseroService.removerVehiculo(id)
            .subscribe(function (data) {
            if (data) {
                _this.obtenerVehiculos();
                _this.obtenerVehiculosSinAsignar();
                _this.obtenerRemiseros();
                _this.vehiculoAsignado = null;
            }
        });
    };
    RemiserosEncargadoComponent.prototype.ir = function () {
        this.ruteador.navigate(['encargado/remiseros/nuevo']);
    };
    RemiserosEncargadoComponent.prototype.modificar = function (data) {
        this.dataServicio.changeMessage(data);
        this.ruteador.navigate(['encargado/remiseros/nuevo']);
    };
    RemiserosEncargadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remiseros-encargado',
            template: __webpack_require__(/*! ./remiseros-encargado.component.html */ "./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.html"),
            styles: [__webpack_require__(/*! ./remiseros-encargado.component.css */ "./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _servicios_remisero_service__WEBPACK_IMPORTED_MODULE_1__["RemiseroService"], _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__["VehiculoService"], _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], RemiserosEncargadoComponent);
    return RemiserosEncargadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <h2 class=\"text-center\"> {{titulo}} </h2>\n        <form [formGroup]=\"remiseroForm\" class=\"text-center\">\n          <div class=\"form-group\">\n              <label class=\"center-block\">Nombre\n                <input class=\"form-control\" formControlName=\"nombre\">\n                <div [hidden]=\"!this.remiseroForm.controls['nombre'].invalid || this.remiseroForm.controls['nombre'].pristine\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!this.remiseroForm.controls['nombre'].hasError('required')\">El nombre es requerido </div>\n                </div>                \n              </label>              \n          </div>\n          <div class=\"form-group\">\n            <label  class=\"center-block\">Apellido\n              <input class=\"form-control\" formControlName=\"apellido\">\n                <div [hidden]=\"!this.remiseroForm.controls['apellido'].invalid || this.remiseroForm.controls['apellido'].pristine\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!this.remiseroForm.controls['apellido'].hasError('required')\">El apellido es requerido </div>\n                </div>              \n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"center-block\">Usuario\n              <input class=\"form-control\" formControlName=\"usuario\">\n                <div [hidden]=\"!this.remiseroForm.controls['usuario'].invalid || this.remiseroForm.controls['usuario'].pristine\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!this.remiseroForm.controls['usuario'].hasError('required')\">El usuario es requerido </div>\n                </div>              \n            </label>\n          </div>\n        <button class=\"btn btn-primary\" (click)=\"registrarse()\" [hidden]=\"!nuevoRemisero\" [disabled]=\"!remiseroForm.valid\"> Agregar </button>\n        <button class=\"btn btn-primary\" (click)=\"modificar()\" [hidden]=\"nuevoRemisero\" [disabled]=\"!remiseroForm.valid\"> Modificar </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.ts ***!
  \************************************************************************************/
/*! exports provided: RemiserosNuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemiserosNuevoComponent", function() { return RemiserosNuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _clases_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clases/usuario */ "./src/app/clases/usuario.ts");
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
/* harmony import */ var _servicios_usuarios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicios/usuarios/usuarios.service */ "./src/app/servicios/usuarios/usuarios.service.ts");
/* harmony import */ var _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../servicios/remiseros/remiseros.service */ "./src/app/servicios/remiseros/remiseros.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RemiserosNuevoComponent = /** @class */ (function () {
    function RemiserosNuevoComponent(data, usuarioServicio, remiseroServicio) {
        this.data = data;
        this.usuarioServicio = usuarioServicio;
        this.remiseroServicio = remiseroServicio;
        this.msgs = [];
    }
    RemiserosNuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioRepetido = false;
        this.nuevoRemisero = true;
        this.titulo = "Agregar Remisero";
        this.usuarioServicio.obtenerUsuarios()
            .subscribe(function (data) {
            _this.usuarios = data;
            console.log(_this.usuarios);
        });
        this.data.currentMessage.subscribe(function (remisero) {
            if (typeof (remisero) == 'string') {
                _this.titulo = "Agregar Remisero";
                _this.remiseroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ])
                });
            }
            else {
                _this.nuevoRemisero = false;
                _this.titulo = "Modificar Remisero";
                _this.modificado = remisero;
                _this.remiseroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.modificado.nombre, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.modificado.apellido, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.modificado.usuario, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ])
                });
            }
        });
    };
    RemiserosNuevoComponent.prototype.registrarse = function () {
        var _this = this;
        this.usuarioRepetido = false;
        this.usuarios.forEach(function (element) {
            if (_this.remiseroForm.controls['usuario'].value == element.usuario) {
                _this.usuarioRepetido = true;
                _this.mostrarMensaje('error', 'error usuario', 'Ya existe un remisero con ese usuario');
            }
        });
        if (!this.usuarioRepetido) {
            this.remiseroServicio.registrar(this.remiseroForm.controls['nombre'].value, this.remiseroForm.controls['apellido'].value, this.remiseroForm.controls['usuario'].value)
                .subscribe(function (data) {
                _this.mostrarMensaje('success', '¡Exito!', 'El remisero ha sido guardado');
                _this.usuarios.push(new _clases_usuario__WEBPACK_IMPORTED_MODULE_2__["usuario"](_this.remiseroForm.controls['usuario'].value, _this.remiseroForm.controls['usuario'].value, 'cliente'));
            });
        }
    };
    RemiserosNuevoComponent.prototype.modificar = function () {
        var _this = this;
        this.usuarioRepetido = false;
        this.usuarios.forEach(function (element) {
            if (_this.remiseroForm.controls['usuario'].value == element.usuario) {
                if (_this.remiseroForm.controls['usuario'].value != _this.modificado.usuario) {
                    _this.usuarioRepetido = true;
                    _this.mostrarMensaje('error', 'error usuario', 'Ya existe un remisero con ese usuario');
                }
            }
        });
        if (!this.usuarioRepetido) {
            //console.log(this.modificado.id);
            this.remiseroServicio.modificarAdmin(this.modificado.id, this.remiseroForm.controls['nombre'].value, this.remiseroForm.controls['apellido'].value, this.remiseroForm.controls['usuario'].value, this.modificado.password)
                .subscribe(function (data) {
                _this.mostrarMensaje('success', '¡Exito!', 'El remisero ha sido modificado');
                _this.usuarioServicio.obtenerUsuarios()
                    .subscribe(function (data) {
                    _this.usuarios = data;
                });
            });
        }
    };
    RemiserosNuevoComponent.prototype.mostrarMensaje = function (severidad, resumen, detalle) {
        this.msgs = [];
        this.msgs.push({ severity: severidad, summary: resumen, detail: detalle });
    };
    RemiserosNuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remiseros-nuevo',
            template: __webpack_require__(/*! ./remiseros-nuevo.component.html */ "./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.html"),
            styles: [__webpack_require__(/*! ./remiseros-nuevo.component.css */ "./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _servicios_usuarios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"], _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_5__["RemiserosService"]])
    ], RemiserosNuevoComponent);
    return RemiserosNuevoComponent;
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

/***/ "./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" *ngIf=\"cargoBien\">\n      <div class=\"col-sm\">\n        <h3 class=\" text-center first\"> Motivo: </h3>\n        <form [formGroup]=\"rechazarForm\" class=\"text-center\">\n          <div class=\"row justify-content-center\">\n            <p-dropdown [options]=\"motivos\" formControlName=\"motivo\"></p-dropdown>  \n          </div>\n          <div class=\"row justify-content-center\">\n            <textarea [rows]=\"12\" [cols]=\"50\" autoResize=\"autoResize\" pInputTextArea formControlName=\"mensaje\" pTooltip=\"minimo: 20 caracteres, maximo 159 caracteres\"></textarea>\n          </div>\n          <div class=\"row justify-content-center\">\n            <button (click)=\"rechazarViaje()\" [hidden]=\"rechazando || rechazado\" class=\"btn btn-primary\" [disabled]=\"!rechazarForm.valid\" > <i class=\"pi pi-check\"></i> Enviar</button>\n            <button (click)=\"volver()\" [hidden]=\"rechazando || rechazado\" class=\"btn btn-danger\" > <i class=\"pi pi-ban\"></i> Cancelar</button>\n            <i [hidden]=\"!rechazando\" class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"></i>\n            <button [hidden]=\"!rechazado\" class=\"btn btn-primary btn-block\" (click)=\"volver()\">Menu principal</button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm\" *ngIf=\"!cargoBien\">\n        <h1 class=\"text-center\"> Hubo un error al procesar lo pedido </h1>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RemiseroRechazarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemiseroRechazarComponent", function() { return RemiseroRechazarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
/* harmony import */ var _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clases/viajeMaps */ "./src/app/clases/viajeMaps.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicios/remiseros/remiseros.service */ "./src/app/servicios/remiseros/remiseros.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RemiseroRechazarComponent = /** @class */ (function () {
    function RemiseroRechazarComponent(data, ruteador, servicioRemisero) {
        this.data = data;
        this.ruteador = ruteador;
        this.servicioRemisero = servicioRemisero;
        this.opciones = _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_2__["opcionesRechazar"];
    }
    RemiseroRechazarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage
            .subscribe(function (viaje) {
            if (typeof (viaje) == 'string') {
                _this.cargoBien = false;
            }
            else {
                _this.cargoBien = true;
                _this.rechazando = false;
                _this.rechazado = false;
                _this.viajeRechazado = viaje;
                _this.motivos = new Array();
                _this.motivos.push({ label: 'Seleccione un motivo', value: null });
                _this.opciones.forEach(function (element) {
                    _this.motivos.push({ label: element, value: element });
                });
                _this.rechazarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    motivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                    ]),
                    mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(159),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                    ])
                });
            }
        });
    };
    RemiseroRechazarComponent.prototype.rechazarViaje = function () {
        var _this = this;
        this.rechazando = true;
        this.servicioRemisero.rechazarViaje(this.viajeRechazado.id, this.rechazarForm.controls['motivo'].value, this.rechazarForm.controls['mensaje'].value)
            .subscribe(function (data) {
            console.log(data);
            _this.rechazando = false;
            _this.rechazado = true;
        });
    };
    RemiseroRechazarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remisero-rechazar',
            template: __webpack_require__(/*! ./remisero-rechazar.component.html */ "./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.html"),
            styles: [__webpack_require__(/*! ./remisero-rechazar.component.css */ "./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_4__["RemiserosService"]])
    ], RemiseroRechazarComponent);
    return RemiseroRechazarComponent;
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

module.exports = "<app-barralateral></app-barralateral>\n<div *ngIf=\"viajesRemisero\">\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n            <div class=\"row\">              \n                <div class=\"col-sm d-flex align-items-stretch \">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('viajes')\">\n                        <img class=\"card-img-top\" src=\"../assets/remiseros/encurso.jpeg/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes </h5>\n                            <p class=\"card-text\"> Ve la lista de tus viajes</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('vehiculo')\" >\n                        <img class=\"card-img-top\" src=\"../assets/remiseros/autos.jpeg/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Vehiculo</h5>\n                            <p class=\"card-text\"> Ve el vehiculo que tienes asignado</p>\n                        </div>\n                    </div>                      \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem; \" (click)=\"ir('asignados')\" >\n                        <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Configuracion y datos de la cuenta</h5>\n                            <p class=\"card-text\">Consulta tus datos y configura tu cuenta</p>\n                        </div>\n                    </div>                      \n                </div>\n            </div>                        \n        </div>\n<div *ngIf=\"!viajesRemisero\">\n    <p> no se cargaron los viajes </p>\n</div>"

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
            case 'viajes':
                this.ruteador.navigate(['/viajes']);
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

/***/ "./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th> Marca </th>\n      <th> Modelo </th>\n      <th> año </th>\n      <th> Tipo </th>\n      <th> Modificar </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let vehiculo of vehiculos\">\n      <td> {{vehiculo.marca}}</td>\n      <td> {{vehiculo.modelo}}</td>\n      <td> {{vehiculo.anio}}</td>\n      <td> {{vehiculo.premium | premium}}</td>\n      <td> <button class=\"btn btn-primary\" (click)=\"ver( vehiculo )\" > Modificar </button>\n\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.ts ***!
  \************************************************************************************/
/*! exports provided: ListaVehiculosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaVehiculosComponent", function() { return ListaVehiculosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/vehiculo/vehiculo.service */ "./src/app/servicios/vehiculo/vehiculo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaVehiculosComponent = /** @class */ (function () {
    function ListaVehiculosComponent(vehiculosService) {
        this.vehiculosService = vehiculosService;
        this.enviarVehiculo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListaVehiculosComponent.prototype.ngOnInit = function () {
    };
    ListaVehiculosComponent.prototype.ver = function (enviado) {
        this.enviarVehiculo.emit(enviado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListaVehiculosComponent.prototype, "enviarVehiculo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ListaVehiculosComponent.prototype, "vehiculos", void 0);
    ListaVehiculosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-vehiculos',
            template: __webpack_require__(/*! ./lista-vehiculos.component.html */ "./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.html"),
            styles: [__webpack_require__(/*! ./lista-vehiculos.component.css */ "./src/app/componentes/vehiculos/lista-vehiculos/lista-vehiculos.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__["VehiculoService"]])
    ], ListaVehiculosComponent);
    return ListaVehiculosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"vehiculoForm\" *ngIf=\"dato\" class=\"text-center\">\n  <h4 class=\"text-center\">Modificar</h4>\n  <div class=\"form-row\">\n    <div class=\"col\">\n      <label class=\"center-block\"> Marca\n        <select class=\"form-control\" formControlName=\"marca\">\n          <option  *ngFor=\"let marca of marcasAutos\" [value]=\"marca\">{{marca}}</option>\n        </select>\n      </label>\n    </div>\n    <div class=\"col\">\n      <label class=\"center-block\"> Modelo\n        <input class=\"form-control\" formControlName=\"modelo\">\n      </label>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col\">\n      <label class=\"center-block\"> Año\n      <select class=\"form-control\" formControlName=\"anio\">\n        <option *ngFor=\"let anio of aniosAutos\" [value]=\"anio\" >{{anio}}</option>\n      </select>\n    </label>      \n    </div>\n    <div class=\"col\">\n      <h5> Tipo: </h5>\n      <label class=\"center-block\"><input [checked]=\"dato.premium == 1\" type=\"radio\" formControlName=\"tipo\" value=\"1\">Premium</label>\n      <label class=\"center-block\"><input [checked]=\"dato.premium == 0\" type=\"radio\" formControlName=\"tipo\" value=\"0\">Comun</label>\n    </div>\n  </div>\n   <button class=\"btn btn-primary\" (click)=\"modificar()\">Modificar</button> \n</form>"

/***/ }),

/***/ "./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ModificarVehiculosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarVehiculosComponent", function() { return ModificarVehiculosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_vehiculo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../clases/vehiculo */ "./src/app/clases/vehiculo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/vehiculo/vehiculo.service */ "./src/app/servicios/vehiculo/vehiculo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModificarVehiculosComponent = /** @class */ (function () {
    function ModificarVehiculosComponent(servicioVehiculo) {
        this.servicioVehiculo = servicioVehiculo;
        this.enviarModificado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.marcasAutos = _clases_vehiculo__WEBPACK_IMPORTED_MODULE_1__["marcas"];
        this.aniosAutos = _clases_vehiculo__WEBPACK_IMPORTED_MODULE_1__["vehiculo"].obtenerAnios();
    }
    ModificarVehiculosComponent.prototype.ngOnInit = function () {
        console.log(this.aniosAutos);
    };
    ModificarVehiculosComponent.prototype.consola = function () {
        console.log(this.dato);
    };
    ModificarVehiculosComponent.prototype.ngOnChanges = function () {
        if (this.dato) {
            this.vehiculoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.dato.marca, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]),
                modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.dato.modelo, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]),
                anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.dato.anio, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
                tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.dato.premium, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            });
        }
    };
    ModificarVehiculosComponent.prototype.modificar = function () {
        var _this = this;
        this.dato.marca = this.vehiculoForm.controls['marca'].value;
        this.dato.modelo = this.vehiculoForm.controls['modelo'].value;
        this.dato.anio = this.vehiculoForm.controls['anio'].value;
        this.dato.premium = this.vehiculoForm.controls['tipo'].value;
        this.servicioVehiculo.modificar(this.dato)
            .subscribe(function (data) {
            if (data) {
                _this.enviarModificado.emit(_this.dato);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _clases_vehiculo__WEBPACK_IMPORTED_MODULE_1__["vehiculo"])
    ], ModificarVehiculosComponent.prototype, "dato", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModificarVehiculosComponent.prototype, "enviarModificado", void 0);
    ModificarVehiculosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar-vehiculos',
            template: __webpack_require__(/*! ./modificar-vehiculos.component.html */ "./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.html"),
            styles: [__webpack_require__(/*! ./modificar-vehiculos.component.css */ "./src/app/componentes/vehiculos/modificar-vehiculos/modificar-vehiculos.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__["VehiculoService"]])
    ], ModificarVehiculosComponent);
    return ModificarVehiculosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"vehiculoNuevoForm\" *ngIf=\"nuevo\" class=\"text-center\">\n  <h4 class=\"text-center\">Nuevo</h4>\n  <div class=\"form-row\">\n    <div class=\"col\">\n      <label class=\"center-block\"> Marca\n        <select class=\"form-control\" formControlName=\"marca\">\n          <option  *ngFor=\"let marca of marcasAutos\" [value]=\"marca\">{{marca}}</option>\n        </select>\n      </label>\n    </div>\n    <div class=\"col\">\n      <label class=\"center-block\"> Modelo\n        <input class=\"form-control\" formControlName=\"modelo\">\n      </label>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col\">\n      <label class=\"center-block\"> Año\n      <select class=\"form-control\" formControlName=\"anio\">\n        <option *ngFor=\"let anio of aniosAutos\" [value]=\"anio\" >{{anio}}</option>\n      </select>\n    </label>      \n    </div>\n    <div class=\"col\">\n      <h5> Tipo: </h5>\n      <label class=\"center-block\"><input type=\"radio\" formControlName=\"tipo\" value=\"1\">Premium</label>\n      <label class=\"center-block\"><input type=\"radio\" formControlName=\"tipo\" value=\"0\">Comun</label>\n    </div>\n  </div>\n   <button class=\"btn btn-primary\" (click)=\"agregar()\">Agregar</button> \n</form>"

/***/ }),

/***/ "./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NuevoVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoVehiculoComponent", function() { return NuevoVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_vehiculo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../clases/vehiculo */ "./src/app/clases/vehiculo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/vehiculo/vehiculo.service */ "./src/app/servicios/vehiculo/vehiculo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NuevoVehiculoComponent = /** @class */ (function () {
    function NuevoVehiculoComponent(servicioVehiculo) {
        this.servicioVehiculo = servicioVehiculo;
        this.enviarNuevo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.marcasAutos = _clases_vehiculo__WEBPACK_IMPORTED_MODULE_1__["marcas"];
        this.aniosAutos = _clases_vehiculo__WEBPACK_IMPORTED_MODULE_1__["vehiculo"].obtenerAnios();
    }
    NuevoVehiculoComponent.prototype.ngOnInit = function () {
    };
    NuevoVehiculoComponent.prototype.ngOnChanges = function () {
        if (this.nuevo) {
            this.vehiculoNuevoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]),
                modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]),
                anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
                tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            });
        }
    };
    NuevoVehiculoComponent.prototype.agregar = function () {
        var _this = this;
        var agregado = new _clases_vehiculo__WEBPACK_IMPORTED_MODULE_1__["vehiculo"](this.vehiculoNuevoForm.controls['marca'].value, this.vehiculoNuevoForm.controls['modelo'].value, this.vehiculoNuevoForm.controls['anio'].value, this.vehiculoNuevoForm.controls['tipo'].value);
        this.servicioVehiculo.agregar(agregado)
            .subscribe(function (data) {
            if (data) {
                _this.enviarNuevo.emit(agregado);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NuevoVehiculoComponent.prototype, "nuevo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NuevoVehiculoComponent.prototype, "enviarNuevo", void 0);
    NuevoVehiculoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nuevo-vehiculo',
            template: __webpack_require__(/*! ./nuevo-vehiculo.component.html */ "./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.html"),
            styles: [__webpack_require__(/*! ./nuevo-vehiculo.component.css */ "./src/app/componentes/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__["VehiculoService"]])
    ], NuevoVehiculoComponent);
    return NuevoVehiculoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h2 class=\"text-center\"> Vehiculos </h2>\n        <div class=\"row\">\n            <button class=\"btn btn-primary btn-block\" (click)=\"mostrarNuevo()\"> Nuevo Auto </button>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm\">\n                <app-lista-vehiculos (enviarVehiculo)=\"mostrar($event)\" [vehiculos]=\"autos\" ></app-lista-vehiculos>\n            </div>\n            <div class=\"col-sm\">\n                <app-modificar-vehiculos [dato]=\"auto\" (enviarModificado)=\"modificado($event)\"></app-modificar-vehiculos>\n            </div>\n            <div class=\"col-sm\">\n                <app-nuevo-vehiculo [nuevo]=\"nuevoForm\" (enviarNuevo)=\"agregado($event)\"></app-nuevo-vehiculo>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.ts ***!
  \************************************************************************************/
/*! exports provided: VistaVehiculosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaVehiculosComponent", function() { return VistaVehiculosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/vehiculo/vehiculo.service */ "./src/app/servicios/vehiculo/vehiculo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VistaVehiculosComponent = /** @class */ (function () {
    function VistaVehiculosComponent(serviciosVehiculos) {
        this.serviciosVehiculos = serviciosVehiculos;
    }
    VistaVehiculosComponent.prototype.ngOnInit = function () {
        this.obtenerVehiculos();
    };
    VistaVehiculosComponent.prototype.mostrar = function (autito) {
        this.auto = autito;
        this.nuevoForm = false;
    };
    VistaVehiculosComponent.prototype.mostrarNuevo = function () {
        this.auto = null;
        this.nuevoForm = true;
    };
    VistaVehiculosComponent.prototype.agregado = function (nuevo) {
        this.obtenerVehiculos();
    };
    VistaVehiculosComponent.prototype.modificado = function (nuevo) {
        this.obtenerVehiculos();
    };
    VistaVehiculosComponent.prototype.obtenerVehiculos = function () {
        var _this = this;
        this.serviciosVehiculos.vehiculos()
            .subscribe(function (data) {
            _this.autos = data;
            console.log(data);
        });
    };
    VistaVehiculosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vista-vehiculos',
            template: __webpack_require__(/*! ./vista-vehiculos.component.html */ "./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.html"),
            styles: [__webpack_require__(/*! ./vista-vehiculos.component.css */ "./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__["VehiculoService"]])
    ], VistaVehiculosComponent);
    return VistaVehiculosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table #dt [columns]=\"cols\" [value]=\"detalle\">\n    <ng-template pTemplate=\"caption\">\n        <div style=\"text-align: right\">        \n                        <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"exportar a excel\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n        </div>\n    </ng-template>    \n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th *ngFor=\"let col of cols\">\n                {{col.header}}\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr [pSelectableRow]=\"rowData\" >\n            <td *ngFor=\"let col of columns\" (click)=\"mostrar(rowData)\">\n                {{rowData[col.field] | viaje : col.field }}\n            </td>\n        </tr>\n    </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetalleViajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleViajesComponent", function() { return DetalleViajesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleViajesComponent = /** @class */ (function () {
    function DetalleViajesComponent(data, ruteador, auth) {
        this.data = data;
        this.ruteador = ruteador;
        this.auth = auth;
        this.enviarViaje = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DetalleViajesComponent.prototype.ngOnInit = function () {
        if (this.auth.obtenerToken().data.tipo == 'cliente') {
            this.cols = [
                { field: 'fecha', header: 'Fecha' },
                { field: 'hora', header: 'Hora' },
                { field: 'estado', header: 'Estado' },
                { field: 'monto', header: 'Monto' },
            ];
        }
        else {
            this.cols = [
                { field: 'idCliente', header: 'Cliente' },
                { field: 'fecha', header: 'Fecha' },
                { field: 'hora', header: 'Hora' },
                { field: 'estado', header: 'Estado' },
                { field: 'monto', header: 'Monto' },
            ];
        }
    };
    DetalleViajesComponent.prototype.mostrar = function (algo) {
        this.data.changeMessage(algo);
        this.ruteador.navigate(['/viajes/info']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DetalleViajesComponent.prototype, "detalle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetalleViajesComponent.prototype, "enviarViaje", void 0);
    DetalleViajesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-viajes',
            template: __webpack_require__(/*! ./detalle-viajes.component.html */ "./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.html"),
            styles: [__webpack_require__(/*! ./detalle-viajes.component.css */ "./src/app/componentes/viajes/detalle-viajes/detalle-viajes.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DetalleViajesComponent);
    return DetalleViajesComponent;
}());



/***/ }),

/***/ "./src/app/componentes/viajes/ver-viaje/ver-viaje.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/viajes/ver-viaje/ver-viaje.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapita{\n    height: 300px;\n}"

/***/ }),

/***/ "./src/app/componentes/viajes/ver-viaje/ver-viaje.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/viajes/ver-viaje/ver-viaje.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h2 class=\"text-center\"> Viaje </h2>\n        <div class=\"row\" [hidden]=\"!cargoBien\">\n            <div class=\"col-sm\">\n                <div class=\"mapita\" #mapa ></div>\n                <h2 class=\"text-center\" > Fecha: {{verViaje.fecha}}</h2>\n                <h2 class=\"text-center\" > Hora : {{verViaje.hora}} </h2>\n                <h2 class=\"text-center\" > Estado : {{verViaje.estado}} </h2>\n                <div *ngIf=\"verViaje.estado != 'finalizado'\">\n                    <h2 class=\"text-center\" > Monto Aproximado :  $ {{verViaje.calcularMonto()}}</h2>\n                    <div class=\"text-center\" *ngIf=\"tipo == 'cliente'\">\n                        <button class=\"btn btn-primary\" (click)=\"modificar()\"> Modificar </button>\n                        <button class=\"btn btn-danger\" (click)=\"cancelar()\"> Cancelar </button>\n                    </div>\n                </div>\n                <div class=\"text-center\" *ngIf=\"verViaje.estado == 'solicitado'\">\n                    <div *ngIf=\"tipo == 'encargado'\">\n                        <button class=\"btn btn-primary\" (click)=\"asignar()\"> Asignar </button>\n                    </div>\n                </div>\n                <div class=\"text-center\" *ngIf=\"verViaje.estado == 'asignado'\">\n                    <div *ngIf=\"tipo == 'remisero'\">\n                        <button class=\"btn btn-danger\" (click)=\"rechazar()\"> Rechazar </button>\n                    </div>\n                </div>\n                <div *ngIf=\"verViaje.estado == 'finalizado'\">\n                    <h2 class=\"text-center\"> Monto : $ {{verViaje.calcularMonto()}} </h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" [hidden]=\"cargoBien\">\n            <h1 class=\"text-center\"> Hubo un error al procesar lo pedido </h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/viajes/ver-viaje/ver-viaje.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/viajes/ver-viaje/ver-viaje.component.ts ***!
  \*********************************************************************/
/*! exports provided: VerViajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerViajeComponent", function() { return VerViajeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/data/data.service */ "./src/app/servicios/data/data.service.ts");
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





var VerViajeComponent = /** @class */ (function () {
    function VerViajeComponent(ruteador, data, auth) {
        this.ruteador = ruteador;
        this.data = data;
        this.auth = auth;
    }
    VerViajeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tipo = this.auth.obtenerToken().data.tipo;
        this.data.currentMessage.subscribe(function (viaje) {
            if (typeof (viaje) === 'string') {
                _this.cargoBien = false;
            }
            else {
                _this.cargoBien = true;
                _this.verViaje = viaje;
                //this.direccionService = new google.maps.DirectionsService;
                //this.direccionRenderer = new google.maps.DirectionsRenderer();
                console.log(_this.verViaje);
            }
        });
    };
    VerViajeComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.verViaje.origen.latitud + this.verViaje.origen.longitud);
        this.iniciarMapa();
    };
    VerViajeComponent.prototype.iniciarMapa = function () {
        this.mapa = new google.maps.Map(this.mapaElementRef.nativeElement, {
            zoom: 14,
            center: { lat: this.verViaje.origen.latitud, lng: this.verViaje.origen.longitud }
        });
        this.direccionService = new google.maps.DirectionsService;
        this.direccionRenderer = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.mapa,
        });
        this.mostrarRuta();
    };
    VerViajeComponent.prototype.mostrarRuta = function () {
        var _this = this;
        var desde = this.verViaje.origen.latitud + ", " + this.verViaje.origen.longitud;
        var hasta = this.verViaje.destino.latitud + ", " + this.verViaje.destino.longitud;
        this.direccionService.route({
            origin: desde,
            destination: hasta,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(response.routes);
                for (var i in response.routes) {
                    //console.log(response.routes[i].);
                }
                _this.direccionRenderer.setDirections(response);
                //console.log(response);
            }
        });
    };
    VerViajeComponent.prototype.modificar = function () {
        this.data.changeMessage(this.verViaje);
        this.ruteador.navigate(['/cliente/modificar']);
    };
    VerViajeComponent.prototype.cancelar = function () {
        this.data.changeMessage(this.verViaje);
        this.ruteador.navigate(['/cliente/cancelar']);
    };
    VerViajeComponent.prototype.rechazar = function () {
        this.data.changeMessage(this.verViaje);
        this.ruteador.navigate(['/remisero/rechazar']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapa'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VerViajeComponent.prototype, "mapaElementRef", void 0);
    VerViajeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-viaje',
            template: __webpack_require__(/*! ./ver-viaje.component.html */ "./src/app/componentes/viajes/ver-viaje/ver-viaje.component.html"),
            styles: [__webpack_require__(/*! ./ver-viaje.component.css */ "./src/app/componentes/viajes/ver-viaje/ver-viaje.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerViajeComponent);
    return VerViajeComponent;
}());



/***/ }),

/***/ "./src/app/componentes/viajes/vista-viajes/vista-viajes.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/viajes/vista-viajes/vista-viajes.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/viajes/vista-viajes/vista-viajes.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/viajes/vista-viajes/vista-viajes.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h2 class=\"text-center\"> Viajes </h2>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <app-detalle-viajes (enviarViaje)=\"ver($event)\" [detalle]=\"viajes\"></app-detalle-viajes>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/viajes/vista-viajes/vista-viajes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/viajes/vista-viajes/vista-viajes.component.ts ***!
  \***************************************************************************/
/*! exports provided: VistaViajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaViajesComponent", function() { return VistaViajesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
/* harmony import */ var _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/viajes/viajes.service */ "./src/app/servicios/viajes/viajes.service.ts");
/* harmony import */ var _clases_lugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../clases/lugar */ "./src/app/clases/lugar.ts");
/* harmony import */ var _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../clases/viajeMaps */ "./src/app/clases/viajeMaps.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VistaViajesComponent = /** @class */ (function () {
    function VistaViajesComponent(auth, servicioViajes) {
        this.auth = auth;
        this.servicioViajes = servicioViajes;
    }
    VistaViajesComponent.prototype.ngOnInit = function () {
        this.viajes = new Array();
        if (this.auth.obtenerToken().data.tipo == 'encargado') {
            this.todosViajes();
        }
        else if (this.auth.obtenerToken().data.tipo == 'cliente') {
            this.viajesCliente();
        }
        else if (this.auth.obtenerToken().data.tipo == 'remisero') {
            this.viajesRemiseros();
        }
    };
    VistaViajesComponent.prototype.todosViajes = function () {
        var _this = this;
        this.servicioViajes.obternerViajes()
            .subscribe(function (data) {
            console.log(data);
            data.forEach(function (element) {
                var origen = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.origen_lat, element.origen_long);
                var destino = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.destino_lat, element.destino_long);
                _this.viajes.push(new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_4__["viajeMaps"](element.id, element.fecha, element.hora, element.estado, element.idCliente, element.monto, origen, destino, element.premium));
            });
        });
    };
    VistaViajesComponent.prototype.viajesCliente = function () {
        var _this = this;
        this.servicioViajes.obtenerViajesClientes(this.auth.obtenerToken().data.id)
            .subscribe(function (data) {
            console.log(data);
            data.forEach(function (element) {
                var origen = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.origen_lat, element.origen_long);
                var destino = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.destino_lat, element.destino_long);
                _this.viajes.push(new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_4__["viajeMaps"](element.id, element.fecha, element.hora, element.estado, element.idCliente, element.monto, origen, destino, element.premium));
            });
        });
    };
    VistaViajesComponent.prototype.viajesRemiseros = function () {
        var _this = this;
        this.servicioViajes.obtenerViajesRemiseros(this.auth.obtenerToken().data.id)
            .subscribe(function (data) {
            data.forEach(function (element) {
                var origen = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.origen_lat, element.origen_long);
                var destino = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.destino_lat, element.destino_long);
                _this.viajes.push(new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_4__["viajeMaps"](element.id, element.fecha, element.hora, element.estado, element.idCliente, element.monto, origen, destino, element.premium));
            });
        });
    };
    VistaViajesComponent.prototype.ver = function (viajecito) {
        this.viaje = viajecito;
    };
    VistaViajesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vista-viajes',
            template: __webpack_require__(/*! ./vista-viajes.component.html */ "./src/app/componentes/viajes/vista-viajes/vista-viajes.component.html"),
            styles: [__webpack_require__(/*! ./vista-viajes.component.css */ "./src/app/componentes/viajes/vista-viajes/vista-viajes.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_2__["ViajesService"]])
    ], VistaViajesComponent);
    return VistaViajesComponent;
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

module.exports = ".loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container mt-5\">\n  <div class=\"jumbotron\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n    <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\"  >Usuario </label>\n        <input type=\"email\" id=\"usuario\"\n            class=\"form-control\" [(ngModel)]=\"usuarioText\" name=\"usuario\" required pattern=\"[a-zA-Z][a-zA-Z ]+\"\n            #usuario=\"ngModel\" placeholder=\"Ingrese el usuario\">  \n        <div [hidden]=\"usuario.valid  || usuario.pristine\" class=\"alert alert-danger\">\n          <div [hidden]=\"!usuario.hasError('required')\">El usuario es requerido </div>\n          <div [hidden]=\"!usuario.hasError('pattern')\">Se requiere mas de un caracter </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\"  >Contraseña</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"passwordText\" id=\"exampleInputPassword1\" \n                required minlength=\"4\" #password=\"ngModel\" name=\"password\" placeholder=\"Contraseña\">\n        <div [hidden]=\"password.valid || password.pristine\"\n            class=\"alert alert-danger\">\n            <div [hidden]=\"!password.hasError('minlength')\">La clave es minimo de 8 caracteres</div>\n            <div [hidden]=\"!password.hasError('required')\">La clave es requerida</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n      </div>\n      <div class=\"loader\" *ngIf=\"esperando\"></div>\n      <button type=\"submit\" class=\"btn btn-primary\" [hidden]=\"esperando\" [disabled]=\"!loginForm.form.valid || captchaOk\" >Ingresar</button>\n    </form>\n    <div class=\"row\">\n      <button type=\"text\" class=\"btn btn-success btn-block\" [hidden]=\"esperando\" (click)=\"ingresar('admin')\" >Ingresar admin</button>\n    </div>\n    <div class=\"row\">\n      <button type=\"text\" class=\"btn btn-info btn-block\" [hidden]=\"esperando\" (click)=\"ingresar('remisero')\" >Ingresar remisero</button>\n    </div>\n    <div class=\"row\">\n      <button type=\"text\" class=\"btn btn-danger btn-block\" [hidden]=\"esperando\" (click)=\"ingresar('cliente')\" >Ingresar cliente</button>\n    </div>\n\n\n  </div>\n</div>\n"

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
        this.msgs = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.captchaOk = false;
        this.esperando = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.esperando = true;
        this.loginService.loguear(this.usuarioText, this.passwordText)
            .subscribe(function (data) {
            _this.esperando = false;
            localStorage.setItem('token', data.token);
            localStorage.setItem('logueado', 'true');
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
        }, function (error) {
            _this.esperando = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: 'error', detail: 'Usuario y/o contraseña incorrecta' });
        }, function () { return _this.esperando = false; });
    };
    LoginComponent.prototype.handleSuccess = function (evento) {
        console.log(evento);
        this.captchaOk = true;
    };
    LoginComponent.prototype.ingresar = function (usuario) {
        var _this = this;
        switch (usuario) {
            case 'admin':
                this.esperando = true;
                this.loginService.loguear('admin', 'admin')
                    .subscribe(function (data) {
                    _this.esperando = false;
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('logueado', 'true');
                    _this.ruteador.navigate(['/encargado']);
                });
                break;
            case 'remisero':
                this.esperando = true;
                this.loginService.loguear('juancito', '1111')
                    .subscribe(function (data) {
                    _this.esperando = false;
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('logueado', 'true');
                    _this.ruteador.navigate(['/remisero']);
                });
                break;
            case 'cliente':
                this.esperando = true;
                this.loginService.loguear('carlos', '2222')
                    .subscribe(function (data) {
                    _this.esperando = false;
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('logueado', 'true');
                    _this.ruteador.navigate(['/cliente']);
                });
                break;
            default:
                break;
        }
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

/***/ "./src/app/pipes/premium.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/premium.pipe.ts ***!
  \***************************************/
/*! exports provided: PremiumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPipe", function() { return PremiumPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PremiumPipe = /** @class */ (function () {
    function PremiumPipe() {
    }
    PremiumPipe.prototype.transform = function (value, args) {
        if (value == 0) {
            return "Comun";
        }
        return "Premium";
    };
    PremiumPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'premium'
        })
    ], PremiumPipe);
    return PremiumPipe;
}());



/***/ }),

/***/ "./src/app/pipes/viaje.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/viaje.pipe.ts ***!
  \*************************************/
/*! exports provided: ViajePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViajePipe", function() { return ViajePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ViajePipe = /** @class */ (function () {
    function ViajePipe() {
    }
    ViajePipe.prototype.transform = function (value, columna) {
        switch (columna) {
            case "premium":
                if (value == 0) {
                    return "Comun";
                }
                return "Premium";
            default:
                return value;
        }
    };
    ViajePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'viaje'
        })
    ], ViajePipe);
    return ViajePipe;
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
/* harmony import */ var _componentes_remiseros_remisero_rechazar_remisero_rechazar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/remiseros/remisero-rechazar/remisero-rechazar.component */ "./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.ts");
/* harmony import */ var _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/clientes/cliente-nuevo/cliente-nuevo.component */ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.ts");
/* harmony import */ var _componentes_clientes_cliente_modificar_cliente_modificar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/clientes/cliente-modificar/cliente-modificar.component */ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.ts");
/* harmony import */ var _componentes_clientes_cliente_info_nuevo_cliente_info_nuevo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component */ "./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.ts");
/* harmony import */ var _componentes_clientes_cliente_cancelar_cliente_cancelar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/clientes/cliente-cancelar/cliente-cancelar.component */ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.ts");
/* harmony import */ var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cliente/cliente.component */ "./src/app/cliente/cliente.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../servicios/verificar-jwt.service */ "./src/app/servicios/verificar-jwt.service.ts");
/* harmony import */ var _servicios_verificarTipo_verificar_tipo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../servicios/verificarTipo/verificar-tipo.service */ "./src/app/servicios/verificarTipo/verificar-tipo.service.ts");
/* harmony import */ var _servicios_verificarTipo_verificar_tipo_cliente_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../servicios/verificarTipo/verificar-tipo-cliente.service */ "./src/app/servicios/verificarTipo/verificar-tipo-cliente.service.ts");
/* harmony import */ var _servicios_verificarTipo_verificar_encargado_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../servicios/verificarTipo/verificar-encargado.service */ "./src/app/servicios/verificarTipo/verificar-encargado.service.ts");
/* harmony import */ var _componentes_encargado_principal_principal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componentes/encargado/principal/principal.component */ "./src/app/componentes/encargado/principal/principal.component.ts");
/* harmony import */ var _componentes_encargado_remiseros_encargado_remiseros_encargado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../componentes/encargado/remiseros-encargado/remiseros-encargado.component */ "./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.ts");
/* harmony import */ var _componentes_encargado_remiseros_nuevo_remiseros_nuevo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../componentes/encargado/remiseros-nuevo/remiseros-nuevo.component */ "./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.ts");
/* harmony import */ var _componentes_vehiculos_vista_vehiculos_vista_vehiculos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../componentes/vehiculos/vista-vehiculos/vista-vehiculos.component */ "./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.ts");
/* harmony import */ var _componentes_viajes_vista_viajes_vista_viajes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../componentes/viajes/vista-viajes/vista-viajes.component */ "./src/app/componentes/viajes/vista-viajes/vista-viajes.component.ts");
/* harmony import */ var _componentes_viajes_ver_viaje_ver_viaje_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../componentes/viajes/ver-viaje/ver-viaje.component */ "./src/app/componentes/viajes/ver-viaje/ver-viaje.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var miRuteo = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'remisero', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_13__["VerificarJWTService"], _servicios_verificarTipo_verificar_tipo_service__WEBPACK_IMPORTED_MODULE_14__["VerificarTipoService"]],
        children: [
            { path: '', component: _componentes_remiseros_remisero_remisero_component__WEBPACK_IMPORTED_MODULE_3__["RemiseroComponent"] },
            { path: 'asignados', component: _componentes_remiseros_remisero_asignados_remisero_asignados_component__WEBPACK_IMPORTED_MODULE_4__["RemiseroAsignadosComponent"] },
            { path: 'rechazar', component: _componentes_remiseros_remisero_rechazar_remisero_rechazar_component__WEBPACK_IMPORTED_MODULE_5__["RemiseroRechazarComponent"] }
        ] },
    { path: 'cliente', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_13__["VerificarJWTService"], _servicios_verificarTipo_verificar_tipo_cliente_service__WEBPACK_IMPORTED_MODULE_15__["VerificarTipoClienteService"]],
        children: [
            { path: '', component: _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_10__["ClienteComponent"] },
            { path: 'nuevo', component: _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_6__["ClienteNuevoComponent"] },
            { path: 'modificar', component: _componentes_clientes_cliente_modificar_cliente_modificar_component__WEBPACK_IMPORTED_MODULE_7__["ClienteModificarComponent"] },
            { path: 'infoNuevo', component: _componentes_clientes_cliente_info_nuevo_cliente_info_nuevo_component__WEBPACK_IMPORTED_MODULE_8__["ClienteInfoNuevoComponent"] },
            { path: 'cancelar', component: _componentes_clientes_cliente_cancelar_cliente_cancelar_component__WEBPACK_IMPORTED_MODULE_9__["ClienteCancelarComponent"] }
        ] },
    { path: 'encargado', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_13__["VerificarJWTService"], _servicios_verificarTipo_verificar_encargado_service__WEBPACK_IMPORTED_MODULE_16__["VerificarEncargadoService"]],
        children: [
            { path: '', component: _componentes_encargado_principal_principal_component__WEBPACK_IMPORTED_MODULE_17__["PrincipalComponent"] },
            { path: 'remiseros',
                children: [
                    { path: '', component: _componentes_encargado_remiseros_encargado_remiseros_encargado_component__WEBPACK_IMPORTED_MODULE_18__["RemiserosEncargadoComponent"] },
                    { path: 'nuevo', component: _componentes_encargado_remiseros_nuevo_remiseros_nuevo_component__WEBPACK_IMPORTED_MODULE_19__["RemiserosNuevoComponent"] },
                ] },
            { path: 'infoNuevo', component: _componentes_clientes_cliente_info_nuevo_cliente_info_nuevo_component__WEBPACK_IMPORTED_MODULE_8__["ClienteInfoNuevoComponent"] },
            { path: 'vehiculos', component: _componentes_vehiculos_vista_vehiculos_vista_vehiculos_component__WEBPACK_IMPORTED_MODULE_20__["VistaVehiculosComponent"] },
        ] },
    { path: 'viajes',
        children: [
            { path: '', component: _componentes_viajes_vista_viajes_vista_viajes_component__WEBPACK_IMPORTED_MODULE_21__["VistaViajesComponent"] },
            { path: 'info', component: _componentes_viajes_ver_viaje_ver_viaje_component__WEBPACK_IMPORTED_MODULE_22__["VerViajeComponent"] }
        ] },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
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

/***/ "./src/app/servicios/cliente/cliente.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/cliente/cliente.service.ts ***!
  \******************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
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


var ClienteService = /** @class */ (function () {
    function ClienteService(nuevoHttp) {
        this.nuevoHttp = nuevoHttp;
    }
    ClienteService.prototype.nuevoViaje = function (viaje) {
        var token = localStorage.getItem('token');
        var datos = "idCliente=" + viaje.idCliente + "\n  \t\t\t\t &origen_lat=" + viaje.origen.latitud + "\n  \t\t\t\t &origen_long=" + viaje.origen.longitud + "\n  \t\t\t\t &destino_lat=" + viaje.destino.latitud + "\n  \t\t\t\t &destino_long=" + viaje.destino.longitud + "\n  \t\t\t\t &fecha=" + viaje.fecha + "\n\t\t\t \t &hora=" + viaje.hora + "\n\t\t\t \t &premium=" + viaje.premium + "\n  \t\t\t\t &token=" + token;
        return this.nuevoHttp.httpPostData("cliente/viajeNuevo", datos);
    };
    ClienteService.prototype.modificarViaje = function (viaje) {
        var token = localStorage.getItem('token');
        var datos = "idCliente=" + viaje.idCliente + "&origen_lat=" + viaje.origen.latitud + "&origen_long=" + viaje.origen.longitud + "&destino_lat=" + viaje.destino.latitud + "&destino_long=" + viaje.destino.longitud + "&fecha=" + viaje.fecha + "&hora=" + viaje.hora + "&id=" + viaje.id + "&estado=" + viaje.estado + "&premium=" + viaje.premium + "&token=" + token;
        return this.nuevoHttp.httpPostData('cliente/modificarviaje', datos);
    };
    ClienteService.prototype.cancelarViaje = function (idViaje, motivo, mensaje) {
        var token = localStorage.getItem('token');
        var datos = "idViaje=" + idViaje + "&motivo=" + motivo + "&mensaje=" + mensaje + "&token=" + token;
        return this.nuevoHttp.httpPostData('viajes/cancelar', datos);
    };
    ClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/servicios/data/data.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/data/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
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
        this.api = "https://remiseriagustavopetruzzi.000webhostapp.com/index.php/";
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
    RemiseroService.prototype.listaRemiseros = function () {
        return this.nuevohttp.httpGet("remiseros/lista");
    };
    RemiseroService.prototype.viajes = function (idRemisero) {
        var token = localStorage.getItem('token');
        var datos = "id=" + idRemisero + "&token=" + token;
        return this.nuevohttp.httpPostData("remisero/viajes", datos);
    };
    RemiseroService.prototype.asignarvehiculo = function (idVehiculo, idRemisero) {
        var token = localStorage.getItem('token');
        var datos = "idVehiculo=" + idVehiculo + "&token=" + token + "&idRemisero=" + idRemisero;
        return this.nuevohttp.httpPostData('encargado/asignarvehiculo', datos);
    };
    RemiseroService.prototype.removerVehiculo = function (idRemisero) {
        var token = localStorage.getItem('token');
        var datos = "token=" + token + "&idRemisero=" + idRemisero;
        return this.nuevohttp.httpPostData('encargado/removervehiculo', datos);
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

/***/ "./src/app/servicios/remiseros/remiseros.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/servicios/remiseros/remiseros.service.ts ***!
  \**********************************************************/
/*! exports provided: RemiserosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemiserosService", function() { return RemiserosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nuevohttp.service */ "./src/app/servicios/nuevohttp.service.ts");
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



var RemiserosService = /** @class */ (function () {
    function RemiserosService(nuevoHttp, auth) {
        this.nuevoHttp = nuevoHttp;
        this.auth = auth;
    }
    RemiserosService.prototype.registrar = function (nombre, apellido, usuario) {
        var token = this.auth.obtenerToken();
        var datos = "nombre=" + nombre + "&apellido=" + apellido + "&usuario=" + usuario + "&password=" + usuario + "&token=" + token;
        return this.nuevoHttp.httpPostData('remiseros/alta', datos);
    };
    RemiserosService.prototype.modificarAdmin = function (id, nombre, apellido, usuario, password) {
        var token = this.auth.obtenerToken();
        var datos = "nombre=" + nombre + "&apellido=" + apellido + "&usuario=" + usuario + "&password=" + password + "&token=" + token + "&id=" + id;
        return this.nuevoHttp.httpPostData('remiseros/modificar', datos);
    };
    RemiserosService.prototype.rechazarViaje = function (idViaje, motivo, mensaje) {
        var token = localStorage.getItem('token');
        var datos = "idViaje=" + idViaje + "&motivo=" + motivo + "&mensaje=" + mensaje + "&token=" + token;
        return this.nuevoHttp.httpPostData('viajes/rechazar', datos);
    };
    RemiserosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RemiserosService);
    return RemiserosService;
}());



/***/ }),

/***/ "./src/app/servicios/usuarios/usuarios.service.ts":
/*!********************************************************!*\
  !*** ./src/app/servicios/usuarios/usuarios.service.ts ***!
  \********************************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
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


var UsuariosService = /** @class */ (function () {
    function UsuariosService(nuevoHttp) {
        this.nuevoHttp = nuevoHttp;
    }
    UsuariosService.prototype.obtenerUsuarios = function () {
        return this.nuevoHttp.httpGet('ingreso/usuarios');
    };
    UsuariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "./src/app/servicios/vehiculo/vehiculo.service.ts":
/*!********************************************************!*\
  !*** ./src/app/servicios/vehiculo/vehiculo.service.ts ***!
  \********************************************************/
/*! exports provided: VehiculoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculoService", function() { return VehiculoService; });
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


var VehiculoService = /** @class */ (function () {
    function VehiculoService(nuevohttp) {
        this.nuevohttp = nuevohttp;
    }
    VehiculoService.prototype.noAsignados = function () {
        return this.nuevohttp.httpGet("encargado/noasignados");
    };
    VehiculoService.prototype.vehiculos = function () {
        return this.nuevohttp.httpGet("encargado/todos");
    };
    VehiculoService.prototype.agregar = function (auto) {
        var token = localStorage.getItem('token');
        var datos = "marca=" + auto.marca + "&modelo=" + auto.modelo + "&anio=" + auto.anio + "&premium=" + auto.premium + "&token=" + token;
        return this.nuevohttp.httpPostData("encargado/nuevovehiculo", datos);
    };
    VehiculoService.prototype.modificar = function (auto) {
        var token = localStorage.getItem('token');
        var datos = "idVehiculo=" + auto.id + "&marca=" + auto.marca + "&modelo=" + auto.modelo + "&anio=" + auto.anio + "&premium=" + auto.premium + "&token=" + token;
        return this.nuevohttp.httpPostData("encargado/modificarvehiculo", datos);
    };
    VehiculoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"]])
    ], VehiculoService);
    return VehiculoService;
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

/***/ "./src/app/servicios/verificarTipo/verificar-encargado.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/servicios/verificarTipo/verificar-encargado.service.ts ***!
  \************************************************************************/
/*! exports provided: VerificarEncargadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarEncargadoService", function() { return VerificarEncargadoService; });
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



var VerificarEncargadoService = /** @class */ (function () {
    function VerificarEncargadoService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    VerificarEncargadoService.prototype.canActivate = function (route, state) {
        this.token = this.auth.obtenerToken();
        if (this.token.data.tipo == 'encargado') {
            return true;
        }
        else {
            this.router.navigate(['/error']);
            return !true;
        }
    };
    VerificarEncargadoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerificarEncargadoService);
    return VerificarEncargadoService;
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

/***/ "./src/app/servicios/viajes/viajes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/viajes/viajes.service.ts ***!
  \****************************************************/
/*! exports provided: ViajesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViajesService", function() { return ViajesService; });
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


var ViajesService = /** @class */ (function () {
    function ViajesService(nuevoHttp) {
        this.nuevoHttp = nuevoHttp;
    }
    ViajesService.prototype.obternerViajes = function () {
        var token = localStorage.getItem('token');
        var datos = "token=" + token;
        return this.nuevoHttp.httpPostData("viajes/lista", datos);
    };
    ViajesService.prototype.obtenerViajesClientes = function (idCliente) {
        var token = localStorage.getItem('token');
        var datos = "token=" + token + "&idCliente=" + idCliente;
        return this.nuevoHttp.httpPostData("viajes/cliente", datos);
    };
    ViajesService.prototype.obtenerViajesRemiseros = function (idRemisero) {
        var token = localStorage.getItem('token');
        var datos = "token=" + token + "&idRemisero=" + idRemisero;
        return this.nuevoHttp.httpPostData("viajes/remisero", datos);
    };
    ViajesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"]])
    ], ViajesService);
    return ViajesService;
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