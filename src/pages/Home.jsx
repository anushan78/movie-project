import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Ben Hur", release_date: "2020" },
    { id: 2, title: "Casablanca", release_date: "2021" },
    { id: 3, title: "Charle and the Chocolate", release_date: "2023" },
    { id: 4, title: "Othelo", release_date: "2018" },
  ];

  return (
    <div className="home">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
