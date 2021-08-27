import styled from "styled-components";

interface pType {
  white?: any
}

export const P = styled.p<pType>`
  letter-spacing: 0;
  text-align: center;
  /* margin-top: 0px; */
  /* margin-bottom: 0px; */
  font-family: 'Futura-Medium', sans-serif;
  font-size: ${props => props.theme.fontSizes.text}px;
  
  ${({ white, theme }) => white && `
    color:  ${theme.colors.white};
  `}

`
