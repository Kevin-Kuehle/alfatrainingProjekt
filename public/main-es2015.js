(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-image/add-image.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-image/add-image.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n      <h2 class=\"pt-5 pb-5\">Bildhinzufügen</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row d-flex justify-content-center\">\r\n    {{ upLoadForm.valid }}\r\n    <form [formGroup]=\"upLoadForm\" class=\"addForm d-flex flex-column align-items-center justify-content-center\">\r\n      <input  [class.valid]=\"upLoadForm.get('title').valid\" formControlName=\"title\" placeholder=\"TITEL\" type=\"text\" name=\"titel\">\r\n      <input  [class.valid]=\"upLoadForm.get('tags').valid\" formControlName=\"tags\" placeholder=\"Tags z.B. dog,cat\" type=\"text\" name=\"tags\">\r\n      <input [class.valid]=\"upLoadForm.get('url').valid\" pattern=\"(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|png|jpeg)\" formControlName=\"url\" placeholder=\"URL\" type=\"text\" name=\"url\">\r\n\r\n      <textarea  [class.valid]=\"upLoadForm.get('description').valid\" formControlName=\"description\" pattern=\"[0-9a-zA-Z?ß\\.,!\\W]*\" cols=\"30\" rows=\"10\" name=\"beschreibung\" ></textarea>\r\n\r\n      <button [disabled]=\"!upLoadForm.valid\"  (click)=\"addImage()\" [class.valid]=\"upLoadForm.valid\" type=\"button\" name=\"upload\" id=\"\" class=\"btn submit btn-lg btn-block mt-4 \"> Hochladen</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bilder-detail/bilder-detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bilder-detail/bilder-detail.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"grid\">\r\n  <div class=\"body\" [ngStyle]=\"imageStyle\"></div>\r\n  <div class=\"mt-3 metaData\">\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"d-flex flex-column align-items-center justify-content-center align-items-center col-6\">\r\n        <h4 *ngIf=\"image?.title\">{{ image.title }}</h4>\r\n        <small class=\"pb-2 text-primary\"> {{ image?.tags }} </small>\r\n        <p *ngIf=\"image?.description\">{{ image?.description }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"toolBar pt-3\">\r\n    <div class=\"row\">\r\n      <div class=\"d-flex flex-row justify-content-center col-12\">\r\n        <button routerLink=\"/Bilder\" type=\"button\" class=\"btn btn-outline-primary\">\r\n          Zurück\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bilder/bilder.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bilder/bilder.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"container align-middle align-content-center image-header\">\r\n\r\n    <div class=\"d-flex justify-content-center align-items-center align-middle row\" [style.height]=\"'250px'\">\r\n      <h1>{{title | titlecase }}</h1>\r\n    </div>\r\n\r\n    <div class=\"searchForm\">\r\n      <input (keyup.enter)=\"newSearch(searchForm.value)\" name=\"searchForm\" class=\"searchFormBilder\" #searchForm\r\n        type=\"text\"> <i (click)=\"newSearch(searchForm.value)\" class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      <div class=\"toolBar\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n          <button (click)=\"changeImageLimit(20)\" #small type=\"button\" class=\"btn \">20 Bilder</button>\r\n          <button (click)=\"changeImageLimit(60)\" #medium type=\"button\" class=\"btn\">60 Bilder</button>\r\n          <button (click)=\"changeImageLimit(100)\" #large type=\"button\" class=\"btn\">100 Bilder</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button *ngIf=\"loggedIn\" routerLink=\"/add\" type=\"button\" class=\" mb-4 btn btn-primary btn-lg btn-block\">Bild\r\n      +</button>\r\n\r\n  </div>\r\n  <div class=\"ImagesContainer\">\r\n    <div (click)=\"showDetail( i )\" id=\"{{i}}\" *ngFor=\"let image of data; index as i\" class=\"fadeIn imageBox image-{{i}}\"\r\n      [style.backgroundImage]=\"'url(' + image.largeImageURL + ')'\">\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"spacer\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\r\n  <div class=\"logo\">\r\n    {{ logo }}\r\n  </div>\r\n  <div class=\"menu\">\r\n    <a routerLink=\"\" class=\"btn btn-header\">Startseite</a>\r\n    <a routerLink=\"Bilder\" class=\"btn btn-header\">Bilder</a>\r\n  </div>\r\n  <a *ngIf=\"!isLoggedIn\" (click)=\"showLogin = !showLogin\" class=\"btn btn-primary\">Anmelden</a>\r\n  <a *ngIf=\"isLoggedIn\" (click)=\"logMeOut()\" class=\"btn btn-primary\">Abmelden</a>\r\n</div>\r\n\r\n<div [hidden]=\"showLogin\" [class.fadeInR]=\"showLogin\" class=\"formContainer slideInDown\">\r\n  <div class=\"header\">\r\n    <button (click)=\"showLogin = !showLogin\" type=\"button\" class=\"close-btn close\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <h3>Anmelden</h3>\r\n  </div>\r\n  <div class=\"body\">\r\n    <form class=\"loginForm\">\r\n      <div class=\"group\">\r\n        <label for=\"name\"> <small>Email</small> </label>\r\n        <input [(ngModel)]=\"userName\" placeholder=\"admin\" id=\"name\" name=\"name\" type=\"text\">\r\n      </div>\r\n      <div class=\"group\">\r\n        <label for=\"passwort\"><small>Passwort</small></label>\r\n        <input [(ngModel)]=\"userPasswort\" id=\"passwort\" name=\"passwort\" placeholder=\"12345\" type=\"password\">\r\n      </div>\r\n      <button (click)=\"checkLoginSubmit()\" type=\"button\" name=\"\" id=\"\"\r\n        class=\"btn btn-primary btn-lg btn-block\">{{ 'Anmelden' | uppercase }}</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"topSpacer\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 align-middle align-items-center d-flex flex-column\">\r\n        <h1>{{ title }}</h1>\r\n        <div class=\"searchBox\">\r\n          <input (keyup.enter)=\"searchImage(ImageS.value)\" #ImageS class=\"ImageSearchHome\" [(ngModel)]=\"toSearch\" name=\"imageToSearch\" type=\"text\">\r\n          <i class=\"fa fa-search light\" (click)=\"searchImage(ImageS.value)\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n");

