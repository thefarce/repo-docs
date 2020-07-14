import React           from 'react';
import DocletReference from './DocletReference';
import util            from '../../../util';
import './DocletDesc.scss';

function DocletDesc ({desc}) {

  let description = util.formatParagraphs(desc);

  return (
    <div className='description doclet-description'>
      {description}
    </div>
  );
}

export default DocletDesc;
