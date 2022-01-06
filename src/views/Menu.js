import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';

function Menu() {

    return (
        <div className="container">
			<Header className name="Welcome To Thai Ladle"/>
				<Section heading ={"Appetizer"} cat={"App"}/>
				<Section heading ={"Noodles & Fried Rice"} cat={"Fry"}/>
				<Section heading ={"Curries"} cat={"Curry"}/>
				<Section heading ={"Entrees"} cat={"Entree"}/>
		</div>
    )
}
export default Menu
