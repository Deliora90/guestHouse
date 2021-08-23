import React from 'react';
import styled from 'styled-components';
import SearchRoomForm from "../components/SearchRoomForm";
import { Wrapper } from '../styles/layout';
import MainBackground from "../assets/img/main-background.jpg";
import WaveImg from "../assets/img/wave.svg";

const WaveContainer = styled.div`
  position: relative;
  width: 100%;
  height: 680px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${MainBackground}) top/cover no-repeat;
`
const Wave = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: 0 110px;
`

const Main: React.FC = () => {
  return (
    <WaveContainer>
      <Wrapper>
        <SearchRoomForm />
      </Wrapper>
      <Wave src={WaveImg} />
    </WaveContainer>
  )
}

export default Main;
