const input ='./css';
const output = './minify';

const fs = require('fs');

var fileArr = [];

fs.readdirSync(input).forEach(file => {
	if(file.endsWith('.css'))
		fileArr.push(file);
})

fileArr.forEach(file => {
	fs.readFile(input+'/'+file,function(err, data) {
		bufferText = data.toString().replace(/\s/g, "");
		fs.appendFileSync(output+'/result.css',bufferText);
	});
})

