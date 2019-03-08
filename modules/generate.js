import { apiUrl } from '../utils/config';

const axios = require('axios');
const fs = require('fs');

async function generateCache(route, path, multiple = false, dir = null) {
    let currentTry = 0;

    const run = async () => {
        try {
            const res = await axios.get(route, {
                timeout: 10000,
            });

            if (path) {
                fs.writeFile(path, JSON.stringify(res.data), (err) => {
                    if (err) throw err;
                    // console.log(`Generated: ${path}`);
                });
            }

            if (multiple) {
                res.data.forEach((page) => {
                    fs.writeFile(`${dir}${page.id}.json`, JSON.stringify(page), (err) => {
                        if (err) throw err;
                        // console.log(`Generated: ${dir}${page.id}.json`);
                    });
                });
            }
        } catch (error) {
            console.log(`Error getting route: ${route}`);
            currentTry++;
            if (currentTry < 5) {
                console.log(`Retrying getting route: ${route}`);
                run();
            }
        }
    };

    run();
}

export default async function generateJsonFiles() {
    const dir = 'static/json/';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    return Promise.all([generateCache(`${apiUrl}/shows`, false, true, dir)]);
}

module.exports = function () {
    this.nuxt.hook('build:before', async (generator) => {
        if (generator.nuxt.options.dev) {
            console.log('Starting generating JSON files');
            await generateJsonFiles(generator.nuxt.options.generate.apiCacheDir);
            console.log('Done generating JSON files');
        }
    });
    this.nuxt.hook('generate:before', async (generator) => {
        console.log('Starting generating JSON files');
        await generateJsonFiles(generator.nuxt.options.generate.apiCacheDir);
        console.log('Done generating JSON files');
    });
};
