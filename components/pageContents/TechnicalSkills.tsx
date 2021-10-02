import Image from 'next/image'
import SectionBox from '../molecules/SectionBox'
import TechIcons from '../molecules/TechIcons'
import { H1 } from '../atoms/Heading'
import image from '../../public/images/4354885.svg'

type Tech = {
  name: string
  icons: string[]
}

interface TechnicalSkillsProps {
  heading: string
  skills: Tech[]
}

const TechnicalSkills = (props: TechnicalSkillsProps) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingLeft>
        <SectionBox.ImageBox>
          <Image src={image} alt='Learning Ilustration' />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox>
          <H1>{props.heading}</H1>
          {props.skills.map((tech: Tech) => (
            <TechIcons.Container key={tech.name}>
              <TechIcons.Title>{tech.name}</TechIcons.Title>
              <TechIcons.IconContainer>
                {tech.icons.map(icon => (
                  <TechIcons.Icon key={icon} icon={icon} />
                ))}
              </TechIcons.IconContainer>
            </TechIcons.Container>
          ))}
        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  )
}

export default TechnicalSkills
