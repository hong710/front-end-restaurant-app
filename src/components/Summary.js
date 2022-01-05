
const myComponentStyle ={
    minHeight:"300px", 
    border:"1px solid #C9C9C9", 
    borderRadius:"10px",
}

const iconStyle = {
    fontSize:"15rem",
    color: "#C4C4C4"
}

function Summary() {
    return (
        <div style={myComponentStyle} className="position-fixed">
            <h3 className=" text-center p-3">Order Summary</h3>
            <div className="border-bottom"></div>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <i class="bi bi-bag-check" style={iconStyle}></i>
                <h5 className="p-2 text-secondary">Choose an item from the menu to get started</h5>
            </div>
            
            
            
        </div>
    )
}

export default Summary
