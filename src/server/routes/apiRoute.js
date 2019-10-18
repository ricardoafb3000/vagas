import express from 'express';
import modeloNiveisRoute from "./api/modeloNiveisRoute";

export default 
express.Router()
.use("/modelos/niveis", modeloNiveisRoute);