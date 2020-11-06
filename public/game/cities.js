//upgrade_price = price / 5 ... +25 +25 +25
let cities = [
	{
        'name': 'Praça',
        'price': 300.0,
        'upgrade_price': [350.0, 400.0, 450.0, 500.0],
        'image': 'praca',
        'owner': 'bank',
		'especial': 'praca',
        'level': 0
    },
	{
        'name': 'Décimo Terceiro',
        'price': 300.0,
        'upgrade_price': [350.0, 400.0, 450.0, 500.0],
        'image': 'decimo_terceiro',
        'owner': 'bank',
		'especial': 'decimo_terceiro',
        'level': 0
    },
	{
        'name': 'Santiago',
        'price': 65.0,
        'upgrade_price': [13.0, 38.0, 63.0, 88.0],
        'image': 'santiago',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Havana',
        'price': 150.0,
        'upgrade_price': [30.0, 55.0, 80.0, 105.0],
        'image': 'havana',
        'owner': 'havana',
        'level': 0
    },
	{
        'name': 'Cairo',
        'price': 120.0,
        'upgrade_price': [24.0, 49.0, 74.0, 99.0],
        'image': 'cairo',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Naufrágio',
        'price': 275.0,
        'upgrade_price': [55.0, 85.0, 115.0, 175.0],
        'image': 'naufragio',
        'owner': 'bank',
		'especial': 'naufragio',
        'level': 0
    },
	{
        'name': 'Lima',
        'price': 90.0,
        'upgrade_price': [18.0, 43.0, 68.0, 93.0],
        'image': 'lima',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Buenos Aires',
        'price': 175.0,
        'upgrade_price': [40.0, 60.0, 80.0, 120.0],
        'image': 'buenos_aires',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Universidade',
        'price': 175.0,
        'upgrade_price': [40.0, 60.0, 80.0, 120.0],
        'image': 'universidade',
        'owner': 'bank',
		'especial': 'universidade',
        'level': 0
    },
	{
        'name': 'Brasília',
        'price': 400.0,
        'upgrade_price': [50.0, 75.0, 100.0, 150.0],
        'image': 'brasilia',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Washington, D.C.',
        'price': 375.0,
        'upgrade_price': [50.0, 75.0, 120.0, 185.0],
        'image': 'tripoli',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Imposto',
        'price': 250.0,
        'upgrade_price': [50.0, 75.0, 100.0, 150.0],
        'image': 'imposto',
        'owner': 'bank',
		'especial': 'imposto',
        'level': 0
    },
	{
        'name': 'Oslo',
        'price': 65.0,
        'upgrade_price': [13.0, 38.0, 63.0, 88.0],
        'image': 'oslo',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Lisboa',
        'price': 100.0,
        'upgrade_price': [30.0, 50.0, 70.0, 90.0],
        'image': 'lisboa',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Atenas',
        'price': 200.0,
        'upgrade_price': [40.0, 60.0, 80.0, 100.0],
        'image': 'atenas',
        'owner': 'bank',
        'level': 0
    },
    {
        'name': 'Amsterdã',
        'price': 275.0,
        'upgrade_price': [55.0, 85.0, 115.0, 175.0],
        'image': 'amsterda',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Shopping',
        'price': 175.0,
        'upgrade_price': [40.0, 60.0, 80.0, 120.0],
        'image': 'shopping',
        'owner': 'bank',
		'especial': 'shopping',
        'level': 0
    },
	{
        'name': 'Viena',
        'price': 50.0,
        'upgrade_price': [10.0, 30.0, 50.0, 70.0],
        'image': 'viena',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Estocolmo',
        'price': 120.0,
        'upgrade_price': [24.0, 49.0, 74.0, 99.0],
        'image': 'estocolmo',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Dublin',
        'price': 60.0,
        'upgrade_price': [12.0, 37.0, 62.0, 87.0],
        'image': 'dublin',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Catedral',
        'price': 35.0,
        'upgrade_price': [5.0, 25.0, 45.0, 65.0],
        'image': 'catedral',
        'owner': 'bank',
		'especial': 'catedral',
        'level': 0
    },
	{
        'name': 'Roma',
        'price': 100.0,
        'upgrade_price': [20.0, 45.0, 70.0, 95.0],
        'image': 'roma',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Madri',
        'price': 30.0,
        'upgrade_price': [6.0, 31.0, 56.0, 81.0],
        'image': 'madri',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Paris',
        'price': 80.0,
        'upgrade_price': [16.0, 41.0, 66.0, 91.0],
        'image': 'paris',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Aeroporto',
        'price': 0.0,
        'upgrade_price': [0.0, 0.0, 0.0, 0.0],
        'image': 'aeroporto',
        'owner': 'bank',
		'especial': 'aeroporto',
        'level': 0
    },
	{
        'name': 'Moscou',
        'price': 200.0,
        'upgrade_price': [40.0, 60.0, 80.0, 100.0],
        'image': 'moscou',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Cassino',
        'price': 315.0,
        'upgrade_price': [75.0, 100.0, 125.0, 200.0],
        'image': 'cassino',
        'owner': 'bank',
		'especial': 'cassino',
        'level': 0
    },
	{
        'name': 'Hanói',
        'price': 40.0,
        'upgrade_price': [8.0, 33.0, 58.0, 83.0],
        'image': 'hanoi',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Bangkok',
        'price': 70.0,
        'upgrade_price': [14.0, 39.0, 64.0, 89.0],
        'image': 'bangkok',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Pequim',
        'price': 80.0,
        'upgrade_price': [20.0, 40.0, 60.0, 80.0],
        'image': 'pequim',
        'owner': 'bank',
        'level': 0
    },
	{
        'name': 'Aniversário',
        'price': 315.0,
        'upgrade_price': [75.0, 100.0, 125.0, 200.0],
        'image': 'aniversario',
        'owner': 'bank',
		'especial': 'aniversario',
        'level': 0
    },
    {
        'name': 'Tokyo',
        'price': 315.0,
        'upgrade_price': [75.0, 100.0, 125.0, 200.0],
        'image': 'tokyo',
        'owner': 'bank',
        'level': 0
    }
];