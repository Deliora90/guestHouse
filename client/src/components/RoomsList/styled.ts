import styled, { css } from "styled-components";
// Props
interface RoomProps{
  direction: "row" | "column";
}

// Styled
export const RoomsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin: 43px 0px;
`
export const Room = styled.li<RoomProps>`
  display: flex;
  padding: 20px;
  flex-direction: ${({direction}) => direction};
  gap: 21px;
  background: #FFFFFF;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`
export const RoomImgContainer = styled.div`
  width: 30%;
  position: relative;
  max-height: 300px;
`
export const RoomImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 6px;
`
export const RoomImgLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 30px;
  width: 100%;
  padding: 8px 0px;
  background-color: #FFB23F;
  color: #FFF;
  text-align: center;
`
export const RoomInfo = styled.div`
  width: 50%;
`
export const RoomTitle = styled.h2`
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 600, "22px", "27px")}
`
export const RoomHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const RoomMaxGuest = styled.div`
  display: flex;
  align-items: center;
`
export const RoomMaxGuestNum = styled.p`
  color: #3F8CFF;
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 800, "18px", "22px")}
`

export const RoomDescription = styled.h2`
  max-width: 78%;
  margin-bottom: 25px;
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 400, "14px", "17px")}
`
export const RoomControl = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`
export const RoomControlRow = styled.div`
  display: flex;
  padding: 13px 0px;
  flex-direction: column;
  border-bottom: 1px solid #3F8CFF;
  &:last-child{
    border-bottom: none;
  }
`
export const RoomControlText = styled.p`
  margin: 5px 0px;
  text-align: center;
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 500, "12px", "15px")}
`
export const RoomControlPrice = styled.strong`
  color: #FFB23F;
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 600, "20px", "24.38px")}
`
