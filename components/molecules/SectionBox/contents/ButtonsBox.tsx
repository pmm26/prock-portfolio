
import styled from 'styled-components'

interface ButtonType {
  noArea?: any
  mobileOrder?: number;
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

  @media screen and (max-width: 479px) {
    ${({ mobileOrder: order }) => order && `
      order: ${order};
    `}
     grid-column: 1;
  }

`

export default Buttons