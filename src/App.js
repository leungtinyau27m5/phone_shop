import React from 'react';
import TopAppBar from './components/TopAppBar'
import HomePage from './scenes/HomePage'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <TopAppBar />
        <Route path="/" component={HomePage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
