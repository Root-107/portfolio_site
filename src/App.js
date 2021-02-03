import { Switch, Route } from "react-router-dom"
import Home from "components/home"
import MyWork from "components/myWork"
import AboutMe from "components/aboutme"
import Navagation from "components/navagation"
import GlobalSyles, { PageWrapper } from "components/globalStyles"

const App = () => <div className="app">
	<GlobalSyles />
	<Navagation />
	<PageWrapper>
		<Switch>
			<Route exact path="/" render={Home} />
			<Route exact path="/aboutme" render={AboutMe} />
			<Route exact path="/mywork" render={MyWork} />
		</Switch>
	</PageWrapper>
</div>

export default App