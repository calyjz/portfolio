import './App.css';

// Import components
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from './components/Projects';
import Connect from './components/Connect';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {

	return (
		<div className='App'>
			<Navigation />
			<Home />
			<Experience />
			<Projects />
			<Connect />
			<Footer />
		</div>
	);
}

export default App;
