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
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _componentes_clientes_cliente_modificar_cliente_modificar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./componentes/clientes/cliente-modificar/cliente-modificar.component */ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.ts");
/* harmony import */ var _componentes_clientes_cliente_cancelar_cliente_cancelar_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./componentes/clientes/cliente-cancelar/cliente-cancelar.component */ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.ts");
/* harmony import */ var _componentes_remiseros_remisero_rechazar_remisero_rechazar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./componentes/remiseros/remisero-rechazar/remisero-rechazar.component */ "./src/app/componentes/remiseros/remisero-rechazar/remisero-rechazar.component.ts");
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/captcha */ "./node_modules/primeng/captcha.js");
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(primeng_captcha__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _componentes_registro_registro_cliente_registro_cliente_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./componentes/registro/registro-cliente/registro-cliente.component */ "./src/app/componentes/registro/registro-cliente/registro-cliente.component.ts");
/* harmony import */ var _componentes_configuracion_cuenta_configuracion_cuenta_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./componentes/configuracion-cuenta/configuracion-cuenta.component */ "./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.ts");
/* harmony import */ var _componentes_remiseros_remiseros_finalizar_remiseros_finalizar_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component */ "./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.ts");
/* harmony import */ var _componentes_encargado_asignar_viaje_asignar_viaje_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./componentes/encargado/asignar-viaje/asignar-viaje.component */ "./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.ts");
/* harmony import */ var _ocupado_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ocupado.directive */ "./src/app/ocupado.directive.ts");
/* harmony import */ var _componentes_clientes_cliente_encuesta_cliente_encuesta_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./componentes/clientes/cliente-encuesta/cliente-encuesta.component */ "./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.ts");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/rating */ "./node_modules/primeng/rating.js");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(primeng_rating__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _componentes_encargado_estadisticas_ganancias_ganancias_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./componentes/encargado/estadisticas/ganancias/ganancias.component */ "./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.ts");
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
                _componentes_clientes_cliente_modificar_cliente_modificar_component__WEBPACK_IMPORTED_MODULE_42__["ClienteModificarComponent"],
                _componentes_clientes_cliente_cancelar_cliente_cancelar_component__WEBPACK_IMPORTED_MODULE_43__["ClienteCancelarComponent"],
                _componentes_remiseros_remisero_rechazar_remisero_rechazar_component__WEBPACK_IMPORTED_MODULE_44__["RemiseroRechazarComponent"],
                _componentes_registro_registro_cliente_registro_cliente_component__WEBPACK_IMPORTED_MODULE_46__["RegistroClienteComponent"],
                _componentes_configuracion_cuenta_configuracion_cuenta_component__WEBPACK_IMPORTED_MODULE_47__["ConfiguracionCuentaComponent"],
                _componentes_remiseros_remiseros_finalizar_remiseros_finalizar_component__WEBPACK_IMPORTED_MODULE_48__["RemiserosFinalizarComponent"],
                _componentes_encargado_asignar_viaje_asignar_viaje_component__WEBPACK_IMPORTED_MODULE_49__["AsignarViajeComponent"],
                _ocupado_directive__WEBPACK_IMPORTED_MODULE_50__["OcupadoDirective"],
                _componentes_clientes_cliente_encuesta_cliente_encuesta_component__WEBPACK_IMPORTED_MODULE_51__["ClienteEncuestaComponent"],
                _componentes_encargado_estadisticas_ganancias_ganancias_component__WEBPACK_IMPORTED_MODULE_56__["GananciasComponent"]
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
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_39__["InputTextareaModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_40__["TooltipModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_41__["ButtonModule"],
                primeng_captcha__WEBPACK_IMPORTED_MODULE_45__["CaptchaModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_38__["FileUploadModule"],
                primeng_rating__WEBPACK_IMPORTED_MODULE_52__["RatingModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_53__["MultiSelectModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_54__["SliderModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_55__["ChartModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clases/captcha.ts":
/*!***********************************!*\
  !*** ./src/app/clases/captcha.ts ***!
  \***********************************/
/*! exports provided: captcha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captcha", function() { return captcha; });
var captcha = /** @class */ (function () {
    function captcha() {
        this.numero1 = Math.floor((Math.random() * 10) + 1);
        this.numero2 = Math.floor((Math.random() * 10) + 1);
    }
    captcha.prototype.cambiarCaptcha = function () {
        this.numero1 = Math.floor((Math.random() * 10) + 1);
        this.numero2 = Math.floor((Math.random() * 10) + 1);
    };
    captcha.prototype.resultado = function () {
        return this.numero1 + this.numero2;
    };
    captcha.prototype.capcha = function () {
        return this.numero1 + " + " + this.numero2 + " ";
    };
    return captcha;
}());



/***/ }),

/***/ "./src/app/clases/encuesta.ts":
/*!************************************!*\
  !*** ./src/app/clases/encuesta.ts ***!
  \************************************/
/*! exports provided: encuesta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encuesta", function() { return encuesta; });
var encuesta = /** @class */ (function () {
    function encuesta(idViaje, idRemisero, idVehiculo, remisero, estado_vehiculo, recomendacion, viaje, conductor, vehiculo, camino, reserva, cobranza, comentario, foto_1, foto_2, foto_3) {
        this.idViaje = idViaje;
        this.idRemisero = idRemisero;
        this.idVehiculo = idVehiculo;
        this.remisero = remisero;
        this.estado_vehiculo = estado_vehiculo;
        this.recomendacion = recomendacion;
        this.viaje = viaje;
        this.conductor = conductor;
        this.vehiculo = vehiculo;
        this.camino = camino;
        this.reserva = reserva;
        this.cobranza = cobranza;
        this.comentario = comentario;
        this.foto_1 = foto_1;
        this.foto_2 = foto_2;
        this.foto_3 = foto_3;
    }
    return encuesta;
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

/***/ "./src/app/clases/remisero.ts":
/*!************************************!*\
  !*** ./src/app/clases/remisero.ts ***!
  \************************************/
/*! exports provided: remisero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remisero", function() { return remisero; });
var remisero = /** @class */ (function () {
    function remisero(nombre, apellido, usuario, vehiculo) {
        if (vehiculo) {
            this.vehiculo = vehiculo;
        }
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
    }
    return remisero;
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

/***/ "./src/app/clases/usuarioCompleto.ts":
/*!*******************************************!*\
  !*** ./src/app/clases/usuarioCompleto.ts ***!
  \*******************************************/
/*! exports provided: UsuarioCompleto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCompleto", function() { return UsuarioCompleto; });
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "./src/app/clases/usuario.ts");
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

var UsuarioCompleto = /** @class */ (function (_super) {
    __extends(UsuarioCompleto, _super);
    function UsuarioCompleto(id, nombre, apellido, usuario, password, foto, tipo) {
        var _this = this;
        if (tipo) {
            _this = _super.call(this, usuario, password, tipo, id) || this;
            _this.nombre = nombre;
            _this.apellido = apellido;
            _this.foto = foto;
        }
        else {
            _this = _super.call(this, usuario, password, "NN", id) || this;
            _this.foto = foto;
        }
        return _this;
    }
    UsuarioCompleto.prototype.obtenerFoto = function () {
        //let ruta = "http://localhost/backendTp2/fotos/";
        var ruta = "https://remiseriagustavopetruzzi.000webhostapp.com/fotos/";
        return ruta + this.foto;
    };
    return UsuarioCompleto;
}(_usuario__WEBPACK_IMPORTED_MODULE_0__["usuario"]));



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

module.exports = "<app-barralateral></app-barralateral>\n   <div class=\"container\">\n        <div class=\"jumbotron\">\n            <div class=\"row row-center\">\n                <div class=\"col-sm d-flex align-items-stretch\" *ngIf=\"viajeEncurso\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('curso')\" >\n                        <img class=\"card-img-top\" height=\"200\" width=\"300\" src=\"../assets/remiseros/encurso.jpeg\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viaje en curso</h5>\n                            <p class=\"card-text\">¡Mira los detalles del viaje que estas realizando!</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card \" style=\"width: 18rem;\" (click)=\"ir('nuevo')\" >\n                        <img class=\"card-img-top\" height=\"200\" width=\"300\" src=\"../assets/remiseros/encurso.jpeg\" alt=\"\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title text-center\">Nuevo viaje</h5>\n                            <p class=\"card-text text-center\">Reserva un nuevo Viaje!</p>\n                        </div>\n                    </div>                    \n                </div>                \n                <div class=\"col-sm d-flex align-items-stretch \">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('viajes')\">\n                        <img class=\"card-img-top\" height=\"200\" width=\"300\" src=\"../assets/remiseros/viaje.jpg\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes</h5>\n                            <p class=\"card-text\"> ¡Ve la lista de los tus viajes!</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch col-center\">\n                    <div class=\"card\" style=\"width: 18rem; \" (click)=\"ir('configuracion')\" >\n                        <img class=\"card-img-top\" height=\"200\" width=\"300\" src=\"../assets/configuracion.jpg\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Configuracion y datos de la cuenta</h5>\n                            <p class=\"card-text\">Consulta tus datos y configura tu cuenta</p>\n                        </div>\n                    </div>                      \n                </div>\n            </div>                        \n        </div>\n   </div>"

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
            case 'viajes':
                this.ruteador.navigate(['/viajes']);
                break;
            case 'nuevo':
                this.ruteador.navigate(['/cliente/nuevo']);
                break;
            case 'configuracion':
                this.ruteador.navigate(['/cuenta']);
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
    { path: '/cuenta', title: 'Configuracion', icon: 'pe-7s-science', class: '' },
];
var RutasCliente = [
    { path: '/cliente', title: 'Menu Principal', icon: 'pe-7s-graph', class: '' },
    { path: '/cliente/nuevo', title: 'Nuevo Viaje', icon: 'pe-7s-graph', class: '' },
    { path: '/viajes', title: 'Viajes', icon: 'pe-7s-user', class: '' },
    { path: '/cuenta', title: 'Configuracion', icon: 'pe-7s-rocket', class: 'active-pro' },
];
var RutasEncargado = [
    { path: '/encargado', title: 'Menu Principal', icon: 'pe-7s-graph', class: '' },
    { path: '/encargado/remiseros', title: 'Remiseros', icon: 'pe-7s-user', class: '' },
    { path: '/encargado/vehiculos', title: 'Vehiculos', icon: 'pe-7s-science', class: '' },
    { path: '/viajes', title: 'Viajes', icon: 'pe-7s-science', class: '' },
    { path: '/encargado/ganancias', title: 'Ganancias', icon: 'pe-7s-science', class: '' },
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

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" *ngIf=\"cargoBien\">\n      <div class=\"col-sm\">\n        <h3 class=\" text-center first\"> Motivo: </h3>\n        <form [formGroup]=\"cancelarForm\" class=\"text-center\">\n          <div class=\"row justify-content-center\">\n            <p-dropdown [options]=\"motivos\" formControlName=\"motivo\"></p-dropdown>  \n          </div>\n          <div class=\"row justify-content-center\">\n            <textarea [rows]=\"12\" [cols]=\"50\" autoResize=\"autoResize\" pInputTextArea formControlName=\"mensaje\" pTooltip=\"minimo: 20 caracteres, maximo 159 caracteres\"></textarea>\n          </div>\n          <div class=\"row justify-content-center\">\n            <button (click)=\"cancelarViaje()\" [hidden]=\"cancelando || cancelado\" class=\"btn btn-primary btn-block\" [disabled]=\"!cancelarForm.valid\" > <i class=\"pi pi-check\"></i> Enviar</button>\n            <i [hidden]=\"!cancelando\" class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"></i>\n            <button [hidden]=\"!cancelado\" class=\"btn btn-primary btn-block\" (click)=\"volver()\">Menu principal</button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm\" *ngIf=\"!cargoBien\">\n        <h1 class=\"text-center\"> Hubo un error al procesar lo pedido </h1>\n      </div>\n    </div>\n  </div>\n</div>"

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

/***/ "./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n    <div class=\"row\" *ngIf=\"!cargando && !yaHecha\">\n      <div class=\"col-sm-4 offset-sm-4\">\n        <h3 class=\"text-center\"> ¡Completa la encuesta!</h3>\n        <form [formGroup]=\"encuestaForm\" class=\"text-center\">\n          <div class=\"form-group\">\n            \n            <label class=\"center-block\">¿Como calificaria al remisero?\n              <p-rating formControlName=\"puntajeRemisero\" [cancel]=\"false\"></p-rating>\n              <div [hidden]=\"!this.encuestaForm.controls['puntajeRemisero'].invalid || this.encuestaForm.controls['puntajeRemisero'].pristine\" class=\" alert alert-danger\">\n                <div [hidden]=\"!this.encuestaForm.controls['puntajeRemisero'].hasError('required')\"> Esta calificacion es requerida</div>\n              </div>\n            </label>\n\n            <label class=\"center-block\">¿Como calificaria el estado del vehiculo?\n              <p-rating formControlName=\"puntajeVehiculo\" [cancel]=\"false\"></p-rating>\n              <div [hidden]=\"!this.encuestaForm.controls['puntajeVehiculo'].invalid || this.encuestaForm.controls['puntajeVehiculo'].pristine\" class=\" alert alert-danger\">\n                <div [hidden]=\"!this.encuestaForm.controls['puntajeVehiculo'].hasError('required')\"> Esta calificacion es requerida</div>\n              </div>\n            </label>\n            <br>\n\n            <label class=\"center-block\">¿Recomendaria la remiseria a un amigo, familiar o conocido?\n              <br>\n              <p-radioButton name=\"groupname\" value=\"1\" label=\"Si\" formControlName=\"recomendaria\"></p-radioButton>            \n              <br>\n              <p-radioButton name=\"groupname\" value=\"0\" label=\"No\" formControlName=\"recomendaria\"></p-radioButton>            \n            </label>\n\n            <label class=\"center-block\">¿Cual o cuales fueron los mejores aspectos del viaje? \n              <br>\n              <p-multiSelect [options]=\"mejores\" formControlName=\"seleccionados\"></p-multiSelect>\n              <div [hidden]=\"!this.encuestaForm.controls['seleccionados'].invalid || this.encuestaForm.controls['seleccionados'].pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!this.encuestaForm.controls['seleccionados'].hasError('required')\"> Esta calificacion es requerida </div>\n              </div>\n            </label>\n\n            <label class=\"center-block\">¿Como calificaria el sistema de reserva de viaje?\n              <p-slider formControlName=\"puntajeReserva\"></p-slider>\n              <div [hidden]=\"!this.encuestaForm.controls['puntajeReserva'].invalid || this.encuestaForm.controls['puntajeReserva'].pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!this.encuestaForm.controls['puntajeReserva'].hasError('required')\"> Esta calificacion es requerida </div>\n              </div>\n            </label>\n            <label class=\"center-block\">¿Como calificaria el sistema de cobranza de viaje?\n              <p-slider formControlName=\"puntajeCobranza\"></p-slider>\n              <div [hidden]=\"!this.encuestaForm.controls['puntajeCobranza'].invalid || this.encuestaForm.controls['puntajeCobranza'].pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!this.encuestaForm.controls['puntajeCobranza'].hasError('required')\"> Esta calificacion es requerida </div>\n              </div>\n            </label>            \n            <br>\n            <label class=\"center-block\">Realiza algun comentario sobre nuestro servicio\n              <textarea [rows]=\"12\" [cols]=\"50\" autoResize=\"autoResize\" pInputTextArea formControlName=\"mensaje\" pTooltip=\"minimo: 20 caracteres, maximo 159 caracteres\"></textarea>\n              <div [hidden]=\"!this.encuestaForm.controls['mensaje'].invalid || this.encuestaForm.controls['mensaje'].pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!this.encuestaForm.controls['mensaje'].hasError('required')\"> El mensaje es requerido</div>\n                <div [hidden]=\"!this.encuestaForm.controls['mensaje'].hasError('maxLenght')\"> La cantidad maxima de caracteres es 159</div>\n              </div>\n            </label>\n          </div>\n          <i [hidden]=\"!subiendo\" class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"></i>\n          <button class=\"btn btn-primary btn-block\" [hidden]=\"subiendo || subido\" [disabled]=\"!this.encuestaForm.valid\" (click)=\"subir()\"> Enviar</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!cargando && yaHecha\">\n      <h2 class=\"text-center\"> ¡Ya ha realizado la encuesta para este viaje! </h2>\n    </div>\n    <div class=\"row\" *ngIf=\"cargando\" >\n      <div class=\"col-sm-4 offset-sm-4\">\n        <div class=\"lds-css ng-scope\">\n          <div class=\"lds-blocks\" style=\"100%;height:100%\"><div style=\"left:38px;top:38px;animation-delay:0s\"></div>\n          <div style=\"left:80px;top:38px;animation-delay:0.125s\"></div>\n          <div style=\"left:122px;top:38px;animation-delay:0.25s\"></div>\n          <div style=\"left:38px;top:80px;animation-delay:0.875s\"></div>\n          <div style=\"left:122px;top:80px;animation-delay:0.375s\"></div>\n          <div style=\"left:38px;top:122px;animation-delay:0.75s\"></div>\n          <div style=\"left:80px;top:122px;animation-delay:0.625s\"></div>\n          <div style=\"left:122px;top:122px;animation-delay:0.5s\"></div>\n        </div>\n        <style type=\"text/css\">\n        \n        @keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        @-webkit-keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        .lds-blocks {\n          position: relative;\n        }\n        .lds-blocks div {\n          position: absolute;\n          width: 40px;\n          height: 40px;\n          background: #0b1d27;\n          -webkit-animation: lds-blocks 1s linear infinite;\n          animation: lds-blocks 1s linear infinite;\n        }\n        .lds-blocks {\n          width: 200px !important;\n          height: 200px !important;\n          -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n          transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n        }\n        </style>\n      </div>\n    </div>   \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClienteEncuestaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteEncuestaComponent", function() { return ClienteEncuestaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../clases/viajeMaps */ "./src/app/clases/viajeMaps.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/viajes/viajes.service */ "./src/app/servicios/viajes/viajes.service.ts");
/* harmony import */ var _servicios_encuesta_encuesta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicios/encuesta/encuesta.service */ "./src/app/servicios/encuesta/encuesta.service.ts");
/* harmony import */ var _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../servicios/remiseros/remiseros.service */ "./src/app/servicios/remiseros/remiseros.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _clases_encuesta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../clases/encuesta */ "./src/app/clases/encuesta.ts");
/* harmony import */ var _clases_remisero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../clases/remisero */ "./src/app/clases/remisero.ts");
/* harmony import */ var _clases_lugar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../clases/lugar */ "./src/app/clases/lugar.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClienteEncuestaComponent = /** @class */ (function () {
    function ClienteEncuestaComponent(ruteador, ruta, servicioViaje, servicioEncuesta, servicioRemisero) {
        this.ruteador = ruteador;
        this.ruta = ruta;
        this.servicioViaje = servicioViaje;
        this.servicioEncuesta = servicioEncuesta;
        this.servicioRemisero = servicioRemisero;
        this.subido = false;
        this.mejores = [
            { label: 'Viaje', value: 'viaje' },
            { label: 'Conductor', value: 'conductor' },
            { label: 'Vehiculo', value: 'vehiculo' },
            { label: 'Camino', value: 'camino' }
        ];
    }
    ClienteEncuestaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.captchaValido = false;
        this.cargando = true;
        this.ruta.params.subscribe(function (params) {
            _this.idViajeEncuesta = +params['idViaje'];
            _this.servicioEncuesta.buscar(_this.idViajeEncuesta).subscribe(function (data) {
                console.log(data);
                if (data.idViaje != _this.idViajeEncuesta) {
                    _this.servicioViaje.buscarViaje(_this.idViajeEncuesta)
                        .subscribe(function (data) {
                        _this.viajeEncuesta = new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_1__["viajeMaps"](data.id, data.fecha, data.hora, data.estado, data.idCliente, data.monto, new _clases_lugar__WEBPACK_IMPORTED_MODULE_9__["lugar"](data.origen_lat, data.origen_long), new _clases_lugar__WEBPACK_IMPORTED_MODULE_9__["lugar"](data.destino_lat, data.destino_long), data.premium);
                        _this.viajeEncuesta.idRemisero = data.idRemisero;
                        _this.obtenerRemisero(_this.viajeEncuesta.idRemisero);
                        _this.servicioRemisero.buscarRemiseroVehiculo(_this.viajeEncuesta.idRemisero)
                            .subscribe(function (data) {
                            _this.remiseroEncuesta = new _clases_remisero__WEBPACK_IMPORTED_MODULE_8__["remisero"](data.nombre, data.apellido, data.usuario, data.vehiculo);
                            _this.remiseroEncuesta.id = data.id;
                            console.log('remisero');
                            console.log(data);
                            setTimeout(function () {
                                _this.cargando = false;
                            }, 1500);
                        });
                        setTimeout(function () {
                            _this.cargando = false;
                        }, 1500);
                    });
                }
                else {
                    _this.cargando = false;
                    _this.mostrarMensaje('error', '¡Error!', '¡La encuesta ya fue realizada!');
                    setTimeout(function () {
                        _this.ruteador.navigate(['/cliente']);
                    }, 1500);
                }
            });
        });
        this.encuestaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            puntajeRemisero: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            puntajeVehiculo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ]),
            recomendaria: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            seleccionados: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            puntajeReserva: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            puntajeCobranza: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(159)
            ])
        });
    };
    ClienteEncuestaComponent.prototype.subir = function () {
        var _this = this;
        if (this.cargoTres) {
            this.subiendo = true;
            var arraySeleccionados = this.encuestaForm.controls['seleccionados'].value;
            arraySeleccionados = this.formatearEsto(arraySeleccionados);
            var encuestaNueva = new _clases_encuesta__WEBPACK_IMPORTED_MODULE_7__["encuesta"](this.viajeEncuesta.id, this.viajeEncuesta.idRemisero, this.remiseroEncuesta.vehiculo, this.encuestaForm.controls['puntajeRemisero'].value, this.encuestaForm.controls['puntajeVehiculo'].value, this.encuestaForm.controls['recomendaria'].value, arraySeleccionados[0], arraySeleccionados[1], arraySeleccionados[2], arraySeleccionados[3], this.encuestaForm.controls['puntajeReserva'].value, this.encuestaForm.controls['puntajeCobranza'].value, this.encuestaForm.controls['mensaje'].value, this.nombreFoto1, this.nombreFoto2, this.nombreFoto3);
            this.servicioEncuesta.guardarEncuesta(encuestaNueva)
                .subscribe(function (data) {
                setTimeout(function () {
                    _this.subiendo = false;
                    _this.subido = true;
                    _this.mostrarMensaje('success', '¡Exito!', "Se ha enviado su encuesta con exito");
                }, 1500);
            });
        }
        else {
            this.mostrarMensaje('error', '¡Error!', 'Es necesario cargar 3 fotos');
        }
    };
    ClienteEncuestaComponent.prototype.obtenerRemisero = function (idRemisero) {
        var _this = this;
        this.servicioRemisero.buscarRemiseroVehiculo(idRemisero)
            .subscribe(function (data) {
            _this.remiseroEncuesta = new _clases_remisero__WEBPACK_IMPORTED_MODULE_8__["remisero"](data.nombre, data.apellido, data.usuario, data.vehiculo);
            _this.remiseroEncuesta.id = data.id;
        });
    };
    ClienteEncuestaComponent.prototype.formatearEsto = function (seleccionados) {
        var formateado = [];
        if (seleccionados.includes('viaje')) {
            formateado.push(1);
        }
        else {
            formateado.push(0);
        }
        if (seleccionados.includes('conductor')) {
            formateado.push(1);
        }
        else {
            formateado.push(0);
        }
        if (seleccionados.includes('vehiculo')) {
            formateado.push(1);
        }
        else {
            formateado.push(0);
        }
        if (seleccionados.includes('camino')) {
            formateado.push(1);
        }
        else {
            formateado.push(0);
        }
        return formateado;
    };
    ClienteEncuestaComponent.prototype.mostrarMensaje = function (severidad, resumen, detalle) {
        this.msgs = [];
        this.msgs.push({ severity: severidad, summary: resumen, detail: detalle });
    };
    ClienteEncuestaComponent.prototype.subirFoto = function ($event) {
        console.log("xhr");
        console.log($event.xhr);
        console.log($event.xhr.response);
        if ($event.xhr.response == 'true') {
            this.cargoTres = true;
        }
        else {
            this.cargoTres = false;
        }
    };
    ClienteEncuestaComponent.prototype.arreglar = function ($event) {
        var fecha = new Date();
        this.nombreFoto1 = this.viajeEncuesta.id + 'foto1-' + fecha.toDateString + '.jpeg';
        this.nombreFoto2 = this.viajeEncuesta.id + 'foto2-' + fecha.toDateString + '.jpeg';
        this.nombreFoto3 = this.viajeEncuesta.id + 'foto3-' + fecha.toDateString + '.jpeg';
        $event.formData.append('foto_1', this.nombreFoto1);
        $event.formData.append('foto_2', this.nombreFoto2);
        $event.formData.append('foto_3', this.nombreFoto3);
        $event.formData.append('idViaje', this.viajeEncuesta.id);
    };
    ClienteEncuestaComponent.prototype.showResponse = function ($event) {
        if ($event.success == true) {
            this.captchaValido = true;
        }
        console.log($event);
        console.log($event.success);
    };
    ClienteEncuestaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-encuesta',
            template: __webpack_require__(/*! ./cliente-encuesta.component.html */ "./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.html"),
            styles: [__webpack_require__(/*! ./cliente-encuesta.component.css */ "./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_3__["ViajesService"],
            _servicios_encuesta_encuesta_service__WEBPACK_IMPORTED_MODULE_4__["EncuestaService"],
            _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_5__["RemiserosService"]])
    ], ClienteEncuestaComponent);
    return ClienteEncuestaComponent;
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

