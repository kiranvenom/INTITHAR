import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Product from './pages/product/Product';
import Equipments from './pages/equipments/Equipments';
import SpareParts from './pages/spare-parts/SpareParts';
import Contact from './pages/contact/Contact';
import AboutUs from './pages/about-us/AboutUs';
import WhatsappBtn from './components/WhatsappBtn/WhatsappBtn';

import useScrollToTop from './hooks/useScrollToTop';

const App = () => {
	useScrollToTop();
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Product />} />
				<Route path='/products/equipment' element={<Equipments />} />
				<Route path='/products/spare-parts' element={<SpareParts />} />

				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/contact-us' element={<Contact />} />
			</Routes>
			<WhatsappBtn />
			<Footer />
		</>
	);
};

export default App;
