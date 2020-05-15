import React from "react";
import './checkout-item.style.scss';
import {RemoveItemAction,DecreaseItemQuantity,AddCartItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';


const CheckoutItem = ({item,Remove,DecQty,IncQty})=>{
    const{name,imageUrl,price,quantity} =item;
    const itemPrice=price*quantity;
    return(
        <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>DecQty(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>IncQty(item)}>&#10095;</div>
                </span>
            <span className="price">{itemPrice} INR</span>
            <div className='remove-button' onClick={()=>Remove(item) }>&#10005;</div>
    </div>
    )
}
    


const mapDispatchToProps = (dispatch) =>({
    Remove:  (item) => dispatch(RemoveItemAction(item)),
    DecQty:(item) => dispatch(DecreaseItemQuantity(item)),
    IncQty:(item) => dispatch(AddCartItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);