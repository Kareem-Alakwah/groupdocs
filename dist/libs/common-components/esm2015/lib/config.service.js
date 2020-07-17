/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
export class Api {
}
Api.VIEWER_APP = '/viewer';
Api.SIGNATURE_APP = '/signature';
Api.ANNOTATION_APP = '/annotation';
Api.SEARCH_APP = '/search';
Api.EDITOR_APP = '/editor';
Api.COMPARISON_APP = '/comparison';
Api.CONVERSION_APP = '/conversion';
Api.METADATA_APP = '/metadata';
Api.DEFAULT_API_ENDPOINT = window.location.href;
Api.LOAD_FILE_TREE = '/loadFileTree';
Api.LOAD_CONFIG = '/loadConfig';
Api.LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
Api.LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
Api.LOAD_DOCUMENT_PROPERTIES = '/loadProperties';
Api.LOAD_DOCUMENT_PROPERTIES_NAMES = '/loadPropertiesNames';
Api.SAVE_PROPERTY = '/saveProperty';
Api.REMOVE_PROPERTY = '/removeProperty';
Api.ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
Api.UPLOAD_DOCUMENTS = '/uploadDocument';
Api.DOWNLOAD_DOCUMENTS = '/downloadDocument';
Api.LOAD_PRINT = '/loadPrint';
Api.LOAD_PRINT_PDF = '/printPdf';
Api.LOAD_THUMBNAILS = '/loadThumbnails';
Api.LOAD_FORMATS = '/loadFormats';
Api.SAVE_FILE = '/saveFile';
Api.COMPARE_FILES = '/compare';
Api.CONVERT_FILE = '/convert';
Api.DELETE_SIGNATURE_FILE = '/deleteSignatureFile';
Api.REMOVE_FROM_INDEX = '/removeFromIndex';
Api.GET_FILE_STATUS = '/getFileStatus';
Api.SAVE_OPTICAL_CODE = '/saveOpticalCode';
Api.SAVE_TEXT = '/saveText';
Api.SAVE_IMAGE = '/saveImage';
Api.SAVE_STAMP = '/saveStamp';
Api.SIGN = '/sign';
Api.DOWNLOAD_SIGNED = '/downloadSigned';
Api.LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
Api.ANNOTATE = '/annotate';
Api.SEARCH = '/search';
Api.ADD_FILES_TO_INDEX = '/addFilesToIndex';
Api.httpOptionsJson = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
Api.httpOptionsJsonResponseTypeBlob = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
    responseType: (/** @type {?} */ ('blob'))
};
if (false) {
    /** @type {?} */
    Api.VIEWER_APP;
    /** @type {?} */
    Api.SIGNATURE_APP;
    /** @type {?} */
    Api.ANNOTATION_APP;
    /** @type {?} */
    Api.SEARCH_APP;
    /** @type {?} */
    Api.EDITOR_APP;
    /** @type {?} */
    Api.COMPARISON_APP;
    /** @type {?} */
    Api.CONVERSION_APP;
    /** @type {?} */
    Api.METADATA_APP;
    /** @type {?} */
    Api.DEFAULT_API_ENDPOINT;
    /** @type {?} */
    Api.LOAD_FILE_TREE;
    /** @type {?} */
    Api.LOAD_CONFIG;
    /** @type {?} */
    Api.LOAD_DOCUMENT_DESCRIPTION;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PAGE;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PROPERTIES;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PROPERTIES_NAMES;
    /** @type {?} */
    Api.SAVE_PROPERTY;
    /** @type {?} */
    Api.REMOVE_PROPERTY;
    /** @type {?} */
    Api.ROTATE_DOCUMENT_PAGE;
    /** @type {?} */
    Api.UPLOAD_DOCUMENTS;
    /** @type {?} */
    Api.DOWNLOAD_DOCUMENTS;
    /** @type {?} */
    Api.LOAD_PRINT;
    /** @type {?} */
    Api.LOAD_PRINT_PDF;
    /** @type {?} */
    Api.LOAD_THUMBNAILS;
    /** @type {?} */
    Api.LOAD_FORMATS;
    /** @type {?} */
    Api.SAVE_FILE;
    /** @type {?} */
    Api.COMPARE_FILES;
    /** @type {?} */
    Api.CONVERT_FILE;
    /** @type {?} */
    Api.DELETE_SIGNATURE_FILE;
    /** @type {?} */
    Api.REMOVE_FROM_INDEX;
    /** @type {?} */
    Api.GET_FILE_STATUS;
    /** @type {?} */
    Api.SAVE_OPTICAL_CODE;
    /** @type {?} */
    Api.SAVE_TEXT;
    /** @type {?} */
    Api.SAVE_IMAGE;
    /** @type {?} */
    Api.SAVE_STAMP;
    /** @type {?} */
    Api.SIGN;
    /** @type {?} */
    Api.DOWNLOAD_SIGNED;
    /** @type {?} */
    Api.LOAD_SIGNATURE_IMAGE;
    /** @type {?} */
    Api.ANNOTATE;
    /** @type {?} */
    Api.SEARCH;
    /** @type {?} */
    Api.ADD_FILES_TO_INDEX;
    /** @type {?} */
    Api.httpOptionsJson;
    /** @type {?} */
    Api.httpOptionsJsonResponseTypeBlob;
}
export class ConfigService {
    constructor() {
        this.apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set apiEndpoint(url) {
        this._apiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
    }
    /**
     * @param {?} app
     * @return {?}
     */
    getConfigEndpoint(app) {
        return (this.apiEndpoint.endsWith(app) ? this.apiEndpoint : this.apiEndpoint + app) + Api.LOAD_CONFIG;
    }
    /**
     * @return {?}
     */
    getViewerApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    }
    /**
     * @return {?}
     */
    getEditorApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    }
    /**
     * @return {?}
     */
    getComparisonApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.COMPARISON_APP;
    }
    /**
     * @return {?}
     */
    getConversionApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.CONVERSION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.CONVERSION_APP;
    }
    /**
     * @return {?}
     */
    getMetadataApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.METADATA_APP) ? this._apiEndpoint : this._apiEndpoint + Api.METADATA_APP;
    }
    /**
     * @return {?}
     */
    get apiEndpoint() {
        return this._apiEndpoint;
    }
    /**
     * @return {?}
     */
    getSignatureApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.SIGNATURE_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SIGNATURE_APP;
    }
    /**
     * @return {?}
     */
    getAnnotationApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.ANNOTATION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.ANNOTATION_APP;
    }
    /**
     * @return {?}
     */
    getSearchApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.SEARCH_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SEARCH_APP;
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype._apiEndpoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE1BQU0sT0FBTyxHQUFHOztBQUNBLGNBQVUsR0FBRyxTQUFTLENBQUM7QUFDdkIsaUJBQWEsR0FBRyxZQUFZLENBQUM7QUFDN0Isa0JBQWMsR0FBRyxhQUFhLENBQUM7QUFDL0IsY0FBVSxHQUFHLFNBQVMsQ0FBQztBQUN2QixjQUFVLEdBQUcsU0FBUyxDQUFDO0FBQ3ZCLGtCQUFjLEdBQUcsYUFBYSxDQUFDO0FBQy9CLGtCQUFjLEdBQUcsYUFBYSxDQUFDO0FBQy9CLGdCQUFZLEdBQUcsV0FBVyxDQUFDO0FBQzNCLHdCQUFvQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzVDLGtCQUFjLEdBQUcsZUFBZSxDQUFDO0FBQ2pDLGVBQVcsR0FBRyxhQUFhLENBQUM7QUFDNUIsNkJBQXlCLEdBQUcsMEJBQTBCLENBQUM7QUFDdkQsc0JBQWtCLEdBQUcsbUJBQW1CLENBQUM7QUFDekMsNEJBQXdCLEdBQUcsaUJBQWlCLENBQUM7QUFDN0Msa0NBQThCLEdBQUcsc0JBQXNCLENBQUM7QUFDeEQsaUJBQWEsR0FBRyxlQUFlLENBQUM7QUFDaEMsbUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQUNwQyx3QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztBQUM5QyxvQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQztBQUNyQyxzQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztBQUN6QyxjQUFVLEdBQUcsWUFBWSxDQUFDO0FBQzFCLGtCQUFjLEdBQUcsV0FB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Q0FBQztJQUN4SCxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNuSCxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDckgsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzdHLENBQUM7OztZQW5ERixVQUFVOzs7Ozs7Ozs7SUFHVCxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEFwaSB7XG4gIHB1YmxpYyBzdGF0aWMgVklFV0VSX0FQUCA9ICcvdmlld2VyJztcbiAgcHVibGljIHN0YXRpYyBTSUdOQVRVUkVfQVBQID0gJy9zaWduYXR1cmUnO1xuICBwdWJsaWMgc3RhdGljIEFOTk9UQVRJT05fQVBQID0gJy9hbm5vdGF0aW9uJztcbiAgcHVibGljIHN0YXRpYyBTRUFSQ0hfQVBQID0gJy9zZWFyY2gnO1xuICBwdWJsaWMgc3RhdGljIEVESVRPUl9BUFAgPSAnL2VkaXRvcic7XG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSSVNPTl9BUFAgPSAnL2NvbXBhcmlzb24nO1xuICBwdWJsaWMgc3RhdGljIENPTlZFUlNJT05fQVBQID0gJy9jb252ZXJzaW9uJztcbiAgcHVibGljIHN0YXRpYyBNRVRBREFUQV9BUFAgPSAnL21ldGFkYXRhJztcbiAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQSV9FTkRQT0lOVCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBwdWJsaWMgc3RhdGljIExPQURfRklMRV9UUkVFID0gJy9sb2FkRmlsZVRyZWUnO1xuICBwdWJsaWMgc3RhdGljIExPQURfQ09ORklHID0gJy9sb2FkQ29uZmlnJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OID0gJy9sb2FkRG9jdW1lbnREZXNjcmlwdGlvbic7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QQUdFID0gJy9sb2FkRG9jdW1lbnRQYWdlJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BST1BFUlRJRVMgPSAnL2xvYWRQcm9wZXJ0aWVzJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BST1BFUlRJRVNfTkFNRVMgPSAnL2xvYWRQcm9wZXJ0aWVzTmFtZXMnO1xuICBwdWJsaWMgc3RhdGljIFNBVkVfUFJPUEVSVFkgPSAnL3NhdmVQcm9wZXJ0eSc7XG4gIHB1YmxpYyBzdGF0aWMgUkVNT1ZFX1BST1BFUlRZID0gJy9yZW1vdmVQcm9wZXJ0eSc7XG4gIHB1YmxpYyBzdGF0aWMgUk9UQVRFX0RPQ1VNRU5UX1BBR0UgPSAnL3JvdGF0ZURvY3VtZW50UGFnZXMnO1xuICBwdWJsaWMgc3RhdGljIFVQTE9BRF9ET0NVTUVOVFMgPSAnL3VwbG9hZERvY3VtZW50JztcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9ET0NVTUVOVFMgPSAnL2Rvd25sb2FkRG9jdW1lbnQnO1xuICBwdWJsaWMgc3RhdGljIExPQURfUFJJTlQgPSAnL2xvYWRQcmludCc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVF9QREYgPSAnL3ByaW50UGRmJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX1RIVU1CTkFJTFMgPSAnL2xvYWRUaHVtYm5haWxzJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0ZPUk1BVFMgPSAnL2xvYWRGb3JtYXRzJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX0ZJTEUgPSAnL3NhdmVGaWxlJztcbiAgcHVibGljIHN0YXRpYyBDT01QQVJFX0ZJTEVTID0gJy9jb21wYXJlJztcbiAgcHVibGljIHN0YXRpYyBDT05WRVJUX0ZJTEUgPSAnL2NvbnZlcnQnO1xuICBwdWJsaWMgc3RhdGljIERFTEVURV9TSUdOQVRVUkVfRklMRSA9ICcvZGVsZXRlU2lnbmF0dXJlRmlsZSc7XG4gIHB1YmxpYyBzdGF0aWMgUkVNT1ZFX0ZST01fSU5ERVggPSAnL3JlbW92ZUZyb21JbmRleCc7XG4gIHB1YmxpYyBzdGF0aWMgR0VUX0ZJTEVfU1RBVFVTID0gJy9nZXRGaWxlU3RhdHVzJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX09QVElDQUxfQ09ERSA9ICcvc2F2ZU9wdGljYWxDb2RlJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX1RFWFQgPSAnL3NhdmVUZXh0JztcbiAgcHVibGljIHN0YXRpYyBTQVZFX0lNQUdFID0gJy9zYXZlSW1hZ2UnO1xuICBwdWJsaWMgc3RhdGljIFNBVkVfU1RBTVAgPSAnL3NhdmVTdGFtcCc7XG4gIHB1YmxpYyBzdGF0aWMgU0lHTiA9ICcvc2lnbic7XG4gIHB1YmxpYyBzdGF0aWMgRE9XTkxPQURfU0lHTkVEID0gJy9kb3dubG9hZFNpZ25lZCc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9TSUdOQVRVUkVfSU1BR0UgPSAnL2xvYWRTaWduYXR1cmVJbWFnZSc7XG4gIHB1YmxpYyBzdGF0aWMgQU5OT1RBVEUgPSAnL2Fubm90YXRlJztcbiAgcHVibGljIHN0YXRpYyBTRUFSQ0ggPSAnL3NlYXJjaCc7XG4gIHB1YmxpYyBzdGF0aWMgQUREX0ZJTEVTX1RPX0lOREVYID0gJy9hZGRGaWxlc1RvSW5kZXgnO1xuXG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pXG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYiA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KSxcbiAgICByZXNwb25zZVR5cGU6ICdibG9iJyBhcyAnYmxvYidcbiAgfTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2FwaUVuZHBvaW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcGlFbmRwb2ludCA9IEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVDtcbiAgfVxuXG4gIHNldCBhcGlFbmRwb2ludCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX2FwaUVuZHBvaW50ID0gdXJsICYmIHVybC50cmltKCkuZW5kc1dpdGgoJy8nKSA/IHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDEpIDogdXJsO1xuICB9XG5cbiAgZ2V0Q29uZmlnRW5kcG9pbnQoYXBwKSB7XG4gICAgcmV0dXJuICh0aGlzLmFwaUVuZHBvaW50LmVuZHNXaXRoKGFwcCkgPyB0aGlzLmFwaUVuZHBvaW50IDogdGhpcy5hcGlFbmRwb2ludCArIGFwcCkgKyBBcGkuTE9BRF9DT05GSUc7XG4gIH1cblxuICBnZXRWaWV3ZXJBcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlZJRVdFUl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5WSUVXRVJfQVBQO1xuICB9XG5cbiAgZ2V0RWRpdG9yQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuRURJVE9SX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkVESVRPUl9BUFA7XG4gIH1cblxuICBnZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09NUEFSSVNPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5DT01QQVJJU09OX0FQUDtcbiAgfVxuXG4gIGdldENvbnZlcnNpb25BcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5DT05WRVJTSU9OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkNPTlZFUlNJT05fQVBQO1xuICB9XG5cbiAgZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5NRVRBREFUQV9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5NRVRBREFUQV9BUFA7XG4gIH1cblxuICBnZXQgYXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50O1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5TSUdOQVRVUkVfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuU0lHTkFUVVJFX0FQUDtcbiAgfVxuXG4gIGdldEFubm90YXRpb25BcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLkFOTk9UQVRJT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQU5OT1RBVElPTl9BUFA7XG4gIH1cblxuICBnZXRTZWFyY2hBcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlNFQVJDSF9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5TRUFSQ0hfQVBQO1xuICB9XG59XG4iXX0=