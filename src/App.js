import './App.css';

// Import components
import Home from "./components/Home";
import Experience from "./components/Experience";

// Import React libraries
import { HashRouter as Router } from "react-router-dom";

function App() {

	return (
		<Router basename="/">
			<div className='App'>
				<Home />
				<Experience />
			</div>
		</Router>
	);
}

export default App;
