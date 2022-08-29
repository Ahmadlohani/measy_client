import { useState } from "react"
import AddToCart from "./cart/AddToCart";
import React from "react";
const EventRegistration = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [ cartData, setCartData] = useState({});
    const next = () => {
        let currStep = currentStep
        currStep = currStep >= 2 ? 3 : currStep + 1
        setCurrentStep(currStep);
    }
        
    const prev = () => {
        let currStep = currentStep
        currStep = currStep <= 1 ? 1 : currStep - 1
        setCurrentStep(currStep);
    }
    const previousButton = () => {
        let currStep = currentStep;
        if(currStep !==1){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={prev}>
            Previous
            </button>
          )
        }
        return null;
    }
    const nextButton = () => {
        let currStep = currentStep;
        if(currStep < 3){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={next}>
            Next
            </button>        
          )
        }
        return null;
    }
    function Step1(props) {
        if (props.currentStep !== 1) {
          return null
        } 
        return(
          <AddToCart setCartData={setCartData} />
        );
    }
      
    function Step2(props) {
        if (props.currentStep !== 2) {
          return null
        } 
        return(
            <div>Good Luck</div>
        );
    }
      
    function Step3(props) {
        if (props.currentStep !== 3) {
          return null
        } 
        return(
            <div>Very Good Luck</div>
        );
    }
    return (
        <React.Fragment>
        <h1>React Wizard Form 🧙‍♂️</h1>
        <p>Step {currentStep} </p> 

        <form className="text-center">
        {/* 
            render the form steps and pass required props in
        */}
        <Step1 
          currentStep={currentStep} 
        //   handleChange={this.handleChange}
        //   email={this.state.email}
        />
        <Step2 
          currentStep={currentStep} 
        //   handleChange={this.handleChange}
        //   username={this.state.username}
        />
        <Step3 
          currentStep={currentStep} 
        //   handleChange={this.handleChange}
        //   password={this.state.password}
        />
        {previousButton()}
        {nextButton()}
      </form>
      </React.Fragment>
    );
}

export default EventRegistration;
