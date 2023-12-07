/** @format */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

const createnote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const noteObj = {
      title: title,
      content: content,
    };
    console.log(noteObj);
    axios.post("api/newNote", noteObj).then(() => {
      alert("Note Added");
    });
  };
  return (
    <div className='h-screen max-w-screen-sm m-auto'>
      <Navbar />
      <section className='h-full max-w-full p-4 mt-4 rounded-md bg-[#F4EAE0]  '>
        <h2 className='text-center'>Create Note</h2>
        <div className='max-w-lg m-auto'>
          <form
            onSubmit={handleSubmit}
            className='flex-col p-4 mt-5 mb-4 rounded-md bg-[#FAF6F0]'>
            <div>
              <input
                onChange={(event) => setTitle(event.target.value)}
                className='w-full p-4 bg-[#F4EAE0]'
                type='text'
                id='title'
                placeholder='Judul'
              />
            </div>
            <div>
              <textarea
                onChange={(event) => setContent(event.target.value)}
                className='w-full p-4 mt-3 bg-[#F4EAE0]'
                type='text'
                id='content'
                placeholder='Konten'></textarea>
            </div>
            <button
              type='submit'
              className='w-32 p-2 mt-2 text-center rounded-md bg-[#BBAB8C] text-white font-semibold'>
              Tambah
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default createnote;
