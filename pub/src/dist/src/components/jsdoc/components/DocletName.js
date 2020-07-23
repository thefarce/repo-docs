"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DocletReference = _interopRequireDefault(require("./DocletReference"));

require("./DocletName.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocletName(_ref) {
  var data = _ref.data;

  // let raw = (<pre>{JSON.stringify(data, undefined, 2)}</pre>);
  var id_name = /*#__PURE__*/_react.default.createElement("span", {
    className: "name"
  }, data.name);

  if (data.kind === 'function') {
    var params = [];
    var pnames = data.meta.code.paramnames;

    for (var i = 0; i < pnames.length; i++) {
      params.push( /*#__PURE__*/_react.default.createElement("span", {
        className: "param"
      }, pnames[i], i < pnames.length - 1 ? ',' : ''));
    }

    id_name = /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "token"
    }, data.name), "(", params, ")");
  }

  var refs = '';

  if (data.meta) {
    refs = /*#__PURE__*/_react.default.createElement(_DocletReference.default, {
      references: data.meta
    });
  }

  return /*#__PURE__*/_react.default.createElement("h1", {
    className: "identifier"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "kind"
  }, data.kind), id_name, refs);
}

var _default = DocletName;
exports.default = _default;

//# sourceMappingURL=DocletName.js.map