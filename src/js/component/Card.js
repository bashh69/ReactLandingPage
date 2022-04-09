import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://picsum.photos/200"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Praesent quis elit at ipsum iaculis congue. Quisque
					hendrerit, purus et scelerisque faucibus, mauris augue
					fermentum nibh, nec laoreet arcu leo vel erat.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
};

export default Card;
