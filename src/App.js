import React from 'react';
import TopAppBar from './components/TopAppBar'
import HomeCarousel from './components/HomeCarousel'
function App() {
  const carouselSettings = {
    elevation: 3,
    itemList: ['1', '2', '3', '4', '5'],
    paperStyle: {
      minWidth: '80vw',
      minHeight: '180px',
      maxHeight: '420px',
      margin: '2vw'
    },
    dotControl: true,
    arrowControl: true,
    //currentIdx: 0
  }
  return (
    <div className="App">
      <TopAppBar />
      <HomeCarousel {...carouselSettings}/>
    </div>
  );
}

export default App;
