import express, { urlencoded } from "express";
import { interfaceController, indexController, shopController, aboutController, parfumeController } from "./controllers/indexController.js";
import { submitController } from "./controllers/submitController.js";
const app = express();

app.use(urlencoded({extended : true}))
app.use(express.static('public'))

app.set("view engine","ejs")

app.get("/", indexController);
app.post("/submit", submitController);
app.get("/interface", interfaceController);
app.get("/shop", shopController);
app.get("/about", aboutController);
app.get("/parfume", parfumeController);

app.listen(3000,()=>{
    console.log("Accept")
})
