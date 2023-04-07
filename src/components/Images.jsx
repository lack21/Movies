import beyondEarth from "../assets/thumbnails/beyond-earth.jpg";
import bottomGear from "../assets/thumbnails/bottom-gear.jpg";
import undiscoveredCities from "../assets/thumbnails/undiscovered-cities.jpg";
import number from "../assets/thumbnails/1998.jpg";
import moon from "../assets/thumbnails/moon.jpg";
import greatLands from "../assets/thumbnails/the-great-lands.jpg";
import theDiary from "../assets/thumbnails/the-diary.jpg";
import earthUntouched from "../assets/thumbnails/earths-untouched.jpg";
import noLandBeyond from "../assets/thumbnails/no-land-beyond.jpg";
import duringTheHunt from "../assets/thumbnails/during-the-hunt.jpg";
import autosport from "../assets/thumbnails/autosport.jpg";
import sameAnswer from "../assets/thumbnails/same-answer-2.jpg";
import belowEcho from "../assets/thumbnails/below-echo.jpg";
import rockies from "../assets/thumbnails/the-rockies.jpg";
import relentless from "../assets/thumbnails/relentless.jpg";
import community from "../assets/thumbnails/community-of-ours.jpg";
import vanLife from "../assets/thumbnails/van-life.jpg";
import heiress from "../assets/thumbnails/the-heiress.jpg";
import track from "../assets/thumbnails/off-the-track.jpg";
import hill from "../assets/thumbnails/whispering-hill.jpg";
import medic from "../assets/thumbnails/medic.jpg";
import loneHeart from "../assets/thumbnails/lone-heart.jpg";
import productionLine from "../assets/thumbnails/production-line.jpg";
import dogs from "../assets/thumbnails/dogs.jpg";
import asia from "../assets/thumbnails/asia.jpg";
import tour from "../assets/thumbnails/the-tasty-tour.jpg";
import darker from "../assets/thumbnails/darker.jpg";
import cases from "../assets/thumbnails/unresolved-cases.jpg";
import saturn from "../assets/thumbnails/mission-saturn.jpg";
import data from "../data.json";

const images = [
  beyondEarth,
  bottomGear,
  undiscoveredCities,
  number,
  moon,
  greatLands,
  theDiary,
  earthUntouched,
  noLandBeyond,
  duringTheHunt,
  autosport,
  sameAnswer,
  belowEcho,
  rockies,
  relentless,
  community,
  vanLife,
  heiress,
  track,
  hill,
  medic,
  loneHeart,
  productionLine,
  dogs,
  asia,
  tour,
  darker,
  cases,
  saturn,
];

export const newData = [];
data.forEach((item, index) => {
  newData.unshift([
    item.title,
    images[index],
    item.year,
    item.category,
    item.isBookmarked,
    item.isTrending,
    item.rating,
  ]);
});
