class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Player {
    constructor(name, color) {
        this.name = name;
        this.capital = 0;
        this.order = 0;
        this.status = '';
		this.color = color;
    }

    drawText(game, screenPosition, border) {
        let playerText = game.add.text(border[0], border[1], this.name.toUpperCase() + '\n$' + this.capital.toFixed(2), { fontFamily: 'Lucida Console', color: '#fcba03' , fontSize: 20 });

        if (screenPosition >= 1)
            playerText.x = config.width - playerText.width - border[0];

        if (screenPosition >= 2)
            playerText.y = config.height - playerText.height - border[1];

        if (screenPosition >= 3)
            playerText.x = border[0];

    }

	drawContainer(game, screenPosition, border) {
		let playerTagBg = game.add.sprite(border[0], border[1], 'player_container_bg');
	    let playerTag = game.add.sprite(border[0], border[1], 'player_container');
	    playerTagBg.tint = this.color;

        let playerName = game.add.text(border[0] - 50, border[1] - 45, this.name.toUpperCase(), { fontFamily: 'Lucida Console', color: '#ffffff' , fontSize: 40 });
		let playerMoney = game.add.text(border[0] - 50, border[1] + 30, "$" + this.capital, { fontFamily: 'Lucida Console', color: '#fcba03' , fontSize: 36 });

        if (screenPosition >= 1)
		{
			playerTag.x = config.width - border[0];
			playerTagBg.x = config.width - border[0];
			playerTag.flipX = true;
			playerTagBg.flipX = true;
			playerName.x = config.width - playerName.width - border[0] + 50;
			playerMoney.x = config.width - playerMoney.width - border[0] + 50;
		}

        if (screenPosition >= 2)
		{
			playerTag.y = config.height - border[1];
			playerTagBg.y = config.height - border[1];
			playerName.y = config.height - playerName.height - border[1] - 5;
			playerMoney.y = config.height - playerMoney.height - border[1] + 65;
		}

        if (screenPosition >= 3)
		{
			playerTag.x = border[0];
			playerTagBg.x = border[0];
			playerTag.flipX = false;
			playerTagBg.flipX = false;
			playerName.x = border[0] - 50;
			playerMoney.x = border[0] - 50;
		} 

    }
}

let board = {
	'dots': [],
	'hglg': 0,
	'hglg_side': false,
	'objects': {
		'hl': []
	}
}

function carToIso2(dot, pivot) {
    let angle = Math.PI / 4.0;
    dot.x -= pivot.x;
    dot.y -= pivot.y;
    let x = Math.cos(angle) * dot.x + Math.sin(angle) * dot.y;
    let y = Math.cos(angle) * dot.y - Math.sin(angle) * dot.x;
	y *= 0.58;
    dot.x = x + pivot.x;
    dot.y = y + pivot.y;
	return dot;
}


function map_cities(rect_center, rect_size, game) {
    let dots = [];

    let citiesBySide = cities.length / 4;

    let distance = [rect_size.x / citiesBySide,
    			    rect_size.y / citiesBySide];
	
	let citiesBySide2 = (cities.length + 4) / 4;
	let distance2 = [rect_size.x / citiesBySide2,
    			    rect_size.y / citiesBySide2];

    let start_pos_x = rect_center.x - rect_size.x / 2;
    let start_pos_y = rect_center.y - rect_size.y / 2;

    // Left
    for (let i = citiesBySide; i > 0; i--) {

		if(i == citiesBySide)
        dots.push(
            new Vector2(
                start_pos_x,
                start_pos_y + i * distance[0]
            )
        );
		else
		dots.push(
            new Vector2(
                start_pos_x,
                (start_pos_y + distance2[0] / 2.0) + i * distance2[0]
            )
        );
    }

    // Top
    for (let i = 0; i < citiesBySide; i++) {
		if(i == 0)
        dots.push(
            new Vector2(
                start_pos_x + i * distance[1],
                start_pos_y
            )
        );
		else
		dots.push(
            new Vector2(
                (start_pos_x + distance2[1] / 2.0) + i * distance2[1],
                start_pos_y
            )
        );
    }


    // Right
    for (let i = 0; i < citiesBySide; i++) {
		if(i == 0)
        dots.push(
            new Vector2(
                start_pos_x + rect_size.x,
                start_pos_y + i * distance[0]
            )
        );
		else
		dots.push(
            new Vector2(
                start_pos_x + rect_size.x,
				(start_pos_y + distance2[0] / 2.0) + i * distance2[0]
            )
        );
    }

    // Bottom
    for (let i = citiesBySide; i > 0; i--) {
		if(i == citiesBySide)
        dots.push(
            new Vector2(
                start_pos_x + i * distance[1],
                start_pos_y + rect_size.y
            )
        );
		else
		dots.push(
            new Vector2(
				(start_pos_x + distance2[1] / 2.0) + i * distance2[1],
                start_pos_y + rect_size.y
            )
        );
    }

	game.add.circle(config.screen_mid.x, config.screen_mid.y, 8, 0x900055);

    for (let i = 0; i < dots.length; i++) {
        let dot = carToIso2(dots[i], config.screen_mid);
		board.dots.push(dot);

		if(typeof cities[i].especial !== 'undefined')
        	game.add.circle(dot.x, dot.y, 16, 0x00FF00);
		else
			game.add.circle(dot.x, dot.y, 8, 0xFF0000);
        
		let text = game.add.text(dot.x, dot.y, cities[i].name, { fontFamily: 'Lucida Console', color: '#fff', fontSize: 19, fontWeight: '', stroke: '#000', strokeThickness: 5 });
		
		// Valor da cidade
    }
}

