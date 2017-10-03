import React, { Component } from 'react';
import { connect } from 'react-redux'; //connect actions with reducers
import * as actions from '../actions'; // will bring everything from the action folder.

//We need to call actions and the actions will go to reducers and reducer will update state and then the render should update to show new state.

class MoviesList extends Component {
//after component renders, it will trigger that action creator.
  componentWillMount(){
    this.props.moviesList()
  }

  renderList = (movies) =>{
    if(movies){
      return movies.map((movie)=>{
        return (
          <div>{movie.name}</div>
        )
      })
    }
  }

  render() {
    return (
      <div key={this.props.id}>
        {this.renderList(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    movies: state.movies //grabs the movies from the reducers
  }
}
//container is a compnent that is directly connected to redux state.

//overall we have the reducers and action creators. we imported connect to make a connection between the action creator and reducers. we imported actions so we can use them.

//We then created the mapStateToProps to inject the new state inside props so we can access it. We use the actions we've imported so we can call it when it's ready. Once it's available, we then call it.
export default connect(mapStateToProps, actions)(MoviesList);
