
import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import {circles} from './components/circles';
import Circle from './components/Circle';
import Modal from './components/Modal';


const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
class App extends Component {

  state = {
    circles : circles,
    score : 0,
    current : 0,
    pace : 1000,
    rounds : 0,
  
    
  }
  
 
  randomCircle = () => {
    let nextActive;
    do {
      nextActive = getRndInteger(1,4);
      
    }while (nextActive === this.state.current);

        this.setState({ 
        current: nextActive,
        pace: this.state.pace*0.95,
        rounds: this.state.rounds +1
      });
      console.log(nextActive);
    }
  

  startHandler = () =>{
    this.randomCircle();
   
  }
 

   clickHandler = (number) => {
   this.setState({
    score : this.state.score + 1
   })
   console.log('clicked',number);
  };

  render() {
    return (
      <div className='App'>
        <Header/>
        <div>
        <p> Score:{this.state.score}</p>
        </div>
        <div className='circle_area'>
        {this.state.circles.map((circle)=> <Circle id = {circle.id} click = {()=>this.clickHandler(circle.id)}/>)}
        </div>
        <button onClick={this.startHandler}>Start</button>
        <button>End</button>
        <Modal/>
        
       
      </div>
    );
  }
}

export default App;
