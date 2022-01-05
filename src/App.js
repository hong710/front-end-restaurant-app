	import React from 'react';
	import {BrowserRouter, Route, Switch} from 'react-router-dom';
	import Customer from './components/Customer';
	import Order from './components/Order';
	


	function App() {
		return (
			<BrowserRouter>
				<div className="App">					
					
						<Route exact path="/"> 
							<Customer/>
						</Route>
						
						<Route exact path="/order"> 
							<Order/>
						</Route>
									
				</div>
		</BrowserRouter>	
		);
	}

	export default App;
