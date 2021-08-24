import React from 'react';
import SearchRoomForm from "../../components/SearchRoomForm";
import { Wrapper } from '../../styles/layout';
import WaveImg from "../../assets/img/wave.svg";
import Background from "../../components/Background/Background";
import { WaveContainer, Wave } from "./styled";
import MainBackground from "../../assets/img/main-background.jpg";

const Main: React.FC = () => {
  return (
    <WaveContainer>
      <Background src={MainBackground}/>
      <Wrapper>
        <SearchRoomForm />
      </Wrapper>
      <Wave src={WaveImg} />
    </WaveContainer>
  )
}

export default Main;
