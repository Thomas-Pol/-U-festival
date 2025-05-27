'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

  export default function Footer() {
    const pathname = usePathname();

    return (
      <footer className="w-full h-1/8 flex justify-center items-center">
        <nav className="flex w-9/10 h-full justify-between items-center">
          {/* home button */}
          <Link
            className={`${
              pathname === '/home' 
                ? 'size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center' 
                : 'bg-[#F03228] size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center'
            }`}
            href="/home"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="36px" fill={`${
              pathname === '/home'
              ? '#F03228'
              : '#FFFFFF'}`}><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/></svg>
          </Link>

          {/* info button */}
          <Link
            className={`${
              pathname === '/info' 
                ? 'size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center' 
                : 'bg-[#F03228] size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center'
            }`}
            href="/info"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="36px" fill={`${
              pathname === '/info'
              ? '#F03228'
              : '#FFFFFF'}`}><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </Link>

          {/* map button */}
          <Link
            className={`${
              pathname === '/map' 
                ? 'size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center' 
                : 'bg-[#F03228] size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center'
            }`}
            href="/map"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill={`${
              pathname === '/map'
              ? '#F03228'
              : '#FFFFFF'}`}><path d="m608-120-255.33-90-181.34 71.33q-18 8.67-34.66-2.16Q120-151.67 120-172v-558.67q0-13 7.5-23t19.83-15L352.67-840 608-750.67 788.67-822q18-8 34.66 2.5Q840-809 840-788.67v563.34q0 11.66-7.5 20.33-7.5 8.67-19.17 13L608-120Zm-36-82.67v-492.66L388-758v492.67l184 62.66Zm66.67 0 134.66-44.66v-499.34l-134.66 51.34v492.66Zm-452-11.33 134.66-51.33V-758l-134.66 44.67V-214Zm452-481.33v492.66-492.66ZM321.33-758v492.67V-758Z"/></svg>
          </Link>

          {/* setlist button */}
          <Link
            className={`${
              pathname === '/setlist' 
                ? 'size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center' 
                : 'bg-[#F03228] size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center'
            }`}
            href="/setlist"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill={`${
              pathname === '/setlist'
              ? '#F03228'
              : '#FFFFFF'}`}><path d="M246.67-279.33h226.66V-346H246.67v66.67Zm120-167.34h226.66v-66.66H366.67v66.66Zm120-167.33h226.66v-66.67H486.67V-614Zm-300 494q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z"/></svg>
          </Link>

          {/* weather button */}
          <Link
            className={`${
              pathname === '/weather' 
                ? 'size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center' 
                : 'bg-[#F03228] size-16 border-2 rounded-2xl border-[#F03228] flex justify-center items-center'
            }`}
            href="/weather"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill={`${
              pathname === '/weather'
              ? '#F03228'
              : '#FFFFFF'}`}><path d="M522-560v-66.67h220V-560H522Zm0-133.33V-760h320v66.67H522ZM304-120.67q-78.02 0-133.01-54.99Q116-230.65 116-308.67q0-48 23-90.16Q162-441 202.67-468v-270.67q0-42.22 29.51-71.77Q261.69-840 303.84-840q42.16 0 71.83 29.56 29.66 29.55 29.66 71.77V-468Q446-441 469-398.83q23 42.16 23 90.16 0 78.02-54.99 133.01-54.99 54.99-133.01 54.99Zm-121.33-188h242.66q0-36.33-16.83-65.66-16.83-29.34-45.83-44.34l-24-14v-306q0-14.73-9.97-24.7-9.97-9.96-24.7-9.96-14.73 0-24.7 9.96-9.97 9.97-9.97 24.7v306l-24 14q-29 15-45.83 44.67t-16.83 65.33Z"/></svg>
          </Link>
        </nav>
      </footer>
    );
  }

