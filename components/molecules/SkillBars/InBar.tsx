
import styled from 'styled-components'

interface InBarType {
  percentage: number
}

const InBar = styled.div<InBarType>`
  height: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 0px;
  border-radius: 4px;
  background-color: #dd5e98;

  width: ${({percentage}) => `${percentage}%`};
`

export default InBar