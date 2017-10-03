import React, { Component } from 'react';

class Subscriptions extends Component {
  constructor(props){
    super(props);

    this.state={
      email:'',
      error: false,
      success: false
    }
  }

  saveSubscription = (email) =>{

    const URL_EMAIL = `http://localhost:3004/subcriptions`

    fetch(URL_EMAIL, {
      method: 'post',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    }).then(res=>res.json())
    .then(()=> {
      this.setState({
        email: '',
        success: true
      })
    })
  }

  clearMessages= ()=> {
    setTimeout(function(){
      this.setState({
        error: false,
        success: false
      })
    }.bind(this), 3000)
  }

  handleSubmit = (event) =>{
    //prevents default behavior of form to stop page from reloading
    event.preventDefault();
    //grab the value in the state and send value to the database
    let email = this.state.email;
    let regex = /\S+@\S+\.\S+/;

    if(regex.test(email)){
      this.saveSubscription(email)
    } else {
      this.setState({error:true})
    }
    this.clearMessages()
  }

  onChangeInput = (event) =>{
    this.setState({
      email: event.target.value
    })
  }

  render(){
    return(
      <div className="subscribe_panel">
        <h3> Subscribe To Us </h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="youremail@email.com"
            value={this.state.email}
            onChange={this.onChangeInput}
            />
            <div className={this.state.error ? "error show": "error"}>Check your email</div>
            <div className={this.state.success? "success show": "success"}>Thank you</div>
          </form>
        </div>
        <small>
          Add your emails to receive daily news on the most up to date information in the NBA
        </small>

      </div>
    )
  }
}




export default Subscriptions
