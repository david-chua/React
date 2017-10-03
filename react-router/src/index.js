import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter is the object that interacts with history and knows what's happening in the URL
// Route is the one in charge of receiving information that it is receiving from Browser Router and knows which component it should be using.
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

//Components
import Posts from './components/post';
import Profile from './components/profile';
import PostsItem from './components/post_items';
import NotFound from './components/404';
import Lifecycle from './components/lifecycle';

class App extends Component {
  render(){
    return <div> Home</div>
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <header>
        <NavLink to="/" activeStyle={{color: 'red'}} activeClassName="selected">Home</NavLink><br/>
        <NavLink to="/posts" activeStyle={{color: 'red'}}>Posts</NavLink><br/>
        <NavLink to="/profile">Profile</NavLink><br/>
        <NavLink to="/lifecycle">LIFE</NavLink>
        <hr/>
      </header>
      <Switch>
        <Route path="/posts/:id" component={PostsItem}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/lifecycle" component={Lifecycle}/>
        <Route exact path="/" component={App}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  </BrowserRouter>
  ,document.querySelector('#root'))
