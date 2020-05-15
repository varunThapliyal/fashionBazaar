import React from 'react';
import './cart-item.style.scss';


export const CartItem = ({item:{name,imageUrl,quantity,price}}) =>(

     <div className='cart-item'>
         <img src={imageUrl} alt="item"/>
         <div className='item-details'>
           <span className='name'>{name}</span>
             <span className='price'>
                {quantity} X {price} INR
             </span>
         </div>
     </div>

)


