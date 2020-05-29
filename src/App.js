import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import {Homepage} from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
import {createUserProfile} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {SetCurrentUser} from './redux/user/user.actions';
import {getTheUserSelector} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';




// const HatsPage=() => (
// <div>

//     <h1>HatsPage</h1>

// </div>

// )
class App extends React.Component{

    // constructor(){
    //   super();
    //   this.state={
    //     currentUser:null
    //   }
    // }

     unsubscribeFromAuth=null;
     

    componentDidMount(){
      const{setCurrentUser}=this.props;
     this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
        
      if(userAuth){

        const userRef=await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot=>{
             setCurrentUser({
               currentUser:{
                 id:snapShot.id,
                 ...snapShot.data()
               }
             })
        })
      }

      else{    
        setCurrentUser(userAuth)
      }
       

       
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }


  render(){

    return (
      <div className='App'>
        
        <Header/>
        <Switch>

        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route exact path='/checkout' component={CheckoutPage}/>

        <Route path='/signin' render={()=> this.props.userState ? (<Redirect to='/'/>):(<SignInAndSignUp/>)}/>

        </Switch>

      </div>

)
  }
 

}

const mapStateToProps = createStructuredSelector({
 userState:getTheUserSelector
})

const mapDispatchToProps = (dispatch)=>(
  {
   setCurrentUser: user => dispatch(SetCurrentUser(user))
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(App);
