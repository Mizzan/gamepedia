// Root Base URL
const base_url = 'https://api.rawg.io/api/';

// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth - 1}-${currentDay - 1}`;
const nextYear = `${currentYear + 1}-${currentMonth + 1}-${currentDay + 1}`;

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
