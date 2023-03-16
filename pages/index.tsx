import { NextPage } from "next";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Card from "@/components/Card/Card";
import Spinner from "@/components/Spinner/Spinner";
import Grid from "@/components/Grid/Grid";


const Home: NextPage = () => {
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

