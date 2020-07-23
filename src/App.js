import React             from 'react';
import Doclet            from './components/jsdoc/Doclet';
import logo              from './assets/thefarce-net-code.png';
import Sidebar           from './components/Sidebar';
import PageContent       from './components/PageContent';
import categorizeDoclets from './categorize-doclets';

import './App.scss';

function App ({doclets}) {
  doclets.sort((a,b) => {
    return (a.kind === 'package' && b.kind !== 'package') ? -1
      :    (a.kind !== 'package' && b.kind === 'package') ?  1
      :    (a.name - b.name);
  });

  let doclet_list = [];
  doclets.forEach(doclet => {
    doclet_list.push(<Doclet data={doclet} />);
  });

  let categorized = categorizeDoclets(doclets);

  return (
    <div className="App">
      <div id="header">
        <img className='App-logo' src={logo} alt="The Farce: code repository"/>
      </div>

			<div id="mainWrapper" className="main-grid clearfix flexbox">
        <Sidebar doclets={categorized}/>
				<div id="page-divider" className="page-divider flexbox-col"></div>
        <PageContent>{doclet_list}</PageContent>
			</div>

      <pre style={{textAlign: 'left'}}>{JSON.stringify(doclets, undefined, 2)}</pre>
    </div>
  );
}

export default App;
