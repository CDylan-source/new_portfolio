import React, {useState, useEffect} from "react";
import Header from "./elements/header";
import Footer from "./elements/footer";
import {PrismaClient} from "@prisma/client";
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';




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
    const handleClose = () => {
      setShow(false);
      setSelected(0)
      }
    const handleShow = (id) => {
      setSelected(id)
      setShow(true);
    }
  return(
  <div className={lightmodeon ? "body_light d-flex flex-column" : "body_dark d-flex flex-column"}>
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage}/>
    
    {Projets.map((projet, id) => {return(
    <div className="container">
      <div className="card card-transparent margin-start col-md-4 col-10 mb-4 mb-md-0 py-4 d-flex offset-1 offset-md-0 align-items-center text-center">       
    <div className="card-body">
       <Image src={projet.image} alt="Photo du projet" className="shadow-2-strong mb-4 card-img-top mx-auto" style={{width:"100%", height:"auto", borderRadius: "0.6rem"}} width="1000" height="1000" layout="raw"/>
            <h2 className="card-title mb-3 titre">{projet.titre}</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
              {projet.portfolio_joint.map((element) => {
                return(
                  <p className="card-text mb-0 mb-md-2 tag">{element.portfolio_tags.tag}</p>
                  )
                  }
                )}
            </div>
            <p className="card-text mb-4 short">{projet.short}</p>
            <button className="more orange" onClick={() => handleShow(id)}><span>En savoir +</span></button>
        </div>
      </div>
      </div>
    )})}
    
     <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {Projets[selected].titre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column w-100 align-items-center">
            <Image src={Projets[selected].image} alt="Photo du projet" className="shadow-2-strong mb-4" style={{width:"90%", height:"auto"}} width="1000" height="1000" layout="raw"/>
            <p>{Projets[selected].description}</p>
            {Projets[selected].lien ? <a href={Projets[selected].lien} className="more noir" target="blank">Lien vers le site</a> : ""}
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
        const prisma = new PrismaClient();
        const Projets = await prisma.portfolio_projets.findMany({
            include: {
                portfolio_joint: {
                    include: {
                        portfolio_tags: true
                    }
                }
                
            },
        })
      return{
        props:{
            Projets        },
        revalidate:2000,
      }
}
// https://drive.google.com/file/d/1zHuBeqD_1RtgSzgQIsG0dbIOZl9LMDGX/view?usp=sharing