"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// classNames modules is not used
var Component = (function (_super) {
    __extends(Component, _super);
    function Component(props) {
        return _super.call(this, props) || this;
    }
    Component.prototype.render = function () {
        var props = this.props;
        return React.createElement("div", __assign({}, props, { className: classNames_1.style }),
            React.createElement("p", null, "Content"));
    };
    return Component;
}(React.Component));
exports.Component = Component;
// classNames module is used
/*export class Component extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    constructor(props?: React.HTMLProps<HTMLDivElement>) {
        super(props);
    }
    render(): JSX.Element {
        return <div
            className={style}
        >
            <p>Content</p>
        </div>;
    }
}*/
