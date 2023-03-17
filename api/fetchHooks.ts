import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "./fetchFunctions";
//types
import { Movies } from "./types";

export const useFetchMovies = (search: string) => {
    return useInfiniteQuery(['movies', search], ({ pageParam = 1 }) => fetchMovies(search, pageParam), {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
  
        return undefined;
      },
      refetchOnWindowFocus: false
    });
  };


//useInfiniteQuery: as we'll load more pages when we scroll, it could also be that
//we click a button and load more pages

//we created inline fetch function; fetchMovies() as we want to access to the pageParam
//that reactQuery provides us and we want to send that param to fetchMovies();
//that's why we do it like this
//{ pageParam = 1} here we structure our pageParam and set it to 1 as the initial value
//options object for the reactQuery: to set some different options for reactQuery
//for ex, we want to get the next page param: getNextPageParam()

//refetchOnWindowFocus: false --> we dont want to refetch data every time we lose
//focus from the window 