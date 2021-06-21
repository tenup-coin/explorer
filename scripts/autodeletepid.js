var findRemoveSync = require('find-remove');
var path = require('path');
const pidpath = path.resolve(__dirname + '/../tmp');

findRemoveSync(pidpath, {age: {seconds: 600}, files: 'index.pid'});