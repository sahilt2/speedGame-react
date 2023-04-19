
import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import {circles} from './components/circles';
import Circle from './components/Circle';
import Modal from './components/Modal';

class App extends Component {
  state = {
    circles : circles,
    score : 0,
    current : 0
  }

  clickHandler = () => {
   this.setState({
    score : this.state.score + 1
   })
  }
  render() {
    return (
      <div className='App'>
        <Header/>
        <div>
        <p> Score:{this.state.score}</p>
        </div>
        <div className='circle_area'>
        {this.state.circles.map((circle)=> <Circle click = {()=>this.clickHandler(circle.id)}/>)}
        </div>
        <button>Start</button>
        <button>End</button>
        <Modal/>
        
       
      </div>
    );
  }
}

export default App;
