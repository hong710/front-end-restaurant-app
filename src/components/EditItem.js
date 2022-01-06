import React,{useState, useEffect} from 'react';


const imgStyle = {
    width:"35%",
    height:"35%"
}

function EditItem({id, name, price,img, status}) {

    const [updateName, setUpdateName] = useState(name);
    const [updatePrice, setUpdatePrice] = useState(price);
    const [updateImg, setUpdateImg] = useState(img);




    function handleOnChangeName(e){
        setUpdateName(e.target.value);
        
    }

    function handleOnChangePrice(e){
        setUpdatePrice(e.target.value);
    }

    function handleOnChangeImg(e){
        setUpdateImg(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const updateItem = {
            name: updateName,
            price: updatePrice,
            image: updateImg
        }

        fetch(`http://localhost:9292/foods/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateItem),
        })
        .then((r) => r.json())
        .then((updated) => (updated));
        document.location.reload();
        console.log(updateItem);
    }

    return (
        <div className="col-4 mb-3">
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="row card-body p-0">
                        <img className="col-6" style={imgStyle} src={img} alt="sans"/>
                        <div className="col-6">
                            <h6 className="card-text m-2 "><input className="" placeholder={name} onChange={handleOnChangeName}/></h6>
                            <h6 className="card-text m-2"><input className="" placeholder={"$ "+price} onChange={handleOnChangePrice} /></h6>
                            <h6 className="card-text m-2"><input className="" placeholder={img} onChange={handleOnChangeImg} /></h6>
                            <div className="form-check mx-2">
                                <input className="form-check-input" type="checkbox"  value="" id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked" >
                                    Deactivate
                                </label>
                            </div>
                            <div className="d-flex">
                                <button type="submit" className="btn btn-success btn-sm m-2">Update</button>
                                <button type="button" className="btn btn-danger btn-sm m-2">Delete</button>
                            </div>        
                        </div>
                    </div>
                </form>
            </div>
        </div>	
    )
}

export default EditItem
