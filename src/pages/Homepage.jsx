import React from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async";

import "../styles/homepage.css"

// Importing images
import logoicon from "../assets/icons/Axel.svg"
import whitelogoicon from "../assets/images/WhiteAx.svg"
import Axelblue from "../assets/images/Axelblue.svg"
import woodenhands from "../assets/images/iPhone 12 Pro (Wooden Hands).svg"
import sect1txtimg from "../assets/icons/darkTAG.svg"
import sect2txtimg from "../assets/images/Union.svg"
// Importing icons
import instagramIcon from "../assets/icons/iconmonstr-instagram-14 (1) 1.svg"
import linkedinIcon from "../assets/icons/iconmonstr-linkedin-4 (1) 1.svg"
import twitterIcon from "../assets/icons/iconmonstr-twitter-4 (1) 1.svg"

const Homepage = () => {

    var getBottomPosition = () => {
        var screen1 = document.getElementById("section1");
        //console.log(screen1.getBoundingClientRect().height)
    }

    var checkScreenPosition = () => {
        var screen1 = document.getElementById("section1");
        var screen2 = document.getElementById("section2");
        var navdiv = document.getElementById("navdiv");
        var logo_icon = document.getElementById("logoicon")
        var outcomes_nav = document.getElementById("outcomes-nav");
        
        if (screen1.getBoundingClientRect().bottom >= 50){
            navdiv.style.color = "#000000";
            logo_icon.src = logoicon;
            outcomes_nav.style.display = "none";
        }
        else if (screen2.getBoundingClientRect().bottom >= 50){
            //console.log(screen2.getBoundingClientRect().bottom)
            navdiv.style.color = "#000000";
            logo_icon.src = logoicon;
            outcomes_nav.style.display = "block"
        }
        else{
            navdiv.style.color = "#FFFFFF";
            logo_icon.src = whitelogoicon
            outcomes_nav.style.display = "block";
        }

    }

  return (
    <HelmetProvider>
        <Helmet>
            {/* <link type='text/css' rel='stylesheet' href='' /> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        </Helmet>

        <div className='container' onScroll={checkScreenPosition}>
            <nav className='navbar'>
                <p><img className='logoicon' id='logoicon' src={logoicon} alt="" /></p>
                <ul className='navcontainer'>
                    <div className='navdiv' id='navdiv'>
                        <li>Work</li>
                        <li>Agency</li>
                        <li id='outcomes-nav'>Outcomes</li>
                        <li>Contact</li>
                    </div>
                </ul>
                <button className='navbutton'>Menu</button>
            </nav>
            <div className='section' id='section1'>
                <div className='section-content'>
                    <img src={sect1txtimg} alt='ff'/>
                    <p>We are a digital product design agency</p>
                    <p><span className='zilla-slab-'>Aerxel</span> is a team consisting of amazing people whose purpose is creating digital experiences and solutions for businesses.</p>
                </div>
                
                <img src={Axelblue} alt="haha" className='bottomrightimage' />
            </div>

            <div className='section' id='section2'>
                <div className='section-content'>
                    <img src={sect2txtimg} alt='ff'/>
                    <p>Redefining E-banking</p>
                    <div id='uiux'>
                        <p>UI/UX Design</p>
                    </div>
                </div>
                <img src={woodenhands} alt="haha" className='bottomrightimage' />
            </div>

            <footer id='lastsection'>
                <div className='inner-footer'>
                    <div className='footer-header'>
                        <h1>Digital product design agency</h1>
                    </div>
                    <div className='footer-content'>
                        <div className='footer-text-row'>
                            <div className='col'>
                                <h3 className='skillset-title'>Proficiency</h3>
                                <ul>
                                    <li>UI/UX</li>
                                    <li>Design Systems</li>
                                    <li>Branding</li>
                                    <li>Web Design</li>
                                    <li>App Development</li>
                                </ul>
                                
                            </div>
                            <div className='col'>
                                <h3 className='skillset-title'>Portfolio</h3>
                                <ul>
                                    <li>Behance</li>
                                    <li>Awwwards</li>
                                    <li>Dribbble</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>
    {/* 
                            <div className='col'>
                                <img src={whitelogoicon} className='footer-image' alt="" />
                            </div>
                                */}
                        </div>
                        <div className='footer-whitelogo'>
                            <img src={whitelogoicon} className='footer-image' alt="" />
                        </div>
                    </div>
                    <div className='footer-icons'>
                        <div className='copyright'>
                            <p><span>&copy;</span> 2022, Aerxel HQ.</p>
                        </div>
                        <div className='main-icons'>
                            <p><span><img src={instagramIcon} alt="Instagram" /></span></p>
                            <p><span><img src={linkedinIcon} alt="Linkedin" /></span></p>
                            <p><span><img src={twitterIcon} alt="X" /></span></p>
                        </div>
                    </div>

                </div>
                
            </footer>
        </div>

    </HelmetProvider>
    
  )
}

export default Homepage