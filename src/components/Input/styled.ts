import styled, { css } from "styled-components";
import { TiGroup } from "react-icons/ti";
import Calendar from "../../assets/img/icons/calendar.png";

export const InputStyled = styled.input`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  height: 36px;
  background: #FAFAFA;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #777777;
  ${(props) => props.type === "date" && css`
    &::-webkit-calendar-picker-indicator {
    color: transparent;
    opacity: 1;
    background: url(${Calendar}) no-repeat center;
    background-size: contain;
    }
  `}
`

export const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
 margin-bottom: 6px;

  color: #585858;
`

export const InputNumberImg = styled(TiGroup)`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 10px;
  top: 50%;
  color: #777777;
  background-color: #FAFAFA;
`
