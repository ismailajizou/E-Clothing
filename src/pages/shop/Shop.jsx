import React, { useEffect, useState } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner';
import './shop.scss';
import ShopCtx from '../../utils/contextFiles/shop.context';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) =>  {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState({});
    
    useEffect(() => {
        const pertsistedCollections = JSON.parse(localStorage.getItem('collections')) || null;
        if(pertsistedCollections){
            setCollections(pertsistedCollections);
            setLoading(false)
        } else {
            const unsubscribe = firestore.collection('collections').onSnapshot(async snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                setCollections(collectionsMap);
                localStorage.setItem('collections', JSON.stringify(collectionsMap));
                setLoading(false)
            });
            return () => unsubscribe();
        }
        // eslint-disable-next-line
    }, []);

    return ( 
        <ShopCtx.Provider value={ collections }>
            <div className='shop-page'>
                <Route exact path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props }/>} 
                />
                <Route path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        </ShopCtx.Provider>
    );
}

export default ShopPage;