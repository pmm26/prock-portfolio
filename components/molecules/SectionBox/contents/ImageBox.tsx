
import styled from 'styled-components'

interface ImageType {
  noArea?: any
}

const ImageBox = styled.div<ImageType>`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${({ noArea }) => !noArea &&`
    grid-area: image;
  `}

@media screen and (max-width: 479px) {
     grid-area: image;
  }

`

export default ImageBox
