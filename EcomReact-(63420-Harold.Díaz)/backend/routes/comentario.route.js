import { Router } from "express";

import { getComentarios, saveComentario, updateComentario, deleteComentario } from "../controllers/comentario.controller.js";

const router = Router();

router.get("/get", getComentarios);
router.post("/save", saveComentario);
router.put("/update/:id", updateComentario);
router.delete("/delete/:id", deleteComentario);

export default router;
