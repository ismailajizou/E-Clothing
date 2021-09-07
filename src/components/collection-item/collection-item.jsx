import React, { useContext } from 'react';
import './collection-item.scss'
import CustomButton from '../custom-button/custom-button';
import CartCtx from '../../utils/contextFiles/cart.context';
import { cartActionTypes } from '../../utils/reducers/cartReducer';

const CollectionItem = ({item}) => {
    const [, dispatch ] = useContext(CartCtx);
    const {name, price, imageUrl} = item;
    return ( 
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='collection-footer' >
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => dispatch({type: cartActionTypes.ADD_ITEM, payload: item})} inverted> Add to cart </CustomButton>
        </div>
     );
}
 
export default  CollectionItem;