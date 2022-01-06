import React,{useState, useEffect} from 'react';
import Item from './Item';
import Header from './Header';
import Summary from './Summary';

function Menu() {

	const [menu, setMenu]= useState([]);

	useEffect(()=>{
		fetch("http://localhost:9292/")
			.then((r)=>r.json())
			.then((items => setMenu(items))
	)},[]);



    return (
        <div className="container">
				<Header className name="Welcome To Thai Ladle"/>
				<h3 className="mb-5"> <u>Appetizer</u></h3>
				<div className="row">
					<div className="col-12">
						<div className="row">
							{menu.filter( item => item.category==="App")
							.map((item) => (
								<Item key={item.id} name={item.name} price = {item.price} img = {item.image}/>
							))}
						</div>
					</div>					
				</div>

				<h3 className="mb-5"> <u>Fry Dishes</u></h3>
				<div className="row">
					<div className="col-12">
						<div className="row">
							{menu.filter( item => item.category==="Fry")
							.map((item) => (
								<Item key={item.id} name={item.name} price = {item.price} img = {item.image}/>
							))}
						</div>
					</div>					
				</div>	

				<h3 className="mb-5"> <u>Entrees</u></h3>
				<div className="row">
					<div className="col-12">
						<div className="row">
							{menu.filter( item => item.category==="Entree")
							.map((item) => (
								<Item key={item.id} name={item.name} price = {item.price} img = {item.image}/>
							))}
						</div>
					</div>					
				</div>	
			</div>
    )
}

export default Menu
