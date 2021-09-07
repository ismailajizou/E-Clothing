import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import CartCtx from '../../utils/contextFiles/cart.context';
import { cartActionTypes } from '../../utils/reducers/cartReducer';
import './cart-icon.scss';

const CartIcon = () => {
    const [{count}, dispatch] = useContext(CartCtx);
    return (
        <div className='cart-icon' onClick={() => dispatch({ type: cartActionTypes.TOGGLE_CART_HIDDEN})}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{count}</span>
        </div>
    );
}

export default CartIcon;