module.exports = "\n<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" [hidden]=\"!cargoBien\">\n      <div class=\"col-sm\" [hidden]=\"reservoViaje\">\n        <h1 class=\"text-center\"> Datos del viaje </h1>\n        <div class=\"mapita\" #mapa ></div>\n          <h2> Distancia: {{viaje.calcularDistancia()}} Km. </h2>\n          <h2> Monto: $ {{viaje.calcularMonto()}} </h2>\n          <button class=\"btn btn-danger\" (click)=\"cancelar()\" >Cancelar</button>\n          <button [hidden]=\"modificado\" (click)=\"reservar()\" class=\"btn btn-primary\" >Reservar</button>\n          <button [hidden]=\"!modificado\" (click)=\"modificar()\" class=\"btn btn-primary\" >Modificar</button>\n      </div>\n      <div class=\"col-sm\" [hidden]=\"!reservoViaje\">\n        <h1 class=\"text-center\"> {{mensaje}}</h1>\n        <button class=\"btn btn-primary btn-block\" (click)=\"reservarNuevo()\" > Reservar un nuevo viaje </button>\n        <br>\n        <button class=\"btn btn-primary btn-block\" (click)=\"cancelar()\" > Menu principal </button>\n      </div>\n      <div class=\"col-sm\" [hidden]=\"!errorReserva\">\n        <h1> Ha ocurrido un error reservando su viaje </h1> \n      </div>\n    </div>\n    <div class=\"row\" [hidden]=\"cargoBien\">\n      <div class=\"col-sm\" [hidden]=\"cargoBien\">\n        <h1 class=\"text-center\"> Hubo un error al procesar lo pedido</h1>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ClienteInfoNuevoComponent(data, auth, clienteService, ruteador) {
        this.data = data;
        this.auth = auth;
        this.clienteService = clienteService;
        this.ruteador = ruteador;
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
    ClienteInfoNuevoComponent.prototype.reservarNuevo = function () {
        this.ruteador.navigate(['/cliente/nuevo']);
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
        __metadata("design:paramtypes", [_servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "<app-barralateral></app-barralateral>\n<!--<script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha\" async defer></script>-->\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <h1 class=\"text-center\"> {{titulo}} </h1>\n\n\n\n        <form [formGroup]=\"viajeForm\" (submit)=\"llenarFormulario()\">\n          <div class=\"form-group\">\n            <label for=\"fecha\">Fecha</label>\n            <p-calendar [inline]=\"true\"  formControlName=\"fecha\" dateFormat=\"yy/mm/dd\" ></p-calendar>\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"Origen\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #origen [formControl]=\"origenControl\">\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"Destino\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #destino [formControl]=\"destinoControl\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"center-block\">Hora\n              <p-calendar [timeOnly]=\"true\" [inline]=\"true\" formControlName=\"hora\" hourFormat=\"24\"></p-calendar>\n            </label>\n            <div *ngIf=\"viajeForm.controls.hora.invalid\"\n                  class=\"alert alert-danger\">\n\n              <div *ngIf=\"!viajeForm.controls.hora.required\">\n                La hora es requerida\n              </div>\n              <div *ngIf=\"!viajeForm.controls.hora.minlength\">\n                la hora tiene que tener como minimo 4 caracteres\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <h2 class=\"text-center\">Tipo de vehiculo </h2>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"tipo\" value=\"comun\" checked>\n              <label class=\"form-check-label\" for=\"exampleRadios1\">\n                Comun\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"tipo\" value=\"premium\">\n              <label class=\"form-check-label\">\n                Premium\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <p-captcha siteKey=\"6Lf4rF4UAAAAAPiiMTDNqSA-8mQUd9XK1T_pdKdG\" (onResponse)=\"showResponse($event)\"></p-captcha>\n          </div>\n          <!--<button type=\"submit\" class=\"btn btn-primary\"  >Reservar viaje</button> -->              \n         <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!viajeForm.valid\" >Reservar viaje</button>\n        </form>        \n      </div>\n    </div>\n  </div>\n</div>"

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

/***/ "./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n\n    <div class=\"row\" *ngIf=\"!cargando\">\n      <div class=\"col-sm-4\">\n        <h2 class=\"text-center\"> ¡Cambia tu imagen de perfil!</h2>\n        <img  class=\"img-thumbnail\" width=\"304\" height=\"200\" [src]=\"foto\">\n        <!--<p-fileUpload mode=\"basic\" name=\"foto\" url=\"http://localhost/backendTp2/index.php/ingreso/subirFoto\" (onBeforeSend)=\"arreglar($event)\" (onUpload)=\"subirFoto($event)\"></p-fileUpload>-->\n        <p-fileUpload mode=\"basic\" name=\"foto\" url=\"https://remiseriagustavopetruzzi.000webhostapp.com/index.php/ingreso/subirFoto\" (onBeforeSend)=\"arreglar($event)\" (onUpload)=\"subirFoto($event)\"></p-fileUpload>\n      </div>\n\n      <div class=\"col-sm\">\n        <h2 class=\"text-center\"> Modifica tu cuenta </h2>\n        <form [formGroup]=\"modificaDatosForm\" class=\"text-center\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label class=\"center-block\">Nombre\n                  <input class=\"form-control\" formControlName=\"nombre\">\n                  <div [hidden]=\"!this.modificaDatosForm.controls['nombre'].invalid || this.modificaDatosForm.controls['nombre'].pristine\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!this.modificaDatosForm.controls['nombre'].hasError('required')\"> El nombre es requerido </div>\n                  </div>\n                </label>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"center-block\">Apellido\n                  <input class=\"form-control\" formControlName=\"apellido\">\n                  <div [hidden]=\"!this.modificaDatosForm.controls['apellido'].invalid || this.modificaDatosForm.controls['apellido'].pristine\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!this.modificaDatosForm.controls['apellido'].hasError('required')\">El apellido es requerido</div>\n                  </div>\n                </label>\n              </div>\n            </div>\n            \n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label class=\"center-block\"> Usuario\n                  <input class=\"form-control\" formControlName=\"usuario\">\n                  <div [hidden]=\"!this.modificaDatosForm.controls['usuario'].invalid || this.modificaDatosForm.controls['usuario'].pristine\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!this.modificaDatosForm.controls['usuario'].hasError('required')\"> El usuario es requerido</div>\n                  </div>\n                </label>\n              </div>\n              \n              <div class=\"form-group\">\n                <label class=\"center-block\"> Nuevo Password\n                  <input class=\"form-control\" formControlName=\"nuevoPassword\" type=\"password\">\n                  <div [hidden]=\"!this.modificaDatosForm.controls['nuevoPassword'].invalid || this.modificaDatosForm.controls['nuevoPassword'].pristine\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!this.modificaDatosForm.controls['nuevoPassword'].hasError('required')\"> el Password es requerido </div>\n                  </div>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"center-block\"> Password Actual\n              <input class=\"form-control\" formControlName=\"password\" type=\"password\">\n              <div [hidden]=\"!this.modificaDatosForm.controls['password'].invalid || this.modificaDatosForm.controls['password'].pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!this.modificaDatosForm.controls['password'].hasError('required')\"> El nuevo password es requerido </div>\n              </div>\n            </label>\n          </div>\n\n          <i [hidden]=\"!modificando\" class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"></i>\n          <button class=\"btn btn-primary btn-block\" [hidden]=\"modificando\" [disabled]=\"!this.modificaDatosForm.valid\" (click)=\"modificar()\"> Modificar </button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"cargando\" >\n      <div class=\"col-sm-4 offset-sm-4\">\n        <div class=\"lds-css ng-scope\">\n          <div class=\"lds-blocks\" style=\"100%;height:100%\"><div style=\"left:38px;top:38px;animation-delay:0s\"></div>\n          <div style=\"left:80px;top:38px;animation-delay:0.125s\"></div>\n          <div style=\"left:122px;top:38px;animation-delay:0.25s\"></div>\n          <div style=\"left:38px;top:80px;animation-delay:0.875s\"></div>\n          <div style=\"left:122px;top:80px;animation-delay:0.375s\"></div>\n          <div style=\"left:38px;top:122px;animation-delay:0.75s\"></div>\n          <div style=\"left:80px;top:122px;animation-delay:0.625s\"></div>\n          <div style=\"left:122px;top:122px;animation-delay:0.5s\"></div>\n        </div>\n        <style type=\"text/css\">\n        \n        @keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        @-webkit-keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        .lds-blocks {\n          position: relative;\n        }\n        .lds-blocks div {\n          position: absolute;\n          width: 40px;\n          height: 40px;\n          background: #0b1d27;\n          -webkit-animation: lds-blocks 1s linear infinite;\n          animation: lds-blocks 1s linear infinite;\n        }\n        .lds-blocks {\n          width: 200px !important;\n          height: 200px !important;\n          -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n          transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n        }\n        </style>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.ts ***!
  \************************************************************************************/
/*! exports provided: ConfiguracionCuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionCuentaComponent", function() { return ConfiguracionCuentaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
/* harmony import */ var _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/cliente/cliente.service */ "./src/app/servicios/cliente/cliente.service.ts");
/* harmony import */ var _servicios_fotos_fotos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/fotos/fotos.service */ "./src/app/servicios/fotos/fotos.service.ts");
/* harmony import */ var _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servicios/remiseros/remiseros.service */ "./src/app/servicios/remiseros/remiseros.service.ts");
/* harmony import */ var _clases_usuarioCompleto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clases/usuarioCompleto */ "./src/app/clases/usuarioCompleto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfiguracionCuentaComponent = /** @class */ (function () {
    function ConfiguracionCuentaComponent(auth, servicioCliente, servicioRemisero, manejador) {
        this.auth = auth;
        this.servicioCliente = servicioCliente;
        this.servicioRemisero = servicioRemisero;
        this.manejador = manejador;
    }
    ConfiguracionCuentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargando = true;
        this.id = this.auth.obtenerToken().data.id;
        this.tipo = this.auth.obtenerToken().data.tipo;
        if (this.tipo == 'remisero') {
            this.servicioRemisero.buscarRemisero(this.id)
                .subscribe(function (data) {
                _this.user = new _clases_usuarioCompleto__WEBPACK_IMPORTED_MODULE_6__["UsuarioCompleto"](data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto, 'remisero');
                _this.foto = _this.user.obtenerFoto();
                console.log(_this.foto);
                console.log(_this.user);
                _this.cargando = false;
                _this.modificaDatosForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.nombre, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.apellido, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    ]),
                    usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.usuario, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    nuevoPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
                });
            });
        }
        else if (this.tipo == 'cliente') {
            this.servicioCliente.buscarCliente(this.id)
                .subscribe(function (data) {
                _this.user = new _clases_usuarioCompleto__WEBPACK_IMPORTED_MODULE_6__["UsuarioCompleto"](data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto, 'cliente');
                console.log(_this.user);
                _this.foto = _this.user.obtenerFoto();
                console.log(_this.user.obtenerFoto());
                console.log(data);
                _this.cargando = false;
                _this.modificaDatosForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.nombre, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.apellido, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    ]),
                    usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.usuario, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    nuevoPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
                });
            });
        }
        else {
        }
    };
    ConfiguracionCuentaComponent.prototype.modificar = function () {
        var _this = this;
        this.modificando = true;
        if (this.user.password == this.modificaDatosForm.controls['password'].value) {
            if (this.tipo == 'remisero') {
                var passwordViejo = this.user.password;
                this.user.password = this.modificaDatosForm.controls['nuevoPassword'].value;
                this.servicioRemisero.modificarAdmin(this.user.id, this.user.nombre, this.user.apellido, this.user.usuario, this.user.password)
                    .subscribe(function (data) {
                    setTimeout(function () {
                        _this.modificando = false;
                        _this.mostrarMensaje('success', '¡Exito!', 'Se han modificado sus datos con exito');
                    }, 2500);
                });
            }
            else if (this.tipo == 'cliente') {
                this.user.password = this.modificaDatosForm.controls['nuevoPassword'].value;
                this.servicioCliente.modificarCliente(this.user)
                    .subscribe(function (data) {
                    setTimeout(function () {
                        _this.modificando = false;
                        _this.mostrarMensaje('success', '¡Exito!', 'Se han modificado sus datos con exito');
                    }, 2500);
                });
            }
        }
        else {
            this.mostrarMensaje('error', 'error', 'La contraseña no coincide');
        }
    };
    ConfiguracionCuentaComponent.prototype.mostrarMensaje = function (severidad, resumen, detalle) {
        this.msgs = [];
        this.msgs.push({ severity: severidad, summary: resumen, detail: detalle });
    };
    ConfiguracionCuentaComponent.prototype.arreglar = function ($event) {
        $event.formData.append('id', this.id.toString());
        $event.formData.append('usuario', this.user.usuario);
        $event.formData.append('tipo', this.user.tipo);
    };
    ConfiguracionCuentaComponent.prototype.subirFoto = function ($event) {
        var _this = this;
        this.foto = './assets/Blocks-1s-200px.gif';
        if (this.tipo == 'cliente') {
            console.log($event);
            this.servicioCliente.buscarCliente(this.user.id)
                .subscribe(function (data) {
                _this.user = new _clases_usuarioCompleto__WEBPACK_IMPORTED_MODULE_6__["UsuarioCompleto"](data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto, 'cliente');
                _this.mostrarMensaje('success', '¡Exito!', 'Su foto se ha actualizado correctamente');
                _this.foto = _this.user.obtenerFoto();
            });
        }
        else if (this.tipo == 'remisero') {
            console.log($event);
            this.servicioRemisero.buscarRemisero(this.user.id)
                .subscribe(function (data) {
                _this.user = new _clases_usuarioCompleto__WEBPACK_IMPORTED_MODULE_6__["UsuarioCompleto"](data.id, data.nombre, data.apellido, data.usuario, data.password, data.foto, 'remisero');
                _this.mostrarMensaje('success', '¡Exito!', 'Su foto se ha actualizado correctamente');
                _this.foto = _this.user.obtenerFoto();
            });
        }
    };
    ConfiguracionCuentaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuracion-cuenta',
            template: __webpack_require__(/*! ./configuracion-cuenta.component.html */ "./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.html"),
            styles: [__webpack_require__(/*! ./configuracion-cuenta.component.css */ "./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"], _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_5__["RemiserosService"], _servicios_fotos_fotos_service__WEBPACK_IMPORTED_MODULE_4__["FotosService"]])
    ], ConfiguracionCuentaComponent);
    return ConfiguracionCuentaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" *ngIf=\"!cargando && !asignado\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <th scope=\"col\">Nombre  </th>\n          <th scope=\"col\">Apellido </th>\n          <th scope=\"col\">Usuario </th>\n          <th scope=\"col\">Asignar </th>\n\n        </thead>\n        <tbody>\n          <tr [appOcupado]=\"estaOcupado(remisero.id)\" *ngFor=\"let remisero of remiseros\">\n            <td> {{remisero.nombre}} </td>\n            <td> {{remisero.apellido}} </td>\n            <td> {{remisero.usuario}} </td>\n            <td>\n                <button class=\"btn btn-info\" (click)=\"asignar(remisero.id)\"> Asignar</button> \n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"row\" *ngIf=\"!cargando && asignado\">\n      <h3 class=\"text-center\"> ¡Viaje Asignado! </h3>\n    </div>\n    <div class=\"row\" *ngIf=\"cargando\" >\n      <div class=\"col-sm-4 offset-sm-4\">\n        <div class=\"lds-css ng-scope\">\n          <div class=\"lds-blocks\" style=\"100%;height:100%\"><div style=\"left:38px;top:38px;animation-delay:0s\"></div>\n          <div style=\"left:80px;top:38px;animation-delay:0.125s\"></div>\n          <div style=\"left:122px;top:38px;animation-delay:0.25s\"></div>\n          <div style=\"left:38px;top:80px;animation-delay:0.875s\"></div>\n          <div style=\"left:122px;top:80px;animation-delay:0.375s\"></div>\n          <div style=\"left:38px;top:122px;animation-delay:0.75s\"></div>\n          <div style=\"left:80px;top:122px;animation-delay:0.625s\"></div>\n          <div style=\"left:122px;top:122px;animation-delay:0.5s\"></div>\n        </div>\n        <style type=\"text/css\">\n        \n        @keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        @-webkit-keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        .lds-blocks {\n          position: relative;\n        }\n        .lds-blocks div {\n          position: absolute;\n          width: 40px;\n          height: 40px;\n          background: #0b1d27;\n          -webkit-animation: lds-blocks 1s linear infinite;\n          animation: lds-blocks 1s linear infinite;\n        }\n        .lds-blocks {\n          width: 200px !important;\n          height: 200px !important;\n          -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n          transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n        }\n        </style>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.ts ***!
  \********************************************************************************/
