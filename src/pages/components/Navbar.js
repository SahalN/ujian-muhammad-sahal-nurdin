/** @format */
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className='m-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <h1 className=' text-3xl  font-extrabold'>Catatan Harian Sahal</h1>
          </div>
          <div className='ml-auto'>
            <Link
              href='/'
              className='w-32 p-2 mr-3 text-center rounded-md bg-[#BBAB8C] text-white font-semibold'>
              Beranda
            </Link>
          </div>
          <div>
            <Link
              href='/createnote'
              className='w-32 p-2 text-center rounded-md bg-[#BBAB8C] text-white font-semibold'>
              Tambah
            </Link>
          </div>
        </div>

        <div>
          <p className='text-justify my-3 ml-4 indent-10'>
            Selamat datang di "Catatan Harian Programmer Sahal!" Di sini, kita
            bisa berbagi pengalaman, saling dukung dalam mengatasi setiap
            tantangan harian dalam dunia pengembangan perangkat lunak. Dengan
            desain yang ramah pengguna, memantau setiap langkah kita dalam
            membangun perangkat lunak jadi lebih menyenangkan. Dari
            menyelesaikan bug hingga mengoptimalkan database, serta melakukan
            penyesuaian antarmuka dengan bantuan Tailwind CSS, semuanya bisa
            dicatat dengan mudah. Platform ini bukan hanya tempat untuk mencatat
            pengalaman pribadi, tapi juga sebagai sumber inspirasi dan dukungan
            bagi pengembang di seluruh dunia. Ayo, bersama-sama kita sambut
            setiap pencapaian kecil dan saling menginspirasi dalam komunitas
            pengembang yang luar biasa ini! 🚀✨
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
