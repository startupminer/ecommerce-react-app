import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...formProps }) => {
  return (
    <div className='group'>
    {
        label ? (
            <label
              className={`${
                formProps.value.length ? 'shrink' : ''
              } form-input-label`}
            >
              {label}
            </label>
            ) : null
      }
      <input className='form-input' onChange={handleChange} {...formProps} />
    </div>
  );
};
export default FormInput;
