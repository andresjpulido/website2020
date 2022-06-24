import React, { useState } from "react";
import AppContext from "../../AppContext";
import "./bio.css";

export default function Bio() {
	const { style, setStyle } = React.useContext(AppContext);

	return (
		<section>
			
			<div className={"bio bio-" + style}>
			<h2>Bio</h2>
				<p className="abstract">
					Software developer, walker, passionate about technology, interested in
					learning and creating fantastic things. Systems Engineer expert in
					business applications J2EE, SOA, web applications and single-page
					applications.
				</p>
				<h5>GIS school</h5>
				<p>
					I started developing geographic information systems, working with
					mapserver, Oracle Spatial, PostGis, ArcIms, geographic metadata, etc,
					this world is cool !!! It was a great learning experience; this kind
					of projects allow you to experiment and learn new things, also
					graphically they are striking and are very useful.
				</p>
				<h5>Enterprise Applications</h5>
				<p>
					Then I worked for several years in the development of J2EE enterprise
					applications for intranet over Websphere Application Server and SQL
					Server in public and private entities. In my last project, our team
					built an internet application that encourages digital sales in a bank,
					in this project I learned a lot about user interface and architecture
					oriented to microservices.
				</p>
				<h5>Future</h5>
				<p>
					I stay hungry! I seek to be part of a great team with which we achieve
					a high quality in the development and an agile publication in
					production of products that serve and generate value to society. This
					year I will create content on the internet to share knowledge and
					share experiences with developers from all over the world.
				</p>
				<h5>Interest</h5>
				<p>Hiking, arduino Uno and learning python.</p>
			</div>
		</section>
	);
}
