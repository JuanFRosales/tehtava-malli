"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
var variables_1 = require("./variables");
var components_1 = require("./components");
//import { initializeMap, addMarkerToMap } from './leafletMap';
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('./SW/service-worker.js')
            .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
            .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
    });
}
// select forms from the DOM
var loginForm = document.querySelector('#login-form');
var profileForm = document.querySelector('#profile-form');
var avatarForm = document.querySelector('#avatar-form');
var registrationForm = document.querySelector('#create-form');
// select inputs from the DOM
var usernameInput = document.querySelector('#username');
var passwordInput = document.querySelector('#password');
var profileUsernameInput = document.querySelector('#profile-username');
var profileEmailInput = document.querySelector('#profile-email');
var avatarInput = document.querySelector('#avatar');
// select profile elements from the DOM
var usernameTarget = document.querySelector('#username-target');
var emailTarget = document.querySelector('#email-target');
var avatarTarget = document.querySelector('#avatar-target');
// select registration elements
var createUsername = document.querySelector('#create-username');
var createPassword = document.querySelector('#create-password');
var createEmail = document.querySelector('#create-email');
// function to login
var login = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                };
                return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + '/auth/login', options)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// function to register
var create = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                };
                return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + '/users', options)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// function to upload avatar
var uploadAvatar = function (image, token) { return __awaiter(void 0, void 0, void 0, function () {
    var formData, options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                formData = new FormData();
                formData.append('avatar', image);
                options = {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                    body: formData,
                };
                return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + '/users/avatar', options)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// function to update user data
var updateUserData = function (user, token) { return __awaiter(void 0, void 0, void 0, function () {
    var options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    method: 'PUT',
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)
                };
                return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + '/users', options)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// function to add userdata profile DOM and edit profile form
var addUserDataToDom = function (user) {
    if (!usernameTarget ||
        !emailTarget ||
        !avatarTarget ||
        !profileEmailInput ||
        !profileUsernameInput) {
        return;
    }
    usernameTarget.innerHTML = user.username;
    emailTarget.innerHTML = user.email;
    avatarTarget.src = variables_1.uploadUrl + user.avatar;
    profileEmailInput.value = user.email;
    profileUsernameInput.value = user.username;
};
// function to get userdata from API using token
var getUserData = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                };
                return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + '/users/token', options)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// function to check local storage for token and if it exists fetch
