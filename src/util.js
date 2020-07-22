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

function normalizeName (kind, name) {
  let token = `${kind}__${name}`;
  return token.replace(/[\W]+/g,'-');
}

export default {
  formatParagraphs,
  normalizeName,
};
