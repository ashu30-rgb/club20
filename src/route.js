import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Team from './components/team';
import Events from './components/events';
import Contact from './components/contact';
import EventDetails from './components/event-detail';
import Submitted from './components/submitted';


function RouteContent() {

   return (
    <Routes>
      <Route path='' element ={<Home/>}/>
      <Route path='/' element ={<Home/>}/>
      <Route path='/team' element ={<Team/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/events' element ={<Events/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/event-details' element ={<EventDetails/>}/>
      <Route path='/submitted' element ={<Submitted/>}/>
    </Routes>
  )
}

export default RouteContent