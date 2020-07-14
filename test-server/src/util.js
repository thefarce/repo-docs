import React     from 'react';
import striptags from 'striptags';

function formatParagraphs (string) {
  let paragraphs = striptags(string, [], '\n\n').split(/\n\n+/g);
  let list = [];

  paragraphs.forEach(para => {
    list.push(<p className='description-paragraph'>{para}</p>);
  });

  return (
    <div className="paragraphs"> 
      {list}
    </div>
  );
}

export default {
  formatParagraphs
};
