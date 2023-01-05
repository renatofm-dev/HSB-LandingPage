import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Planejamento Patrimonial Inteligente</MainHeading>
				<HeroText>
					Melhorando a saúde e segurança de seu patrimônio em todo o Brasil
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Contato</Button>
					</Link>
					<HeroButton>Saiba mais</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
