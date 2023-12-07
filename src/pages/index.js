/** @format */

import Link from "next/link";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import axios from "axios";

export async function getStaticProps() {
  const mongoose = require("mongoose");
  const Note = require("../../model/Note.js");

  await mongoose
    .connect("mongodb://127.0.0.1:27017/sahalCRUD", {
      useNewUrlParser: true,
    })
    .then(() => console.log("DB CONNECTED"));

  const notes = await Note.find().sort({ createdAt: "desc" });
  console.log(notes);
  return {
    props: {
      notes: JSON.parse(JSON.stringify(notes)),
    },
  };
}

export default function Home({ notes }) {
  const [visibleNoteId, setVisibleNoteId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const editForm = (noteId) => {
    setVisibleNoteId(noteId);
    const selectedNote = notes.find((note) => note._id === noteId);
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    }
  };

  const updateNote = async () => {
    const noteObj = {
      title: title,
      content: content,
    };
    console.log(noteObj);
    await axios.put(`/api/updateNote?id=${visibleNoteId}`, noteObj).then(() => {
      window.location.reload(false);
    });
  };

  const deleteNote = async (noteId) => {
    await axios.delete(`/api/deleteNote?id=${noteId}`).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <main className='h-screen max-w-screen-sm m-auto'>
      <Navbar />
      <section className=' grow p-4 mt-4 m-3 rounded-3xl bg-[#F4EAE0] '>
        <ul className='max-w-lg m-auto'>
          {notes.map((note, i) => (
            <li className='p-4 mt-5 mb-4 rounded-3xl bg-[#FAF6F0]' key={i}>
              <div>
                <h1 className='text-2xl mb-2 font-semibold '>{note.title}</h1>
              </div>
              <div>
                <p className='text-justify font-light'>{note.content}</p>
              </div>
              <div className='flex justify-end items-center mt-2'>
                <div>
                  <button
                    onClick={() => editForm(note._id)}
                    className='p-2 mr-3 rounded-md bg-[#698269] text-white'>
                    Edit
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => deleteNote(note._id)}
                    className='p-2   rounded-md bg-[#AA5656] text-white'>
                    Hapus
                  </button>
                </div>
              </div>

              {visibleNoteId === note._id && (
                <div>
                  <h2 className='text-center'>Update Note</h2>
                  <form className='flex-col p-4 mt-1 mb-4 rounded-md bg-[##F4EAE0]'>
                    <div>
                      <input
                        className='w-full p-4 bg-[#F4EAE0]'
                        type='text'
                        id='title'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                      />
                    </div>
                    <div>
                      <textarea
                        onChange={(event) => setContent(event.target.value)}
                        className='w-full p-4 mt-3 bg-[#F4EAE0]'
                        type='text'
                        id='content'
                        value={content}></textarea>
                    </div>
                    <div className='flex justify-end items-center'>
                      <div>
                        <button
                          type='button'
                          onClick={() => updateNote()}
                          className='p-2 mr-3 rounded-md bg-[#698269] text-white'>
                          Update
                        </button>
                      </div>

                      <div>
                        <button
                          onClick={() => setVisibleNoteId(null)}
                          className='p-2 rounded-md bg-[#AA5656] text-white'>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
      <footer className='m-3 text-center'>
        <p>&copy; 2023 Muhammad Sahal Nurdin</p>
      </footer>
    </main>
  );
}
