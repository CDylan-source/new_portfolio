import React, {useState, useEffect} from "react";
import Header from "./elements/header";
import Footer from "./elements/footer";
import {PrismaClient} from '@prisma/client';


export default function Portfolio({allProjets}){
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


  return(
  <div className={lightmodeon ? "body_light d-flex flex-column" : "body_dark d-flex flex-column"}>
    <Header onClick={handleClick} light_or_dark={light_or_dark} lightmodeon={lightmodeon} currentPage={page} onNavClick={setPage}/>
    <div className="container d-flex flex-column margin-start">
            {allProjets[0].idtag}
    </div>
    <Footer/>
  </div>
);
}

export async function getStaticProps(){
        const prisma = new PrismaClient();
        const allProjets = await prisma.portfolio_tags.findMany()
        console.log(allProjets);
        
      return{
        props:{
            allProjets
        },
        revalidate:10,
      }
}
