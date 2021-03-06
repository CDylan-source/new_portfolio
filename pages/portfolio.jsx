import React, {useState, useEffect} from "react";
import Header from "../public/elements/header";
import Footer from "../public/elements/footer";
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import fsPromises from 'fs/promises';
import path from 'path';




export default function Portfolio({Projets}){
    const [page, setPage] = useState('portfolio');
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
   
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(0);
    const [tagSelected, setTagSelected] = useState("all");
    const handleClose = () => {
      setShow(false);
      }
    const handleShow = (id) => {
      setSelected(id)
      setShow(true);
    }
    const tagsSet = new Set();
    Projets.Projets.map((element) => {
      element.tags.map((subelement) => {
        tagsSet.add(subelement.tag);
      })
    })
    

    const handleChange = (e) => {
      setTagSelected(e.target.value);
    }
    
    const tags = Array.from(tagsSet);

    let arr = [];
    const ProjetsFiltered = () => {
      if(tagSelected !== 'all'){
        Projets.Projets.map((element) => {
        var flatten = require('flat');
        const elementFlat = flatten(element);
        Object.values(elementFlat).includes(tagSelected) ? arr.push(element) : null
      })
      }
      else{
        Projets.Projets.map((element) => {
          arr.push(element)
        })
      }
      return arr;
    };
    ProjetsFiltered();



  return(
  <div className={lightmodeon ? "body_light d-flex flex-column" : "body_dark d-flex flex-column"}>
    <div className={lightmodeon ? "background background_light" : "background background_dark"}></div>
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage}/>
    <select name="tags" id="tags" className="margin-start mb-4 select p-1" onChange={(e) => handleChange(e)}>
      <option value="all">TOUT</option>
    {tags.map((tag) => { return(
      <option value={tag} key={tag}>{tag}</option>)
    })}
    </select>
    <ul className="customcontainer d-flex flex-wrap gap-5 justify-content-center mb-4 list-unstyled">
    {arr.map((projet, id) => {
      return(
        <li key={id} className="card card-transparent col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3 mb-md-0 py-4 d-flex align-items-center text-center max-width">       
      <div className="card-body" >
         <Image src={projet.image} alt="Photo du projet" className="shadow-2-strong mb-4 card-img-top mx-auto" style={{width:"100%", height:"auto", borderRadius: "0.6rem"}} width="1000" height="1000" layout="raw"/>
              <h2 className="card-title mb-3 titre">{projet.titre}</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
                {projet.tags.map((element) => {
                  return(
                    <p key={element.tag} className="card-text mb-0 mb-md-2 tag">{element.tag}</p>
                    )
                    }
                  )}
              </div>
              <p className="card-text mb-4 short">{projet.short}</p>
              <button className="more orange" onClick={() => handleShow(id)}><span>En savoir +</span></button>
          </div>
        </li>)
    })}
    </ul>
     <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {arr[selected].titre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column w-100 align-items-center">
            <Image src={arr[selected].image} alt="Photo du projet" className="shadow-2-strong mb-4" style={{width:"90%", height:"auto"}} width="1000" height="1000" layout="raw"/>
            <p>{arr[selected].description}</p>
            {arr[selected].lien ? <a href={arr[selected].lien} className="more noir" target="blank">Lien vers le site</a> : ""}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="more startnoir blanc">Close</button>
        </Modal.Footer>
      </Modal>
    <Footer/>
  </div>
);
}

export async function getStaticProps(){
        const filePath = path.join(process.cwd(), 'pages/api/api_portfolio.json');
        const jsonData = await fsPromises.readFile(filePath);
        const Projets = JSON.parse(jsonData);
      return{
        props:{
            Projets        }
      }
}