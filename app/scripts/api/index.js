const URL = "http://localhost:3035";

export const fetchData = (key) => {
  return fetch(`${URL}/data?word=${key}`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};
