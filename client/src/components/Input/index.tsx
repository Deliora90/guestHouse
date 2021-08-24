import React from "react"
import { InputStyled, Label } from "./styled";
import { InputNumberImg } from "./styled";

interface InputProps {
  type: "date" | "password" | "text" | "number";
  id: string;
  labelText?: string;
  defaultValue?: string | number;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props: InputProps, _ref: any) => {
  return (
    <div>
      {props.labelText
        ? <Label htmlFor={props.id}>{props.labelText}</Label>
        : <></>
      }
      <InputStyled
        ref={_ref}
        {...props}
      />
      {props.type === "number" ? <InputNumberImg /> : <></>}
    </div>
  )
})

export default Input;
