import { Schema, model } from "mongoose";

const comentarioSchema = new Schema(
  {
    comentario: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default model("Comentarios", comentarioSchema, "comentarios");
