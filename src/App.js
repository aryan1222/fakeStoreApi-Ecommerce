import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/ProductDetails';
import Cart from './pages/Cart';

const App = () => {

    return(
      <Router>
        <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/product/:id' component={Product} />
              <Route path='/cart' component={Cart} />
            </Switch>
        <Footer/>
      </Router>
    )
};

export default App;


