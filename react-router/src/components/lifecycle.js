import React, { Component } from 'react';

class Lifecycle extends Component{

  // Get Default state
  constructor (props) {
    super(props)


      //set initial state
      this.state = {
        title: 'Pulp fiction in cinemas',
        body: 'some dummy text'
      }
  }
//not called when component starts
//only happens when it receive new things.
  componentWillReceiveProps(){
    console.log('Before receiving props')
  }

  // Before gets created
  componentWillMount(){
    console.log('Before component gets created');
  }

  componentWillUpdate(){
    console.log('Before Update')
  }

  componentDidUpdate(){
    console.log('After Update')
  }

  shouldComponentUpdate(nextProps, nextState){
   if(nextState.title === "something else"){
     return false
   }
   return true;
  }
  //render jsx
  render(){
    return (
      <div>
        <h4> {this.state.title}</h4>
        <div>{this.state.body}</div>
        <button onClick={()=> this.setState({title: 'something else'})}>Click to Change</button>
      </div>
    )
  }
  //after component is mounted
  componentDidMount(){
    console.log('After a Component is Mounted')
        document.querySelector('h4').style.color= 'red'
  }

 //
  componentWillUnmount(){
      console.log('UNMOUNT')
  }

}

export default Lifecycle
