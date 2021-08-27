import styled from "styled-components";
// Props
interface RoomProps {
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
  flex-direction: ${({ direction }) => direction};
  gap: 21px;
  background: #FFFFFF;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`
export const RoomImgContainer = styled.div<RoomProps>`
  width: ${({ direction }) => direction === "row" ? "30%" : "100%"};
  position: relative;
  max-height: 300px;
  overflow: hidden;
  border-radius: ${({ direction }) => direction === "column" ? "6px 6px 0px 0px" : "6px"};
`
export const RoomImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  //border-radius: 6px;

`
export const RoomImgLabel = styled.div<RoomProps>`
  position: absolute;
  left: 0;
  bottom:  ${({ direction }) => direction === "column" ? "0" : "30px"};
  width: 100%;
  padding: 8px 0px;
  background-color: #FFB23F;
  color: #FFF;
  text-align: center;
`
export const RoomInfo = styled.div<RoomProps>`
  width: ${({ direction }) => direction === "row" ? "50%" : "100%"};
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

export const RoomDescription = styled.h2<RoomProps>`
  max-width: ${({ direction }) => direction === "column" ? "100%" : "78%"};
  text-align: ${({ direction }) => direction === "column" ? "center" : "left"};
  margin-bottom: 25px;
  ${(props) => props.theme.mixins.fontStyle("Montserrat", "normal", 400, "14px", "17px")}
`
export const RoomControl = styled.div<RoomProps>`
  width: ${({ direction }) => direction === "row" ? "20%" : "100%"};
  display: flex;
  gap: ${({ direction }) => direction === "column" ? "16px" : "0"};
  justify-content: space-between;
  flex-direction:  ${({ direction }) => direction === "column" ? "row" : "column"};
`
export const RoomControlRow = styled.div<RoomProps>`
  display: flex;
  width: ${({ direction }) => direction === "row" ? "100%" : "50%"};
  padding: 13px 0px;
  flex-direction: column;
  ${({ direction }) => direction === "column" ? "1px solid #3F8CFF" : "none"};
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
