import React from 'react'

function Item() {
    return (
        <div className="col-6 mb-3">
            <div className="card">
                <div class="row card-body p-0">
                <div class="col-6">
                    <h6 class="card-title m-2 ">Pad Thai</h6>
                    <h6 class="card-text m-2">$ 10.45</h6>
                </div>
                    <img class="col-6" src="https://menuimages.chownowcdn.com/image-resizing?image=28688%2F3cbc9e00-e32c-46fe-96c2-f0daeea6a365.jpg&left=2430&top=820&right=397&bottom=918&height=256&width=256&quality=85&fit=contain" alt="sans"/>
                </div>
            </div>
        </div>	
    )
}

export default Item
