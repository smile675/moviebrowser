import Hero from "./Hero"
import MovieCard from "./components/MovieCard";
// 4120e79ef2bdc889c46a62aebbe33f5a
const SearchView = ({ keyword, searchResults }) => {
    const title = `You are serching for ${keyword}`;
    const resultHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    return (
        <>
            <Hero text={title} />
            {resultHtml &&
                <div className="container">
                    <div className="row">
                        {resultHtml}
                    </div>
                </div>
            }

        </>
    )
}
export default SearchView