import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
//import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import CookieConsent from 'react-cookie-consent';


function App() {
	

	useEffect(() => {
		window.gtag('config', `${process.env.REACT_APP_HSB_GTAG_ANALYTICS_ID}`, {
		  page_path: window.location.pathname
		});
	  }, []);

	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Contact" exact component={Contact} />
				<Route path="/pricing" exact component={Pricing} />

			</Switch>
			<CookieConsent 
				debug={true}
				location='bottom'
				style={{backgroundColor: '#000', textAlign: 'left', opacity: '80%'}}
				buttonStyle={{color: 'black', background: 'white', fontSize: '16px', fontWeight: 'bold',}}
				buttonText="Estou Ciente"
				expires={365}
				>
					Aviso sobre Cookies: Nós utilizamos cookies em nosso site para melhorar sua
					experiência de navegação e personalizar o conteúdo. Ao continuar a navegar em nosso site,
					você concorda com nossa política de cookies. Saiba mais sobre nossa <a href='https://bit.ly/hsb-politica-privacidade'>política de privacidade</a>.
			</CookieConsent>
			<Footer />
		</Router>
	);
}

export default App;
