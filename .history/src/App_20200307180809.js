import React from 'react';
import './style.scss';
import ItemPage from './ItemPage';
import Home from './Home';
import Header from './Header';


import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

function App(){
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/pageitem"  component={ItemPage}/>
      {/* <Route exact path="/pageitem/:itemid" component={ItemPage} /> */}
    </Router>
  );
}

export default App;
