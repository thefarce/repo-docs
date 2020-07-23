"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PackageDependency(token, version) {
  return /*#__PURE__*/_react.default.createElement("a", {
    href: 'https://www.npmjs.com/package/' + token,
    target: "_blank",
    className: "dependency",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "token"
  }, token), /*#__PURE__*/_react.default.createElement("span", {
    className: "version"
  }, version));
}

var _default = PackageDependency;
exports.default = _default;

//# sourceMappingURL=PackageDependency.js.map