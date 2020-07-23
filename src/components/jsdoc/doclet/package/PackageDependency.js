import React     from 'react';

function PackageDependency (token, version) {
  return (
    <a
      href      = {'https://www.npmjs.com/package/'+token}
      target    = "_blank"
      className = 'dependency'
      rel       = "noopener noreferrer"
    >
      <span className='token'>{token}</span>
      <span className='version'>{version}</span>
    </a>
  );
}

export default PackageDependency;
