import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const DatePicker = ({ field_id, field_label, field_value }) => {
  const { handleChange } = useContext(FormContext);

  return(
      <div className="mb-3">
        <label htmlFor="dateInput" className="form-label">
          {field_label}
        </label>
        <input type="date" 
               className="form-control" 
               id="dateInput" 
               aria-describedby="date input" 
               value={field_value}
               onChange={event => handleChange(field_id,event)}/>        
      </div>
  )
}

export default DatePicker;