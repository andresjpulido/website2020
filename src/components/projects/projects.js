import React, { useState } from "react";
import "./projects.css";
import AppContext from "../../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects(props) {
	const { style, setStyle } = React.useContext(AppContext);

	if (!props.data) return <div></div>;

	const projects = props.data
		.sort((a, b) => a.level - b.level)
		.map((item, index) => {
			return (
				<div className="project" key={index}>
					<div className="project-column">
						<img
							src={"/images/projects/" + item.image}
							alt={item.description}
							loading="lazy"
						/>
					</div>
					<div className="project-column">
						<h4>{item.title}</h4>
						<p> {item.description}</p>
						 
						<div className="project-tech">
							<FontAwesomeIcon icon={["fas", "screwdriver-wrench"]} />
							<div className="project-tech-list">
								{item.tags.map((tag, index) => (
									<div className="project-tech-item" key={index}>
										{tag}
									</div>
								))}
							</div>
						</div>
						<div className="project-links">
							<a
								href={item.url}
								target="_blank"
								rel="noreferrer"
								title="go Github"
							>
								<div className="project-button">go Github</div>
							</a>

							{item.website && (
								<span>
									<a
										href={item.website}
										target="_blank"
										rel="noreferrer"
										title="go demo"
									>
										<div className="project-link">Online demo</div>
									</a>
								</span>
							)}
						</div>
					</div>
				</div>
			);
		});

	return (
		<section className={"projects-" + style} id="projects">
			<h2>Projects</h2>
			<article>{projects}</article>
		</section>
	);
}
