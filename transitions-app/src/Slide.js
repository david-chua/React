import React, {Component} from 'react';
import {CSSTransitionGroup } from 'react-transition-group';
import './App.css';

import {slideAnimation} from './animation.js';

class Slide extends Component{
  constructor(props){
    super(props);

    this.state = {
      items:[99,25]
    }
  }

  addElements(){
    return this.state.items.map(function(item, i){
      return <div className="item" key={i}>{item}</div>
    });
  }

  generateNumber(){
    //let random = Math.floor(Math.random() * 100) +1;
    let newArray = [...this.state.items, Math.floor(Math.random() * 100) + 1]

    this.setState({
      items: newArray
    })
  }

  removeNumber(){
    let newArray= this.state.items.slice(0,-1);
    this.setState({
      items: newArray
    })
  }

  render(){
    return(
      <div>
        <CSSTransitionGroup {...slideAnimation}>
        {this.addElements()}
        </CSSTransitionGroup>

        <div className="btns">
          <div className="btn-add" onClick={()=> this.generateNumber()}>Add Elements</div>
          <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
        </div>
      </div>
    )
  }
}

export default Slide;
