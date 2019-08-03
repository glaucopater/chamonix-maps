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

export const sortData = (data, queryString) => {
  const sortBy = getQueryStringVariable(queryString, 'sort');
  const sortDirection = getQueryStringVariable(queryString, 'direction');
  const sortedData =
    sortBy === 'difficulty' ? sortByDifficulty(data) : sortByName(data);

  return sortDirection === 'DESC' ? sortedData.reverse() : sortedData;
};

// sort by name
const sortByName = items =>
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

// sort by value
const sortByDifficulty = items => {
  return items.sort(function(a, b) {
    return a.skiDifficulty - b.skiDifficulty;
  });
};

const getQueryStringVariable = (queryString, variable) => {
  const query = queryString;
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
};
