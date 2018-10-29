export const randomize = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randomizeChoices = target => {
  const cs = [];
  cs.push({ clicked: false, value: randomize(1, Math.floor(target / 2)) });
  cs.push({ clicked: false, value: randomize(1, Math.floor(target / 2)) });
  cs.push({ clicked: false, value: randomize(1, Math.floor(target / 2)) });
  cs.push({ clicked: false, value: randomize(1, Math.floor(target / 2)) });
  cs.push({ clicked: false, value: randomize(1, Math.floor(target / 2)) });
  cs.push({ clicked: false, value: randomize(1, Math.floor(target / 2)) });
  cs.push({ clicked: false, value: randomize(1, Math.floor(target / 2)) });
  cs.push({ clicked: false, value: randomize(1, Math.floor(target / 2)) });
  return cs;
};
