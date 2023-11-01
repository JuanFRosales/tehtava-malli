import { pwaInfo } from 'virtual:pwa-info';
import { fetchData } from './functions';
import { UpdateResult } from './interfaces/UpdateResult';
import { UploadResult } from './interfaces/UploadResult';
import { LoginUser, UpdateUser, User } from './interfaces/User';
import { apiUrl, uploadUrl } from './variables';

// PWA code
console.log(pwaInfo);

// Select forms from the DOM
const loginForm = document.querySelector('#login-form');
const profileForm = document.querySelector('#profile-form');
const avatarForm = document.querySelector('#avatar-form');

// Select inputs from the DOM
const usernameInput = document.querySelector('#username') as HTMLInputElement | null;
const passwordInput = document.querySelector('#password') as HTMLInputElement | null;

const profileUsernameInput = document.querySelector(
  '#profile-username'
) as HTMLInputElement | null;
const profileEmailInput = document.querySelector(
  '#profile-email'
) as HTMLInputElement | null;

const avatarInput = document.querySelector('#avatar') as HTMLInputElement;

// Select profile elements from the DOM
const usernameTarget = document.querySelector('#username-target');
const emailTarget = document.querySelector('#email-target');
const avatarTarget = document.querySelector('#avatar-target');

// Function to log in
const login = async (user: { username: string; password: string }): Promise<LoginUser> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  return await fetchData<LoginUser>(apiUrl + '/auth/login', options);
};

// Function to upload an avatar
const uploadAvatar = async (image: File, token: string): Promise<UploadResult> => {
  const formData = new FormData();
  formData.append('avatar', image);
  const options: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    body: formData,
  };
  return await fetchData<UploadResult>(apiUrl + '/users/avatar', options);
};

// Function to update user data
const updateUserData = async (user: UpdateUser, token: string): Promise<UpdateResult> => {
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(user),
  };
  return await fetchData<UpdateResult>(apiUrl + '/users', options);
};

// Function to add user data (email, username, and avatar image) to the Profile DOM and Edit Profile Form
const addUserDataToDom = (user: User): void => {
  if (!usernameTarget || !emailTarget || !avatarTarget || !profileEmailInput || !profileUsernameInput) {
    return;
  }
  usernameTarget.innerHTML = user.username;
  emailTarget.innerHTML = user.email;
  (avatarTarget as HTMLImageElement).src = uploadUrl + user.avatar;
  profileEmailInput.value = user.email;
  profileUsernameInput.value = user.username;
};

// Function to get user data from API using token
const getUserData = async (token: string): Promise<User> => {
  const options: RequestInit = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  return await fetchData<User>(apiUrl + '/users/token', options);
};

// Function to check local storage for a token and, if it exists, fetch user data and update the DOM
const checkToken = async (): Promise<void> => {
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  const userData = await getUserData(token);
  await addUserDataToDom(userData);
};

// Call checkToken on page load to check if a token exists and update the DOM
checkToken();

// Event listener for the login form
loginForm?.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if (!usernameInput || !passwordInput) {
    return;
  }
  const user = {
    username: usernameInput.value,
    password: passwordInput.value,
  };
  const loginData = await login(user);
  console.log(loginData);
  localStorage.setItem('token', loginData.token);
  addUserDataToDom(loginData.data);
});

// Event listener for the profile form
profileForm?.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if (!profileUsernameInput || !profileEmailInput) {
    return;
  }
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  const user = {
    username: profileUsernameInput.value,
    email: profileEmailInput.value,
  };
  const updateResult = await updateUserData(user, token);
  console.log(updateResult);
  // Update the DOM with the updated user data
  await addUserDataToDom(updateResult.data);
});

// Event listener for the avatar form
avatarForm?.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if (!avatarInput?.files) {
    return;
  }
  const image = avatarInput.files[0];
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  const avatarData = await uploadAvatar(image, token);
  console.log(avatarData);
});
