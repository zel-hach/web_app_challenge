import React, { useEffect, useRef, useState } from 'react'
import Login from './Components/LoginPages/login';
import Register from './Components/LoginPages/Register';
import Lottie from 'lottie-web';
import myLottie from './assets/Animation - 1715870869259.json';


export default function LondingPage() {
    const [login, setLogin] = useState(false);
    const lottieRef = useRef(null);

    useEffect(() => {
      if (lottieRef.current) {
        const animation = Lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: myLottie,
        });
  
        return () => {
          animation.destroy();
        };
      }
    }, []);

  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-20 p-20 rounded-md shadow-2xl bg-gradient-to-r from-gray-900 to-transparent'>
        <div className='flex justify-center w-3/2' data-aos='zoom-in'>
        <div ref={lottieRef} />
      </div>
      {
        login?
        <Login setLogin={setLogin}></Login>:
        <Register setLogin={setLogin}></Register>
      }
  </div>
  )
}
