(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common/http'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('@fortawesome/angular-fontawesome')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/viewer', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common/http', '@groupdocs.examples.angular/common-components', 'rxjs', '@fortawesome/angular-fontawesome'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.viewer = {}), global.ng.platformBrowser, global.ng.core, global.ng.common.http, global.commonComponents, global.rxjs, global.angularFontawesome));
}(this, (function (exports, platformBrowser, core, http, commonComponents, rxjs, angularFontawesome) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerService = /** @class */ (function () {
        function ViewerService(_http, _config) {
            this._http = _http;
            this._config = _config;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        ViewerService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        ViewerService.prototype.upload = /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        function (file, url, rewrite) {
            /** @type {?} */
            var formData = new FormData();
            formData.append("file", file);
            formData.append('rewrite', String(rewrite));
            if (url) {
                formData.append("url", url);
            }
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        ViewerService.prototype.loadPage = /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        function (credentials, page) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'page': page
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @param {?} angle
         * @param {?} page
         * @return {?}
         */
        ViewerService.prototype.rotate = /**
         * @param {?} credentials
         * @param {?} angle
         * @param {?} page
         * @return {?}
         */
        function (credentials, angle, page) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.ROTATE_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'pages': [page],
                'angle': angle
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.getDownloadUrl = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._config.getViewerApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadPrint = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_PRINT, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadPrintPdf = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_PRINT_PDF, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJsonResponseTypeBlob);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadThumbnails = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_THUMBNAILS, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJson);
        };
        ViewerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ViewerService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ViewerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ViewerService_Factory() { return new ViewerService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ViewerService, providedIn: "root" });
        return ViewerService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ViewerService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ViewerService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerConfig = /** @class */ (function () {
        function ViewerConfig() {
        }
        return ViewerConfig;
    }());
    if (false) {
        /** @type {?} */
        ViewerConfig.prototype.rewrite;
        /** @type {?} */
        ViewerConfig.prototype.pageSelector;
        /** @type {?} */
        ViewerConfig.prototype.download;
        /** @type {?} */
        ViewerConfig.prototype.upload;
        /** @type {?} */
        ViewerConfig.prototype.print;
        /** @type {?} */
        ViewerConfig.prototype.browse;
        /** @type {?} */
        ViewerConfig.prototype.enableRightClick;
        /** @type {?} */
        ViewerConfig.prototype.filesDirectory;
        /** @type {?} */
        ViewerConfig.prototype.fontsDirectory;
        /** @type {?} */
        ViewerConfig.prototype.defaultDocument;
        /** @type {?} */
        ViewerConfig.prototype.htmlMode;
        /** @type {?} */
        ViewerConfig.prototype.preloadPageCount;
        /** @type {?} */
        ViewerConfig.prototype.zoom;
        /** @type {?} */
        ViewerConfig.prototype.search;
        /** @type {?} */
        ViewerConfig.prototype.thumbnails;
        /** @type {?} */
        ViewerConfig.prototype.rotate;
        /** @type {?} */
        ViewerConfig.prototype.cache;
        /** @type {?} */
        ViewerConfig.prototype.saveRotateState;
        /** @type {?} */
        ViewerConfig.prototype.watermarkText;
        /** @type {?} */
        ViewerConfig.prototype.printAllowed;
        /** @type {?} */
        ViewerConfig.prototype.showGridLines;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerConfigService = /** @class */ (function () {
        function ViewerConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._viewerConfig = new rxjs.BehaviorSubject(new ViewerConfig());
            this._updatedConfig = this._viewerConfig.asObservable();
        }
        Object.defineProperty(ViewerConfigService.prototype, "updatedConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this._updatedConfig;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ViewerConfigService.prototype.load = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.VIEWER_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var viewerConfig = (/** @type {?} */ (response));
                    _this._viewerConfig.next(viewerConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load viewer config: " + JSON.stringify(response));
                }));
            }));
        };
        ViewerConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ViewerConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ViewerConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ViewerConfigService_Factory() { return new ViewerConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ViewerConfigService, providedIn: "root" });
        return ViewerConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ViewerConfigService.prototype._viewerConfig;
        /**
         * @type {?}
         * @private
         */
        ViewerConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        ViewerConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ViewerConfigService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import * as Hammer from 'hammerjs';
    var ViewerAppComponent = /** @class */ (function () {
        function ViewerAppComponent(_viewerService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService) {
            var _this = this;
            this._viewerService = _viewerService;
            this._modalService = _modalService;
            this._navigateService = _navigateService;
            this._zoomService = _zoomService;
            this._renderPrintService = _renderPrintService;
            this._windowService = _windowService;
            this._loadingMaskService = _loadingMaskService;
            this.title = 'viewer';
            this.files = [];
            this.countPages = 0;
            this.formatDisabled = !this.file;
            this.showThumbnails = false;
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.showSearch = false;
            this._zoom = 100;
            //@ViewChildren('docPanel') docPanelComponent: QueryList<ElementRef>;
            this.fileWasDropped = false;
            configService.updatedConfig.subscribe((/**
             * @param {?} viewerConfig
             * @return {?}
             */
            function (viewerConfig) {
                _this.viewerConfig = viewerConfig;
            }));
            uploadFilesService.uploadsChange.subscribe((/**
             * @param {?} uploads
             * @return {?}
             */
            function (uploads) {
                if (uploads) {
                    /** @type {?} */
                    var i = void 0;
                    for (i = 0; i < uploads.length; i++) {
                        _this._viewerService.upload(uploads.item(i), '', _this.viewerConfig.rewrite).subscribe((/**
                         * @param {?} obj
                         * @return {?}
                         */
                        function (obj) {
                            _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                        }));
                    }
                }
            }));
            pagePreloadService.checkPreload.subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (_this.viewerConfig.preloadPageCount !== 0) {
                    for (var i = page; i < page + 2; i++) {
                        if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                            _this.preloadPages(i, i);
                        }
                    }
                }
            }));
            passwordService.passChange.subscribe((/**
             * @param {?} pass
             * @return {?}
             */
            function (pass) {
                _this.selectFile(_this.credentials.guid, pass, commonComponents.CommonModals.PasswordRequired);
            }));
            this.isDesktop = _windowService.isDesktop();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _windowService.isDesktop();
                _this.refreshZoom();
            }));
        }
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.viewerConfig.defaultDocument !== "") {
                this.isLoading = true;
                this.selectFile(this.viewerConfig.defaultDocument, "", "");
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._loadingMaskService
                .onLoadingChanged
                .subscribe((/**
             * @param {?} loading
             * @return {?}
             */
            function (loading) { return _this.isLoading = loading; }));
            this.refreshZoom();
            // this.docPanelComponent.changes.subscribe((comps: QueryList<ElementRef>) =>
            // {
            //   comps.toArray().forEach((item) => {
            //     const hammer = new Hammer(item.nativeElement);
            //     hammer.get('pinch').set({ enable: true });
            //   });
            // });
        };
        Object.defineProperty(ViewerAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "zoomConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.zoom : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "pageSelectorConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.pageSelector : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "searchConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.search : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "thumbnailsConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.thumbnails : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "rotateConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.rotate : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "downloadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.download : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "printConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.print : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "htmlModeConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.htmlMode : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "saveRotateStateConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "enableRightClickConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "currentPage", {
            get: /**
             * @return {?}
             */
            function () {
                return this._navigateService.currentPage;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        ViewerAppComponent.prototype.openModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._modalService.open(id);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        ViewerAppComponent.prototype.closeModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._modalService.close(id);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._viewerService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        ViewerAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        function ($event, password, modalId) {
            var _this = this;
            this.credentials = { guid: $event, password: password };
            this.file = null;
            this._viewerService.loadFile(this.credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.file = file;
                _this.formatDisabled = !_this.file;
                if (file) {
                    if (file.pages && file.pages[0]) {
                        _this._pageHeight = file.pages[0].height;
                        _this._pageWidth = file.pages[0].width;
                        _this.options = _this.zoomOptions();
                        _this.refreshZoom();
                    }
                    /** @type {?} */
                    var preloadPageCount = _this.viewerConfig.preloadPageCount;
                    /** @type {?} */
                    var countPages = file.pages ? file.pages.length : 0;
                    if (preloadPageCount > 0) {
                        _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                        _this._viewerService.loadThumbnails(_this.credentials).subscribe((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) {
                            _this.file.thumbnails = data.pages;
                        }));
                    }
                    _this._navigateService.countPages = countPages;
                    _this._navigateService.currentPage = 1;
                    _this.countPages = countPages;
                }
            }));
            if (modalId) {
                this._modalService.close(modalId);
            }
            this.clearData();
        };
        /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        ViewerAppComponent.prototype.preloadPages = /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (start, end) {
            var _this = this;
            var _loop_1 = function (i) {
                this_1._viewerService.loadPage(this_1.credentials, i).subscribe((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    _this.file.pages[i - 1] = page;
                }));
            };
            var this_1 = this;
            for (var i = start; i <= end; i++) {
                _loop_1(i);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._viewerService.upload(null, $event, this.rewriteConfig).subscribe((/**
             * @return {?}
             */
            function () {
                _this.selectDir('');
            }));
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.nextPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.nextPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.prevPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.prevPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.toLastPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.toLastPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.toFirstPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.toFirstPage();
        };
        /**
         * @param {?} page
         * @return {?}
         */
        ViewerAppComponent.prototype.navigateToPage = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (this.formatDisabled)
                return;
            this._navigateService.navigateTo(page);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomIn = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this._zoom < 490) {
                this.zoom = this._zoom + 10;
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomOut = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this._zoom > 30) {
                this.zoom = this._zoom - 10;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.fileWasDropped = $event;
        };
        /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        ViewerAppComponent.prototype.ptToPx = /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        function (pt) {
            //pt * 96 / 72 = px.
            return pt * 96 / 72;
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.getFitToWidth = /**
         * @private
         * @return {?}
         */
        function () {
            // Images and Excel-related files receiving dimensions in px from server
            /** @type {?} */
            var pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
            /** @type {?} */
            var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
            return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.getFitToHeight = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
            /** @type {?} */
            var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
            /** @type {?} */
            var offsetHeight = pageHeight ? pageHeight : windowHeight;
            return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomOptions = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var width = this.getFitToWidth();
            /** @type {?} */
            var height = this.getFitToHeight();
            return this._zoomService.zoomOptions(width, height);
        };
        Object.defineProperty(ViewerAppComponent.prototype, "zoom", {
            get: /**
             * @return {?}
             */
            function () {
                return this._zoom;
            },
            set: /**
             * @param {?} zoom
             * @return {?}
             */
            function (zoom) {
                this._zoom = zoom;
                this._zoomService.changeZoom(this._zoom);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.selectZoom = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.zoom = $event.value;
        };
        /**
         * @param {?} deg
         * @return {?}
         */
        ViewerAppComponent.prototype.rotate = /**
         * @param {?} deg
         * @return {?}
         */
        function (deg) {
            var _this = this;
            if (this.formatDisabled)
                return;
            /** @type {?} */
            var pageNumber = this._navigateService.currentPage;
            /** @type {?} */
            var pageModel = this.file.pages[pageNumber - 1];
            if (this.saveRotateStateConfig && this.file) {
                this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    _this.file.pages[pageNumber - 1] = page;
                    if (_this.file && _this.file.pages && pageModel) {
                        /** @type {?} */
                        var angle = pageModel.angle + deg;
                        if (angle > 360) {
                            _this.changeAngle(pageModel, 90);
                        }
                        else if (angle < -360) {
                            _this.changeAngle(pageModel, -90);
                        }
                        else {
                            _this.changeAngle(pageModel, angle);
                        }
                    }
                }));
            }
        };
        /**
         * @private
         * @param {?} page
         * @param {?} angle
         * @return {?}
         */
        ViewerAppComponent.prototype.changeAngle = /**
         * @private
         * @param {?} page
         * @param {?} angle
         * @return {?}
         */
        function (page, angle) {
            page.angle = angle;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.downloadFile = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.printFile = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.formatDisabled)
                return;
            if (this.viewerConfig.preloadPageCount !== 0) {
                this._viewerService.loadPrint(this.credentials).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.file.pages = data.pages;
                    _this._renderPrintService.changePages(_this.file.pages);
                }));
            }
            else {
                this._renderPrintService.changePages(this.file.pages);
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.openThumbnails = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.formatDisabled)
                return;
            if (this.showThumbnails) {
                this.showThumbnails = false;
                return;
            }
            if (this.viewerConfig.preloadPageCount === 0) {
                this.showThumbnails = true;
            }
            else {
                if (this.file.thumbnails.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) { return !t.data; })).length > 0) {
                    this._viewerService.loadThumbnails(this.credentials).subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        _this.file.thumbnails = data.pages;
                        _this.showThumbnails = true;
                    }));
                }
                else {
                    this.showThumbnails = true;
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.clearData = /**
         * @private
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (!this.file || !this.file.pages) {
                return;
            }
            try {
                for (var _b = __values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var page = _c.value;
                    page.data = null;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.onRightClick = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            return this.enableRightClickConfig;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.openSearch = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this.showSearch = !this.showSearch;
        };
        // onPinchIn($event){
        //   this.zoomOut();
        // }
        // onPinchOut($event){
        //   this.zoomIn();
        // }
        // onPinchIn($event){
        //   this.zoomOut();
        // }
        // onPinchOut($event){
        //   this.zoomIn();
        // }
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.refreshZoom = 
        // onPinchIn($event){
        //   this.zoomOut();
        // }
        // onPinchOut($event){
        //   this.zoomIn();
        // }
        /**
         * @private
         * @return {?}
         */
        function () {
            this.formatIcon = this.file ? commonComponents.FileUtil.find(this.file.guid, false).icon : null;
            this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
        };
        ViewerAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-viewer',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel'\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file && formatIcon !== 'file-excel') || (formatIcon === 'file-excel' && !htmlModeConfig)\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && formatIcon === 'file-excel' && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
                    }] }
        ];
        /** @nocollapse */
        ViewerAppComponent.ctorParameters = function () { return [
            { type: ViewerService },
            { type: commonComponents.ModalService },
            { type: ViewerConfigService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.NavigateService },
            { type: commonComponents.ZoomService },
            { type: commonComponents.PagePreloadService },
            { type: commonComponents.RenderPrintService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.WindowService },
            { type: commonComponents.LoadingMaskService }
        ]; };
        return ViewerAppComponent;
    }());
    if (false) {
        /** @type {?} */
        ViewerAppComponent.prototype.title;
        /** @type {?} */
        ViewerAppComponent.prototype.files;
        /** @type {?} */
        ViewerAppComponent.prototype.file;
        /** @type {?} */
        ViewerAppComponent.prototype.viewerConfig;
        /** @type {?} */
        ViewerAppComponent.prototype.countPages;
        /** @type {?} */
        ViewerAppComponent.prototype.formatDisabled;
        /** @type {?} */
        ViewerAppComponent.prototype.showThumbnails;
        /** @type {?} */
        ViewerAppComponent.prototype.credentials;
        /** @type {?} */
        ViewerAppComponent.prototype.browseFilesModal;
        /** @type {?} */
        ViewerAppComponent.prototype.showSearch;
        /** @type {?} */
        ViewerAppComponent.prototype.isDesktop;
        /** @type {?} */
        ViewerAppComponent.prototype.isLoading;
        /** @type {?} */
        ViewerAppComponent.prototype._zoom;
        /** @type {?} */
        ViewerAppComponent.prototype._pageWidth;
        /** @type {?} */
        ViewerAppComponent.prototype._pageHeight;
        /** @type {?} */
        ViewerAppComponent.prototype.options;
        /** @type {?} */
        ViewerAppComponent.prototype.fileWasDropped;
        /** @type {?} */
        ViewerAppComponent.prototype.formatIcon;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._viewerService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._navigateService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._zoomService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._renderPrintService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._windowService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._loadingMaskService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThumbnailsComponent = /** @class */ (function () {
        function ThumbnailsComponent(_navigateService, _zoomService) {
            this._navigateService = _navigateService;
            this._zoomService = _zoomService;
        }
        /**
         * @return {?}
         */
        ThumbnailsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ThumbnailsComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
            // which leads to undesired spaces on the top of the docs pages
            this.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "");
                }
            }));
        };
        /**
         * @return {?}
         */
        ThumbnailsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._zoomService.changeZoom(this._zoomService.zoom);
        };
        /**
         * @return {?}
         */
        ThumbnailsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._zoomService.changeZoom(this._zoomService.zoom);
        };
        /**
         * @param {?} data
         * @return {?}
         */
        ThumbnailsComponent.prototype.imgData = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var dataImagePngBase64 = 'data:image/png;base64,';
            if (!this.isHtmlMode) {
                return dataImagePngBase64 + data;
            }
            return dataImagePngBase64;
        };
        /**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        ThumbnailsComponent.prototype.getScale = /**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) {
            return Math.min(190 / x, 190 / y);
        };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        ThumbnailsComponent.prototype.openPage = /**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            this._navigateService.navigateTo(pageNumber);
        };
        // TODO: consider placing in one service
        // TODO: consider placing in one service
        /**
         * @param {?} value
         * @return {?}
         */
        ThumbnailsComponent.prototype.getDimensionWithUnit = 
        // TODO: consider placing in one service
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value + commonComponents.FileUtil.find(this.guid, false).unit;
        };
        ThumbnailsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-thumbnails',
                        template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" \n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && !isHtmlMode\">\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host{-webkit-box-flex:0;flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;-webkit-transition:margin-left .2s;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;-webkit-transition:.3s;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38)}.gd-wrapper ::ng-deep img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
                    }] }
        ];
        /** @nocollapse */
        ThumbnailsComponent.ctorParameters = function () { return [
            { type: commonComponents.NavigateService },
            { type: commonComponents.ZoomService }
        ]; };
        ThumbnailsComponent.propDecorators = {
            pages: [{ type: core.Input }],
            guid: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            isHtmlMode: [{ type: core.Input }]
        };
        return ThumbnailsComponent;
    }());
    if (false) {
        /** @type {?} */
        ThumbnailsComponent.prototype.pages;
        /** @type {?} */
        ThumbnailsComponent.prototype.guid;
        /** @type {?} */
        ThumbnailsComponent.prototype.mode;
        /** @type {?} */
        ThumbnailsComponent.prototype.isHtmlMode;
        /**
         * @type {?}
         * @private
         */
        ThumbnailsComponent.prototype._navigateService;
        /**
         * @type {?}
         * @private
         */
        ThumbnailsComponent.prototype._zoomService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelPageService = /** @class */ (function () {
        function ExcelPageService() {
        }
        /**
         * @param {?} data
         * @return {?}
         */
        ExcelPageService.prototype.getUpdatedPage = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var doc = new DOMParser().parseFromString(data, "text/html");
            /** @type {?} */
            var table = doc.querySelector('table');
            /** @type {?} */
            var numCellsInFirstRow = 0;
            /** @type {?} */
            var cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');
            cellsFromFirstRow.forEach((/**
             * @param {?} elm
             * @return {?}
             */
            function (elm) {
                numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
            }));
            /** @type {?} */
            var newTable = this.createHeader(numCellsInFirstRow, table);
            doc.querySelector('table').replaceWith(newTable);
            /** @type {?} */
            var resultData = new XMLSerializer().serializeToString(doc)
            // work-around for FF which is adds a0 namespace during serialization
            ;
            // work-around for FF which is adds a0 namespace during serialization
            return resultData.replace(/a0:/g, "").replace(/:a0/g, "");
        };
        /**
         * @param {?} numCols
         * @param {?} table
         * @return {?}
         */
        ExcelPageService.prototype.createHeader = /**
         * @param {?} numCols
         * @param {?} table
         * @return {?}
         */
        function (numCols, table) {
            /** @type {?} */
            var header = document.createElement('thead');
            header.append(document.createElement('tr'));
            for (var i = 0; i < numCols; ++i) {
                /** @type {?} */
                var th = document.createElement('th');
                th.innerText = this.colName(i);
                header.querySelector("tr").append(th);
            }
            /** @type {?} */
            var colgroup = table.querySelector('colgroup');
            /** @type {?} */
            var col = document.createElement('col');
            col.width = '80px';
            colgroup.prepend(col);
            table.prepend(header);
            /** @type {?} */
            var cnt = 0;
            table.querySelectorAll('tr').forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                /** @type {?} */
                var div = document.createElement('div');
                if (cnt !== 0) {
                    /** @type {?} */
                    var td = document.createElement('td');
                    td.className = "excel";
                    td.append(div);
                    div.innerText = cnt.toString();
                    row.prepend(td);
                }
                else {
                    /** @type {?} */
                    var th = document.createElement('th');
                    th.append(div);
                    row.prepend(th);
                }
                cnt++;
            }));
            return table;
        };
        /**
         * @param {?} n
         * @return {?}
         */
        ExcelPageService.prototype.colName = /**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            /** @type {?} */
            var ordA = 'a'.charCodeAt(0);
            /** @type {?} */
            var ordZ = 'z'.charCodeAt(0);
            /** @type {?} */
            var len = ordZ - ordA + 1;
            /** @type {?} */
            var s = "";
            while (n >= 0) {
                s = String.fromCharCode(n % len + ordA) + s;
                n = Math.floor(n / len) - 1;
            }
            return s;
        };
        ExcelPageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ExcelPageService.ctorParameters = function () { return []; };
        /** @nocollapse */ ExcelPageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ExcelPageService_Factory() { return new ExcelPageService(); }, token: ExcelPageService, providedIn: "root" });
        return ExcelPageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelPageComponent = /** @class */ (function () {
        function ExcelPageComponent(_excelPageService) {
            this._excelPageService = _excelPageService;
        }
        /**
         * @return {?}
         */
        ExcelPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
            if (isIE && this.number === 0) {
                this.editable = false;
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        ExcelPageComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
            // which leads to undesired spaces on the top of the docs pages
            this.data = this.data !== null ? this.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "") : null;
            /** @type {?} */
            var dataImagePngBase64 = 'data:image/png;base64,';
            this.imgData = dataImagePngBase64;
            if (!this.isHtml) {
                this.imgData += this.data;
            }
            this.data = this.data !== null ? this._excelPageService.getUpdatedPage(this.data) : null;
        };
        ExcelPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-excel-page',
                        template: "<div id=\"page-{{number}}\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                        styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}::ng-deep th{color:#959da5;background-color:#f4f4f4;font-weight:unset;border:1px solid #e7e7e7!important;text-transform:uppercase;font-size:14px;overflow:hidden}::ng-deep td{vertical-align:middle!important}::ng-deep .page-grid-lines td{border:1px solid #e7e7e7!important}::ng-deep .page td:nth-child(1){border:1px solid #e7e7e7!important}::ng-deep tr td.excel:first-child{color:#959da5;background-color:#f4f4f4;font-weight:unset;width:1%;text-align:center}::ng-deep tr td.excel:first-child div{width:80px}::ng-deep tr th.excel:first-child{background-color:#f4f4f4;width:1%}::ng-deep tr th.excel:first-child div{width:80px}.gd-page-image{height:100%!important;width:100%!important}"]
                    }] }
        ];
        /** @nocollapse */
        ExcelPageComponent.ctorParameters = function () { return [
            { type: ExcelPageService }
        ]; };
        ExcelPageComponent.propDecorators = {
            angle: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            number: [{ type: core.Input }],
            data: [{ type: core.Input }],
            isHtml: [{ type: core.Input }],
            editable: [{ type: core.Input }]
        };
        return ExcelPageComponent;
    }());
    if (false) {
        /** @type {?} */
        ExcelPageComponent.prototype.angle;
        /** @type {?} */
        ExcelPageComponent.prototype.width;
        /** @type {?} */
        ExcelPageComponent.prototype.height;
        /** @type {?} */
        ExcelPageComponent.prototype.number;
        /** @type {?} */
        ExcelPageComponent.prototype.data;
        /** @type {?} */
        ExcelPageComponent.prototype.isHtml;
        /** @type {?} */
        ExcelPageComponent.prototype.editable;
        /** @type {?} */
        ExcelPageComponent.prototype.imgData;
        /**
         * @type {?}
         * @private
         */
        ExcelPageComponent.prototype._excelPageService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelDocumentComponent = /** @class */ (function (_super) {
        __extends(ExcelDocumentComponent, _super);
        function ExcelDocumentComponent(_elementRef, zoomService, windowService, _navigateService) {
            var _this = _super.call(this, _elementRef, zoomService, windowService) || this;
            _this._navigateService = _navigateService;
            _this.panzoom = null;
            return _this;
        }
        /**
         * @return {?}
         */
        ExcelDocumentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.currentPageNo = 1;
        };
        /**
         * @return {?}
         */
        ExcelDocumentComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.refreshExcelDocHeight();
            this.pages.changes.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshExcelDocHeight();
            }));
            this._navigateService.navigate.subscribe((((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.selectSheet(value);
            }))));
        };
        /**
         * @return {?}
         */
        ExcelDocumentComponent.prototype.refreshExcelDocHeight = /**
         * @return {?}
         */
        function () {
            // For current iteration we'll change actual height of .document
            this.doc = this._elementRef.nativeElement.children.item(0);
            this.panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
            // magic number 37 is the height of the bottom-bar with navigation between pages
            this.doc.style.height = this.panzoom.scrollHeight + 37 + "px";
        };
        /**
         * @param {?} number
         * @return {?}
         */
        ExcelDocumentComponent.prototype.selectSheet = /**
         * @param {?} number
         * @return {?}
         */
        function (number) {
            this.currentPageNo = number;
        };
        ExcelDocumentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-excel-document',
                        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div class=\"sheets-wrapper\">\n    <div *ngFor=\"let page of file?.pages\">\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:-webkit-box;display:flex;border-top:1px solid #e7e7e7;position:fixed;bottom:17px;right:17px;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:-webkit-box;display:flex}.page{position:relative;display:inline-block;background-color:#fff;-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                    }] }
        ];
        /** @nocollapse */
        ExcelDocumentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: commonComponents.ZoomService },
            { type: commonComponents.WindowService },
            { type: commonComponents.NavigateService }
        ]; };
        ExcelDocumentComponent.propDecorators = {
            pages: [{ type: core.ViewChildren, args: [ExcelPageComponent,] }]
        };
        return ExcelDocumentComponent;
    }(commonComponents.DocumentComponent));
    if (false) {
        /** @type {?} */
        ExcelDocumentComponent.prototype.pages;
        /** @type {?} */
        ExcelDocumentComponent.prototype.currentPageNo;
        /** @type {?} */
        ExcelDocumentComponent.prototype.panzoom;
        /**
         * @type {?}
         * @private
         */
        ExcelDocumentComponent.prototype._navigateService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} viewerConfigService
     * @return {?}
     */
    function initializeApp(viewerConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return viewerConfigService.load(); });
        return result;
    }
    // NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
    // @dynamic
    /**
     * @param {?} service
     * @return {?}
     */
    function setupLoadingInterceptor(service) {
        return new commonComponents.LoadingMaskInterceptorService(service);
    }
    var ViewerModule = /** @class */ (function () {
        function ViewerModule() {
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        ViewerModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: ViewerModule
            };
        };
        ViewerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ViewerAppComponent,
                            ThumbnailsComponent,
                            ExcelDocumentComponent,
                            ExcelPageComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule
                        ],
                        exports: [
                            ViewerAppComponent,
                            ThumbnailsComponent,
                            ExcelDocumentComponent,
                            ExcelPageComponent,
                            commonComponents.CommonComponentsModule
                        ],
                        providers: [
                            ViewerService,
                            commonComponents.ConfigService,
                            ViewerConfigService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [ViewerConfigService], multi: true
                            },
                            commonComponents.LoadingMaskService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useFactory: setupLoadingInterceptor,
                                multi: true,
                                deps: [commonComponents.LoadingMaskService]
                            }
                        ]
                    },] }
        ];
        return ViewerModule;
    }());

    exports.ViewerAppComponent = ViewerAppComponent;
    exports.ViewerConfigService = ViewerConfigService;
    exports.ViewerModule = ViewerModule;
    exports.ViewerService = ViewerService;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = ThumbnailsComponent;
    exports.ɵb = ExcelDocumentComponent;
    exports.ɵc = ExcelPageComponent;
    exports.ɵd = ExcelPageService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-viewer.umd.js.map
