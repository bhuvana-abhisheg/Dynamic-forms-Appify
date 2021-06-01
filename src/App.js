import { openDB } from "idb";
import { useEffect } from "react";
import DynamicForm from './components/dynamicForm/DynamicForm';
import * as DBConstants from './DBConfig';

export default function App() {
  useEffect(() => {
    createDB();
  }, []);

  const createDB = async () => {
    try {
      await openDB(DBConstants.DB_NAME, DBConstants.DB_VERSION, {
        upgrade(db) {
          db.createObjectStore(DBConstants.DB_STORE_ACCOUNTS, {
            autoIncrement: true
          });
        }
      });
    } catch(error) {
      console.log(`error while creating db ${error}`);
    }
    
  }
  return (
    <div className="container">       
      <DynamicForm />
    </div>
  );
}