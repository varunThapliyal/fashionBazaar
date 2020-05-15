import React from 'react';
import FormInput from '../../components/form/form.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

import CustomButton from '../button/button.component';
import './sign-in.style.scss';



class SignIn extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    handleChange = (e) => {
       const{name,value}=e.target;
       this.setState({[name]:value});
    }
    handleSubmit = async(e) => {
        const{email,password}= this.state;
         e.preventDefault();
         try{
         await auth.signInWithEmailAndPassword(email,password);
         this.setState({email:'',password:''});  
         }
         catch(e){
             console.log('Error in Sign In');
         }
    }

    render(){

     return(
           <div className='sign-in'>
               <h1 className='title'>I already have an account</h1>
               <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                       type='email'
                       handleChange={this.handleChange}
                       value={this.state.email}
                       name='email'
                       label='email'
                       required
                    />
                    <FormInput
                       type='password'
                       handleChange={this.handleChange}
                       value={this.state.password}
                       name='password'
                       label='password'
                       required
                    />
                    
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>{' '}
                    Sign In With Google{' '}
                    </CustomButton>
                    </div>
                

                    
                </form>

               </div>

     )

    }
}
export default SignIn;