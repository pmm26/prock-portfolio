import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-top: -2px;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.orange};
`