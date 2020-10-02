import React from 'react';

import { Section } from '../../shared-ui/Containers';

import ImageText from '../../assets/images/rede-cidada-em-recife.svg';
import Hacktoberfest from '../../assets/images/hacktoberfest.svg';
import { ImageHero, ImageTitle } from './Hero.styled';

const Hero = () => (
  <Section as="section">
    <ImageTitle src={ImageText} alt="Rede Cidadã no Hacktoberfest" />
    <ImageHero src={Hacktoberfest} alt="Hacktoberfest" />
  </Section>
);

export default Hero;