/*! exports provided: AsignarViajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarViajeComponent", function() { return AsignarViajeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../clases/viajeMaps */ "./src/app/clases/viajeMaps.ts");
/* harmony import */ var _clases_lugar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clases/lugar */ "./src/app/clases/lugar.ts");
/* harmony import */ var _clases_remisero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../clases/remisero */ "./src/app/clases/remisero.ts");
/* harmony import */ var _clases_vehiculo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../clases/vehiculo */ "./src/app/clases/vehiculo.ts");
/* harmony import */ var _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../servicios/viajes/viajes.service */ "./src/app/servicios/viajes/viajes.service.ts");
/* harmony import */ var _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../servicios/remiseros/remiseros.service */ "./src/app/servicios/remiseros/remiseros.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AsignarViajeComponent = /** @class */ (function () {
    function AsignarViajeComponent(ruteador, ruta, servicioViaje, servicioRemiseros) {
        this.ruteador = ruteador;
        this.ruta = ruta;
        this.servicioViaje = servicioViaje;
        this.servicioRemiseros = servicioRemiseros;
        this.viajesFecha = [];
        this.remiseros = [];
        //remiserosLibres:remisero[] = [];
        this.remiserosOcupados = [];
    }
    AsignarViajeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargando = true;
        this.asignado = false;
        //this.buscarRemiseros();
        this.ruta.params.subscribe(function (params) {
            _this.idViajeAsignado = +params['idViaje'];
            _this.servicioViaje.buscarViaje(_this.idViajeAsignado)
                .subscribe(function (data) {
                _this.viajeAsignado = new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_1__["viajeMaps"](data.id, data.fecha, data.hora, data.estado, data.idCliente, data.monto, new _clases_lugar__WEBPACK_IMPORTED_MODULE_2__["lugar"](data.origen_lat, data.origen_long), new _clases_lugar__WEBPACK_IMPORTED_MODULE_2__["lugar"](data.destino_lat, data.destino_long), data.premium);
                _this.servicioViaje.obtenerViajeFecha(_this.viajeAsignado.fecha)
                    .subscribe(function (data) {
                    data.forEach(function (element) {
                        var viajeElement = new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_1__["viajeMaps"](element.id, element.fecha, element.hora, element.estado, element.idCliente, element.monto, new _clases_lugar__WEBPACK_IMPORTED_MODULE_2__["lugar"](element.origen_lat, element.origen_long), new _clases_lugar__WEBPACK_IMPORTED_MODULE_2__["lugar"](element.destino_lat, element.destino_long), element.premium);
                        viajeElement.idRemisero = element.idRemisero;
                        _this.viajesFecha.push(viajeElement);
                    });
                    _this.servicioRemiseros.listaRemiserosVehiculos()
                        .subscribe(function (data) {
                        var auxiliarRemisero = [];
                        data.forEach(function (element) {
                            var remiseroElement = new _clases_remisero__WEBPACK_IMPORTED_MODULE_3__["remisero"](element.nombre, element.apellido, element.usuario, new _clases_vehiculo__WEBPACK_IMPORTED_MODULE_4__["vehiculo"](element.marca, element.modelo, element.anio, element.premium));
                            remiseroElement.id = element.id;
                            remiseroElement.vehiculo.id = element.idVehiculo;
                            auxiliarRemisero.push(remiseroElement);
                        });
                        //FILTRO REMISEROS SEGUN EL AUTO NECESARIO
                        _this.remiseros = auxiliarRemisero.filter(function (remisero) { return parseInt(remisero.vehiculo.premium) === _this.viajeAsignado.premium; });
                        var _loop_1 = function (index) {
                            var remisero_1 = _this.remiseros[index];
                            _this.viajesFecha.forEach(function (element) {
                                if (element.idRemisero == remisero_1.id) {
                                    _this.remiserosOcupados.push(remisero_1);
                                }
                            });
                        };
                        for (var index = 0; index < _this.remiseros.length; index++) {
                            _loop_1(index);
                        }
                        _this.cargando = false;
                    });
                });
            });
        });
    };
    AsignarViajeComponent.prototype.buscarRemiseros = function () {
        var _this = this;
        this.servicioRemiseros.listaRemiserosVehiculos()
            .subscribe(function (data) {
            data.forEach(function (element) {
                var remiseroElement = new _clases_remisero__WEBPACK_IMPORTED_MODULE_3__["remisero"](element.nombre, element.apellido, element.usuario, new _clases_vehiculo__WEBPACK_IMPORTED_MODULE_4__["vehiculo"](element.marca, element.modelo, element.anio, element.premium));
                remiseroElement.id = element.id;
                remiseroElement.vehiculo.id = element.idVehiculo;
                _this.remiseros.push(remiseroElement);
            });
        });
    };
    AsignarViajeComponent.prototype.estaOcupado = function (idRemisero) {
        var ocupado = false;
        this.remiserosOcupados.forEach(function (element) {
            if (idRemisero == element.id) {
                ocupado = true;
            }
        });
        return ocupado;
    };
    AsignarViajeComponent.prototype.asignar = function (idRemisero) {
        var _this = this;
        this.servicioRemiseros.asignarViaje(this.viajeAsignado.id, idRemisero)
            .subscribe(function (data) {
            _this.asignado = true;
        });
    };
    AsignarViajeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asignar-viaje',
            template: __webpack_require__(/*! ./asignar-viaje.component.html */ "./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.html"),
            styles: [__webpack_require__(/*! ./asignar-viaje.component.css */ "./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_5__["ViajesService"],
            _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_6__["RemiserosService"]])
    ], AsignarViajeComponent);
    return AsignarViajeComponent;
}());



