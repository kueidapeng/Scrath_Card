webpackJsonp([1,4],{

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=../../src/main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var bg = __webpack_require__(630).default;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.imageSrc = "../../assets/images/600.png";
    }
    AppComponent.prototype.ngOnInit = function () {
        var isdown = false;
        var cover = document.getElementById("cover");
        var covercanvas = cover.getContext("2d");
        console.log(cover);
        covercanvas.fillStyle = "transparent";
        covercanvas.fillRect(0, 0, 400, 400);
        function fillter(canvas) {
            canvas.fillStyle = "#ccc";
            canvas.fillRect(0, 0, 400, 400);
        }
        function isDown(e) {
            e.preventDefault();
            isdown = true;
        }
        function isUp(e) {
            isdown = false;
        }
        function draw(e) {
            e.preventDefault();
            if (isdown) {
                console.log(isdown);
                if (e.changedTouches) {
                    e = e.changedTouches[e.changedTouches.length - 1];
                }
                var _height = (window.innerHeight - 400) / 2, _width = (window.innerWidth - 400) / 2, touchTop = e.clientY - _height, touchLeft = e.clientX - _width;
                if (covercanvas) {
                    covercanvas.beginPath();
                    covercanvas.arc(touchLeft, touchTop, 10, 0, Math.PI * 2);
                    covercanvas.fill();
                }
            }
            //alert(touchTop);
        }
        fillter(covercanvas);
        covercanvas.globalCompositeOperation = "destination-out";
        cover.addEventListener("touchstart", isDown);
        cover.addEventListener("touchmove", draw);
        cover.addEventListener("touchend", isUp);
        cover.addEventListener("mousemove", draw);
        cover.addEventListener("mousedown", isDown);
        cover.addEventListener("mouseup", isUp);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: "app-root",
            template: __webpack_require__(616),
            styles: [__webpack_require__(615)],
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=../../src/app/app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=../../src/app/app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=../../src/environments/environment.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>刮刮卡效果</title>\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\"\n    />\n    <style>\n      .content,\n      .cover {\n        width: 400px;\n        height: 400px;\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        margin: -200px 0 0 -200px;\n      }\n      .content {\n        font-size: 48px;\n        line-height: 400px;\n        text-align: center;\n      }\n      h3 {\n        text-align: center;\n        line-height: 200px;\n      }\n    </style>\n  </head>\n\n  <body\n    style=\"\n      background-image: url('../assets/images/600.png');\n      background-repeat: no-repeat;\n      height: 699px;\n      background-position: 50% 200%;\n    \"\n  >\n    <!-- <img src=\"../assets/images/600.png\" /> -->\n\n    <div class=\"content\">100,000</div>\n    <canvas id=\"cover\" class=\"cover\" width=\"400\" height=\"400\"></canvas>\n  </body>\n</html>\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "600.png";

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[632]);
//# sourceMappingURL=main.bundle.map