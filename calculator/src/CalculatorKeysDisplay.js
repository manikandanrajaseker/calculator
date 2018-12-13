import React, { Component } from 'react';
import Keys from './Keys'
class CalculatorContainer extends Component {
    
    render() {
      return (
        <div>
            <Keys index="1" onClick={this.props}/>
            <Keys index="2" onClick={this.props}/>
            <Keys index="3" onClick={this.props}/>
            <Keys index="+" onClick={this.props}/>
            <Keys index="4" onClick={this.props}/>
            <Keys index="5" onClick={this.props}/>
            <Keys index="6" onClick={this.props}/>
            <Keys index="-" onClick={this.props}/>
            <Keys index="7" onClick={this.props}/>
            <Keys index="8" onClick={this.props}/>
            <Keys index="9" onClick={this.props}/>
            <Keys index="C" onClick={this.props}/>
            <Keys index="*" onClick={this.props}/>
            <Keys index="0" onClick={this.props}/>
            <Keys index="/" onClick={this.props}/>
            <Keys index="=" onClick={this.props}/>
        </div>
      );
    }
  }
  
  export default CalculatorContainer;