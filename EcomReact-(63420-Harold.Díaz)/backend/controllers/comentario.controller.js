import Comentario from "../models/comentario.model.js";

// Obtener todos los comentarios
export async function getComentarios(req, res) {
  try {
    const comentariosList = await Comentario.find();
    res.send(comentariosList);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error, msg: "Algo salió mal" });
  }
}

// Guardar un nuevo comentario
export async function saveComentario(req, res) {
  const { comentario } = req.body;
  try {
    const nuevoComentario = await Comentario.create({ comentario });
    console.log("Comentario guardado exitosamente...", nuevoComentario);
    res.status(201).send(nuevoComentario);
  } catch (error) {
    console.error("Error al guardar el comentario:", error);
    res.status(500).send({
      error: error.message,
      msg: "Algo salió mal al guardar el comentario",
    });
  }
}

// Actualizar un comentario existente
export async function updateComentario(req, res) {
  const { id } = req.params;
  const { comentario } = req.body;
  try {
    await Comentario.findByIdAndUpdate(id, { comentario });
    res.send("Comentario actualizado exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).send({ error, msg: "Algo salió mal" });
  }
}

// Eliminar un comentario
export async function deleteComentario(req, res) {
  const { id } = req.params;
  try {
    await Comentario.findByIdAndDelete(id);
    res.send("Comentario borrado exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).send({ error, msg: "Algo salió mal" });
  }
}
