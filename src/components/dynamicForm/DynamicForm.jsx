import { useState } from 'react';
import { openDB } from 'idb';
import * as DBConstants from '../../DBConfig';
import {FormContext} from '../../FormContext';
import Element from '../Element';
import formJSON from '../../formElement.json';
import './styles.css';

export default function DynamicForm() {
    const [elements,setElements] = useState(formJSON[0]);  
    const title  = elements.title;
    const fields = elements['form'].fields ; 
    
    const handleSubmit = async event => {
      event.preventDefault();
      try {
        const db = await openDB(DBConstants.DB_NAME, 1);  
        const tx = db.transaction(DBConstants.DB_STORE_ACCOUNTS, "readwrite");
        const store = await tx.objectStore(DBConstants.DB_STORE_ACCOUNTS);
        await store.put(elements.form.fields);
        await tx.done;
        resetFormValues();
      } catch(error){
        console.log(`error while writing to indexed db ${error}`);
      }
    }

    const resetFormValues = () => {
      let resetElements = {...elements};
      resetElements.form.fields.forEach(field => field.field_value = "");
      setElements(resetElements);
    }
  
    const handleChange = (id,event) => {
      const newElements = {...elements};
      newElements.form.fields.forEach( field => {
        const { field_type, field_id } = field;
        if(id === field_id){
          switch(field_type){
            case 'checkbox':
                field['field_value'] = event.target.checked;
                break;
            default:
              field['field_value'] = event.target.value;
              break;
          }        
        }
        setElements(newElements);
      });
    }
  
    return (
      <FormContext.Provider value={{handleChange}}>
        <div className="form-container mt-3">        
          <form className="col-lg-6">
            <h3 className="title-text">{title}</h3>
            { 
              fields ? fields.map((field,index)=>
                                    <Element key={index} field={field}/>) : null 
            }        
            <button onClick={handleSubmit} type="button" className="btn-lg btn-primary text-center">
              Create Account
            </button>
          </form>
        </div>
      </FormContext.Provider>
    );
}