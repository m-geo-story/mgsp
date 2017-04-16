webpackJsonp([0,3],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapGraphService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapGraphService = (function () {
    function MapGraphService() {
        // Observable string sources
        this.refMapClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.refTimeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        //when perpare dropdwonlist, set data formatted
        this.refDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.refId = this.refMapClickedSource.asObservable();
        this.refTime = this.refTimeSource.asObservable();
        this.refData = this.refDataSource.asObservable();
    }
    // dropdown list of years
    MapGraphService.prototype.announceRefTime = function (refTime) {
        console.log(refTime);
        this.refTimeSource.next(refTime);
    };
    MapGraphService.prototype.confirmRefTime = function (refTime) {
        this.refTimeSource.next(refTime);
    };
    //data formatted
    MapGraphService.prototype.announceRefData = function (refData) {
        this.refDataSource.next(refData);
    };
    // confirmRefData(refData: Array<Object>) {
    //     this.refDataSource.next(refData);
    // }
    // Service message commands
    MapGraphService.prototype.announceRefId = function (refCountry) {
        this.refMapClickedSource.next(refCountry);
    };
    MapGraphService.prototype.confirmRefId = function (refCountry) {
        this.refMapClickedSource.next(refCountry);
    };
    MapGraphService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MapGraphService);
    return MapGraphService;
}()); // END OF MapGraphService
//# sourceMappingURL=/home/stoneman/projects/mgs/src/map-graph.service.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-page',
            template: __webpack_require__(918)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/home/stoneman/projects/mgs/src/about.component.js.map

/***/ }),

/***/ 370:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(919),
            styles: [__webpack_require__(885)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/stoneman/projects/mgs/src/app.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(920)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/stoneman/projects/mgs/src/home.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostReceiptComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostReceiptComponent = (function () {
    function PostReceiptComponent() {
        this.title = '南北便利商店角色大不同！';
        this.brief = '2017/03/29- MoGeoStory';
    }
    PostReceiptComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-receipt',
            template: __webpack_require__(925),
            styles: [__webpack_require__(890)],
        }), 
        __metadata('design:paramtypes', [])
    ], PostReceiptComponent);
    return PostReceiptComponent;
}());
//# sourceMappingURL=/home/stoneman/projects/mgs/src/post-receipt.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_graph_frame__ = __webpack_require__(728);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphCanvas; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


//that's extends could work probably, but the problem is how to super(parms)?
var GraphCanvas = (function (_super) {
    __extends(GraphCanvas, _super);
    // xAxisOfColumn: d3.Axis<any>;
    function GraphCanvas() {
        var _this = this;
        _super.call(this);
        //http://bl.ocks.org/zanarmstrong/05c1e95bf7aa16c4768e
        this.rounded = __WEBPACK_IMPORTED_MODULE_0_d3__["format"](',.0f');
        this.xScaleBand = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleBand"]().range([0, this.getFrameWidth()]).paddingInner(0.1);
        this.yScaleLinear = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleLinear"]().range([this.getFrameHeight(), 0]);
        this.xScaleTime = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleTime"]().range([0, this.getFrameWidth()]);
        // this.yGridLine= d3.axisRight(this.y)
        //Typescript does not know anything about your data object type. 
        //You can define the data object type or you could try to use the type any:
        this.line = __WEBPACK_IMPORTED_MODULE_0_d3__["line"]()
            .x(function (d) {
            // use '+' for convert string to number
            return +_this.rounded(_this.xScaleTime(d.date));
        })
            .y(function (d) {
            return +_this.rounded(_this.yScaleLinear(d.value));
        });
        // this.xAxisOfColumn = this.xAxisOfColumn();
    }
    ;
    /*
    *create grid line of linear scale
    */
    GraphCanvas.prototype.yAixsOfLinearOfGridLine = function () {
        return __WEBPACK_IMPORTED_MODULE_0_d3__["axisRight"](this.yScaleLinear).tickSize(this.getFrameWidth()).tickSizeOuter(0);
    };
    /**
    *create axis of linear scale
    */
    GraphCanvas.prototype.yAxisOfLinear = function () {
        return __WEBPACK_IMPORTED_MODULE_0_d3__["axisLeft"](this.yScaleLinear);
    };
    /*
   *create grid line of linear scale
   */
    GraphCanvas.prototype.xAixsOfTimeOfGridLine = function () {
        return __WEBPACK_IMPORTED_MODULE_0_d3__["axisBottom"](this.xScaleTime).tickSize(this.getFrameHeight());
    };
    /**
   *create axis of time scale
   */
    GraphCanvas.prototype.xAxisOfTime = function () {
        return __WEBPACK_IMPORTED_MODULE_0_d3__["axisBottom"](this.xScaleTime);
    };
    /**
    *create axis of band (tickSize=0))
    */
    GraphCanvas.prototype.xAxisOfBand = function () {
        return __WEBPACK_IMPORTED_MODULE_0_d3__["axisBottom"](this.xScaleBand).tickSize(0);
    }; // xAxisOfColumn
    /**
    *create a responsive embedded D3 SVG (graph frame adn canvas)
    *the graph-frame is the id of Frame; it was created by createCanvasT extends graph-frame.addFrame;
    */
    GraphCanvas.prototype.createCanvas = function (IdOfHtml, htmlElement) {
        //if #id is empty=>return true
        var graphFrameIsEmpty = __WEBPACK_IMPORTED_MODULE_0_d3__["select"]("#" + IdOfHtml).empty();
        if (graphFrameIsEmpty) {
            return this.canvas = _super.prototype.createFrame.call(this, IdOfHtml, htmlElement).append('g')
                .attr('transform', 'translate(' + this.getFrameMargin()['left'] + ',' + this.getFrameMargin()['top'] + ')');
        }
        else {
            //remove old graph and return new one
            __WEBPACK_IMPORTED_MODULE_0_d3__["select"]("#" + IdOfHtml).remove();
            return this.canvas = _super.prototype.createFrame.call(this, IdOfHtml, htmlElement).append('g')
                .attr('transform', 'translate(' + this.getFrameMargin()['left'] + ',' + this.getFrameMargin()['top'] + ')');
        }
    }; //createCanvas
    /**
     * default:414px in graph-frame
    */
    GraphCanvas.prototype.setFrameWidth = function (width) {
        _super.prototype.setFrameWidth.call(this, width);
    };
    ;
    GraphCanvas.prototype.getFrameWidth = function () {
        return _super.prototype.getFrameWidth.call(this);
    };
    /**
     * the height shold be small than 300 (the size of frame).
     * If not, the graph would out of viewbox.
     *
     * default:200px in graph-frame
     */
    GraphCanvas.prototype.setFrameHeight = function (height) {
        _super.prototype.setFrameHeight.call(this, height);
    };
    ;
    GraphCanvas.prototype.getFrameHeight = function () {
        return _super.prototype.getFrameHeight.call(this);
    };
    ;
    /**
   *if parms = -1 => keep the value that constructor create.
   *default = 20px
   */
    GraphCanvas.prototype.setFrameMargin = function (top, right, bottom, left) {
        _super.prototype.setFrameMargin.call(this, top, right, bottom, left);
    };
    ;
    GraphCanvas.prototype.getFrameMargin = function () {
        return _super.prototype.getFrameMargin.call(this);
    };
    return GraphCanvas;
}(__WEBPACK_IMPORTED_MODULE_1_app_shared_graph_frame__["a" /* GraphFrame */])); // END OF GraphCanvas
//# sourceMappingURL=/home/stoneman/projects/mgs/src/graph-canvas.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LMapSetting; });

