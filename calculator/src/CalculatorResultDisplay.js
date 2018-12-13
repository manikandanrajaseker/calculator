import React, { Component } from 'react';
import './StyleSheet/CalculatorResultDisplay.css'
class CalculatorContainer extends Component {
    render() {
      return (
        <input className="calculator-Display" 
          onKeyDown={(e)=>this.props.onChangeKey(e)}
          value={this.props.result}>
        </input>
      );
    }
  }
  
  export default CalculatorContainer;                                                                       