/***/ }),

/***/ "./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" *ngIf=\"!cargando\">\n      <button class=\"btn btn-success btn-info\" (click)=\"generarPdf()\" >Generar pdf </button>      \n    </div>\n    <div class =\"row\" *ngIf=\"!cargando\">\n      <div class=\"col-sm-12\" #alPdf>\n        <h3 class=\"text-center\"> Comparacion de ganancias en efectivo y deuda de cuentas corrientes </h3>\n        <br>\n        <h5 class=\"text-center\"> Efectivo: $ {{efectivoTotal.toFixed(2)}} </h5>\n        <h5 class=\"text-center\"> Cuenta Corriente: $ {{cuentaCorriente.toFixed(2)}} </h5>\n        <p-chart type=\"pie\" [data]=\"data\"></p-chart>\n        <br>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"cargando\" >\n      <div class=\"col-sm-4 offset-sm-4\">\n        <div class=\"lds-css ng-scope\">\n          <div class=\"lds-blocks\" style=\"100%;height:100%\"><div style=\"left:38px;top:38px;animation-delay:0s\"></div>\n          <div style=\"left:80px;top:38px;animation-delay:0.125s\"></div>\n          <div style=\"left:122px;top:38px;animation-delay:0.25s\"></div>\n          <div style=\"left:38px;top:80px;animation-delay:0.875s\"></div>\n          <div style=\"left:122px;top:80px;animation-delay:0.375s\"></div>\n          <div style=\"left:38px;top:122px;animation-delay:0.75s\"></div>\n          <div style=\"left:80px;top:122px;animation-delay:0.625s\"></div>\n          <div style=\"left:122px;top:122px;animation-delay:0.5s\"></div>\n        </div>\n        <style type=\"text/css\">\n        \n        @keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        @-webkit-keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        .lds-blocks {\n          position: relative;\n        }\n        .lds-blocks div {\n          position: absolute;\n          width: 40px;\n          height: 40px;\n          background: #0b1d27;\n          -webkit-animation: lds-blocks 1s linear infinite;\n          animation: lds-blocks 1s linear infinite;\n        }\n        .lds-blocks {\n          width: 200px !important;\n          height: 200px !important;\n          -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n          transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n        }\n        </style>\n      </div>\n    </div>    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GananciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GananciasComponent", function() { return GananciasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../servicios/viajes/viajes.service */ "./src/app/servicios/viajes/viajes.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GananciasComponent = /** @class */ (function () {
    function GananciasComponent(servicioViaje) {
        this.servicioViaje = servicioViaje;
        this.efectivoTotal = 0;
        this.cuentaCorriente = 0;
    }
    GananciasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargando = true;
        this.servicioViaje.montos()
            .subscribe(function (data) {
            data.forEach(function (element) {
                if (element.efectivo) {
                    _this.efectivoTotal += element.monto;
                }
                else if (!element.efectivo) {
                    _this.cuentaCorriente += element.monto;
                }
            });
            _this.data = {
                labels: ['Efectivo', 'Deuda en Cta Cte'],
                datasets: [
                    {
                        data: [_this.efectivoTotal, _this.cuentaCorriente],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }
                ]
            };
            _this.cargando = false;
        });
    };
    GananciasComponent.prototype.generarPdf = function () {
        html2canvas__WEBPACK_IMPORTED_MODULE_3__(this.alPdf.nativeElement)
            .then(function (canvas) {
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__('l');
            var img = canvas.toDataURL('image/png');
            doc.addImage(img, 'JPEG', 5, 20);
            doc.save('algo2.pdf');
        });
        /*
        html2canvas(this.alPdf.nativeElement, {
            onrendered: (canvas) =>{
            let doc = new jsPdf();
                  doc.addImage(canvas.toDataUrl());
                  doc.save('algo2.pdf');
                })
            }
        })
          */
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alPdf'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GananciasComponent.prototype, "alPdf", void 0);
    GananciasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ganancias',
            template: __webpack_require__(/*! ./ganancias.component.html */ "./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.html"),
            styles: [__webpack_require__(/*! ./ganancias.component.css */ "./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_1__["ViajesService"]])
    ], GananciasComponent);
    return GananciasComponent;
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

module.exports = "<app-barralateral></app-barralateral>    \n<div class=\"container\">\n  <div class=\"jumbotron\">\n      <div class=\"row\">\n          <div class=\"col-sm d-flex align-items-stretch\">\n              <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('remiseros')\" >\n                  <img class=\"card-img-top\" src=\"../assets/remiseros/remisero.jpeg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\">Remiseros</h5>\n                      <p class=\"card-text\">¡Consulta el listado de remiseros!</p>\n                  </div>\n              </div>                    \n          </div>                \n          <div class=\"col-sm d-flex align-items-stretch \">\n              <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('vehiculos')\">\n                  <img class=\"card-img-top\" src=\"../assets/remiseros/autos.jpeg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\">Vehiculos</h5>\n                      <p class=\"card-text\"> ¡Consulta el listado de vehiculos!</p>\n                  </div>\n              </div>                    \n          </div>\n          <div class=\"col-sm d-flex align-items-stretch\">\n              <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('viajes')\" >\n                  <img class=\"card-img-top\" src=\"../assets/remiseros/viaje.jpg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\">Viajes </h5>\n                      <p class=\"card-text\"> ¡Consulta los viajes ! </p>\n                  </div>\n              </div>                      \n          </div>\n          <div class=\"col-sm d-flex align-items-stretch\">\n              <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('ganancias')\" >\n                  <img class=\"card-img-top\" src=\"../assets/remiseros/estadisticas.jpg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\">Ganancias </h5>\n                      <p class=\"card-text\"> ¡Consulta las ganancias  ! </p>\n                  </div>\n              </div>                      \n          </div>            \n      </div>                        \n  </div>\n</div>"

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
            case 'ganancias':
                this.ruteador.navigate(['/encargado/ganancias']);
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

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"text-center\"> Remiseros </h1>\n    <div class=\"row\">\n      <button class=\"btn btn-primary btn-block\" (click)=\"ir()\"> Agregar Remisero</button>\n     \n      <div class=\"col-sm\" >  \n        <table class=\"table\" *ngIf=\"remiseros\">\n          <thead>\n            <tr>\n              <th> Nombre </th>\n              <th> Apellido </th>\n              <th> Vehiculo </th>\n              <th> Opciones </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let remisero of remiseros\" (click)=\"ver(remisero)\" >\n              <td> {{ remisero.nombre }} </td>\n              <td> {{ remisero.apellido }} </td>\n              <td *ngIf=\"remisero.vehiculo\"> Asignado </td>\n              <td *ngIf=\"!remisero.vehiculo\"> Sin asignar </td>\n              <td> <button class=\"btn btn-success\" (click)=\"modificar(remisero)\"> Modificar </button> </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-sm\" >\n        <div class=\"card\" style=\"width: 18rem;\">\n          <div class=\"card-body\" *ngIf=\"asignado\">\n            <h4> Chofer </h4>\n            <h5 class=\"card-title\">Nombre: {{ asignado.nombre }}</h5>\n            <h5 class=\"card-title\">Apellido: {{ asignado.apellido }}</h5>\n            <h5 class=\"card-title\">Usuario: {{ asignado.usuario }}</h5>\n            <button class=\"btn btn-primary\" (click)=\"mostrarListado()\" [hidden]=\"vehiculoAsignado\"> Asignar Vehiculo </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm\"  >\n        <div class=\"card\" style=\"width: 18rem;\">\n          <div class=\"card-body\" *ngIf=\"vehiculoAsignado\">\n            <h4> Vehiculo </h4>\n            <h5 class=\"card-title\"> Modelo: {{vehiculoAsignado.modelo }}</h5>\n            <h5 class=\"card-title\"> Marca: {{ vehiculoAsignado.marca}}</h5>            \n            <h5 class=\"card-title\"> Tipo: {{ vehiculoAsignado.premium | premium }}</h5>\n            <button class=\"btn btn-primary\" (click)=\"mostrarListado()\" > Reasignar vehiculo </button>     \n            <button class=\"btn btn-danger\" (click)=\"removerVehiculo( vehiculoAsignado.id )\" > Remover vehiculo </button>     \n        </div>       \n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"mostrarVehiculos\">\n      <div class=\"col-sm\">\n        <h4 class=\"text-center\"> Asignar a: {{asignado.nombre}} {{asignado.apellido}}</h4>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th> Modelo </th>\n              <th> Marca </th>\n              <th> Año </th>\n              <th> Tipo </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let noAsignado of noAsignados\">\n              <td> {{ noAsignado.modelo }} </td>\n              <td> {{ noAsignado.marca }} </td>\n              <td> {{ noAsignado.anio }} </td>\n              <td> {{ noAsignado.premium | premium }} </td>\n              <td> <button class=\"btn btn-primary\" (click)=\"asignar(noAsignado)\"> asignar </button>\n            </tr>\n          </tbody>\n        </table>    \n      </div>      \n    </div>    \n  </div>\n</div>"

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
        var _this = this;
        this.cargando = true;
        /*
        this.obtenerRemiseros();
        this.obtenerVehiculos();
        this.obtenerVehiculosSinAsignar();
        this.mostrarVehiculos = false;
        */
        this.remiseroService.listaRemiseros()
            .subscribe(function (data) {
            _this.remiseros = data;
            _this.vehiculoService.vehiculos()
                .subscribe(function (data) {
                _this.vehiculos = data;
                _this.vehiculoService.noAsignados()
                    .subscribe(function (data) {
                    _this.noAsignados = data;
                    _this.mostrarVehiculos = false;
                    _this.cargando = false;
                });
            });
            /*
            setTimeout(() => {
              this.cargando = false;
            }, 1500);
            */
        });
    };
    RemiserosEncargadoComponent.prototype.obtenerRemiseros = function () {
        var _this = this;
        this.cargando = true;
        this.remiseroService.listaRemiseros()
            .subscribe(function (data) {
            _this.remiseros = data;
            _this.vehiculoService.vehiculos()
                .subscribe(function (data) {
                _this.vehiculos = data;
            });
            /*
            setTimeout(() => {
              this.cargando = false;
            }, 1500);
            */
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

/***/ "./src/app/componentes/registro/registro-cliente/registro-cliente.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/registro/registro-cliente/registro-cliente.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/registro/registro-cliente/registro-cliente.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/registro/registro-cliente/registro-cliente.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <h2 class=\"text-center\"> ¡Registrate!</h2>\n        <form [formGroup]=\"nuevoClienteForm\" class=\"text-center\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n\n                <label class=\"center-block\">Nombre\n                  <input class=\"form-control\" formControlName=\"nombre\">\n                  <div [hidden]=\"!this.nuevoClienteForm.controls['nombre'].invalid || this.nuevoClienteForm.controls['nombre'].pristine\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!this.nuevoClienteForm.controls['nombre'].hasError('required')\"> El nombre es requerido </div>\n                  </div>\n                </label>\n              \n\n                <label class=\"center-block\">Apellido\n                  <input class=\"form-control\" formControlName=\"apellido\">\n                  <div [hidden]=\"!this.nuevoClienteForm.controls['apellido'].invalid || this.nuevoClienteForm.controls['apellido'].pristine\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!this.nuevoClienteForm.controls['apellido'].hasError('required')\">El apellido es requerido </div>\n                  </div>\n                </label>\n\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n\n                <label class=\"center-block\">Usuario\n                  <input class=\"form-control\" formControlName=\"usuario\">\n                  <div [hidden]=\"!this.nuevoClienteForm.controls['usuario'].invalid || this.nuevoClienteForm.controls['usuario'].pristine\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!this.nuevoClienteForm.controls['usuario'].hasError('required')\">El usuario es requerido </div>\n                  </div>\n                </label>\n\n\n                <label class=\"center-block\">password\n                  <input class=\"form-control\" formControlName=\"password\" type=\"password\">\n                  <div [hidden]=\"!this.nuevoClienteForm.controls['password'].invalid || this.nuevoClienteForm.controls['password'].pristine\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!this.nuevoClienteForm.controls['password'].hasError('required')\"> El password es requerido </div>\n                  </div>\n                </label>\n\n            </div>\n          </div>\n          <h5 class=\"text-center\"> Resuelve el captcha </h5>\n          <div class=\"form-group\">\n            <canvas #myCanvas width=\"200\" height=\"100\">\n            </canvas>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"center-block\"> \n              <input class=\"form-control\" formControlName=\"captcha\">\n              <div [hidden]=\"!this.nuevoClienteForm.controls['captcha'].invalid || this.nuevoClienteForm.controls['captcha'].pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!this.nuevoClienteForm.controls['captcha'].hasError('pattern')\"> Solamente numeros</div>\n                <div [hidden]=\"!this.nuevoClienteForm.controls['captcha'].hasError('required')\"> El captcha es requerido </div>\n              </div>\n            </label>\n          </div>\n          <div class=\"loader\" *ngIf=\"esperando\"></div>\n          <button class=\"btn btn-primary btn-block\" [hidden]=\"esperando\" [disabled]=\"!this.nuevoClienteForm.valid\" (click)=\"registrarse()\" >Registrarse</button>          \n        </form>\n        <br>\n        <button class=\"btn btn-success btn-block\" routerLink=\"/login\"> Inicio</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/registro/registro-cliente/registro-cliente.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/registro/registro-cliente/registro-cliente.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistroClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroClienteComponent", function() { return RegistroClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_usuarios_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/usuarios/usuarios.service */ "./src/app/servicios/usuarios/usuarios.service.ts");
/* harmony import */ var _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicios/cliente/cliente.service */ "./src/app/servicios/cliente/cliente.service.ts");
/* harmony import */ var _clases_captcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../clases/captcha */ "./src/app/clases/captcha.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistroClienteComponent = /** @class */ (function () {
    function RegistroClienteComponent(usuarioServicio, clienteServicio, ruteador) {
        this.usuarioServicio = usuarioServicio;
        this.clienteServicio = clienteServicio;
        this.ruteador = ruteador;
        this.usuarios = [];
        this.msgs = [];
    }
    RegistroClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.esperando = false;
        this.miCaptcha = new _clases_captcha__WEBPACK_IMPORTED_MODULE_5__["captcha"]();
        //this.miCaptcha.cambiarCaptcha();           
        var canvasE1 = this.canvas.nativeElement;
        this.cx = canvasE1.getContext('2d');
        this.cx.font = "30px Arial";
        var texto = this.miCaptcha.capcha();
        console.log(texto);
        this.cx.fillText(texto, 50, 50);
        this.usuarioRepetido = false;
        this.nuevoRemisero = true;
        this.usuarioServicio.obtenerUsuarios()
            .subscribe(function (data) {
            _this.usuarios = data;
        });
        this.nuevoClienteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            captcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$"),
            ])
        });
    };
    RegistroClienteComponent.prototype.registrarse = function () {
        var _this = this;
        this.esperando = true;
        this.usuarioRepetido = false;
        console.log(this.nuevoClienteForm.controls['captcha'].value);
        var resultado = this.miCaptcha.resultado();
        console.log(resultado);
        if (this.nuevoClienteForm.controls['captcha'].value == this.miCaptcha.resultado()) {
            this.usuarios.forEach(function (element) {
                if (_this.nuevoClienteForm.controls['usuario'].value == element.usuario) {
                    _this.esperando = false;
                    _this.usuarioRepetido = true;
                    _this.mostrarMensaje('error', 'error usuario', 'Ya existe un cliente con ese usuario ');
                }
            });
            if (!this.usuarioRepetido) {
                this.clienteServicio.registrar(this.nuevoClienteForm.controls['nombre'].value, this.nuevoClienteForm.controls['apellido'].value, this.nuevoClienteForm.controls['usuario'].value, this.nuevoClienteForm.controls['password'].value).subscribe(function (data) {
                    _this.esperando = false;
                    _this.mostrarMensaje('success', '¡Exito!', "¡Se ha registrado en la remiseria!");
                    setTimeout(function () {
                        _this.ruteador.navigate(['/login']);
                    }, 2500);
                }, function (error) {
                    _this.esperando = false;
                    _this.mostrarMensaje('error', 'error', 'Ha ocurrido un error');
                });
            }
        }
        else {
            this.mostrarMensaje('error', 'error captcha', '¡Vaya! Parece que eres un robot');
        }
    };
    RegistroClienteComponent.prototype.mostrarMensaje = function (severidad, resumen, detalle) {
        this.msgs = [];
        this.msgs.push({ severity: severidad, summary: resumen, detail: detalle });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegistroClienteComponent.prototype, "canvas", void 0);
    RegistroClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro-cliente',
            template: __webpack_require__(/*! ./registro-cliente.component.html */ "./src/app/componentes/registro/registro-cliente/registro-cliente.component.html"),
            styles: [__webpack_require__(/*! ./registro-cliente.component.css */ "./src/app/componentes/registro/registro-cliente/registro-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_usuarios_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"], _servicios_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistroClienteComponent);
    return RegistroClienteComponent;
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

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" *ngIf=\"cargoBien\">\n      <div class=\"col-sm\">\n        <h3 class=\" text-center first\"> Motivo: </h3>\n        <form [formGroup]=\"rechazarForm\" class=\"text-center\">\n          <div class=\"row justify-content-center\">\n            <p-dropdown [options]=\"motivos\" formControlName=\"motivo\"></p-dropdown>  \n          </div>\n          <div class=\"row justify-content-center\">\n            <textarea [rows]=\"12\" [cols]=\"50\" autoResize=\"autoResize\" pInputTextArea formControlName=\"mensaje\" pTooltip=\"minimo: 20 caracteres, maximo 159 caracteres\"></textarea>\n          </div>\n          <div class=\"row justify-content-center\">\n            <button (click)=\"rechazarViaje()\" [hidden]=\"rechazando || rechazado\" class=\"btn btn-primary\" [disabled]=\"!rechazarForm.valid\" > <i class=\"pi pi-check\"></i> Enviar</button>\n            <i [hidden]=\"!rechazando\" class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"></i>\n            <button [hidden]=\"!rechazado\" class=\"btn btn-primary btn-block\" (click)=\"volver()\">Menu principal</button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm\" *ngIf=\"!cargoBien\">\n        <h1 class=\"text-center\"> Hubo un error al procesar lo pedido </h1>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<app-barralateral></app-barralateral>\n<div *ngIf=\"viajesRemisero\">\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n            <div class=\"row\">              \n                <div class=\"col-sm d-flex align-items-stretch \">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('viajes')\">\n                        <img class=\"card-img-top\" height=\"200\" width=\"300\" src=\"../assets/remiseros/encurso.jpeg/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Viajes </h5>\n                            <p class=\"card-text\"> Ve la lista de tus viajes</p>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem;\" (click)=\"ir('vehiculo')\" >\n                        <img class=\"card-img-top\" height=\"200\" width=\"300\" src=\"../assets/remiseros/autos.jpeg/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Vehiculo</h5>\n                            <p class=\"card-text\"> Ve el vehiculo que tienes asignado</p>\n                        </div>\n                    </div>                      \n                </div>\n                <div class=\"col-sm d-flex align-items-stretch\">\n                    <div class=\"card\" style=\"width: 18rem; \" (click)=\"ir('configuracion')\" >\n                        <img class=\"card-img-top\" height=\"200\" width=\"300\" src=\"../assets/configuracion.jpg/\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Configuracion y datos de la cuenta</h5>\n                            <p class=\"card-text\">Consulta tus datos y configura tu cuenta</p>\n                        </div>\n                    </div>                      \n                </div>\n            </div>                        \n        </div>\n<div *ngIf=\"!viajesRemisero\">\n    <p> no se cargaron los viajes </p>\n</div>"

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
            case 'configuracion':
                this.ruteador.navigate(['/cuenta']);
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

