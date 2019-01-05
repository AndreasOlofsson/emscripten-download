const package = require('../package.json');

const child_process = require('child_process');

require('./download').downloadAndExtract(() => {
    if (process.platform == 'win32') {
        child_process.execSync(`.\\bin\\emsdk-portable\\emsdk.bat install sdk-${ package.emsdk.version }-64bit`, { stdio: 'inherit' });
        child_process.execSync(`.\\bin\\emsdk-portable\\emsdk.bat activate sdk-${ package.emsdk.version }-64bit`, { stdio: 'inherit' });
    } else {
        child_process.execSync(`./bin/emsdk-portable/emsdk install sdk-${ package.emsdk.version }-64bit`, { stdio: 'inherit' });
        child_process.execSync(`./bin/emsdk-portable/emsdk activate sdk-${ package.emsdk.version }-64bit`, { stdio: 'inherit' });
    }
});
