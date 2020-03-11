import React,{Component} from 'react';
import portfolioicon from './img/portfolioicon.jpg';
import { db } from "./firebase";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            pageItems:[],
            openBox:"spoilerOff",
            arrow:'&#8963;'
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
            // for(var int = 0; int < data.length; int++){
            //     fullArray[int] = {
            //         name: data[int].name,
            //         date:data[int].date,
            //         check:data[int].check,
            //         id: querySnapshot.docs[int].id,
            //     }
            // }
            this.setState({ pageItems: data });
        });
        // fetch('http://testwoo/wp-json/wp/v2/posts')
        // .then(response => response.json())
        // .then(
        //     result => this.setState({
        //         pages:result  
        //     })
        // );
    }
    spoiler = () =>{
        let classn = ""
        if(this.state.openBox == "spoilerOff" ){
            classn = "spoilerOn";
        }else{
            classn = "spoilerOff";
        }
        this.setState({
            openBox:classn
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
                <div id="openBoxSpoiler" onClick={this.spoiler}>{this.state.arrow}</div>
        </>
       );
   }
}
export default Portfolio;