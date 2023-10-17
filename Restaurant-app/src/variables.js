"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionOptions = exports.uploadUrl = exports.apiUrl = void 0;
var apiUrl = 'https://student-restaurants.azurewebsites.net/api/v1';
exports.apiUrl = apiUrl;
var uploadUrl = 'https://student-restaurants.azurewebsites.net/uploads/';
exports.uploadUrl = uploadUrl;
var positionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
exports.positionOptions = positionOptions;
