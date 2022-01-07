import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';

function Menu() {

    return (
        <div className="container">
			<Header className name="Welcome To Thai Ladle"/>
				<Section heading ={"Appetizers"} cat={"App"}/>
				<Section heading ={"Noodles & Fried Rice"} cat={"Fry"}/>
				<Section heading ={"Curries"} cat={"Curry"}/>
				<Section heading ={"Entrees"} cat={"Entree"}/>
				
				<footer className="mt-5 pt-5"></footer>
		</div>
    )
}
export default Menu
