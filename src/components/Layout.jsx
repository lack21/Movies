import { Link, Outlet } from "react-router-dom";
import logoImage from "../assets/logo.svg";
import homeIcon from "../assets/icon-nav-home.svg";
import moviesIcon from "../assets/icon-nav-movies.svg";
import seriesIcon from "../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/icon-nav-bookmark.svg";
import userImage from "../assets/user.png";

function Layout() {
  function ToggleLinks(e) {
    document.querySelectorAll(".link").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  function HomeLink() {
    document.querySelectorAll(".link").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelectorAll(".link")[0].classList.add("active");
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/Movies">
          <img src={logoImage} alt="logo" className="logo" onClick={HomeLink} />
        </Link>
        <div className="links">
          <Link to="/Movies" onClick={ToggleLinks}>
            <img src={homeIcon} alt="home-icon" className="link active" />
          </Link>
          <Link to="movies" onClick={ToggleLinks}>
            <img src={moviesIcon} alt="movies-icon" className="link" />
          </Link>
          <Link to="series" onClick={ToggleLinks}>
            <img src={seriesIcon} alt="series-icon" className="link" />
          </Link>
          <Link to="bookmarks" onClick={ToggleLinks}>
            <img src={bookmarkIcon} alt="bookmark-icon" className="link" />
          </Link>
        </div>
        <img src={userImage} alt="user-image" className="user" />
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
