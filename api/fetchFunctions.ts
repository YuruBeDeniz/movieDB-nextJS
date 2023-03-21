import { Movies } from './types';

export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Error!');

  const data = await response.json();

  return data;
};

// Fetch functions
export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};



//basicFetch<Movies>(`/api/movies?/search=${search}&page=${page}`) :
//this is how we access the api route that we created in next.js (/api/movies.ts):
//const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}`


//<returnType> as a generic so in the /api/movies.ts we can specify it as <Movies>
//type we created in types

//the reason we dont fetch data on server side is because reactQuery isnt actually
//that great in nextJs for fetching server side data as reactQuery has a super cache
//that we will utilize; 
//if we use server side, every time we leave the page
//and go back, it will grab the data from the server meaning that we need to keep track 
//on the server that which page we are on, what data we already fetch; otherwise
//we'll get wiped out as it will fetch the initial data that we specify in the 
//get server side props in nextjs; it will essentially wipe out the cache from 
//reactQuery
