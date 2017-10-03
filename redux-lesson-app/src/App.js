import React, { Component } from 'react';
import MoviesList from './containers/movies_List';

//We need to call actions and the actions will go to reducers and reducer will update state and then the render should update to show new state.

class App extends Component {
  render() {
    return (
      <div>
        <MoviesList/>
      </div>
    );
  }
}

export default App;
