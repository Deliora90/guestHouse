import React from 'react';
import { SearchRoomFormStyled, SearchRoomGroup, Input, Label, InputNumberImg } from "./styled";
import { Button } from "../../styles/buttons";
import { useActions } from '../../hooks/useActions';
import { Form } from 'antd';

const SearchRoomForm: React.FC = () => {
  const { getAllRooms } = useActions();
  const [form] = Form.useForm();

  const onSubmit = (data: any) => {
    getAllRooms(data);
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <SearchRoomFormStyled form={form} onFinish={onFinish}>
      <SearchRoomGroup name="dateIn">
        <Label htmlFor="firstDate">Даты заезда</Label>
        <Input
          type="date"
          id="firstDate"
          defaultValue={"2021-08-20"}
        />
      </SearchRoomGroup>
      <SearchRoomGroup name="dateOut">
        <Label htmlFor="secondDate">Даты выезда</Label>
        <Input
          type="date"
          id="secondDate"
          defaultValue={"2021-08-20"}
        />
      </SearchRoomGroup>
      <SearchRoomGroup name="amountPerson">
        <Label htmlFor="amountPerson">Гостей</Label>
        <InputNumberImg />
        <Input
          type="number"
          id="amountPerson"
          defaultValue={1}
        />
      </SearchRoomGroup>
      <SearchRoomGroup>
        <Button htmlType="submit">
          Проверить
        </Button>
      </SearchRoomGroup>
    </SearchRoomFormStyled>
  )
}

export default SearchRoomForm;
