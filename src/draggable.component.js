import { __extends } from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { AbstractComponent, AbstractHandleComponent } from './abstract.component';
import * as i0 from "@angular/core";
import * as i1 from "./dnd.service";
import * as i2 from "./dnd.config";
var DraggableComponent = /** @class */ (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drag actions happened.
         */
        _this.onDragStart = new EventEmitter();
        _this.onDragEnd = new EventEmitter();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new EventEmitter();
        _this._defaultCursor = _this._elem.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: false,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.ɵfac = function DraggableComponent_Factory(t) { return new (t || DraggableComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DragDropService), i0.ɵɵdirectiveInject(i2.DragDropConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    DraggableComponent.ɵdir = i0.ɵɵdefineDirective({ type: DraggableComponent, selectors: [["", "dnd-draggable", ""]], inputs: { draggable: ["dragEnabled", "draggable"], dragData: "dragData", dropzones: ["dropZones", "dropzones"], effectallowed: ["effectAllowed", "effectallowed"], effectcursor: ["effectCursor", "effectcursor"], dragImage: "dragImage", cloneItem: "cloneItem" }, outputs: { onDragStart: "onDragStart", onDragEnd: "onDragEnd", onDragSuccessCallback: "onDragSuccess" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return DraggableComponent;
}(AbstractComponent));
export { DraggableComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DraggableComponent, [{
        type: Directive,
        args: [{ selector: '[dnd-draggable]' }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DragDropService }, { type: i2.DragDropConfig }, { type: i0.ChangeDetectorRef }]; }, { draggable: [{
            type: Input,
            args: ["dragEnabled"]
        }], onDragStart: [{
            type: Output
        }], onDragEnd: [{
            type: Output
        }], dragData: [{
            type: Input
        }], onDragSuccessCallback: [{
            type: Output,
            args: ["onDragSuccess"]
        }], dropzones: [{
            type: Input,
            args: ["dropZones"]
        }], effectallowed: [{
            type: Input,
            args: ["effectAllowed"]
        }], effectcursor: [{
            type: Input,
            args: ["effectCursor"]
        }], dragImage: [{
            type: Input
        }], cloneItem: [{
            type: Input
        }] }); })();
var DraggableHandleComponent = /** @class */ (function (_super) {
    __extends(DraggableHandleComponent, _super);
    function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    DraggableHandleComponent.ɵfac = function DraggableHandleComponent_Factory(t) { return new (t || DraggableHandleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DragDropService), i0.ɵɵdirectiveInject(i2.DragDropConfig), i0.ɵɵdirectiveInject(DraggableComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    DraggableHandleComponent.ɵdir = i0.ɵɵdefineDirective({ type: DraggableHandleComponent, selectors: [["", "dnd-draggable-handle", ""]], features: [i0.ɵɵInheritDefinitionFeature] });
    return DraggableHandleComponent;
}(AbstractHandleComponent));
export { DraggableHandleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DraggableHandleComponent, [{
        type: Directive,
        args: [{ selector: '[dnd-draggable-handle]' }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DragDropService }, { type: i2.DragDropConfig }, { type: DraggableComponent }, { type: i0.ChangeDetectorRef }]; }, null); })();
