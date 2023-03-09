import React from 'react';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero-1.mp4" autoPlay muted  preload='auto'/>
      <Container>
        <MainHeading>Planejamento Patrimonial Inteligente</MainHeading>
        <HeroText>
          Melhorando a saúde e segurança de seu patrimônio em todo o Brasil
        </HeroText>
        <ButtonWrapper>
          <a 
            about='link para fazer uma Holding Familiar' 
            href='https://bit.ly/hsb-holding-familiar'
            onClick='return gtag_report_conversion(https://bit.ly/hsb-holding-familiar)'
          >
            <HeroButton>Solicite um Orçamento</HeroButton>
          </a>

        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
