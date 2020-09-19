// Copyright (C) 2016-2020 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { Injectable } from '@angular/core';
import { isPresent } from './dnd.utils';
import * as i0 from "@angular/core";
import * as i1 from "./dnd.config";
var DragDropData = /** @class */ (function () {
    function DragDropData() {
    }
    return DragDropData;
}());
export { DragDropData };
export function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService.ɵfac = function DragDropService_Factory(t) { return new (t || DragDropService)(); };
    DragDropService.ɵprov = i0.ɵɵdefineInjectable({ token: DragDropService, factory: DragDropService.ɵfac });
    return DragDropService;
}());
export { DragDropService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DragDropService, [{
        type: Injectable
    }], null, null); })();
export function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = /** @class */ (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: false,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService.ɵfac = function DragDropSortableService_Factory(t) { return new (t || DragDropSortableService)(i0.ɵɵinject(i1.DragDropConfig)); };
    DragDropSortableService.ɵprov = i0.ɵɵdefineInjectable({ token: DragDropSortableService, factory: DragDropSortableService.ɵfac });
    return DragDropSortableService;
}());
export { DragDropSortableService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DragDropSortableService, [{
        type: Injectable
    }], function () { return [{ type: i1.DragDropConfig }]; }, null); })();
