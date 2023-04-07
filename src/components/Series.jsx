import data from "../data.json";
import searchIcon from "../assets/icon-search.svg";
import categoryTvIcon from "../assets/icon-category-tv.svg";
import { useState } from "react";

function Series() {
  const [tvSeriesData, setTvSeriesData] = useState(
    data.filter((item) => item.category === "TV Series")
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
    setTvSeriesData(
      data.filter(
        (item) =>
          item.title
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase()) &&
          item.category === "TV Series"
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
          placeholder="Search for TV series"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </section>

      <h2 className="heading second">
        Found {tvSeriesData.length} results for '{searchName}'
      </h2>

      <h2 className="heading">TV Series</h2>
      <section className="container">
        {tvSeriesData.map((item, index) => (
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
              <img src={categoryTvIcon} className="detail" alt="category" />
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

export default Series;
