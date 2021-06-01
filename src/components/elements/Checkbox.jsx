import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const Checkbox = ({ field_id, field_label, field_value }) => {
  const { handleChange } = useContext(FormContext);
    return(
        <div className="mb-3 form-check">
          <input type="checkbox" 
                 className="form-check-input" 
                 id="checkboxInput" 
                 onChange={event => handleChange(field_id,event)}
                 checked={field_value}/>
          <label className="form-check-label" htmlFor="checkboxInput">
            {field_label}
          </label>
        </div>
    )
}

export default Checkbox;