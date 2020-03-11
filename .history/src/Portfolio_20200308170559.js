import React,{Component} from 'react';
import portfolioicon from './img/portfolioicon.jpg';
import { db } from "./firebase";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import arrowDown from './img/arrow_down.png';
import arrowUp from './img/arrow_up.png';

class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            pageItems:[],
            openBox:"spoilerOff",
            arrow:arrowDown
        }
    }
    componentDidMount(){
        this.getFetch();
    }
    getFetch = () => {
        db.collection("pages")
        .get()
        .then(querySnapshot => {
            let fullArray = [];
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ pageItems: data });
        });
    }
    spoiler = () =>{
        let classn = "";
        let arrowImg = "";
        if(this.state.openBox == "spoilerOff" ){
            classn = "spoilerOn";
            arrowImg = arrowUp;
        }else{
            classn = "spoilerOff";
            arrowImg = arrowDown;
        }
        this.setState({
            openBox:classn,
            arrow:arrowImg
        });
    }
    render(){
        console.log(this.state);
       return(
           <>
            <h3 className="portfolioh3">PORTFOLIO</h3>
            <div id="portfolio" className={this.state.openBox}>
                {this.state.pageItems.map((page, index)=>
                    <div className="portfolioblock">
                        <Link to={`/pageitem/${page.url}`}>
                            <img src={portfolioicon}  width="368"/>
                            <img src={page.image}  width="368"/>
                        </Link>
                        <div className="p_name">
                            <a href="/pexuniverse/">{page.title}</a>
                        </div>
                    </div>
                )}
            </div>
            <div id="openBoxSpoiler" onClick={this.spoiler}><img src={this.state.arrow}/></div>
        </>
       );
   }
}
export default Portfolio;