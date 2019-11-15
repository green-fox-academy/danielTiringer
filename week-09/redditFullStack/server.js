'use strict';

const server = require('./backend');
const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