// userdata with getUserData then update the DOM with addUserDataToDom
var checkToken = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                token = localStorage.getItem('token');
                if (!token) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, getUserData(token)];
            case 1:
                userData = _a.sent();
                addUserDataToDom(userData);
                return [2 /*return*/];
        }
    });
}); };
// call checkToken on page load to check if token exists and update the DOM
checkToken();
// login form event listener
loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener('submit', function (evt) { return __awaiter(void 0, void 0, void 0, function () {
    var user, loginData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                evt.preventDefault();
                if (!usernameInput || !passwordInput) {
                    return [2 /*return*/];
                }
                user = {
                    username: usernameInput.value,
                    password: passwordInput.value,
                };
                return [4 /*yield*/, login(user)];
            case 1:
                loginData = _a.sent();
                console.log(loginData);
                alert(loginData.message);
                localStorage.setItem('token', loginData.token);
                addUserDataToDom(loginData.data);
                return [2 /*return*/];
        }
    });
}); });
// profile form event listener
profileForm === null || profileForm === void 0 ? void 0 : profileForm.addEventListener('submit', function (evt) { return __awaiter(void 0, void 0, void 0, function () {
    var user, token, profileData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                evt.preventDefault();
                if (!profileUsernameInput || !profileEmailInput) {
                    return [2 /*return*/];
                }
                user = {
                    username: profileUsernameInput.value,
                    email: profileEmailInput.value,
                };
                token = localStorage.getItem('token');
                if (!token) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, updateUserData(user, token)];
            case 1:
                profileData = _a.sent();
                console.log(profileData);
                checkToken();
                alert(profileData.message);
                return [2 /*return*/];
        }
    });
}); });
// avatar form event listener
avatarForm === null || avatarForm === void 0 ? void 0 : avatarForm.addEventListener('submit', function (evt) { return __awaiter(void 0, void 0, void 0, function () {
    var image, token, avatarData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                evt.preventDefault();
                if (!(avatarInput === null || avatarInput === void 0 ? void 0 : avatarInput.files)) {
                    return [2 /*return*/];
                }
                image = avatarInput.files[0];
                token = localStorage.getItem('token');
                if (!token) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, uploadAvatar(image, token)];
            case 1:
                avatarData = _a.sent();
                console.log(avatarData);
                checkToken();
                alert(avatarData.message);
                return [2 /*return*/];
        }
    });
}); });
// registration form event listener
registrationForm === null || registrationForm === void 0 ? void 0 : registrationForm.addEventListener('submit', function (evt) { return __awaiter(void 0, void 0, void 0, function () {
    var newName, newPassword, newEmail, registrationData, registrationResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                evt.preventDefault();
                if (!createUsername || !createEmail || !createPassword) {
                    return [2 /*return*/];
                }
                newName = createUsername.value;
                newPassword = createPassword.value;
                newEmail = createEmail.value;
                registrationData = {
                    username: newName,
                    password: newPassword,
                    email: newEmail,
                };
                return [4 /*yield*/, create(registrationData)];
            case 1:
                registrationResponse = _a.sent();
                alert(registrationResponse.message);
                return [2 /*return*/];
        }
    });
}); });
// registration modal
// select registration modal elements from the DOM
var registrationDialog = document.querySelector("#registration_dialog");
var registerBtn = document.getElementById("register");
var closeRegistrationBtn = document.getElementById("close_registration");
//buttons' event listeners and their functions for opening and closing
var openRegistration = function (e) {
    e.preventDefault();
    registrationDialog.showModal();
};
var closeRegistration = function (e) {
    e.preventDefault();
    registrationDialog.close();
};
registerBtn.addEventListener("click", openRegistration);
closeRegistrationBtn.addEventListener("click", closeRegistration);
// login modal
// select login modal elements from the DOM
var loginDialog = document.getElementById("login_dialog");
var loginBtn = document.getElementById("login");
var closeloginBtn = document.getElementById("close_login");
//buttons' event listeners and their functions for opening and closing
var openLogin = function (e) {
    e.preventDefault();
    loginDialog.showModal();
};
var closeLogin = function (e) {
    e.preventDefault();
    loginDialog.close();
};
loginBtn.addEventListener("click", openLogin);
closeloginBtn.addEventListener("click", closeLogin);
// profile modal (with profile info, update profile and upload avatar)
// select profile modal elements from the DOM
var profileDialog = document.getElementById("profile_dialog");
var openprofileBtn = document.getElementById("profile");
var closeprofileBtn = document.getElementById("close_profile");
// buttons' event listeners and their functions for opening and closing
var openProfile = function (e) {
    e.preventDefault();
    profileDialog.showModal();
};
var closeProfile = function (e) {
    e.preventDefault();
    profileDialog.close();
};
openprofileBtn.addEventListener("click", openProfile);
closeprofileBtn.addEventListener("click", closeProfile);
// creating restaurant table
var modal = document.getElementById('info');
if (!modal) {
    throw new Error('Modal not found');
}
var calculateDistance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
};
var createTable = function (restaurants) {
    var table = document.querySelector('table');
    if (!table) {
        throw new Error('Table not found');
    }
    table.innerHTML = '';
    restaurants.forEach(function (restaurant) {
        var tr = (0, components_1.restaurantRow)(restaurant);
        table.appendChild(tr);
        tr.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
            var allHighs, dayMenu_1, weekMenu_1, info, infoModal, closeIcon, day_btn, week_btn, day_menu_1, week_menu_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        allHighs = document.querySelectorAll('.highlight');
                        allHighs.forEach(function (high) {
                            high.classList.remove('highlight');
                        });
                        // add highlight
                        tr.classList.add('highlight');
                        // add restaurant data to modal
                        modal.innerHTML = '';
                        return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + "/restaurants/daily/".concat(restaurant._id, "/en"))];
                    case 1:
                        dayMenu_1 = _a.sent();
                        return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + "/restaurants/weekly/".concat(restaurant._id, "/en"))];
                    case 2:
                        weekMenu_1 = _a.sent();
                        return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + "/restaurants/".concat(restaurant._id))];
                    case 3:
                        info = _a.sent();
                        infoModal = (0, components_1.restaurantModal)(info);
                        modal.insertAdjacentHTML('beforeend', infoModal);
                        modal.showModal();
                        closeIcon = document.getElementById('close');
                        closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.addEventListener('click', function () {
                            modal.close();
                        });
                        day_btn = document.getElementById('dayInfo');
                        week_btn = document.getElementById('weekInfo');
                        day_menu_1 = document.getElementById('day_menu');
                        week_menu_1 = document.getElementById('week_menu');
                        // buttons' event listeners for displaying daily and weekly menu
                        day_btn === null || day_btn === void 0 ? void 0 : day_btn.addEventListener('click', function () {
                            var dayMenuHtml = (0, components_1.dayModal)(dayMenu_1);
                            day_menu_1.innerHTML = dayMenuHtml;
                            day_menu_1.showModal();
                            modal.close();
                        });
                        week_btn === null || week_btn === void 0 ? void 0 : week_btn.addEventListener('click', function () {
                            var weekMenuHtml = (0, components_1.weekModal)(weekMenu_1);
                            week_menu_1.innerHTML = weekMenuHtml;
                            week_menu_1.showModal();
                            modal.close();
                        });
                        day_menu_1.addEventListener('click', function () {
                            day_menu_1.close();
                            modal.showModal();
                        });
                        week_menu_1.addEventListener('click', function () {
                            week_menu_1.close();
                            modal.showModal();
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        modal.innerHTML = (0, components_1.errorModal)(error_1.message);
                        modal.showModal();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    });
};
var error = function (err) {
    console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
};
// get the closest restaurant based on the user's location
var success = function (pos) { return __awaiter(void 0, void 0, void 0, function () {
    var crd_1, restaurants_1, sodexoBtn, compassBtn, resetBtn, cityDropdown_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                crd_1 = pos.coords;
                return [4 /*yield*/, (0, functions_1.fetchData)(variables_1.apiUrl + '/restaurants')];
            case 1:
                restaurants_1 = _a.sent();
                console.log(restaurants_1);
                restaurants_1.sort(function (a, b) {
                    var x1 = crd_1.latitude;
                    var y1 = crd_1.longitude;
                    var x2a = a.location.coordinates[1];
                    var y2a = a.location.coordinates[0];
                    var distanceA = calculateDistance(x1, y1, x2a, y2a);
                    var x2b = b.location.coordinates[1];
                    var y2b = b.location.coordinates[0];
                    var distanceB = calculateDistance(x1, y1, x2b, y2b);
                    return distanceA - distanceB;
                });
                createTable(restaurants_1);
                sodexoBtn = document.querySelector('#sodexo');
                compassBtn = document.querySelector('#compass');
                resetBtn = document.querySelector('#reset');
                if (!sodexoBtn || !compassBtn || !resetBtn) {
                    throw new Error('Button not found');
                }
                sodexoBtn.addEventListener('click', function () {
                    var sodexoRestaurants = restaurants_1.filter(function (restaurant) { return restaurant.company === 'Sodexo'; });
                    console.log(sodexoRestaurants);
                    createTable(sodexoRestaurants);
                });
                compassBtn.addEventListener('click', function () {
                    var compassRestaurants = restaurants_1.filter(function (restaurant) { return restaurant.company === 'Compass Group'; });
                    console.log(compassRestaurants);
                    createTable(compassRestaurants);
                });
                resetBtn.addEventListener('click', function () {
                    createTable(restaurants_1);
                });
                cityDropdown_1 = document.getElementById('cityDropdown');
                // Add an event listener to the dropdown to handle the selection
                cityDropdown_1.addEventListener('change', function () {
                    // Get the selected city value from the dropdown
                    var selectedCity = cityDropdown_1.value;
                    // Filter restaurants based on the selected city
                    var filteredRestaurants = restaurants_1.filter(function (restaurant) { return restaurant.city === selectedCity; });
                    // Update the table with the filtered results
                    createTable(filteredRestaurants);
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                modal.innerHTML = (0, components_1.errorModal)(error_2.message);
                modal.showModal();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
navigator.geolocation.getCurrentPosition(success, error, variables_1.positionOptions);
var checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});
