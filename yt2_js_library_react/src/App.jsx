import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header_Hero from './components/Header_Hero';
// import Hero from './components/Hero';
import ItBerries from './components/ItBerries';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header_Hero />
			{/* <Hero /> */}
      <ItBerries />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
