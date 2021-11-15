import styled from "styled-components";

export const NavContainer = styled.div`
  font-size: 1rem;
  width: 100%;
  height: 4em;
  background-color: #000;
  display: flex;
  align-items: center;

  .nav {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;

    @media (max-width: 400px) {
      width: 95%;
    }

    .brand {
      font-size: 1.5rem;
      color: var(--hex-two);
      font-weight: bold;
    }

    .city {
      font-size: 0.75rem;
      margin-left: auto;
      color: var(--hex-two);
      padding-right: 3em;
      cursor: pointer;
      max-width: 7.5em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        right: 20px;
        top: 4px;
        width: 0px;
        height: 0px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid var(--hex-two);
      }

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }

      @media (max-width: 400px) {
        padding-right: 2em;
        &::after {
          right: 10px;
        }
      }
    }

    .user-status {
      .sign-in {
        font-size: 0.75rem;
        color: var(--hex-two);
        background-color: var(--rgb-three);
        border-color: var(--rgb-three);
        width: 5.3em;
        height: 2.5em;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
`;
