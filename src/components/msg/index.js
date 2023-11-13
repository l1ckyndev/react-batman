import React from "react";
import './styles.css'; 
import batman from '../../assets/batman.jpg'

function Msg(){
    return (
        <section className="contact">
            <div className="contact-form">
                <h1>Contato <span>Us</span></h1>
                <p>Entre em contato co m os desenvolvedores. phone: (83) 98841-7455 ou email: lucasviniciustip@gmail.com</p>
                <form action="">
                    <input type='' placeholder="seu nome" required/>
                    <input type="email" name="email" id="" placeholder="E-mail" required/>
                    <input type="" placeholder="escreva o assunto" required/>
                    <textarea name='' id='' cols='30' rows='10' placeholder="Sua Mensagem" required>

                    </textarea>
                    <input type="submit" name="" value='submit' className="btn"></input>
                </form>
            </div>

            <div className="contact-img">
                <img src={batman}/>
            </div>
        </section>
    )
}

export default Msg;