
import styled from 'styled-components'

interface ButtonType {
  black?: any;
  href?: string;
}

const Button = styled.button<ButtonType>`
  display: flex;
  width: 200px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-family: 'Futura book font', sans-serif;
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  border: none;
  
  background-color: #fafdff;
  color: ${props => props.theme.colors.orange};

  ${({ black, theme }) => black && `
    background-color:  ${theme.colors.black};
    color: #fff;
  `}
`

export default Button