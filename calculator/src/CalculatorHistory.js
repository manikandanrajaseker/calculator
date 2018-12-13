import React, { Component } from 'react';
import './StyleSheet/CalculatorHistory.css'

class CalculatorHistory extends Component {
    execute=(i)=>{
        this.props.onClick(i)
    }
    execute1=(i)=>{
      this.props.onDeleteClick(i)
    }
    rows=(input)=>{
        return input.map((row,i)=> { return  <tr key={i}>
                     <td>{row}</td>
                     <td>{eval(row)}</td>
                     <td><button onClick={()=>this.execute(i)}>EDIT</button>
                     <button onClick={()=>this.execute1(i)}>DELETE</button></td>
                     </tr>;
        }
    );
        
    }
  render() {
    return (
      <div className="history-container">
        <div className="history-Title">Calculator History</div>
        <div className="table">
        <table>
                        <tr>
                            <th>INPUT</th>
                            <th>RESULT</th>
                            <th>ACTION</th>
                        </tr>
                        
                        {this.rows(this.props.input,this.props.onClick)}
                    </table>
        </div>
      </div>
    );
  }
}

export default CalculatorHistory;
