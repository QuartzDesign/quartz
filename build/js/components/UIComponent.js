"use strict";
var UIComponent = (function () {
    function UIComponent() {
    }
    UIComponent.prototype.makeBasicComponent = function (component) {
        return document.createElement(component.elementType);
    };
    return UIComponent;
}());
exports.UIComponent = UIComponent;
//# sourceMappingURL=UIComponent.js.map