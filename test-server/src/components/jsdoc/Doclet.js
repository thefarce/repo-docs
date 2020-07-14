import React     from 'react';
import FunctionDoclet from './doclet/FunctionDoclet';
import PackageDoclet from './doclet/PackageDoclet';
import './style.scss';

function Doclet ({data}) {
  //let raw = (<pre style={{textAlign: 'left'}}>{JSON.stringify(data, undefined, 2)}</pre>);

  if (data.kind === 'member' || data.memberof) {
    return '';
  }

  if (data.kind === 'package') {
    return (<PackageDoclet data={data} />);
  }

  if (data.kind === 'function') {
    return (<FunctionDoclet data={data} />);
  }

  return '';
}

export default Doclet;
