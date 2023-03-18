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
    
    <Grid />
    <Spinner />
    <Card />
    RMDB
   </main>
  )};

export default Home;

