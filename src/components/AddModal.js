import React,{useState, useEffect} from 'react';


function AddModal() {

    const [newItem, setNewItem] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newImg, setImg] = useState("");
    const [category, setCategory] = useState("");


    function handleOnChangeItem(e){
        setNewItem(e.target.value);
    }

    function handleOnChangePrice(e){
        setNewPrice(e.target.value);
    }

    function handleOnChangeImg(e){
        setImg(e.target.value);
    }

    function handleOnChangeCat(e){
        setCategory(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const itemData = {
            name: newItem,
            price: newPrice,
            image: newImg,
            category: category
        }

        fetch("http://localhost:9292/new_items", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
        })
        .then((r) => r.json())
        .then((newItem) => newItem); 
        document.location.reload();
    }

    




    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New Item</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="new-item">New Item</span>
                        </div>
                        <input type="text" className="form-control" placeholder="" aria-label="NewItem" aria-describedby="basic-addon1" onChange={handleOnChangeItem}/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="price">Item Price</span>
                        </div>
                        <input type="text" className="form-control" placeholder="" aria-label="Price" aria-describedby="basic-addon2" onChange={handleOnChangePrice}/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="img-link">Image link</span>
                        </div>
                        <input type="text" className="form-control" placeholder="" aria-label="Image" aria-describedby="basic-addon3" onChange={handleOnChangeImg}/>
                    </div>

                    <div className="input-group  mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">_Category</label>
                        </div>
                        <select className="form-control" id="inputGroupSelect01" onChange={handleOnChangeCat}>
                            <option defaultValue>Choose...</option>
                            <option value="App">Appetizer</option>
                            <option value="Fry">Fry Dishes</option>
                            <option value="Entree">Entrees</option>
                            <option value="Curry">Curries</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default AddModal
