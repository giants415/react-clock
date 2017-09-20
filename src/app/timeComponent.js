var React = require('react');

class TimeComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
    return(
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }

  //custom functions
  tick(){
    this.setState({
      date: new Date()
    });
  }

}

module.exports = TimeComponent;
