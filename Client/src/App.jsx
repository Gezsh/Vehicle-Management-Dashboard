import React, { useState, useEffect } from "react";
import axios from "axios";
import VehicleTable from "./components/VehicleTable";
import AddVehicleForm from "./components/AddVehicleForm";
import "./App.css";

const App = () => {
    const [cars, setCars] = useState([]);

    // Fetch all vehicles from the backend
    const fetchCars = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/vehicles/allVehicles");
            setCars(response.data);
        } catch (error) {
            console.error("Error fetching vehicles:", error);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <div className="app">
            <h1>Vehicle Management Dashboard</h1>
            <AddVehicleForm onCarAdded={fetchCars} />
            <VehicleTable cars={cars} onStatusUpdated={fetchCars} />
        </div>
    );
};

export default App;
