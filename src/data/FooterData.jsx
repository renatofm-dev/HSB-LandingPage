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
		link: "/",

	},
	{
		name: 'WhatsApp',
		icon: iconStyle(FaWhatsapp),
		link: "https://api.whatsapp.com/send?phone=5561985576100&text=Dr.%20Jacob%20Miguel%2C%20preciso%20de%20uma%20Holding%20Familiar%20para%20proteger%20meus%20bens%20e%20reduzir%20a%20carga%20tribut%C3%A1ria%20na%20venda%20ou%20sucess%C3%A3o.",
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		link: "/",
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	// {
	// 	title: 'Product',
	// 	links: ['Login', 'Personal', 'Business', 'Team'],
	// },
	// {
	// 	title: 'Press',
	// 	links: ['Logos', 'Events', 'Stories', 'Office'],
	// },
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
