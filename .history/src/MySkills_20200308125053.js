import React from 'react';
import css3 from './img/css3.png';
import bootstrap from './img/bootstrap.png';
import wordpress from './img/wordpress.png';
import laravel from './img/laravel.png';
import yii from './img/yii.png';
import php from './img/php.png';

function MySkills(){
    return(
        <div id="my_skils_bg">
            <div className="my_skils_line_top"></div>
            <h3 className="my_skillsh3">My Skills</h3>
            <div id="my_skils">
                <div>
                    <img src="<?php bloginfo('template_directory'); ?>/img/html5.png" />
                    <p>HTML 5</p>
                </div>
                <div>
                    <img src="<?php bloginfo('template_directory'); ?>/img/js.png"/>
                    <p>JavaScript</p>
                </div>
                <div><img src={css3}/> <p>CSS3</p></div>
                <div><img src={bootstrap}/><p>Bootstrap</p></div>
                <div><img src={wordpress}/><p>WordPress</p></div>
                <div><img src={laravel}/><p>Laravel</p></div>
                <div><img src={yii}/><p>Yii</p></div>
                <div><img src={php}/><p>PHP</p></div>
                <div><img src="<?php bloginfo('template_directory'); ?>/img/mysql.png"/><p>MySQL</p></div>
                <div><img src="<?php bloginfo('template_directory'); ?>/img/modx.png"/><p>MODX</p></div>
                <div><img src="<?php bloginfo('template_directory'); ?>/img/angular.png"/><p>AngularJS</p></div>
                <div><img src="<?php bloginfo('template_directory'); ?>/img/git.png"/><p>GIT</p></div>
                <div><img src="<?php bloginfo('template_directory'); ?>/img/jquery.png"/><p>jQuery</p></div>
                <div><img src="<?php bloginfo('template_directory'); ?>/img/codeigniter.png"/><p>CodeIgniter</p></div>
            </div>
            <div className="my_service_line_bottom"></div>
        </div>
    );
}
export default MySkills;