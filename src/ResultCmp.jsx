import React, { Component } from "react";
import "./App.css";

class ResultCmp extends Component {
  state = {
    finalresult:""
  };
  click()
  {
  if (this.props.btnvalue === "=")

   {
    this.calculate();
   
  }
  }



  render() {
    const { finalresult } = this.props;

//console.log(btnvalue)
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
