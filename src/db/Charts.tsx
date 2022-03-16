
// import { Container } from './styles';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};


export const animationOptions = {
  colors: ["#8e0152", "#276419"],
  pointSize: 10,
  animation: {
    duration: 1000,
    easing: "out",
    startup: true,
  },
  vAxis: {
    viewWindow: {
      max: -10,
      min: 100,
    },
  },
  hAxis: {
    viewWindow: {
      max: 100,
      min: -10,
    },
  },
  legend: { position: "none" },
  enableInteractivity: false,
};

