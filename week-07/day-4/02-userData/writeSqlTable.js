'use strict';

const writeSqlTable = (csvData) => {
	csvData.forEach(csvRow => {`INSERT INTO customers VALUES (
		${csvRow.prefix},
		${csvRow.first_name},
		${csvRow.last_name},
		${csvRow.address},
		${csvRow.height},
		${csvRow.bitcoin_address},
		${csvRow.color_preference}
	)`});
};

module.exports = writeSqlTable;
