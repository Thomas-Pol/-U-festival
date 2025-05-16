'use client';

export default function LoadingAnimation() {

setTimeout(() => {
    window.location.href = '/home';
}
, 7500);

  return (
      <div className="absolute bg-white w-full h-full left-0 top-0 flex flex-col justify-center items-center">
         <img className="animate-heartpulse" src="/logo_heart_only.png" alt="❤️U Festival" width="50px"></img>
         <img src="/logo_u_only.png" alt="❤️U Festival" width="50px"></img>
      </div>
  );
}