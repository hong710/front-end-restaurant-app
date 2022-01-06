import React,{useState, useEffect} from 'react';
import Item from './Item';
import Header from './Header';
import Summary from './Summary';

function Order() {

	const [foodItems, setFoodItems]= useState([]);

	useEffect(()=>{
		fetch("http://localhost:9292/")
			.then((r)=>r.json())
			.then((menu) => setFoodItems(menu))
	},[]);


    return (
        <div className="container">
				<Header className name="Welcome To Thai Ladle"/>
				<h3 className="mb-5"> <u>Popular Items</u></h3>
				<div className="row">
					<div className="col-7">
						<div className="row">
							{foodItems.map((item) => (
								<Item key={item.id} name={item.name} price = {item.price} img = {item.image}/>
							))}
						</div>
					</div>
					<div className="col-5">
						<Summary/>
					</div>
				</div>	
			</div>
    )
}

export default Order
