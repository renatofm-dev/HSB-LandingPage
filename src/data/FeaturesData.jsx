import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineException } from 'react-icons/ai';
import { AiTwotoneBank } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Proteção Patrimonial',
		description: 'Proteja seu patrimônio de qualquer adversidade que possa ocorrer',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Inventário',
		description: 'O custo do inventário pode chegar até 54% dos bens',
		icon: iconStyle(AiOutlineException),
		imgClass: 'two',
	},
	{
		name: 'Manutenção Jurídica',
		description: 'Todos os serviços voltados para a manutenção da Holding',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Suporte Integral',
		description: 'Suporte integral de segunda-feira a sexta-feira das 08:00 as 18:00',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Valor Acessível',
		description: 'Valor acessível de acordo com cada patrimônio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Redução de Imposto',
		description:
			'redução dos impostos pagos referentes aos bens e suas receitas.',
		icon: iconStyle(AiTwotoneBank),
		imgClass: 'six',
	},
];
