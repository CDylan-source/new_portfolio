import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import Lightmode from './lightmode';
import React, {useState} from 'react';


export default function Header(){

    const [lightmodeon, setLightmodeon] = useState(false);

    const handleClick = function (e){
        e.preventDefault();
        setLightmodeon(!lightmodeon);
    }

    
    
   const light_or_dark = {
        sun: lightmodeon ? '#DE6439' : '#fff',
        moon: lightmodeon ? '#fff' : '#DE6439',
        
    }
    
  
 return (
    <React.Fragment>
    <Head>
        <title>Mon portfolio</title>
        <meta charset="UTF-8" />
        <meta name="description" content="My portfolio" />
        <meta name="keywords" content="Portfolio, React, NextJs" />
        <meta name="author" content="Dylan Chapuis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {lightmodeon ? <link rel="shortcut icon" href="logo_light.svg" type="image/x-icon" /> :
        <link rel="shortcut icon" href="logo_dark.svg" type="image/x-icon" />}

    </Head>
    
        <header>
            <Navbar expand="lg" className='justify-content-between'>
            {lightmodeon ? <Navbar.Brand href="/"><img src="logo_dark.svg" alt="Le logo du site, un renard orange et noir" className='ms-4'/></Navbar.Brand> :
                <Navbar.Brand href="/"><img src="logo_dark.svg" alt="Le logo du site, un renard orange et noir" className='ms-4'/></Navbar.Brand>}
                <Lightmode onClick={handleClick} light_or_dark={light_or_dark}></Lightmode>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-4'/>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="me-4">
                        <Nav.Link href="/" className='mx-auto'>Home</Nav.Link>
                        <Nav.Link href="/about" className='mx-auto'>À propos</Nav.Link>
                        <Nav.Link href="/portfolio" className='mx-auto'>Portfolio</Nav.Link>
                        <Nav.Link href="/Contact" className='mx-auto'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    </React.Fragment>
  )
}