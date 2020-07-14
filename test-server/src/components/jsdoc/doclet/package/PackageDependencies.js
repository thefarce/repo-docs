import React     from 'react';
import './PackageDependencies.scss';

function _dependency (token, version) {
  return (
    <a href={'https://www.npmjs.com/package/'+token}
      target="_blank"
      className='dependency'
      rel="noopener noreferrer"
    >
      <span className='token'>{token}</span>
      <span className='version'>{version}</span>
    </a>
  );
}

function PackageDependencies ({deps}) {
  let deps_list = [];

  let pkgs = Object.keys(deps);
  pkgs.forEach(pkg => {
    deps_list.push(_dependency(pkg, deps[pkg]));
  });

  return (
    <div className='dependency-list'>
      {deps_list}
    </div>
  );
}

export default PackageDependencies;
