import React from "react";
import './styles.css'; 
import logo from '../../assets/Logo.jpg'
import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer>
            <img style={{objectfit: 'contain'}} id="logo" src={logo} />
                <span>Todos os direitos reservados ©</span>
                <span>Desenvolvido por: Lucas Vinicius</span>


                <nav className="footer-navigation">
                    <ul className="footer-list">
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
    </footer>
    )
}

export default Footer;