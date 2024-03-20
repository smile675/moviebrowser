import Hero from "./Hero"

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are serching for ${keyword}`;
    return (
        <>
            <Hero text={title} />

        </>
    )
}
export default SearchView