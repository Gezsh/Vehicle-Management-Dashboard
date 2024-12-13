import mongoose from "mongoose"

const CarSchema= new mongoose.Schema({
         VidecleName:{
            type:String,
            required:[true,"Vihecle Name is mandatory"]
         },
         Status: { 
            type: String, 
            enum: ["Active", "Inactive", "Under Maintenance", "Available", "Unavailable"], 
            required: true 
        },
         lastUpdated: {
             type: Date, 
             default: Date.now }
},{timeseries:true})

const CarModel=mongoose.model("carModel",CarSchema)

export default CarModel