import Hero from "./Hero"
// 4120e79ef2bdc889c46a62aebbe33f5a
const SearchView = ({ keyword, searchResults }) => {
    const title = `You are serching for ${keyword}`;
    const resultHtml = searchResults.map((obj, i) => {
        return <div key={i}>{obj.original_title}</div>
    })
    return (
        <>
            <Hero text={title} />
            {resultHtml}

        </>
    )
}
export default SearchView