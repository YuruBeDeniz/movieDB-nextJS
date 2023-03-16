//API urls
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "@/config";
//basic fetch function
import { basicFetch } from "@/api/fetchFunctions";
//types
import type { NextApiRequest, NextApiResponse } from "next";
import type { Movies } from "@/api/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { page, search } = req.query; //grab search params

  const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}

//this api route will have a search param the user will type in the movie that he wants
//to search for. so we'll grap that search param from the req: so structure out the page
//and the search 

// const endpoint --> here we have 2 different endpoints that we'll send into our
//basic fetch function