import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faFigma, faHtml5, faJs, faPhp, faReact, faTrello } from '@fortawesome/free-brands-svg-icons';

export default function List(){
    return(
        <div className='container my-sm-5 my-2'>
            <ul className='list-unstyled d-flex row justify-content-center align-items-center'>
                <li style={{width:'50px'}}>
                    <FontAwesomeIcon icon={faHtml5}/>
                </li>
                <li style={{width:'50px'}}>
                    <FontAwesomeIcon icon={faCss3}/>
                </li>
                <li style={{width:'50px'}}>
                    <FontAwesomeIcon icon={faJs}/>
                </li>
                <li style={{width:'50px'}}>
                    <FontAwesomeIcon icon={faPhp}/>
                </li>
                <li style={{width:'50px'}}>
                    <FontAwesomeIcon icon={faReact}/>
                </li>
                <li style={{width:'50px'}}>
                    <FontAwesomeIcon icon={faBootstrap}/>
                </li>
                <li style={{width:'50px'}}>
                    <FontAwesomeIcon icon={faFigma}/>
                </li>
                <li style={{width:'50px'}}>
                    <FontAwesomeIcon icon={faTrello}/>
                </li>
            </ul>
        </div>
    )
} 