import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchUsers = async() =>{
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const fetchPosts = async() => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const fetchComments = async () =>{
    const response = await axios.get(`${API_URL}/comments`);
    return response.data;
};
