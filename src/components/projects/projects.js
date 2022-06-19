import React, { useState } from "react";
import "./projects.css";
import AppContext from "../../AppContext";

export default function Projects() {
	const { style, setStyle } = React.useContext(AppContext);

	return (
		<section className={"projects-" + style} id="projects">
			<article className={"project"}>
				<div className="project-img">
					<img src="/pocket-astronomy.jpg" alt="xxx" />
				</div>
				<div className="project-text">
					<h4>Name</h4>
					<p>description</p>
					<a href="#" className="project-button">
						View project{" "}
					</a>
				</div>
			</article>
			<article className="project">
				<div className="project-img">
					<img src="/pocket-astronomy.jpg" alt="" />
				</div>
				<div className="project-text">
					<h4>Name</h4>
					<p>description</p>
					<a href="#">View project </a>
				</div>
			</article>
			<article className="project">
				<div className="project-img">
					<img src="/pocket-astronomy.jpg" alt="" />
				</div>
				<div className="project-text">
					<h4>Name</h4>
					<p>description</p>
					<a href="#">see project </a>
				</div>
			</article>
		</section>
	);
}
