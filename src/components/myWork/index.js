import { GlobalHeader } from "components/globalStyles"
import Filter from "./filter"
import Work from "./work"

const items = [
    {
        id: 1,
        filter: "Unity"
    },
    {
        id: 2,
        filter: "React"
    },
    {
        id: 3,
        filter: "3JS"
    },
]

const work = [
    {
        id: 1,
        title: "Item 1",
        filters: ["3JS", "React"],
    },
    {   
        id: 2,
        title: "Item 2",
        filters: ["Unity"],
    }
]

const MyWork = () => <>
    <GlobalHeader>My Work</GlobalHeader>
    <Filter items={items} />
    <Work items={work} />
</>

export default MyWork