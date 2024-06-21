import React from 'react'
import Result from "../../../components/Result";


export default async function genrePage({params}) {
    const genreTerm = params.genreTerm;
    const res = await fetch(
      `https:api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&query=${genreTerm}&language=en-US&page=1`
    );
    const data = await res.json();
    const results = data.results;
    console.log(results)
    return <div>
      {
          results && results.length === (
              <h1 className="text-center pt-6">No result found...</h1>
          )
      }
  
      {
          results && <Result  results={results} />
      }
    </div>;
}
