import './App.css';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import React from 'react';
import AddComponentButton from './components/AddComponentButton';
import  { useState } from 'react';
import SlideNumberDisplay from './components/SlideNumberDisplay';
import SlidingIn from './components/SlidingIn';


const  App = () => {

  const [slideNumber, setSlideNumber] = useState(0);

const handleClick = () =>{
  const oldNumber = slideNumber;
  setSlideNumber(oldNumber + 1);
};


const whatIWantToRender = [...Array(slideNumber)].map(eachone => {return (
  <CSSTransition
  key={Math.random()}
  timeout={5000}
  classNames="item"
>
                <SlidingIn></SlidingIn>
 </CSSTransition> 

)})






  return (
    <div className="App">
      <Navbar></Navbar>
      <SlideNumberDisplay slideNumber={slideNumber}></SlideNumberDisplay>
      <AddComponentButton handleClick={handleClick}></AddComponentButton>

    <TransitionGroup className='tg'>
        

                {whatIWantToRender}

      </TransitionGroup>


    </div>
  );
}

export default App;
