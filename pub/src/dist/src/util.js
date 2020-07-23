"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _striptags = _interopRequireDefault(require("striptags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatParagraphs(string) {
  var paragraphs = (0, _striptags.default)(string, [], '\n\n').split(/\n\n+/g);
  var list = [];
  paragraphs.forEach(function (para) {
    list.push( /*#__PURE__*/_react.default.createElement("p", {
      className: "description-paragraph"
    }, para));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "paragraphs"
  }, list);
}

function normalizeName(kind, name) {
  var token = "".concat(kind, "__").concat(name);
  return token.replace(/[\W]+/g, '-');
}

var _default = {
  formatParagraphs: formatParagraphs,
  normalizeName: normalizeName
};
exports.default = _default;

//# sourceMappingURL=util.js.map