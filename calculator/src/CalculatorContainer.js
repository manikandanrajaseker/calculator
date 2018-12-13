import React, { Component } from 'react';
import CalculatorResultDisplay from './CalculatorResultDisplay.js'
import CalculatorHistory from './CalculatorHistory'
import CalculatorKeysDisplay from './CalculatorKeysDisplay.js'
import './StyleSheet/CalculatorContainer.css'
class CalculatorContainer extends Component {
    state={
        calculatedValue:'',
        firstValue:0,
        equalsValue:false,
        lastSymbol:'',
        input:[],
        result:[],
        edit:false,
        editIndex:'',
        keyBoardEquals:false,
        deleteIndex:'',
    }

    calculatValue=(index)=>{
        if(this.state.equalsValue===false){
            this.setState({calculatedValue:(this.state.calculatedValue+index)})
            if(index==="="){
                if(this.state.edit===false){
                    var newArray = this.state.input.slice();    
                    newArray.push(this.state.calculatedValue);   
                    this.setState({input:newArray})
                    this.setState({calculatedValue:eval((this.state.calculatedValue))})
                    var newArray = this.state.result.slice();    
                    newArray.push(eval((this.state.calculatedValue)));   
                    this.setState({result:newArray})
                    this.setState({equalsValue:false})
                }else{
                    const newIds = this.state.input.slice() 
                    newIds[this.state.editIndex] = this.state.calculatedValue 
                    this.setState({input: newIds}) 
                    this.setState({calculatedValue:eval((this.state.calculatedValue))})
                    this.setState({edit:false})
                    this.setState({equalsValue:false})

                }
            }else if(index==="C"){
                this.setState({calculatedValue:this.state.calculatedValue.substring(0,this.state.calculatedValue.length-1)})                
            }
        }else{
            this.setState({calculatedValue:index})
            this.setState({equalsValue:false})
            if(index==="C"){
                this.setState({calculatedValue:this.state.calculatedValue.substring(0,this.state.calculatedValue.length-1)})
            }
        }
    }

    editOperation=(index)=>{
        this.setState({calculatedValue:this.state.input[index]})
        this.setState({equalsValue:false,edit:true,editIndex:index})
    }

    setChangeByKeyBoardKey=(index)=>{
        debugger;
        let keyBoardKey=index.key
        if(!isNaN(keyBoardKey)){
            if(this.state.equalsValue===false){
                if(this.state.keyBoardEquals===true){
                    this.setState({keyBoardEquals:false})
                    this.setState({calculatedValue:keyBoardKey})
                }else
                this.setState({calculatedValue:this.state.calculatedValue+keyBoardKey})
            }else{
                    this.setState({input:keyBoardKey})
                    this.setState({calculatedValue:eval((this.state.calculatedValue))})
                    this.setState({equalsValue:false})
            }
        }else if(keyBoardKey==="+"||keyBoardKey==="-"||keyBoardKey==="/"||keyBoardKey==="*"){
            this.setState({calculatedValue:(this.state.calculatedValue+keyBoardKey)})
        }else if(keyBoardKey==="="||keyBoardKey==="Enter"){
            if(this.state.edit===false){
                var newArray = this.state.input.slice();    
                newArray.push(this.state.calculatedValue);   
                this.setState({input:newArray})
                this.setState({calculatedValue:eval((this.state.calculatedValue))})
                var newArray = this.state.result.slice();    
                newArray.push(eval((this.state.calculatedValue)));   
                this.setState({result:newArray})
                this.setState({equalsValue:false })
            }else{
                const newIds = this.state.input.slice() 
                newIds[this.state.editIndex] = this.state.calculatedValue 
                this.setState({input: newIds}) 
                this.setState({calculatedValue:eval((this.state.calculatedValue))})
                this.setState({edit:false})
                this.setState({equalsValue:false})
            }
            this.setState({keyBoardEquals:true})
            this.setState({equalsValue:true})
        }else if(keyBoardKey==="Backspace"){
            if(this.state.keyBoardEquals!==true&&this.state.equalsValue!==true)
                this.setState({
                    calculatedValue:this.state.calculatedValue.substring(0,this.state.calculatedValue.length-1)
                })                
        }
    }
    DeleteInput=(index)=>{
        this.setState({deleteIndex:index})
        this.state.input.splice(index,1)
        this.state.result.splice(index,1)
    }
    render() {
      return (
        <div className="container">
            <div className="calculator-container">
                <CalculatorResultDisplay result={this.state.calculatedValue} 
                onChangeKey={this.setChangeByKeyBoardKey}/>
                <CalculatorKeysDisplay onClick={this.calculatValue}/>
            </div>
            <CalculatorHistory 
            input={this.state.input} 
            onClick={this.editOperation} 
            onDeleteClick={this.DeleteInput}/>
        </div>
      );
    }
  }
  
  export default CalculatorContainer;