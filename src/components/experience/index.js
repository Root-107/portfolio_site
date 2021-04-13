import { useState } from "react"
import Section from "components/reusable/section"
import Header from "components/reusable/header"
import { Menu, Info, MenuButton, ExperienceWrapper } from "./styles"

const options = [
    {
        name: "DBpixelhouse",
        role: "Team Lead",
        date: "Jan 2020 - Present",
        content: [
            "Lead team of web and unity developers",
            "Work alongside other team membors on processes"
        ]
    },
    {
        name: "DBSystems",
        role: "Software Developer",
        date: "Jan 2019 - Jan 2020",
        content: [
            "Develop unity applciations",
            "Working with ",
            "Work acrss treams",
        ]
    }
]

const Experience = () => {
    const [active, setActive] = useState(options[0])

    return <Section>
        <div id="experience">
            <Header content={"Experience"} />
            <ExperienceWrapper>
                <Menu>
                    {options.map(item => 
                        <MenuButton onClick={() => {
                            setActive(item)
                        }}>
                            {item.name}
                        </MenuButton>
                    )}
                </Menu>
                <Info>
                    <p>{active.role} at {active.name}</p>
                    <p>{active.date}</p>
                    {active.content.map(item => <p>{item}</p>)}
                </Info>
            </ExperienceWrapper>
        </div>
    </Section>
}

export default Experience