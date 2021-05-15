import { ChartSquareBarIcon, DocumentTextIcon, ThumbUpIcon, CalendarIcon, FolderIcon, FlagIcon, TrendingUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

// this forwardref is used to get reference in the parent components
const Thumbnail = forwardRef(({ result }, ref) => {

//base url of imdb movie images
const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        // get animation mark here to type ref
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
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
        <div className="flex items-center opacity-0 group-hover:opacity-100">
         {/* movie trending type if exists */}
        <TrendingUpIcon className="h-5 mx-2 text-white group-hover:font-normal" /> 
        <h2 className="text-1.5xl text-white group-hover:font-normal">
        {result.vote_average || `${result.vote_average}`}{""}</h2>
         {/* movie like count if exists */}
          <ThumbUpIcon className="h-5 mx-2 text-white group-hover:font-normal" />
          <h2 className="text-1.5xl text-white group-hover:font-normal">
           {result.vote_count}</h2>
         {/* movie release date if exists */}
         <CalendarIcon className="h-5 mx-2" />
         <h2>{result.release_date || `${result.first_air_date}`}{""}</h2>
        </div>
        {/* movie title */}
        <h2 className="mb-2 truncate max-w-md text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
          {/* movie overview */}
         <p className="truncate max-w-md">{result.overview}</p>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
        {/* category type if exists */}
        <FolderIcon  className="h-5 mx-2" />
        {result.media_type && `${result.media_type}`}{""}
        {/* movie original language if exists */}
        <DocumentTextIcon className="h-5 mx-2" /> {result.original_language || `${result.original_language}`}{""}
          {/* movie popularity if exists */}
         <ChartSquareBarIcon className="h-5 mx-2" /> {result.popularity || `${result.popularity}`}{""}
        </p>
      </div>
        </div>
    );
});

export default Thumbnail
