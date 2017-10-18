const fs = require('fs');
const readline = require('readline');
const path = require('path');

const dir = process.argv[2] || '2016';
try {
    if (!fs.statSync(path.resolve(__dirname, dir)).isDirectory()) {
        process.exit(-1);
    }
} catch (e) {
    process.exit(-1);
}

const input = fs.createReadStream(path.resolve(__dirname, dir, 'list.txt'));

const rl = readline.createInterface({
    input: input,
    output: process.stdout
});

let _class = 0;
let data = [];

rl.on('line', (line) => {
    line = line.trim();
    if (String(Number(line)) === line)
        _class = Number(line);
    else {
        let result = line.match(/^(\d+)\s+(.+)\s+(F\d+)$/);
        let student = {
            id: result[1],
            name: result[2],
            class: result[3]
        };
        data.push(student);
        //console.log(student);
    }
});

rl.on('close', () => {
    const filename = path.resolve(__dirname, dir, 'data.js');
    const str = `var __student_data = ${JSON.stringify(data, null, 2)};`;
    fs.writeFileSync(filename, str);
    console.log(`data write to ${filename}`);
});
