var React = require('react');
var ReactDOM = require('react-dom');
require('./style/final.css');

var TimeComponent = require('./TimeComponent');

class ClockComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Current Date and Time</h1>
        <TimeComponent></TimeComponent>
      </div>
    );
  }
}


ReactDOM.render(<ClockComponent />, document.getElementById('clock'));
