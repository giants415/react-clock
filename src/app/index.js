var React = require('react');
var ReactDOM = require('react-dom');

class ClockComponent extends React.Component {
  render() {
    return <h1>Heloooooooo me</h1>;
  }
}


ReactDOM.render(<ClockComponent />, document.getElementById('clock'));
