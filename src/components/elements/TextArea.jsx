import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const TextArea = ({ field_id, field_label, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  return(
      <div className="mb-3">
        <label htmlFor="textAreaInput" className="form-label">
          {field_label}
        </label>
        <textarea className="form-control" 
                  id="textAreaInput" 
                  aria-describedby="input Field" 
                  placeholder={field_placeholder ? field_placeholder : ''}
                  value={field_value}
                  onChange={event => handleChange(field_id,event)}/>
      </div>
  )
}

export default TextArea;