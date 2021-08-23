import styled from "styled-components";
import { JustifyContent, AlignItems, FlexDirection, Position } from "../utils/properties";

// Props
interface StyledFlexProps {
  direction?: FlexDirection;
  align?: AlignItems;
  justify?: JustifyContent;
  gap?: string;
  margin?: string;
  padding?: string;
  position?: Position;
  width?: string;
  height?: string;
}

// Styles
export const Flex = styled.div<StyledFlexProps>`
  display: flex;
  ${(props) => props.width ? "width:" + props.width : ""};
  ${(props) => props.height ? "height:" + props.height : ""};
  position: ${(props) => props.position || "none"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  gap: 0px;
`
export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1188px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 1188px){
    max-width: calc(100% - 34px);
  }
`
