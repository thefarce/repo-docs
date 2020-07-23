"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DocletName = _interopRequireDefault(require("../components/DocletName"));

var _PackageDependencies = _interopRequireDefault(require("./package/PackageDependencies"));

var _DocletDesc = _interopRequireDefault(require("../components/DocletDesc"));

var _util = _interopRequireDefault(require("../../../util"));

require("./PackageDoclet.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Package(_ref) {
  var data = _ref.data;
  //let raw = (<pre>{JSON.stringify(data, undefined, 2)}</pre>);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "doclet package",
    id: _util.default.normalizeName(data.kind, data.name)
  }, /*#__PURE__*/_react.default.createElement(_DocletName.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_DocletDesc.default, {
    desc: data.description
  }), /*#__PURE__*/_react.default.createElement(_PackageDependencies.default, {
    deps: data.dependencies
  }));
}

var _default = Package;
exports.default = _default;

//# sourceMappingURL=PackageDoclet.js.map