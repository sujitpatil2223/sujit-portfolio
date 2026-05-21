const path = require('path');
const lucide = require(path.resolve('node_modules/lucide-react/dist/cjs/lucide-react.js'));
const keys = Object.keys(lucide);
console.log('Keys with hub:', keys.filter(k => k.toLowerCase().includes('hub')));
console.log('Keys with linked:', keys.filter(k => k.toLowerCase().includes('linked')));
