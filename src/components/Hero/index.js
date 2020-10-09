import React from 'react';

import { Section } from '../../shared-ui/Containers';

import { ImageHero, ImageTitle } from './Hero.styled';

import ImageText from '../../assets/images/rede-cidada-em-recife.svg';
import Hacktoberfest from '../../assets/images/hacktoberfest.svg';

const Hero = () => (
  <Section as="section" id="home">
    <ImageTitle src={ImageText} alt="Rede Cidadã no Hacktoberfest" />
    <ImageHero src={Hacktoberfest} alt="Hacktoberfest" />
  </Section>
);

export default Hero;
