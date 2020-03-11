import React,{Component} from 'react';
import portfolioicon from './img/portfolioicon.jpg';
import { db } from "./firebase";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            pages:[]
        }
    }
    componentDidMount(){
        this.getFetch();
    }
    getFetch = () => {
        fetch('http://testwoo/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(
            result => this.setState({
                pages:result  
            })
        );
    }

    render(){
       return(
           <>
           {window.location.href}
            {/* <Route exact path="/"  component={Home}/> */}
            <h3 className="portfolioh3">PORTFOLIO</h3>
            <div id="portfolio">
                {this.state.pages.map((page, index)=>
                    <div className="portfolioblock">
                        {/* <Link to={`/pageitem/${page.id}`}>
                            <img src={portfolioicon}  width="368"/>
                            { ReactHtmlParser(page.excerpt.rendered)}
                        </Link>
                        <div className="p_name">
                            <a href="/pexuniverse/">{page.title.rendered}</a>
                        </div> */}
                    </div>
                )}
                
             
            </div>
        </>
       );
   }
}
export default Portfolio;