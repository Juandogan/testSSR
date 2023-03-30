/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 33624:
/*!*******************!*\
  !*** ./models.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ 77470);
const dataSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  subtitulo: String,
  categoria: String,
  articulo: String,
  imagen: String
}, {
  timestamps: true
});
const Data = mongoose.model('Data', dataSchema);
module.exports = {
  Data
};

/***/ }),

/***/ 34621:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86175);
/* harmony import */ var _componentes_adm_adm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/adm/adm.component */ 50644);
/* harmony import */ var _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/articulo/articulo.component */ 63622);
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/principal/principal.component */ 10651);
/* harmony import */ var _servicios_resolve_nota_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicios/resolve-nota.service */ 68391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 81222);







const routes = [{
  path: '',
  component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_2__.PrincipalComponent
}, {
  path: 'adm',
  component: _componentes_adm_adm_component__WEBPACK_IMPORTED_MODULE_0__.AdmComponent
}, {
  path: 'articulo/:_id',
  component: _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_1__.ArticuloComponent,
  resolve: {
    data: _servicios_resolve_nota_service__WEBPACK_IMPORTED_MODULE_3__.ResolveNotaService
  }
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 59229:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86175);
/* harmony import */ var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/navbar/navbar.component */ 75616);



class AppComponent {
  ngOnInit() {}
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container", 2, "padding", "0px"], [2, "margin-top", "120px"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 63370:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 63682);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 63222);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 34621);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ 99214);
/* harmony import */ var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/navbar/navbar.component */ 75616);
/* harmony import */ var _componentes_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/card/card.component */ 49559);
/* harmony import */ var _componentes_adm_adm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/adm/adm.component */ 50644);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 94426);
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/principal/principal.component */ 10651);
/* harmony import */ var _pipes_date_converter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/date-converter.pipe */ 78666);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 57363);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 97102);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 86175);
/* harmony import */ var _txtextcontrol_tx_ng_document_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @txtextcontrol/tx-ng-document-editor */ 62595);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 47210);
/* harmony import */ var _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/articulo/articulo.component */ 63622);
/* harmony import */ var _servicios_resolve_nota_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/resolve-nota.service */ 68391);
/* harmony import */ var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/crud.service */ 39983);
/* harmony import */ var _componentes_inner_inner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/inner/inner.component */ 4250);
























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [_servicios_resolve_nota_service__WEBPACK_IMPORTED_MODULE_9__.ResolveNotaService, _servicios_crud_service__WEBPACK_IMPORTED_MODULE_10__.CrudService],
  imports: [_ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__.CKEditorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.isDevMode)(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }), _txtextcontrol_tx_ng_document_editor__WEBPACK_IMPORTED_MODULE_19__.DocumentEditorModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _componentes_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _componentes_adm_adm_component__WEBPACK_IMPORTED_MODULE_4__.AdmComponent, _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__.PrincipalComponent, _pipes_date_converter_pipe__WEBPACK_IMPORTED_MODULE_6__.DateConverterPipe, _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_8__.ArticuloComponent, _componentes_inner_inner_component__WEBPACK_IMPORTED_MODULE_11__.InnerComponent],
    imports: [_ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__.CKEditorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLinkActive, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule, _txtextcontrol_tx_ng_document_editor__WEBPACK_IMPORTED_MODULE_19__.DocumentEditorModule]
  });
})();

/***/ }),

/***/ 84362:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 35399);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 63370);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 81222);




class AppServerModule {}
AppServerModule.ɵfac = function AppServerModule_Factory(t) {
  return new (t || AppServerModule)();
};
AppServerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppServerModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppServerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 50644:
/*!**************************************************!*\
  !*** ./src/app/componentes/adm/adm.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmComponent": () => (/* binding */ AdmComponent)
/* harmony export */ });
/* harmony import */ var src_app_modelos_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modelos/data */ 59688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 88638);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/crud.service */ 39983);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 94426);






