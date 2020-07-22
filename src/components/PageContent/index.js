import React from 'react';
import './style.scss';

function PageContent (props) {
  return (
    <div id="page-content" className="opened page-content flexbox-col">
      {props.children}
    </div>
  );
}


export default PageContent;
