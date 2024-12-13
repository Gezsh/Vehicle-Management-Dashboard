import CarModel from "../model/car.js";

export const addVihecle=async(req,res)=>{
    const { VidecleName, Status } = req.body;
    try {
        const newVehicle = new CarModel({ VidecleName, Status });
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (err) {
        res.status(400).json({ error: 'Error adding vehicle' });
    }
}
export const updateStatus=async(req,res)=>{
    const { id } = req.params;
    const { Status } = req.body;
    try {
        const updatedVehicle = await CarModel.findByIdAndUpdate(
            id,
            { Status, lastUpdated: Date.now() },
            { new: true }
        );
        if (!updatedVehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }
        res.json(updatedVehicle);
    } catch (err) {
        res.status(400).json({ error: 'Error updating vehicle' });
    }
}
export const getAllVihecle=async(req,res)=>{
    try {
        const vehicles = await CarModel.find();
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching vehicles' });
    }
}