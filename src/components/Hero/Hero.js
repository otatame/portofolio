import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome to <br />
          My Personal Portofolio
      </SectionTitle>
      <SectionText>
          My name is Willie Ryantama, <br />
          I'm a junior front-end developer.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;