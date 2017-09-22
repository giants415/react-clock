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
      <div>
        <span>{this.state.date.toLocaleDateString()}</span>
        <br />
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
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
