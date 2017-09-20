var React = require('react');
var ReactDOM = require('react-dom');

var TimeComponent = require('./TimeComponent');

class ClockComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Currently the time is</h1>
        <TimeComponent></TimeComponent>
      </div>
    );
  }
}


ReactDOM.render(<ClockComponent />, document.getElementById('clock'));