//
var LMapSetting = (function () {
    function LMapSetting() {
    }
    /**
     * map from mapboxUrl
     */
    LMapSetting.prototype.basedMap = function () {
        this.mapboxUrl = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlsZXN3YW5nIiwiYSI6ImNpeGl2NDF1ejAwMTAycWw4cDhoanViaGMifQ.nwPu50GsqxfjSc1t7EsVZA';
        this.mapboxAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
        //setting scale bar, compass and other base components 
        this.mapboxTileLayer = __WEBPACK_IMPORTED_MODULE_0_leaflet__["tileLayer"](this.mapboxUrl, {
            attribution: this.mapboxAttribution,
        });
        return this.mapboxTileLayer;
    };
    return LMapSetting;
}());
//# sourceMappingURL=/home/stoneman/projects/mgs/src/lmap-setting.js.map

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 599;


/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(722);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/stoneman/projects/mgs/src/main.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_extensions__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_select__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_map_graph_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_lmap_setting__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__post_receipt_post_receipt_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__post_receipt_dropdown_list_dropdown_list_component__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__post_receipt_map_receipt_map_component__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__post_receipt_bar_graph_bar_graph_directive__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__post_receipt_line_graph_line_graph_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routes__ = __webpack_require__(721);
/* unused harmony export singleComponents */
/* unused harmony export PostReceiptComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var singleComponents = [
    __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */]
];





