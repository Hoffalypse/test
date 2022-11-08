import React, { useState } from 'react';
import Navigation from './Navigation'
import './style.css';



function Header() {
     
  let [pageView, setPageView] = useState();
  if(!pageView){
    setPageView('About')
  }

const eventHandle  = (e) =>{
 setPageView (e.target.value)
}
  return (
  <div>
    
    <header>
      <h1 className="container">Bryan Wienhoff</h1>

      <nav>
        <ul className="links menu">
          <li className="align">
            <button 
            className= 'headbtn' 
            id = {pageView === 'About' ? 'highlight': ""}
            value={'About'}
            onClick={eventHandle}
            > 
            About Me</button>
          </li>
          <li className= "align">
          <button 
          className= 'headbtn'
          id = {pageView === 'Projects' ? 'highlight': ""}
          value={'Projects'}
          onClick={eventHandle}
          > 
          My Work</button>
          </li>
          <li className="align">
          <button 
          className= 'headbtn'
          id = {pageView === 'Contact' ? 'highlight': ""}
          value={'Contact'}
          onClick={eventHandle}
          > 
          Contact Me</button>
          </li>
          <li className="align">
          <button 
          className= 'headbtn'
          id = {pageView === 'Resume' ? 'highlight': ""}
          value={'Resume'}
          onClick={eventHandle}
          > 
          Resume</button>
          </li>
        </ul>
      </nav>
    </header>
    <Navigation 
      pageView = {pageView}
    />
      
  </div>
  );
}

export default Header;
