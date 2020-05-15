import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../button/button.component';
import  {AddCartItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import './collection-item.style.scss';


const CollectionItem = ({item,Add_Item}) =>{

    const{imageUrl,name,price} = item;
    return(
        <div className='collection-item'>
        <div className='image' style={{
        backgroundImage:`url(${imageUrl})`
    }}
    />
                 <div className='collection-footer'>
                            <span className='name'>{name}</span>
                            <span className='price'>{price}</span>  
                 </div>
           <CustomButton inverted onClick={()=>Add_Item(item)}>Add to cart</CustomButton>
    </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    Add_Item: item => dispatch(AddCartItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);