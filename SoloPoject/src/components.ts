import { Restaurant } from "./interfaces/Restaurant";
import { MenuData } from "./interfaces/Menu";

const restaurantRow = (restaurant: Restaurant) => {
  const { name, address, company } = restaurant;
  const tr = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.innerText = name;
  const addressCell = document.createElement('td');
  addressCell.innerText = address;
  const companyCell = document.createElement('td');
  companyCell.innerText = company;
  tr.appendChild(nameCell);
  tr.appendChild(addressCell);
  tr.appendChild(companyCell);
  return tr;
};

const restaurantModal = (restaurant: Restaurant, menuData: MenuData) => {
  const { name, address, city, postalCode, phone, company } = restaurant;
  let dailyMenu = menuData.daily;
  let weeklyMenu = menuData.weekly;

  let html = `<h3>${name}</h3>
    <p>${company}</p>
    <p>${address} ${postalCode} ${city}</p>
    <p>${phone}</p>
    <table>
      <tr>
        <th>Course</th>
        <th>Diet</th>
        <th>Price</th>
      </tr>
    `;

  const selectedMenu = dailyMenu; // You can set the default menu type here

  if (selectedMenu && Array.isArray(selectedMenu)) {
    selectedMenu.forEach((course) => {
      const { name, diets, price } = course;
      html += `
        <tr>
          <td>${name}</td>
          <td>${diets ?? ' - '}</td>
          <td>${price ?? ' - '}</td>
        </tr>
        `;
    });
  } else {
    html += '<tr><td colspan="3">Menu not available.</td></tr>';
  }

  html += '</table>';
  return html;
};

const errorModal = (message: string) => {
  const html = `
        <h3>Error</h3>
        <p>${message}</p>
        `;
  return html;
};

export { restaurantRow, restaurantModal, errorModal };
