import React from 'react';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted loop />
      <Container>
        <MainHeading>Planejamento Patrimonial Inteligente</MainHeading>
        <HeroText>
          Melhorando a saúde e segurança de seu patrimônio em todo o Brasil
        </HeroText>
        <ButtonWrapper>
          <a about='link para saber mais sobre Holding Familiar' href='https://hsblog.com.br/'>
            <Button>Saiba mais</Button>
          </a>
          <a about='link para fazer uma Holding Familiar' href='https://bit.ly/hsb-holding-familiar'>
            <HeroButton>Contato</HeroButton>
          </a>

        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
