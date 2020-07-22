import React from 'react';
import util  from '../../util';
import './style.scss';

function entry (doclet) {
  return (
    <a href={`#${util.normalizeName(doclet.kind, doclet.name)}`}>
      <div className='doclet-link'>{doclet.name}</div>
    </a>
  );
}

function entries (doclets) {
  let list = [];
  doclets.forEach(doclet => {
    list.push(entry(doclet));
  });
  return list;
}

function Sidebar ({doclets}) {
  let packages  = doclets.packages.length
    ? (<div className="packages">{entries(doclets.packages)}</div>)
    : (<div></div>);

  let functions  = doclets.functions.length
    ? (<div className="functions">{entries(doclets.functions)}</div>)
    : (<div></div>);

  let constants  = doclets.constants.length
    ? (<div className="constants">{entries(doclets.constants)}</div>)
    : (<div></div>);

  let members  = doclets.members.length
    ? (<div className="members">{entries(doclets.members)}</div>)
    : (<div></div>);

  let others  = doclets.others.length
    ? (<div className="others">{entries(doclets.others)}</div>)
    : (<div></div>);

  return (
    <div id="sidebar" className="opened sidebar flexbox-col">
      <div className="docstypes">
        <span className="docstype user-docs">User docs</span>
        <span className="docstype devs-docs">Developer docs</span>
      </div>
      { packages  }
      { functions }
      { constants }
      { members   }
      { others    }
    </div>
  );
}

export default Sidebar;
