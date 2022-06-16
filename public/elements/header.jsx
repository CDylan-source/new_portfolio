import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import Lightmode from './lightmode';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import darklogo from '../../public/logo_dark.svg';
import lightlogo from '../../public/logo_light.svg'


export default function Header({lightmodeon, light_or_dark, onClick, currentPage}){

    const navClass = function(page){
        let className = "mx-auto nav-item nav-link"
        if(page === currentPage){
            className += " active"
        }
        return className
    }
    
 return (
    <React.Fragment>
    <Head>
        <title>Mon portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="My portfolio" />
        <meta name="keywords" content="Portfolio, React, NextJs" />
        <meta name="author" content="Dylan Chapuis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {lightmodeon ? <link rel="shortcut icon" href="logo_light.svg" type="image/x-icon" /> :
        <link rel="shortcut icon" href="logo_dark.svg" type="image/x-icon" />}
    </Head>
        <header>
            <Navbar expand="lg" className='justify-content-between'>
            {lightmodeon ? <Link href="/"><a className='navbar-brand'><Image style={{height:'60px', width:'60px'}} src={lightlogo} alt="Le logo du site, un renard orange et noir" className='ms-4' width="100" height="100" layout="raw"/></a></Link> :
                <Link href="/"><a className='navbar-brand'><Image style={{height:'60px', width:'60px'}} src={darklogo} alt="Le logo du site, un renard orange et noir" className='ms-4' width="100" height="100" layout="raw"/></a></Link>}
                <Lightmode onClick={onClick} light_or_dark={light_or_dark}></Lightmode>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={'me-4 ' + light_or_dark['navToggle']}/>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="me-4">
                        <Link href="/"><a className={navClass('home')}>Home</a></Link>
                        <Link href="/about"><a className={navClass('about')}>À propos</a></Link>
                        <Link href="/portfolio"><a className={navClass('portfolio')}>Portfolio</a></Link>
                        <Link href="/contact"><a className={navClass('contact')}>Contact</a></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    </React.Fragment>
  )
}