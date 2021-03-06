import { AfterViewChecked, ElementRef, OnInit, AfterViewInit, OnChanges, EventEmitter } from '@angular/core';
import { FileDescription } from "../file.service";
import { ZoomService } from "../zoom.service";
import { WindowService } from '../window.service';
export declare class DocumentComponent implements OnInit, AfterViewChecked, AfterViewInit, OnChanges {
    protected _elementRef: ElementRef<HTMLElement>;
    private _zoomService;
    private _windowService;
    mode: boolean;
    preloadPageCount: number;
    file: FileDescription;
    onpan: EventEmitter<any>;
    wait: boolean;
    zoom: number;
    docWidth: any;
    docHeight: any;
    viewportWidth: any;
    viewportHeight: any;
    scale: any;
    lastScale: any;
    container: any;
    doc: any;
    x: number;
    lastX: number;
    y: number;
    lastY: number;
    pinchCenter: any;
    pinchCenterOffset: any;
    curWidth: number;
    curHeight: number;
    isDesktop: boolean;
    constructor(_elementRef: ElementRef<HTMLElement>, _zoomService: ZoomService, _windowService: WindowService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ifExcel(): boolean;
    getDimensionWithUnit(value: number): any;
    ifEdge(): boolean;
    ngAfterViewChecked(): void;
    absolutePosition(el: any): {
        x: number;
        y: number;
    };
    restrictRawPos(pos: any, viewportDim: any, docDim: any): any;
    updateLastPos(): void;
    translate(deltaX: any, deltaY: any): void;
    startZoom(scaleBy: any): void;
    rawCenter($event: any): {
        x: number;
        y: number;
    };
    updateLastScale(): void;
    zoomAround(scaleBy: any, rawZoomX: any, rawZoomY: any, doNotUpdateLast: any): void;
    onPinch($event: any): void;
    onPinchEnd($event: any): void;
    onPan($event: any): void;
    onPanEnd($event: any): void;
    onDoubleTap($event: any): void;
}
