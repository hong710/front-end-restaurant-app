import React from "react";

function Header({name}) {
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="title jumbotron-heading p-5 mb-5">{name}</h1>
            </div>
        </section>
    );
}

export default Header;
