import styled from "styled-components";
import { JustifyContent, AlignItems, FlexDirection } from "../utils/properties";

// Props
interface StyledFlexProps {
  direction?: FlexDirection;
  align?: AlignItems;
  justify?: JustifyContent;
  gap?: string;
}

// Styles
export const Flex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  gap: 0px;
`
export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1188px;
  overflow: hidden;
  @media screen and (max-width: 1188px){
    max-width: calc(100% - 34px);
  }
`
