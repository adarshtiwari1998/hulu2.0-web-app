import Thumbnail from "./Thumbnail";

function Results({ results }) {
    // destructure props as results
    return (
        <div>
        {/* request the each thumbnail */}
         {results.map((result) => (
             //mapping as key and second entire results through as props
             <Thumbnail key={result.id} result={result}  />
         ))}
        </div>
    );
}

export default Results
