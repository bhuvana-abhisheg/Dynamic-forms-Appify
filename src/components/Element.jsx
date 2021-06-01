import React from 'react';
import Input from './elements/Input';
import Select from './elements/Select';
import Checkbox from './elements/Checkbox';
import DatePicker from './elements/DatePicker';
import TextArea from './elements/TextArea';

const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options }}) => {
    switch(field_type) {
        case 'text':
            return(<Input
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    />);
        case 'textarea':
            return(<TextArea
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    />);
        case 'date':
            return(<DatePicker
                    field_id={field_id}
                    field_label={field_label}
                    field_value={field_value}
                    />);
        case 'select':
            return(<Select
                    field_id={field_id}
                    field_label={field_label}
                    field_options={field_options}
                    />);
        case 'checkbox':
            return(<Checkbox
                    field_id={field_id}
                    field_label={field_label}
                    field_value={field_value}
                    />);
        default:
            return null;
    }    
}

export default Element;