var PostReceiptComponents = [
    __WEBPACK_IMPORTED_MODULE_13__post_receipt_post_receipt_component__["a" /* PostReceiptComponent */],
    __WEBPACK_IMPORTED_MODULE_14__post_receipt_dropdown_list_dropdown_list_component__["a" /* DropdownListComponent */],
    __WEBPACK_IMPORTED_MODULE_15__post_receipt_map_receipt_map_component__["a" /* ReceiptMapComponent */],
    __WEBPACK_IMPORTED_MODULE_16__post_receipt_bar_graph_bar_graph_directive__["a" /* BarGraph */],
    __WEBPACK_IMPORTED_MODULE_17__post_receipt_line_graph_line_graph_component__["a" /* LineGraphComponent */],
];

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["a" /* DropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__["NouisliderModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                singleComponents,
                PostReceiptComponents,
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_map_graph_service__["a" /* MapGraphService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_lmap_setting__["a" /* LMapSetting */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/stoneman/projects/mgs/src/app.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_receipt_post_receipt_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(369);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    {
        path: 'post', component: null,
        children: [
            { path: 'receipt', component: __WEBPACK_IMPORTED_MODULE_2__post_receipt_post_receipt_component__["a" /* PostReceiptComponent */] }
        ],
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=/home/stoneman/projects/mgs/src/app.routes.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(370);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(720);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/stoneman/projects/mgs/src/index.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_graph_canvas__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarGraph; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var gc = new __WEBPACK_IMPORTED_MODULE_2_app_shared_graph_canvas__["a" /* GraphCanvas */]();
// let subscription: Subscription;
//decare outside of class =>dont use this. to appoint variable
var canvas;
var BarGraph = (function () {
    function BarGraph(mgs) {
        this.mgs = mgs;
        this.graphTitle = "2013年1月-各縣市平均消費金額(便利商店)：";
    } //END OF constructor
    BarGraph.prototype.ngOnInit = function () {
        var _this = this;
        this.mgs.refTime.subscribe(function (time) {
            // this.graphTitle = `各縣市平均消費金額(${time[0]}/${time[1]}):`;
            _this.graphTitle = time[0] + "\u5E74" + time[1] + "\u6708-\u5404\u7E23\u5E02\u5E73\u5747\u6D88\u8CBB\u91D1\u984D(\u4FBF\u5229\u5546\u5E97)\uFF1A";
        });
        this.mgs.refData.subscribe(function (data) {
            // remove line-canvas when user select new time record
            if (!__WEBPACK_IMPORTED_MODULE_3_d3__["select"]('#line-canvas').empty()) {
                __WEBPACK_IMPORTED_MODULE_3_d3__["select"]('#line-canvas').remove();
            }
            canvas = gc.createCanvas('bar-canvas', '#bar-graph');
            _this.drawColumnGraph(data);
        } //end of data=>
        ); //end of Subscription
        // the previous clicked id on map from user
        var preUserClicked;
        //color the bar which user clicked on map
        this.mgs.refId.subscribe(function (userClicked) {
            //reset the color
            __WEBPACK_IMPORTED_MODULE_3_d3__["select"]("." + preUserClicked).style('fill', 'skyblue');
            //save the info of user clicked
            preUserClicked = userClicked;
            //set new color
            __WEBPACK_IMPORTED_MODULE_3_d3__["select"]("." + userClicked).style('fill', 'blue');
        });
    }; //END OF ngOnInit
    // ngOnDestroy() {
    //     // prevent memory leak when component destroyed
    //     subscription.unsubscribe();
    // }//END OF ngOnDestroy
    /**
    * draw column graph by data passed from dropdown list
    */
    BarGraph.prototype.drawColumnGraph = function (data) {
        // maxOfData is used to Scale graph
        var maxOfData = __WEBPACK_IMPORTED_MODULE_3_d3__["max"](data, function (d) {
            return d['平均客單價'];
        });
        //data reduction
        var dataForDraw = data.map(function (d) {
            return {
                name: d['縣市名稱'],
                value: d['平均客單價']
            };
        });
        //sort data by '平均客單價'
        dataForDraw.sort(function (x, y) {
            return __WEBPACK_IMPORTED_MODULE_3_d3__["descending"](x.value, y.value);
        });
        //set the name of band
        var names = [];
        for (var _i = 0, dataForDraw_1 = dataForDraw; _i < dataForDraw_1.length; _i++) {
            var i = dataForDraw_1[_i];
            names.push(i['name']);
        }
        ;
        //set the value of xAxis
        gc.xScaleBand.domain(names);
        gc.yScaleLinear.domain([0, maxOfData]);
        //append bar chart
        canvas.selectAll('rect').data(dataForDraw).enter().append('rect')
            .attr('x', function (d) { return gc.xScaleBand(d['name']); })
            .attr('y', function (d) { return gc.yScaleLinear(d['value']); })
            .attr('class', function (d) { return (d['name']); })
            .attr('width', gc.xScaleBand.bandwidth())
            .attr('height', function (d) { return gc.getFrameHeight() - gc.yScaleLinear(d['value']); })
            .attr('fill', 'skyblue');
        //append values of bar
        canvas.selectAll('text').data(dataForDraw).enter().append('text')
            .attr('class', 'bar-value')
            .attr('x', function (d) { return gc.xScaleBand(d['name']) + gc.xScaleBand.bandwidth() / 2; })
            .attr('y', function (d) { return gc.yScaleLinear(d['value']) - 5; })
            .attr('text-anchor', 'middle')
            .text(function (d) { return d['value']; })
            .style('font-size', '1rem')
            .style('fill', function (d, i) {
            if (i % 2 == 0) {
                return 'black';
            }
            else {
                return 'DimGrey';
            }
        });
        // console.log('end of drawBarGraph');
        //the text of domain name from gc.scaleBand.domain()
        var textOfAaxis = canvas.append('g')
            .attr('class', 'xAxis')
            .attr('transform', "translate(0," + gc.getFrameHeight() + ")")
            .call(gc.xAxisOfBand())
            .selectAll('text')
            .style('fill', function (d, i) {
            if (i % 2 == 0) {
                return 'black';
            }
            else {
                return 'DimGrey';
            }
        });
        this.drawAvgLine(dataForDraw);
        //make text more reabable
        textOfAaxis.attr('transform', 'rotate(45)')
            .attr('x', 20)
            .style('font-size', '1rem');
    }; // end of drawBarGraph
    /*
    * drwa average line and the info text
    */
    BarGraph.prototype.drawAvgLine = function (dataForDraw) {
        console.log(dataForDraw);
        // let sum: number = 0;
        // let avg: number = 0;
        // dataForDraw.forEach((d) => {
        //     sum += d['value'];
        // });
        // avg = Math.round(sum / dataForDraw.length);
        var avg = this.getAvgValues(dataForDraw, 'value');
        //avg line
        canvas.append('line')
            .style('stroke', 'red')
            .style('stroke-dasharray', ('3,3'))
            .attr('x1', 0)
            .attr('y1', gc.yScaleLinear(avg))
            .attr('x2', gc.getFrameWidth())
            .attr('y2', gc.yScaleLinear(avg));
        //info of avg line
        canvas.append('text')
            .attr('x', gc.getFrameWidth())
            .attr('y', gc.yScaleLinear(avg) - 3)
            .attr('text-anchor', 'end')
            .style('fill', 'red')
            .text("\u5E73\u5747\u503C:" + avg + "\u5143");
    }; //* drawAvgLine
    /**
     * get average valuse from object array
     */
    BarGraph.prototype.getAvgValues = function (objs, key) {
        var sum = 0;
        var avg = 0;
        objs.forEach(function (d) {
            sum += d[("" + key)];
        });
        avg = Math.round(sum / objs.length);
        return avg;
    };
    BarGraph = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-receipt-bar-graph',
            template: __webpack_require__(921),
            styles: [__webpack_require__(886)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__["a" /* MapGraphService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__["a" /* MapGraphService */]) === 'function' && _a) || Object])
    ], BarGraph);
    return BarGraph;
    var _a;
}()); // END OF class
//# sourceMappingURL=/home/stoneman/projects/mgs/src/bar-graph.directive.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_map_graph_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__(545);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var thisComponent;
var dataFormatted;
var DropdownListComponent = (function () {
    function DropdownListComponent(mgs) {
        this.mgs = mgs;
        this.yearValue = '2013';
        this.monthValue = '1';
        this.minYear = 2013;
        this.maxYear = 2016;
        this.RECIPT_DATA = 'src/app/data/rawdata/receipt_article_1.csv';
        this.yearConfig = {
            behaviour: 'tap',
            start: [this.minYear, this.maxYear],
            step: 1,
            pageSteps: this.maxYear - this.minYear,
            range: {
                min: this.minYear,
                max: this.maxYear
            },
            pips: {
                mode: 'count',
                //small xias
                density: 100,
                //number of values
                values: this.maxYear - this.minYear + 1,
                stepped: true
            }
        };
        this.monthConfig = {
            behaviour: 'tap',
            start: [1, 12],
            step: 1,
            pageSteps: 1,
            range: {
                min: 1,
                max: 12
            },
            pips: {
                mode: 'count',
                //small xias
                density: 100,
                //number of values
                values: 13,
                stepped: true
            }
        };
    }
    DropdownListComponent.prototype.ngOnInit = function () {
        thisComponent = this;
        this.setDropData();
        //scroll to top whn user entire page
        window.scroll(0, 0);
    }; // END OF ngOnInit
    DropdownListComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    DropdownListComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    /**
     * get the user select
     * @param e
     */
    DropdownListComponent.prototype.onChangeYear = function (userSelected) {
        this.selectedYear = userSelected;
        this.getSelectedCondition();
    };
    /**
     * get the user select
     * @param e
     */
    DropdownListComponent.prototype.onChangeMonth = function (userSelected) {
        this.selectedMonth = userSelected;
        this.getSelectedCondition();
    };
    /**
     * deal the condition about user's select
     */
    DropdownListComponent.prototype.getSelectedCondition = function () {
        var year = "";
        var month = "";
        year = this.yearValue;
        month = this.monthValue;
        // console.log(year + "," + month);
        var refTime = [];
        refTime.push(year);
        refTime.push(month);
        console.log(refTime);
        //announceRefTime to title of bar-graph
        this.mgs.announceRefTime(refTime);
        thisComponent.filterData(year, month, dataFormatted);
    };
    /**
     * deal data for dropdwon list and Map/Graph
     */
    DropdownListComponent.prototype.setDropData = function () {
        // resolve(sth) is needed, and .then() would work
        return new Promise(function (resolve, reject) {
            // data manipulation: http://learnjsdata.com/group_data.html
            __WEBPACK_IMPORTED_MODULE_1_d3__["csv"](thisComponent.RECIPT_DATA, function (data) {
                data.forEach(function (d) {
                    //deal time and numbers format
                    // d['發票年月'] = parseTime(d['發票年月']);
                    d['平均客單價'] = +d['平均客單價'];
                    d['平均開立張數'] = +d['平均開立張數'];
                    d['平均開立金額'] = +d['平均開立金額'];
                });
                dataFormatted = data;
                thisComponent.filterData(thisComponent.yearValue, thisComponent.monthValue, dataFormatted);
                resolve(data);
            }); //END of d3.csv
        }); //END of return
    }; // END OF dropOfData
    /**
     * filter array values and annnoumceRefData
     */
    DropdownListComponent.prototype.filterData = function (timeSelected, typeSelected, data) {
        // console.log('filterData');
        var dataFiltered = data.filter(function (column) {
            if (column['發票年'] == timeSelected && column['發票月'] == typeSelected) {
                return column;
            }
        });
        if (dataFiltered.length == 0) {
            console.log("no data");
            //show the modal
            this.showChildModal();
            dataFiltered = data.filter(function (column) {
                if (column['發票年'] == '2016' && column['發票月'] == '8') {
                    return column;
                }
            });
            thisComponent.mgs.announceRefData(dataFiltered);
            //set the value to the latest data
            this.yearValue = '2016';
            this.monthValue = '8';
        }
        else {
            thisComponent.mgs.announceRefData(dataFiltered);
        }
    }; //END of filteredData
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["b" /* ModalDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["b" /* ModalDirective */]) === 'function' && _a) || Object)
    ], DropdownListComponent.prototype, "childModal", void 0);
    DropdownListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-receipt-dropdown-list',
            template: __webpack_require__(922),
            styles: [__webpack_require__(887)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_map_graph_service__["a" /* MapGraphService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_shared_map_graph_service__["a" /* MapGraphService */]) === 'function' && _b) || Object])
    ], DropdownListComponent);
    return DropdownListComponent;
    var _a, _b;
}());
; // END of Class
//# sourceMappingURL=/home/stoneman/projects/mgs/src/dropdown-list.component.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_graph_canvas__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var gc = new __WEBPACK_IMPORTED_MODULE_2_app_shared_graph_canvas__["a" /* GraphCanvas */]();
var subscription;
var canvas;
var LineGraphComponent = (function () {
    function LineGraphComponent(mgs) {
        this.mgs = mgs;
        this.RECIPT_DATA = 'src/app/data/rawdata/receipt_article_1.csv';
        this.lineGraphTitle = "";
        this.lineGraphInfo = "";
        // canvas = gc.createCanvas(null);
    }
    LineGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mgs.refId.subscribe(function (id) {
            //more right margin for yAxis
            gc.setFrameMargin(-1, -1, -1, 50);
            canvas = gc.createCanvas('line-canvas', '#line-graph');
            _this.drawLineGraph(id);
            _this.lineGraphTitle = id + "\u9010\u6708\u5E73\u5747\u6D88\u8CBB\u91D1\u984D\uFF08\u4FBF\u5229\u5546\u5E97\uFF09:";
            //scoll to line-graph
            // const element = document.querySelector('#test');
            // if (element) { element.scrollIntoView(element); }
            // let offsetTop = d3.select('#line-graph')['_groups'][0][0].offsetTop;
            // window.scrollTo(0, offsetTop - gc.getFrameHeight() / 3);
        });
    };
    LineGraphComponent.prototype.drawLineGraph = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_d3__["csv"](this.RECIPT_DATA, function (data) {
            // console.log(data);
            //filter data
            var dataFiltered = data.filter(function (column) {
                if (column['縣市名稱'] == id) {
                    return column;
                }
            });
            // console.log(dataFiltered);
            //parse year and month to Date format 
            var timeParse = __WEBPACK_IMPORTED_MODULE_3_d3__["timeParse"]("%Y/%m");
            //nesting data 
            var dataForDraw = dataFiltered.map(function (d) {
                var p = timeParse(d['發票年'] + "/" + d['發票月']);
                return {
                    name: d['縣市名稱'],
                    year: d['發票年'],
                    month: d['發票月'],
                    date: p,
                    value: +d['平均客單價']
                };
            });
            console.log(dataForDraw);
            gc.xScaleTime.domain(__WEBPACK_IMPORTED_MODULE_3_d3__["extent"](dataForDraw, function (d) {
                return d.date;
            }));
            gc.yScaleLinear.domain(__WEBPACK_IMPORTED_MODULE_3_d3__["extent"](dataForDraw, function (d) {
                return d.value;
            }));
            //draw x GridLine ,remove outer tick, remove text,remove top path, and change color of line
            var xGridLine = canvas.append('g')
                .attr('class', 'line-xGridLine')
                .call(gc.xAixsOfTimeOfGridLine().ticks(10).tickFormat(__WEBPACK_IMPORTED_MODULE_3_d3__["timeFormat"]('%y/%d')));
            xGridLine.selectAll('text').remove();
            xGridLine.select('path').remove();
            xGridLine.selectAll('line').attr('stroke', 'grey');
            //draw x axis of line
            canvas.append('g')
                .attr('class', 'line-xAxis')
                .attr('transform', "translate(0," + gc.getFrameHeight() + ")")
                .attr('stroke-width', '2px')
                .call(gc.xAxisOfTime().ticks(10).tickFormat(__WEBPACK_IMPORTED_MODULE_3_d3__["timeFormat"]('%y/%m')));
            _this.drawYAxisOfLinear(6);
            _this.drawyGridLinear(6);
            //draw paths of line
            // console.log(gc.line(dataForDraw));
            _this.drawPathOfLine(dataForDraw);
            //about lineGraphInfo
            var avg = _this.getAvgValues(dataForDraw, 'value');
            var extent = __WEBPACK_IMPORTED_MODULE_3_d3__["extent"](dataForDraw, function (d) {
                return d.value;
            });
            var maxTime;
            var minTime;
            dataForDraw.forEach(function (d) {
                if (d.value == extent[1]) {
                    maxTime = d.date;
                }
                else if (d.value == extent[0]) {
                    minTime = d.date;
                }
            });
            var tf = __WEBPACK_IMPORTED_MODULE_3_d3__["timeFormat"]('%Y/%m');
            maxTime = tf(maxTime);
            minTime = tf(minTime);
            _this.lineGraphInfo = "\u6700\u5927\u503C\uFF1A" + extent[1] + " (" + maxTime + ") \uFF5C\u6700\u5C0F\u503C\uFF1A" + extent[0] + " (" + minTime + ") \uFF5C\u5E73\u5747\u503C\uFF1A" + avg + " ";
        });
    }; //* drawLineGraph
    /**draw y axis of line
     *
     */
    LineGraphComponent.prototype.drawYAxisOfLinear = function (ticks) {
        canvas.append('g')
            .attr('class', 'line-yAxis')
            .attr('stroke-width', '2px')
            .call(gc.yAxisOfLinear().ticks(6));
    };
    /*
    *draw y GridLine ,remove outer tick, remove text, and change color of line
    */
    LineGraphComponent.prototype.drawyGridLinear = function (ticks) {
        var yGridLine = canvas.append('g')
            .attr('class', 'line-yGridLine')
            .call(gc.yAixsOfLinearOfGridLine().ticks(6));
        yGridLine.selectAll('text').remove();
        yGridLine.selectAll('line').attr('stroke', 'grey');
    };
    /**
     * draw paths of line (using gc.line)
     */
    LineGraphComponent.prototype.drawPathOfLine = function (data) {
        canvas.append("path")
            .attr("class", "line-path")
            .attr("d", gc.line(data))
            .attr('fill', 'none')
            .attr('stroke', 'blue')
            .attr('stroke-width', '2px');
    };
    /**
    * get average valuse from object array
    */
    LineGraphComponent.prototype.getAvgValues = function (objs, key) {
        var sum = 0;
        var avg = 0;
        objs.forEach(function (d) {
            sum += d[("" + key)];
        });
        avg = Math.round(sum / objs.length);
        return avg;
    }; //* getAvgValues
    LineGraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-receipt-line-graph',
            styles: [__webpack_require__(888)],
            template: __webpack_require__(923),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__["a" /* MapGraphService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__["a" /* MapGraphService */]) === 'function' && _a) || Object])
    ], LineGraphComponent);
    return LineGraphComponent;
    var _a;
}()); //* LineGraphComponent
//# sourceMappingURL=/home/stoneman/projects/mgs/src/line-graph.component.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_lmap_setting__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var thisComponent;
var title;
var map;
//about laafmap
var layerOfGeoJSON;
var featuresClicked;
var divOfInfoControl;
//about data
var valueOfFeatures;
//function for color feature by values
var colorFeature;
var ReceiptMapComponent = (function () {
    function ReceiptMapComponent(mgs, lms) {
        this.mgs = mgs;
        this.lms = lms;
        this.GEOJSON_DATA = 'src/app/data/geojson/country_tw-ms.json';
    }
    ReceiptMapComponent.prototype.ngOnInit = function () {
        thisComponent = this;
        this.initialMap();
        thisComponent.mgs.refData.subscribe(function (data) {
            thisComponent.updateInfoControl(null);
            thisComponent.getFeatureInfo(data);
            thisComponent.mappingMap();
        });
    }; //END OF ngOnInit
    /**
     * establish a base leaf-map in website
    */
    ReceiptMapComponent.prototype.initialMap = function () {
        //create mapbox and tileLayer
        __WEBPACK_IMPORTED_MODULE_4_d3__["select"]('#leaf-map').attr('id', 'lmap');
        map = __WEBPACK_IMPORTED_MODULE_3_leaflet__["map"]('lmap').setView([23.5, 121], 6);
        map.addLayer(thisComponent.lms.basedMap());
        map.addControl(this.createInfoControl());
    }; // END OF initialMap
    /**
     * crate control(window) on map
     */
    ReceiptMapComponent.prototype.createInfoControl = function () {
        //control will upon leaflet map
        var infoControl = __WEBPACK_IMPORTED_MODULE_3_leaflet__["control"].attribution({ position: 'topright' });
        //add HTMLElement
        infoControl.onAdd = function () {
            divOfInfoControl = __WEBPACK_IMPORTED_MODULE_3_leaflet__["DomUtil"].create('div');
            divOfInfoControl.className = 'infoControl';
            thisComponent.updateInfoControl(null);
            return divOfInfoControl;
        };
        return infoControl;
    }; //.createInfoControl
    /**
     * deal the control of infomation about user click
     */
    ReceiptMapComponent.prototype.updateInfoControl = function (props) {
        //the props are the feature
        if (props != null) {
            var countryName = props['COUNTYNAME'];
            //get feature value from data that pass by dropdwon list
            if (valueOfFeatures.get(props['COUNTYID']) != null) {
                var valueOfCountry = valueOfFeatures.get(props['COUNTYID'])['value'];
                divOfInfoControl.innerHTML = "<h5>" + countryName + "</h5><b>\u6D88\u8CBB\u91D1\u984D\uFF1A" + valueOfCountry + "\u5143</b>";
            }
            else {
                divOfInfoControl.innerHTML = "<h5>" + countryName + "</h5><b>\u6D88\u8CBB\u91D1\u984D\uFF1A\u7121\u8CC7\u6599</b>";
            }
        }
        else {
            divOfInfoControl.innerHTML = '<h5>可點選縣市</h5>';
        }
    }; //.updateInfoCOntrol
    /**
     * get values from data, pass data to leafMap and draw layers
     */
    ReceiptMapComponent.prototype.getFeatureInfo = function (data) {
        //extent would read all data[set] and return values
        var extentOfData = __WEBPACK_IMPORTED_MODULE_4_d3__["extent"](data, function (d) {
            return d['平均客單價'];
        });
        // console.log(extentOfData);
        //why <string>? https://github.com/DefinitelyTyped/DefinitelyTyped/issues/8941
        colorFeature = __WEBPACK_IMPORTED_MODULE_4_d3__["scaleLinear"]()
            .domain(extentOfData)
            .range(["#FFEDA0", "#800026"]);
        //d3.map would create a map<key:object>; the key and object are from data.map
        valueOfFeatures = __WEBPACK_IMPORTED_MODULE_4_d3__["map"](
        //data.map would create a array<objecct>
        data.map(function (d) {
            return {
                id: d['縣市代碼'],
                value: d['平均客單價']
            };
        }), function (d) {
            return d['id'];
        }); //end of valueOfFeatures
    }; // end of getFeatureInfo
    /**
     * use d3.json read .json file and pass to L.genoJSON to layout.
     */
    ReceiptMapComponent.prototype.mappingMap = function () {
        //using d3.json to read file and addTo leaflet map
        __WEBPACK_IMPORTED_MODULE_4_d3__["json"](this.GEOJSON_DATA, function (data) {
            //remove the existed layer.
            if (map.hasLayer(layerOfGeoJSON)) {
                map.removeLayer(layerOfGeoJSON);
            }
            // console.log(JSON.stringify(data));
            // let countryID = data['features'][0]['properties']['COUNTYID'];
            layerOfGeoJSON = __WEBPACK_IMPORTED_MODULE_3_leaflet__["geoJSON"](data, {
                style: thisComponent.styleFeature,
                //listener event
                onEachFeature: function (feature, layer) {
                    layer.on({
                        click: function (e) {
                            var countyName = feature.properties['COUNTYNAME'];
                            thisComponent.mgs.announceRefId(countyName);
                            thisComponent.resetHighlightedFeature();
                            thisComponent.highlightFeature(e);
                            thisComponent.updateInfoControl(feature.properties);
                        }
                    }); //.layer.on
                } //.onEachFeature
            });
            //add geoJson and zoom to geoJSON
            layerOfGeoJSON.addTo(map);
            //if zoom at tiawan => set common view is better.
            map.fitBounds(layerOfGeoJSON.getBounds());
        });
    }; // END OF mappingMap
    /**
     * rest the highlight feature
     */
    ReceiptMapComponent.prototype.resetHighlightedFeature = function () {
        if (layerOfGeoJSON.hasLayer(featuresClicked)) {
            layerOfGeoJSON.resetStyle(featuresClicked);
        }
    };
    /**
     * highlight the feature that user clicked
     */
    ReceiptMapComponent.prototype.highlightFeature = function (e) {
        // console.log(e.target);
        featuresClicked = e.target;
        featuresClicked.setStyle({
            weight: 4,
            color: '#666',
            dashArray: '',
            fillOpacity: 1
        });
        if (!__WEBPACK_IMPORTED_MODULE_3_leaflet__["Browser"].ie && !__WEBPACK_IMPORTED_MODULE_3_leaflet__["Browser"].edge) {
            featuresClicked.bringToFront();
        }
    };
    /**
     * set the style of features
     */
    ReceiptMapComponent.prototype.styleFeature = function (feature) {
        // console.log(dataDealed);
        var countryId = feature['properties']['COUNTYID'];
        return {
            fillColor: thisComponent.getFillColor(countryId),
            fillOpacity: 0.9,
            color: 'gray',
            dashArray: '3',
            weight: 1.5
        };
    }; //END of styleMap
    /**
     * get fill color of features by countryID.
     * if value=0 , the fill color is gray.
     */
    ReceiptMapComponent.prototype.getFillColor = function (countryId) {
        //26 countries in Taiwan will show in map, but the data would be lack
        var valueOfCountry;
        if (valueOfFeatures.get(countryId) != null) {
            valueOfCountry = valueOfFeatures.get(countryId)['value'];
            // console.log(valueOfCountry);
            // return rgbHex('#'+colorFeature(valueOfCountry));
            // console.log('#' + rgbHex(colorFeature(valueOfCountry)));
            // console.log(colorFeature(valueOfCountry));
            return colorFeature(valueOfCountry);
        }
        else {
            valueOfCountry = 0;
            return ('LightGrey');
        }
    }; //END OF getFillColor
    ReceiptMapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-receipt-map',
            styles: [__webpack_require__(889)],
            template: __webpack_require__(924),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None //no shoadow DOM.
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__["a" /* MapGraphService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_shared_map_graph_service__["a" /* MapGraphService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_lmap_setting__["a" /* LMapSetting */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_shared_lmap_setting__["a" /* LMapSetting */]) === 'function' && _b) || Object])
    ], ReceiptMapComponent);
    return ReceiptMapComponent;
    var _a, _b;
}()); //END OF class
//# sourceMappingURL=/home/stoneman/projects/mgs/src/receipt-map.component.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);









