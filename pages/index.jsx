import React, {useEffect, useState} from "react";
import Header from "./elements/header";
import Fade from 'react-bootstrap/Fade';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import Footer from "./elements/footer";
import List from "./elements/list";




export default function Site() {

  const [page, setPage] = useState('home');
  const localLightMode = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("LIGHT_MODE")) : '';
  const [lightmodeon, setLightmodeon] = useState(localLightMode);
  const[fade, setFade] = useState(false);

    setTimeout(() => {
      setFade(true)
    }, 300)

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
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage} />
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card card-transparent margin-start col-8 mb-4 mb-md-0 py-4 d-flex align-items-center text-center">
       <div className="card-body">
          <Fade in={fade}>
            <img className="shadow-2-strong mb-5 card-img-top mx-auto" src="05.png" style={{width:"120px", transitionDuration:"500ms", transitionDelay:"200ms"}}/>
          </Fade>
          <Fade in={fade}>
            <h1 className="card-title mb-4" style={{transitionDuration:"500ms", transitionDelay:'700ms'}}>Chapuis Dylan</h1>
          </Fade>
          <Fade in={fade}>
            <h4 className="card-text mb-4" style={{transitionDuration:"500ms", transitionDelay:"1.2s"}}>Développeur Web</h4>
          </Fade>
          <ul className="list-unstyled mb-0 mt-5 row justify-content-center">
                  <Link href="https://github.com/CDylan-source">
                    <a className="px-1 col-2" target={"blank"}>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/chapuis-dylan-373679210/">
                    <a className="px-1 col-2" target={"blank"}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                  </Link>
            </ul>
        </div>
      </div>
    </div>
    <div className="container d-flex justify-content-center my-2 my-sm-5 text-center">
      <h2>Bienvenue sur mon Portfolio</h2>
    </div>
    <List />
    <Footer/>
  </div>
);
}