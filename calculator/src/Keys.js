import React, { Component } from 'react';
import './StyleSheet/keys.css'

class CalculatorContainer extends Component {
    handdleEvent=()=>{
        this.props.onClick.onClick(this.props.index)
    }
    render(){
        return(
            <input className="buttons" 
            type="button" 
            value={this.props.index} 
            onClick={this.handdleEvent}>
            </input>
        );
    }
}
export default CalculatorContainer;