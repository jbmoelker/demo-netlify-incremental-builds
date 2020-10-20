const fs = require('fs');

const now = new Date();
const time = `${now.getHours()}:${now.getMinutes()}`;

fs.writeFile(`dist/${time}.json`, JSON.stringify({ time }), () => console.log(time));