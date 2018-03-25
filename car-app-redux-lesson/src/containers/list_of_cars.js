import React, { Component } from 'react';
import { connect } from 'react-redux';


class ListOfCars extends Component {

  listofCars = ({cars}) => {
      if(cars){
        return cars.map((car)=>{
          return(
            <div className="car_item" key={car.id}>
              {car.model}
            </div>
          )
        })
      }
  }

  render(){
    return(
      <div>
        {this.listofCars(this.props)}
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    cars: state.cars
  }
}

export default connect(mapStateToProps, null)(ListOfCars)
