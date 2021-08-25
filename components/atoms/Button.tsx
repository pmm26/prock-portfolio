
import styled from 'styled-components'

interface ButtonType {
  black?: any
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

  background-color: #fafdff;
  color: #f5905b;

  ${({ black }) => black && `
    background-color: #000;
    color: #fff;
  `}
`

export default Button