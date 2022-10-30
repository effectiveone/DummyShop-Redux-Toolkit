export const apiKey = {
    BASE_URL: process.env.NEXT_ENDPOINT_URL
};
const ApiConfig = {
    API_ENDPOINT_URL: 'https://dummyjson.com',
    image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default ApiConfig;
