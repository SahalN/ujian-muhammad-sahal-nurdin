/** @format */

const mongoose = require("mongoose");
import Note from "../../../model/Note";

async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).end();
  }

  const { id } = req.query;

  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/sahalCRUD", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("DB CONNECTED"));
  } catch (error) {
    console.log(error);
  }
  try {
    const deleteNote = await Note.deleteOne({ _id: id });
    return res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Note Deleted" });
  } finally {
    mongoose.connection.close();
  }
}

export default handler;
