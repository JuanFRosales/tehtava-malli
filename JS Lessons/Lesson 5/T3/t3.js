'use strict'
async function makeGETRequest() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('GET request error:', error);
  }
}

async function makePOSTRequest() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('POST request error:', error);
  }
}

async function makePUTRequest() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'PUT',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('PUT request error:', error);
  }
}


async function makeDELETERequest() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('DELETE request error:', error);
  }
}

makeGETRequest();
makePOSTRequest();
makePUTRequest();
makeDELETERequest();
