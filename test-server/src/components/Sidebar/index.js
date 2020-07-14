import React from 'react';
import './style.scss';

function entry (doclet) {
  return (
    <div className='doclet-link'>{doclet.name}</div>
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
  return (
    <div id="sidebar" className="opened sidebar flexbox-col">
      <div className="docstypes">
        <span className="docstype user-docs">User docs</span>
        <span className="docstype devs-docs">Developer docs</span>
      </div>
      <div className="packages">{entries(doclets.packages)}</div>
      <div className="functions">{entries(doclets.functions)}</div>
    {/*
      <div className="constants">{entries(doclets.constants)}</div>
      <div className="members">{entries(doclets.members)}</div>
      <div className="others">{entries(doclets.others)}</div>
    */}
    </div>
  );
}

export default Sidebar;
