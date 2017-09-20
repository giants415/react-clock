var React = require('react');

class TimeComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  render(){
    return(
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }



  //functions

}

module.exports = TimeComponent;
