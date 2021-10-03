
import styled from 'styled-components'

interface InfoType {
  noArea?: any;
  center?: any;
  mobileOrder?: number;
}

const InfoBox = styled.div<InfoType>`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
  ${({ center }) => center && `
    justify-content: center;
    align-items: center; 
    text-align: center;
  `}

  ${({ noArea }) => !noArea && `
    grid-area: info;
  `}

  @media screen and (max-width: 479px) {
    ${({ mobileOrder: order }) => order && `
      order: ${order};
    `}
     justify-content: center;
     text-align: center;
  }
`

export default InfoBox