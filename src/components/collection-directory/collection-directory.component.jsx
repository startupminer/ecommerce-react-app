import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-directory.styles.scss';
const CollectionDirectory = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4) // filter only 4 items from array
          .map(({id, ...collectionItemProps}) => (
            <CollectionItem key={id} {...collectionItemProps} />
          ))}
      </div>
    </div>
  );
};
export default CollectionDirectory;
