var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


//state
//lifecycle - hooks
// UI
// Use render method to hook UI

//creating modern React Component
//class is ES6 syntax which most modern browsers use.
class App extends React.Component {
  render(){
    return (
      <div>
        Hello React Training!
      </div>
    )
  }
}
// document.getElementById gets the id and renders the app compnent there.
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