/***/ "./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\" *ngIf=\"!cargando\">\n      <div class=\"col-sm-4 offset-md-4\">\n        <p-messages [(value)]=\"msgs\"></p-messages>\n        <h2 class=\"text-center\"> Finaliza un viaje </h2>\n        <br>\n        <form [formGroup]=\"finalizaViajeForm\" class=\"text-center\">\n          <div class=\"form-group\">\n            <label class=\"center-block\"> Monto\n              <input class=\"form-control\" formControlName=\"monto\">\n              <div [hidden]=\"!this.finalizaViajeForm.controls['monto'].invalid || this.finalizaViajeForm.controls['monto'].pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!this.finalizaViajeForm.controls['monto'].hasError('required')\"> El Monto es requerido</div>\n              </div>\n            </label>\n          </div>\n          <button [hidden]=\"esconderBoton\" class=\"btn btn-success btn-block\" [disabled]=\"!this.finalizaViajeForm.valid\" (click)=\"efectivo()\"> Efectivo </button>\n          <button [hidden]=\"esconderBoton\" class=\"btn btn-success btn-block\" [disabled]=\"!this.finalizaViajeForm.valid\" (click)=\"cuentaCorriente()\"> Cuenta Corriente </button>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"cargando\" >\n      <div class=\"col-sm-4 offset-sm-4\">\n        <div class=\"lds-css ng-scope\">\n          <div class=\"lds-blocks\" style=\"100%;height:100%\"><div style=\"left:38px;top:38px;animation-delay:0s\"></div>\n          <div style=\"left:80px;top:38px;animation-delay:0.125s\"></div>\n          <div style=\"left:122px;top:38px;animation-delay:0.25s\"></div>\n          <div style=\"left:38px;top:80px;animation-delay:0.875s\"></div>\n          <div style=\"left:122px;top:80px;animation-delay:0.375s\"></div>\n          <div style=\"left:38px;top:122px;animation-delay:0.75s\"></div>\n          <div style=\"left:80px;top:122px;animation-delay:0.625s\"></div>\n          <div style=\"left:122px;top:122px;animation-delay:0.5s\"></div>\n        </div>\n        <style type=\"text/css\">\n        \n        @keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        @-webkit-keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        .lds-blocks {\n          position: relative;\n        }\n        .lds-blocks div {\n          position: absolute;\n          width: 40px;\n          height: 40px;\n          background: #0b1d27;\n          -webkit-animation: lds-blocks 1s linear infinite;\n          animation: lds-blocks 1s linear infinite;\n        }\n        .lds-blocks {\n          width: 200px !important;\n          height: 200px !important;\n          -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n          transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n        }\n        </style>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RemiserosFinalizarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemiserosFinalizarComponent", function() { return RemiserosFinalizarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/viajes/viajes.service */ "./src/app/servicios/viajes/viajes.service.ts");
/* harmony import */ var _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/remiseros/remiseros.service */ "./src/app/servicios/remiseros/remiseros.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemiserosFinalizarComponent = /** @class */ (function () {
    function RemiserosFinalizarComponent(ruteador, ruta, servicioViaje, servicioRemisero) {
        this.ruteador = ruteador;
        this.ruta = ruta;
        this.servicioViaje = servicioViaje;
        this.servicioRemisero = servicioRemisero;
    }
    RemiserosFinalizarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargando = true;
        this.esconderBoton = false;
        this.ruta.params.subscribe(function (params) {
            _this.idViaje = +params['idViaje'];
            _this.monto = +params['monto'];
            _this.servicioViaje.buscarViaje(_this.idViaje)
                .subscribe(function (data) {
                console.log(data);
                _this.cargando = false;
                _this.finalizaViajeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                    monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.monto, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                    ])
                });
            });
        });
    };
    RemiserosFinalizarComponent.prototype.efectivo = function () {
        var _this = this;
        this.cargando = true;
        this.servicioRemisero.finalizarViajeEfectivo(this.idViaje, this.monto)
            .subscribe(function (data) {
            _this.cargando = false;
            _this.esconderBoton = true;
            _this.mostrarMensaje('success', '¡Exito!', 'El viaje ha finalizado correctamente');
            setTimeout(function () {
                _this.ruteador.navigate(['/remisero']);
            }, 2000);
        });
    };
    RemiserosFinalizarComponent.prototype.cuentaCorriente = function () {
        var _this = this;
        this.cargando = true;
        this.servicioRemisero.finalizarViajeCuentaCorriente(this.idViaje, this.monto)
            .subscribe(function (data) {
            _this.cargando = false;
            _this.esconderBoton = true;
            _this.mostrarMensaje('success', '¡Exito!', 'El viaje ha finalizado correctamente');
            setTimeout(function () {
                _this.ruteador.navigate(['/remisero']);
            }, 2000);
        });
    };
    RemiserosFinalizarComponent.prototype.mostrarMensaje = function (severidad, resumen, detalle) {
        this.msgs = [];
        this.msgs.push({ severity: severidad, summary: resumen, detail: detalle });
    };
    RemiserosFinalizarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remiseros-finalizar',
            template: __webpack_require__(/*! ./remiseros-finalizar.component.html */ "./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.html"),
            styles: [__webpack_require__(/*! ./remiseros-finalizar.component.css */ "./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_viajes_viajes_service__WEBPACK_IMPORTED_MODULE_2__["ViajesService"],
            _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_3__["RemiserosService"]])
    ], RemiserosFinalizarComponent);
    return RemiserosFinalizarComponent;
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

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h2 class=\"text-center\"> Vehiculos </h2>\n        <div class=\"row\" *ngIf=\"!cargando\">\n            <button class=\"btn btn-primary btn-block\" (click)=\"mostrarNuevo()\"> Nuevo Auto </button>\n        </div>\n        <div class=\"row\" *ngIf=\"!cargando\">\n            <div class=\"col-sm\">\n                <app-lista-vehiculos (enviarVehiculo)=\"mostrar($event)\" [vehiculos]=\"autos\" ></app-lista-vehiculos>\n            </div>\n            <div class=\"col-sm\">\n                <app-modificar-vehiculos [dato]=\"auto\" (enviarModificado)=\"modificado($event)\"></app-modificar-vehiculos>\n            </div>\n            <div class=\"col-sm\">\n                <app-nuevo-vehiculo [nuevo]=\"nuevoForm\" (enviarNuevo)=\"agregado($event)\"></app-nuevo-vehiculo>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"cargando\" >\n            <div class=\"col-sm-4 offset-sm-4\">\n                <div class=\"lds-css ng-scope\">\n                <div class=\"lds-blocks\" style=\"100%;height:100%\"><div style=\"left:38px;top:38px;animation-delay:0s\"></div>\n                <div style=\"left:80px;top:38px;animation-delay:0.125s\"></div>\n                <div style=\"left:122px;top:38px;animation-delay:0.25s\"></div>\n                <div style=\"left:38px;top:80px;animation-delay:0.875s\"></div>\n                <div style=\"left:122px;top:80px;animation-delay:0.375s\"></div>\n                <div style=\"left:38px;top:122px;animation-delay:0.75s\"></div>\n                <div style=\"left:80px;top:122px;animation-delay:0.625s\"></div>\n                <div style=\"left:122px;top:122px;animation-delay:0.5s\"></div>\n                </div>\n                <style type=\"text/css\">\n                \n                @keyframes lds-blocks {\n                0% {\n                    background: #72cbfd;\n                }\n                12.5% {\n                    background: #72cbfd;\n                }\n                12.625% {\n                    background: #0b1d27;\n                }\n                100% {\n                    background: #0b1d27;\n                }\n                }\n                @-webkit-keyframes lds-blocks {\n                0% {\n                    background: #72cbfd;\n                }\n                12.5% {\n                    background: #72cbfd;\n                }\n                12.625% {\n                    background: #0b1d27;\n                }\n                100% {\n                    background: #0b1d27;\n                }\n                }\n                .lds-blocks {\n                position: relative;\n                }\n                .lds-blocks div {\n                position: absolute;\n                width: 40px;\n                height: 40px;\n                background: #0b1d27;\n                -webkit-animation: lds-blocks 1s linear infinite;\n                animation: lds-blocks 1s linear infinite;\n                }\n                .lds-blocks {\n                width: 200px !important;\n                height: 200px !important;\n                -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n                transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n                }\n                </style>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.cargando = true;
        this.serviciosVehiculos.vehiculos()
            .subscribe(function (data) {
            _this.autos = data;
            setTimeout(function () {
                _this.cargando = false;
            }, 1500);
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

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h2 class=\"text-center\"> Viaje </h2>\n        <p-messages [(value)]=\"msgs\"></p-messages>\n        <div class=\"row\" [hidden]=\"!cargoBien\">\n            <div class=\"col-sm\">\n                <div class=\"mapita\" #mapa ></div>\n                <h2 class=\"text-center\" > Fecha: {{verViaje.fecha}}</h2>\n                <h2 class=\"text-center\" > Hora : {{verViaje.hora}} </h2>\n                <h2 class=\"text-center\" > Estado : {{verViaje.estado}} </h2>\n                <div *ngIf=\"verViaje.estado != 'finalizado'\">\n                    <h2 class=\"text-center\" > Monto Aproximado :  $ {{verViaje.calcularMonto()}}</h2>\n                    <div class=\"text-center\" *ngIf=\"tipo == 'cliente'\">\n                        <button class=\"btn btn-primary\" (click)=\"modificar()\"> Modificar </button>\n                        <button class=\"btn btn-danger\" (click)=\"cancelar()\"> Cancelar </button>\n                    </div>\n                </div>\n                <div class=\"text-center\" *ngIf=\"verViaje.estado == 'solicitado'\">\n                    <div *ngIf=\"tipo == 'encargado'\">\n                        <button class=\"btn btn-primary\" (click)=\"asignar()\"> Asignar </button>\n                    </div>\n                </div>\n                <div class=\"text-center\" *ngIf=\"verViaje.estado == 'asignado'\">\n                    <div *ngIf=\"tipo == 'remisero' && fechaComenzar\">\n                        <button class=\"btn btn-success btn-block\" (click)=\"comenzar()\"> Comenzar </button>\n                    </div>\n                    <br>                    \n                    <div *ngIf=\"tipo == 'remisero'\">\n                        <button class=\"btn btn-danger btn-block\" (click)=\"rechazar()\"> Rechazar </button>\n                    </div>\n                </div>\n                <div class=\"text-center\" *ngIf=\"verViaje.estado == 'transcurso'\">\n                    <button class=\"btn btn-success btn-block\" (click)=\"finalizar()\"> Finalizar </button>\n                </div>\n                <div *ngIf=\"verViaje.estado == 'finalizado'\">\n                    <h2 class=\"text-center\"> Monto : $ {{verViaje.calcularMonto()}} </h2>\n                    <div *ngIf=\"tipo == 'cliente'\">\n                        <button class=\"btn btn-info btn-block\" (click)=\"encuesta()\"> Realizar encuesta </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" [hidden]=\"cargoBien\">\n            <h1 class=\"text-center\"> Hubo un error al procesar lo pedido </h1>\n        </div>\n    </div>\n</div>\n"

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
/* harmony import */ var _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/remiseros/remiseros.service */ "./src/app/servicios/remiseros/remiseros.service.ts");
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






var VerViajeComponent = /** @class */ (function () {
    function VerViajeComponent(ruteador, data, auth, servicioRemisero) {
        this.ruteador = ruteador;
        this.data = data;
        this.auth = auth;
        this.servicioRemisero = servicioRemisero;
    }
    VerViajeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fechaComenzar = false;
        this.tipo = this.auth.obtenerToken().data.tipo;
        this.data.currentMessage.subscribe(function (viaje) {
            if (typeof (viaje) === 'string') {
                _this.cargoBien = false;
            }
            else {
                _this.cargoBien = true;
                _this.verViaje = viaje;
                var fechaViaje = new Date(_this.verViaje.fecha + 'T' + _this.verViaje.hora + 'Z');
                var fechaActual = new Date();
                if (fechaActual.getTime() > fechaViaje.getTime()) {
                    _this.fechaComenzar = true;
                }
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
    VerViajeComponent.prototype.comenzar = function () {
        var _this = this;
        this.servicioRemisero.comenzarViaje(this.verViaje.id)
            .subscribe(function (data) {
            _this.mostrarMensaje('success', '¡Exito!', '¡Ha comenzado el viaje!');
            setTimeout(function () {
                _this.ruteador.navigate(['/viajes']);
            }, 2000);
        });
    };
    VerViajeComponent.prototype.finalizar = function () {
        this.ruteador.navigate(['remisero/finalizar', this.verViaje.id.toString(), this.verViaje.monto.toString()]);
    };
    VerViajeComponent.prototype.mostrarMensaje = function (severidad, resumen, detalle) {
        this.msgs = [];
        this.msgs.push({ severity: severidad, summary: resumen, detail: detalle });
    };
    VerViajeComponent.prototype.asignar = function () {
        this.ruteador.navigate(['encargado/remiseros/asignar', this.verViaje.id.toString()]);
    };
    VerViajeComponent.prototype.encuesta = function () {
        this.ruteador.navigate(['cliente/encuesta', this.verViaje.id.toString()]);
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _servicios_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _servicios_remiseros_remiseros_service__WEBPACK_IMPORTED_MODULE_3__["RemiserosService"]])
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

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h2 class=\"text-center\"> Viajes </h2>\n    <div class=\"row\" *ngIf=\"!cargando\">\n      <div class=\"col-sm\">\n        <app-detalle-viajes (enviarViaje)=\"ver($event)\" [detalle]=\"viajes\"></app-detalle-viajes>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"cargando\" >\n      <div class=\"col-sm-4 offset-sm-4\">\n        <div class=\"lds-css ng-scope\">\n          <div class=\"lds-blocks\" style=\"100%;height:100%\"><div style=\"left:38px;top:38px;animation-delay:0s\"></div>\n          <div style=\"left:80px;top:38px;animation-delay:0.125s\"></div>\n          <div style=\"left:122px;top:38px;animation-delay:0.25s\"></div>\n          <div style=\"left:38px;top:80px;animation-delay:0.875s\"></div>\n          <div style=\"left:122px;top:80px;animation-delay:0.375s\"></div>\n          <div style=\"left:38px;top:122px;animation-delay:0.75s\"></div>\n          <div style=\"left:80px;top:122px;animation-delay:0.625s\"></div>\n          <div style=\"left:122px;top:122px;animation-delay:0.5s\"></div>\n        </div>\n        <style type=\"text/css\">\n        \n        @keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        @-webkit-keyframes lds-blocks {\n          0% {\n            background: #72cbfd;\n          }\n          12.5% {\n            background: #72cbfd;\n          }\n          12.625% {\n            background: #0b1d27;\n          }\n          100% {\n            background: #0b1d27;\n          }\n        }\n        .lds-blocks {\n          position: relative;\n        }\n        .lds-blocks div {\n          position: absolute;\n          width: 40px;\n          height: 40px;\n          background: #0b1d27;\n          -webkit-animation: lds-blocks 1s linear infinite;\n          animation: lds-blocks 1s linear infinite;\n        }\n        .lds-blocks {\n          width: 200px !important;\n          height: 200px !important;\n          -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n          transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n        }\n        </style>\n      </div>\n    </div>\n\n  </div>\n</div>"

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
        this.cargando = true;
        this.servicioViajes.obternerViajes()
            .subscribe(function (data) {
            console.log(data);
            data.forEach(function (element) {
                var origen = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.origen_lat, element.origen_long);
                var destino = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.destino_lat, element.destino_long);
                _this.viajes.push(new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_4__["viajeMaps"](element.id, element.fecha, element.hora, element.estado, element.idCliente, element.monto, origen, destino, element.premium));
            });
            setTimeout(function () {
                _this.cargando = false;
            }, 2500);
        });
    };
    VistaViajesComponent.prototype.viajesCliente = function () {
        var _this = this;
        this.cargando = true;
        this.servicioViajes.obtenerViajesClientes(this.auth.obtenerToken().data.id)
            .subscribe(function (data) {
            console.log(data);
            data.forEach(function (element) {
                var origen = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.origen_lat, element.origen_long);
                var destino = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.destino_lat, element.destino_long);
                _this.viajes.push(new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_4__["viajeMaps"](element.id, element.fecha, element.hora, element.estado, element.idCliente, element.monto, origen, destino, element.premium));
            });
            setTimeout(function () {
                _this.cargando = false;
            }, 2500);
        });
    };
    VistaViajesComponent.prototype.viajesRemiseros = function () {
        var _this = this;
        this.cargando = true;
        this.servicioViajes.obtenerViajesRemiseros(this.auth.obtenerToken().data.id)
            .subscribe(function (data) {
            data.forEach(function (element) {
                var origen = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.origen_lat, element.origen_long);
                var destino = new _clases_lugar__WEBPACK_IMPORTED_MODULE_3__["lugar"](element.destino_lat, element.destino_long);
                _this.viajes.push(new _clases_viajeMaps__WEBPACK_IMPORTED_MODULE_4__["viajeMaps"](element.id, element.fecha, element.hora, element.estado, element.idCliente, element.monto, origen, destino, element.premium));
            });
            setTimeout(function () {
                _this.cargando = false;
            }, 2500);
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

module.exports = "<app-barralateral></app-barralateral>\n<div class=\"container mt-5\">\n  <div class=\"jumbotron\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n    <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\"  >Usuario </label>\n        <input type=\"email\" id=\"usuario\"\n            class=\"form-control\" [(ngModel)]=\"usuarioText\" name=\"usuario\" required pattern=\"[a-zA-Z][a-zA-Z ]+\"\n            #usuario=\"ngModel\" placeholder=\"Ingrese el usuario\">  \n        <div [hidden]=\"usuario.valid  || usuario.pristine\" class=\"alert alert-danger\">\n          <div [hidden]=\"!usuario.hasError('required')\">El usuario es requerido </div>\n          <div [hidden]=\"!usuario.hasError('pattern')\">Se requiere mas de un caracter </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\"  >Contraseña</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"passwordText\" id=\"exampleInputPassword1\" \n                required minlength=\"4\" #password=\"ngModel\" name=\"password\" placeholder=\"Contraseña\">\n        <div [hidden]=\"password.valid || password.pristine\"\n            class=\"alert alert-danger\">\n            <div [hidden]=\"!password.hasError('minlength')\">La clave es minimo de 8 caracteres</div>\n            <div [hidden]=\"!password.hasError('required')\">La clave es requerida</div>\n        </div>\n      </div>\n      <div class=\"loader\" *ngIf=\"esperando\"></div>\n      <button type=\"submit\" class=\"btn btn-primary\" [hidden]=\"esperando\" [disabled]=\"!loginForm.form.valid || captchaOk\" >Ingresar</button>\n    </form>\n    <div class=\"row\">\n      <button type=\"text\" class=\"btn btn-success btn-block\" [hidden]=\"esperando\" (click)=\"ingresar('admin')\" >Ingresar admin</button>\n    </div>\n    <div class=\"row\">\n      <button type=\"text\" class=\"btn btn-info btn-block\" [hidden]=\"esperando\" (click)=\"ingresar('remisero')\" >Ingresar remisero</button>\n    </div>\n    <div class=\"row\">\n      <button type=\"text\" class=\"btn btn-danger btn-block\" [hidden]=\"esperando\" (click)=\"ingresar('cliente')\" >Ingresar cliente</button>\n    </div>\n\n    <a class=\"text-center\" routerLink=\"/registro/cliente\"> ¿Todavia no tienes cuenta? ¡Registrate!</a>\n    <br>\n    <a class=\"text-center\" routerLink=\"/registro/remisero\">¿Queres formar parte de nuestro staff?</a>\n  </div>\n</div>\n"

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
        switch (usuario) {
            case 'admin':
                this.usuarioText = 'admin';
                this.passwordText = 'admin';
                break;
            case 'remisero':
                this.usuarioText = 'juancito';
                this.passwordText = '1111';
                break;
            case 'cliente':
                this.usuarioText = 'carlos';
                this.passwordText = '2222';
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

/***/ "./src/app/ocupado.directive.ts":
/*!**************************************!*\
  !*** ./src/app/ocupado.directive.ts ***!
  \**************************************/
/*! exports provided: OcupadoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcupadoDirective", function() { return OcupadoDirective; });
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

var OcupadoDirective = /** @class */ (function () {
    function OcupadoDirective(el) {
        this.el = el;
    }
    OcupadoDirective.prototype.onMouseEnter = function () {
        this.pintar(this.ocupadoColor);
    };
    OcupadoDirective.prototype.onMouseLeave = function () {
        this.despintar();
    };
    OcupadoDirective.prototype.pintar = function (color) {
        if (color) {
            this.el.nativeElement.style.backgroundColor = 'red';
        }
        else {
            this.el.nativeElement.style.backgroundColor = 'green';
        }
    };
    OcupadoDirective.prototype.despintar = function () {
        this.el.nativeElement.style.backgroundColor = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appOcupado'),
        __metadata("design:type", Object)
    ], OcupadoDirective.prototype, "ocupadoColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OcupadoDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OcupadoDirective.prototype, "onMouseLeave", null);
    OcupadoDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appOcupado]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], OcupadoDirective);
    return OcupadoDirective;
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
/* harmony import */ var _componentes_remiseros_remiseros_finalizar_remiseros_finalizar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component */ "./src/app/componentes/remiseros/remiseros-finalizar/remiseros-finalizar.component.ts");
/* harmony import */ var _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/clientes/cliente-nuevo/cliente-nuevo.component */ "./src/app/componentes/clientes/cliente-nuevo/cliente-nuevo.component.ts");
/* harmony import */ var _componentes_clientes_cliente_modificar_cliente_modificar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/clientes/cliente-modificar/cliente-modificar.component */ "./src/app/componentes/clientes/cliente-modificar/cliente-modificar.component.ts");
/* harmony import */ var _componentes_clientes_cliente_info_nuevo_cliente_info_nuevo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component */ "./src/app/componentes/clientes/cliente-info-nuevo/cliente-info-nuevo.component.ts");
/* harmony import */ var _componentes_clientes_cliente_cancelar_cliente_cancelar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/clientes/cliente-cancelar/cliente-cancelar.component */ "./src/app/componentes/clientes/cliente-cancelar/cliente-cancelar.component.ts");
/* harmony import */ var _componentes_clientes_cliente_encuesta_cliente_encuesta_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentes/clientes/cliente-encuesta/cliente-encuesta.component */ "./src/app/componentes/clientes/cliente-encuesta/cliente-encuesta.component.ts");
/* harmony import */ var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cliente/cliente.component */ "./src/app/cliente/cliente.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../servicios/verificar-jwt.service */ "./src/app/servicios/verificar-jwt.service.ts");
/* harmony import */ var _servicios_verificarTipo_verificar_tipo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../servicios/verificarTipo/verificar-tipo.service */ "./src/app/servicios/verificarTipo/verificar-tipo.service.ts");
/* harmony import */ var _servicios_verificarTipo_verificar_tipo_cliente_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../servicios/verificarTipo/verificar-tipo-cliente.service */ "./src/app/servicios/verificarTipo/verificar-tipo-cliente.service.ts");
/* harmony import */ var _servicios_verificarTipo_verificar_encargado_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../servicios/verificarTipo/verificar-encargado.service */ "./src/app/servicios/verificarTipo/verificar-encargado.service.ts");
/* harmony import */ var _componentes_encargado_principal_principal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../componentes/encargado/principal/principal.component */ "./src/app/componentes/encargado/principal/principal.component.ts");
/* harmony import */ var _componentes_encargado_remiseros_encargado_remiseros_encargado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../componentes/encargado/remiseros-encargado/remiseros-encargado.component */ "./src/app/componentes/encargado/remiseros-encargado/remiseros-encargado.component.ts");
/* harmony import */ var _componentes_encargado_asignar_viaje_asignar_viaje_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../componentes/encargado/asignar-viaje/asignar-viaje.component */ "./src/app/componentes/encargado/asignar-viaje/asignar-viaje.component.ts");
/* harmony import */ var _componentes_encargado_remiseros_nuevo_remiseros_nuevo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../componentes/encargado/remiseros-nuevo/remiseros-nuevo.component */ "./src/app/componentes/encargado/remiseros-nuevo/remiseros-nuevo.component.ts");
/* harmony import */ var _componentes_encargado_estadisticas_ganancias_ganancias_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../componentes/encargado/estadisticas/ganancias/ganancias.component */ "./src/app/componentes/encargado/estadisticas/ganancias/ganancias.component.ts");
/* harmony import */ var _componentes_registro_registro_cliente_registro_cliente_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../componentes/registro/registro-cliente/registro-cliente.component */ "./src/app/componentes/registro/registro-cliente/registro-cliente.component.ts");
/* harmony import */ var _componentes_vehiculos_vista_vehiculos_vista_vehiculos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../componentes/vehiculos/vista-vehiculos/vista-vehiculos.component */ "./src/app/componentes/vehiculos/vista-vehiculos/vista-vehiculos.component.ts");
/* harmony import */ var _componentes_viajes_vista_viajes_vista_viajes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../componentes/viajes/vista-viajes/vista-viajes.component */ "./src/app/componentes/viajes/vista-viajes/vista-viajes.component.ts");
/* harmony import */ var _componentes_viajes_ver_viaje_ver_viaje_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../componentes/viajes/ver-viaje/ver-viaje.component */ "./src/app/componentes/viajes/ver-viaje/ver-viaje.component.ts");
/* harmony import */ var _componentes_configuracion_cuenta_configuracion_cuenta_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../componentes/configuracion-cuenta/configuracion-cuenta.component */ "./src/app/componentes/configuracion-cuenta/configuracion-cuenta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var miRuteo = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'cuenta', component: _componentes_configuracion_cuenta_configuracion_cuenta_component__WEBPACK_IMPORTED_MODULE_28__["ConfiguracionCuentaComponent"] },
    { path: 'remisero', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_15__["VerificarJWTService"], _servicios_verificarTipo_verificar_tipo_service__WEBPACK_IMPORTED_MODULE_16__["VerificarTipoService"]],
        children: [
            { path: '', component: _componentes_remiseros_remisero_remisero_component__WEBPACK_IMPORTED_MODULE_3__["RemiseroComponent"] },
            { path: 'asignados', component: _componentes_remiseros_remisero_asignados_remisero_asignados_component__WEBPACK_IMPORTED_MODULE_4__["RemiseroAsignadosComponent"] },
            { path: 'rechazar', component: _componentes_remiseros_remisero_rechazar_remisero_rechazar_component__WEBPACK_IMPORTED_MODULE_5__["RemiseroRechazarComponent"] },
            { path: 'finalizar/:idViaje/:monto', component: _componentes_remiseros_remiseros_finalizar_remiseros_finalizar_component__WEBPACK_IMPORTED_MODULE_6__["RemiserosFinalizarComponent"] }
        ] },
    { path: 'cliente', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_15__["VerificarJWTService"], _servicios_verificarTipo_verificar_tipo_cliente_service__WEBPACK_IMPORTED_MODULE_17__["VerificarTipoClienteService"]],
        children: [
            { path: '', component: _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_12__["ClienteComponent"] },
            { path: 'nuevo', component: _componentes_clientes_cliente_nuevo_cliente_nuevo_component__WEBPACK_IMPORTED_MODULE_7__["ClienteNuevoComponent"] },
            { path: 'modificar', component: _componentes_clientes_cliente_modificar_cliente_modificar_component__WEBPACK_IMPORTED_MODULE_8__["ClienteModificarComponent"] },
            { path: 'infoNuevo', component: _componentes_clientes_cliente_info_nuevo_cliente_info_nuevo_component__WEBPACK_IMPORTED_MODULE_9__["ClienteInfoNuevoComponent"] },
            { path: 'cancelar', component: _componentes_clientes_cliente_cancelar_cliente_cancelar_component__WEBPACK_IMPORTED_MODULE_10__["ClienteCancelarComponent"] },
            { path: 'encuesta/:idViaje', component: _componentes_clientes_cliente_encuesta_cliente_encuesta_component__WEBPACK_IMPORTED_MODULE_11__["ClienteEncuestaComponent"] }
        ] },
    { path: 'encargado', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_15__["VerificarJWTService"], _servicios_verificarTipo_verificar_encargado_service__WEBPACK_IMPORTED_MODULE_18__["VerificarEncargadoService"]],
        children: [
            { path: '', component: _componentes_encargado_principal_principal_component__WEBPACK_IMPORTED_MODULE_19__["PrincipalComponent"] },
            { path: 'remiseros',
                children: [
                    { path: '', component: _componentes_encargado_remiseros_encargado_remiseros_encargado_component__WEBPACK_IMPORTED_MODULE_20__["RemiserosEncargadoComponent"] },
                    { path: 'nuevo', component: _componentes_encargado_remiseros_nuevo_remiseros_nuevo_component__WEBPACK_IMPORTED_MODULE_22__["RemiserosNuevoComponent"] },
                    { path: 'asignar/:idViaje', component: _componentes_encargado_asignar_viaje_asignar_viaje_component__WEBPACK_IMPORTED_MODULE_21__["AsignarViajeComponent"] },
                ] },
            { path: 'ganancias', canActivate: [_servicios_verificar_jwt_service__WEBPACK_IMPORTED_MODULE_15__["VerificarJWTService"], _servicios_verificarTipo_verificar_encargado_service__WEBPACK_IMPORTED_MODULE_18__["VerificarEncargadoService"]],
                children: [
                    { path: '', component: _componentes_encargado_estadisticas_ganancias_ganancias_component__WEBPACK_IMPORTED_MODULE_23__["GananciasComponent"] }
                ] },
            { path: 'infoNuevo', component: _componentes_clientes_cliente_info_nuevo_cliente_info_nuevo_component__WEBPACK_IMPORTED_MODULE_9__["ClienteInfoNuevoComponent"] },
            { path: 'vehiculos', component: _componentes_vehiculos_vista_vehiculos_vista_vehiculos_component__WEBPACK_IMPORTED_MODULE_25__["VistaVehiculosComponent"] },
        ] },
    { path: 'viajes',
        children: [
            { path: '', component: _componentes_viajes_vista_viajes_vista_viajes_component__WEBPACK_IMPORTED_MODULE_26__["VistaViajesComponent"] },
            { path: 'info', component: _componentes_viajes_ver_viaje_ver_viaje_component__WEBPACK_IMPORTED_MODULE_27__["VerViajeComponent"] }
        ] },
    { path: 'registro',
        children: [
            { path: '', component: _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"] },
            { path: 'cliente', component: _componentes_registro_registro_cliente_registro_cliente_component__WEBPACK_IMPORTED_MODULE_24__["RegistroClienteComponent"] }
        ] },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
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
    ClienteService.prototype.registrar = function (nombre, apellido, usuario, password) {
        var tipo = 'cliente';
        var datos = "nombre=" + nombre + "&apellido=" + apellido + "&usuario=" + usuario + "&password=" + password + "&tipo=" + tipo;
        console.log(datos);
        return this.nuevoHttp.httpPostData('ingreso/registro', datos);
    };
    ClienteService.prototype.buscarCliente = function (id) {
        var token = localStorage.getItem('token');
        var datos = "id=" + id + "&token=" + token;
        return this.nuevoHttp.httpPostData('cliente/buscar', datos);
    };
    ClienteService.prototype.modificarCliente = function (usuario) {
        var token = localStorage.getItem('token');
        var datos = "id=" + usuario.id + "&nombre=" + usuario.nombre + "&apellido=" + usuario.apellido + "&usuario=" + usuario.usuario + "&password=" + usuario.password + "&token=" + token;
        return this.nuevoHttp.httpPostData('cliente/modificar', datos);
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

/***/ "./src/app/servicios/encuesta/encuesta.service.ts":
/*!********************************************************!*\
  !*** ./src/app/servicios/encuesta/encuesta.service.ts ***!
  \********************************************************/
/*! exports provided: EncuestaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaService", function() { return EncuestaService; });
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


var EncuestaService = /** @class */ (function () {
    function EncuestaService(nuevohttp) {
        this.nuevohttp = nuevohttp;
    }
    EncuestaService.prototype.guardarEncuesta = function (guardada) {
        var token = localStorage.getItem('token');
        var datos = "idViaje=" + guardada.idViaje + "&idRemisero=" + guardada.idRemisero + "&idVehiculo=" + guardada.idVehiculo + "&remisero=" + guardada.remisero + "&estado_vehiculo=" + guardada.estado_vehiculo + "&recomendacion=" + guardada.recomendacion + "&viaje=" + guardada.viaje + "&conductor=" + guardada.conductor + "&vehiculo=" + guardada.vehiculo + "&camino=" + guardada.camino + "&reserva=" + guardada.reserva + "&cobranza=" + guardada.cobranza + "&comentario=" + guardada.comentario + "&foto_1=" + guardada.foto_1 + "&foto_2=" + guardada.foto_2 + "&foto_3=" + guardada.foto_3;
        return this.nuevohttp.httpPostData('encuesta/nuevo', datos);
    };
    EncuestaService.prototype.buscar = function (idViaje) {
        var token = localStorage.getItem('idViaje');
        var datos = "idViaje=" + idViaje;
        return this.nuevohttp.httpPostData('encuesta/buscar', datos);
    };
    EncuestaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nuevohttp_service__WEBPACK_IMPORTED_MODULE_1__["NuevohttpService"]])
    ], EncuestaService);
    return EncuestaService;
}());



