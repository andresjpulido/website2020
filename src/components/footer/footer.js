import React from "react";
import "./footer.css";
import AppContext from "../../AppContext";
import contactItemsList from "../../data/contactItems.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	const { style } = React.useContext(AppContext);

	const socialNet = contactItemsList.map((item) => (
		<ul key={item.id.toString()} className="footer-networks">
			<li>
				<a href={item.url} target="_blank" rel="noreferrer" title={item.label}>
					<div className={"footer-network footer-network-" + style}>
						<FontAwesomeIcon
							icon={[item.iconFamily, item.icon]}
							key={item.id}
						/>
						 
					</div>
				</a>
			</li>
		</ul>
	));

	return (
		<section className={"footer footer-" + style}>
			<p>Copyright ©2020 All rights reserved </p>
			<p>Created by Andres Pulido, Auckland, New Zealand</p>
			<div className="footer-networks">{socialNet}</div>
		</section>
	);
}
