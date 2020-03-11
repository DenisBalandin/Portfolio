import React from 'react';
import aboutme from './img/aboutme.png';

function AboutMe(){
    return(
        <div id="about_me">
            <h1>ABOUT ME</h1>
            <p>
                <img className="about_me_img" align="right" src={aboutme} width="40%"/>
                I am a web developer, and I can create for you any web site. I guarantee an individual approach to each client — clean code, quick website loading, unique design, placing a site on hosting. As a result, you get a fully working site.
            </p>
            <p>
                This site is my business card and portfolio. Here is part of my work, and it will help you to understand what tasks I can do for you. To get the best result, I am always open to your suggestions.
            </p>
        </div>
    );
}
export default AboutMe;