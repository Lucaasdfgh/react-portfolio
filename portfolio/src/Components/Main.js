import React from 'react'
import "../style.css"
export default function Main() {
    return (
        
        <main>
        <div className="home">
            <div className="startpage-1 fluid d-flex justify-content-center-1">
                <div>
                    <img className="profile-img" src="https://i.ibb.co/4mLtqM4/foto-perfil.jpg"></img>
                </div>
                <div className="right-home-1">
                    <h5 className="home-text-1">Front-End Developer</h5>
                    <p className="info-home-1">Hi! I'm Lucas a Front-End Developer-(Engineer in progress) from Mexico. </p>
                    <p className="info-home-1"><a className="info-home-1" href="/Projects">Check out my projects !</a>  </p> 
                    <div className="info-home icons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/Lucaasdfgh"><i className="fab fa-github fa-2x"></i> </a> 
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucascervantes/"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Lucaasdfgh"><i className="fab fa-twitter-square fa-2x"></i></a>
                    </div>              
                </div>
                
            </div>
            
        </div>

    </main>
        
    )
}
