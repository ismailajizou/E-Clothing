import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import CartCtx from '../../utils/contextFiles/cart.context';
import './checkout.scss';

const CheckoutPage = () =>  {
    const [{ cartItems, totalPrice }] = useContext(CartCtx);
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${totalPrice}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 10/20 - CVV: 123
            </div>
            <StripeCheckoutButton price={totalPrice} />
        </div>
    );
} 
 
export default CheckoutPage;