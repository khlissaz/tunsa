import React from 'react';
import { getI18n } from 'react-i18next'

const Navbar = () => {
    const i18n = getI18n();
    const lang =localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    const setLanguage = (lang) => {
        localStorage.setItem('lang', lang);
        setTimeout(() => window.location.reload(), 500);
    }
    return (
      
            <header id="header">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="fa fa-bars"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>

                            <div class="logo-nav">
                                <a href="index.html">
                                    <img src="/assets/images/logo-2.png" alt="Company logo" />
                                </a>
                            </div>

                            <div class="clear-toggle"></div>
                            <div id="main-menu" class="collapse scroll navbar-right">
                                <ul class="nav">

                                    <li class="active"> <a href="/">Home</a> </li>

                                    <li> <a href="#about">About</a> </li>

                                    <li> <a href="#history">History</a> </li>

                                    <li> <a href="#works">Our Work</a> </li>

                                    <li> <a href="#team">Team</a> </li>

                                    <li> <a href="#services">Services</a> </li>

                                    <li> <a href="#blog">Blog</a></li>

                                    <li> <a href="#testimonials">Testimonials</a></li>

                                    <li> <a href="#contact">Contact</a> </li>


{/* 
                                    <li className='paddingtop nav-item paddingRight'>
                                        <div className="dropdown">
                                            {
                                                lang ?
                                                    lang === "fr" ?

                                                        <img src='../assets/images/fr_FR.png' width={25}  />

                                                        :

                                                        <img loading="lazy" width={25} src='../assets/images/en_EN.png' />

                                                    :

                                                    <img loading="lazy" width={25} src='../assets/images/fr_FR/png' />


                                            }


                                            <ul className="dropdown-content" >
                                                <li onClick={() => { setLanguage('fr') }}  ><button onClick={() => { setLanguage('fr') }} className="a"><img loading="lazy" width={25} src='../assets/images/fr_FR.png' alt="Français" /> Français</button></li>
                                                <li onClick={() => { setLanguage('en') }} ><button onClick={() => { setLanguage('en') }} className="a"><img loading="lazy" width={25} src='../assets/images/en_EN.png' alt="English" />English </button></li>
                                            </ul>
                                        </div>
                                       </li> */}
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

           
        
    )
}

export default Navbar
