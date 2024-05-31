import axios from "axios";
const axiosBase = axios.create({
    //baseURL: "http://localhost:5500/api",
    baseURL: "https://evangadi-forum-backend-14.onrender.com",
});

export default axiosBase;