/***/ }),

/***/ "./src/app/add-image/add-image.component.scss":
/*!****************************************************!*\
  !*** ./src/app/add-image/add-image.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1;\n  background-color: var(--background-color);\n  color: #fff;\n  padding-top: 52px;\n}\n\n.addForm {\n  width: 100%;\n}\n\n.addForm input {\n  margin-bottom: 0.5rem;\n  width: 80%;\n  background: none;\n  border: none;\n  border-bottom: 1px solid var(--akzent-color);\n  padding: 0.3rem 0;\n  text-align: center;\n  color: #3cf5db;\n}\n\n.addForm input.valid {\n  border-bottom: #07ff11 1px solid;\n}\n\n.addForm textarea {\n  overflow: auto;\n  resize: vertical;\n  width: 80%;\n  background-color: #9800ff26;\n  border: none;\n  color: white;\n  padding: 1rem;\n}\n\n.addForm textarea.valid {\n  border: #07ff11 1px solid;\n}\n\n.submit {\n  color: black;\n  background-color: grey;\n  max-width: 80%;\n}\n\n.submit.valid {\n  background-color: lawngreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWltYWdlL0M6XFxVc2Vyc1xcS2V2aW5cXERlc2t0b3BcXGFsZmF0cmFpbmluZ1Byb2pla3Qvc3JjXFxhcHBcXGFkZC1pbWFnZVxcYWRkLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQtaW1hZ2UvYWRkLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0k7RUFDRSxnQ0FBQTtBQ0NOOztBREdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDREo7O0FER0k7RUFDRSx5QkFBQTtBQ0ROOztBRFFBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFFFO0VBQ0UsMkJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2FkZC1pbWFnZS9hZGQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLXRvcDogNTJweDtcclxufVxyXG5cclxuLmFkZEZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ha3plbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzNjZjVkYjtcclxuXHJcbiAgICAmLnZhbGlkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogIzA3ZmYxMSAxcHggc29saWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4MDBmZjI2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAmLnZhbGlkIHtcclxuICAgICAgYm9yZGVyOiAjMDdmZjExIDFweCBzb2xpZDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcblxyXG5cclxuICAmLnZhbGlkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDUycHg7XG59XG5cbi5hZGRGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWRkRm9ybSBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWt6ZW50LWNvbG9yKTtcbiAgcGFkZGluZzogMC4zcmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzY2Y1ZGI7XG59XG4uYWRkRm9ybSBpbnB1dC52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206ICMwN2ZmMTEgMXB4IHNvbGlkO1xufVxuLmFkZEZvcm0gdGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4MDBmZjI2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5hZGRGb3JtIHRleHRhcmVhLnZhbGlkIHtcbiAgYm9yZGVyOiAjMDdmZjExIDFweCBzb2xpZDtcbn1cblxuLnN1Ym1pdCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG4uc3VibWl0LnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF3bmdyZWVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/add-image/add-image.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-image/add-image.component.ts ***!
  \**************************************************/
