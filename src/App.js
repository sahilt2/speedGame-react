
import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import {circles} from './components/circles';
import Circle from './components/Circle';
import Modal from './components/Modal';
import Difficulty from './components/Difficulty';
/* import { BrowserRouter,Routes,Route } from 'react-router-dom'; */


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
    timer : 0,
    modalShow : false,
    gameOn : false,
    difficultyModal : true

  }
  
 
  randomCircle = () => {
    let nextActive;
    do {
      nextActive = getRndInteger(1,4);
      
    }while (nextActive === this.state.current);

        this.setState({ 
        current: nextActive,
        pace: this.state.pace*0.95,
        rounds: this.state.rounds +1,
        timer : setTimeout(this.randomCircle, this.state.pace)
      });
      console.log(nextActive);

  
    }
  

  startHandler = () =>{
    this.randomCircle();
    this.setState({
      gameOn : !this.state.gameOn
    })
   // switch state gameOn !to be true
  };

  easyModeHandler = () =>{
    this.setState({
      difficultyModal:false,
      score:0,
      rounds:0,
      pace:800
    });
  }
  hardModeHandler =() =>{
    this.setState({
      difficultyModal:false,
      score:0,
      rounds:0,
      pace:1500
    })
  }



  endHandler = () =>{
    this.setState({
      current: 0,
      rounds:0,
      timer : clearTimeout(this.state.timer),
      modalShow : !this.state.modalShow
    })
  }

   clickHandler = (number) => {
    if(this.state.current!==number){
      return this.endHandler()
    }
   this.setState({
    score : this.state.score + 1
   })
   console.log('clicked',number);
  };

  closeModalHandler = () =>{
    window.location.reload()
  }

  

  render() {
    return (
  
      <div className='App'>
        <Header/>
        <div>
        <p> Score:{this.state.score}</p>
        </div> {this.state.difficultyModal && <Difficulty easy = {this.easyModeHandler} hard = {this.hardModeHandler}/>}
       
        <div className='circle_area'>
        {this.state.circles.map((circle)=> <Circle 
        key ={circle.id} 
        id = {circle.id}
        color = {circle.color} 
        click = {()=>this.clickHandler(circle.id)}
        pointerToggle = {this.state.gameOn}
        active = {this.state.current ===circle.id}/>)}
        </div>
        <button className = {`btn ${this.state.timer?'disable':''}`}onClick={this.startHandler}>Start</button>
        <button className = {`btn ${!this.state.timer?'disable':''}`} onClick={this.endHandler}>End</button>
        {this.state.modalShow && <Modal click = {this.closeModalHandler} {...this.state}/>}
      
        
       
      </div>
     
    );
  }
}

export default App;
