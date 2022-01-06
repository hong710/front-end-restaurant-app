import React from 'react'

const imgStyle = {
    width:"35%",
    height:"35%"
}

function EditItem({name, price,img}) {
    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="row card-body p-0">
                    <input type='image' className="col-6" style={imgStyle} src={img} alt="sans"/>
                    <div className="col-6">
                        <h6 className="card-title m-2 "><input className="" value={name} /></h6>
                        <h6 className="card-text m-2"><input className="" value={"$ "+price} /></h6>
                    <div className="d-flex">
                        <button className="btn btn-success btn-sm m-2">Update</button>
                        <button className="btn btn-danger btn-sm m-2">Delete</button>
                    </div>    
                    
                    </div>
                    
                </div>
                
            </div>
        </div>	
    )
}

export default EditItem
