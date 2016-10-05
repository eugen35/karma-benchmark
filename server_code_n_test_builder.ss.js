//В общем-то данный файлик делает все файлы с кодом программы, а также все файлы с тестами, находя их по регэкспам ниже и подключает все в область видимости KarmaJS

// require all *.js in spec/, but not *.cs.js`
const testsContext = require.context('spec/', true, /^((?!\.cs\.).)*\.js$/);

testsContext.keys().forEach(testsContext);

// require all *.js in src/, but not *.cs.js`
const modulesContext = require.context('src/', true, /^((?!\.cs\.).)*\.js$/);

modulesContext.keys().forEach(modulesContext);
