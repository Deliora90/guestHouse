import styled from "styled-components";

type ButtonsType = "primary" | "flat";

// Props
interface ButtonProps{
  typeButton?: ButtonsType;
  minWidght?: string;
  margin?: string;
}

// Styled
export const ButtonIcon = styled.button`
  height: 24px;
  width: 24px;
  display: flex;
  cursor: pointer;
  position: relative;
  background-color: transparent;
`

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  min-width: ${(props) => props.minWidght ?? "140px"};
  margin: ${(props) => props.margin ?? "0"};;
  padding: 10px 29px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  ${(props) => {
    const { primaryButton, flatButton } = props.theme.colors;

    switch(props.typeButton) {
      case "primary":
        return`
          color: ${primaryButton.ftColor};
          background-color: ${primaryButton.bgColor};
          box-shadow: 0px 2px 20px ${primaryButton.brColor};
          border-radius: 10px;
        `
      case "flat":
        return`
          color: ${flatButton.ftColor};
          background-color: ${flatButton.bgColor};
          border: 2px solid ${flatButton.brColor};
          border-radius: 20px;
        `
      default:
        return `
          color: ${primaryButton.ftColor};
          background-color: ${primaryButton.bgColor};
          box-shadow: 0px 2px 20px ${primaryButton.brColor};
          border-radius: 10px;
        `
    }
  }}
`
