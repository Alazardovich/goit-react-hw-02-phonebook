import styled from "styled-components";

export const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;

  & button {
    width: 70px;
    font-size: 14px;
    cursor: pointer;
  }
  & button:hover {
    background-color: #518cfa;
    border-radius: 5px;
  }
`;
