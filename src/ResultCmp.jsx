import React, { Component } from "react";
import "./App.css";

class ResultCmp extends Component {
  state = {
   
  }


  render() {
    const { finalresult } = this.props;

    //basic calculation

    
    return (
      <div className="result">
     <p>
      
         {finalresult}
        
      </p>  
      
      </div>
    );
  }
}

export default ResultCmp;
