import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class ItemPage extends Component{
    state = { 
        data: []
    };
    // componentDidMount() {
    //     this.fetchData();
    // }
    // fetchData = () => {
    //     const itemid = this.props.match.params.itemid; 
    //     axios.get(`http://localhost:3001/link/${itemid}`)
    //     .then((response) => {
    //       this.setState({data: response.data})
    //     });
    // }
    render(){
        return(
        <div id="page_item_content">
            <div className="page_content">
             {window.location.href}
             <Link to={`/`}>
                    dfgdfg
                </Link>
            </div>
        </div>
        );
    }
}
export default ItemPage;