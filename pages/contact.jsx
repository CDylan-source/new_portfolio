import React, {useState, useEffect} from "react";
import Header from "../public/elements/header";
import Footer from "../public/elements/footer";

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
        navToggle : lightmodeon ? '' : 'navbar-dark',
        input : lightmodeon ? 'form-control' : 'form-control input-dark'
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    return(
        <div className={lightmodeon ? "body_light d-flex flex-column" : "body_dark d-flex flex-column"}>
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage}/>
    <div className="container d-flex flex-column my-auto">
      <form className="d-flex flex-column gap-4 align-items-center">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className={light_or_dark['input']} placeholder="Entrez votre mail"/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="name" name="name" placeholder="Entrez votre nom" className={light_or_dark['input']}/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Entrez votre message" id="message" cols="30" rows="10" className={light_or_dark['input']} style={{resize:"none"}} />
        </div>
        <div className="form-group">
        <button type="submit" className="more orange my-3">Envoyer</button>
        </div>
      </form>
    </div>
    <Footer/>
  </div>
    )
}