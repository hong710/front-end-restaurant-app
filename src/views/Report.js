import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import CustomerInfo from '../components/CustomerInfo';
import SaleReport from '../components/SaleReport';
import Performance from '../components/Performance';

function Report() {

    const [customers, setCustomers] = useState([]);
    const [tabOne, setTabOne] = useState("nav-link active");
    const [tabTwo, setTabTwo] = useState("nav-link");
    const [tabThree, setTabThree] = useState("nav-link");

    const [tabContent1, setTabContent1] = useState("tab-pane fade show active");
    const [tabContent2, setTabContent2] = useState("tab-pane fade");
    const [tabContent3, setTabContent3] = useState("tab-pane fade");

    useEffect(()=>{
		fetch("http://localhost:9292/report")
			.then((r)=>r.json())
			.then((arr => setCustomers(arr))
	)},[]);
    
    function handleTabOne(arr){
        setTabOne("nav-link active");
        setTabTwo("nav-link");
        setTabThree("nav-link");
        
        setTabContent1("tab-pane fade show active");
        setTabContent2("tab-pane fade");
        setTabContent3("tab-pane fade")
    }

    function handleTabTwo(arr){
        setTabOne("nav-link");
        setTabTwo("nav-link active");
        setTabThree("nav-link");

        setTabContent1("tab-pane fade");
        setTabContent2("tab-pane fade show active");
        setTabContent3("tab-pane fade");
    }
    

    function handleTabThree(arr){
        setTabOne("nav-link");
        setTabTwo("nav-link");
        setTabThree("nav-link active");

        setTabContent1("tab-pane fade");
        setTabContent2("tab-pane fade");
        setTabContent3("tab-pane fade show active")
    }
    
    return (
            
        <div className="container">
            
            <Header name="Dashboard"/>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tabList">
                    <button className={tabOne} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false" onClick={handleTabOne}>Sale Report</button>
                    <button className={tabTwo} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true" onClick={handleTabTwo}>Customer Info</button>
                    <button className={tabThree} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={handleTabThree}>Performance</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className={tabContent1} id="nav-home" role="tabPanel" aria-labelledby="nav-home-tab">
                    <SaleReport customers={customers}/>
                </div>

                <div className={tabContent2} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    
                    <CustomerInfo customers={customers}/>
                </div>

                <div className={tabContent3} id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Performance /> 
                </div>
            </div>
        </div>
    )
}

export default Report
