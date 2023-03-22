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

type MovieProps = {
  movie: Movie
  directors: Crew[]
  cast: Cast[]
}

const Movie: NextPage<MovieProps> = ({ movie, directors, cast }) => (
  <main>
    <Header />
    <Breadcrumb title={movie.original_title}/>
    <MovieInfo 
      rating={movie.vote_average}
      year={movie.release_date.split("-")[0]}
      backgroundImgUrl={movie.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path : "/no-image.jpg"}
      title={movie.original_title}
      summary={movie.overview}
      directors={directors}
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
      thumbUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : "/no-image.jpg"} />
    <Grid className='p-4 max-w-7xl m-auto' title='Actors'>
      {cast.map(actor => (
        <Card
          key={actor.credit_id}
          imgURl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : '/no_image.jpg'}
          title={actor.name}
          subtitle={actor.character}
        />
      ))}
    </Grid>
  </main>
);

export default Movie;

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id as string;

  const movieEndpoint: string = movieUrl(id);
  const creditsEndpoint: string = creditsUrl(id);

  const movie = await basicFetch<Movie>(movieEndpoint);
  const credits = await basicFetch<Credits>(creditsEndpoint);

  const directors = credits.crew.filter(member => member.job === "Director");

  return {
    props: {
      movie,
      directors,
      cast: credits.cast
    }, 
    revalidate: 60 * 60 * 24 //Re-build page every 24 hours (as we built this page static)
  }
}

//create a static page when the page first visit:
//here you can specify which pages you want to be created as static pages:
//paths: [] is an empty array as we want all of the paths to have this behavior
//fallback: "blocking" this will make sure that everytime a page is visited, it'll
//create a static page for that one and next time a user goes to the same page, it'll
//use that static page instead
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}


//we can grab some data from context: in our case, we'll grab our id we created under
//pages folder w/ square brackets; since we name it "id", we can grab it from params as "id"

//from the credits we only need directors, so we'll filter them out



//dynamic routes in nextJS created by creating a new page inside pages folder
//with square brackets; inside of it we give the param a name; in our case
//we call it: id. it will make sure that we can grab this movie id from the param id