class AdmComponent {
  constructor(crudService, _platformId) {
    this.crudService = crudService;
    this._platformId = _platformId;
    this.title = 'my-editor-app';
    this.titulo = "";
    this.subtitulo = "";
    this.categoria = "";
    this.articulo = "";
    this.data = new src_app_modelos_data__WEBPACK_IMPORTED_MODULE_0__.Data();
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId)) {}
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId)) {}
  }
  submitForm() {
    this.crudService.data.categoria = this.categoria;
    this.crudService.data.titulo = this.titulo;
    this.crudService.data.subtitulo = this.subtitulo;
    this.crudService.data.articulo = this.articulo;
    this.crudService.addData(this.crudService.data).subscribe(res => {
      console.log(res);
    });
  }
}
AdmComponent.ɵfac = function AdmComponent_Factory(t) {
  return new (t || AdmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
};
AdmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AdmComponent,
  selectors: [["app-adm"]],
  decls: 16,
  vars: 3,
  consts: [[1, "margin-form"], ["miFormulario", "ngForm"], [1, "mt-4"], ["type", "text", "name", "categoria", "placeholder", "Categoria", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group", "mb-3", "mt-4"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "name", "titulo", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "subtitulo", "type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-dark", 3, "click"]],
  template: function AdmComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0, 1)(2, "div", 2)(3, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Categoria");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdmComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.categoria = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Titulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdmComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.titulo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4)(11, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Subtitulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdmComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.subtitulo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdmComponent_Template_button_click_14_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.categoria);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.subtitulo);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: [".margin-form[_ngcontent-%COMP%]{margin-left: 30vb; margin-right: 30vb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYWRtL2FkbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWZvcm17bWFyZ2luLWxlZnQ6IDMwdmI7IG1hcmdpbi1yaWdodDogMzB2Yjt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 63622:
/*!************************************************************!*\
  !*** ./src/app/componentes/articulo/articulo.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticuloComponent": () => (/* binding */ ArticuloComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 88638);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86175);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 39983);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 63682);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 57363);
/* harmony import */ var _inner_inner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inner/inner.component */ 4250);









class ArticuloComponent {
  constructor(_platformId, ruta, crudService, location, sanitizer) {
    this._platformId = _platformId;
    this.ruta = ruta;
    this.crudService = crudService;
    this.location = location;
    this.sanitizer = sanitizer;
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this._platformId)) {}
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this._platformId)) {}
    this.ruta.data.subscribe(data => {
      this.nota = Object.entries(data).map(i => i[1]);
      this.nota[0].articulo = this.transformYourHtml(this.nota[0]?.articulo);
      console.log(this.nota);
      //aqui agregar contador devistas
    });
  }

  back() {
    this.location.back();
  }
  transformYourHtml(htmlTextWithStyle) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
  }
}
ArticuloComponent.ɵfac = function ArticuloComponent_Factory(t) {
  return new (t || ArticuloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer));
};
ArticuloComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ArticuloComponent,
  selectors: [["app-articulo"]],
  decls: 20,
  vars: 4,
  consts: [[1, "div-principal"], [1, "row"], [1, "col-9", 2, "margin-left", "10px"], [1, "close-bottom", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-share-fill", 2, "margin-right", "10px"], ["d", "M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-square-fill"], ["d", "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"], [1, "div-articulo"], [1, "div-h6"], [1, "div-h1"], [1, "div-h2"], [1, "language-css", 3, "innerHTML"], [1, "col-3"]],
  template: function ArticuloComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ArticuloComponent_Template_div_click_3_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h1", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "app-inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].categoria);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].subtitulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.nota[0] == null ? null : ctx.nota[0].articulo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _inner_inner_component__WEBPACK_IMPORTED_MODULE_2__.InnerComponent],
  styles: [".div-principal[_ngcontent-%COMP%]{margin-top: 120px; margin-right: 10px;}\r\n.close-bottom[_ngcontent-%COMP%]{text-align: right; cursor:pointer; position: relative; margin-right: -5px;}\r\n.div-articulo[_ngcontent-%COMP%]{margin-top: -30px;}\r\n\r\n.div-h1[_ngcontent-%COMP%]{margin-top: 30px;\r\n  font-family: inherit;\r\n  letter-spacing: -2px;\r\n  font-weight: 700;\r\n  line-height: 43px;\r\n  font-size: 43px;\r\n  color:rgb(65, 65, 65)\r\n}\r\n\r\n\r\n.div-h2[_ngcontent-%COMP%]{\r\n  margin-top: 35px;\r\n  margin-top: 22px;\r\n  font-family: unset;\r\n  line-height: 28px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n\r\n.div-h6[_ngcontent-%COMP%]{\r\ncolor:orange;\r\n  margin-top: 32px;\r\nmargin-bottom: -20px;\r\n\r\n}\r\n\r\n\r\n\r\n.language-css[_ngcontent-%COMP%]     pre, code[_ngcontent-%COMP%] {\r\n  background-color:rgb(91, 91, 91);\r\n  padding:15px;\r\n\r\n  color: white;\r\n  max-height: 300px!important;\r\n  border-radius: 3px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJ0aWN1bG8vYXJ0aWN1bG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO0FBQ3JELGNBQWMsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO0FBQ3hGLGNBQWMsaUJBQWlCLENBQUM7O0FBRWhDLFFBQVEsZ0JBQWdCO0VBQ3RCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Y7QUFDRjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCOztBQUVsQjs7O0FBR0E7QUFDQSxZQUFZO0VBQ1YsZ0JBQWdCO0FBQ2xCLG9CQUFvQjs7QUFFcEI7Ozs7QUFJQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZOztFQUVaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCOztBQUVwQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtcHJpbmNpcGFse21hcmdpbi10b3A6IDEyMHB4OyBtYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG4uY2xvc2UtYm90dG9te3RleHQtYWxpZ246IHJpZ2h0OyBjdXJzb3I6cG9pbnRlcjsgcG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW4tcmlnaHQ6IC01cHg7fVxyXG4uZGl2LWFydGljdWxve21hcmdpbi10b3A6IC0zMHB4O31cclxuXHJcbi5kaXYtaDF7bWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4gIGZvbnQtc2l6ZTogNDNweDtcclxuICBjb2xvcjpyZ2IoNjUsIDY1LCA2NSlcclxufVxyXG5cclxuXHJcbi5kaXYtaDJ7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiB1bnNldDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxufVxyXG5cclxuXHJcbi5kaXYtaDZ7XHJcbmNvbG9yOm9yYW5nZTtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG5tYXJnaW4tYm90dG9tOiAtMjBweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmxhbmd1YWdlLWNzcyA6Om5nLWRlZXAgcHJlLCBjb2RlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig5MSwgOTEsIDkxKTtcclxuICBwYWRkaW5nOjE1cHg7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXgtaGVpZ2h0OiAzMDBweCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 49559:
/*!****************************************************!*\
  !*** ./src/app/componentes/card/card.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 39983);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 88638);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86175);
/* harmony import */ var _pipes_date_converter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/date-converter.pipe */ 78666);





function CardComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 16);
  }
}
function CardComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.data == null ? null : ctx_r1.data.subtitulo);
  }
}
class CardComponent {
  constructor(crudService) {
    this.crudService = crudService;
  }
  borrar(id) {
    this.crudService.deleteData(id).subscribe(res => {
      console.log(res);
    });
  }
}
CardComponent.ɵfac = function CardComponent_Factory(t) {
  return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
CardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CardComponent,
  selectors: [["app-card"]],
  inputs: {
    data: "data",
    id: "id",
    image: "image"
  },
  decls: 21,
  vars: 8,
  consts: [[1, "card", "mt-2"], [1, "card-header"], [1, "card-body", "shadow", "rounded-1"], [3, "routerLink"], ["src", "../../../assets/image-7.png", "width", "100%", "alt", "", "class", "rounded-1 shadow p0", 4, "ngIf"], [1, "card-title", "mt-3", 2, "text-decoration", "none!important", "color", "black"], [4, "ngIf"], [1, "card-text", "mt-3", 2, "margin-left", "3px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-alarm", 2, "margin-top", "-4px"], ["d", "M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"], ["d", "M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"], [2, "color", "rgb(114, 114, 114)", "font-size", "12px", "margin-left", "1px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-eye", 2, "margin-top", "-4px", "margin-left", "5px"], ["d", "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"], ["d", "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"], [2, "font-size", "12px", "margin-left", "4px", "color", "rgb(114, 114, 114)"], ["src", "../../../assets/image-7.png", "width", "100%", "alt", "", 1, "rounded-1", "shadow", "p0"]],
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CardComponent_img_5_Template, 1, 0, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CardComponent_p_8_Template, 2, 1, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "path", 9)(12, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "dateConverter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 13)(18, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.categoria);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "articulo/", ctx.data == null ? null : ctx.data._id, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.image);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.image);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 6, ctx.data == null ? null : ctx.data.updatedAt), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _pipes_date_converter_pipe__WEBPACK_IMPORTED_MODULE_1__.DateConverterPipe],
  styles: [".card-header[_ngcontent-%COMP%]{font-size: 13px;background-color: rgba(0, 0, 0, 0.589); color:aliceblue}\r\nhr[_ngcontent-%COMP%]{padding:0px; margin-top: 20px; margin-bottom: 0px;}\r\na[_ngcontent-%COMP%]{cursor:pointer;}\r\np[_ngcontent-%COMP%]{line-height: 21px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxlQUFlLENBQUMsc0NBQXNDLEVBQUUsZUFBZTtBQUNwRixHQUFHLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQztBQUNyRCxFQUFFLGNBQWMsQ0FBQztBQUNqQixFQUFFLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVye2ZvbnQtc2l6ZTogMTNweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTg5KTsgY29sb3I6YWxpY2VibHVlfVxyXG5ocntwYWRkaW5nOjBweDsgbWFyZ2luLXRvcDogMjBweDsgbWFyZ2luLWJvdHRvbTogMHB4O31cclxuYXtjdXJzb3I6cG9pbnRlcjt9XHJcbnB7bGluZS1oZWlnaHQ6IDIxcHg7fVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 57363:
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 94426);


class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 76,
  vars: 0,
  consts: [[1, "container", 2, "background-color", "rgb(233, 233, 233)"], [1, "py-5", 2, "padding-bottom", "0px!important", "padding-right", "20px", "padding-left", "20px"], [1, "row"], [1, "col-6", "col-md-2", "mb-3"], [1, "nav", "flex-column"], [1, "nav-item", "mb-2"], ["href", "#", 1, "nav-link", "p-0", "text-muted"], [1, "col-md-5", "offset-md-1", "mb-3"], [1, "d-flex", "flex-column", "flex-sm-row", "w-100", "gap-2"], ["for", "newsletter1", 1, "visually-hidden"], ["id", "newsletter1", "type", "text", "placeholder", "Email address", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "d-flex", "flex-column", "flex-sm-row", "justify-content-between", "py-4", "my-4", "border-top"], [1, "list-unstyled", "d-flex"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Section");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4)(7, "li", 5)(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5)(14, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pricing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5)(17, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "FAQs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5)(20, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3)(23, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Section");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 4)(26, "li", 5)(27, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 5)(30, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 5)(33, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Pricing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 5)(36, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "FAQs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 5)(39, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3)(42, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Section");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 4)(45, "li", 5)(46, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 5)(49, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 5)(52, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pricing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 5)(55, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "FAQs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 5)(58, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7)(61, "form")(62, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Subscribe to our newsletter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Monthly digest of what's new and exciting from us.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8)(67, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12)(73, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u00A9 2023 Juan Ignacio Dogan. All rights reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "ul", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4250:
/*!******************************************************!*\
  !*** ./src/app/componentes/inner/inner.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InnerComponent": () => (/* binding */ InnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 81222);

const _c0 = ["*"];
class InnerComponent {}
InnerComponent.ɵfac = function InnerComponent_Factory(t) {
  return new (t || InnerComponent)();
};
InnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InnerComponent,
  selectors: [["app-inner"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  template: function InnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 75616:
/*!********************************************************!*\
  !*** ./src/app/componentes/navbar/navbar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 94426);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86175);



const _c0 = function () {
  return {
    exact: true
  };
};
class NavbarComponent {}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 52,
  vars: 4,
  consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "fixed-top", "bg-body-tertiary", 2, "background-color", "white"], [1, "container-fluid", "container"], ["src", "../assets/angular icon.png", "alt", "", "width", "50px"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/", "routerLinkActive", "active", 1, "nav-link", "active", 3, "routerLinkActiveOptions"], ["routerLink", "adm", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", 2, "z-index", "999999!important"], [1, "dropdown-item"], ["routerLink", "/adm", "routerLinkActive", "activeFondoBlack", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/", "routerLinkActive", "activeFondoBlack", 1, "dropdown-item"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-success"], [1, "nav", "nav-fondo", "fixed-top", "bg-body-tertiary", "container", 2, "margin-top", "65px", "z-index", "1"], ["aria-current", "page", "routerLink", "/", "routerLinkActive", "activeFondoBlack", 1, "nav-link", "position-relative", 2, "background-color", "black", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/adm", "routerLinkActive", "activeFondoBlack", 1, "nav-link"], [1, "nav-link"], ["tabindex", "-1", "aria-disabled", "true", 1, "nav-link"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7)(11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Crear Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Dropdown ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 12)(17, "li")(18, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "INICIO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Something else here");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 7)(29, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nav", 21)(36, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Get Start ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Routing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Performance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Componentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dise\u00F1o");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "BackEnd");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Deploy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color:rgb(173, 173, 173);border-radius: 10px;}\r\n\r\nnav[_ngcontent-%COMP%]{ border-radius: 3px!important;}\r\n.nav-fondo[_ngcontent-%COMP%]{\r\n  background-color: rgb(192, 192, 192);\r\n\r\n\r\n}\r\n.active[_ngcontent-%COMP%]{color:rgba(71, 71, 71, 0.582); font-weight: 800;;color:white}\r\n.activeFondoBlack[_ngcontent-%COMP%]{background-color: black;color:white}\r\n\r\n a[_ngcontent-%COMP%]{color:white; font-size: 14px; cursor: pointer;}\r\n\r\n \r\n a[_ngcontent-%COMP%]:active{color:rgb(0, 0, 0); background-color: rgba(180, 180, 180, 0.301); border-radius: 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssNERBQTRELENBQUMsd0JBQXdCLENBQUMsbUJBQW1CLENBQUM7O0FBRS9HLEtBQUssNEJBQTRCLENBQUM7QUFDbEM7RUFDRSxvQ0FBb0M7OztBQUd0QztBQUNBLFFBQVEsNkJBQTZCLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVztBQUNwRSxrQkFBa0IsdUJBQXVCLENBQUMsV0FBVztBQUNyRCxnRUFBZ0U7Q0FDL0QsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQzs7Q0FFaEQsZ0VBQWdFO0NBQ2hFLFNBQVMsa0JBQWtCLEVBQUUsNENBQTRDLEVBQUUsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJsaSBhe2ZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtjb2xvcjpyZ2IoMTczLCAxNzMsIDE3Myk7Ym9yZGVyLXJhZGl1czogMTBweDt9XHJcblxyXG5uYXZ7IGJvcmRlci1yYWRpdXM6IDNweCFpbXBvcnRhbnQ7fVxyXG4ubmF2LWZvbmRve1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcclxuXHJcblxyXG59XHJcbi5hY3RpdmV7Y29sb3I6cmdiYSg3MSwgNzEsIDcxLCAwLjU4Mik7IGZvbnQtd2VpZ2h0OiA4MDA7O2NvbG9yOndoaXRlfVxyXG4uYWN0aXZlRm9uZG9CbGFja3tiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztjb2xvcjp3aGl0ZX1cclxuLyogaW1ne2ZpbHRlcjpkcm9wLXNoYWRvdygxcHggMXB4IDNweCByZ2JhKDI1NSwgMCwgMCwgMC42MDMpKX0gKi9cclxuIGF7Y29sb3I6d2hpdGU7IGZvbnQtc2l6ZTogMTRweDsgY3Vyc29yOiBwb2ludGVyO31cclxuXHJcbiAvKiBhOmhvdmVye2NvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7fSAqL1xyXG4gYTphY3RpdmV7Y29sb3I6cmdiKDAsIDAsIDApOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMzAxKTsgYm9yZGVyLXJhZGl1czogMTBweDt9XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 10651:
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalComponent": () => (/* binding */ PrincipalComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 64637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 39983);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 88638);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card.component */ 49559);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 57363);






function PrincipalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function PrincipalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Bienvenidxs a Angular Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Nuestro objetivo es proporcionar a los desarrolladores una fuente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "confiable de informaci\u00F3n sobre Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, ", con tutoriales paso a paso, consejos y trucos, ejemplos pr\u00E1cticos, buenas pr\u00E1cticas y mucho m\u00E1s. Creemos que la programaci\u00F3n con Angular no deber\u00EDa ser una tarea dif\u00EDcil o tediosa, sino algo que todos puedan disfrutar y encontrar \u00FAtil. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@listAnimation", undefined);
  }
}
function PrincipalComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-card", 18)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", articulo_r4)("id", articulo_r4 == null ? null : articulo_r4._id)("image", true)("@listAnimation", ctx_r3.data.lenght);
  }
}
function PrincipalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13)(3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u00DALTIMOS POST");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrincipalComponent_div_3_div_6_Template, 3, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br")(8, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@listAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data);
  }
}
class PrincipalComponent {
  constructor(crudService) {
    this.crudService = crudService;
    this.title = 'testSSR';
    this.loading = true;
  }
  ngOnInit() {
    this.crudService.getDatas().subscribe(res => {
      console.log(res);
      this.data = res;
      this.data = this.data.reverse();
      this.loading = false;
      this.cantidad = this.data.lenght;
    });
  }
  trackByFn(index, data) {
    return data.id;
  }
}
PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) {
  return new (t || PrincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
PrincipalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PrincipalComponent,
  selectors: [["app-principal"]],
  decls: 4,
  vars: 3,
  consts: [["class", "text-center", 4, "ngIf"], ["class", "h-150 p-5 text-white bg-dark rounded-1 shadow", "style", "height:300px;", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], ["role", "status", 1, "spinner-border", 2, "margin-top", "30vh"], [1, "visually-hidden"], [1, "h-150", "p-5", "text-white", "bg-dark", "rounded-1", "shadow", 2, "height", "300px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "36", "height", "36", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-heart-fill"], ["fill-rule", "evenodd", "d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"], [2, "margin-left", "5px"], [2, "font-family", "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", "font-size", "20px", "font-weight", "100"], ["type", "button", 1, "btn", "btn-outline-light"], [1, "row"], [2, "text-align", "left"], [2, "margin", "0px", "padding", "0px", "margin-left", "15px"], [2, "margin", "0px", "padding", "0px", "margin-top", "5px", "margin-bottom", "5px"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [3, "data", "id", "image"]],
  template: function PrincipalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PrincipalComponent_div_0_Template, 4, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrincipalComponent_div_1_Template, 13, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrincipalComponent_div_3_Template, 9, 2, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
  styles: [".list-item[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease-in;\r\n}\r\n\r\n.list-item.ng-enter[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n\r\n.list-item.ng-enter.ng-enter-active[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWl0ZW0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0ubmctZW50ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0ubmctZW50ZXIubmctZW50ZXItYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('listAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('* => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 0,
      transform: 'translateY(50px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    }))])])]
  }
});

/***/ }),

