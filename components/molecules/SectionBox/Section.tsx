/* eslint-disable @next/next/no-img-element */

import styled from 'styled-components'

export const ColoredSection = styled.div`
  border: 1px none #000;
  background-color: ${props => props.theme.colors.orange};
`


export const WhiteSection = (props: {children: React.ReactNode}) => {
  return (
    <div>
        <img
          src="/images/bottom-wave.svg"
          alt=""
          className="section-image-bot"
        />
      {props.children}
      <img
          src="/images/top-wave.svg"
          alt=""
          className="section-image-top"
        />
    </div>
  )
}