import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
	useEffect(() => {
		const handleUnload = () => {
			window.scrollTo(0, 0);
		};

		window.addEventListener('beforeunload', handleUnload);

		return () => {
			window.removeEventListener('beforeunload', handleUnload);
		};
	}, []);

	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />

				{
					(window.innerWidth <= 450) ? <p></p> : <Tech />
				}
				<Works />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