//# sourceMappingURL=/home/stoneman/projects/mgs/src/rxjs-extensions.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphFrame; });

//this class is the frame of graph
var GraphFrame = (function () {
    function GraphFrame() {
        //phone6s size: 414x736
        this.width = 414;
        this.height = 200;
        //nargin.top and margin.left are used in Frame and Canvas.
        this.margin = {
            top: 20,
            right: 15,
            bottom: 40,
            left: 10
        };
    }
    GraphFrame.prototype.setFrameWidth = function (width) {
        this.width = width;
    };
    ;
    GraphFrame.prototype.getFrameWidth = function () {
        return this.width;
    };
    GraphFrame.prototype.setFrameHeight = function (height) {
        this.height = height;
    };
    ;
    GraphFrame.prototype.getFrameHeight = function () {
        return this.height;
    };
    ;
    /**
    *if parms= -1 => keep the value that constructor create.
    */
    GraphFrame.prototype.setFrameMargin = function (top, right, bottom, left) {
        if (top != -1) {
            this.margin.top = top;
        }
        ;
        if (right != -1) {
            this.margin.right = right;
        }
        ;
        if (bottom != -1) {
            this.margin.bottom = bottom;
        }
        ;
        if (left != -1) {
            this.margin.left = left;
        }
        ;
    };
    ;
    GraphFrame.prototype.getFrameMargin = function () {
        return this.margin;
    };
    /**
     * create a responsive embedded D3 SVG (graph frame)
     * id =>#gFrame
     */
    GraphFrame.prototype.createFrame = function (id, htmlElement) {
        //append svg是為 了透過attr改變view(CSS可連動),if style則無法透過css覆寫
        //frame留白
        //http://www.oxxostudio.tw/articles/201409/svg-23-viewpoint-viewBox.html
        var width = this.width + this.margin.left + this.margin.right;
        var height = this.height + this.margin.top + this.margin.bottom;
        return this.frame = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](htmlElement).append('svg')
            .attr('id', id)
            .attr('width', '100%')
            .attr('height', '30%')
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("viewBox", "0 0 " + width + " " + height);
        // return this.frame = d3.select(htmlElement).append('svg')
        //     .attr('width', this.width + this.margin.left + this.margin.right)
        //     .attr('height', this.height + this.margin.top + this.margin.bottom);
    };
    ;
    return GraphFrame;
}());
//# sourceMappingURL=/home/stoneman/projects/mgs/src/graph-frame.js.map

