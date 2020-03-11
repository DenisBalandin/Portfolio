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
            <div id="first_page_bg" >
            {/* <!--Links--> */}
                <header>
                <div className="up_menu_links">
                    <div className="social_link">
                        <a href="#"><img src={skype}/></a>
                        <a href="#"><img src={viber}/></a>
                        <a href="#"><img src={whatsap}/></a>
                        <a href="#"><img src={telegram}/></a>
                    </div>
                    <div className="email_heder">
                        <a href="#">
                            {/* <div className="email_icon"><img src={email}/></div> */}
                            <div>Email: denis.balandin16@yahoo.com</div>
                        </a>
                    </div>
                </div>
                {/* <!--Links end--> */}
                {/* <!--Menu--> */}
                <menu>
                    <div className="logo">
                        <div>
                            <a href="/"> 
                            <img src={logo} />
                            </a>
                        </div>
                        <div className="company_name">
                            <a href="/">PORTFOLIO</a>
                        </div>
                    </div>
                    <div className="menu_heder">
                        <div>
                            <a href="/">MAIN</a>
                        </div>
                        <div>
                            <a href="#about_me">ABOUT ME</a>
                        </div>
                        <div>
                            <a href="#my_service">MY SERVICE</a>
                        </div>
                        <div>
                            <a href="#portfolio">PORTFOLIO</a>
                        </div>
                        <div>
                            <a href="#contacts">CONTACTS</a>
                        </div>
                    </div>
                </menu>
                {/* <!--Menu end--> */}
            </header>
            <div className="deltatop_page"></div>
        </div>
        );
    }
}
export default ItemPage;