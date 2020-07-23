"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Doclet = _interopRequireDefault(require("./components/jsdoc/Doclet"));

var _thefarceNetCode = _interopRequireDefault(require("./assets/thefarce-net-code.png"));

var _Sidebar = _interopRequireDefault(require("./components/Sidebar"));

var _PageContent = _interopRequireDefault(require("./components/PageContent"));

var _categorizeDoclets = _interopRequireDefault(require("./categorize-doclets"));

require("./App.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var doclets = _ref.doclets;
  doclets.sort(function (a, b) {
    return a.kind === 'package' && b.kind !== 'package' ? -1 : a.kind !== 'package' && b.kind === 'package' ? 1 : a.name - b.name;
  });
  var doclet_list = [];
  doclets.forEach(function (doclet) {
    doclet_list.push( /*#__PURE__*/_react.default.createElement(_Doclet.default, {
      data: doclet
    }));
  });
  var categorized = (0, _categorizeDoclets.default)(doclets);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "header"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "App-logo",
    src: _thefarceNetCode.default,
    alt: "The Farce: code repository"
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "mainWrapper",
    className: "main-grid clearfix flexbox"
  }, /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
    doclets: categorized
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "page-divider",
    className: "page-divider flexbox-col"
  }), /*#__PURE__*/_react.default.createElement(_PageContent.default, null, doclet_list)), /*#__PURE__*/_react.default.createElement("pre", {
    style: {
      textAlign: 'left'
    }
  }, JSON.stringify(doclets, undefined, 2)));
}

var _default = App;
exports.default = _default;

//# sourceMappingURL=App.js.map