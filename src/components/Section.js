import React,{useState, useEffect} from 'react';
import Item from './Item';


function Section({heading, cat}) {

    const [menu, setMenu]= useState([]);

	useEffect(()=>{
		fetch("http://localhost:9292/")
			.then((r)=>r.json())
			.then((items => setMenu(items))
	)},[]);

    return (
        <>
            <h3 className="mb-5"> <u>{heading}</u></h3>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        {menu.filter( item => item.category===cat)
                        .map((item) => (
                            <Item key={item.id} name={item.name} price = {item.price} img = {item.image}/>
                        ))}
                    </div>
                </div>					
            </div>
        </>
    )
}

export default Section
