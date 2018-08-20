// temporary workaround for

'use strict'

var lineToSearch = `import schema from  '..\\embeddedPostgraphile\\index'`;
var lineToWrite = `import schema from  '../embeddedPostgraphile/index'`;

var lineToSearch2 = `...args)`;
var lineToWrite2 = `...args: any[])`;

var lineToInsert = '/* tslint:disable */'

var fileToPatch = 'src/generated/postgraphile.ts';

var fs = require('fs')
fs.readFile(fileToPatch, 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    if (data.includes(lineToWrite) && data.includes(lineToWrite2) && data.startsWith(lineToInsert)) {
        // already patched, nothing to do
        process.exit(0);
    }

    var result = data.replace(lineToSearch, lineToWrite);
    if (result === data) {
        console.log(`[bindingFix.js] can not find the line '${lineToSearch}' for patching, skipping...`);
    }

    data = result;
    result = data.replace(lineToSearch2, lineToWrite2);
    if (result === data) {
        console.log(`[bindingFix.js] can not find the line '${lineToSearch2}' for patching, skipping...`);
    }

    data = result;
    if (data.startsWith(lineToInsert)) {
        console.log(`[bindingFix.js] tslint is already disabled, skipping...`);
    } else {
        result = `${lineToInsert}\n${data}`;
    }

    fs.writeFile(fileToPatch, result, 'utf8', function (err) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
    });
});
