
import styled from 'styled-components'

const StyledIcons = styled.img`
  height: 50px;
  margin-top: 0px;
  margin-right: 12px;
  padding-bottom: 10px;
`

const TechIcons = (props: { srcFile: string, alt: string }) => {
  return (
    <StyledIcons
      src={`/images/icons/${props.srcFile}`}
      loading="lazy"
      alt={props.alt}
    />
  )
}

export default TechIcons