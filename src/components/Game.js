import React from 'react';
import Iframe from 'react-iframe'

function Game() {
    return (
		<Iframe url="https://tour-de-negocios-react.7r45h.repl.co/game/Tour%20De%20Neg%C3%B3cios.html"
            className="gameScreen"
            display="initial"
            position="relative"
            frameBorder="0"/>
    );
}

export default Game;
