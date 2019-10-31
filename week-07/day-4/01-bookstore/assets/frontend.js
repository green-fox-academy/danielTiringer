'use strict';

let unfilteredQuery = new XMLHttpRequest();
unfilteredQuery.open('GET', "http://localhost:3000/", true);
unfilteredQuery ? makeTable(unfilteredQuery) : undefined;

let filteredQuery = new XMLHttpRequest();
filteredQuery.open('GET', 'http://localhost:3000/books', true);
filteredQuery ? makeTable(filteredQuery) : undefined;

function makeTable (sentData) {
	let table = document.querySelector('table');
	sentData.onload = function () {
		let queryData = JSON.parse(sentData.responseText);
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
	sentData.send();
}
