import { useState } from "react";
import { NextPage } from "next";
//fetch hook
import { useFetchMovies } from "@/api/fetchHooks";
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
    <Header />
    <Hero />
    <Grid />
    <Spinner />
    <Card />
    RMDB
   </main>
  )};

export default Home;

