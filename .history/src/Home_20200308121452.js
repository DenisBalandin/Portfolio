import React,{Component} from 'react';
import AboutMe from './AboutMe';
import MyService from './MyService';
import MySkills from './MySkills';
import Contacts from './Contacts';
import Portfolio from './Portfolio';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';


class Home extends Component{
    render(){
        return(
            <div>
                dfgdfgdfg
             
                {/* <Router> */}
                <Link to={`/pageitem`}>
                    dfgdfg
                </Link>
                    <AboutMe/>
                    {/* <MyService/>
                    <Portfolio/>
                    <MySkills/>
                    <Contacts/> */}
                {/* </Router> */}
            </div>
        );
    }
}
export default Home;