/*! exports provided: AddImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImageComponent", function() { return AddImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");





let AddImageComponent = class AddImageComponent {
    constructor(reactiveForm, ROUTER, imageService) {
        this.reactiveForm = reactiveForm;
        this.ROUTER = ROUTER;
        this.imageService = imageService;
        this.submitStatus = false;
        this.storeData = '';
        this.urlRegEx = '(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|png)';
        this.upLoadForm = this.reactiveForm.group({
            'title': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]],
            'tags': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]],
            'description': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(150)]],
            'url': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() { }
    addImage() {
        let localStorageData = [];
        let Obj = {
            'title': this.upLoadForm.get('title').value,
            'largeImageURL': this.upLoadForm.get('url').value,
            'tags': this.upLoadForm.get('tags').value,
            'description': this.upLoadForm.get('description').value,
        };
        this.imageService.addCustomImage(Obj);
        this.upLoadForm.reset();
        this.ROUTER.navigate(['Bilder']);
    }
};
AddImageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _images_service__WEBPACK_IMPORTED_MODULE_4__["ImagesService"] }
];
AddImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-image/add-image.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-image.component.scss */ "./src/app/add-image/add-image.component.scss")).default]
    })
], AddImageComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _bilder_bilder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bilder/bilder.component */ "./src/app/bilder/bilder.component.ts");
/* harmony import */ var _bilder_detail_bilder_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bilder-detail/bilder-detail.component */ "./src/app/bilder-detail/bilder-detail.component.ts");
/* harmony import */ var _add_image_add_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-image/add-image.component */ "./src/app/add-image/add-image.component.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Bilder', component: _bilder_bilder_component__WEBPACK_IMPORTED_MODULE_4__["BilderComponent"] },
    { path: 'Bild/:index', component: _bilder_detail_bilder_detail_component__WEBPACK_IMPORTED_MODULE_5__["BilderDetailComponent"] },
    { path: 'add', component: _add_image_add_image_component__WEBPACK_IMPORTED_MODULE_6__["AddImageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100vh;\n  display: flex;\n  flex-flow: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxLZXZpblxcRGVza3RvcFxcYWxmYXRyYWluaW5nUHJvamVrdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG5cclxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'kevinKuehleProjektAlfatraining';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _bilder_bilder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bilder/bilder.component */ "./src/app/bilder/bilder.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _bilder_detail_bilder_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bilder-detail/bilder-detail.component */ "./src/app/bilder-detail/bilder-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images.service */ "./src/app/images.service.ts");
/* harmony import */ var _add_image_add_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-image/add-image.component */ "./src/app/add-image/add-image.component.ts");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _bilder_bilder_component__WEBPACK_IMPORTED_MODULE_8__["BilderComponent"],
            _bilder_detail_bilder_detail_component__WEBPACK_IMPORTED_MODULE_10__["BilderDetailComponent"],
            _add_image_add_image_component__WEBPACK_IMPORTED_MODULE_13__["AddImageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ],
        providers: [_images_service__WEBPACK_IMPORTED_MODULE_12__["ImagesService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bilder-detail/bilder-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/bilder-detail/bilder-detail.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1;\n  background-color: var(--background-color);\n  color: #fff;\n}\n\n.grid {\n  display: flex;\n  flex-flow: column nowrap;\n  height: 100%;\n}\n\n.header {\n  border: 1px solid red;\n  flex: 1;\n}\n\nmain {\n  padding-top: 2.5rem;\n}\n\n.body {\n  flex: 0 0 calc(100vh - 52px);\n  width: 100%;\n  background-position: center center;\n  background-size: 65% auto;\n  background-repeat: no-repeat;\n}\n\n.toolBar {\n  flex: 0 0 150px;\n}\n\n.toolBar .btn {\n  margin-right: 1rem;\n}\n\n.toolBar .btn:last-child {\n  margin-right: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsZGVyLWRldGFpbC9DOlxcVXNlcnNcXEtldmluXFxEZXNrdG9wXFxhbGZhdHJhaW5pbmdQcm9qZWt0L3NyY1xcYXBwXFxiaWxkZXItZGV0YWlsXFxiaWxkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iaWxkZXItZGV0YWlsL2JpbGRlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLE9BQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURFRTtFQUNFLGtCQUFBO0FDQUo7O0FERUk7RUFDRSxxQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvYmlsZGVyLWRldGFpbC9iaWxkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgZmxleDogMCAwIGNhbGMoMTAwdmggLSA1MnB4KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNjUlIGF1dG87XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbn1cclxuXHJcbi50b29sQmFyIHtcclxuICBmbGV4OiAwIDAgMTUwcHg7XHJcblxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5oZXJpdDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZmxleDogMTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG59XG5cbi5ib2R5IHtcbiAgZmxleDogMCAwIGNhbGMoMTAwdmggLSA1MnB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogNjUlIGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi50b29sQmFyIHtcbiAgZmxleDogMCAwIDE1MHB4O1xufVxuLnRvb2xCYXIgLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi50b29sQmFyIC5idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogaW5oZXJpdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bilder-detail/bilder-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/bilder-detail/bilder-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: BilderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilderDetailComponent", function() { return BilderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");




let BilderDetailComponent = class BilderDetailComponent {
    constructor(aktiveLink, imageService) {
        this.aktiveLink = aktiveLink;
        this.imageService = imageService;
        this.loggedIn = false;
    }
    ngOnInit() {
        this.index = this.aktiveLink.snapshot.paramMap.get('index');
        // @ts-ignore
        this.imageService.getData().then((resolve, err) => {
            if (err)
                console.log(err);
            this.images = resolve;
            this.image = this.images[this.index];
            this.imageStyle = {
                'backgroundImage': `url(${this.image.largeImageURL})`,
            };
        });
        if (sessionStorage.getItem('loggedIn') != null && sessionStorage.getItem('loggedIn') == 'true') {
            this.loggedIn = true;
        }
    }
};
BilderDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] }
];
BilderDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bilder-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bilder-detail/bilder-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bilder-detail.component.scss */ "./src/app/bilder-detail/bilder-detail.component.scss")).default]
    })
], BilderDetailComponent);



