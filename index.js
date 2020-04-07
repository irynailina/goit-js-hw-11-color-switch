const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
  "#1b191f",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "#CBD62D",
  "#d62dcb"
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]')
};

const colorChangeTimer = {
  start() {
    this.isActive = true;
    this.colorId = null;
    this.colorId = setInterval(() => {
      const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.style.backgroundColor = colors[randomIndex];
    }, 1000);
  },

  stop() {
    clearInterval(this.colorId);
    this.colorId = null;
    refs.body.style.backgroundColor = null;
  }
};

refs.startBtn.addEventListener("click", colorChangeTimer.start.bind(colorChangeTimer));
refs.stopBtn.addEventListener("click", colorChangeTimer.stop.bind(colorChangeTimer));
