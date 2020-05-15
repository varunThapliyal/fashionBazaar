export const AddCartItem = (cartItems,NewItem) =>{

    const itemExists=cartItems.find((cartItem)=>{
                return cartItem.id===NewItem.id
    })

if(itemExists){
    return cartItems.map((cartItem)=>
         cartItem.id===NewItem.id?
         {...cartItem,quantity:cartItem.quantity+1}
         :cartItem
    )

}
   return [...cartItems,{...NewItem,quantity:1}];
}
export const DecItemQuantity = (cartItems,ItemToRemove) =>{

    const itemExists=cartItems.find((cartItem)=>{
                return cartItem.id===ItemToRemove.id
    })

if(itemExists.quantity===1){

   return cartItems.filter((cart_item)=>  cart_item.id!==ItemToRemove.id)
}
       return cartItems.map((cartItem)=>
       cartItem.id===ItemToRemove.id?
       {...cartItem,quantity:cartItem.quantity-1}
       :cartItem
       )
}