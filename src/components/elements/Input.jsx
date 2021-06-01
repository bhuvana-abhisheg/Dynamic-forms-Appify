import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  return(
      <div className="mb-3">
        <label htmlFor="textInput" className="form-label">{field_label}</label>
        <input type="text" className="form-control" id="textInput" aria-describedby="input Field" 
                autoComplete="off"
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                onChange={event => handleChange(field_id,event)}/>
      </div>
  )
}

export default Input;