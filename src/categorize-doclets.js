
function categorizeDoclets (doclets) {
  let categorized = {
    functions : [],
    packages  : [],
    constants : [],
    members   : [],
    others    : [],
  };

  doclets.forEach(doclet => {
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
};

export default categorizeDoclets;
