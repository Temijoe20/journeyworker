import React from 'react';
import './App.css';
import Nav2 from './components/Nav2';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Cards from './components/Cards';
import {data} from './components/data';

export default function App() {
    const Card = data.map(item => {
      return (
          <Cards 
              img={item.Image}
              name={item.name}
          />
      )
    })


// function App() {
  return (
    <div className="">
      <Navbar />
      <Nav2 />
      {/* {Cards} */}
      <div class="content">
        <Nav2 />
        {/* <Home /> */}
        
         
      </div>
    </div>
  );
}
