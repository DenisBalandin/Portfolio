import React from 'react';
import html_icon from './img/html_icon.png';
import code_icon from './img/code_icon.png';
import react from './img/react_icon.png';
import display_icoon from './img/display_icoon.png';

function MyService(){
    return(
        <div id="my_service_bg">
          <div className="my_service_line_top"></div>
          <h3>MY SERVICE</h3>
          <div id="my_service">
              <div>
                <div  className="text_img"><img src={html_icon} /></div>
                <div className="text_1">HTML/CSS LAYOUTS</div>
                <div className="text_2">Landing page, resume-site, portfolio-site</div>
              </div>
              <div>
              <div  className="text_img"><img  src={code_icon} /></div>
                <div className="text_1">PROGRAMMING</div>
                <div className="text_2">PHP, MySQL, JavaScript, jQuery</div>
              </div>
              <div>
              <div  className="text_img"><img src={react}/></div>
                <div className="text_1">WORDPRESS, MODX DEVELOPMENT</div>
                <div className="text_2">Integration HTML template in WordPress, Modx</div>
              </div>
              <div>
              <div  className="text_img"><img src={display_icoon}/></div>
                <div className="text_1">WEBSITE MAINTENANCE</div>
                <div className="text_2">Installation and configuration CMS, placing a site on hosting.</div>
              </div>
          </div>
          <div className="my_service_line_bottom"></div>
      </div>
    );
}
export default MyService;