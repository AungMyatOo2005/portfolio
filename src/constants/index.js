import {
  html,
  css,
  js,
  react,
  tailwind,
  bootstrap,
  git,
  npm,
  gitDark,
  personalWebsite,
  movieApp,
  expenseTracker,
  weatherApp,
  recipeApp,
} from "../assets";

const techStacks = [
  {
    id: 1,
    icon: html,
    text: "HTML",
    lvl: "advanced",
  },
  {
    id: 2,
    icon: css,
    text: "Css",
    lvl: "advanced",
  },
  {
    id: 3,
    icon: js,
    text: "Javascript",
    lvl: "advanced",
  },
  {
    id: 4,
    icon: react,
    text: "React",
    lvl: "Intermediate",
  },
  {
    id: 5,
    icon: tailwind,
    text: "Tailwind",
    lvl: "Intermediate",
  },
  {
    id: 6,
    icon: bootstrap,
    text: "Bootstrap",
    lvl: "Intermediate",
  },
];
const tools = [
  {
    id: 1,
    icon: git,
    text: "git",
  },
  {
    id: 2,
    icon: gitDark,
    text: "GitHub",
  },
  {
    id: 3,
    icon: npm,
    text: "NPM",
  },
];

const projects = [
  {
    id: 1,
    posterPath: personalWebsite,
    siteName: "Personal Website",
    readMeText:
      "My personal website.I created this website to display my profile,skill and project.",
    createBy: "React Js,Tailwind",
    site_url: "https://aungmyatoo2005.github.io/portfolio/",
    repo_url: "https://github.com/AungMyatOo2005/portfolio",
  },
  {
    id: 2,
    posterPath: movieApp,
    siteName: "Metflix (Movie App)",
    readMeText:
      "Movie recommend website.In Website user can search movie and can select movie list by genres.User can add movie to favorite list.User can see each movie of trailer, original website and full cast.",
    createBy: "React Js,Tailwind,TMDb API",
    site_url: "https://aungmyatoo2005.github.io/movie-app/",
    repo_url: "https://github.com/AungMyatOo2005/movie-app",
  },
  {
    id: 3,
    posterPath: expenseTracker,
    siteName: "Expense Tracker",
    readMeText:
      "Expense Tracker website.In site user can note transactions list and can see total positive value, negative value and total value.After not user can add to history with list name.I code this path by local storage.",
    createBy: "React Js,Tailwind",
    site_url: "https://aungmyatoo2005.github.io/expense-tracker/",
    repo_url: "https://github.com/AungMyatOo2005/expense-tracker",
  },
  {
    id: 4,
    posterPath: weatherApp,
    siteName: "Weather App",
    readMeText:
      "The weather application.User can know weather condition by search city name.",
    createBy: "HTML,CSS,Js,OWM API",
    site_url: "https://aungmyatoo2005.github.io/weather-app/",
    repo_url: "https://github.com/AungMyatOo2005/weather-app",
  },
  {
    id: 5,
    posterPath: recipeApp,
    siteName: "Recipes App",
    readMeText:
      "The recipe app.User can search meal and can add to favorite list.User can see how to make what user choice meal and youtube video.",
    createBy: "HTML,CSS,Js,TheMealDB API",
    site_url: "https://aungmyatoo2005.github.io/recipe-app/",
    repo_url: "https://github.com/AungMyatOo2005/recipe-app.git",
  },
];

export { techStacks, tools, projects };
