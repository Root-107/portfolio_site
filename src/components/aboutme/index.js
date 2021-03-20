import Header from "components/reusable/header"
import { Picture, SectionWrapper, ImageContainer } from "./styles"
import Section from "components/reusable/section"

const AboutMe = () => <Section>
    <Header content={"About Me"}/>
    <SectionWrapper>
        <div>
            <p>Hey, I'm Sam, a Software developer.</p>
            <p>_SOMETHING ABOUT WHY PROGRAMMER_</p>
            <p>_LITTLE ABOUT STUFF_</p>
            <p>_MY BEST LANGUAGES_</p>
        </div>
        <ImageContainer>
            <Picture src="/assets/icon.jpg" />
        </ImageContainer>
    </SectionWrapper>
</Section>

export default AboutMe