/***/ 59688:
/*!*********************************!*\
  !*** ./src/app/modelos/data.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data)
/* harmony export */ });
class Data {
  constructor(_id = "", titulo = "", subtitulo = "", categoria = "", articulo = "", imagen = "") {
    this.data = {
      id: '',
      titulo: '',
      subtitulo: '',
      categoria: '',
      articulo: '',
      imagen: ''
    };
    this._id = _id;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.categoria = categoria;
    this.articulo = articulo;
    this.imagen = imagen;
  }
}
;

/***/ }),

/***/ 78666:
/*!**********************************************!*\
  !*** ./src/app/pipes/date-converter.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateConverterPipe": () => (/* binding */ DateConverterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 81222);

class DateConverterPipe {
  transform(value) {
    const fecha = new Date(value);
    const ahora = new Date();
    const diferencia = ahora.getTime() - fecha.getTime();
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diferencia / (1000 * 60 * 60) % 24);
    const minutos = Math.floor(diferencia / (1000 * 60) % 60);
    let resultado = '';
    if (dias > 0) {
      resultado += `${dias} día${dias > 1 ? 's' : ''} `;
    }
    if (horas > 0) {
      resultado += `${horas} hr${horas > 1 ? 's' : ''} `;
    }
    resultado += `${minutos} min${minutos > 1 ? 's' : ''}`;
    return resultado.trim();
  }
}
DateConverterPipe.ɵfac = function DateConverterPipe_Factory(t) {
  return new (t || DateConverterPipe)();
};
DateConverterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "dateConverter",
  type: DateConverterPipe,
  pure: true
});

