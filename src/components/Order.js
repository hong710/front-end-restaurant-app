import React,{useState,useEffect} from 'react';
import Header from './Header';
import Summary from './Summary';
import Name from './EditItem';

function Order() {

    const [customers, setCustomers]= useState([]);

	useEffect(()=>{
		fetch("http://localhost:9292/order")
			.then((r)=>r.json())
			.then((customers) => setCustomers(customers))
	},[]);


    return (
        <div>
            <Header name="Thai Ladle Point Of Sale"/>
            <div className="container">
                <div className="row">
                    <h3 className="py-3">Customer Name</h3>
                    <div className="col-4">
                        {customers.map((customer)=> (
                            <Name key={customer.id} name={customer.name}/>
                        ))}
                    </div>
                    <div className="col-1"></div>

                    <div className="col-6">
                        <Summary/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Order
