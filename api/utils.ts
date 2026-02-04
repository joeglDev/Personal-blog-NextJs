export const getBaseUrl = () =>
    process.env.ENVIRONMENT === 'development' ? "http://localhost:5000" : ""; // TODO: Add production url here