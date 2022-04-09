import React from "react";
import NavBar from "./NavBar";
//include images into your bundle

import Jumbotron from "./JumboTron";
import Card from "./Card";

const myTitles = [
	{
		title: "Decide well or else...",
		imageUrl: "https://picsum.photos/500/325",
	},
	{
		title: "Don't think about it",
		imageUrl: "https://picsum.photos/seed/picsum/500/325",
	},
	{
		title: "This is it...",
		imageUrl: "https://picsum.photos/500/325?grayscale",
	},
	{ title: "This is not it!", imageUrl: "https://picsum.photos/500/325" },
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
							<Card
								title={element.title}
								Card
								imageUrl={element.imageUrl}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
