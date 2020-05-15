import CartActionType from './cart.types';
import {AddCartItem,DecItemQuantity} from'./cart.utils';

const INITIAL_STATE={
    hidden:true,
    cart_items:[]
}


const CartDropdownReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case CartActionType.TOGGLE_DROPDOWN :
            return{
                ...state,
                hidden:!state.hidden
            }

         case CartActionType.ADD_CART_ITEM :
             return{
                 ...state,
                 cart_items:AddCartItem(state.cart_items,action.payload)
             }   
          case CartActionType.REMOVE_ITEM :
              return{
                  ...state,
                  cart_items:state.cart_items.filter((cart_item)=>
                      cart_item.id!==action.payload.id
                  )
              } 
              
           case CartActionType.DECREASE_QUANTITY:
               return{
                   ...state,
                   cart_items:DecItemQuantity(state.cart_items,action.payload)
               }   

            
        default: return state;
    }

}


export default CartDropdownReducer;