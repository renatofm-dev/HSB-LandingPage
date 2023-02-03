import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		link: "https://www.facebook.com/holdingsystem",
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		link: "https://www.instagram.com/holdingsystem/"
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
		link: "https://www.youtube.com/@holdingsystembrazil",

	},
	{
		name: 'WhatsApp',
		icon: iconStyle(FaWhatsapp),
		link: "https://bit.ly/hsb-holding-familiar",
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		link: "/",
	},
];

// export const footerData = [
// 	{
// 		title: 'Main',
// 		links: ['Blog', 'FAQs', 'Suporte', 'Sobre nós'],
// 	},
// 	// {
// 	// 	title: 'Product',
// 	// 	links: ['Login', 'Personal', 'Business', 'Team'],
// 	// },
// 	// {
// 	// 	title: 'Press',
// 	// 	links: ['Logos', 'Events', 'Stories', 'Office'],
// 	// },
// 	{
// 		title: 'Legal',
// 		links: ['GDPR', 'Privacy Policy', 'Termos de Serviço', 'Disclaimer'],
// 	},
// ];

export const footerDataMain = [
	{
		name:'Blog',
		link: 'https://hsblog.com.br/'
	},
	{
		name:'FAQs',
		link: '/faqs'
	},
	{
		name:'Suporte',
		link: '/contact'
	},
	{
		name:'Sobre nós',
		link: '/'
	},
];

export const footerDataLegal = [
	{
		name:'LGPD',
		link: 'https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd#:~:text=A%20Lei%20fala%20sobre%20o,em%20meios%20manuais%20ou%20digitais./'
	},
	{
		name:'Privacy Policy',
		link: 'https://bit.ly/hsb-politica-privacidade'
	},
	{
		name:'Disclaimer',
		link: 'https://gdpr-info.eu/'
	},
	{
		name:'Termos e Condições',
		link: 'https://bit.ly/hsb-termos-condicoes'
	},
];
