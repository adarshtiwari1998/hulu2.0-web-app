import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

function Results({ results }) {
    // destructure props as results
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {/* request the each thumbnail */}
         {results.map((result) => (
             //mapping as key and second entire results through as props
             <Thumbnail key={result.id} result={result}  />
         ))}
        </FlipMove>
    );
}

export default Results
