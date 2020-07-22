import React           from 'react';
import './PageContent.scss';

function PageContent (props) {
  let raw = (<pre>{JSON.stringify(props.data, undefined, 2)}</pre>);

  return (
    <div id="page-content">
      Page Content
      {props.children}
    </div>
  );
}

export default PageContent;
