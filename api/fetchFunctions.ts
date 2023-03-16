export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {
  const response = await fetch(endpoint);

  if(!response.ok) throw new Error("Error!!!");
  
  const data = await response.json();

  return data;
}

//<returnType> as a generic so in the /api/movies.ts we can specify it as <Movies>
//type we created in types