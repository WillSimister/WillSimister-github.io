import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey. <br />
        Welcome to my portfolio.
      </SectionTitle>
      <SectionText>
        I'm Will, thanks for taking some time out of your day to take a look at my portfolio. I'm studying towards a BEng in 
        Software Engineering at Sheffield Hallam University.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;