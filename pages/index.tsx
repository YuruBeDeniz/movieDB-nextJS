import { useState } from "react";
import { NextPage } from "next";
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

 /*  if(data) {
    const randomResultIndex = Math.floor(Math.random() * data.pages[0].results.length);
    const randomResult = data.pages[0].results[randomResultIndex]
    console.log("randomResult: ", randomResult)
  } */ 
  

  return (
   <main className="relative h-screen overflow-y-scroll">
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
      {data && data.pages ? data.pages.map(page => page.results.map(movie => <div key={movie.id}>
          <Card 
            imgURl={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : "/no_image.jpg"}
            title={movie.original_title} />
        </div>)) : null}
    </Grid>
    <Spinner />
    RMDB
   </main>
  )};

export default Home;

