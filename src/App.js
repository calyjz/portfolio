import './App.css';

// Import components
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from './components/Projects';
import Navigation from './components/Navigation';

// Import React libraries
import { HashRouter as Router } from "react-router-dom";

function App() {

	return (
		<Router basename="/">
			<div className='App'>
			<Navigation />
				<Home />
				<Experience />
			<Projects />
			</div>
		</Router>
	);
}

export default App;
