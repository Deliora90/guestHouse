import React from "react";
import { StepperWrapper, Step, StepDescription, DividerLine, DividerLineLast, StepCircle } from "./styled";

interface StepperProps{
  steps: string[];
  currentStep: number;
  direction: "vertical" | "horizontal";
}

const Stepper = ({steps, currentStep, direction}: StepperProps) => {
  return (
    <div>
      <StepperWrapper>
        {steps.map((step, index) => {
          const highlighted = index <= currentStep;
          return (
            <Step key={index}>
              <StepDescription highlighted={highlighted}>{step}</StepDescription>
              <StepCircle highlighted={highlighted}/>
              <DividerLine numStep={index} amountSteps={steps.length} highlighted={highlighted}/>
              {index === steps.length - 1 && <DividerLineLast />}
            </Step>
          )
        })}
      </StepperWrapper>
    </div>
  )
}

export default Stepper;
