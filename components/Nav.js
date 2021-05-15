
import requests from "../utils/requests";
//next.js have inbuilt router
import { useRouter } from "next/router";

function Nav() {
    const router = useRouter();

    return (
        <nav className="relative">
          <div className="flex px-10 py-2 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
               {/* fetch data from request of assign entries and get the title frm request*/}
              {Object.entries(requests).map(([key, {title, url}]) => (
          <h2 key={key} 
          //this onclick function have change the category url with the help of title key
          onClick={() => router.push(`/?genre=${key}`)} 
           className="transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 cursor-pointer last:pr-24 "> {title}</h2>
          ))}
          </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      </nav>
    );
}

export default Nav
