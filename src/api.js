// requiring the api key
import dotenv from 'dotenv';
dotenv.config();
const myApi = `d4b2b841d55d453082f2d5acaf73aa2b`;
//Base URL
const base_url = 'https://api.rawg.io/api/';
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

//Popular Games
const popular_games = `games?key=${myApi}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${myApi}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${myApi}&dates=${lastYear},${currentDate}&ordering=-released&page_size=14`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${myApi}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${myApi}`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${myApi}&search=${game_name}&page_size=9`;
