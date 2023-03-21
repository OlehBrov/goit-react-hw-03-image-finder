import styled from 'styled-components';

// export const modalStyled = styled.div`
  
// `;

export const ModalWindow = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  /* opacity: 0; */
  pointer-events: none;
  transition: all 0.3s;
  & > div {
    position: relative;
  display: flex;
  width: 500px;
  height: 500px;
  background-color: beige;
  border: 1px solid black;
  }
`;