import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

export default function Footer(){
    return(
        <div className='container mt-auto'>
                <footer className=" row align-items-center justify-content-between mt-auto">
                    <ul className="col-auto d-flex row align-items-center list-unstyled">
                        <li className="col-auto" style={{width:"50px"}}>
                            <Link href="https://github.com/CDylan-source">
                                <a target={"blank"} >
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </Link>
                        </li>
                        <li className="col-auto" style={{width:"50px"}}>
                            <Link href="https://www.linkedin.com/in/chapuis-dylan-373679210/">
                                <a target={"blank"} >
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <h5 className='col-auto'>Chapuis Dylan</h5>
                </footer>
        </div>
    )
}