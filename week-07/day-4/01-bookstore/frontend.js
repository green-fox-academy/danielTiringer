'use strict';

let queryRows = new XMLHttpRequest();
console.log(queryRows);
queryRows.open('GET', "/", true);
let table = document.querySelector('table');
console.log('Ez megtortent');
queryRows.onload = function () {
	console.log(queryRows.responseText);
	let queryData = JSON.parse(queryRows.responseText);
	console.log(queryData);
	queryData.forEach(row => {
		let tableRow = document.createElement('tr');
		let bookName = document.createElement('td');
		let authorName = document.createElement('td');
		let category = document.createElement('td');
		let publisher = document.createElement('td');
		let price = document.createElement('td');
		bookName.appendChild(document.createTextNode(row.book_name));
		authorName.appendChild(document.createTextNode(row.aut_name));
		category.appendChild(document.createTextNode(row.cate_descrip));
		publisher.appendChild(document.createTextNode(row.pub_name));
		price.appendChild(document.createTextNode(row.book_price));
		tableRow.appendChild(bookName);
		tableRow.appendChild(authorName);
		tableRow.appendChild(category);
		tableRow.appendChild(publisher);
		tableRow.appendChild(price);
		table.appendChild(tableRow);
	})
}
queryRows.send();
