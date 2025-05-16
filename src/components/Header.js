import Link from 'next/link';

export default function Header() {
  return (
    
    <header className="w-full h-1/8 flex items-center justify-center">
      <div className="w-9/10 h-full flex justify-between items-end">
        <nav>
          <Link
          className='size-16 border-2 rounded-2xl border-black flex justify-center items-center' 
          href="/home"
          >
          <img src="/logo_u_festival.png" alt="logo" width="30px" height="30px"></img>
          </Link>
        </nav>
        <div className="size-16"></div>
        <div className="size-16"></div>
        <button className="size-16 border-2 rounded-2xl border-black flex justify-center items-center">dark mode</button>
        <button className="size-16 border-2 rounded-2xl border-black flex justify-center items-center">language</button>
      </div>
        
    </header>
  );
}