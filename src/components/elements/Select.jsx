import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const Select = ({ field_id, field_label, field_options }) => {
  const { handleChange } = useContext(FormContext);
    return(
      <>
        <label htmlFor="selectInput" className="form-label col-lg-6">
          {field_label}
        </label>
        <select className="form-select mb-3" 
                aria-label="Select input"
                onChange={event => handleChange(field_id,event)}>
          <option>Select {field_label}</option>
          {
            field_options.length > 0 && field_options.map((option,i) => 
              <option value={option.option_label} key={i}>
                {option.option_label}
              </option>
            )
          }
        </select>
      </>
    )
}

export default Select;