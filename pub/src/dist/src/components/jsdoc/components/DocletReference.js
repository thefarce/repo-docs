"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./DocletReference.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocletReference(_ref) {
  var references = _ref.references;
  //let raw = (<pre>{JSON.stringify(references, undefined, 2)}</pre>);
  var out = Object.assign({
    filename: '',
    lineno: '',
    columnno: '',
    path: '',
    paramnames: []
  }, references);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "reference"
  }, "Found in", /*#__PURE__*/_react.default.createElement("span", {
    className: "filename"
  }, out.filename), "starting at line", /*#__PURE__*/_react.default.createElement("span", {
    className: "start-line"
  }, out.lineno));
}

var _default = DocletReference;
exports.default = _default;

//# sourceMappingURL=DocletReference.js.map