"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageContent(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "page-content",
    className: "opened page-content flexbox-col"
  }, props.children);
}

var _default = PageContent;
exports.default = _default;

//# sourceMappingURL=index.js.map