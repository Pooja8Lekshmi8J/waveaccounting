import React, { useState, useEffect } from 'react';
import './App.css';
import Customers from './Containers/CustomerList';
import EditCustomerModal from './Components/EditCustomerModal';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://waveaccounting.github.io/se-challenge-fe-customers/settings.json');
      const data = await response.json();

      setValues(data?.customers);
    }
    fetchData();

  }, []);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setValues([...values, newRow])
      : setValues(
        values.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newRow;
        })
      );
  };

  return (
    <div className="App">

      <Customers values={values} handleEditRow={handleEditRow} />

      {modalOpen && (
        <EditCustomerModal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && values[rowToEdit]}
        />
      )}

    </div>
  );
}

export default App;
