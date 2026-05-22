import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})



export const register = async ({username, email, password}) => {
    try {
        const response = await api.post("/api/auth/register", {
            username,
            email,
            password
        })
        return response.data;
    }
    catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
}

export const login = async ({email, password}) => {
    try {
        const response = await api.post("/api/auth/login", {
            email,
            password
        })
        return response.data;
    }
    catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}

export const logout = async () => {
    try {
        const response = await api.post("/api/auth/logout");
        return response.data;
    }
    catch (error) {
        console.error("Logout error:", error);
        throw error;
    }
}

export const getMe = async () => {
    try {
        const response = await api.get("/api/auth/get-me");
        return response.data;
    }
    catch (error) {
        console.error("Get Me error:", error);
        throw error;
    }
}