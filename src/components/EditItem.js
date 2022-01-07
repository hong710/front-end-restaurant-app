import React,{useState} from 'react';


const imgStyle = {
    width:"35%",
    height:"35%"
}

function EditItem({id, name, price,img,category, active}) {

    const [updateName, setUpdateName] = useState(name);
    const [updatePrice, setUpdatePrice] = useState(price);
    const [updateImg, setUpdateImg] = useState(img);
    const [updateCat, setUpdateCat] = useState(category);
    const [updateActive, setUpdateActive] = useState(active);

    function handleOnChangeName(e){
        setUpdateName(e.target.value);        
    }

    function handleOnChangePrice(e){
        setUpdatePrice(e.target.value);
    }

    function handleOnChangeImg(e){
        setUpdateImg(e.target.value);
    }

    function handleOnChangeCat(e){
        setUpdateCat(e.target.value);
    }

    function handleOnActive(e){
        if (e.target.checked) {
            setUpdateActive(false);
        }else
            setUpdateActive(true);
        
    }

    function handleSubmit(e){
        e.preventDefault();
        const updateItem = {
            name: updateName,
            price: updatePrice,
            image: updateImg,
            category: updateCat,
            active:updateActive
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

    function handleDelete(e){
        e.preventDefault();
        fetch(`http://localhost:9292/delete_order/${id}`, {
        method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedItem) => (deletedItem));

        fetch(`http://localhost:9292/delete_food/${id}`, {
        method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedItem) => (deletedItem));
        document.location.reload();
    }

    console.log(updateActive)
    
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
                                {
                                updateActive ? <input className="form-check-input" type="checkbox" id="flexCheckChecked"  onChange={handleOnActive} />
                                : <input className="form-check-input" type="checkbox" checked id="flexCheckChecked"  onChange={handleOnActive} />
                                }
                                
                                <label className={updateActive ? "form-check-label bg-success text-light px-1" 
                                    : "form-check-label bg-warning px-1 "} htmlFor="flexCheckChecked" >
                                {updateActive? "Show" : "Hide"}
                                </label>
                            </div>
                            <div className="m-2">
                                <select className="" id="inputGroupSelect01" onChange={handleOnChangeCat}>
                                    <option value={category}>Choose.....</option>
                                    <option value="App">Appetizer</option>
                                    <option value="Fry">Noodles & Fried Rice</option>
                                    <option value="Entree">Entrees</option>
                                    <option value="Curry">Curries</option>
                                </select>
                            </div>
                            <div className="d-flex">
                                <button type="submit" className="btn btn-primary btn-sm m-2">Update</button>
                                <button type="button" className="btn btn-danger btn-sm m-2" onClick={handleDelete}>Delete</button>
                            </div>        
                        </div>
                    </div>
                </form>
            </div>
        </div>	
    )
}

export default EditItem
