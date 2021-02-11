import { GlobalHeader } from "components/globalStyles"
import Filter from "./filter"
import Work from "./work"

const items = [
    {
        id: 1,
        lable: "Unity",
        filter: "unity"
    },
    {
        id: 2,
        lable: "React",
        filter: "react"
    },
    {
        id: 3,
        lable: "3JS",
        filter: "3js"
    },
    {
        id: 4,
        lable: "UE4",
        filter: "unreal"
    },
    {
        id: 4,
        lable: "3D",
        filter: "3d"
    },
]

const work = [
    {
        id: 1,
        title: "Item 1",
        filters: ["3js", "react"],
    },
    {   
        id: 2,
        title: "Item 2",
        filters: ["unity"],
        asset: {
            type: "LINK",
            url: "https://www.youtube.com/watch?v=G_Hth8q_G2w",
            thumb: "Shader_Unity.png"
        }
    },
    {   
        id: 3,
        title: "Item 2",
        filters: ["unreal", "3d"],
        asset: {
            type: "LINK",
            url: "https://www.artstation.com/artwork/LwN1v",
            thumb: "3d_enviroment_rocks.jpg"
        },
    },
    {   
        id: 4,
        title: "Item 2",
        filters: ["unity"],
        asset: {
            type: "LINK",
            url: "https://youtu.be/0QQqFFE9SOw",
            thumb: "bunnys.png"
        },
        github: "https://github.com/Root-107/Shader_Development"
    },
    {   
        id: 4,
        title: "Item 2",
        filters: ["unity"],
        asset: {
            type: "LINK",
            url: "https://youtu.be/zBOKaYRIY8Y",
            thumb: ""
        },
    },
    {
        id: 4,
        title: "Item 2",
        filters: ["react"],
        asset: {
            type: "LINK",
            thumb: ""
        },
        github: "https://github.com/Root-107/portfolio_site"
    }
]

const MyWork = () => <>
    <GlobalHeader>My Work</GlobalHeader>
    <Filter items={items} />
    <Work items={work} />
</>

export default MyWork