import React from 'react';
import FormInput from '../form/form.component';
import CustomButton from '../button/button.component';
import {auth,createUserProfile} from '../../firebase/firebase.utils';
import './sign-up.style.scss';





export default class SignUp extends React.Component{
  constructor(){
      super();
      this.state={
          displayName:'',
          email:'',
          password:'',
          confirmPassword:''
      }

  }

  handleChange = (e) => {
       const{value,name}  = e.target;
       
       this.setState({[name]:value});
  }

  handleSubmit = async(e) => {
        e.preventDefault();
       const{displayName,email,password,confirmPassword}=this.state;
       

       if(password!==confirmPassword){
           alert("password doesn't match");
       }
       console.log(email,password);

       try{
        const{user} = await auth.createUserWithEmailAndPassword(email,password); 
        
        await createUserProfile(user,{displayName});

        this.setState({
          displayName:'',
          email:'',
          password:'',
          confirmPassword:''
        })
       }   
       catch(e){
        console.log("Error In signup ");
       }           



  }

  render(){
      return(

            <div className='sign-up'>
                <h1 className='title'>I do not have a account</h1>
                <p>Sign Up with your email and password</p>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label='Display Name'               
                    />

                    <FormInput 
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label='email'               
                    />
                    
                    <FormInput 
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='password'               
                    />
                    
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    label='confirm password'               
                    />


                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>

            </div>


      )
  }





} 