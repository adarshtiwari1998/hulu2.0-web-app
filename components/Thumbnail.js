import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Thumbnail({ result }) {

//base url of imdb movie images
const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
           <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
        <div className="p-2">
        {/* movie overview */}
        <p className="truncate max-w-md">{result.overview}</p>
        {/* movie title */}
        <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
        {/* category type if exists */}
        {result.media_type && `${result.media_type} •`}{""}
        {/* movie release date if exists */}
        {result.release_date || `${result.first_air_date} •`}{""}
         {/* movie like count if exists */}
        <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        
        </p>
      </div>
        </div>
    );
}

export default Thumbnail
