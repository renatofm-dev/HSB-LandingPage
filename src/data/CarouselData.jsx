export const data = [
	{
		title: 'Participação acionária',
		description:
			'Investir em ações pode ser uma ótima maneira de aumentar sua riqueza e atingir seus objetivos financeiros.',
		image: './assets/finance.jpg',
		link: 'https://hsblog.com.br/post/participacao-acionaria-um-guia-para-diferentes-tipos-de-investimentos-em-acoes',
		alt: 'imagem referente a holding patrimonial'
	},
	{
		title: 'Blindagem Patrimonial Familiar',
		description: 'Melhor mecanismo utilizado para blindar juridicamente  o patrimônio de pessoas físicas.',
		image: './assets/family-holding.jpg',
		link: 'https://hsblog.com.br/post/holding-familiar-as-vantagens-de-consolidar-o-patrimonio-de-sua-familia',
		alt: 'imagem com uma família feliz com sua nova holding familiar'
	},
	{
		title: 'Planejamento Sucessório',
		description: 'Possível determinar previamente como será realizada a divisão dos patrimônios se o titular falecer.',
		image: './assets/grandparents.jpg',
		link: '/',
		alt: 'imagem de dois idosos com seus netos, felizes com seu planejamento sucessório realizado a partir de uma holding familiar'
	},
	{
		title: 'Planejamento Fiscal',
		description: 'Pode haver uma perda de patrimônio caso não haja um planejamento em relação às cargas dos tributos.',
		image: './assets/tax-planning.jpg',
		link: '/',
		alt: 'imagem de uma redução da taxa fiscal devido a implementação de uma holding patrimonial'
	},
	// {
	// 	title: 'Our top clients',
	// 	description: 'We have provided services to top clients in tech industry',
	// 	image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	// 	link: '/',
	// },
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
