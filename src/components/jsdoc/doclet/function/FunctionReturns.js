import React     from 'react';
import striptags from 'striptags';
import './FunctionReturns.scss';

function FunctionReturns ({values=[]}) {
  let list  = [];

  values.forEach(value => {
    list.push(
      <div className="return">
        <span className="types">{value.type.names.join(',')}</span>
        <span className="description">{
          striptags(value.description,[],'\n\n')
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

export default FunctionReturns;
