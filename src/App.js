import React from 'react';
import TopAppBar from './components/TopAppBar'
import HomePage from './scenes/HomePage'
import BottomAboutUs from './components/BottomAboutUs'


function App() {
  return (
    <div className="App">
      <TopAppBar />
      <HomePage />
      <BottomAboutUs />
    </div>
  );
}

export default App;
