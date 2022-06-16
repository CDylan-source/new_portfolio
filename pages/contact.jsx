import React, {useState, useEffect} from "react";
import Header from "./elements/header";
import Footer from "./elements/footer";

export default function Contact(){

    const [page, setPage] = useState('contact');
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
        <div className={lightmodeon ? "body_light d-flex flex-column" : "body_dark d-flex flex-column"}>
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage}/>
    <div className="container d-flex flex-column margin-start">
      </div>
    <Footer/>
  </div>
    )
}