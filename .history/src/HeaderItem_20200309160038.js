import React from 'react';
import skype from './img/skype_icon.jpg';
import viber from './img/viber_icon.jpg';
import whatsap from './img/whatsap.jpg';
import telegram from './img/telegram.jpg';
import email from './img/email.jpg';
import logo from './img/logo.png';
import background from './img/background.png';


function Header(){
    return(
        <div id="first_page_bg" >
        {/* <!--Links--> */}
            <header>
            <div className="up_menu_links">
                <div className="social_link">
                    <a href="#"><img src={skype}/></a>
                    <a href="#"><img src={viber}/></a>
                    <a href="#"><img src={whatsap}/></a>
                    <a href="#"><img src={telegram}/></a>
                </div>
                <div className="email_heder">
                    <a href="#">
                        {/* <div className="email_icon"><img src={email}/></div> */}
                        <div>Email: denis.balandin16@yahoo.com</div>
                    </a>
                </div>
            </div>
            {/* <!--Links end--> */}
            {/* <!--Menu--> */}
            <menu>
                <div className="logo">
                    <div>
                        <a href="/"> 
                        <img src={logo} />
                        </a>
                    </div>
                    <div className="company_name">
                        <a href="/">PORTFOLIO</a>
                    </div>
                </div>
                <div className="menu_heder">
                    <div>
                    <Link to={`/`}>MAIN</Link>
                    </div>
                    <div>
                        <a href="#about_me">ABOUT ME</a>
                    </div>
                    <div>
                        <a href="#my_service">MY SERVICE</a>
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
        <div className="deltatop_page"></div>
    </div>
    );
}
export default Header;