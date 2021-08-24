import React from "react";
import Stepper from "../../components/Stepper";
import { Button } from "../../components/Buttons/buttons";

const Rooms: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = [
    {
      title: "Номер и цена",
      content: 'First-content',
    },
    {
      title: "Бронь и оплата",
      content: 'Second-content',
    },
    {
      title: "Подтверждение",
      content: 'Last-content',
    },
  ];
  return (
    <div>
      <Stepper steps={steps.map((step) => step.title)}
        direction="horizontal"
        currentStep={currentStep}
      />
      <div style={{width: "100%", height: "500px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        {steps[currentStep].content}
      </div>
      <Button onClick={() => {
        if(currentStep > 0)
          setCurrentStep((step) => step -= 1)
      }}>Last</Button>
      <Button onClick={() => {
        if(currentStep < steps.length - 1)
          setCurrentStep((step) => step += 1)
      }}>Next</Button>
    </div>
  )
}

export default Rooms;
