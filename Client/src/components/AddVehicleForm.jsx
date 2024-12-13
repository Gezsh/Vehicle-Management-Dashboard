import React, { useState } from "react";
import axios from "axios";

const AddVehicleForm = ({ onCarAdded }) => {
    const [VidecleName, setVidecleName] = useState("");
    const [Status, setStatus] = useState("Active");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/vehicles/addVehicles", {
                VidecleName,
                Status,
            });
            setVidecleName("");
            setStatus("Active");
            onCarAdded();
        } catch (error) {
            console.error("Error adding vehicle:", error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Vehicle Name"
                value={VidecleName}
                onChange={(e) => setVidecleName(e.target.value)}
                required
            />
            <select value={Status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Under Maintenance">Under Maintenance</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
            </select>
            <button type="submit">Add Vehicle</button>
        </form>
    );
};

export default AddVehicleForm;
