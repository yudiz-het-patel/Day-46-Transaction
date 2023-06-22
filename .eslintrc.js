// module.exports = {
//     "env": {
//         "browser": true,
//         "commonjs": true,
//         "es2021": true
//     },
//     "extends": "eslint:recommended",
//     "overrides": [
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest"
//     },
//     "rules": {
//     }
// }

 module.exports = {
   env: {
     commonjs: true,
     es2021: true,
     node: true,
   },
   extends: 'standard',
   overrides: [],
   parserOptions: {
     ecmaVersion: 'latest',
   },
   rules: {},
   scripts: {
     'lint:fix': 'eslint --fix ./*.js',
   },
 }