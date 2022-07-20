import axios from "axios";
import React, { useEffect, useState} from "react";
import MovieCard from "../components/MovieCard";
//import NotFound from "../components/NotFound";
// import AuthContext from "../context/AuthContext";
 import Loading from "../components/Loading";
 
const UNFILTERED = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}` //bu apiden aldigimiz keyi buraya yapistirdik. bundan sonraki islem ise film aratmayi search kismindan halledecegiz.
//keyin görunmemesi icin: key i siliyoruz. ve yerine ${process.env.REACT_APP_API_KEY} yaziyoruz.  

const FILTERED = `
https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=` // Documentation icinden search sonra search movies, keyimiz ayni, en sona da &query= ekledik. key yerine ${process.env.REACT_APP_API_KEY} sonunda bulunan &query= silmiyoruz. o kaliyor. 

export default function Main() {

    let content;
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const getMovies = (API) => {
        setLoading(true)
        axios.get(API)
        .then ((res) => {
          setMovies(res.data.results)
          
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        
                if(res.data.results.length ==0){
            setNotFound(true);
        }
        
    })
        .catch((err) => console.log(err))// const getMovies bu sekilde yazmamizin sebebi dinamik bir sekilde yukarida verilen Api yi kullanabilmak icin. 
        
    }

        const handleSubmit = (e) => { //search kismina star yazdik ve kelimeyi console da yakalayabiliyoruz. 
            e.preventDefault();
            getMovies(FILTERED + searchTerm) // getMovies e istek atacak ve gelen sonucu result edecek. 
            setSearchTerm('')
        }

        if (Loading) {
            content = <Loading />
        } else if (notFound) {
            content = <notFound/>
        }
        else { 
            content = <div className="movie-container">
                {
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            overview={movie.overview}
                            vote_average={movie.vote_average}
                        />
                    ))
                }
            </div>
        }

        useEffect (() =>{
            getMovies(UNFILTERED)
            
        }, []);


    return(

       <React.Fragment>

        <form className= "search" onSubmit ={handleSubmit}>
                <input
                    type='search'
                    placeholder='Search a movie....'
                    className='search-input'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <input
                    type='submit'
                    value='Search'
                    className='btn btn-primary'
                />       
        </form> 
      
      {content}
        </React.Fragment>
    )
}