import React from 'react'
import './style.css'
import '../../styles/globalStyle.css'
import mainImg  from '../../img/mainImg.png'
import secondaryMainImg from '../../img/Illustration.png'


export function LandingPage({children}){
    return(
    <div className='landingBody'>
        <main className="container">
            <section className="sectionContainer">
                <div className="logoContainer">
                    <p className="logo"><span className="pink">Nu</span> Kenzie</p>
                </div>
                
                <div className="topContainer">
                    <p className="topContainerTxt">Centralize o controle das suas finanças</p>
                
                    <p className="topContainerSecondTxt">de forma rápida e segura</p>

                    {children}
                </div>
            </section>

            <img className="bottomImg" src={mainImg} alt="main ilustration"/>
            <img className="bottomSecondaryImg" src={secondaryMainImg} alt="main ilustration"/>
        </main>
    </div>
    )
}