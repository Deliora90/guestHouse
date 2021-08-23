import styled, { css } from "styled-components";
import { TiGroup } from "react-icons/ti";
import Calendar from "../../assets/img/icons/calendar.png";
import { Form } from 'antd';

export const SearchRoomFormStyled = styled(Form)`
  width: 100%;
  padding: 22px 83px 40px  83px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: #FFFFFF;
  height: 124px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
`
export const SearchRoomGroup = styled(Form.Item)`
  z-index: 100;
  width: 260px;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
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

export const InputNumberImg = styled(TiGroup)`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 10px;
  top: 50%;
  color: #777777;
  background-color: #FAFAFA;
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
