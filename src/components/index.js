import React from 'react';
import Logo from '../assets/images/Logo.png';
import './Menu/Menu.css';
import Button from '../components/Button';
//import ButtonLink from './ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="MetalFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href='/'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;