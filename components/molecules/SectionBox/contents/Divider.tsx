
import styled from 'styled-components'

interface DividerType {
  noArea?: any;
  mobileOrder?: number;
  white?: any;
}

const Divider = styled.div<DividerType>`
  border-bottom: 2px dashed ${props => props.theme.colors.black};

  ${({ white, theme }) => white && `
    border-bottom: 2px dashed ${theme.colors.white};

  `}

  grid-column: 1 / span 2;

  @media screen and (max-width: 479px) {
    ${({ mobileOrder: order }) => order && `
      order: ${order};
    `}
     grid-column: 1;
  }


`

export default Divider