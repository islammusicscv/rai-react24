import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../components/Header.tsx";
import Welcome from "../components/Welcome.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";

const Search = () => {
    const apiKey = "4714c72a";
    const search = "Avengers";
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;

    const [movies,setMovies] = useState([]);
    const loadMovies = async () => {
        const response = await axios.get(apiUrl);
        setMovies(response.data.Search);
        //console.log(response.data);
    }

    useEffect(()=>{
        loadMovies();
    },[]);
  return (
      <>
          <Header />
          <main>
              <Welcome />
              {
                  movies.map((movie,i) => {
                      //console.log(movie);
                      return <Card key={i} movie={movie} />;
                  })
              }
          </main>
          <Footer />
      </>
  )
}
export default Search;