/***/ }),

/***/ "./src/app/servicios/fotos/fotos.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/fotos/fotos.service.ts ***!
  \**************************************************/
/*! exports provided: FotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosService", function() { return FotosService; });
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


var FotosService = /** @class */ (function () {
    function FotosService(nuevoHttp) {
        this.nuevoHttp = nuevoHttp;
        this.api = "http://localhost/backendTp2/index.php/";
        //api = "https://remiseriagustavopetruzzi.000webhostapp.com/index.php/";
        //cabecera = new HttpHeaders().set('Content-Type', 'multipart/form-data');
        this.cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
    }
    FotosService.prototype.subirFotoUsuario = function (foto) {
        var token = localStorage.getItem('token');
        var fd = new FormData();
        var url = 'ingreso/subirFoto';
        var datos = "foto1=\"" + foto;
        /*
        let params = new HttpParams;
        fd.append('nombre', 'juan');
        fd.append('foto1', foto.value);
        const options = {
          params: params,
          reportProgress: true
        }
        let ruta = this.api + url;
        const req = new HttpRequest('POST', ruta, fd, options );
    
        return this.nuevoHttp.request(req);
        */
        return this.nuevoHttp.post(this.api + url, datos, foto);
    };
    FotosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FotosService);
    return FotosService;
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
    RemiserosService.prototype.asignarViaje = function (idViaje, idRemisero) {
        var token = localStorage.getItem('token');
        var datos = "idViaje=" + idViaje + "&idRemisero=" + idRemisero + "&token=" + token;
        return this.nuevoHttp.httpPostData('viajes/asignar', datos);
    };
    RemiserosService.prototype.buscarRemisero = function (id) {
        var token = localStorage.getItem('token');
        var datos = "id=" + id + "&token=" + token;
        return this.nuevoHttp.httpPostData('remisero/buscar', datos);
    };
    RemiserosService.prototype.buscarRemiseroVehiculo = function (id) {
        var token = localStorage.getItem('token');
        var datos = "id=" + id + "&token=" + token;
        return this.nuevoHttp.httpPostData('remisero/buscar', datos);
    };
    RemiserosService.prototype.comenzarViaje = function (idViaje) {
        var token = localStorage.getItem('token');
        var datos = "idViaje=" + idViaje + "&token=" + token;
        return this.nuevoHttp.httpPostData('remisero/comenzar', datos);
    };
    RemiserosService.prototype.finalizarViajeEfectivo = function (idViaje, monto) {
        var token = localStorage.getItem('token');
        var datos = "idViaje=" + idViaje + "&monto=" + monto + "&token=" + token;
        return this.nuevoHttp.httpPostData('remisero/finalizarefectivo', datos);
    };
    RemiserosService.prototype.finalizarViajeCuentaCorriente = function (idViaje, monto) {
        var token = localStorage.getItem('token');
        var datos = "idViaje=" + idViaje + "&monto=" + monto + "&token=" + token;
        return this.nuevoHttp.httpPostData('remisero/finalizarcuentacorriente', datos);
    };
    RemiserosService.prototype.listaRemiserosVehiculos = function () {
        return this.nuevoHttp.httpGet("remiseros/vehiculos");
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
    ViajesService.prototype.buscarViaje = function (idViaje) {
        var token = localStorage.getItem('token');
        var datos = "token=" + token + "&idViaje=" + idViaje;
        return this.nuevoHttp.httpPostData('viajes/buscar', datos);
    };
    ViajesService.prototype.obtenerViajeFecha = function (fecha) {
        var token = localStorage.getItem('token');
        var datos = "token=" + token + "&fecha=" + fecha;
        return this.nuevoHttp.httpPostData('viajes/fecha', datos);
    };
    ViajesService.prototype.montos = function () {
        var token = localStorage.getItem('token');
        var datos = "token=" + token;
        return this.nuevoHttp.httpPostData('estadisticas/ganancias', datos);
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