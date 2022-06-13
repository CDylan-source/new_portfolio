import React, {useEffect, useState} from "react";
import Header from "./elements/header";




export default function Site() {

  const [page, setPage] = useState('home');
  const localLightMode = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("LIGHT_MODE")) : '';
  const [lightmodeon, setLightmodeon] = useState(localLightMode);

 

    const handleClick = function (e){
        e.preventDefault();
        setLightmodeon(!lightmodeon);
        
    }

    useEffect(() => {
      if(typeof window !== 'undefined'){
          localStorage.setItem("LIGHT_MODE", lightmodeon);
        }
      }, [lightmodeon])

    
   const light_or_dark = {
        sun: lightmodeon ? '#DE6439' : '#fff',
        moon: lightmodeon ? '#fff' : '#DE6439',
        navToggle : lightmodeon ? '' : 'navbar-dark'
    }

  return(
  <div className={lightmodeon ? "body_light" : "body_dark"}>
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage} />
  </div>
);
}


