import React, {useState} from "react";
import Header from "./elements/header";




export default function Site() {

  const [page, setPage] = useState('home');
  const [lightmodeon, setLightmodeon] = useState(false);

    const handleClick = function (e){
        e.preventDefault();
        setLightmodeon(!lightmodeon);
    }

    
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


