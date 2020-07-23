"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DocletReference = _interopRequireDefault(require("./DocletReference"));

var _util = _interopRequireDefault(require("../../../util"));

require("./DocletDesc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocletDesc(_ref) {
  var desc = _ref.desc;

  var description = _util.default.formatParagraphs(desc);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "description doclet-description"
  }, description);
}

var _default = DocletDesc;
exports.default = _default;

//# sourceMappingURL=DocletDesc.js.map