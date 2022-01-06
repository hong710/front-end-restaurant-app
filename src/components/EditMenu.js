import React,{useState, useEffect} from 'react';
import EditItem from './EditItem';
import Header from './Header';
import AddModal from './AddModal';

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
                    <h4><button className="btn btn-link" data-toggle="modal" data-target="#exampleModal"><i className="bi bi-plus-circle-fill h3"></i></button> New Item </h4>
                    <AddModal />

                </div>
				
				<div className="row">
					<div className="col-12">
						<div className="row">
							{menu.filter( item => item.category==="App")
							.map((item) => (
								<EditItem key={item.id} id={item.id} name={item.name} price = {item.price} img = {item.image} status={item.active}/>
							))}
						</div>
					</div>					
				</div>

				<h3 className="mb-5"> <u>Noodles & Fried Rice</u></h3>
				<div className="row">
					<div className="col-12">
						<div className="row">
							{menu.filter( item => item.category==="Fry")
							.map((item) => (
								<EditItem key={item.id} id={item.id} name={item.name} price = {item.price} img = {item.image}/>
							))}
						</div>
					</div>					
				</div>	

                <h3 className="mb-5"> <u>Curries</u></h3>
				<div className="row">
					<div className="col-12">
						<div className="row">
							{menu.filter( item => item.category==="Curry")
							.map((item) => (
								<EditItem key={item.id} id={item.id} name={item.name} price = {item.price} img = {item.image}/>
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
								<EditItem key={item.id} id={item.id} name={item.name} price = {item.price} img = {item.image}/>
							))}
						</div>
					</div>					
				</div>	
			</div>
    )
}

export default EditMenu
