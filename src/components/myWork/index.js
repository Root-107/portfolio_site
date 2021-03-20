import Filter from "./filter"
import Work from "./work"

const items = [
    {
        id: 1,
        lable: "Unity",
    },
    {
        id: 2,
        lable: "React",
    },
    {
        id: 3,
        lable: "3JS",
    },
    {
        id: 4,
        lable: "UE4",
    },
    {
        id: 5,
        lable: "3D",
    }
]

const work = [
    {
        id: 1,
        title: "Creating a 3D enviroment though ReactThreeFiber",
        filters: ["3JS", "React"],
        description: "description",
    },
    {   
        id: 2,
        title: "Planet Earth Shader",
        filters: ["Unity"],
        description: "description",
        asset: {
            type: "LINK",
            url: "https://www.youtube.com/watch?v=G_Hth8q_G2w"
        }
    },
    {   
        id: 3,
        title: "Desert Rocks in Z-Brush",
        filters: ["UE4", "3D"],
        description: "I wanted to learn more about the techneques used in creating rocks though z-brush.",
        asset: {
            type: "LINK",
            url: "https://www.artstation.com/artwork/LwN1v"
        },
    },
    {   
        id: 4,
        title: "Unity Shader Course",
        filters: ["Unity"],
        description: "I wanted to expand my knowlage of shaders so I took a course on Udemy, and documented eveything I did.",
        asset: {
            type: "LINK",
            url: "https://youtu.be/0QQqFFE9SOw"
        },
        git: "https://git.com/Root-107/Shader_Development"
    },
    {   
        id: 5,
        title: "Object Recognition",
        filters: ["Unity"],
        description: "Creation of an object recognition algorithum and modual system, to determin which object is placed on a table and display the associated content.",
        asset: {
            type: "LINK",
            url: "https://youtu.be/zBOKaYRIY8Y"
        },
    },
    {
        id: 6,
        title: "Creating portfolio site in React",
        filters: ["React"],
        description: "Creation of this portfolio site.",
        asset: {
            type: "LINK"
        },
        git: "https://git.com/Root-107/portfolio_site"
    }
]

const MyWork = () => <>
    <Filter items={items} />
    <Work items={work} />
</>

export default MyWork