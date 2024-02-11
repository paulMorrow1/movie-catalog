import * as React from "react";
import NetflixData from "./data.json";

const NetflixContext = React.createContext(null);

const operatorMap = {
  "=": (field, value) => field === value,
  "!=": (field, value) => field !== value,
  ">": (field, value) => field > value,
  "<": (field, value) => field < value,
  ">=": (field, value) => field >= value,
  "<=": (field, value) => field <= value,
};

export function NetflixContextProvider({ children }) {
  const [netflixData, setNetflixData] = React.useState([]);
  const [perPage, setPerPage] = React.useState(25);
  const [page, setPage] = React.useState(1);
  // filterObj = { key: "", operator: "= > <", value: "", isArray?: true/false}
  const [filterObj, setFilterObj] = React.useState(null);
  const [favoriteList, setFavoriteList] = React.useState(() => {
    const localStorageFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    return localStorageFavorites;
  });
  const addFavorite = ({ id }) => {
    setFavoriteList((prevList) => [...prevList, id]);
  };
  const removeFavorite = ({ id }) => {
    setFavoriteList((prevList) => {
      const newFavoritesList = prevList.filter((prevId) => prevId !== id);
      return newFavoritesList;
    });
  };

  const [watchedList, setWatchedList] = React.useState(() => {
    const localStorageWatched =
      JSON.parse(localStorage.getItem("recentlyWatched")) || [];
    return localStorageWatched;
  });

  const addWatched = ({ id }) => {
    setWatchedList((prevList) => {
      const newList = [...prevList, id];
      localStorage.setItem("recentlyWatched", JSON.stringify(newList));
      return newList;
    });
  };

  const prev = () => setPage((prevPage) => prevPage - 1);
  const next = () => setPage((prevPage) => prevPage + 1);
  const goToPage = (_, pageNum) => setPage(pageNum);
  const data = netflixData
    .map((movie) => ({
      ...movie,
      isFavorited: favoriteList.includes(movie.id),
      isWatched: watchedList.includes(movie.id),
    }))
    .filter((movie) => {
      if (!filterObj) return movie;
      if (filterObj.isArray) {
        if (filterObj.operator === "=") {
          return movie[filterObj.key].includes(filterObj.value);
        } else {
          return !movie[filterObj.key].includes(filterObj.value);
        }
      }
      return operatorMap[filterObj.operator](
        movie[filterObj.key],
        filterObj.value
      );
    });
  const paginatedData = data.slice((page - 1) * perPage, page * perPage);
  const numOfPages = Math.ceil(data.length / perPage);

  const filterFavorites = () => {
    setPage(1);
    setFilterObj({ key: "isFavorited", operator: "=", value: true });
  };

  const filterPreviouslyWatched = () => {
    setPage(1);
    setFilterObj({ key: "isWatched", operator: "=", value: true });
  };

  const filterByYear = ({ operator, year }) => {
    setPage(1);
    setFilterObj({ key: "year", operator, value: Number(year) });
  };

  const clearFilters = () => setFilterObj(null);

  const filterByGenres = ({ operator, genre }) => {
    setPage(1);
    setFilterObj({ key: "genres", operator, value: genre, isArray: true });
  };

  const filterByCast = ({ operator, cast }) => {
    setPage(1);
    setFilterObj({ key: "cast", operator, value: cast, isArray: true });
  };

  const filterBySearch = ({ title }) => {
    setPage(1);
    setFilterObj({ key: "title", operator: "=", value: title });
  };

  React.useEffect(() => {
    const fetchData = async () => {
      // const response = await (
      //   await fetch("http://www.omdbapi.com?apikey=53ceb1e9&type=movie", {
      //     method: "GET",
      //     headers: {
      //       Accept: "application/json",
      //     },
      //   })
      // ).json();
      setNetflixData(NetflixData);
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteList));
  }, [favoriteList]);

  return (
    <NetflixContext.Provider
      value={{
        data: paginatedData,
        prev,
        next,
        page,
        goToPage,
        numOfPages,
        perPage,
        setPerPage,
        addFavorite,
        removeFavorite,
        favoriteList,
        addWatched,
        watchedList,
        filterFavorites,
        filterPreviouslyWatched,
        filterByYear,
        clearFilters,
        filterByGenres,
        filterByCast,
        filterBySearch,
      }}
    >
      {children}
    </NetflixContext.Provider>
  );
}

export const useGetNetflixData = () => {
  const context = React.useContext(NetflixContext);

  if (!context) {
    throw new Error(
      "You need to use this context inside of 'NetflixContextProvider'"
    );
  }

  return context;
};
