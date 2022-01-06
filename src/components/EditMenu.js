import React,{useState, useEffect} from 'react';
import EditItem from './EditItem';
import Header from './Header';

function EditMenu() {

	const [menu, setMenu]= useState([]);

	useEffect(()=>{
		fetch("http://localhost:9292/")
			.then((r)=>r.json())
			.then((items => setMenu(items))
	)},[]);



    return (
        <div className="container">
				<Header className name="Edit Menu"/>
                <div className="d-flex justify-content-between align-content-center">   
                    <h3 className="mb-5"> <u>Appetizer</u></h3> 
                    <h4><a ><i className="bi bi-plus-circle-fill h3"></i></a> New Item </h4>
                </div>
				
				<div className="row">
					<div className="col-12">
						<div className="row">
							{menu.filter( item => item.category==="App")
							.map((item) => (
								<EditItem key={item.id} name={item.name} price = {item.price} img = {item.image}/>
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
								<EditItem key={item.id} name={item.name} price = {item.price} img = {item.image}/>
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
								<EditItem key={item.id} name={item.name} price = {item.price} img = {item.image}/>
							))}
						</div>
					</div>					
				</div>	
			</div>
    )
}

export default EditMenu