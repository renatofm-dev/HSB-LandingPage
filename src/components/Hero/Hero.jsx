import React from 'react';
import { Link } from 'react-router-dom';
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
					<Link to="pricing">
						<Button>Saiba mais</Button>
					</Link>
					<a href='https://api.whatsapp.com/send?phone=5561985576100&text=Dr.%20Jacob%20Miguel%2C%20preciso%20de%20uma%20Holding%20Familiar%20para%20proteger%20meus%20bens%20e%20reduzir%20a%20carga%20tribut%C3%A1ria%20na%20venda%20ou%20sucess%C3%A3o.'>
						<HeroButton>Contato</HeroButton>
					</a>
					
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
