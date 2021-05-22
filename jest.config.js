module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        "./src/tests/__index.js"
    ],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    }
}