import { Fragment } from "react";
import Projects from "../../components/projects/projects";
import Welcome from "../../components/welcome/welcome";
import data from "../../data/projects.json";

export default function Home() { 

	return (
		<Fragment>
			<Welcome />
			<Projects data={data} />
		</Fragment>
	);
}
