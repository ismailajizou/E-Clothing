import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';
import { useHistory } from 'react-router-dom';

const CollectionPreview = ({title, items, match, routeName }) => {
    const history = useHistory();
    return ( 
        <div className='collection-preview'>
            <h1 className='title'
            onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
            </h1>
            <div className='preview'>
                { items.filter((_, i) => i < 4).map(item => <CollectionItem key={item.id} item={item} />) }
            </div>
        </div>
     );
}
 
export default CollectionPreview;