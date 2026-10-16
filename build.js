const fs = require('node:fs');
const path = require('node:path');

const output = path.join(__dirname, 'dist');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);

for (const file of ['index.html', 'styles.css', 'script.js']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(output, file));
}
fs.cpSync(path.join(__dirname, 'assets'), path.join(output, 'assets'), { recursive: true });
