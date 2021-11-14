import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    0%{
        transform: translateY(-4rem);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  .content {
    margin: 4rem auto 0;
    width: 70%;
    background-color: var(--hex-two);
    animation: ${slideIn} 0.5s ease-in-out;

    @media (max-width: 400px) {
      width: 90%;
    }
  }
`;
