import styled from "styled-components";

export const Label = styled.strong`
  margin-right: 4px;
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 600, "14px", "17.07px")}
`
export const Text = styled.p`
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 500, "14px", "17.07px")}
`
