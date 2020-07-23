"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DocletName = _interopRequireDefault(require("../components/DocletName"));

var _FunctionParams = _interopRequireDefault(require("./function/FunctionParams"));

var _FunctionReturns = _interopRequireDefault(require("./function/FunctionReturns"));

var _DocletDesc = _interopRequireDefault(require("../components/DocletDesc"));

var _util = _interopRequireDefault(require("../../../util"));

require("./FunctionDoclet.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FunctionDoclet(_ref) {
  var data = _ref.data;
  // let raw = (<pre>{JSON.stringify(data, undefined, 2)}</pre>);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "doclet function"
  }, /*#__PURE__*/_react.default.createElement(_DocletName.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_DocletDesc.default, {
    desc: data.description
  }), /*#__PURE__*/_react.default.createElement(_FunctionParams.default, {
    params: data.params
  }), /*#__PURE__*/_react.default.createElement(_FunctionReturns.default, {
    returns: data.returns
  }));
}

var _default = FunctionDoclet;
exports.default = _default;

//# sourceMappingURL=FunctionDoclet.js.map