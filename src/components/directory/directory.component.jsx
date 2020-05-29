import React from 'react';
import '../menu-item/menu-item.component';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import {HomepageItems} from '../../redux/directory/directorySelector';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

const Directory=({sections})=> 
   
    
      (
           <div className='directory-menu'>
              {
                  sections.map(({id,title,imageUrl,size,linkUrl})=>
                  (
                      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />

                  )
                  )
              }
           </div>
       );

    const mapStateToProps =createStructuredSelector({
         sections:HomepageItems
    })


export default connect(mapStateToProps)(Directory);