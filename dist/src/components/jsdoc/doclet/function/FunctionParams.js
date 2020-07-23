"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _striptags = _interopRequireDefault(require("striptags"));

require("./FunctionParams.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FunctionParams(_ref) {
  var _ref$params = _ref.params,
      params = _ref$params === void 0 ? [] : _ref$params;
  var list = [];
  params.forEach(function (param) {
    list.push( /*#__PURE__*/_react.default.createElement("div", {
      className: "param"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, param.name), /*#__PURE__*/_react.default.createElement("span", {
      className: "types"
    }, param.type.names.join(',')), /*#__PURE__*/_react.default.createElement("span", {
      className: "description"
    }, (0, _striptags.default)(param.description, [], '\n\n'))));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "param-list"
  }, list);
}

var _default = FunctionParams;
exports.default = _default;

//# sourceMappingURL=FunctionParams.js.map