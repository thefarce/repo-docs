import React     from 'react';
import striptags from 'striptags';
import './FunctionParams.scss';

function FunctionParams ({params=[]}) {
  let list  = [];

  params.forEach(param => {
    list.push(
      <div className="param">
        <span className="name">{param.name}</span>
        <span className="types">{param.type.names.join(',')}</span>
        <span className="description">{
          striptags(param.description,[],'\n\n')
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

export default FunctionParams;
