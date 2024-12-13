
import  express  from "express"
import CarRouter from "./route/car.js"
import  cors  from "cors"
import { Connect } from "./connect/dbConnect.js";

const app = express();
const PORT = 5000;


app.use(express.json());
app.use(cors());

app.use("/api/vehicles",CarRouter)




app.listen(PORT, async() =>{
   await Connect()
    console.log(`Server running on port ${PORT}`)
});