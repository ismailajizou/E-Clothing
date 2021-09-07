import React, { useContext } from 'react';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item';
import { withRouter } from 'react-router-dom';
import CartCtx from '../../utils/contextFiles/cart.context';
import { cartActionTypes } from '../../utils/reducers/cartReducer';

const CartDropdown = ({history}) => {
    const [ {cartItems}, dispatch ] = useContext(CartCtx);
    return ( 
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                       cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                        )) 
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>
                     )}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch({ type: cartActionTypes.TOGGLE_CART_HIDDEN});
            }}>GO TO CHECKOUT</CustomButton>
        </div>
     );
}

export default withRouter(CartDropdown);