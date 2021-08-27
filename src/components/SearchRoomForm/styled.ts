import styled, { css } from "styled-components";

interface SearchRoomFormProps{
  isDesktop: boolean;
}

interface SearchRoomGroupProps{
  minWidth?: string;
}

export const SearchRoomFormStyled = styled.form<SearchRoomFormProps>`
  width: 100%;
  padding: 22px 83px 40px 83px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
  background: ${(props) => props.theme.colors.bgColor };
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  flex-direction: ${(props) => props.isDesktop ? "row" : "column"};
  ${(props) => !props.isDesktop && css`
    padding: 40px;
    max-width: 620px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `}
`
export const SearchRoomGroup = styled.div<SearchRoomGroupProps>`
  z-index: ${(props) => props.theme.zIndexes.pageWrapper};
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) => props.minWidth && css`
    min-width: ${props.minWidth};
  `}
`

export const SearchRoomError = styled.span`
  color: #cc0000;
  position: absolute;
  bottom: -16px;
  font-size: 12px;
`
