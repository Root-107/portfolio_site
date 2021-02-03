import { GlobalHeader } from "components/globalStyles"
import Section from "./section"

const AboutMe = () => <>
    <GlobalHeader>ABOUT ME</GlobalHeader>
    <Section src="/assets/icon.jpg"
        paragraph="
            # *Me*
            Welshman and a neard. 
        "
    />
    <Section src="/assets/icon.jpg"
        paragraph="
            # *When I'm not writing code*
            I came from a Games Design 3D background so the creative and atistic side will always be an interest for me, 3D drawing and visual effects inside of games, love me some particles.
            I enjoy table top games, I recently got in to 40k though my love for DnD, I DM a long running campain for a small group of friends, paining minitures, world build and story telling.
        "
    />
</>

export default AboutMe