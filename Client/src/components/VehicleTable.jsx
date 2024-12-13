import React from "react";
import axios from "axios";

const VehicleTable = ({ cars, onStatusUpdated }) => {
    const updateStatus = async (id, newStatus) => {
        try {
            await axios.put(`http://localhost:5000/api/vehicles/updateStatus/${id}`, {
                Status: newStatus,
            });
            onStatusUpdated();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Vehicle Name</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Update Status</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car._id}>
                            <td>{car.VidecleName}</td>
                            <td>{car.Status}</td>
                            <td>{new Date(car.lastUpdated).toLocaleString()}</td>
                            <td>
                                <button onClick={() => updateStatus(car._id, "Active")}>
                                    Set Active
                                </button>
                                <button onClick={() => updateStatus(car._id, "Inactive")}>
                                    Set Inactive
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehicleTable;
