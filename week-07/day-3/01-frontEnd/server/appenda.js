'use strict';

const appenda = (req, res) => {
	res.status(200) &&
 	res.json( { appended: `${req.params.appendTo}a` } )
}

module.exports = appenda;
