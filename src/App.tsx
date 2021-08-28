import React, { useEffect } from 'react';
import { AppRouter } from './components/app-router/app-router';
import Aos from "aos";
import "aos/dist/aos.css";
import GTM from "react-gtm-module";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true
    });

    GTM.initialize({
      gtmId: "GTM-WTT22V9"
    })
  }, []);

  return (
    <AppRouter />
  );
}

export default App;
