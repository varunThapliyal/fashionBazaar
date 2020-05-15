import CartActionType from './cart.types';


export const ToggleDropdown = () =>({
    type: CartActionType.TOGGLE_DROPDOWN,
})


export const AddCartItem  =  (item) => ({
    type:CartActionType.ADD_CART_ITEM,
    payload:item
})

export const RemoveItemAction = (item) =>({
    type:CartActionType.REMOVE_ITEM,
    payload:item
})
export const DecreaseItemQuantity = (item) =>({
    type:CartActionType.DECREASE_QUANTITY,
    payload:item
})

