import React, {useEffect, useRef, useState} from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async";

import "../styles/homepage.css"

// Importing images
import "../assets/icons/fontawesome-icons/css/all.css";
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
    const [nav_container, SetNav_container] = useState(false);
    const [last_screen, SetLast_screen] = useState(false);
    const [screenSize, SetScreenSize] = useState()
    const [twist, setTwist] = useState(false)

    var navbutton_toggle = () => {
        setTwist(!twist)
        SetNav_container(!nav_container)
        /* (nav_container === true) ? (SetNav_container(false)) : (SetNav_container(true));
        var toggle_element = document.getElementById("navbar-toggle")
        toggle_element.classList.toggle("change")
 */
    }

    var checkScreenPosition = () => {
        var screen1 = document.getElementById("section1");
        var screen2 = document.getElementById("section2");
        var navdiv = document.getElementById("navdiv");
        var logo_icon = document.getElementById("logoicon")
        var outcomes_nav = document.getElementById("outcomes-nav");
        
        if (screen1.getBoundingClientRect().bottom >= 50){
            SetLast_screen(false);
            logo_icon.src = logoicon;
            outcomes_nav.style.display = "none";
        }
        else if (screen2.getBoundingClientRect().bottom >= 50){
            SetLast_screen(false);
            logo_icon.src = logoicon;
            outcomes_nav.style.display = "block"
        }
        else{
            SetLast_screen(true);
            if (screenSize == "small"){
            }
            //navdiv.style.color = "#FFFFFF";
            logo_icon.src = whitelogoicon
            outcomes_nav.style.display = "block";
        }
    }

    var navcontainer_style = {
        display: (screenSize == "small" && last_screen === true) ? "none" : "flex",
    }

    // If display is big and if it small.
    var navdiv_style = {
        display: (screenSize == "small" && nav_container === false) ? "none" : "flex",
        color:  (screenSize == "small" && nav_container === true ? "#FFFFFF" : "#000000"),
        backgroundColor: ( (screenSize === "small") ? "#000000" : "transparent"),
        //color: "#FFFFFF",
        //backgroundColor: "#000000",
        /* 'color': ((last_screen, screenSize) => {
            if ((last_screen == true && screenSize == "small") || (last_screen == false && screenSize == "big")){
                return "#FFFFFF"; //black
            }
            else{
                return "#FFFFFF"; //white
            }
        }), 

        backgroundColor: ((last_screen, screenSize) => {
            if ((last_screen == true && screenSize == "small") || (last_screen == false && screenSize == "big")){
                return "#FFFFFF"; //white
            }
            else{
                return "#000000"; //black
            }
        }), */
    }
    //console.log(navdiv_style.color)

    /* var navdiv_style = {
        display: (screenSize == "small" && nav_container === true) ? "none" : "flex",
        color: last_screen === true && screenSize == "small" ? "#000000" : "#FFFFFF",
        //backgroundColor: 
        //color: (screenSize == "small" && last_screen === true) ? "#000000" : "#FFFFFF",
        backgroundColor: (screenSize == "small" && last_screen === true) ? "#FFFFFF" : "#000000",
    } */

    

    useEffect(() => {
        
        if (window.screen.width <= 800){
            SetScreenSize("small")
        }
        else{
            SetScreenSize("big")
            SetNav_container(false)
        }
        //console.log(screenSize, last_screen)
    }, [window.screen.width])

    

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
                <ul className='navcontainer' style={navcontainer_style}>
                    <div className='navdiv' id='navdiv' style={navdiv_style}>
                        
                        <li>Work</li>
                        <li>Agency</li>
                        <li id='outcomes-nav'>Outcomes</li>
                        <li>Contact</li>

                        <div className='nameicon'>
                            <div className='a'>
                                <p>&copy; 2022, Aerxel HQ.</p>
                            </div>
                            <div>
                            <div className='main-icons'>
                                <p><span><img src={instagramIcon} alt="Instagram" /></span></p>
                                <p><span><img src={linkedinIcon} alt="Linkedin" /></span></p>
                                <p><span><img src={twitterIcon} alt="X" /></span></p>
                            </div>
                        </div>
                        </div>

                    </div>
                </ul>
                <div className='navbar-toggle' id='navbar-toggle' onClick={navbutton_toggle}>
                    <div className={twist ? "bar1": "bar"}></div>
                    <div className={twist ? "bar2": "bar"}></div>
                </div>
                {/* <button className='fa fa-navicon navbutton' onClick={navbutton_toggle}></button> */}
            </nav>
            <div className='section' id='section1'>
                <div className='section-content'>
                    <img src={sect1txtimg} alt='ff'/>
                    <p>We are a digital product design agency</p>
                    <p><span className='zilla-slab-'>Aerxel</span> is a team consisting of amazing people whose purpose is creating digital experiences and solutions for businesses.</p>
                </div>
                <div style={{backgroundColor: "red"}}>
                    <img src={Axelblue} alt="haha" className='bottomrightimage' />
                </div>
            </div>

            <div className='section' id='section2'>
                <div className='section-content'>
                    <img src={sect2txtimg} alt='ff'/>
                    <p className='pfirst'>Redefining E-banking</p>
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