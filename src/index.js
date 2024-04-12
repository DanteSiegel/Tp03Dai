import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from
"./modules/omdb-wrapper.js"

import express  from "express"
import res from "express/lib/response.js";
const app = express();
const port = 3000

app.get("/", (req, res) => {res.send("Hola")} ) 

app.get("/", (req, res) => {res.send("Hola")} ) 

app.get("/", (req, res) => {res.send("Hola")} ) 

app.listen(port, () => {   console.log(`Listening on http://localhost:${port}`)})