/***/ }),

/***/ 39983:
/*!*******************************************!*\
  !*** ./src/app/servicios/crud.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudService": () => (/* binding */ CrudService)
/* harmony export */ });
/* harmony import */ var _modelos_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelos/data */ 59688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63222);



// import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatSnackBarConfig} from '@angular/material/snack-bar';
// import { Revista } from '../modelos/revista';
//Clase general de crud Articulos y subida de imagenes
class CrudService {
  constructor(http) {
    this.http = http;
    this.data = new _modelos_data__WEBPACK_IMPORTED_MODULE_0__.Data();
    this.URL_API = "http://localhost:4201/data";
  }
  uploadFile(formData) {
    console.log('Bandera', formData);
    return this.http.post('/upload', formData); // en produccion poner '/upload' por this.URL_API2
  }
  //CRUD
  //pedir TODO
  getDatas() {
    return this.http.get(this.URL_API);
  }
  //Pedir 1
  getOneData(_id) {
    return this.http.get(this.URL_API + `/${_id}`);
  }
  // Agregar
  addData(data) {
    return this.http.post(this.URL_API, data);
  }
  modifyData(data) {
    return this.http.put(this.URL_API + `/${data._id}`, data);
  }
  deleteData(_id) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
CrudService.ɵfac = function CrudService_Factory(t) {
  return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CrudService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CrudService,
  factory: CrudService.ɵfac,
  providedIn: 'root'
});
;

