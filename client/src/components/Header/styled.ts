import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  padding: 9px calc((100vw - 1188px)/ 2);
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1188px){
    padding: 5px 17px;
  }
`;
