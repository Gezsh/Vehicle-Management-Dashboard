import express from "express"
import { addVihecle, getAllVihecle, updateStatus } from "../controller/car.js"

const router=express.Router()


router.post("/addVehicles",addVihecle)
router.get("/allVehicles",getAllVihecle)
router.put("/updateStatus/:id",updateStatus)


export default router