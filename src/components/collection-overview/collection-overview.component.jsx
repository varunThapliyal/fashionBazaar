import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.style.scss';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {ItemsArrayForOverview} from '../../redux/shop/shopSelector';
import './collection-overview.style.scss';


const CollectionOverview  = ({collections})=>(
    <div className='collection-overview'>
               {

                   collections.map(({id,title,items})=>(

                    <CollectionPreview key={id} title={title} items={items}/>
                 ))

               }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:ItemsArrayForOverview
}) 

export default connect(mapStateToProps)(CollectionOverview);


