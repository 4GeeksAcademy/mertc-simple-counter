import React from "react";
import Counter from "./Counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ClockCard from "./ClockCard.jsx";

//create your first component
const Home = () => {
	return (

		<div >
			 <ClockCard> <Counter/> </ClockCard>

		</div>
	);
};

export default Home;
