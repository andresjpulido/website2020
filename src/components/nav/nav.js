import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext";
import "./nav.css";

export default function Nav() {
	const { style, setStyle } = React.useContext(AppContext);
	const [page, setpage] = useState("home");

	let history = useNavigate();

	function updatePage(page) {
		setpage(page);

		history(page);
	}

	return (
		<nav className="nav">
			<ul className="nav-ul">
				<li
					className={
						page === "home"
							? "nav-li nav-li-" +
							  style +
							  " nav-li-active nav-li-active-" +
							  style
							: "nav-li"
					}
					onClick={() => updatePage("home")}
				>
					Home
				</li>
				<li
					className={
						page === "bio"
							? "nav-li nav-li-" + style + " nav-li-active nav-li-active-" + style
							: "nav-li"
					}
					onClick={() => updatePage("bio")}
				>
					Bio
				</li>
			</ul>
		</nav>
	);
}
