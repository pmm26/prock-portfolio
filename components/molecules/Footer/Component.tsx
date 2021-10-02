import { Container } from "./Container";
import { FooterBox } from "./FooterBox";
import {P} from "../../atoms/P";
import * as Heading from "../../atoms/Heading";

export default function Footer() {
  return (
    <Container>
      <FooterBox>
        <P>
          Designed and Created <br />
          by Pedro Roque
        </P>
      </FooterBox>
    </Container>
  );
}
