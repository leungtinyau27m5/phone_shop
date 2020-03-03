import React from 'react';
import TopAppBar from './components/TopAppBar'
import HomePage from './scenes/HomePage'
import GridPanel from './components/GridPanel'


function App() {
  return (
    <div className="App" style={{paddingBottom: '105px'}}>
      <TopAppBar />
      <HomePage />
      <GridPanel>
      </GridPanel>
    </div>
  );
}

export default App;
