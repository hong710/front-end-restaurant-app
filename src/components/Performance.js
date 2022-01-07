import React,{useState, useEffect} from 'react';



function Performance() {
    const [foods, setFoods] = useState([]);
    
    useEffect(()=>{
		fetch("http://localhost:9292/foods")
			.then((r)=>r.json())
			.then((arr => setFoods(arr))
	)},[]);
    
    function roundToTwo(num){
        return +(Math.round(num + "e+2")  + "e-2");
    }


    return (
        <div className="">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Food Name</th>
                    <th scope="col">Food Price</th>
                    <th scope="col">Order Total</th>
                    <th scope="col">Sale Total</th>

                    </tr>
                </thead>
                <tbody>
                    {foods.map((food,index)=> 
                    <tr key={food.id}>
                        <th scope="row">{index+1}</th>
                            <td>{food.name}</td>
                            <td>${food.price}</td>
                            <td>{
                            (food.orders.length)
                            }</td>
                            <td>$ {roundToTwo(food.price * food.orders.length)}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Performance
