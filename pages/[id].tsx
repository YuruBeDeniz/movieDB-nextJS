import { movieUrl, creditsUrl, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "@/config";
//basic fetch
import { basicFetch } from "@/api/fetchFunctions";
//components
import Header from "@/components/Header/Header";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';
//types
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Movie, Credits, Crew, Cast } from "@/api/types";

const Movie: NextPage = () => (
  <main>
    <Header />
    <MovieInfo />
    <Grid>
      <Card />
    </Grid>
  </main>
)












//dynamic routes in nextJS created by creating a new page inside pages folder
//with square brackets; inside of it we give the param a name; in our case
//we call it: id. it will make sure that we can grab this movie id from the param id