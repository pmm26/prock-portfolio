
import styled from 'styled-components'

export const ColoredSection = styled.div`
  border: 1px none #000;
  border-radius: 0px;
  background-color: #f5905b;
  transition: opacity 50ms cubic-bezier(.23, 1, .32, 1);
`

export const WhiteSection = styled.div`
  margin-top: -2px;
  margin-bottom: 0px;
  padding-top: 150px;
  padding-bottom: 150px;
  background-image: url('/images/top-wave.svg'), url('/images/bottom-wave.svg');
  background-position: 50% 100%, 0px 0px;
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;
`