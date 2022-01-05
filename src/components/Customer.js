import React from 'react';
import Item from './Item';
import Header from './Header';
import Summary from './Summary';

function Order() {
    return (
        <div className="container">
				<Header className name="Welcome To Thai Ladle"/>
				<h3 className="mb-5"> <u>Popular Items</u></h3>
				<div className="row">
					<div className="col-7">
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
