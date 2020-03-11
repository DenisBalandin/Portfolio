import React from 'react';
import skype from './img/skype_icon.jpg';
import viber from './img/viber_icon.jpg';
import whatsap from './img/whatsap.jpg';
import telegram from './img/telegram.jpg';
import email from './img/email.jpg';
import logo from './img/logo.png';
import background from './img/background.png';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'


function Header(){
    return(
        <div id="first_page_bg" >
        {/* <!--Links--> */}
            <header>
            <div className="up_menu_links">
                <div className="social_link">
                    <Link to={`/`}><img src={skype}/></Link>
                    <Link to={`/`}><img src={viber}/></Link>
                    <Link to={`/`}><img src={whatsap}/></Link>
                    <Link to={`/`}><img src={telegram}/></Link>
                </div>
                <div className="email_heder">
                    <a href="#">
                        {/* <div className="email_icon"><img src={email}/></div> */}
                        <div>Email: denisbalandin.work@yahoo.com</div>
                    </a>
                </div>
            </div>
            {/* <!--Links end--> */}
            {/* <!--Menu--> */}
            <menu>
                <div className="logo">
                    <div>
                        <Link to={`/`}>
                        <img src={logo} />
                        </Link>
                    </div>
                    <div className="company_name">
                         <Link to={`/`}>PORTFOLIO</Link>
                    </div>
                </div>
                <div className="menu_heder">
                    <div>
                        <Link to={`/`}>MAIN</Link>
                    </div>
                    <div>
                        <Link to={`/#about_me`}>ABOUT ME</Link>
                    </div>
                    <div>
                        <Link to={`/#my_service`}>MY SERVICE</Link>
                    </div>
                    <div>
                        <a href="#portfolio">PORTFOLIO</a>
                    </div>
                    <div>
                        <a href="#contacts">CONTACTS</a>
                    </div>
                </div>
            </menu>
            {/* <!--Menu end--> */}
        </header>
        <div className="bg_page_insaide">
            <div className="page_bg">
                <img src={background} width="100%" />
            </div>
        </div>
        <div className="deltatop_page"></div>
    </div>
    );
}
export default Header;