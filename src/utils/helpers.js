export const transformData = data => {
  return data.map(mapItem => ({
    id: mapItem.id,
    name: mapItem.name,
    shortDescription: mapItem.short_description,
    skiDifficulty: mapItem.ski_difficulty,
  }));
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
