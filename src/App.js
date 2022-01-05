	import React from 'react';
	import Item from './components/Item';
	import Header from './components/Header';
	import Summary from './components/Summary';


	function App() {
		return (
		<div className="App">
			<div className="container">
				<Header className/>
				<h3 className="mb-5"> <u>Popular Items</u></h3>
				<div className="row">
					<div className="col-6">
						<div className="row">
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
							<Item />
																	
						</div>
					</div>

					<div className="col-5 ml-">
						<Summary/>
					</div>
				</div>	
			</div>
		</div>	
		);
	}

	export default App;
