import React from 'react';
import './form-input.scss';

const FormInput = ({label, handleChange, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={({target}) => handleChange(target.name, target.value)} {...otherProps}/>
            {
                label ? 
                (<label 
                className={`${
                    otherProps?.value?.length ? 'shrink' : ''
                    } form-input-label`}>
                    {label}
                </label>)
                : null 
            }
        </div>
    );
}
 
export default FormInput;