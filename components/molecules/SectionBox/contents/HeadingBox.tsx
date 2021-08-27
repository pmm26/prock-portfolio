
import styled from 'styled-components'

interface HeadingType {
  span?: number;
  noArea?: any
}

const HeadingBox = styled.div<HeadingType>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ noArea }) => !noArea &&`
    grid-area: heading;
  `}

  /* 1 Collum Grid*/
  ${({ span }) => span &&`
    grid-column: 1 / span ${span};
  `}
`

export default HeadingBox