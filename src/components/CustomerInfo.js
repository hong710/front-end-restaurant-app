import React from 'react';

function CustomerInfo({customers}) {
    return (
        <div className="">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer,index)=> 
                    <tr key={customer.id}>
                        <th scope="row">{index+1}</th>
                        <td>{customer.f_name}</td>
                        <td>{customer.l_name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        

    )}

export default CustomerInfo
