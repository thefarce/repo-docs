"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = _interopRequireDefault(require("../../util"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function entry(doclet) {
  return /*#__PURE__*/_react.default.createElement("a", {
    href: "#".concat(_util.default.normalizeName(doclet.kind, doclet.name))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "doclet-link"
  }, doclet.name));
}

function entries(doclets) {
  var list = [];
  doclets.forEach(function (doclet) {
    list.push(entry(doclet));
  });
  return list;
}

function Sidebar(_ref) {
  var doclets = _ref.doclets;
  var packages = doclets.packages.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "packages"
  }, entries(doclets.packages)) : /*#__PURE__*/_react.default.createElement("div", null);
  var functions = doclets.functions.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "functions"
  }, entries(doclets.functions)) : /*#__PURE__*/_react.default.createElement("div", null);
  var constants = doclets.constants.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "constants"
  }, entries(doclets.constants)) : /*#__PURE__*/_react.default.createElement("div", null);
  var members = doclets.members.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "members"
  }, entries(doclets.members)) : /*#__PURE__*/_react.default.createElement("div", null);
  var others = doclets.others.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "others"
  }, entries(doclets.others)) : /*#__PURE__*/_react.default.createElement("div", null);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "sidebar",
    className: "opened sidebar flexbox-col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "docstypes"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "docstype user-docs"
  }, "User docs"), /*#__PURE__*/_react.default.createElement("span", {
    className: "docstype devs-docs"
  }, "Developer docs")), packages, functions, constants, members, others);
}

var _default = Sidebar;
exports.default = _default;

//# sourceMappingURL=index.js.map