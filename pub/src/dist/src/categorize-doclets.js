"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function categorizeDoclets(doclets) {
  var categorized = {
    functions: [],
    packages: [],
    constants: [],
    members: [],
    others: []
  };
  doclets.forEach(function (doclet) {
    switch (doclet.kind) {
      case 'function':
        categorized.functions.push(doclet);
        break;

      case 'package':
        categorized.packages.push(doclet);
        break;

      case 'constant':
        categorized.constants.push(doclet);
        break;

      case 'member':
        categorized.members.push(doclet);
        break;

      default:
        categorized.others.push(doclet);
        break;
    }
  });
  return categorized;
}

;
var _default = categorizeDoclets;
exports.default = _default;

//# sourceMappingURL=categorize-doclets.js.map