/***/ }),

/***/ "./src/app/bilder/bilder.component.scss":
/*!**********************************************!*\
  !*** ./src/app/bilder/bilder.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1;\n  background-color: #131326;\n  color: var(--akzent-color);\n}\n\n.ImagesContainer {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n\n.btn-group {\n  padding: 0.6rem 0;\n}\n\n.btn-group .btn {\n  color: #fff;\n  background-color: var(--main-color);\n  font-size: 12px;\n}\n\n.btn-group .btn:hover {\n  background-color: #3f3092;\n}\n\n.imageBox {\n  width: auto;\n  height: 300px;\n  flex: 1 1 20%;\n  margin: 3px;\n  background-position: center;\n  background-size: cover;\n  cursor: pointer;\n  max-width: 33%;\n}\n\n@media (max-width: 600px) {\n  .imageBox {\n    flex: 0 1 auto;\n    width: 48%;\n    max-width: initial;\n  }\n}\n\n.searchForm {\n  position: relative;\n  display: flex;\n  flex-flow: column nowrap;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 440px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.searchForm .searchFormBilder {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid white;\n  background: none;\n  padding: 0.7rem 0;\n  color: white;\n  text-align: center;\n  font-size: 29px;\n  letter-spacing: 3.2px;\n}\n\n.searchForm .searchFormBilder + i {\n  position: absolute;\n  right: 32px;\n  top: 72px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsZGVyL0M6XFxVc2Vyc1xcS2V2aW5cXERlc2t0b3BcXGFsZmF0cmFpbmluZ1Byb2pla3Qvc3JjXFxhcHBcXGJpbGRlclxcYmlsZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iaWxkZXIvYmlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVJO0VBQ0UseUJBQUE7QUNBTjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGRjs7QURJRTtFQVZGO0lBV0ksY0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNGSjs7QURJSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9iaWxkZXIvYmlsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMyNjtcclxuICBjb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yKTtcclxufVxyXG5cclxuLkltYWdlc0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgcGFkZGluZzogMC42cmVtIDA7XHJcblxyXG4gIC5idG4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCM1MDNDQjksIDEwJSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZUJveCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBmbGV4OiAxIDEgMjAlO1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXgtd2lkdGg6IDMzJTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoRm9ybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxuXHJcblxyXG4gIC5zZWFyY2hGb3JtQmlsZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDMuMnB4O1xyXG5cclxuICAgICtpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMzJweDtcclxuICAgICAgdG9wOiA3MnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMjY7XG4gIGNvbG9yOiB2YXIoLS1ha3plbnQtY29sb3IpO1xufVxuXG4uSW1hZ2VzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tZ3JvdXAge1xuICBwYWRkaW5nOiAwLjZyZW0gMDtcbn1cbi5idG4tZ3JvdXAgLmJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJ0bi1ncm91cCAuYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmMzA5Mjtcbn1cblxuLmltYWdlQm94IHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzAwcHg7XG4gIGZsZXg6IDEgMSAyMCU7XG4gIG1hcmdpbjogM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LXdpZHRoOiAzMyU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmltYWdlQm94IHtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICB3aWR0aDogNDglO1xuICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgfVxufVxuXG4uc2VhcmNoRm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5zZWFyY2hGb3JtIC5zZWFyY2hGb3JtQmlsZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDMuMnB4O1xufVxuLnNlYXJjaEZvcm0gLnNlYXJjaEZvcm1CaWxkZXIgKyBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzJweDtcbiAgdG9wOiA3MnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/bilder/bilder.component.ts":
/*!********************************************!*\
  !*** ./src/app/bilder/bilder.component.ts ***!
  \********************************************/
