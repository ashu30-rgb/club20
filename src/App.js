import './App.css';
import './assets/main.css'
import React from 'react';
import RouteContent from './route';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <> 
    <div className="App">
    <Header/>
    <div id='app__content'>
    <RouteContent/>
    </div>
    <Footer/>
    </div> 
   </>
  );
}

export default App;
