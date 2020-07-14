import React     from 'react';
import './DocletReference.scss';

function DocletReference ({references}) {
  //let raw = (<pre>{JSON.stringify(references, undefined, 2)}</pre>);

  let out = Object.assign(
    {
      filename   : '',
      lineno     : '',
      columnno   : '',
      path       : '',
      paramnames : [],
    },
    references
  );

  return (
    <div className='reference'>
      Found in 
      <span className='filename'>{out.filename}</span>
      starting at line
      <span className='start-line'>{out.lineno}</span>
      {/*raw*/}
    </div>
  );
}

export default DocletReference;
