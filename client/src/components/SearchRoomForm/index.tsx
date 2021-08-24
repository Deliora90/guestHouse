import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from "moment";
import { SearchRoomFormStyled, SearchRoomGroup, SearchRoomError } from "./styled";
import { Button } from "../Buttons/buttons";
import { useActions } from '../../hooks/useActions';
import { useForm } from "react-hook-form";
import Input from "../Input";
import { useTypesSelector } from '../../hooks/useTypesSelector';

type FormData = {
  dateIn: Date;
  dateOut: Date;
  amountPerson: number;
}

const SearchRoomForm: React.FC = () => {
  const { isDesktop } = useTypesSelector(state => state.global);
  const history = useHistory();
  const { getAllRooms } = useActions();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: { dateIn: moment().format("YYYY-MM-DD"), dateOut: moment().add(3, 'days').format("YYYY-MM-DD"), amountPerson: 1 },
  });

  const onSubmit = (data: FormData) => {
    getAllRooms(data);
    history.push('/rooms');
  }

  return (
    <SearchRoomFormStyled onSubmit={handleSubmit(onSubmit)} isDesktop={isDesktop}>
      <SearchRoomGroup minWidth={isDesktop ? "" : "100%"}>
        <Input
          type="date"
          id="dateIn"
          labelText="Даты заезда"
          {...register("dateIn", { min: moment().format("YYYY-MM-DD") })}
        />
        {errors.dateIn && <SearchRoomError>Не может быть меньше текущей даты</SearchRoomError>}
      </SearchRoomGroup>
      <SearchRoomGroup minWidth={isDesktop ? "" : "100%"}>
        <Input
          type="date"
          id="dateOut"
          labelText="Даты выезда"
          {...register("dateOut", { min: moment().format("YYYY-MM-DD") })}
        />
        {errors.dateOut && <SearchRoomError>Не может быть меньше текущей даты</SearchRoomError>}
      </SearchRoomGroup>
      <SearchRoomGroup minWidth={isDesktop ? "" : "100%"}>
        <Input
          type="number"
          id="amountPerson"
          labelText="Гостей"
          {...register("amountPerson", { min: 1, max: 100 })}
        />
        {errors.amountPerson && <SearchRoomError>Не может быть меньше 1</SearchRoomError>}
      </SearchRoomGroup>
      <Button type="submit">
        Проверить
      </Button>
    </SearchRoomFormStyled>
  )
}

export default SearchRoomForm;
