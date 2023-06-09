
import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import {circles} from './components/circles';
import Circle from './components/Circle';
import Modal from './components/Modal';
import Difficulty from './components/Difficulty';
import clickAudio from './assets/button-10.mp3';
import wrongClick from './assets/wrong-buzzer-6268.mp3';
import easyLevel from './assets/arcadeKid.mp3';
import hardLevel from './assets/Hardlevel.mp3'
/* import { BrowserRouter,Routes,Route } from 'react-router-dom'; */


const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let clickSound = new Audio(clickAudio);
let wrongClickSound = new Audio(wrongClick);
let easySound = new Audio(easyLevel);
let hardSound = new Audio(hardLevel)
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
    difficultyModal : true,
    level : '',
  
  }

  playSound = () =>{
    if (clickSound.paused){
      clickSound.play()
    }else {
      clickSound.currentTime = 0;
    }

  }
  
 
  randomCircle = () => {
    if(this.state.rounds>=3){
         return this.endHandler();    
    }
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
      //console.log(nextActive);
      //console.log(this.state.pace)

  
    }
  

  startHandler = () =>{

    this.randomCircle();
    this.setState({
      gameOn : !this.state.gameOn
    })
   // switch state gameOn !to be true
  };

  easyModeHandler = () =>{
    easySound.play();
    this.setState({
      difficultyModal:false,
      score:0,
      rounds:0,
      pace:1500,
      level:'Easy'
    });
    //console.log(this.state.pace)
  }
  hardModeHandler =() =>{
    hardSound.play();
    this.setState({
      difficultyModal:false,
      score:0,
      rounds:0,
      pace:800,
      level:'Hard'
    })
    
  }



  endHandler = () =>{
    easySound.pause();
    hardSound.pause();
    wrongClickSound.play();
    this.setState({
      pace:1000,
      current: 0,
      rounds:0,
      timer : clearTimeout(this.state.timer),
      modalShow : !this.state.modalShow,
    })
  }

   clickHandler = (number) => {
    this.playSound()
    if(this.state.current!==number){
      return this.endHandler()
    }
   this.setState({
    score : this.state.score + 1,
    rounds: this.state.rounds -1
   })
   //console.log('clicked',number);
  };

  closeModalHandler = () =>{
    this.setState({
      pace: 1000,
      score:0,
      current: 0,
      rounds:0,
    /*   timer : clearTimeout(this.state.timer), */
      modalShow : false,
      difficultyModal:true,
      gameOn:false,
    })
  }

 

  render() {
   
    return (
  
      <div className='App'>
       
        <Header/>
   
        <div>
          <p>Level:<span>{this.state.level}</span></p>
        <p>Score</p>
        <div className='score'>
        <p>{this.state.score}</p>
        </div>
        </div> 
        {this.state.difficultyModal && <Difficulty easy = {this.easyModeHandler} hard = {this.hardModeHandler}/>}
       
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
