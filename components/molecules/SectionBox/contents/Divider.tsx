
import styled from 'styled-components'

interface DividerType {
  noArea?: any
}

const Divider = styled.div<DividerType>`
  border-style: none none dashed;
  border-width: 2px;
  border-color: #fff #fff #000;

  grid-column: 1 / span 2;


  @media screen and (max-width: 479px) {
     grid-column: 1;
     grid-area: divider;
  }


`

export default Divider