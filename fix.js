const fs = require('fs');
let txt = fs.readFileSync('index.html', 'utf8');
txt = txt.replace(/title="/g, 'data-tooltip="');
fs.writeFileSync('index.html', txt);
