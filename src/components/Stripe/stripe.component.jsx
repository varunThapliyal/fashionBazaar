import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{
    const priceForStripe =price*100;
    const publishableKey='pk_test_5DqAEplRsgtshLeYYRkP9bbX00L3vjtxSH';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
    return(
     <StripeCheckout
     label='Pay Now'
     name='Fashion Bazaar Pvt. Ltd'
     billingAddress
     shippingAddress
     currency="INR"
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is ${price} INR`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
     
     />       
    )
}

export default StripeCheckoutButton; 