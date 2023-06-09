import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
//fetch hook
import { useFetchMovies } from "@/api/fetchHooks";
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "@/config";
//components
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Card from "@/components/Card/Card";
import Spinner from "@/components/Spinner/Spinner";
import Grid from "@/components/Grid/Grid";



const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);
  


  console.log(data)

  /* if(data) {
    const randomResultIndex = Math.floor(Math.random() * data.pages[0].results.length);
    const randomResult = data.pages[0].results[randomResultIndex]
    console.log("randomResult: ", randomResult)
  } */ 
  
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    console.log(e);
    const {scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if(scrollHeight - scrollTop === clientHeight) fetchNextPage();
  }

  return (
   <main className="relative h-screen overflow-y-scroll" onScroll={handleScroll}>
    <Header setQuery={setQuery} />
    {!query && data && data.pages ? 
      <Hero 
      title={data.pages[0].results[0].title}
      text={data.pages[0].results[0].overview} 
      imgUrl={data.pages[0].results[0].backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + data.pages[0].results[0].backdrop_path : "/no_image.jpg"} 
      /> : null
    }
    
    <Grid
      className='p-4 max-w-7xl m-auto'
      title={query ? `Search Results: ${data?.pages[0].total_results}` : 'Popular Movies'}
    > 
      {data && data.pages 
        ? data.pages.map(page => 
           page.results.map(movie => 
            <Link key={movie.id} href={`/${movie.id}`} >
              <div className="cursor-pointer hover:opacity-80 duration-300">
                <Card 
                  imgURl={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : "/no_image.jpg"}
                  title={movie.original_title} 
                />
              </div>
            </Link>
            )) 
       : null}
    </Grid>
   { isLoading || isFetching ? <Spinner /> : null}
   </main>
  )};

export default Home; 


//if(scrollHeight - scrollTop === clientHeight) then we know that we're at the bottom
//then we fetch the next page --> fetchNextPage() this is from reactQuery
//so fetching the next page is client side. but fetching the movies are server side.

//we only show spinner, when we're fetching sth