import React from "react";
import './styles.css'
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.jpg'

function Header(){
    return (
        <header>
            <img id='logo' src={logo}></img>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contatos'>
                        <li>Contatos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;