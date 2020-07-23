"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./PageContent.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageContent(props) {
  var raw = /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(props.data, undefined, 2));

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "page-content"
  }, "Page Content", props.children);
}

var _default = PageContent;
exports.default = _default;

//# sourceMappingURL=PageContent.js.map