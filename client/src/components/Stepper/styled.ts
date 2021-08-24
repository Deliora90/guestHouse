import styled, { css } from "styled-components";

interface DividerLineProps {
  numStep: number;
  amountSteps: number;
  highlighted: boolean;
}
interface StepCircleProps {
  highlighted: boolean;
}
interface StepDescriptionProps {
  highlighted: boolean;
}

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
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #C4C4C4;
  transition: all 0.3s ease 0s;
  ${(props) => props.highlighted && css`
    color: #3F8CFF;
  `}
`
export const StepCircle = styled.div<StepCircleProps>`
  width: 23px;
  height: 23px;
  background-color: #bdbdbd;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0, -40%);
  left: 49%;
  z-index: 1;
  transition: all 0.3s ease 0s;
  ${(props) => props.highlighted && css`
    background-color: #3F8CFF;
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
  background-color: #bdbdbd;
  position: absolute;
  top: 50%;
  width: 50%;
  left: 50%;
`

export const DividerLine = styled.div<DividerLineProps>`
  z-index: 0;
  height: 4px;
  background-color: #bdbdbd;
  position: absolute;
  top: 50%;
  transition: all 0.3s ease 0s;
  ${(props) => props.highlighted && css`
    background-color: #3F8CFF;
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
