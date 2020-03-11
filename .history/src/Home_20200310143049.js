import React,{Component} from 'react';
import AboutMe from './AboutMe';
import MyService from './MyService';
import MySkills from './MySkills';
import Contacts from './Contacts';
import Portfolio from './Portfolio';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <AboutMe/>
                <MyService/>
                <Portfolio/>
                <MySkills/>
                <ScrollableAnchor id={'contacts'}>
                    <Contacts/>
                </ScrollableAnchor>
            
                <Footer/>
            </div>
        );
    }
}
export default Home;