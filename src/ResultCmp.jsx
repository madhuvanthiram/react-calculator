import React, { Component } from "react";
import "./App.css";

class ResultCmp extends Component {
  state = {
   
  }


  render() {
    const { finalresult } = this.props;

//console.log(btnvalue)
    //basic calculation

    
    return (
      <div className="result">
     
      
         {finalresult}
        
      
      </div>
    );
  }
}

export default ResultCmp;
