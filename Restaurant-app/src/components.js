"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantModal = exports.dayModal = exports.errorModal = exports.weekModal = exports.restaurantRow = void 0;
var restaurantRow = function (restaurant) {
    var name = restaurant.name, address = restaurant.address, company = restaurant.company;
    var tr = document.createElement('tr');
    var nameCell = document.createElement('td');
    nameCell.innerText = name;
    var addressCell = document.createElement('td');
    addressCell.innerText = address;
    var companyCell = document.createElement('td');
    companyCell.innerText = company;
    tr.appendChild(nameCell);
    tr.appendChild(addressCell);
    tr.appendChild(companyCell);
    return tr;
};
exports.restaurantRow = restaurantRow;
var weekModal = function (weeklymenu) {
    var html = "\n  <h2>Week menu</h2> <p>Click anywhere to go back</p>";
    weeklymenu.days.forEach(function (menu) {
        var date = menu.date;
        html += "<div>\n      <table>\n      <h3>".concat(date, "</h3>\n      <tr>\n          <th id=\"course_label\">Course</th>\n          <th id=\"diet_label\">Diet</th>\n          <th id=\"price_label\">Price</th>");
        menu.courses.forEach(function (course) {
            var name = course.name, diets = course.diets, price = course.price;
            html += " <table>\n        </tr>\n              <tr>\n                <td id=\"menu_name\">".concat(name, "</td>\n                <td id=\"diet_info\">").concat(diets !== null && diets !== void 0 ? diets : ' - ', "</td>\n                <td id=\"price\">").concat(price !== null && price !== void 0 ? price : ' - ', "</td>\n              </tr>\n              ");
        });
    });
    html += "</table></div>";
    return html;
};
exports.weekModal = weekModal;
var dayModal = function (menu) {
    var html = "\n  <h2>Day Menu</h2> <p>Click anywhere to go back</p>\n  <table>\n      <tr>\n        <th>Course</th>\n        <th>Diet</th>\n        <th>Price</th>\n      </tr>";
    menu.courses.forEach(function (course) {
        var name = course.name, diets = course.diets, price = course.price;
        html += "\n          <tr>\n            <td>".concat(name, "</td>\n            <td>").concat(diets !== null && diets !== void 0 ? diets : ' - ', "</td>\n            <td>").concat(price !== null && price !== void 0 ? price : ' - ', "</td>\n          </tr>\n          ");
    });
    html += '</table></div>';
    return html;
};
exports.dayModal = dayModal;
var restaurantModal = function (restaurant) {
    var name = restaurant.name, address = restaurant.address, city = restaurant.city, postalCode = restaurant.postalCode, phone = restaurant.phone, company = restaurant.company;
    var html = "\n  <i class=\"fa-solid fa-circle-xmark fa-2xl\" id=\"close\"></i>\n  <h3>".concat(name, "</h3>\n    <p>").concat(company, "</p>\n    <p>").concat(address, " ").concat(postalCode, " ").concat(city, "</p>\n    <p>").concat(phone, "</p>\n    ");
    html += "<button id=\"weekInfo\">Open week menu</button>\n  <button id=\"dayInfo\">Open day menu</button>";
    return html;
};
exports.restaurantModal = restaurantModal;
var errorModal = function (message) {
    var html = "\n        <h3>Error</h3>\n        <p>".concat(message, "</p>\n        ");
    return html;
};
exports.errorModal = errorModal;
