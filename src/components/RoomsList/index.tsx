import React from "react";
import { IRoom } from "../../models/IRoom";
import { RoomsWrapper, Room, RoomImgContainer, RoomMaxGuestNum, RoomMaxGuest, RoomDescription, RoomHeader, RoomImg, RoomInfo, RoomTitle, RoomControl, RoomImgLabel, RoomControlRow, RoomControlText, RoomControlPrice } from "./styled";
import Description from "../Description";
import { API_STATIC } from "../../utils/consts";
import { BsFillPersonFill } from "react-icons/bs";
import { Button } from "../Buttons/buttons";

interface RoomsListProps {
  rooms: IRoom[] | null;
  direction: "column" | "row";
}
const RoomsList: React.FC<RoomsListProps> = ({ rooms, direction }: RoomsListProps) => {
  return (
    <RoomsWrapper>
      {rooms?.map((room, index) => {
        return (
          <Room direction={direction} key={index}>
            <RoomImgContainer direction={direction}>
              <RoomImg src={`${API_STATIC}${room.mainPicture}`} />
              <RoomImgLabel direction={direction}>
                В наличии {room.amountFree} номеров
              </RoomImgLabel>
            </RoomImgContainer>
            <RoomInfo direction={direction}>
              <RoomHeader>
                <RoomTitle>{room.type}</RoomTitle>
                <RoomMaxGuest>
                  <RoomMaxGuestNum>{room.maxGuests}</RoomMaxGuestNum>
                  <BsFillPersonFill color="#3F8CFF" size="16px" />
                </RoomMaxGuest>
              </RoomHeader>
              <RoomDescription direction={direction}>{room.descriptions}</RoomDescription>
              <Description label="Площадь номера" text={room.square + "м2"} />
              <Description label="Спальные места" text={room.sleepingPlaces} />
              <Description label="Максимальное количество гостей" text={room.maxGuests.toString()} />
              <Description label="Оснащение номера" text={room.equipment} />
              <Description label="Оплата" text={`Взимается ${room.payment} процентов от общей стоимости проживания`} />
            </RoomInfo>
            <RoomControl direction={direction}>
              <RoomControlRow direction={direction}>
                <RoomControlText>
                  Начиная с <br />
                  <RoomControlPrice>{room.sumWithoutFood} руб</RoomControlPrice><br />
                  за 1 ночь, за номер
                </RoomControlText>
                <Button>Выбрать</Button>
                <RoomControlText>Без питания</RoomControlText>
              </RoomControlRow>
              <RoomControlRow direction={direction}>
                <RoomControlText>
                  Начиная с <br />
                  <RoomControlPrice>{room.sumWithFood} руб</RoomControlPrice><br />
                  за 1 ночь, за номер
                </RoomControlText>
                <Button>Выбрать</Button>
                {/* TODO:  Количество человек на которое рассчитано писание выводить внизу*/}
                <RoomControlText>С питанием для 2-х</RoomControlText>
              </RoomControlRow>
            </RoomControl>
          </Room>
        )
      })}
    </RoomsWrapper>
  )
}

export default RoomsList;
