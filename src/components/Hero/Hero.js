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
					We provide the best security systems for clients all over the world
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
