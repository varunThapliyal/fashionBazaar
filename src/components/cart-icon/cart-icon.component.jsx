import React from 'react';
import {ReactComponent as ShoppingIcon} from '../asssets/shopping-bag.svg';
import './cart-icon.style.scss';
import {ToggleDropdown} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import {showDropdownQuantity} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';





const ShoppingBag = ({ToggleDropdown,itemCount})=>(


    <div className='cart-icon' onClick={ToggleDropdown}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
</div>
)

const mapStateToProps = createStructuredSelector({
    itemCount:showDropdownQuantity

})
const mapDispatchToProps = (dispatch) =>({
    ToggleDropdown: ()=> dispatch(ToggleDropdown()),
}
)
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingBag);



