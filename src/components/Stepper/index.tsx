import React from "react";
import { StepperWrapper, Step, StepDescription, DividerLine, DividerLineLast, StepCircle } from "./styled";

interface StepperProps {
  steps: string[];
  currentStep: number;
  color: string;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, color }: StepperProps) => {
  return (
    <div>
      <StepperWrapper>
        {steps.map((step, index) => {
          const highlighted = index <= currentStep;
          return (
            <Step key={index}>
              <StepDescription highlighted={highlighted} color={color}>{step}</StepDescription>
              <StepCircle highlighted={highlighted} color={color} />
              <DividerLine numStep={index} amountSteps={steps.length} highlighted={highlighted} color={color} />
              {index === steps.length - 1 && <DividerLineLast />}
            </Step>
          )
        })}
      </StepperWrapper>
    </div>
  )
}

export default Stepper;
