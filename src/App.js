import React from 'react';
import TopAppBar from './components/TopAppBar'
import HomePage from './scenes/HomePage'
import ShoppingMall from './scenes/ShoppingMall'
import ProductView from './scenes/ProductView'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//<Route path="/product/:phoneProductCode" component={ShoppingMall} />
function App() {
  return (
    <div className="App">
      <Router>
        <TopAppBar />
        <Switch>
          <Route path="/index" component={HomePage} />
          <Route path="/mall" component={ShoppingMall} />
          <Route path="/product/:phoneProductCode" component={ProductView} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
