import React from 'react';
import {Route} from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CategoryCollection from '../../components/CategoryCollection/CategoryCollection.component';



const Shop =({match})=>
        (
             <div className='shop-page'>              
                   <Route exact path={`${match.path}`} component={CollectionOverview}/>
                   <Route exact path={`${match.path}/:collectionID`} component={CategoryCollection}/>
             </div>     
        );
    






export default Shop;