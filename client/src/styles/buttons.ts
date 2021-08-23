import styled from "styled-components";
import { Button as AntdButtom } from "antd";

export const ButtonIcon = styled.button`
  height: 24px;
  width: 24px;
  display: flex;
  cursor: pointer;
  position: relative;
  background-color: transparent;
`

export const Button = styled(AntdButtom)`
  z-index: 100;
  width: 140px;
  height: 36px;
  left: 1349px;
  top: 421px;

  background: #3F8CFF;
  box-shadow: 0px 2px 20px rgba(63, 140, 255, 0.5);
  border-radius: 10px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
`