/***/ }),

/***/ 729:
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
//# sourceMappingURL=/home/stoneman/projects/mgs/src/environment.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/stoneman/projects/mgs/src/polyfills.js.map

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".navbar{\n    min-height: 50px;\n    background-color:#4C92FF; /*main color*/\n}\n\n.navbar-brand{\n    color:white;\n}\n\n.navbar-right>li>a{\n    color:white;\n}\n\n.navbar-default .navbar-toggle .icon-bar{\n    background-color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "/* 超小螢幕設備（手機，小於 768px） */\n/* 沒有媒體查詢，因為這在 Bootstrap 3 是預設的。 */\n/* 小螢幕設備（平板，768px（含）以上） */\n@media (min-width: 768px) { \n    .graphTitle{\n        padding-top:20px;\n        font-size:1.8rem;\n    }   \n}\n\n/* 中螢幕設備（一般桌面，992px（含）以上） */\n@media (min-width: 992px) {\n    .graphTitle{\n        padding-top:20px;\n        font-size:2rem;\n    }   \n}\n\n/* 大螢幕設備（大型桌面，1200px（含）以上） */\n@media (min-width: 1200px) {\n    .graphTitle{\n        padding-top:20px;\n        font-size:2.5rem;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "#top {\n    padding-top: 50px;\n}\n\n.line1 {\n    text-indent: 2em;\n    font-size: 1.8rem;\n}\n\n.li{\n    font-size:1.8rem;\n}\n\n/*create a table to put modal*/\n.vertical-alignment-helper {\n    display:table;\n    height: 100%;\n    width: 100%;\n}\n\n/*create a table cell*/\n.vertical-align-center {\n    /* To center vertically */\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.modal-content {\n    /* Bootstrap sets the size of the modal in the modal-dialog class, we need to inherit it */\n    width:inherit;\n    height:inherit;\n    /* To center horizontally */\n    margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".line-path{\n    /*stroke: red;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "/*http://leafletjs.com/examples/mobile*/\n#lmap { \n    height: 40vh;\n    width: auto; \n    /*margin-right: 12vh;*/\n}\n\n@media (min-width: 1200px) {\n    #lmap { \n        width: auto;\n        height:40vh;\n        margin: 0px auto;\n    }\n}\n\n\n.infoControl{\n    padding: 3px 4px;\n    font: 1rem Arial, Helvetica, sans-serif;\n    background: white;\n    background: rgba(255,255,255,0.8);\n    box-shadow: 0 0 8px rgba(0,0,0,0.2);\n    border-radius: 5px;\n}\n\n.infoControl h5 {\n    margin: 0 0 2px;\n    color: #777;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".line1 {\n    text-indent: 2em;\n    font-size: 1.8rem;\n}\n\n.listPoints > li {\n    font-size:1.8rem;\n    margin: 1rem 0;\n}\n\nblockquote{\n    color:#26497F;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 414,
	"./af.js": 414,
	"./ar": 420,
	"./ar-dz": 415,
	"./ar-dz.js": 415,
	"./ar-ly": 416,
	"./ar-ly.js": 416,
	"./ar-ma": 417,
	"./ar-ma.js": 417,
	"./ar-sa": 418,
	"./ar-sa.js": 418,
	"./ar-tn": 419,
	"./ar-tn.js": 419,
	"./ar.js": 420,
	"./az": 421,
	"./az.js": 421,
	"./be": 422,
	"./be.js": 422,
	"./bg": 423,
	"./bg.js": 423,
	"./bn": 424,
	"./bn.js": 424,
	"./bo": 425,
	"./bo.js": 425,
	"./br": 426,
	"./br.js": 426,
	"./bs": 427,
	"./bs.js": 427,
	"./ca": 428,
	"./ca.js": 428,
	"./cs": 429,
	"./cs.js": 429,
	"./cv": 430,
	"./cv.js": 430,
	"./cy": 431,
	"./cy.js": 431,
	"./da": 432,
	"./da.js": 432,
	"./de": 434,
	"./de-at": 433,
	"./de-at.js": 433,
	"./de.js": 434,
	"./dv": 435,
	"./dv.js": 435,
	"./el": 436,
	"./el.js": 436,
	"./en-au": 437,
	"./en-au.js": 437,
	"./en-ca": 438,
	"./en-ca.js": 438,
	"./en-gb": 439,
	"./en-gb.js": 439,
	"./en-ie": 440,
	"./en-ie.js": 440,
	"./en-nz": 441,
	"./en-nz.js": 441,
	"./eo": 442,
	"./eo.js": 442,
	"./es": 444,
	"./es-do": 443,
	"./es-do.js": 443,
	"./es.js": 444,
	"./et": 445,
	"./et.js": 445,
	"./eu": 446,
	"./eu.js": 446,
	"./fa": 447,
	"./fa.js": 447,
	"./fi": 448,
	"./fi.js": 448,
	"./fo": 449,
	"./fo.js": 449,
	"./fr": 452,
	"./fr-ca": 450,
	"./fr-ca.js": 450,
	"./fr-ch": 451,
	"./fr-ch.js": 451,
	"./fr.js": 452,
	"./fy": 453,
	"./fy.js": 453,
	"./gd": 454,
	"./gd.js": 454,
	"./gl": 455,
	"./gl.js": 455,
	"./he": 456,
	"./he.js": 456,
	"./hi": 457,
	"./hi.js": 457,
	"./hr": 458,
	"./hr.js": 458,
	"./hu": 459,
	"./hu.js": 459,
	"./hy-am": 460,
	"./hy-am.js": 460,
	"./id": 461,
	"./id.js": 461,
	"./is": 462,
	"./is.js": 462,
	"./it": 463,
	"./it.js": 463,
	"./ja": 464,
	"./ja.js": 464,
	"./jv": 465,
	"./jv.js": 465,
	"./ka": 466,
	"./ka.js": 466,
	"./kk": 467,
	"./kk.js": 467,
	"./km": 468,
	"./km.js": 468,
	"./ko": 469,
	"./ko.js": 469,
	"./ky": 470,
	"./ky.js": 470,
	"./lb": 471,
	"./lb.js": 471,
	"./lo": 472,
	"./lo.js": 472,
	"./lt": 473,
	"./lt.js": 473,
	"./lv": 474,
	"./lv.js": 474,
	"./me": 475,
	"./me.js": 475,
	"./mi": 476,
	"./mi.js": 476,
	"./mk": 477,
	"./mk.js": 477,
	"./ml": 478,
	"./ml.js": 478,
	"./mr": 479,
	"./mr.js": 479,
	"./ms": 481,
	"./ms-my": 480,
	"./ms-my.js": 480,
	"./ms.js": 481,
	"./my": 482,
	"./my.js": 482,
	"./nb": 483,
	"./nb.js": 483,
	"./ne": 484,
	"./ne.js": 484,
	"./nl": 486,
	"./nl-be": 485,
	"./nl-be.js": 485,
	"./nl.js": 486,
	"./nn": 487,
	"./nn.js": 487,
	"./pa-in": 488,
	"./pa-in.js": 488,
	"./pl": 489,
	"./pl.js": 489,
	"./pt": 491,
	"./pt-br": 490,
	"./pt-br.js": 490,
	"./pt.js": 491,
	"./ro": 492,
	"./ro.js": 492,
	"./ru": 493,
	"./ru.js": 493,
	"./se": 494,
	"./se.js": 494,
	"./si": 495,
	"./si.js": 495,
	"./sk": 496,
	"./sk.js": 496,
	"./sl": 497,
	"./sl.js": 497,
	"./sq": 498,
	"./sq.js": 498,
	"./sr": 500,
	"./sr-cyrl": 499,
	"./sr-cyrl.js": 499,
	"./sr.js": 500,
	"./ss": 501,
	"./ss.js": 501,
	"./sv": 502,
	"./sv.js": 502,
	"./sw": 503,
	"./sw.js": 503,
	"./ta": 504,
	"./ta.js": 504,
	"./te": 505,
	"./te.js": 505,
	"./tet": 506,
	"./tet.js": 506,
	"./th": 507,
	"./th.js": 507,
	"./tl-ph": 508,
	"./tl-ph.js": 508,
	"./tlh": 509,
	"./tlh.js": 509,
	"./tr": 510,
	"./tr.js": 510,
	"./tzl": 511,
	"./tzl.js": 511,
	"./tzm": 513,
	"./tzm-latn": 512,
	"./tzm-latn.js": 512,
	"./tzm.js": 513,
	"./uk": 514,
	"./uk.js": 514,
	"./uz": 515,
	"./uz.js": 515,
	"./vi": 516,
	"./vi.js": 516,
	"./x-pseudo": 517,
	"./x-pseudo.js": 517,
	"./yo": 518,
	"./yo.js": 518,
	"./zh-cn": 519,
	"./zh-cn.js": 519,
	"./zh-hk": 520,
	"./zh-hk.js": 520,
	"./zh-tw": 521,
	"./zh-tw.js": 521
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 892;


/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<!--<about-page></about-page>-->\n<div>\n<h1>關於本站</h1>\n<blockquote>\n  <p> 運用空間觀點，探索資料的世界。</p>\n</blockquote>\n<h4>\n    我相信每個人的心中都充滿著探險的基因，但往往有時候卻是缺發了引起動機的可能或資訊。\n    因此我想要透過地圖獨特的空間觀點，從不同的角度去觀看這個世界。\n    希望有人能因此而得到啟發，那也就很令人開心了！\n</h4>\n</div>"

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-default navbar-custom navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"page-scroll\">\r\n            <!-- Brand and btn-group get grouped for better mobile display -->\r\n            <a class=\"navbar-brand\" [routerLink]=\"['']\">MoGeoStory</a>\r\n            <div dropdown>\r\n                <button id=\"single-button\" type=\"button\" class=\"navbar-toggle collapsed\" dropdownToggle>\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n\r\n                <ul dropdownMenu role=\"menu\" class=\"nav navbar-nav dropdown-menu-right\">\r\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/about']\">ABOUT</a></li>\r\n                    <!--<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>-->\r\n                    <!--<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>-->\r\n                    <li class=\"divider dropdown-divider\"></li>\r\n                    <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink] = \"['/post/receipt']\">router test</a></li>-->\r\n                </ul>\r\n            </div>\r\n            <!--/.navbar-toggle collapsed-->\r\n        </div>\r\n        <!--/.navbar-header-->\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a [routerLink]=\"['/about']\">ABOUT</a>\r\n                </li>\r\n                <!--<li>\r\n                    <a href=\"about.html\">About</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"post.html\">Sample Post</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink] = \"['/post/receipt']\">router test</a>\r\n                </li>-->\r\n            </ul>\r\n        </div>\r\n        <!--./collapse navbar-collapse-->\r\n    </div>\r\n    <!--/.container-fluid-->\r\n</nav>\r\n\r\n<!-- Page Header -->\r\n<!-- Set your background image for this header on the line below. -->\r\n<header class=\"intro-header\" style=\"background-image: url('src/app/home-bg.jpg')\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\r\n                <div class=\"site-heading\">\r\n                    <h1>Geo Stories</h1>\r\n                    <hr class=\"small\">\r\n                    <span class=\"subheading\">讓資訊流通，進而啟發各種可能</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n\r\n<!-- Page Content -->\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <!-- Blog Entries Column -->\r\n        <div class=\"col-md-8\">\r\n            <div>\r\n                <!--<home-page></home-page>-->\r\n                <router-outlet></router-outlet>\r\n                <!--<post-receipt></post-receipt>-->\r\n            </div>\r\n        </div>\r\n        <!-- /.col-md-8 -->\r\n\r\n        <div class=\"col-md-4\">\r\n            <!-- Blog Search Well -->\r\n            <div class=\"well\">\r\n                <h4>Blog Search</h4>\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                    <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"button\">\r\n                                <span class=\"glyphicon glyphicon-search\"></span>\r\n                    </button>\r\n                    </span>\r\n                </div>\r\n                <!-- /.input-group -->\r\n            </div>\r\n            <!--/.well-->\r\n        </div>\r\n        <!-- /.col-md-4-->\r\n    </div>\r\n    <!-- /.row -->\r\n    <hr>\r\n    <footer>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <p>Copyright &copy; mobile geo story 2017</p>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n        </div>\r\n        <!-- /.row -->\r\n    </footer>\r\n</div>\r\n<!-- /.container -->"

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">\n    台灣電子發票消費地圖\n    <small>縣市消費差異比較</small>\n</h1>\n\n<!-- First Blog Post -->\n<h2>\n    <a href=\"#\"></a>\n</h2>\n<p class=\"lead\">\n    by <a href=\"\">MoGeoStory</a>\n</p>\n<p><span class=\"glyphicon glyphicon-time\"></span> Posted on March 17, 2017 at 08:00 PM</p>\n<hr>\n<img class=\"img-responsive\" src=\"src/app/image/post-receipt.png\" alt=\"\">\n<hr>\n<p>透過觀察不同時間點，各縣市的電子發票消費數據，將會發現一些獨特的現象。</p>\n<a class=\"btn btn-primary\" [routerLink]=\"['/post/receipt']\">Read More <span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n<hr>\n\n<!-- Second Blog Post -->\n<h2>\n    <a href=\"#\">Blog Post Title</a>\n</h2>\n<p class=\"lead\">\n    by <a href=\"index.php\">Start Bootstrap</a>\n</p>\n<p><span class=\"glyphicon glyphicon-time\"></span> Posted on August 28, 2013 at 10:45 PM</p>\n<hr>\n<img class=\"img-responsive\" src=\"http://placehold.it/900x300\" alt=\"\">\n<hr>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quasi, fugiat, asperiores harum voluptatum tenetur a\n    possimus nesciunt quod accusamus saepe tempora ipsam distinctio minima dolorum perferendis labore impedit voluptates!</p>\n<a class=\"btn btn-primary\" href=\"#\">Read More <span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n\n<hr>"

/***/ }),

/***/ 921:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <h4 class=\"graphTitle\"><strong>{{graphTitle}}</strong></h4>\n    </div>\n</div>\n<div id='bar-graph'>\n</div>"

/***/ }),

