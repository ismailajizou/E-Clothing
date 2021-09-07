import React from 'react';
import { usePreviewCollections } from '../../utils/customHooks/shopHooks';
import CollectionPreview from '../collection-preview/collection-preview';
import './collections-overview.scss';

const CollectionsOverview = () => {
    const collections = usePreviewCollections();

    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps} />
            ))}
        </div>
    );
}

export default CollectionsOverview;