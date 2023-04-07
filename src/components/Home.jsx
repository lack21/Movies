import data from "../data.json";
import searchIcon from "../assets/icon-search.svg";
import categoryMovieIcon from "../assets/icon-category-movie.svg";
import categoryTvIcon from "../assets/icon-category-tv.svg";
import { useState } from "react";
import { newData } from "./Images";

function Home() {
  console.log(newData);
  const [trendingData, setTrendingData] = useState(
    newData.filter((item) => item[5] === true)
  );
  const [notTrendingData, setNotTrendingData] = useState(
    newData.filter((item) => item[5] === false)
  );
  const [inputValue, setInputValue] = useState("");
  const [searchName, setSearchName] = useState("");
  let movement = 0;

  function ToggleCheckmark(e) {
    e.target.classList.toggle("active");
    newData.forEach((item) => {
      if (item[0] === e.target.name) {
        item[4] = !item.isBookmarked;
      }
    });
  }

  function SearchMovie() {
    document
      .querySelectorAll(".heading")
      .forEach((item) => (item.style.display = "none"));
    document.querySelector(".heading.second").style.display = "block";
    setTrendingData([]);
    setNotTrendingData(
      newData.filter((item) =>
        item[0].toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      )
    );
    setSearchName(inputValue);
  }

  function MoveTrending(e) {
    const trendingElement = document.querySelector(".trending");
    const width = document.querySelector(".ran").offsetWidth;

    if (e.clientX < window.innerWidth / 2) {
      movement += movement == 0 ? 0 : width / 2;
    } else {
      movement -= movement <= -width ? 0 : width / 2;
    }

    trendingElement.style.transform = `translateX(${movement}px)`;
    console.log(width);
  }

  return (
    <div>
      <div className="ran"></div>
      <section className="search-section">
        <img src={searchIcon} alt="search-icon" onClick={SearchMovie} />
        <input
          type="text"
          name="text"
          placeholder="Search for movies or TV series"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </section>

      <h2 className="heading second">
        Found {notTrendingData.length} results for '{searchName}'
      </h2>

      <h2 className="heading">Trending</h2>
      <section className="trending" onClick={MoveTrending}>
        {trendingData.map((item, index) => (
          <div key={index} className="item">
            <button
              className="check-btn"
              onClick={ToggleCheckmark}
              name={item[0]}
            ></button>

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

      <h2 className="heading">Recommended for you</h2>

      <section className="container">
        {notTrendingData.map((item, index) => (
          <div key={index} className="item">
            <button
              className="check-btn"
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

export default Home;
