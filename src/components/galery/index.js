import React from "react";
import './styles.css'
import img1 from '../../assets/batman.jpg'


function Galery(){
    return(
        <>
            <div className="container">
                <div className="gallery">
                    <img src={img1}/>
                    <img src={img1}/>
                    <img src={img1}/>
                    <img src={img1}/>
                    <img src={img1}/>
                    <img src={img1}/>
                    <img src={img1}/>
                    <img src={img1}/>
                    <img src={img1}/>
                </div>
            </div>
        </>
    )
}
export default Galery