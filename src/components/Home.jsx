import data from "../data.json";
import searchIcon from "../assets/icon-search.svg";
import categoryMovieIcon from "../assets/icon-category-movie.svg";
import categoryTvIcon from "../assets/icon-category-tv.svg";
import { useState } from "react";
import "../assets/thumbnails/moon.jpg";

function Home() {
  const [trendingData, setTrendingData] = useState(
    data.filter((item) => item.isTrending === true)
  );
  const [notTrendingData, setNotTrendingData] = useState(
    data.filter((item) => item.isTrending === false)
  );
  const [inputValue, setInputValue] = useState("");
  const [searchName, setSearchName] = useState("");
  let movement = 0;

  function ToggleCheckmark(e) {
    e.target.classList.toggle("active");
    data.forEach((item) => {
      if (item.title === e.target.name) {
        item.isBookmarked = !item.isBookmarked;
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
      data.filter((item) =>
        item.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
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

      <h2 className="heading">Trending Changed</h2>
      <section className="trending" onClick={MoveTrending}>
        {trendingData.map((item, index) => (
          <div key={index} className="item">
            <button
              className="check-btn"
              onClick={ToggleCheckmark}
              name={item.title}
            ></button>

            <div className="details">
              <h4 className="detail">{item.year}</h4>
              <h4 className="detail">•</h4>
              <img
                src={
                  item.category === "Movie" ? categoryMovieIcon : categoryTvIcon
                }
                className="detail"
                alt="category"
              />
              <h4 className="detail">{item.category}</h4>
              <h4 className="detail">•</h4>
              <h4 className="detail">{item.rating}</h4>
            </div>
            <h3 className="name">{item.title}</h3>
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
              name={item.title}
            ></button>
            <img src={item.image} alt={item.title} className="image" />

            <div className="details">
              <h4 className="detail">{item.year}</h4>
              <h4 className="detail">•</h4>
              <img
                src={
                  item.category === "Movie" ? categoryMovieIcon : categoryTvIcon
                }
                className="detail"
                alt="category"
              />
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

export default Home;
