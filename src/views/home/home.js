import { Fragment } from "react";
import Projects from "../../components/projects/projects";
import Welcome from "../../components/welcome/welcome";

export default function Home() {
	return (
		<Fragment>
			<Welcome />
			<Projects />
		</Fragment>
	);
}