function preload() {
    this.load.svg('image_background', 'assets/board.svg', {width:1500, height:1500});
	this.load.svg('image_highlight', 'assets/highlight.svg', {width:1500, height:1500});
	this.load.svg('image_highlightma', 'assets/highlightma.svg', {width:1500, height:1500});
	this.load.svg('image_highlightmb', 'assets/highlightmb.svg', {width:1500, height:1500});
	this.load.svg('player_container_bg', 'assets/ui/name-container-bg.svg', {width: 500, height: 180});
	this.load.svg('player_container', 'assets/ui/name-container.svg', {width: 500, height: 180});
}


// MAIN
function create() {
	let min_screen = Math.min(config.width, config.height);

    this.image_background = this.add.image(config.width / 2, config.height / 2, 'image_background');
	this.image_background.setDepth(-10);
	
	//let ws = this.image_background.width / this.image_background.height;
    let sx = min_screen / this.image_background.width;
    let sy = min_screen / this.image_background.height;
    //this.image_background.setScale(sx, sy);

    //let player_text_border = [10, 10];
	let player_text_border = [200, 120];

    let p1 = new Player('Iago', 0x000000);
    p1.drawContainer(this, 0, player_text_border);

    let p2 = new Player('Bruno', 0xffffff);
    p2.drawContainer(this, 1, player_text_border);

    let p3 = new Player('Rafael', 0xffffff);
    p3.drawContainer(this, 2, player_text_border);

    let p4 = new Player('Computer', 0xffffff);
    p4.drawContainer(this, 3, player_text_border);

	let render_square = new Vector2(
		870,
		870
	);
	

    map_cities(new Vector2(config.width / 2.0 + 10, config.height / 2.0 - 10), render_square, this);

	highlightCities([1, 2, 3, 6, 8], this);

	// Teste
	let container = this.add.container(config.screen_mid.x, config.screen_mid.y);

	let popup = this.add.rectangle(0, 0, 800, 500, 0x000000);
	popup.setFillStyle(0x000000, 0.95);

	
	let closeButton = this.add.circle(0, 0, 20);
	closeButton.setFillStyle(0xffffff, 0.95);

	closeButton.setInteractive();

	closeButton.on('pointerup', function() {
		container.setVisible(false);
		console.log('alow');
	}, this);

	container.add([popup, closeButton]);

}

// Limpa os destaques
function clearHighlight() {
	for(var i = 0; i < board.objects.hl.length; i++) {
		board.objects.hl[i].destroy();
	}
}

// Destaca n cidades
function highlightCities(citieshl, game) {
	let hlSize = new Vector2(config.width / 2, config.height / 2);
	for(let city = 0; city < citieshl.length; city ++) {
		let hglg = citieshl[city];
		if(hglg >= board.dots.length) {
			return null;
		}
		let citiesBySide = cities.length / 4;
		let quad = hglg % citiesBySide
		let citiesDirection = board.dots.length / 4
		let line = citiesDirection
		if(quad == 0) {
			let hl = game.add.image(hlSize.x, hlSize.y, 'image_highlight');
			hl.setScale(0.183, 0.183);
			hl.setPosition(board.dots[hglg].x, board.dots[hglg].y);
			hl.setDepth(-5);
			board.objects.hl.push(hl);
		} else {
			if((hglg >= 1 && hglg <= 7) || (hglg >= 17 && hglg <= 23)) {
				let hl = game.add.image(hlSize.x, hlSize.y, 'image_highlightmb');
				hl.setScale(0.137, 0.137);
				hl.setPosition(board.dots[hglg].x, board.dots[hglg].y);
				hl.setDepth(-5);
				board.objects.hl.push(hl);
			} else {
				let hl = game.add.image(hlSize.x, hlSize.y, 'image_highlightma');
				hl.setScale(0.137, 0.137);
				hl.setPosition(board.dots[hglg].x, board.dots[hglg].y);
				hl.setDepth(-5);
				board.objects.hl.push(hl);
			}
		}
	}
}

function update(time, delta) {
	console.log('elapsed: ' + time + '; ms: ' + delta + '; fps: ' + parseInt(1000 / delta));
}

const config = {
    type: Phaser.CANVAS,

    width: 1920,
    height: 1080,
	screen_mid: new Vector2(),
    backgroundColor: '#111',
	
	scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    scene: {
        preload: preload,
        create: create,
		update: update
    },
};

config.screen_mid.x = config.width / 2.0;
config.screen_mid.y = config.height / 2.0;

const game = new Phaser.Game(config);