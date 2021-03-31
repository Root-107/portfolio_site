import { useEffect, useState } from "react"
import Experience from "components/experience"
import Home from "components/home"
import MyWork from "components/myWork"
import AboutMe from "components/aboutme"
import Navagation from "components/navagation"
import GlobalSyles, { PageWrapper } from "components/globalStyles"

const App = () => {
	const [scrolePos, setScrolePos] = useState(0)

    const handleScroll = () => {
        setScrolePos(window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {passive: true})
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

	return <div className="app">
		<GlobalSyles />
		<Navagation visible={scrolePos === 0} />
		<PageWrapper>
			<Home />
			<AboutMe />
			<Experience />
			<MyWork />
		</PageWrapper>
	</div>
}


export default App
