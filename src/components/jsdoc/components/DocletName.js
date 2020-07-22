import React           from 'react';
import DocletReference from './DocletReference';
import './DocletName.scss';

function DocletName ({data}) {
  // let raw = (<pre>{JSON.stringify(data, undefined, 2)}</pre>);

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

  let refs = '';
  if (data.meta) {
    refs = (<DocletReference references={data.meta} />);
  }

  return (
    <h1 className='identifier'>
      <span className='kind'>{data.kind}</span>
      {id_name}
      {refs}
      {/*raw*/}
    </h1>
  );
}

export default DocletName;
