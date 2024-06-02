import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import FourSimpleSteps from "./FourSimpleSteps";
import AboutUs from "./AboutUs"
import FundOrgCol from "./FundOrgCol";
import ContactUs from "./ContactUs";

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <FourSimpleSteps />
            <AboutUs />
            <FundOrgCol />
            <ContactUs />
            {/*  inne komponenty*/}
        </div>
    )
}
export default Home;