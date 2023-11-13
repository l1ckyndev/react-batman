import React from "react";
import './styles.css'; 
import trailer from '../../assets/Trailer.mp4'

function Trailer(){
    return (
        <>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={trailer} type="video/mp4" />
                        seu navegador não possui suporte para videos
                    </video>

                    <div id="sinopse">
                        <p class="description">
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                            mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece
                            como a personificação da vingança para a população.
                        </p>
                    </div>
                    <button class="button">Assistir</button>
                
                </div>
            </div>
        </>
    )
}

export default Trailer;