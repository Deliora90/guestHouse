import styled from 'styled-components';

const Background = styled.img`
  z-index: ${(props) => props.theme.zIndexes.background};
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`
export default Background;