/***/ }),

/***/ 68391:
/*!***************************************************!*\
  !*** ./src/app/servicios/resolve-nota.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveNotaService": () => (/* binding */ ResolveNotaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 81222);
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.service */ 39983);


class ResolveNotaService {
  constructor(crudService) {
    this.crudService = crudService;
  }
  resolve(route, state) {
    if (route.paramMap.has('_id')) {
      console.log();
      return this.crudService.getOneData(route.paramMap.get('_id'));
    } else {
      return this.crudService.getDatas();
    }
  }
}
ResolveNotaService.ɵfac = function ResolveNotaService_Factory(t) {
  return new (t || ResolveNotaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
ResolveNotaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ResolveNotaService,
  factory: ResolveNotaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 23149:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 84362);


/***/ }),

/***/ 53226:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_6__.AppServerModule),
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "renderModule": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var C_Users_juand_OneDrive_Escritorio_proyecto_testSSR_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 97586);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/node */ 21070);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 88638);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nguniversal/express-engine */ 95808);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ 42233);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ 57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ 71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/main.server */ 23149);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-server */ 35399);







const bodyParser = __webpack_require__(/*! body-parser */ 70702);
const mongoose = __webpack_require__(/*! mongoose */ 77470);
const {
  Data
} = __webpack_require__(/*! ./models */ 33624);
const cors = __webpack_require__(/*! cors */ 3228);

// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_3__();
  const distFolder = (0,path__WEBPACK_IMPORTED_MODULE_5__.join)(process.cwd(), 'dist/testSSR/browser');
  const indexHtml = (0,fs__WEBPACK_IMPORTED_MODULE_4__.existsSync)((0,path__WEBPACK_IMPORTED_MODULE_5__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_2__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_6__.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.use(bodyParser.json({
    limit: '200mb'
  }));
  server.use(bodyParser.urlencoded({
    limit: '200mb',
    extended: true
  }));
  server.use(cors());
  server.get('/data', /*#__PURE__*/function () {
    var _ref = (0,C_Users_juand_OneDrive_Escritorio_proyecto_testSSR_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
      const data = yield Data.find();
      console.log(data);
      res.json(data);
    });
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  server.post('/data', /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_juand_OneDrive_Escritorio_proyecto_testSSR_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
      const data = new Data({
        categoria: req.body.categoria,
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        articulo: req.body.articulo
      });
      yield data.save();
      res.json('Articulo creado!');
    });
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  server.delete('/data/:_id', /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_juand_OneDrive_Escritorio_proyecto_testSSR_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
      const {
        _id
      } = req.params;
      yield Data.findByIdAndDelete(_id);
      res.json("Eliminado!");
    });
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  server.put('/data/:_id', /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_juand_OneDrive_Escritorio_proyecto_testSSR_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
      const {
        _id
      } = req.params;
      const articulo = {
        categoria: req.body.categoria,
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        articulo: req.body.articulo
      };
      yield Data.findByIdAndUpdate(_id, {
        $set: articulo
      }, {
        new: true
      });
      res.json('Articulo modificado!');
    });
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  server.get('/data/:_id', /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_juand_OneDrive_Escritorio_proyecto_testSSR_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (req, res) {
      var aux = String(req.params._id);
      try {
        const articulo = yield Data.findById({
          _id: aux
        });
        if (articulo === null) {
          const articulo = yield Data.findOne({
            indice: aux
          });
          res.json(articulo);
        } else {
          res.json(articulo);
        }
      } catch (err) {
        res.json('ID no encontrado..');
      }
    });
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_3__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}
mongoose.connect('mongodb+srv://ccamAdmin:UNdianuevo.12@ccam.qpdpzqh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 65616:
/*!****************************************!*\
  !*** ./node_modules/mongodb/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 65616;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 39491:
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 9523:
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 85477:
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 24404:
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(74940)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(53226)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "vendor" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map