import React from 'react';

function SaleReport({customers}) {
    
    function roundToTwo(num){
        if (!("" + num).includes("e")) {
            return +(Math.round(num + "e+" + 2) + "e-" + 2);
        } else {
            let arr = ("" + num).split("e");
            let sig = ""
            if (+arr[1] + 2 > 0) {
                sig = "+";
            }
    
            return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + 2)) + "e-" + 2);
        }
    }
    let total = 0.0;
    customers.map((customer)=>{
        total = total +roundToTwo((customer.foods.map(a =>a.price)).reduce((a,b) => a+b))
        return (total);
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
                        <td><b>$ {(total).toFixed(2)}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
        

    )}

export default SaleReport
