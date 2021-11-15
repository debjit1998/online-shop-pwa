import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 1rem 2em;

  .header {
    font-size: 0.75rem;
    color: var(--rgb-three);
    text-align: center;
    font-weight: bold;
  }

  .city-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .city {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    .image-container {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      overflow: hidden;
    }

    .name {
      font-size: 0.75rem;
      margin-top: 0.5em;
      font-weight: bold;

      &.selected {
        color: blue;
      }
    }
  }
`;
