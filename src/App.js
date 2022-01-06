	import React from 'react';
	import {BrowserRouter, Route, Switch} from 'react-router-dom';
	import Menu from './views/Menu';
	import EditMenu from './views/EditMenu';
	import Report from './views/Report';	

	// Only the view components will use in here
	function App() {
		return (
			<BrowserRouter>
				<div className="App">					
						<Route exact path="/"> 
							<Menu/>
						</Route>
						<Route exact path="/edit"> 
							<EditMenu/>
						</Route>

						<Route exact path="/report"> 
							<Report/>
						</Route>
									
				</div>
		</BrowserRouter>	
		);
	}

	export default App;
