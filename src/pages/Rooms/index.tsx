import React from "react";
import Stepper from "../../components/Stepper";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import RoomsList from "../../components/RoomsList";
import { Wrapper } from "../../styles/layout";

const Rooms: React.FC = () => {
  const { typeDevice } = useTypesSelector(state => state.global);
  const { rooms } = useTypesSelector(state => state.rooms);
  const [currentStep] = React.useState(0);
  const steps = [
    {
      title: "Номер и цена",
      content: <RoomsList rooms={rooms} direction={typeDevice === "tablet" || typeDevice === "phone" ? "column" : "row"}/>,
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

  // const onNextStep = () => {
  //   if (currentStep < steps.length - 1) {
  //     setCurrentStep((step) => step += 1);
  //   }
  // }
  // const onPreviousStep = () => {
  //   if (currentStep > 0) {
  //     setCurrentStep((step) => step -= 1);
  //   }
  // }

  return (
    <div>
      {typeDevice !== "phone" &&
        <Stepper steps={steps.map((step) => step.title)}
          currentStep={currentStep}
          color={"#3F8CFF"}
        />
      }
      <Wrapper>
        {steps[currentStep].content}
      </Wrapper>
    </div>
  )
}

export default Rooms;
