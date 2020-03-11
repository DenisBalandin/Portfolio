import React from 'react';
import css3 from './img/css3.png';
import bootstrap from './img/bootstrap.png';
import wordpress from './img/wordpress.png';
import laravel from './img/laravel.png';
import yii from './img/yii.png';
import php from './img/php.png';
import mysql from './img/mysql.png';
import MODX from './img/modx.png';
import angular from './img/angular.png';
import git from './img/git.png';
import jquery from './img/jquery.png';
import coign from './img/codeigniter.png';
import html5 from './img/html5.png';
import js from './img/js.png';
import reactjs from './img/reactjs.png';

function MySkills(){
    return(
        <div id="my_skils_bg">
            <div className="my_skils_line_top"></div>
            <h3 className="my_skillsh3">My Skills</h3>
            <div id="my_skils">
                <div><img src={html5}/><p>HTML 5</p></div>
                <div><img src={reactjs}/><p>React.JS</p></div>
                <div><img src={js}/><p>JavaScript</p></div>
                <div><img src={css3}/> <p>CSS3</p></div>
                <div><img src={bootstrap}/><p>Bootstrap</p></div>
                <div><img src={wordpress}/><p>WordPress</p></div>
                <div><img src={laravel}/><p>Laravel</p></div>
                <div><img src={yii}/><p>Yii</p></div>
                <div><img src={php}/><p>PHP</p></div>
                <div><img src={mysql}/><p>MySQL</p></div>
                <div><img src={MODX}/><p>MODX</p></div>
                <div><img src={angular}/><p>Angular</p></div>
                <div><img src={git}/><p>GIT</p></div>
                <div><img src={jquery}/><p>jQuery</p></div>
                <div><img src={coign}/><p>CodeIgniter</p></div>
            </div>
            <div className="my_skils_line_bottom"></div>
        </div>
    );
}
export default MySkills;