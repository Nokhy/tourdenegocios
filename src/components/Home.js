import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

function Home(Component) {
    return (
		<div className="App">
            <header className="App-header">
                <h3>
                    TOUR DE NEGÓCIOS
                </h3>
	            <p className="info">
		            Tour de negócios é um jogo de tabuleiro que pode ser jogado com até quatro pessoas...
		        </p>
		        <span className="contact">
		            ribtwentythree@gmail.com
		        </span>
                <Link to="/game">
		            <Button className="button" label="INICIAR JOGO" />
                </Link>
            </header>
        </div>
    );
}

export default Home;
