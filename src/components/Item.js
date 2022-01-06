import React from 'react'

function Item({name, price,img}) {
    return (
        <div className="col-3 mb-3">
            <div className="card">
                <div className="row card-body p-0">
                    <div className="col-6">
                        <h6 className="card-title m-2 ">{name}</h6>
                        <h6 className="card-text m-2">$ {price}</h6>
                    </div>
                    <img className="col-6" src={img} alt="sans"/>
                </div>
            </div>
        </div>	
    )
}

export default Item