/***/ 922:
/***/ (function(module, exports) {

module.exports = "\n<!--<div>\n    <button type=\"button\" class=\"btn btn-default col-xs-3\">Year:</button>\n    <select class='selectpicker col-xs-3 col-md-3' id='dropdown_year'></select>\n    <button type=\"button\" class=\"btn btn-default col-xs-3\">Type:</button>\n</div>-->\n<form class=\"form-horizontal\" role=\"form\">\n    <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"form-group\">\n            <div class=\"input-group\">\n                <div class=\"input-group-addon\">年度</div>\n                <!--tooltips is array for two slider control; ture=show value false= don't show-->\n                <!--<nouislider name=\"yearSlider\" [min]=\"minYear\" [max]=\"maxYear\" [step]=\"1\" [(ngModel)]=\"someValue\" [tooltips]=\"[true]\" style=\"margin-top: 4em\" (ngModelChange)=\"onChangeYear($event)\"></nouislider>-->\n                <div class=\"col-xs-11\">\n                    <nouislider name=\"yearSlider\" [config]=\"yearConfig\" [(ngModel)]=\"yearValue\" style=\"margin-left: 2em; margin-bottom:2em\" (ngModelChange)=\"onChangeYear($event)\"></nouislider>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"input-group\">\n                <div class=\"input-group-addon\">月份</div>\n                <div class=\"col-xs-11\">\n                    <nouislider name=\"monthSlider\" [config]=\"monthConfig\" [(ngModel)]=\"monthValue\" style=\"margin-left: 2em; margin-bottom:2em\"\n                        (ngModelChange)=\"onChangeMonth($event)\"></nouislider>\n                </div>\n            </div>\n        </div>\n    </form>\n</form>\n\n<!--copy from ng2-bootstrap-->\n<div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog vertical-align-center\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title pull-left\">查無資料</h4>\n                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        目前最新資料僅統計到2016年8月，後續會持續保持更新。感謝！\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <h4 class=\"graphTitle\"><strong>{{lineGraphTitle}}</strong></h4>\n        <h6 class=\"graphTitle\"><strong>{{lineGraphInfo}}</strong></h6>\n    </div>\n    <div id=\"line-graph\">\n    </div>\n</div>"

/***/ }),

