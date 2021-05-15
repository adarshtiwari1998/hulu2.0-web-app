import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

//this is render on client side

export default function Home({ results }) {
  // destructure the result
  return (
    <div>
      <Head>
        <title>Hulo 2.0 web app</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
         <Nav />
         {/* pass the result as props on result components */}
         {/* it takes array as props and render on frontend */}
         <Results results={results} />
    </div>
  );
}
// this will render on server side
// the server render happens first then it get deliver to the clients
// server side rendering props with help of async function
// here context include important details of what does the url are user given 

export async function getServerSideProps(context) {
//pull the  genre from the url and
const genre = context.query.genre;
const request = await fetch (`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
).then((res) => res.json());

return {
  props: {
    results: request.results,
  },
};


}
