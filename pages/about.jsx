import React, {useState, useEffect} from "react";
import Header from "./elements/header";
import Footer from "./elements/footer";
import { Fade } from "react-bootstrap";
import Button from "./elements/button";





export default function About() {

    const [page, setPage] = useState('about');
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
    const[fade, setFade] = useState(false);
    setTimeout(() => {
      setFade(true)
    }, 300)

  return(
  <div className={lightmodeon ? "body_light d-flex flex-column" : "body_dark d-flex flex-column"}>
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage}/>
    <div className="container d-flex flex-column margin-start">
      <div className="card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 col-8">
        <Fade in={fade}>
          <p className="card-text fs-5" style={{transitionDuration:"400ms"}}>Depuis toujours passionné par l’informatique et les nouvelles technologies, j’ai rejoint la formation de développeur web au sein de l’Access Code School en avril 2021.</p>
        </Fade>
      </div>
      <div className="card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 offset-md-6 col-8 offset-4">
        <Fade in={fade}>
          <p className="card-text fs-5" style={{transitionDuration:"400ms", transitionDelay:"500ms"}}>Ça a été pour moi une réelle révélation, le plaisir de transformer l’abstrait en concret, le code en page web, m’a rappelé ma première passion, les mathématiques.</p>
        </Fade>
      </div>
      <div className="card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 col-8">
        <Fade in={fade}>
          <p className="card-text fs-5" style={{transitionDuration:"400ms", transitionDelay:"900ms"}}>Je me plais à continuer d’apprendre et effectuer mes veilles technologiques. Récemment, c’est sur React que mon dévolu s’est jeté, ce framework associé à Nextjs est d’une impressionante efficacité.</p>
        </Fade>
      </div>
    </div>
    <Button href='/portfolio'>Aller voir mon Portfolio</Button>
    <Footer/>
  </div>
);
}