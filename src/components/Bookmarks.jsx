import data from "../data.json";
import searchIcon from "../assets/icon-search.svg";
import categoryMovieIcon from "../assets/icon-category-movie.svg";
import categoryTvIcon from "../assets/icon-category-tv.svg";
import { useState } from "react";
import { newData } from "./Images";

function Bookmarks() {
  const [bookmarkedData, setBookmarkedData] = useState(
    newData.filter((item) => item[4] === true)
  );
  const [inputValue, setInputValue] = useState("");
  const [searchName, setSearchName] = useState("");

  function ToggleCheckmark(e) {
    e.target.classList.toggle("active");
    newData.forEach((item) => {
      if (item[0] === e.target.name) {
        item[4] = false;
      }
    });
  }

  function SearchMovie() {
    document
      .querySelectorAll(".heading")
      .forEach((item) => (item.style.display = "none"));
    document.querySelector(".heading.second").style.display = "block";
    setBookmarkedData(
      newData.filter(
        (item) =>
          item[0]
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase()) && item[4]
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
          placeholder="Search for bookmarked shows"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </section>

      <h2 className="heading second">
        Found {bookmarkedData.length} results for '{searchName}'
      </h2>

      <h2 className="heading">Bookmarked Movies</h2>
      <section className="container">
        {bookmarkedData.map((item, index) => (
          <div key={index} className="item">
            <button
              className="check-btn marked"
              onClick={ToggleCheckmark}
              name={item[0]}
            ></button>
            <img src={item[1]} alt={item[0]} className="image" />

            <div className="details">
              <h4 className="detail">{item[2]}</h4>
              <h4 className="detail">•</h4>
              <img
                src={item[3] === "Movie" ? categoryMovieIcon : categoryTvIcon}
                className="detail"
                alt="category"
              />
              <h4 className="detail">{item[3]}</h4>
              <h4 className="detail">•</h4>
              <h4 className="detail">{item[6]}</h4>
            </div>
            <h3 className="name">{item[0]}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Bookmarks;
