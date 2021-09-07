import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import useForm from '../../utils/customHooks/useForm';


const SignUp = () => {
    const INITIAL_STATE = {displayName: '', email: '', password: '', confirmPassword: '' };
    const { values: 
        {displayName, email, password, confirmPassword}, 
        handleChange } 
        = useForm(INITIAL_STATE);

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword){
            alert("passwords don't match !");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            handleChange(INITIAL_STATE);
        } catch (error) {   
            console.error(error)
        }
    };

    return ( 
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
        );
}
 
export default SignUp;
