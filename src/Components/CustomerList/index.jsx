import React from 'react';
import { BsFillPencilFill } from "react-icons/bs";
import './index.css';

const Customers = (props) => {

    const { values, handleEditRow } = props;

    return (
        <div className="table-wrapper">

            <header className="header">
                <img src="Assets/img/wave.svg" alt="Logo" className="logo"/>
                <h2 className="title">Customer List</h2>
            </header>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="expand">Email</th>
                        <th>Channel</th>
                        <th>Address</th>
                        <th>Postal</th>
                        <th>City</th>
                        <th>Province</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {values && values.map((item, index) => {

                        return (
                            <tr key={index}>

                                <td>{item?.name}</td>
                                <td className="expand" >{item?.email}</td>
                                <td>{item?.channel}</td>
                                <td>{item?.address}</td>
                                <td>{item?.postal}</td>
                                <td>{item?.city}</td>
                                <td>{item?.province + ' (Canada)'}</td>

                                <td className="fit">
                                    <span className="actions">
                                        <BsFillPencilFill className="edit-btn" onClick={() => handleEditRow(index)} />
                                    </span>
                                </td>

                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    )
};

export default Customers;
