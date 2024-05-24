import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import FourSimpleSteps from "./FourSimpleSteps";

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <FourSimpleSteps />;
            {/*  inne komponenty*/}
        </div>
    )
}
export default Home;