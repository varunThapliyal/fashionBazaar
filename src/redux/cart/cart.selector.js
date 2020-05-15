import {createSelector} from'reselect';



const selectDropdown = state => state.cartDropdown;



export const showDropdownItems= createSelector(
    [selectDropdown],
    cartDropdown => cartDropdown.cart_items
)

export const hiddenStatusSelector = createSelector(
    [selectDropdown],
    cartDropdown => cartDropdown.hidden
)
console.log(showDropdownItems);
export const showDropdownQuantity= createSelector(
    [showDropdownItems],
    cart_items =>
    cart_items.reduce((acc,cart_item)=>
        acc+cart_item.quantity
    ,0)
)
export const showCartTotal= createSelector(
    [showDropdownItems],
    cart_items =>
    cart_items.reduce((acc,cart_item)=>
        acc+cart_item.quantity*cart_item.price
    ,0)
)