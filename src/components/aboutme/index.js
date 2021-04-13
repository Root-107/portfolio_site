import Header from "components/reusable/header"
import { Picture, SectionWrapper, ImageContainer } from "./styles"
import Section from "components/reusable/section"

const AboutMe = () => <Section>
    <div id="about">
        <Header content={"About Me"}/>
        <SectionWrapper>
            <div>
                <p>Hey, I'm Sam, a Software developer.</p>
                <p>Prgramming gives me the satisfaction of porblem solving along we creativity</p>
                <p>I've worked on a variaty of projects for a variaty of clinets.</p>
            </div>
            <ImageContainer>
                <Picture src="/assets/icon.jpg" />
            </ImageContainer>
        </SectionWrapper>
    </div>
</Section>

export default AboutMe