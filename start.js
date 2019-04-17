require('babel-register')({
    presets: ['node8'],
    /*plugins: [
        [
            require("babel-plugin-module-resolver"),
            {
                "root": "./",
                "alias": {
                    "@models": "./src/app/models",
                    "@controllers": "./src/controllers",
                    "@routes": "./src/routes",
                    "@repositories": "./src/repositories"
                }
            }
        ]
    ]*/
})

module.exports = require("./server.js");