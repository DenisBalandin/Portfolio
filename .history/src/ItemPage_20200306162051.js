import React,{Component} from 'react';

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
            </div>
        </div>
        );
    }
}
export default ItemPage;