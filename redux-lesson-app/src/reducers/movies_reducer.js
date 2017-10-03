
// const data = {
//   type: 'MOVIES_LIST',
//   payload: [
//     {id:"1", name: "PULP FICTION"}
//   ]
// }

// const state = 0 // application state loads at 0 then something happens like a click, the action creator creates a type and payload in the function and does the action that it's suppose to do in the function below.

//action creator will go to reducers and pass the object that will be received by all the reducer and it will try to match the type which is the case.

//The reducer will then grab the payload and set a new state. 

export default function(state = null, action){
   switch(action.type){
    case 'MOVIES_LIST':
      return action.payload;
    default:
      return state;
   }
}
