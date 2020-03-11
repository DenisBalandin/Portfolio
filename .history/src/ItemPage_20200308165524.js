import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import HeaderItem from './HeaderItem';
import { db } from "./firebase";

class ItemPage extends Component{
    state = { 
        data: []
    };
    componentDidMount() {
        this.getFareData();
    }
    getFareData = () => {
        db.collection("pages").where('url', '==', this.props.match.params.itemid)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.setState({
                    data:doc.data()
                });
            });
        })
    }
    render(){
        return(
            <>
                <HeaderItem/>
                <div id="page_item_content">
                    <div className="page_title">
                        <div className="page_name">
                            {this.state.data.title}
                        </div>
                        <div className="page_link">
                            Link: 
                            <a href={this.state.data.link}>
                                {this.state.data.title}
                            </a>
                        </div>
                    </div>
                    <div className="page_description">
                        <div className="page_steck">
                            {this.state.data.steck}
                        </div>
                        <div className="page_desc">
                            <span>Description:</span>
                            {this.state.data.description}
                        </div>
                    </div>
                    <div className="page_content">
                    
                    </div>
                </div>
            </>
        );
    }
}
export default ItemPage;