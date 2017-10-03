import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render(){
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.lastname}</div>
        <div>{this.props.age}</div>
      </div>
    );
  }
}

User.propTypes={
  //name: propTypes.string, //string
  lastname: PropTypes.string, //string
  age: PropTypes.number, //number
  //hobbies: PropTypes.array, //array
  spanish: PropTypes.bool, //number
  message: PropTypes.func, //Function
  car: PropTypes.object,

  //name: PropTypes.oneOf(['Francis', 'James']), // ACCEPT DIFFERENT VALUES

  name:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['Francis', 'James'])
  ]),

  hobbies: PropTypes.arrayOf(PropTypes.string),
  //mother: PropTypes.string.isRequired,

  mother: function(props, propName, componentName){
    if(props[propName] !== 'Martha'){
      return new Error(`The name ${props[propName]} is inccorect, should be Jane`)
    }
  }
}

export default User;
