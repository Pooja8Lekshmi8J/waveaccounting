import React, { useState } from "react";
import "./index.css";

const EditCustomerModal = (props) => {

    const { closeModal, onSubmit, defaultValue } = props;

    const [formState, setFormState] = useState(
        defaultValue || {
            name: "",
            email: "",
            channel: "",
            address: "",
            postal: "",
            city: "",
            province: "",
        }
    );
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.name && formState.email) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            if (!formState.name) {
                errorFields.push("name");
            }
            if (!formState.email) {
                errorFields.push("email");
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        console.log(formState, 'JSON Payload');
        onSubmit(formState);
        closeModal();
    };

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input name="name" onChange={handleChange} value={formState.name} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input name="email" onChange={handleChange} value={formState.email} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="channel">Channel</label>
                        <input name="channel" onChange={handleChange} value={formState.channel} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input name="address" onChange={handleChange} value={formState.address} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="postal">Postal</label>
                        <input name="postal" onChange={handleChange} value={formState.postal} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input name="city" onChange={handleChange} value={formState.city} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="province">Province</label>
                        <input name="province" onChange={handleChange} value={formState.province} />
                    </div>

                    {errors && <div className="error">{`Please fill in the required fields: ${errors}`}</div>}

                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Save
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditCustomerModal;
