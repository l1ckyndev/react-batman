import React from "react";
import './styles.css'
import user1 from '../../assets/c-1.jpg'
import user2 from '../../assets/c-2.jpg'
import user3 from '../../assets/c-3.jpg'
import user4 from '../../assets/c-4.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


function Avaliacoes(){
    return (
        <>
        <section id="testimonials">
          
            <div class="testimonial-heading">
                <span>Comments</span>
                <h1>Clients Says</h1>
            </div>
          
            <div class="testimonial-box-container">
          
                <div class="testimonial-box">
          
                    <div class="box-top">
          
                        <div class="profile">
          
                            <div class="profile-img">
                                <img src={user1} />
                            </div>
          
                            <div class="name-user">
                                <strong>Touseeq Ijaz</strong>
                                <span>@touseeqijazweb</span>
                            </div>
                        </div>
          
                        <div class="reviews">
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={regularStar} />
                        </div>
                    </div>
                   
                    <div class="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                </div>
                
                <div class="testimonial-box">
                    
                    <div class="box-top">
                        
                        <div class="profile">
                            
                            <div class="profile-img">
                                <img src={user2} />
                            </div>
                            
                            <div class="name-user">
                                <strong>J.K Rowling</strong>
                                <span>@jkrowling</span>
                            </div>
                        </div>
                        
                        <div class="reviews">
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={regularStar} />
                        </div>
                    </div>
                
                    <div class="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                </div>
                
                <div class="testimonial-box">
                    
                    <div class="box-top">
                        
                        <div class="profile">
                            
                            <div class="profile-img">
                                <img src={user3} />
                            </div>
                            
                            <div class="name-user">
                                <strong>Harry Potter</strong>
                                <span>@DanielRedclief</span>
                            </div>
                        </div>
                        
                        <div class="reviews">
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                        </div>
                    </div>
                    
                    <div class="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                </div>
               
                <div class="testimonial-box">
                    
                    <div class="box-top">
                       
                        <div class="profile">
                          
                            <div class="profile-img">
                                <img src={user4} />
                            </div>
                            
                            <div class="name-user">
                                <strong>Oliva</strong>
                                <span>@Olivaadward</span>
                            </div>
                        </div>
                        
                        <div class="reviews">
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                            <FontAwesomeIcon icon={solidStar} />
                        </div>
                    </div>
                   
                    <div class="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Avaliacoes