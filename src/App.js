import { Switch, Route } from "react-router-dom"
import Home from "components/home"
import ThreeD from "components/3d"
import Unity from "components/unity"
import Navagation from "components/navagation"
import GlobalSyles, { PageWrapper } from "components/globalStyles"

const App = () => <div className="app">
	<GlobalSyles />
	<Navagation />
	<PageWrapper>
		<Switch>
			<Route exact path="/" render={Home}/>
			<Route exact path="/aboutme" render={Home}/>
			<Route exact path="/3js" render={ThreeD} />
			<Route exact path="/unity" render={Unity} />
		</Switch>
	</PageWrapper>
</div>

export default App