import { Picture, Banner } from "./styles"

const Home = () => <>
    <Banner>
        <Picture src="/assets/icon.jpg" />
        <div>
            <h1>Sam Pugh</h1>
            <h2>{`{ Software Developer }`}</h2>
        </div>
    </Banner>
</>

export default Home