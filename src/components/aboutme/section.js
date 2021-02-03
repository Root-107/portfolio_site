import { SectionWrapper, Image, ParagraphContainer, ImageContainer } from "./styles"
import Markdown from "react-markdown"

const Section = props => {
    const {src, paragraph} = props
    return <SectionWrapper>
    <ImageContainer>
        <Image src={src} alt={src} />
    </ImageContainer>
    <ParagraphContainer>
        <Markdown>
            {paragraph}
        </Markdown>
    </ParagraphContainer>
</SectionWrapper>
}

export default Section