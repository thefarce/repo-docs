import React           from 'react';
import DocletName      from '../components/DocletName';
import FunctionParams  from './function/FunctionParams';
import FunctionReturns from './function/FunctionReturns';
import DocletDesc      from '../components/DocletDesc';
import util            from '../../../util';
import './FunctionDoclet.scss';

function FunctionDoclet ({data}) {
  // let raw = (<pre>{JSON.stringify(data, undefined, 2)}</pre>);

  return (
    <div className='doclet function'>
      <DocletName      data    = {data}             />
      <DocletDesc      desc    = {data.description} />
      <FunctionParams  params  = {data.params}      />
      <FunctionReturns returns = {data.returns}     />
      {/* raw */}
    </div>
  );
}

export default FunctionDoclet;
