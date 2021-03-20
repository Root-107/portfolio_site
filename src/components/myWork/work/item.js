import { PortfolioItem, Footer, Links } from "./styles";

const Item = (props) => {
  const { item } = props;
  return (
    <PortfolioItem
      key={item.id}
      onClick={() => {
        if (item.asset?.url) {
          window.open(item.asset.url, "_blank");
        }
      }}
    >
        <ExternalLinks git={item.git || ""} url={item.asset?.url || ""}/>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Footer>
            <ul>{(item.filters || []).map(filter => <li>{filter}</li>)}</ul>
        </Footer>
    </PortfolioItem>
  )
}

const ExternalLinks = (props) => {
    const { git, url } = props
    return <Links>
        {git? <img src="" alt="git" onClick={() => window.open(git)} /> : null }
        {url? <img src="" alt="source" onClick={() => window.open(url)} /> : null }
    </Links>
}

export default Item;
