import React, { useContext } from 'react';
import CartCtx from '../../utils/contextFiles/cart.context';
import { cartActionTypes } from '../../utils/reducers/cartReducer';
import './checkout-item.scss';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;
    const [ , dispatch ] = useContext(CartCtx)
    return ( 
        <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={() => dispatch({type: cartActionTypes.REMOVE_ITEM, payload: cartItem})}>&#10094;</div>
            <span className='value' >{quantity}</span>
            <div className='arrow' onClick={() => dispatch({type: cartActionTypes.ADD_ITEM, payload: cartItem})}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button'
            onClick={() => dispatch({type: cartActionTypes.CLEAR_ITEM_FROM_CART, payload: cartItem})}>&#10005;</span>
        </div>
     );
}


export default CheckoutItem;