import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HRPeHJOMgVIM5nboN9l4uvG7v9iBsvH4I4cigFqFDEXbJKkEss7HVjPypqkMXruInH0mWwPcPql9M2ppNDbJK2C00hO4rYdVD";

    const onToken = token => {
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        >
            <button className='custom-button'>Pay Now</button>
        </StripeCheckout>
    );
}

export default StripeCheckoutButton;