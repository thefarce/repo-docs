"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _striptags = _interopRequireDefault(require("striptags"));

require("./FunctionReturns.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FunctionReturns(_ref) {
  var _ref$values = _ref.values,
      values = _ref$values === void 0 ? [] : _ref$values;
  var list = [];
  values.forEach(function (value) {
    list.push( /*#__PURE__*/_react.default.createElement("div", {
      className: "return"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "types"
    }, value.type.names.join(',')), /*#__PURE__*/_react.default.createElement("span", {
      className: "description"
    }, (0, _striptags.default)(value.description, [], '\n\n'))));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "return-list"
  }, list);
}

var _default = FunctionReturns;
exports.default = _default;

//# sourceMappingURL=FunctionReturns.js.map