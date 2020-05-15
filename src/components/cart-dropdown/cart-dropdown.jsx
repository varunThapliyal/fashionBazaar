import React from 'react';
import CustomButton from '../button/button.component';
import './cart-dropdown.style.scss';
import {connect} from 'react-redux';
import {CartItem} from '../cart-item/cart-item.component';
import {showDropdownItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import {withRouter} from'react-router-dom';
import {ToggleDropdown} from '../../redux/cart/cart.actions';




const cartDropDown = ({cart_items,history,dispatch})=> (
   <div className='cart-dropdown'>
       <div className='cart-items'>
           {
                     cart_items.length?(
                        cart_items.map((item)=>(
                            <CartItem key={item.id} item={item} />
                     ))
                     ):(
                         <span className='emptyCart'>Your cart is empty</span>
                     )

               
           }
       </div>
       <CustomButton onClick={()=>{history.push('/checkout')
        dispatch(ToggleDropdown())
    }}>Go to Checkout</CustomButton>
   </div>
)

const mapStateToProps = createStructuredSelector({
    cart_items:showDropdownItems
}
)

export default withRouter(connect(mapStateToProps)(cartDropDown)) ;