
import styled from 'styled-components'

interface InfoType {
  noArea?: any
}

const InfoBox = styled.div<InfoType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ${({ noArea }) => !noArea &&`
    grid-area: info;
  `}
`

export default InfoBox