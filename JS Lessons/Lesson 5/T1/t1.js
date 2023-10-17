'use strict';

async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    console.log(response);
    throw new Error(`Error in request: ${response.status}`);
  }
  const json = await response.json();
  return json;
}

(async function () {
  try {
    const url = 'https://reqres.in/api/users/1';
    const options = {
      method: 'GET',
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    alert(error.message);
  }
})();
