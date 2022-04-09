import React from "react";
import NavBar from "./NavBar";
//include images into your bundle

import Jumbotron from "./JumboTron";
import Card from "./Card";

const myTitles = [
	{ title: "Decide well or..." },
	{ title: "Don't think about it" },
	{ title: "This is it..." },
	{ title: "This is not it!" },
];

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="row">
				{myTitles.map((element, index) => {
					return (
						<div className="col-3" key={index}>
							<Card title={element.title} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
