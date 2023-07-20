import axios from "axios";
import { MovieDescription } from "../shared/types";

interface fetchMoviesReturn {
    token: string,
    data: MovieDescription[];
}

export const fetchMovies = async (): Promise<fetchMoviesReturn> => {
    const { VITE_LOGIN_USERNAME: username, VITE_LOGIN_PASSWORD: password, VITE_BASE_SERVER_URL: baseUrl } = import.meta.env;
    let resp = await axios.post(`${baseUrl}/api/admin/login`, { username, password }); // Fetch token from server
    const { token }: { token: string; } = resp.data;
    const Authorization = `Bearer ${token}`;
    resp = await axios.get(`${baseUrl}/api/admin/GetMovies`, { headers: { Authorization } }); // Provide token to GetMovies route
    return new Promise(resolve => resolve({ token, data: resp.data as MovieDescription[] }));
};