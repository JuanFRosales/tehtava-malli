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
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const userDataPromise = fetchData(url, options); 
    userDataPromise
      .then(userData => {
        console.log(userData);
      })
      .catch(error => {
        console.error(error.message);
      });
  } catch (error) {
    console.error(error.message);
  }
})();
