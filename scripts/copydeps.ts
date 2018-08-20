// the script analyses production dependencies recursively
// and publishes required node modules to build directory

import * as cp from 'child_process';
import * as fs from 'fs';
const deps = cp.execSync('yarn list --prod').toString();
const packs = deps.split('\n').map(l => {
    const words = l.split(' ');
    return words[words.length - 1].split('@')[0];
}).filter(i => i.length !== 0);

if (fs.existsSync('build/node_modules')) {
    cp.execSync(`rm -Rf build/node_modules`);
}
fs.mkdirSync('build/node_modules');
const copied: string[] = [];
packs.forEach(p => {
    if (!copied.includes(p) && fs.existsSync(`node_modules/${p}`)) {
        console.log(`coping: node_modules/${p} => build/node_modules/${p}`);
        cp.execSync(`cp -r node_modules/${p} build/node_modules`).toString();
        copied.push(p);
    }
});
