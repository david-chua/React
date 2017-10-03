import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Header from './header';
import Footer from './footer';
import Home from './home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Home/>
            <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
