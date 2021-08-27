
import styled from 'styled-components'

interface ImageType {
  noArea?: any
}

const ImageBox = styled.div<ImageType>`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;

  ${({ noArea }) => !noArea &&`
    grid-area: image;
  `}


`

export default ImageBox
