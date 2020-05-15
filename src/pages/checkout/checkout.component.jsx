import React from 'react';
import './checkout.style.scss';
import {createStructuredSelector} from 'reselect';
import {showDropdownItems,showCartTotal} from '../../redux/cart/cart.selector';
import {connect} from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/Stripe/stripe.component'



const CheckoutPage = ({cartItems,cartTotal})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
        <span>Description</span>

        </div>
        <div className="header-block">
        <span>Quantity</span>

        </div>
        <div className="header-block">
        <span>Price</span>
        </div>
        <div className="header-block">
        <span>Remove</span>
        </div>
        </div>
        {
            cartItems.map((cartItem)=>(
            <CheckoutItem key={cartItem.id} item={cartItem}/>
            ))
        }
        
               <div className="total">TOTAL:{cartTotal}INR</div>
               
               <div className="test-warning">
                   *Please use the following card details for payment
                   <br/>
                   4242 4242 4242 4242  -Exp:01/21 CVV:123
               </div>
                  {
                      cartTotal?<StripeCheckoutButton price={cartTotal}/>:''
                  }

               
        
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems:showDropdownItems,
    cartTotal:showCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);