'use strict';

let queryRows = new XMLHttpRequest();

queryRows.open('GET', "localhost:3000", true);
let table = document.querySelector('table');

queryRows.onload = function () {
	let queryData = JSON.parse(queryData.responseText);

	queryData.forEach(row => {
		let tableRow = document.createElement('tr');
		let bookName = document.createElement('td');
		let authorName = document.createElement('td');
		let category = document.createElement('td');
		let publicist = document.createElement('td');
		let price = document.createElement('td');
		bookName.appendChild(document.createTextNode(row.book_name));
		authorName.appendChild(document.createTextNode(row.aut_name));
		category.appendChild(document.createTextNode(row.cate_descrip));
		publicist.appendChild(document.createTextNode(row.pub_name));
		price.appendChild(document.createTextNode(row.book_price));
		tableRow.appendChild(bookName);
		tableRow.appendChild(authorName);
		tableRow.appendChild(category);
		tableRow.appendChild(publicist);
		tableRow.appendChild(price);
		table.appendChild(tableRow);
	})
}
giphyRequest.send();

