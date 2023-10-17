'use strict';

async function createUser() {
  const url = 'https://reqres.in/api/users';

  const userPayload = {
    name: 'John Doe',
    job: 'Software Developer',
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userPayload),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const responseData = await response.json();

      console.log('Response Data:', responseData);
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

createUser();
