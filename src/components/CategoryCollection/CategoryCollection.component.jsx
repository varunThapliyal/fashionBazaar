import React from 'react';
import {connect} from 'react-redux';
import {CorrespondingCategory}  from '../../redux/shop/shopSelector';
import CollectionItem from '../collection-item/collection-item.component';
import './CategoryCollection.style.scss';




const CategoryCollection = ({category}) =>{
       const{title,items}=category;
return(
    <div className='collection-page'>
        <h2 className="title">{title}</h2>
        <div className="items">
            {
            items.map((item)=> <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>
) 
}

const mapStateToProps = (state,ownProps) => ({
    category:CorrespondingCategory(ownProps.match.params.collectionID)(state)
})

export default connect(mapStateToProps)(CategoryCollection);