/*! exports provided: BilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilderComponent", function() { return BilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let BilderComponent = class BilderComponent {
    constructor(imageService, router) {
        this.imageService = imageService;
        this.router = router;
        this.title = 'Schöne Bilder von Pixabay ♥';
        this.loggedIn = false;
    }
    ngOnInit() {
        // @ts-ignore
        this.imageService.getData().then((resolve, err) => {
            if (err) {
                console.log(err);
            }
            this.data = resolve;
        });
        if (sessionStorage.getItem('loggedIn') != null && sessionStorage.getItem('loggedIn') === 'true') {
            this.loggedIn = true;
        }
    }
    showDetail(index) {
        this.router.navigate(['Bild', index]);
    }
    newSearch(toSearch) {
        // @ts-ignore
        this.imageService.getNewData(toSearch).then((res, err) => {
            if (err) {
                console.log(err);
            }
            this.data = [...res[0]];
        });
    }
    changeImageLimit(limit) {
        // @ts-ignore
        this.imageService.changeResultLimit(limit).then((res, err) => {
            if (err) {
                console.log(err);
            }
            this.data = [...res];
        });
    }
};
BilderComponent.ctorParameters = () => [
    { type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BilderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bilder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bilder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bilder/bilder.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bilder.component.scss */ "./src/app/bilder/bilder.component.scss")).default]
    })
], BilderComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 0 0 40px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n  align-content: center;\n  background-color: var(--footer-color);\n  color: var(--akzent-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcS2V2aW5cXERlc2t0b3BcXGFsZmF0cmFpbmluZ1Byb2pla3Qvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4OiAwIDAgNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yKTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGZsZXg6IDAgMCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFremVudC1jb2xvcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  z-index: 5000;\n  max-width: 100vw;\n}\n\n.header-container {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 52px;\n  padding: 0 3rem;\n  background-color: var(--main-color);\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  color: var(--akzent-color);\n  box-shadow: 0 4px 2px -3px rgba(0, 0, 0, 0.8);\n}\n\n.header-container .logo {\n  font-weight: 500;\n}\n\n@media (max-width: 600px) {\n  .header-container {\n    padding: 0 0.5rem;\n  }\n  .header-container .logo {\n    display: none;\n  }\n}\n\n.menu .btn-header {\n  border: 1px solid #f0ebeb;\n  color: white;\n}\n\n.menu .btn-header:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.menu a {\n  margin-right: 15px;\n}\n\n.menu a:last-child {\n  margin-right: 0;\n}\n\n@media (max-width: 420px) {\n  .menu a {\n    margin-right: 8px;\n  }\n}\n\n.changeColor {\n  color: greenyellow;\n}\n\n.formContainer {\n  z-index: 5000;\n  position: absolute;\n  left: calc(50% - 200px);\n  top: 20%;\n  width: 400px;\n  height: 100%;\n  max-height: 500px;\n  background-color: var(--skundaer-color);\n  display: flex;\n  flex-flow: column;\n  box-shadow: 1px 5px 16px rgba(0, 0, 0, 0.5);\n}\n\n.formContainer .header {\n  display: flex;\n  flex-flow: column nowrap;\n  color: #fff;\n  align-items: center;\n  align-content: center;\n  justify-content: space-between;\n  height: 250px;\n  background-color: var(--main-color);\n}\n\n.formContainer .header .close {\n  text-shadow: none;\n  color: black;\n  align-self: flex-end;\n  justify-self: flex-start;\n  margin-right: 0.5rem;\n}\n\n.formContainer .body {\n  flex: 1;\n  display: flex;\n  flex-flow: column;\n  align-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.formContainer .body .loginForm {\n  padding: 3rem 1rem;\n  color: #fff;\n  flex-flow: column nowrap;\n  align-items: center;\n  align-content: center;\n}\n\n.formContainer .body .loginForm .group {\n  margin-bottom: 0.5rem;\n  display: flex;\n  flex-flow: column;\n}\n\n.formContainer .body .loginForm .group label {\n  margin: 0 0 0.2rem 0;\n  padding: 0;\n  text-align: center;\n}\n\n.formContainer .body .loginForm .group input {\n  background: none;\n  border: none;\n  color: #3cf5db;\n  border-bottom: 1px solid #fff;\n  text-align: center;\n}\n\n.formContainer .body .loginForm .group:last-child {\n  margin-bottom: 0;\n}\n\n.formContainer .body .loginForm button {\n  margin: 2rem 0;\n}\n\n@media (max-width: 430px) {\n  .formContainer {\n    top: 10%;\n    width: 80vw;\n    height: 70vh;\n    left: calc(50% - (80vw/2));\n  }\n  .formContainer .header {\n    height: 100px;\n  }\n}\n\n.topSpacer {\n  max-height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcS2V2aW5cXERlc2t0b3BcXGFsZmF0cmFpbmluZ1Byb2pla3Qvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZDQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBbkJGO0lBb0JJLGlCQUFBO0VDQ0Y7RURDRTtJQUNFLGFBQUE7RUNDSjtBQUNGOztBRElFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDREo7O0FER0k7RUFDRSxvQ0FBQTtBQ0ROOztBREtFO0VBQ0Usa0JBQUE7QUNISjs7QURLSTtFQUNFLGVBQUE7QUNITjs7QURPRTtFQUNFO0lBQ0UsaUJBQUE7RUNMSjtBQUNGOztBRFNBO0VBQ0Usa0JBQUE7QUNORjs7QURTQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FDTkY7O0FEUUU7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FDTko7O0FEUUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNOTjs7QURVRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1JKOztBRFVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUk47O0FEVU07RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1JSOztBRFVRO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNSVjs7QURXUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDVFY7O0FEWVE7RUFDRSxnQkFBQTtBQ1ZWOztBRGNNO0VBQ0UsY0FBQTtBQ1pSOztBRGlCRTtFQTdFRjtJQThFSSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQ2RGO0VEZ0JFO0lBQ0UsYUFBQTtFQ2RKO0FBQ0Y7O0FEbUJBO0VBQ0UsaUJBQUE7QUNoQkYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHotaW5kZXg6IDUwMDA7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1ha3plbnQtY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1lbnUge1xyXG4gIC5idG4taGVhZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDAsIDIzNSwgMjM1KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NDIwcHgpIHtcclxuICAgIGEge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jaGFuZ2VDb2xvciB7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcblxyXG4uZm9ybUNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogNTAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAyMDBweCk7XHJcbiAgdG9wOiAyMCU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3VuZGFlci1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiAxcHggNXB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcblxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm9keSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAubG9naW5Gb3JtIHtcclxuICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAuZ3JvdXAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAwLjJyZW0gMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMzY2Y1ZGI7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NDMwcHgpIHtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICg4MHZ3LzIpKTtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG4udG9wU3BhY2VyIHtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHotaW5kZXg6IDUwMDA7XG4gIG1heC13aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUycHg7XG4gIHBhZGRpbmc6IDAgM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLmhlYWRlci1jb250YWluZXIgLmxvZ28ge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubWVudSAuYnRuLWhlYWRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGViZWI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZW51IC5idG4taGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1lbnUgYSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5tZW51IGE6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAubWVudSBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxufVxuXG4uY2hhbmdlQ29sb3Ige1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbi5mb3JtQ29udGFpbmVyIHtcbiAgei1pbmRleDogNTAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcbiAgdG9wOiAyMCU7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t1bmRhZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5mb3JtQ29udGFpbmVyIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGNvbG9yOiAjZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG4uZm9ybUNvbnRhaW5lciAuaGVhZGVyIC5jbG9zZSB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmZvcm1Db250YWluZXIgLmJvZHkge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybUNvbnRhaW5lciAuYm9keSAubG9naW5Gb3JtIHtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9ybUNvbnRhaW5lciAuYm9keSAubG9naW5Gb3JtIC5ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4uZm9ybUNvbnRhaW5lciAuYm9keSAubG9naW5Gb3JtIC5ncm91cCBsYWJlbCB7XG4gIG1hcmdpbjogMCAwIDAuMnJlbSAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybUNvbnRhaW5lciAuYm9keSAubG9naW5Gb3JtIC5ncm91cCBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzY2Y1ZGI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybUNvbnRhaW5lciAuYm9keSAubG9naW5Gb3JtIC5ncm91cDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5mb3JtQ29udGFpbmVyIC5ib2R5IC5sb2dpbkZvcm0gYnV0dG9uIHtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcbiAgLmZvcm1Db250YWluZXIge1xuICAgIHRvcDogMTAlO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICg4MHZ3LzIpKTtcbiAgfVxuICAuZm9ybUNvbnRhaW5lciAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi50b3BTcGFjZXIge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(ROUTE) {
        this.ROUTE = ROUTE;
        this.logo = 'Kevin Kühle';
        this.showLogin = true;
        this.isLoggedIn = false;
        this.userName = '';
        this.userPasswort = '';
    }
    ngOnInit() {
        if (sessionStorage.getItem('loggedIn') !== null) {
            this.isLoggedIn = JSON.parse(sessionStorage.getItem('loggedIn'));
        }
        else {
            this.isLoggedIn = false;
        }
    }
    checkLoginSubmit() {
        if (this.userName === 'admin' && this.userPasswort === '12345') {
            this.isLoggedIn = true;
            this.showLogin = true;
            sessionStorage.setItem('loggedIn', 'true');
            window.location.reload();
        }
        else {
            this.isLoggedIn = false;
            sessionStorage.setItem('loggedIn', 'false');
        }
    }
    logMeOut() {
        this.isLoggedIn = false;
        sessionStorage.removeItem('loggedIn');
        this.ROUTE.navigate(['']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1 0 calc(100vh);\n  background-image: url('home_background.jpg');\n  background-position: center center;\n  background-size: cover;\n}\n\nh1 {\n  color: #ffffff;\n  text-align: center;\n  font-weight: 300;\n}\n\n.box-1 {\n  border: 1px solid red;\n  height: 300px;\n}\n\n.box-2 {\n  border: 1px solid #07ff11;\n}\n\n.searchBox {\n  width: 410px;\n}\n\n.ImageSearchHome {\n  font-weight: 300;\n  background: none;\n  border: none;\n  border-bottom: 1px solid white;\n  width: 100%;\n  padding: 0.5rem 0;\n  color: white;\n  text-align: center;\n  font-size: 24px;\n}\n\n.ImageSearchHome + i {\n  cursor: pointer;\n  float: right;\n  transform: translateY(-24px);\n}\n\n.topSpacer {\n  display: block;\n  height: 100vh;\n  max-height: 34vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEtldmluXFxEZXNrdG9wXFxhbGZhdHJhaW5pbmdQcm9qZWt0L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDREo7O0FES0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMSAwIGNhbGMoMTAwdmgpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lX2JhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5ib3gtMSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5ib3gtMiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA3ZmYxMTtcclxufVxyXG5cclxuXHJcbi5zZWFyY2hCb3gge1xyXG4gIHdpZHRoOiA0MTBweDtcclxufVxyXG5cclxuLkltYWdlU2VhcmNoSG9tZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcblxyXG5cclxuICArIGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi50b3BTcGFjZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWF4LWhlaWdodDogMzR2aDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiOmhvc3Qge1xuICBmbGV4OiAxIDAgY2FsYygxMDB2aCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZV9iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYm94LTEge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5ib3gtMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwN2ZmMTE7XG59XG5cbi5zZWFyY2hCb3gge1xuICB3aWR0aDogNDEwcHg7XG59XG5cbi5JbWFnZVNlYXJjaEhvbWUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLkltYWdlU2VhcmNoSG9tZSArIGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcbn1cblxuLnRvcFNwYWNlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAzNHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");




let HomeComponent = class HomeComponent {
    constructor(ROUTER, IMAGESERVICE) {
        this.ROUTER = ROUTER;
        this.IMAGESERVICE = IMAGESERVICE;
        this.title = 'Bilder suchen...';
        this.toSearch = 'Dark';
    }
    ngOnInit() {
    }
    searchImage(toSearch) {
        this.IMAGESERVICE.changeSearch(toSearch);
        this.ROUTER.navigate(['Bilder']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/images.service.ts":
/*!***********************************!*\
  !*** ./src/app/images.service.ts ***!
  \***********************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let ImagesService = class ImagesService {
    constructor(http) {
        this.http = http;
        this.perPage = '20';
        this.pixabayToken = '2265964-89697f5f85fbc653cbfb22eb6';
        this.customData = [];
        this.toSearch = 'dog';
        this.path = `https://pixabay.com/api/?key=${this.pixabayToken}&q=${this.toSearch}&image_type=photo&order=popular&per_page=${this.perPage}&orientation=horizontal`;
        if (localStorage.getItem('customData') != null) {
            this.customData = JSON.parse(localStorage.getItem('customData'));
        }
        else {
            localStorage.setItem('customData', JSON.stringify(this.customData));
        }
    }
    changePath(toSearch) {
        this.path = `https://pixabay.com/api/?key=${this.pixabayToken}&q=${toSearch}&image_type=photo&order=popular&per_page=${this.perPage}&orientation=horizontal`;
    }
    getData() {
        return new Promise((resolve, reject) => {
            let data = [];
            this.http.get(this.path).subscribe((value) => {
                // @ts-ignore
                data.push(...value.hits);
                if (this.customData.length >= 0) {
                    data.unshift(...this.customData);
                }
                resolve(data);
            }, (err) => { console.error(err); });
        });
    }
    getNewData(search) {
        return new Promise((resolve, error) => {
            let data = [];
            this.changePath(search);
            this.http.get(this.path).subscribe((value) => {
                // @ts-ignore
                data.push(value.hits);
                resolve(data);
            }, (err) => { console.error(err); });
        });
    }
    // Für die Home Komponente
    changeSearch(search) {
        this.changePath(search);
    }
    addCustomImage(newImage) {
        this.customData.push(newImage);
        localStorage.setItem('customData', JSON.stringify(this.customData));
    }
    changeResultLimit(limit) {
        this.perPage = limit.toString();
        this.changePath(this.toSearch);
        return new Promise((resolve, reject) => {
            let data = [];
            this.http.get(this.path).subscribe((value) => {
                // @ts-ignore
                data.push(...value.hits);
                if (this.customData.length >= 0) {
                    data.unshift(...this.customData);
                }
                resolve(data);
            }, (err) => { console.error(err); });
        });
    }
};
ImagesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImagesService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kevin\Desktop\alfatrainingProjekt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map