/*
  for(let i = 0; i < dots.length; i++) {
    let dot = dots[i];

    let angle = Math.PI / 4;

    let pivot = [rect_size[0], rect_size[1]]

    dot[0] -= pivot[0];
    dot[1] -= pivot[1];

    let x = Math.cos(angle) * dot[0] + Math.sin(angle) * dot[1];
    let y = Math.cos(angle) * dot[1] - Math.sin(angle) * dot[0];

    dot[0] = x + pivot[0];
    dot[1] = y + pivot[1];

    dot[1] += rect_size[1] * 1.4;
    dot[1] *= 0.5;

     game.add.circle(dot[0], dot[1], 8, 0x000);
     let text = game.add.text(dot[0], dot[1] - 10, cities[i].name, { fontFamily: 'Lucida Console', color: '#fff', fontSize: 14, fontWeight: 'bold', stroke: '#000', strokeThickness: 2});
  }
  */

  /*
    let cursors = this.input.keyboard.createCursorKeys();
    if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    else this.player.setVelocityX(0);
    if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    else this.player.setVelocityY(0);
    */

    //this.contador_muito_loco += 1;

    //this.text_teste.text = 'Hello World: ' + this.contador_muito_loco;



    // graphics.lineStyle(2, 0xffd900, 1);

    //graphics.beginFill(0xFF0000, 1);
    //graphics.drawCircle(300, 300, 100);

    /*
    this.text_player1 = this.add.text(10, 10, 'Player 1' + this.contador_muito_loco, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: 'black'});

    this.text_player1 = this.add.text(10, 10, 'Player 1' + this.contador_muito_loco, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: 'black'});

    this.text_teste = this.add.text(0, 0, 'Hello World: ' + this.contador_muito_loco, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: 'black'});

    this.text_teste2 = this.add.text(100, 100, 'a', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: 'black'});
    */