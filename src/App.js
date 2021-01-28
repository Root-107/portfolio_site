import { Switch, Route } from "react-router-dom"
import Home from "components/home"
import ThreeD from "components/3d"
import Unity from "components/unity"
import Navagation from "components/navagation"
import GlobalSyles from "components/globalStyles"

const App = () => <div className="app">
	<GlobalSyles />
	<Navagation />
	<Switch>
		<Route exact path="/" render={Home}/>
		<Route exact path="/aboutme" render={Home}/>
		<Route exact path="/3js" render={ThreeD} />
		<Route exact path="/unity" render={Unity} />
	</Switch>
</div>

export default App