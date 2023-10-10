import "../dist/css/custom.css";
import CocktailCard from "../components/CocktailCard";
import PaginationList from "../components/PaginationList";
import { useFetch } from "../utils/useFetch";
import { useRef, useState, useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
// import { useDrinkContext } from "../utils/context";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const count = useRef(1);
  useEffect(() => {
    count.current = count.current + 1;
  });

  const { data, loading, error } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );

  const cocktailsPerPage = 6;
  const indexOfLastDrink = currentPage * cocktailsPerPage;
  const indexOfFirstDrink = indexOfLastDrink - cocktailsPerPage;

  const currentDrinks = data.slice(indexOfFirstDrink, indexOfLastDrink);
  const numOfPages = Math.ceil(data.length / cocktailsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };
  const nextPage = () => {
    if (currentPage <= numOfPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      return setCurrentPage(currentPage - 1);
    } else {
      return setCurrentPage(numOfPages);
    }
  };
  const firstPage = () => {
    return setCurrentPage(1);
  };
  const lastPage = () => {
    return setCurrentPage(numOfPages);
  };
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <section className='home-section'>
        <Link to='/Carousel'>
          <div className='toCarousel'>
            <i class='fa-solid fa-martini-glass-empty'></i>
          </div>
        </Link>

        <header>
          <h1
            style={{ color: "green" }}
            className=' text-center text-capitalize fw-bold fs-2 lh-lg my-5 font-monospace text-decoration-underline'
          >
            Cocktail's list
          </h1>
        </header>
        <CocktailCard currentDrinks={currentDrinks} />
        <article className='my-5'>
          <PaginationList
            style={{ "background-color": "green" }}
            value={{
              prevPage,
              nextPage,
              firstPage,
              lastPage,
              changePage,
              numOfPages,
            }}
          />
        </article>
      </section>
    );
  }
}
export default Home;
