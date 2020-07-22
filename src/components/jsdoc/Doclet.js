import React          from 'react';
import FunctionDoclet from './doclet/FunctionDoclet';
import PackageDoclet  from './doclet/PackageDoclet';
import util           from '../../util';
import './style.scss';

function Doclet ({data}) {
  //let raw = (<pre style={{textAlign: 'left'}}>{JSON.stringify(data, undefined, 2)}</pre>);
  let content = '';

  if (data.kind === 'member' || data.memberof) {
  }

  if (data.kind === 'package') {
    content = (<PackageDoclet data={data} />);
  }

  if (data.kind === 'function') {
    content = (<FunctionDoclet data={data} />);
  }

  return (<div id={util.normalizeName(data.kind, data.name)}>{content}</div>);
}

export default Doclet;
