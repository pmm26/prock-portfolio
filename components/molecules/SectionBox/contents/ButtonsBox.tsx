
import styled from 'styled-components'

interface ButtonType {
  noArea?: any
}

const Buttons = styled.div<ButtonType>`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  ${({ noArea }) => !noArea &&`
    grid-area: buttons;
  `}

  grid-column: 1 / span 2;

`

export default Buttons