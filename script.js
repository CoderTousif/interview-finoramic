const fs = require('fs');
const util = require('util');
// const { exec } = require('child_process');
const exec = util.promisify(require('child_process').exec);

const packages = JSON.parse(
    fs.readFileSync(`${__dirname}/requirements.json`, 'utf-8')
);
// pip install -r requirements.txt;
// pip install "SomeProject==1.4"
// console.log(packages.Dependencies);

const installPkg = async () => {
    console.log('This program requires pip3');
    const failed = new Map();

    for (const key in packages.Dependencies) {
        // console.log(packages.Dependencies[key]);
        try {
            console.log(`Installing ${packages.Dependencies[key]} ...`);
            const { stdout, stderr } = await exec(
                `pip3 install "${packages.Dependencies[key]}"`
            );

            console.log(`stdout: ${stdout}`);
            // if (stderr) console.error('stderr:', stderr);
        } catch (err) {
            failed.set(key, packages.Dependencies[key]);
            console.log(`ERROR: ${err}`);
        }
    }

    if (failed.size > 0) {
        console.log('++++++++++Failed Packages++++++++++');
        console.log(`Total number of failed packages: ${failed.size}`);
        for (const [key, value] of failed) {
            console.log(value);
        }
        // console.log(...failed.values());
        console.log('+++++++++++++++++++++++++++++++++++');
    } else {
        console.log('Installation successful');
    }
    return;
};

installPkg();

// async function lsExample() {
//     const { stdout, stderr } = await exec('ls');
//     console.log('stdout:', stdout);
//     console.error('stderr:', stderr);
// }

// exec(
//     `pip3 install "${packages.Dependencies[key]}"`,
//     (error, stdout, stderr) => {
//         if (error) {
//             failed.set(key, packages.Dependencies[key]);
//             console.error(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             failed.set(key, packages.Dependencies[key]);
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`stdout: ${stdout}`);
//     }
// );
