import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
    return(
        <Router>
			<Container />
		</Router>
    );
}

export default App;
