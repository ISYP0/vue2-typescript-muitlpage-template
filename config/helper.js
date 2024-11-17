const { glob } = require("glob");
const getEntries = () => {
    const entries = glob.sync('src/programs/**/public/index.html');
    return entries.reduce((module , cur) => {
        const name = cur.match(/programs\/(.*?)\/public\/index.html/)
        console.log(name, cur)
        module[name[1]] = {
            entry: `src/programs/${name[1]}/main.ts`,
            filename: `${name[1]}/index.html`,
            template: `src/programs/${name[1]}/public/index.html`,
            title: name[1]
        }
        return module;
    }, {})
}

module.exports = {getEntries}