import styled, { css } from "styled-components";

// Props
interface DividerLineProps {
  numStep: number;
  amountSteps: number;
  highlighted: boolean;
  color: string;
}
interface StepCircleProps {
  highlighted: boolean;
  color: string;
}
interface StepDescriptionProps {
  highlighted: boolean;
  color: string;
}

// Styled
export const StepperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Step = styled.div`
  height: 101px;
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`
export const StepDescription = styled.p<StepDescriptionProps>`
  line-height: 22px;
  color: #C4C4C4;
  transition: all 0.3s ease 0s;
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 600, "18px")}
  ${(props) => props.highlighted && css`
    color: ${props.color};
  `}
`
export const StepCircle = styled.div<StepCircleProps>`
  z-index: 1;
  width: 23px;
  height: 23px;
  background-color: #C4C4C4;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 49%;
  transform: translate(0, -40%);
  transition: all 0.3s ease 0s;
  ${(props) => props.highlighted && css`
    background-color: ${props.color};
    &::after{
      content: "";
      position: absolute;
      width: 13px;
      height: 13px;
      top: 50%;
      transform: translate(0, -45%);
      left: 22%;
      background-color: #FFF;
      border-radius: 50%;
    }
  `}
`
export const DividerLineLast = styled.div`
  height: 4px;
  background-color: #C4C4C4;
  position: absolute;
  top: 50%;
  width: 50%;
  left: 50%;
`

export const DividerLine = styled.div<DividerLineProps>`
  z-index: 0;
  height: 4px;
  background-color: #C4C4C4;
  position: absolute;
  top: 50%;
  transition: all 0.3s ease 0s;
  ${(props) => props.highlighted && css`
    background-color: ${props.color};
  `}
  ${({ numStep }) => {
    if (numStep === 0) {
      return `
        width: 50%;
      `
    } else {
      return `
        width: 100%;
      `
    }
  }}
  ${({ numStep }) => {
    if (numStep === 0) {
      return `
        left: 0%;
      `
    } else {
      return `
        left: -50%;
      `
    }
  }}
`
