import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
	FooterLinkLegal
} from './FooterStyles';
import {  footerSocialData, footerDataLegal, footerDataMain } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon 
							alt='logo Holding System Brazil'
							src="./assets/logo-hsb192.png" />
							HSB
						</FooterLogo>
						<FooterAddress>
						Edifício Fusion Working Live, SHN Q. 1 BL D S. 511B - Asa Norte, Brasília - DF, 70701-040
						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href= {social.link}
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
						

					<FooterLinkItems>
					<FooterLinkTitle>Main</FooterLinkTitle>
					{footerDataMain.map((main, mIndex) => (
						<FooterLink 
						key={mIndex}
						href={main.link}
						>
							{main.name}
						</FooterLink>
						
					))}

					</FooterLinkItems>

					<FooterLinkLegal>
					<FooterLinkTitle>Legal</FooterLinkTitle>
					{footerDataLegal.map((legal,lIndex)=> (
						<FooterLink key={lIndex} href={legal.link}>
							{legal.name}
						</FooterLink>
					))}
					</FooterLinkLegal>
					{/* {footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))} */}
				</FooterGrid>
				<FooterRights>Holding System Brazil © 2021</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
