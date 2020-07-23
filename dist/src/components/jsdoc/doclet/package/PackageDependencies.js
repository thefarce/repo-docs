"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./PackageDependencies.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _dependency(token, version) {
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

function PackageDependencies(_ref) {
  var deps = _ref.deps;
  var deps_list = [];
  var pkgs = Object.keys(deps);
  pkgs.forEach(function (pkg) {
    deps_list.push(_dependency(pkg, deps[pkg]));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dependency-list"
  }, deps_list);
}

var _default = PackageDependencies;
exports.default = _default;

//# sourceMappingURL=PackageDependencies.js.map