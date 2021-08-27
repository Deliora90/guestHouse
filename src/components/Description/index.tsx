import React from "react";
import { Label, Text } from "./styled";
interface DescriptionProps {
  label: string;
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ label, text }: DescriptionProps) => {
  return (
    <Text>
      <Label>{label}:</Label>
      {text}
    </Text>
  )
}

export default Description;
