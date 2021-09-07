import React from 'react';
import FormInput from '../form-input/form-input';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './signin.scss';
import CustomButton from '../custom-button/custom-button';
import useForm from '../../utils/customHooks/useForm';

const SignIn = () => {
    const { values: {email, password}, handleChange } = useForm({ email: '', password: '' });

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.error(error)
        }
        
    }
    return ( 
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='email' 
                    required/>
                <FormInput
                    name='password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    label='password'
                    required/>
                <div className='buttons'>
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}
 
export default SignIn;