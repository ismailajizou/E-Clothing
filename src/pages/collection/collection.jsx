import React from 'react';
import { useParams } from 'react-router';
import CollectionItem from '../../components/collection-item/collection-item';
import { useCollectionWithURL } from '../../utils/customHooks/shopHooks';
import './collection.scss';

const CollectionPage = () => {
    const { collectionId } = useParams()
    const collection = useCollectionWithURL(collectionId);
    const { title, items } = collection;
    return ( 
        <div className='collection-page'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
     );
}
 
export default CollectionPage;