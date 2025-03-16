import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import image from "../../public/images/desktopIlustration.svg";
import NewLineText from "../../components/atoms/NewLineText";
import TechIcons from "../molecules/TechIcons";
import ButtonLink from "../atoms/Button";
import Image from "next/image";
import gilabImage from "../../public/images/icons/gitlab.png";
import cvImage from "../../public/images/icons/cv.png";

const Intro = (props: {
  heading: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="bg-orange border border-transparent">
      <div className="flex flex-col md:flex-row md:items-center py-8 px-5 max-w-7xl mx-auto gap-8">
        <div className="w-full md:w-[45%]">
          <Image
            width={443}
            height={346}
            src={image}
            alt="Desktop Ilustration"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-[55%] flex flex-col justify-center items-center text-center">
          <H1>{props.heading}</H1>
          <H2>{props.title}</H2>
          <P white>
            <NewLineText>{props.description}</NewLineText>
          </P>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <ButtonLink height={60} href="https://gitlab.com/xdpedrox">
              <Image width={45} height={45} src={gilabImage} alt="Gitlab" />
              <span className="button-text">Gitlab</span>
            </ButtonLink>
            <ButtonLink height={60} href="/Pedro%20Roque%20CV.pdf">
              <Image
                width={45}
                height={45}
                src={cvImage}
                alt="Download CV"
              />
              <span className="button-text">CV</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
