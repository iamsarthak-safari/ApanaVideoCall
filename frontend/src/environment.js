let IS_PROD = process.env.NODE_ENV === 'production';
const server = IS_PROD ?
    "https://apanavideocallbackend-k1d6.onrender.com" :
    "http://localhost:8000";


export default server;