export const data = [
	{
		title: 'Redução de Carga Tributária',
		description:
			'A receita gerada em uma administração jurídica de imóveis sofre tribvutops menores que as cobradas de pessoas físicas.',
		image: './assets/finance.jpg',
		link: '/',
	},
	{
		title: 'Blindagem Patrimonial Familiar',
		description: 'Melhor mecanismo utilizado para blindar juridicamente  o patrimônio de pessoas físicas.',
		image: './assets/family-holding.jpg',
		link: '/',
	},
	{
		title: 'Planejamento Sucessório',
		description: 'Possível determinar previamente como será realizada a divisão dos patrimônios se o titular falecer.',
		image: './assets/grandparents.jpg',
		link: '/',
	},
	{
		title: 'Planejamento Fiscal',
		description: 'Pode haver uma perda de patrimônio caso não haja um planejamento em relação às cargas dos tributos.',
		image: './assets/tax-planning.jpg',
		link: '/',
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
