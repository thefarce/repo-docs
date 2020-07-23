"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FunctionDoclet = _interopRequireDefault(require("./doclet/FunctionDoclet"));

var _PackageDoclet = _interopRequireDefault(require("./doclet/PackageDoclet"));

var _util = _interopRequireDefault(require("../../util"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Doclet(_ref) {
  var data = _ref.data;
  //let raw = (<pre style={{textAlign: 'left'}}>{JSON.stringify(data, undefined, 2)}</pre>);
  var content = '';

  if (data.kind === 'member' || data.memberof) {}

  if (data.kind === 'package') {
    content = /*#__PURE__*/_react.default.createElement(_PackageDoclet.default, {
      data: data
    });
  }

  if (data.kind === 'function') {
    content = /*#__PURE__*/_react.default.createElement(_FunctionDoclet.default, {
      data: data
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    id: _util.default.normalizeName(data.kind, data.name)
  }, content);
}

var _default = Doclet;
exports.default = _default;

//# sourceMappingURL=Doclet.js.map