import React from 'react'

function Item({name, price,img}) {
    return (
        <div className="col-6 mb-3">
            <div className="card">
                <div class="row card-body p-0">
                <div class="col-6">
                    <h6 class="card-title m-2 ">{name}</h6>
                    <h6 class="card-text m-2">$ {price}</h6>
                </div>
                    <img class="col-6" src={img} alt="sans"/>
                </div>
            </div>
        </div>	
    )
}

export default Item
