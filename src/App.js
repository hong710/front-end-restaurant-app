	import React from 'react';
	import {BrowserRouter, Route, Switch} from 'react-router-dom';
	import Menu from './components/Menu';
	import EditMenu from './components/EditMenu';
	import Order from './components/Order';
	


	function App() {
		return (
			<BrowserRouter>
				<div className="App">					
					
						<Route exact path="/"> 
							<Menu/>
						</Route>
						
						{/* <Route exact path="/order"> 
							<Order/>
						</Route> */}

						<Route exact path="/edit"> 
							<EditMenu/>
						</Route>
									
				</div>
		</BrowserRouter>	
		);
	}

	export default App;
