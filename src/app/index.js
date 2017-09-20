var React = require('react');
var ReactDOM = require('react-dom');

var ClockComponent = React.createClass({
  render:function(){
    return(
      <h1>Heloooooooo Vinocur</h1>
    );
  }
});


ReactDOM.render(<ClockComponent />, document.getElementById('clock'));
