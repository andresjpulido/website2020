import React from "react";
import AppContext from "../../AppContext";
import "./welcome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Welcome() {
	const { style } = React.useContext(AppContext);

	return (
		<section className={"welcome welcome-" + style}>
			<h1>
				Hi, I'm <span className="home-name">Andres Pulido</span>
			</h1>
			<h2>software developer</h2>
			<div>
				See my CV{" "}
				<a href="./data/cv.pdf" target="_blank">
					here.
				</a>
			</div>
			<div className="welcome-arrow">
				<a href="#projects">
					<div>See my portfolio</div>
					<div>
						<FontAwesomeIcon icon={["fas", "angle-down"]} />
					</div>
				</a>
			</div>
		</section>
	);
}