/***/ 924:
/***/ (function(module, exports) {

module.exports = "<div id='leaf-map'></div>\n"

/***/ }),

/***/ 925:
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1 class='h1'>{{title}}</h1>\n    <h4>{{brief}}</h4>\n\n    <div class=\"abstract\">\n        <blockquote>\n            <p>相較台北、新北或新竹市等地方而言，便利商店在離島(澎湖、金門、馬祖)、彰化和屏東等地，可能是重要的購物場所之一，而非僅只是順手買個方便的地方。</p>\n        </blockquote>\n        <p class=\"line1\">檢視地圖中2013年至2016年的便利商店消費平均客單價資料，可以發現幾項有趣的事情：</p>\n        <ul class=\"listPoints\">\n            <li>離島(澎湖、金門、馬祖)、彰化和屏東等地，通常是消費金額最高的前三名；而台北、新北和新竹市等地，則都是消費金額最少的三個地區之一。</li>\n            <li>金門一直到2013年12月才有在便利商店，然後消費金額一直逐年上升。</li>\n            <li>無論南北的便利商店在一月份時，都是平均消費最高的時候，但南部地區也可能在七月達到另一個高峰。</li>\n        </ul>\n        <blockquote>\n            <p>於下方\n                <u>拖動時間軸</u>可以看到不同時間點的消費差異；\n                <u>點選地圖</u>上的各縣市，則可看到各縣市的消費趨勢。</p>\n        </blockquote>\n    </div>\n</div>\n\n<post-receipt-dropdown-list></post-receipt-dropdown-list>  \n<post-receipt-map></post-receipt-map>\n<post-receipt-bar-graph></post-receipt-bar-graph>\n<post-receipt-line-graph></post-receipt-line-graph>"

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(600);


/***/ })

},[965]);
//# sourceMappingURL=main.bundle.js.map