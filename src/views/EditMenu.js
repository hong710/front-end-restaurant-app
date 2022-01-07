import EditSection from '../components/EditSection';
import Header from '../components/Header';
import AddModal from '../components/AddModal';

function EditMenu() {


    return (
        <div className="container">
			<Header className name="Edit Menu"/>
			<div className="d-flex justify-content-between align-content-center">   
				<div></div>
				<h4><button className="btn btn-link" data-toggle="modal" data-target="#exampleModal"><i className="bi bi-plus-circle-fill h3"></i></button> New Item </h4>
				<AddModal />
			</div>

			<EditSection heading = {"Appetizers"} cat={"App"}/>
			<EditSection heading = {"Noodles & Fried Rice"} cat={"Fry"}/>
			<EditSection heading = {"Curries"} cat={"Curry"}/>
			<EditSection heading = {"Entrees"} cat={"Entree"}/>
				
		</div>
    )
}

export default EditMenu
