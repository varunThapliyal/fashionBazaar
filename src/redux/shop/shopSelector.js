import {createSelector} from 'reselect';

const ShopInput = state=> state.ShopItems;



export const ShopItemsList = createSelector(
    [ShopInput],
    ShopItems => ShopItems.collections
)

export const ItemsArrayForOverview = createSelector(
    [ShopItemsList],
    collections=> Object.keys(collections).map(key=>collections[key])
) 
export const CorrespondingCategory = (category) =>

         createSelector(
             [ShopItemsList],
            collections => collections[category]
         )

         
