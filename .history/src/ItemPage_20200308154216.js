import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import { db } from "./firebase";

class ItemPage extends Component{
    state = { 
        data: []
    };
    componentDidMount() {
        this.getFareData();
    }
    getFareData = () => {
        db.collection("pages")
        .doc(this.props.match.params.itemid)
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
    }
    render(){
        return(
        <div id="page_item_content">
            <div className="page_content">
             {this.props.match.params.itemid}
             <Link to={`/`}>
                    dfgdfg
                </Link>
            </div>
        </div>
        );
    }
}
export default ItemPage;