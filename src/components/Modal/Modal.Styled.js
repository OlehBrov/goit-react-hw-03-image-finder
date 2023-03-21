import styled from 'styled-components';

// export const modalStyled = styled.div`
  
// `;

export const ModalWindow = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 17, 17, 0.3)  ;
  backdrop-filter: blur(5px);
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
  /* transform: translate(50%, 50%); */
  width: auto;
  height: auto;
  background-color: beige;
  border: 1px solid black;
  }
`;