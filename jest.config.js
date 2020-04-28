module.exports = {
    clearMocks: true,
    roots: [
        "<rootDir>/src"
    ],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
    ],
}