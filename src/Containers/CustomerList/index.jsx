import React from 'react';
import CustomerList from "../../Components/CustomerList";

const Customers = (props) => {
    const { values, handleEditRow } = props;

    return (
        <CustomerList values={values} handleEditRow={handleEditRow} />
    );
};

export default Customers;
