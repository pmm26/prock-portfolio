import styled from "styled-components";


interface HeadingType {
  fontSize?: "text" | "s" | "m" | "l" | "xl"
}

export const H1 = styled.h1<HeadingType>`
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: transparent;
  font-family: 'Futura-Bold', sans-serif;
  color: ${props => props.theme.colors.purpleish};
  font-weight: 700;

  font-size: ${props => props.theme.fontSizes.xl}px;

  line-height: 60px

  ${({ fontSize, theme}) => fontSize &&`
    font-size: ${theme.fontSizes[fontSize]}px;
  `}
`

export const H2 = styled.h2<HeadingType>`
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Futura-Medium', sans-serif;
  color: ${props => props.theme.colors.purpleish};
  line-height: 36px;
  font-weight: 400;

  font-size: ${props => props.theme.fontSizes.l}px;

  ${({ fontSize, theme}) => fontSize &&`
    font-size: ${theme.fontSizes[fontSize]}px;
  `}
`
export const H3 = styled.h3<HeadingType>`
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Futura-Medium', sans-serif;
  color: ${props => props.theme.colors.purpleish};
  line-height: 30px;
  font-weight: 500;

  font-size: ${props => props.theme.fontSizes.m}px;

  ${({ fontSize, theme}) => fontSize &&`
    font-size: ${theme.fontSizes[fontSize]}px;
  `}
`
export const H4 = styled.h4<HeadingType>`
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Futura-Medium', sans-serif;
  color: ${props => props.theme.colors.purpleish};
  line-height: 24px;

  font-size: ${props => props.theme.fontSizes.s}px;
  ${({ fontSize, theme}) => fontSize &&`
    font-size: ${theme.fontSizes[fontSize]}px;
  `}
`

