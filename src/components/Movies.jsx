import data from "../data.json";
import searchIcon from "../assets/icon-search.svg";
import categoryMovieIcon from "../assets/icon-category-movie.svg";
import { useState } from "react";

function Movies() {
  const [moviesData, setMoviesData] = useState(
    data.filter((item) => item.category === "Movie")
  );
  const [inputValue, setInputValue] = useState("");
  const [searchName, setSearchName] = useState("");

  function ToggleCheckmark(e) {
    e.target.classList.toggle("active");
    data.forEach((item) => {
      if (item.title === e.target.name) {
        item.isBookmarked = true;
      }
    });
  }

  function SearchMovie() {
    document
      .querySelectorAll(".heading")
      .forEach((item) => (item.style.display = "none"));
    document.querySelector(".heading.second").style.display = "block";
    setMoviesData(
      data.filter(
        (item) =>
          item.title
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase()) &&
          item.category === "Movie"
      )
    );
    setSearchName(inputValue);
  }

  return (
    <div>
      <section className="search-section">
        <img src={searchIcon} alt="search-icon" onClick={SearchMovie} />
        <input
          type="text"
          name="text"
          placeholder="Search for movies"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </section>

      <h2 className="heading second">
        Found {moviesData.length} results for '{searchName}'
      </h2>

      <h2 className="heading">Movies</h2>
      <section className="container">
        {moviesData.map((item, index) => (
          <div key={index} className="item">
            <button
              className="check-btn"
              onClick={ToggleCheckmark}
              name={item.title}
            ></button>
            <img src={item.image} alt={item.title} className="image" />

            <div className="details">
              <h4 className="detail">{item.year}</h4>
              <h4 className="detail">•</h4>
              <img src={categoryMovieIcon} className="detail" alt="category" />
              <h4 className="detail">{item.category}</h4>
              <h4 className="detail">•</h4>
              <h4 className="detail">{item.rating}</h4>
            </div>
            <h3 className="name">{item.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Movies;
