import React     from 'react';
import util      from './util';
import striptags from 'striptags';
import './style.scss';

function _returns (params=[]) {
  let list  = [];

  params.forEach(param => {
    list.push(
      <div className="return">
        <span className="types">{param.type.names.join(',')}</span>
        <span className="description">{
          util.formatParagraphs(param.description)
        }</span>
      </div>
    );
  })

  return (
    <div className="return-list">
      {list}
    </div>
  );
}

function _params (params=[]) {
  let list  = [];

  params.forEach(param => {
    list.push(
      <div className="param">
        <span className="name">{param.name}</span>
        <span className="types">{param.type.names.join(',')}</span>
        <span className="description">{
          util.formatParagraphs(param.description)
        }</span>
      </div>
    );
  })

  return (
    <div className="param-list">
      {list}
    </div>
  );
}

function _name (data) {
  let id_name = (<span className='name'>{data.name}</span>);

  if (data.kind === 'function') {
    let params = [];
    let pnames = data.meta.code.paramnames;

    for (var i = 0; i < pnames.length; i++) {
      params.push(
        <span className='param'>
          {pnames[i]}
          { (i < pnames.length - 1) ? ',' : '' }
        </span>
      );
    }

    id_name = (
      <span className='name'><span className='token'>{data.name}</span>({params})</span>
    );
  }

  return (
    <h1 className='identifier'>
      <span className='kind'>{data.kind}</span>
      {id_name}
      {data.meta ? _reference(data.meta) : ''}
    </h1>
  );
}

function _reference (ref) {
  let out = Object.assign(
    {
      filename   : '',
      lineno     : '',
      columnno   : '',
      path       : '',
      paramnames : [],
    },
    ref
  );

  return (
    <div className='reference'>
      Found in 
      <span className='filename'>{out.filename}</span>
      starting at line
      <span className='start-line'>{out.lineno}</span>
    </div>
  );
}

function _dependency (token, version) {
  return (
    <a href={'https://www.npmjs.com/package/'+token} target="_blank" className='dependency'>
      <span className='token'>{token}</span>
      <span className='version'>{version}</span>
    </a>
  );
}

function _dependencies (deps) {
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

function _package (data) {
  return (
    <div className='doclet package'>
      {_name(data)}
      {_dependencies(data.dependencies)}
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre> 
      </div>
    </div>
  );
}

function Doclet ({data}) {
  if (data.kind === 'member' || data.memberof) {
    return '';
  }

  if (data.kind === 'package') {
    return _package(data);
  }

  return (
    <div className='doclet function'>
      {_name(data)}
      {_params(data.params)}
      {_returns(data.returns)}
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre> 
      </div>
    </div>
  );
}

export default Doclet;
