"use client"

import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {

   const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
  };

  return (
    <header className="w-full h-1/8 flex items-center justify-center">
      <div className="w-9/10 h-full flex justify-between items-center">
        <nav>
          <Link
            className='size-16 rounded-2xl shadow-md/40 shadow-black flex justify-center items-center bg-black dark:bg-white' 
            href="/home"
          >
            <img src="/logo_u_festival_dark_mode.png" alt="logo" width="30px" height="30px" className="block dark:hidden"/>
            <img src="/logo_u_festival.png" alt="logo" width="30px" height="30px" className="hidden dark:block"/>
          </Link>
        </nav>
        <div className="size-16"></div>
        <div className="size-16"></div>
        
        <button
          id="darkModeSwitcher"
          onClick={toggleDarkMode}
          className="size-16 bg-black rounded-2xl shadow-md/40 shadow-black flex justify-center items-center dark:bg-white dark:shadow-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="36px" className="dark:fill-black fill-white">
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
          </svg>
        </button>

        <button className="size-16 rounded-2xl shadow-md/40 shadow-black flex justify-center items-center bg-black dark:bg-white dark:shadow-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="36px" className="dark:fill-black fill-white">
            <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/>
          </svg>
        </button>
      </div>
    </header>
  );
}