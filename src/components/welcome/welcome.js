import React from "react";
import AppContext from "../../AppContext";
import "./welcome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Welcome() {
	const { style } = React.useContext(AppContext);

	return (
		<section className={"welcome welcome-" + style}>
			<div className="welcome-title">
				<h1>
					Hi, I'm  Andres Pulido 
				</h1>
				<span className="welcome-position">software developer</span>
				 
			</div>
			<div className="welcome-arrow">
				<a href="#projects">
					<div className="btn-shine">See my portfolio</div>
					<br/><br/>
					<div>
						<FontAwesomeIcon icon={["fas", "angle-down"]} />
					</div>
				</a>
			</div>
		</section>
	);
}
