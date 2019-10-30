'use strict';

const appenda = (req, res) => {
    let appendedResponse = {
        "appended": `${req.params.appendTo}a`
    }
    res.send(appendedResponse);
}

module.exports = appenda;
