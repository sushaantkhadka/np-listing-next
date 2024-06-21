import React from "react";
import Result from "../components/Result";

const API_KEY = process.env.API_KEY;

export default async function Similar({ id }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  const results = data.results;

  return (
    <>
      <div className="flex flex-col justify-center mt-10">
        <h1 className="text-center font-bold text-2xl">Similar Movies</h1>
        <Result results={results} />
      </div>
    </>
  );
}
