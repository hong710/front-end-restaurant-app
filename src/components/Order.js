import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Name from './Name';

function Order() {
    return (
        <div>
            <Header name="Thai Ladle Point Of Sale"/>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                        <Name/>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-6">
                        <Summary/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Order
