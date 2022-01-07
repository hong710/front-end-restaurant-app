import React from 'react';

function SaleReport({customers}) {
    
    function roundToTwo(num){
        return +(parseFloat(num).toFixed(2));
    }
    let total = 0;
    customers.map((customer)=>{
        total = total +roundToTwo((customer.foods.map(a =>a.price)).reduce((a,b) => a+b))
        return total;
    }) 


    return (
        <div className="">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Total Orders</th>

                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer,index)=>
                    <tr key={customer.id}>
                        <th scope="row">{index+1}</th>
                        <td>{customer.f_name}</td>
                        <td>{customer.l_name}</td>
                        <td>$ {
                        roundToTwo((customer.foods.map(a =>a.price)).reduce((a,b) => a+b))
                        }</td>
                    </tr>
                    )}
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td><b>Total</b></td>
                        <td><b>$ {total}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
        

    )}

export default SaleReport
