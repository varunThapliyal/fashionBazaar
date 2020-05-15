import React from 'react';
import {Link} from 'react-router-dom';
 import {ReactComponent as Logo} from'../asssets/crown.svg';
 import {auth} from '../../firebase/firebase.utils'
 import './header.style.scss';
 import {connect} from 'react-redux';
 import ShoppingBag from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {getTheUserSelector} from '../../redux/user/user.selector';
import {hiddenStatusSelector} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';




const Header=({currentUser,hidden})=>(
  
       <div className='header'>

         <Link className='logo-container' to='/'>
             <Logo className='logo'/>
         </Link>

         <div className='options'>

             <Link className='option' to='/shop'>Shop</Link>
             <Link className='option' to='/shop'>Contact</Link>
             {
            
               currentUser
               ?
               (
                <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
               )
               :
               (
               <Link className='option' to='/signin'>Sign In</Link>
               )
                
             }
             <ShoppingBag/>

         </div>
         {
           hidden?null:<CartDropdown/>

         }
         

       </div>
    

)

const mapStateToProps = createStructuredSelector({
  currentUser:getTheUserSelector,
  hidden:hiddenStatusSelector
})
export default connect(mapStateToProps)(Header);