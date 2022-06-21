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
    const [loader, setLoader] = useState(false);
    const [errorMail, setErrorMail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [connectionError, setConnectionError] = useState(false);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
      setEmpty(false);
      setErrorMail(false);
      setErrorName(false);
      setConnectionError(false)
      let data = {
        name,
        email,
        message
      }
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)}).then((res) => {
        console.log('Response received');
        if(res.status === 200){
          console.log('Response succeeded!');
          setLoader(false);
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
          return;
        }
        else if (res.status === 500){
          setLoader(false);
          setSubmitted(false); 
          res.json().then((response) => {
          console.log(response.errors);
          response.errors.includes('email') ? setErrorMail(true) : '';
          response.errors.includes('name') ? setErrorName(true) : '';
          response.errors.includes('empty') ? setEmpty(true) : '';
          response.errors.includes('connexion') ? setConnectionError(true) : '';
        })
        }
      })
      
    }

    return(
        <div className={lightmodeon ? "body_light d-flex flex-column" : "body_dark d-flex flex-column"}>
          <div className={lightmodeon ? "background background_light" : "background background_dark"}></div>
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage}/>
    <div className="container d-flex flex-column my-auto">
      <form className="d-flex flex-column gap-4 align-items-center" >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className={light_or_dark['input']} placeholder="Entrez votre mail" onChange={(e) => setEmail(e.target.value)} value={email} required/>
          {errorMail ?
            <div className="alert alert-danger mt-3" role="alert">L&apos;adresse mail entrée n&apos;est pas correcte</div> :
            null
        }
        </div>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="name" name="name" placeholder="Entrez votre nom" className={light_or_dark['input']} onChange={(e) => setName(e.target.value)} value={name} required/>
          {errorName ?
            <div className="alert alert-danger mt-3" role="alert">Le nom entré n&apos;est pas correct</div> :
            null
        }
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Entrez votre message" id="message" cols="30" rows="10" className={light_or_dark['input']} style={{resize:"none"}} onChange={(e) => setMessage(e.target.value)} value={message} required/>
        </div>
        <div className="form-group">
        {submitted ? 
          <div className="alert alert-success" role="alert">Message envoyé !</div> :
          null
      }
        {empty ? 
          <div className="alert alert-danger" role="alert">Toutes les cases n&apos;ont pas été remplies</div> :
          null
      }
      {connectionError ? 
          <div className="alert alert-danger" role="alert">Un problème est survenu lors de la connexion, veuillez réessayer plus tard</div> :
          null
      }
        {!loader ? 
          <button type="submit" className="more orange my-3" onClick={(e) => handleSubmit(e)}>Envoyer</button> :
          <button className="more orange my-3" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Chargement...
          </button>
      }
      
        </div>
      </form>
    </div>
    <Footer/>
  </div>
    )
}