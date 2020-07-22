import React               from 'react';
import DocletName          from '../components/DocletName';
import PackageDependencies from './package/PackageDependencies';
import DocletDesc          from '../components/DocletDesc';
import util                from '../../../util';
import './PackageDoclet.scss';

function Package ({data}) {
  //let raw = (<pre>{JSON.stringify(data, undefined, 2)}</pre>);

  return (
    <div className='doclet package' id={util.normalizeName(data.kind,data.name)}>
      <DocletName data={data} />
      <DocletDesc desc={data.description}/>
      <PackageDependencies deps={data.dependencies} />
    </div>
  );
}

export default Package;
